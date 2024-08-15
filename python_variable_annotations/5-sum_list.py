#!/usr/bin/env python3
from typing import List

'''
Module defines a type-annotated function sum_list which takes
a list input_list of floats as argument and returns their sum as a float.
'''


def sum_list(input_list: List[float]) -> float:
    '''
    Function return sum of elements of the list
    '''
    return sum(input_list)
