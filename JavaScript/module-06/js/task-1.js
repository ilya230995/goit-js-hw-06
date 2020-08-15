import users from "./users.js";

// TASK 1

const getUserNames = (users) => {
  const usersName = users.map(({ name }) => name);
  return usersName;
};

console.log(getUserNames(users));


// TASK-2

const getUsersWithEyeColor = (users, color) => {
  return users.filter((eye) => eye.eyeColor.includes(color));
};

console.log(getUsersWithEyeColor(users, "blue")); 


// TASK-3

const getUsersWithGender = (users, gender) => {
  const usersFilteredByGender = users.filter(
    (person) => person.gender === gender
  );
  const userName = usersFilteredByGender.map(({ name }) => name);
  return userName;
};

console.log(getUsersWithGender(users, "male"));


// TASK-4

const getInactiveUsers = (users) => {
  return users.filter((user) => !user.isActive);
};

console.log(getInactiveUsers(users));


// TASK-5

const getUserWithEmail = (users, email) => {
  return users.find((user) => user.email === email);
};

console.log(getUserWithEmail(users, "shereeanthony@kog.com"));
console.log(getUserWithEmail(users, "elmahead@omatom.com"));


// TASK-6

const getUsersWithAge = (users, min, max) => {
  return users.filter((user) => user.age >= min && user.age <= max);
};

console.log(getUsersWithAge(users, 20, 30));

console.log(getUsersWithAge(users, 30, 40));


// TASK-7

const calculateTotalBalance = (users) => {
  const totalUserBalance = users.reduce(
    (totalBalance, user) => totalBalance + user.balance,
    0
  );
  return totalUserBalance;
};

console.log(calculateTotalBalance(users));


// TASK-8

const getUsersWithFriend = (users, friendName) => {
  const usersSearchedByFriends = users.filter((names) =>
    names.friends.includes(friendName)
  );

  const userName = usersSearchedByFriends.reduce((allNames, user) => {
    allNames.push(user.name);

    return allNames;
  }, []);

  return userName;
};

console.log(getUsersWithFriend(users, "Briana Decker"));
console.log(getUsersWithFriend(users, "Goldie Gentry"));


// TASK-9

const getNamesSortedByFriendsCount = (users) => {
  const sortByFriendsCount = users.sort(
    (a, b) => a.friends.length - b.friends.length
  );
  const sortedNames = sortByFriendsCount.map(({ name }) => name);
  return sortedNames;
};

console.log(getNamesSortedByFriendsCount(users));


// TASK-10

const getSortedUniqueSkills = (users) => {
  const userSkills = users.reduce((allSkills, user) => {
    allSkills.push(...user.skills);
    return allSkills;
  }, []);


  const uniqueSkills = userSkills.reduce((acc, skill) => {
    if (acc.includes(skill)) {  
      return acc;
    }
    acc.push(skill);
    return acc;
  }, []);


  return uniqueSkills.sort();
};

console.log(getSortedUniqueSkills(users));