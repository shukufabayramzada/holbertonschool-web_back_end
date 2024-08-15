#!/usr/bin/env python3
'''
Module represent measurement of the runtime
'''
import asyncio
import time
wait_n = __import__('1-concurrent_coroutines').wait_n

async def measure_time(n: int, max_delay: int) -> float:
    '''Declare function'''
    start_time: float = time.time()
    asyncio.run(wait_n(n, max_delay))
    end_time: float = time.time()
    return (end_time - start_time) / n
