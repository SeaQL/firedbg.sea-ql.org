# Index

## Introduction

1. [How to Debug](#)

2. [What is FireDBG](#)

3. [Why LLDB Debugger](#)

## Architecture

1. [Parser](#)

    1.1 [Breakpoint](#)

2. [Command](#)

    2.1 [Trace Config](#)

    2.2 [FireDBG Folder](#)

    2.3 [Breakpoint Caching](#)

    2.4 [CLI Endpoint](#)

3. [Support Library](#)

    3.1 [Trace Macro](#)

4. [Protocol](#)

    4.5 [Representing Rust Types](#)

5. [Debugger](#)

    5.1 [Supported CPU architecture and OS](#)

    5.2 [LLDB Binding & Library](#)

    5.3 [Setting Breakpoint](#)

    5.4 [Handling Breakpoint](#)

    5.6 [Capturing Function Arguments](#)

    5.7 [Capturing Return Values](#)

    5.8 [Streaming Debug Data](#)

6. [Indexer](#)

    6.1 [Reading Debug Data](#)

    6.2 [Consolidating Debug Data into SQLite](#)

7. [Graphics](#)

    7.1 [Call Tree](#)

    7.2 [Variable](#)

    7.3 [Timeline](#)

8. [VS Code Extension](#)

    8.1 [FireDBG Debug & Run](#)

    8.2 [Inspector Side Panels](#)
