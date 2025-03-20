function isAnagram(str1, str2) {
  str1 = str1.toLowerCase().str.Replace(/\s/g, "");
  str2 = str2.toLowerCase().str.Replace(/\s/g, "");

  if (str1.length !== str2.length) {
    console.log("false");
  }

  if (str1.sort().split().join() == str2.sort().split().join()) {
    console.log("true");
  }
}

isAnagram("Spar", "Rasp");
