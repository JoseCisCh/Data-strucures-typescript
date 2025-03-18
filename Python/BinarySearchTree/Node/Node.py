
from typing import Optional


class Node:
    
    def __init__(self, value, left: Optional["Node"] = None, right: Optional["Node"] = None):
        self.value: int = value
        self.left = left 
        self.right = right 
