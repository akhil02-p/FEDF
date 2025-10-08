function isPalindrome(str) {
  const cleaned = str.toLowerCase().replace(/[^a-z0-9]/g, "");
  let i = 0, j = cleaned.length - 1;
  while (i < j) {
    if (cleaned[i++] !== cleaned[j--]) return false;
  }
  return true;
}
