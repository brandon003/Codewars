
function validParentheses(parens) {
	// your code here ..

	let counter = 0;

	for (let i = 0; i < parens.length; i++) {

		if (parens[i] == '(') counter++
		if (parens[i] == ')') counter--

		if (counter < 0) return false;

	}

	return counter == 0;
}


/*
PREP

Parameter
One Parameter
string of parentheses
0 <= input.length <= 100

Returns
Returns True if the parentheses are in order
Returns False if not in order


Examples
"()"              =>  true
""              =>  true
")(()))"          =>  false
"("               =>  false
"(())((()())())"  =>  true


Pseudo Code
check total of opening brackets and closing brackets




array = [[1,2,3],
		 [8,9,4],
		 [7,6,5]]