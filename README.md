# Expo AsyncStorage: Handling Large Data

This repository demonstrates a common but often cryptic error encountered when using AsyncStorage in Expo applications.  The problem arises when attempting to store data exceeding AsyncStorage's storage limits.  This leads to an error that isn't always helpful in identifying the root cause.

The `bug.js` file shows code that attempts to store a large dataset, leading to the error.  The `bugSolution.js` file provides a solution involving splitting large data into smaller chunks before storing it in AsyncStorage.