function problem7(user, friends, visitors) {
  const RECOMMEND = new Map();
  const FRIENDS = MAKE_FRIENDS_LIST(friends);
  const VISITORS = MAKE_COUNT_VISITORS(visitors);
  const USER_FRIENDS = MAKE_USER_FRIENDS(FRIENDS, user);
  const NOW_FRIENDS = [];

  USER_FRIENDS.forEach((person) => {
    if (!RECOMMEND.has(person)) RECOMMEND.set(person, 10);
    else RECOMMEND.set(person, RECOMMEND.get(person) + 10);
  });

  VISITORS.forEach((point, name) => {
    if (RECOMMEND.has(name)) RECOMMEND.set(name, RECOMMEND.get(name) + point);
    else RECOMMEND.set(name, point);
  });

  FRIENDS.forEach((friends, name) => {
    if (friends.includes(user)) NOW_FRIENDS.push(name);
  });

  const SORTED_ARRAY = SORTING_MAP(RECOMMEND);

  for (let k of NOW_FRIENDS) {
    if (SORTED_ARRAY.includes(k))
      SORTED_ARRAY.splice(SORTED_ARRAY.indexOf(k), 1);
  }

  return SORTED_ARRAY;
}

const MAKE_FRIENDS_LIST = (friends) => {
  const friends_map = new Map();

  friends.forEach((pair) => {
    const [firends1, firends2] = pair;

    if (!friends_map.has(firends1)) friends_map.set(firends1, []);
    if (!friends_map.has(firends2)) friends_map.set(firends2, []);

    friends_map.get(firends1).push(firends2);
    friends_map.get(firends2).push(firends1);
  });
  return friends_map;
};

const MAKE_COUNT_VISITORS = (visitors) => {
  const visitors_map = new Map();
  visitors.forEach((visitor) => {
    if (!visitors_map.has(visitor)) visitors_map.set(visitor, 1);
    else visitors_map.set(visitor, visitors_map.get(visitor) + 1);
  });
  return visitors_map;
};

const MAKE_USER_FRIENDS = (friends_list, user) => {
  const user_friends_list = [];
  friends_list.forEach((person) => {
    if (person.includes(user)) user_friends_list.push(...person);
  });
  for (let i = 0; i < user_friends_list.length; i++) {
    if (user_friends_list[i] === user) user_friends_list.splice(i, 1);
  }
  return user_friends_list;
};

const SORTING_MAP = (map) => {
  const mapEntries = Array.from(map.entries());

  const sortedArray = mapEntries.sort((a, b) => {
    if (a[1] !== b[1]) {
      return b[1] - a[1];
    }
    // return a[0].localeCompare(b[0])
    if (a[0] < b[0]) {
      return -1;
    } else if (a[0] > b[0]) {
      return 1;
    } else {
      return 0;
    }
  });

  return sortedArray.map((v) => v[0]);
};

module.exports = problem7;
