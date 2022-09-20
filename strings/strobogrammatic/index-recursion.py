def strobogrammatic_recursive(n):
    '''
    Return all the strobogrammatic numbers that are of length n through iterative
    approach
    ------------
    Parameters:
    n: int
        The targeted length of the digit 
    ------------
    Returns: list
        All strobogrammatic numbers that are of the targeted length
    '''
    def get_strobogrammatic_numbers(n):
        # Base Case 1: Return a list of one-digit strobogrammatic numbers
        if n == 1:
            return [0, 1, 8]

        # Base Case 2: Return a list of two-digit strobogrammatic numbers
        if n == 2:
            return [11, 69, 88, 96]

        # Track the list of strobogrammatic strings
        # constructed for the current number of digits
        strobogrammatic_strings = []

        # Obtain the middles to sandwich
        middles = get_strobogrammatic_numbers(n - 2)

        # Special case: If we're obtaining middles when n - 2 = 2,
        # we need to add "00" to the middles array
        if n == 4:
            middles.append("00")

        # Go through the numbers from even_middles
        for num in middles:
            # Sandwich the current number with strobogrammatic digits
            strobogrammatic_strings.append(f"0{num}0")
            strobogrammatic_strings.append(f"1{num}1")
            strobogrammatic_strings.append(f"6{num}9")
            strobogrammatic_strings.append(f"8{num}8")
            strobogrammatic_strings.append(f"9{num}6")

        return strobogrammatic_strings

    strobogrammatic_numbers = get_strobogrammatic_numbers(n)

    # Convert the data types of all strobogrammatic numbers
    # from string into integer
    strobogrammatic_strings = []

    for x in strobogrammatic_numbers:
        integer = int(x)

        # Filter out numbers of the wrong length
        if (integer == 0 and n == 1) or \
            (integer < 10 ** n and integer >= 10 ** (n - 1)):
            strobogrammatic_strings.append(x)

    # Sort the list
    strobogrammatic_strings.sort()

    return strobogrammatic_strings