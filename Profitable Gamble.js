// Create a function that takes in three arguments (prob, prize, pay) and returns true if prob * prize > pay; otherwise return false.
// To illustrate, profitableGamble(0.2, 50, 9) should yield true, since the net profit is 1 (0.2 * 50 - 9), and 1 > 0.

        // TEST CONIDITIONS
    //    (profitableGamble(0.2, 50, 9), true)
    //    (profitableGamble(0.9, 1, 2), false)
    //    (profitableGamble(0.9, 3, 2), true)
    //    (profitableGamble(0.33, 10, 3.30), true)
    //    (profitableGamble(0, 1000, 0.01), false)
    //    (profitableGamble(0.1, 1000, 7), true)
    //    (profitableGamble(0, 0, 0), false)

    const profitableGamble = (prob, prize, pay) => {
        let netProfit = prob*prize;
        if(netProfit>pay){
            return true;
        } else{
            return false;
        }
    }