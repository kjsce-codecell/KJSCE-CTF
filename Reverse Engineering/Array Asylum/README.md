# Array Asylum

**Description**:I pose this riddle to you, Batman? Can you navigate the tangled arrays of madness and unlock the secrets hidden within?

**File**: [rev2](./files/rev2)

## Solution

**Through Ghidra**:

We could see some hex strings while analyzing the main function.

<figure><img src="./imgs/hex.png"></figure>

Converting the hex to text, we get the flag.

<figure><img src="./imgs/ghidra-flag.png"></figure>

**Through IDA**:

Importing the file into IDA will give the flag at startup itself.

<figure><img src="./imgs/ida-flag.png"></figure>

## Flag
```
KJSCE_CTF{1t_Wa5_3z}
```