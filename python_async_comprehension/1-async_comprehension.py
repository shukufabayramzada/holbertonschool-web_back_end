#!/usr/bin/env python3
'''
Module defines a coroutine called async_comprehension
that takes no arguments.
'''
async_generator = __import__('0-async_generator').async_generator


async def async_comprehension():
    '''
    Function for async comprehension
    '''
    result = []
    async for i in async_generator():
        result.append(i)
    return result