#!/usr/bin/env python3
'''
Module defines measuring the total runtime
'''
import asyncio
import time

async_comprehension = __import__('1-async_comprehension').async_comprehension


async def measure_runtime() -> float:
    '''
    Measure the total runtime of executing
    async_comprehension four times in parallel.
    '''
    start_time = time.time()
    await asyncio.gather(
        async_comprehension(),
        async_comprehension(),
        async_comprehension(),
        async_comprehension()
    )
    end_time = time.time()
    return end_time - start_time
