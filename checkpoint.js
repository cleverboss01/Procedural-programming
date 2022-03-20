// Instructions
// While creating your algorithm, you should: 

// Use array for presenting the vector.
// Use nested loop (a loop inside another)
// Use different types of passing parameters

// At this checkpoint, you are demanded to write an algorithm that fulfill the following: 

// Name: Dot product
// Description:
//1. Write a procedure, called dot_product which calculates in the variable ps, the dot(scalar) product of v1 and v2 (v1 and v2 are vectors of IR)

function dotProduct (v1, v2) {
    var ps = v1 * v2;
    return ps;
}

//2. Write an algorithm which determines, for n pairs of given vectors, whether two vectors of given IR are orthogonal, by calling the procedure defined in the previous question. The dot product of two orthogonal vectors is zero.

const v1 = [1,2,3,4,5];
const v2 = [3,4,5,2,7];

const orthogonal = v1.filter( n => {
    for(i=0; i<v1.length; i++){
        for (j=0; j<v2.length; j++){
            if(n == v2[j]){
                return true;
            }
        }
    }
});

// 3. Modify the previous algorithm if you use a dot_product function instead of a procedure.

