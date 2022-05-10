# Given a string x, sort its characters such that the 
# smallest characters are ordered first.
#
# E.g. sort_chars("baba") should return "aabb"
# E.g. sort_chars("rdbadbaz") should return "aabbddrz"
# E.g. sort_chars("asffklsdajfklsdjfldsiiiew") should return "aadddeffffiiijjkklllssssw"
#
def sort_chars(x):
    # 1. Split characters into list
    chars = [c for c in x]
    
    # 2. Compare characters and re-arrange elements in the list
    def merge_sort(array):
        if len(array) == 1:
            return array

        else:
            # a. Split half recursively until you only have one element in the list
            half_index = int(len(array)/2)
            left_half = array[:half_index] # EXCLUDES half_index!
            right_half = array[half_index:]

            # b. Sort the halves
            sorted_left_half = merge_sort(left_half)
            sorted_right_half = merge_sort(right_half)

            # c. Compare and combine them
            final_array = []

            # Mistake: Cannot iterate one-to-one, must iterate 
            # through all elements of both arrays. Do this by
            # tracking the index of checked elements for BOTH lists
            # separately, as they are not likely to match
            small_arr_index = large_arr_index = 0

            larger_array = sorted_left_half if len(sorted_left_half) >= len(sorted_right_half) \
                            else sorted_right_half
            smaller_array = sorted_left_half if len(sorted_left_half) < len(sorted_right_half) \
                            else sorted_right_half

            # Iterate through the array of smaller length
            while small_arr_index < len(smaller_array) and large_arr_index < len(larger_array):
                if smaller_array[small_arr_index] < larger_array[large_arr_index]:
                    final_array.append(smaller_array[small_arr_index])
                    small_arr_index += 1
                else:
                    final_array.append(larger_array[large_arr_index])
                    large_arr_index += 1

            # Check for leftovers
            if small_arr_index < len(smaller_array):
                final_array = final_array + smaller_array[small_arr_index:]
            else:
                final_array = final_array + larger_array[large_arr_index:]
                
            return final_array

    final_list = merge_sort(chars)

    # 3. Rejoin
    final_string = "".join(final_list)
    print(final_string)
