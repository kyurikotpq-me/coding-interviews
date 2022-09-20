def strobogrammatic_iterative(n):
    '''
    Return all the strobogrammatic numbers that are of length n through recursive
    approach
    ------------
    Parameters:
    n: int
        The targeted length of the digit 
    ------------
    Returns: list
        All strobogrammatic numbers that are of the targeted length
    '''
    # Track the strobogrammatic "middles" of odd length
    # that will be used when dealing with odd-length numbers
    odd_middles = [0, 1, 8]

    # Track the strobogrammatic "middles" of even length
    # that will be used when dealing with even-length numbers
    even_middles = [11, 69, 88, 96]

    if n == 1: 
        # We can return the one-digit strobogrammatic
        # numbers in odd_middles if n = 1
        return odd_middles

    if n == 2: 
        # We can return the two-digit strobogrammatic
        # numbers in odd_middles if n = 2
        return even_middles
    
    # However: "00" is also a valid even_middle, so include it
    even_middles.append("00")

    # Track the list of strobogrammatic numbers 
    # constructed thus far
    strobogrammatic_numbers = []

    # Progressively work our way up to n-digit numbers
    for digits in range(3, n + 1):
        # Remove the strobogrammatic numbers
        # created in the previous iteration
        strobogrammatic_numbers = []

        # If the current number of digits is even
        if digits % 2 == 0:
            # Go through the numbers from even_middles
            for num in even_middles:
                # Sandwich the current number with strobogrammatic digits
                strobogrammatic_numbers.append(f"0{num}0")
                strobogrammatic_numbers.append(f"1{num}1")
                strobogrammatic_numbers.append(f"6{num}9")
                strobogrammatic_numbers.append(f"8{num}8")
                strobogrammatic_numbers.append(f"9{num}6")
            
            # Assign even_middles to the strobogrammatic_numbers created
            # as they will be used the next time the number of digits is even
            even_middles = strobogrammatic_numbers
        else:
            # If the current number of digits is odd
            # Go through the numbers from odd_middles
            for num in odd_middles:
                # Sandwich the current number with strobogrammatic digits
                strobogrammatic_numbers.append(f"0{num}0")
                strobogrammatic_numbers.append(f"1{num}1")
                strobogrammatic_numbers.append(f"6{num}9")
                strobogrammatic_numbers.append(f"8{num}8")
                strobogrammatic_numbers.append(f"9{num}6")

            # Assign odd_middles to the strobogrammatic_numbers created
            # as they will be used the next time the number of digits is odd
            odd_middles = strobogrammatic_numbers

        
    # Convert the data types of all strobogrammatic numbers 
    # from string into integer
    strobogrammatic_strings = []

    for x in strobogrammatic_numbers:
        integer = int(x)

        # Filter out numbers of the right length
        if integer < 10 ** n and integer >= 10 ** (n - 1):
            strobogrammatic_strings.append(x)
    
    # Sort the list
    strobogrammatic_strings.sort()

    return strobogrammatic_strings