# React useEffect Cleanup Issue with Asynchronous Operations

This repository demonstrates a common issue in React applications involving the useEffect hook and its cleanup function. The bug arises when the cleanup function doesn't properly handle asynchronous operations, potentially causing memory leaks or unexpected behavior after component unmounting.

## Bug Description

The `MyComponent` uses `useEffect` to perform an asynchronous operation. However, the cleanup function doesn't correctly handle the asynchronous operation's cancellation, leading to continued execution even after the component unmounts.

## Solution

The solution involves using a signal or flag to cancel asynchronous operations when the component is unmounted.