function solution(str, ending){
  // TODO: complete

  const string1 = str.toLowerCase();
  const string2 = ending.toLowerCase();
  return string1.endsWith(string2);
}

/*
PREP
2 Parameters
Both strings
Could be any case

Returns
true if second string parameter contained at the end of the first string parameter
false if second string parameter not at the end of the first string parameter

Examples
solution('abc', 'bc') // returns true
solution('abc', 'd') // returns false
solution('aabBCa','bca')// returns true
solution('abcde','bcd')// returns false
solution('abcde', 'cde') // returns true
solution('abcde', 'abc'), // returns false

Pseudo Code
convert both parameters to same case lowercase
check if the second parameter is contained in the first parameter
check if the location of the second string is at the end of the first string
return true or false based on comparison

str.toLowerCase().includes(ending.toLowerCase(),str.length-ending.length);