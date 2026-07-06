#include <iostream>
using namespace std;
long int coin_change(vector<int>& coins, int n, int amount) {//unbounded knapsack
    if (amount == 0) return 1;
    else if (amount < 0 || n == 0) return 0;
    if (amount >= coins[n-1]) {
        return coin_change(coins, n, amount-coins[n-1])+coin_change(coins,n-1,amount);
        
    } 
    else return coin_change(coins,n-1,amount);
}
long int coin_change_dp(vector<int>& coins, int n, int amount) {//unbounded knapsack
    vector<vector<long int>> dp(n+1,vector<long int>(amount+1,0));
    for (int i = 0; i <= n; i++) dp[i][0] = 1;

    for (int i = 1; i <= n; i++) {
        for (int j = 1; j <= amount; j++) {
            if (j >= coins[i-1]) dp[i][j] = dp[i][j-coins[i-1]] + dp[i-1][j];
            else dp[i][j] = dp[i-1][j];
        }
    }
    return dp[n][amount];

}
long int coin_change_dp_optimized(vector<int>& coins, int n, int amount) {//unbounded knapsack
    vector<long int> dp(amount+1,0);

    dp[0] = 1;//derived from initialization

    for (int i = 1; i <= n; i++) {
        // int coin = coins[i-1];
        for (int j = coins[i-1]; j <= amount; j++) {
            // if (j >= coins[i-1]) 
            dp[j] = dp[j-coins[i-1]] + dp[j];
            // else dp[j] = dp[j];
        }
    }
    return dp[amount];

}
int main() {
    cout << "Enter the total number of coins : ";
    int n;
    cin >> n;
    vector<int> coins(n);
    for (int i = 0; i < n; i++) coins[i] = i+1;
    // int n = n; //acc. to partition sum problem the n of coins array and the amount we need to find is same as 'n'
    cout << "answer is :" << coin_change_dp_optimized(coins,n,n) << endl;
    
}