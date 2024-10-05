# Alice and Bob play a game.
# There is an integer 
# X
# X, which is initially 
# 0
# 0. On their turn, Alice or Bob can choose to increment 
# X
# X by either 
# 1
# 1 or 
# 2
# 2.

# The game ends as soon as 
# X
# ≥
# N
# X≥N holds. When the game ends, Bob wins the game if 
# X
# =
# N
# X=N, otherwise Alice wins the game.
# Alice goes first, and the players alternate turns.
# If both players play optimally, predict the winner.

# Input Format
# The first line of input will contain a single integer 
# T
# T, denoting the number of test cases.
# The first and only line of each test case contains a single integer 
# N
# N — the limit for the game.
# Output Format
# For each test case, output on a new line the name of the winner: the string "ALICE" if Alice wins the game, and "BOB" if Bob wins the game (without the quotes).

# Each character of the output may be printed in either uppercase or lowercase, i.e, the strings Bob, BOB, bOb, and bOB will all be treated as equivalent.

# Sample 1:
# Input
# Output
# 2
# 1
# 3
# ALICE
# BOB
# Explanation:
# Test case 
# 1
# 1: Alice can simply increase 
# X
# X by 
# 2
# 2 on the first move. Then, the game ends since 
# X
# ≥
# N
# X≥N, and Alice wins because 
# X
# ≠
# N
# X=N holds (
# N
# =
# 1
# N=1).

# Test case 
# 2
# 2: Bob has a simple strategy that guarantees a win:

# If Alice does 
# +
# 2
# +2, Bob does 
# +
# 1
# +1, thus making 
# X
# =
# 3
# X=3
# If Alice does 
# +
# 1
# +1, Bob does 
# +
# 2
# +2, thus making 
# X
# =
# 3
# X=3
# In both cases, the game ends after the 
# 2
# 2 turns, and Bob wins as 
# X
# =
# N
# =
# 3
# X=N=3 holds.


t = int(input()) 

for _ in range(t):
    n = int(input()) 
    if n > 1:
        x = 0
        x += 2 + 1

        if x  == n:
            print("Bob")
        else:
            print("Alice")
