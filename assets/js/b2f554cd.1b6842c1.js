"use strict";(self.webpackChunkfiredbg=self.webpackChunkfiredbg||[]).push([[477],{10:e=>{e.exports=JSON.parse('{"blogPosts":[{"id":"2023-12-13-getting-started","metadata":{"permalink":"/blog/2023-12-13-getting-started","editUrl":"https://github.com/SeaQL/firedbg.sea-ql.org/edit/main/FireDBG/blog/blog/2023-12-13-getting-started.mdx","source":"@site/blog/2023-12-13-getting-started.mdx","title":"Getting Started","description":"In this blog post, we will cover the basic usage of FireDBG VS Code Extension (\\"the Extension\\") and FireDBG CLI (\\"the CLI\\"). By the end of this tutorial, you will learn:","date":"2023-12-13T00:00:00.000Z","formattedDate":"December 13, 2023","tags":[{"label":"news","permalink":"/blog/tags/news"}],"readingTime":13.87,"hasTruncateMarker":false,"authors":[{"name":"Billy Chan","title":"FireDBG Team","url":"https://github.com/billy1624","imageURL":"https://avatars.githubusercontent.com/u/30400950?v=4"}],"frontMatter":{"slug":"2023-12-13-getting-started","title":"Getting Started","author":"Billy Chan","author_title":"FireDBG Team","author_url":"https://github.com/billy1624","author_image_url":"https://avatars.githubusercontent.com/u/30400950?v=4","tags":["news"]}},"content":"import { Video, Image } from \'../src/themed.js\';\\n\\nIn this blog post, we will cover the basic usage of FireDBG VS Code Extension (\\"the Extension\\") and FireDBG CLI (\\"the CLI\\"). By the end of this tutorial, you will learn:\\n\\n- How to install the Extension and the CLI\\n- How to setup a Rust workspace for FireDBG debugger\\n- How to debug Rust binary, example, unit test and integration test with FireDBG debugger\\n- How to interpret and inspect visualized call tree, variables and timeline in the Extension\\n- How to interpret and inspect breakpoint events of multi-threaded program in the Extension\\n- How to trace any variable / expression of interest with the `fire::dbg!` trace macro\\n- How to selectively enable / disable tracing of a local package\\n- How to use the CLI to operate FireDBG debugger and then interpret and inspect breakpoint events via SQLite\\n\\n\x3c!-- If you\'re curious about the background and inner working of FireDBG\\n\\n- [Introducing FireDBG for Rust \ud83d\udd25](/blog/2023-12-12-introducing-firedbg)\\n- [Architecture of FireDBG](/blog/2023-12-11-architecture-of-firedbg) --\x3e\\n\\n## Installation\\n\\nBefore we start, make sure you have VS Code and Rust installed.\\n\\n- VS Code (version 1.80.0 or later)\\n- Rust (version 1.74.0 or later)\\n\\n### FireDBG VS Code Extension\\n\\nThe Extension provide seamless code and debug experience to maximaize developer productivity. Search and install the [`SeaQL.firedbg-rust`](https://marketplace.visualstudio.com/items?itemName=SeaQL.firedbg-rust) extension. To keep the `.vsix` package small in size, we didn\'t ship the FireDBG binaries and library with the Extension. Instead, we have a dedicated installer for the FireDBG binaries.\\n\\n### FireDBG Binaries\\n\\nBuilding FireDBG from source can be tricky, so we provided prebuilt binaries for the following CPU and OS combination:\\n\\n|                | Linux[^1] | macOS[^2] | Windows (WSL 2)[^3] |\\n|---------------:|:---------:|:---------:|:-------------------:|\\n| x64            | \u2705        | \u2705        | \u2705                   |\\n| arm64          | \u26d4\ufe0f        | \u2705        | \u26d4\ufe0f                   |\\n\\nOnce the the Extension has been installed, you should see a prompt hinting that FireDBG binaries are missing. Click on the \\"install\\" button to run the installer.\\n\\n<Image src=\\"/img/gt-install-firedbg-light.png\\"/>\\n\\nOr, you can run the installer manually.\\n\\n```shell\\ncurl https://raw.githubusercontent.com/SeaQL/FireDBG.for.Rust/main/install.sh -sSf | sh\\n```\\n\\nFireDBG binaries will be installed in `~/.cargo/bin` and a debugger self test will be conducted to verify the installation.\\n\\nIn case you got error messages when performing self test, read [Troubleshooting Guide](https://github.com/SeaQL/FireDBG.for.Rust/blob/main/Troubleshooting.md) for the solution of common errors.\\n\\n## GUI Tour\\n\\nDownload the [zipped source code](https://codeload.github.com/SeaQL/FireDBG.Rust.Testbench/zip/refs/heads/main), or cloning [Rust Testbench for FireDBG](https://github.com/SeaQL/FireDBG.Rust.Testbench) to your local machine, then follow the tour below to learn the basic usage of the Extension.\\n\\n```shell\\ngit clone git@github.com:SeaQL/FireDBG.Rust.Testbench.git\\n```\\n\\n### Debug Targets and Runs\\n\\nWhere can I see the list of all debuggable Rust targets, how can I debug it and how to inspect previous runs?\\n\\n<Image src=\\"/img/gt-debug-and-run-light.png\\"/>\\n\\n1. Click on the \\"Run and Debug\\" panel on your primary sidebar, you should see two new panels on the bottom\\n2. The `FIREDBG` panel should display all binaries, examples, integration tests and unit tests in your current Rust workspace. Click on the list item to reveal the Rust source code. To debug it, hover the list item and click on the play icon \u25b6\ufe0f on the list item. A new debug view will be shown and tail the progress in real time. \\n3. All previous debug runs can be found in the `FIREDBG RUNS` panel, simply click on it to reveal.\\n\\nAlternatively, you can list all debuggable Rust targets via the CLI:\\n\\n```shell\\n$ firedbg list-target\\n\\nAvailable binaries are:\\n\\troll_dice\\n```\\n\\nAnd, list all previous runs via the CLI:\\n\\n```shell\\n$ firedbg list-run\\n\\nAvailable `firedbg` runs are:\\n    1) roll_dice-1701678002235.firedbg.ss\\n```\\n\\n### Visual Debugger\\n\\nHow to interpret and inspect visualized call tree, variables, timeline and threads in the Extension?\\n\\n<Image src=\\"/img/gt-vis-debugger-light.png\\"/>\\n\\nWe can the open the debug view by clicking the items in the `FIREDBG RUNS` panel, or with the `open` command:\\n\\n```shell\\nfiredbg open\\n```\\n\\n1. Each node represent a function call; the depth of each node resemble the depth of the function call in the call stack; There are two types of edge:\\n\\t- Function call with return value: `-<->-`\\n\\t- Function call only: `--\x3e--`\\n2. If the program exited with a panic, the panicking function will be highlighted in red with an exclamation mark.\\n3. Click on the function name on the call tree node to reveal the Rust source code.\\n4. Function Arguments: the name of the argument is shown as the label. The faded text on the bounding box denote the type name, where hovering on it will reveal the fully-qualified name. The actual value is enclosed in the bounding box.\\n5. Function Return Value: the return value will be shown on the far right with the label `return`.\\n6. Timeline: toggle the timline by checking the timeline checkbox on the bottom. There are two kinds of node:\\n    - Circle: function call\\n    - Square: function return\\n7. Thread selector: If the program has more than one thread, a dropdown will be shown on the bottom. You can switch to inspect the execution of other threads. Bring up the timeline to view the execution of all threads in a single view.\\n\\n#### Controls\\n\\nHow to time travel debug and how to navigate and zoom through the program execution flow?\\n\\n<Image src=\\"/img/gt-vis-debugger-control-light.png\\"/>\\n\\n1. Use the control buttons on the timebar to jump to the beginning or the end of program execution. Use `J/K` on your keyboard or stepping button to step backward and forward. Click on the timebar would jump to the exact function call.\\n2. The visualization will be updated as you traverse the call tree. Use `W/A/S/D` keys on your keyboard or your left mouse click to pan; Click the `+/-` buttons on the bottom right or `-/=` on your keyboard or use your mouse scroll wheel to zoom. To resize the panel, move the mouse to the panel edge then drag to resize.\\n\\n### FireDBG Sidebar\\n\\nHow to retrieve the detailed debug info?\\n\\n<Image src=\\"/img/gt-sidebar-light.png\\"/>\\n\\nThe FireDBG sidebar contains all debug info. It will be updated as you traverse the call tree.\\n\\n1. `Debugger Info`: FireDBG debugger info, program executable info and runtime info\\n2. `Frame Info`: frame metadata of the inspected function call\\n3. `Parameters`: Rust-like representation of the inspected function call\'s arguments\\n4. `Return Value`: Rust-like representation of the inspected function\'s return value\\n5. `Call Stack (Ancestors)`: ancestors of the inspected function; up until root\\n6. `Callee (Children)`: immediate children of the inspected function\\n\\n## FireDBG CLI\\n\\nThere are two ways to tell `firedbg` where is the root directory of a cargo workspace:\\n\\n1. By default, the current directory will be the root directory of a cargo workspace\\n2. Or, overriding it with `--workspace-root` option, i.e. `firedbg --workspace-root <WORKSPACE-ROOT>`\\n\\nSome common sub-commands include:\\n\\n- `cache`: Parse all `.rs` source files in the current workspace\\n- `clean`: Cleanup the `firedbg/` folder\\n- `list-target`: List all runnable targets\\n- `run`: Run a binary target with debugging enabled\\n- `example`: Run an example with debugging enabled\\n- `test`: Run an integrated test with debugging enabled\\n- `unit-test`: Run a unit test with debugging enabled\\n- `index`: Run indexer on the latest run and save it as a `.sqlite` db file\\n- `list-run`: List all `firedbg` runs\\n- `open`: Open debugger view in VS Code\\n- `help`: Print help message or the help of the given subcommand(s)\\n\\nYou can get the help messages by appending the `--help` flag.\\n\\n## FireDBG Workspace\\n\\n[Cargo workspace](https://doc.rust-lang.org/book/ch14-03-cargo-workspaces.html) is a set of crates sharing the same `Cargo.lock` and `target` directory.\\nFireDBG rely on Cargo to locate source files and target for debugging.\\n\\nNow you have a basic understanding on the usage of FireDBG.\\nLet\'s create a Cargo workspace and practice debugging with FireDBG!\\n\\n[Full source code](https://github.com/SeaQL/FireDBG.Rust.Testbench/tree/main/getting-started) is available on our testbench.\\n\\n<Image src=\\"/img/gt-workspace-light.png\\"/>\\n\\nStart by creating a `getting-started` workspace.\\n\\n```shell\\n$ mkdir getting-started\\n$ cd getting-started\\n```\\n\\nFor now, we only have a single `quicksort` package in this workspace. We will add one more crate later.\\n\\n```toml title=\\"Cargo.toml\\"\\n[workspace]\\nmembers = [\\"quicksort\\"]\\n```\\n\\nTo create the `quicksort` library, we can use the convenient `cargo` command.\\n\\n```shell\\n$ cargo new --lib quicksort\\n$ cd quicksort\\n```\\n\\n### Debugging Unit Tests\\n\\nReplace the content of `lib.rs` with our \\"faulty\\" quick sort library code.\\n\\n```rust title=\\"quicksort/src/lib.rs\\"\\npub fn run<T: PartialOrd>(arr: &mut [T]) {\\n    let len = arr.len();\\n    quick_sort(arr, 0, (len - 1) as isize);\\n}\\n\\nfn quick_sort<T: PartialOrd>(arr: &mut [T], low: isize, high: isize) {\\n    if low < high {\\n        let p = partition(arr, low, high);\\n        quick_sort(arr, low, p - 1);\\n        quick_sort(arr, p + 1, high);\\n    }\\n}\\n\\nfn partition<T: PartialOrd>(arr: &mut [T], low: isize, high: isize) -> isize {\\n    let pivot = high as usize;\\n    let mut store_index = low; // Shouldn\'t this be `low - 1`?\\n    let mut last_index = high;\\n\\n    loop {\\n        store_index += 1;\\n        while arr[store_index as usize] < arr[pivot] {\\n            store_index += 1;\\n        }\\n        last_index -= 1;\\n        while last_index >= 0 && arr[last_index as usize] > arr[pivot] {\\n            last_index -= 1;\\n        }\\n        if store_index >= last_index {\\n            break;\\n        } else {\\n            arr.swap(store_index as usize, last_index as usize);\\n        }\\n    }\\n    arr.swap(store_index as usize, pivot as usize);\\n    store_index\\n}\\n```\\n\\nThen add some unit tests to the end of `lib.rs` file.\\n\\n```rust title=\\"quicksort/src/lib.rs\\"\\n#[cfg(test)]\\nmod test {\\n    use super::*;\\n\\n    #[test]\\n    fn test_quicksort_1() {\\n        let mut numbers = [4, 65, 2, -31, 0, 99, 2, 83, 782, 1];\\n        run(&mut numbers);\\n        assert_eq!(numbers, [-31, 0, 1, 2, 2, 4, 65, 83, 99, 782]);\\n    }\\n\\n    #[test]\\n    fn test_quicksort_2() {\\n        let mut numbers = [1, 2, 2];\\n        run(&mut numbers);\\n        assert_eq!(numbers, [1, 2, 2]);\\n    }\\n}\\n```\\n\\nClick on the debug icon on the left to start debugging the unit test.\\nWe found that it\'s quite hard to inspect what elements are swapped in each partition.\\n\\n<Image src=\\"/img/gt-unit-test-light.png\\"/>\\n\\nTo help debugging, we can add a `swap` function and rewrite the original code:\\n\\n```diff\\nfn partition<T: PartialOrd>(arr: &mut [T], low: isize, high: isize) -> isize {\\n    let pivot = high as usize;\\n    let mut store_index = low - 1;\\n    let mut last_index = high;\\n\\n    loop {\\n        store_index += 1;\\n        while arr[store_index as usize] < arr[pivot] {\\n            store_index += 1;\\n        }\\n        last_index -= 1;\\n        while last_index >= 0 && arr[last_index as usize] > arr[pivot] {\\n            last_index -= 1;\\n        }\\n        if store_index >= last_index {\\n            break;\\n        } else {\\n-           arr.swap(store_index as usize, last_index as usize);\\n+           swap(&mut arr[store_index as usize..=last_index as usize]);\\n        }\\n    }\\n-   arr.swap(store_index as usize, pivot as usize);\\n+   swap(&mut arr[store_index as usize..=pivot as usize]);\\n    store_index\\n}\\n\\n+ fn swap<T: PartialOrd>(arr: &mut [T]) {\\n+     arr.swap(0, arr.len() - 1);\\n+ }\\n```\\n\\n> Tip: you can add `#[cfg_attr(not(debug_assertions), inline)]` to the `swap` function to inline it in release build, so that it will not incur any overhead.\\n\\nNow, we can easily see the `swap` and what has been swapped. Upon closer inspection we will see a pattern, i.e. the first element of each partition is always untouched. That\'s the bug!\\n\\n<Image src=\\"/img/gt-unit-test-swap-light.png\\"/>\\n\\nAlternatively, you can debug unit test via the CLI:\\n\\n```shell\\nfiredbg unit-test quicksort test::test_quicksort_1\\n```\\n\\n### `fire::dbg!` Trace Macro\\n\\nLet\'s try to debug the same program with a different approach. An non-invasive approach, this time we only trace the swap without modifying the program structure.\\n\\nFireDBG provide a [`fire::dbg!`](https://docs.rs/firedbg-lib/latest/firedbg_lib/fire/macro.dbg.html) macro similar to [`std::dbg!`](https://doc.rust-lang.org/std/macro.dbg.html) to capture the variable of interest.\\n\\nWe can trace the swap actions with the help of `fire::dbg!`. The main advantage compared to `std::dbg!`, is that the trace data is associated with the stack frame of the calling function.\\n\\nUndo the previous change and go back to the original implementation.\\n\\n```diff title=\\"Cargo.toml\\"\\n[dependencies]\\n+ firedbg-lib = \\"0.1\\"\\n```\\n\\n```diff\\n+ use firedbg_lib::fire;\\n\\nfn partition<T: PartialOrd>(arr: &mut [T], low: isize, high: isize) -> isize {\\n    let pivot = high as usize;\\n    let mut store_index = low - 1;\\n    let mut last_index = high;\\n\\n    loop {\\n        store_index += 1;\\n        while arr[store_index as usize] < arr[pivot] {\\n            store_index += 1;\\n        }\\n        last_index -= 1;\\n        while last_index >= 0 && arr[last_index as usize] > arr[pivot] {\\n            last_index -= 1;\\n        }\\n        if store_index >= last_index {\\n            break;\\n        } else {\\n+           fire::dbg!(\\"swap\\", &arr[store_index as usize..=last_index as usize]);\\n            arr.swap(store_index as usize, last_index as usize);\\n        }\\n    }\\n+   fire::dbg!(\\"swap\\", &arr[store_index as usize..=pivot as usize]);\\n    arr.swap(store_index as usize, pivot as usize);\\n    store_index\\n}\\n```\\n\\nThis time the swap is shown in the variables of the partition function.\\nAs expected, we see 3 swaps. This should help us to observe the pattern, locate and fix the bug.\\n\\n<Image src=\\"/img/gt-unit-test-dbg-light.png\\"/>\\n\\n### Debugging Integration Tests\\n\\nSimilar to unit test, we can debug integration test with FireDBG. Let\'s add an integration test file:\\n\\n```rust title=\\"quicksort/tests/bookshelf.rs\\"\\n#[test]\\nfn test_quicksort_1() {\\n    let mut books = [\\n        \\"The Rust Programming Language\\",\\n        \\"Beginning Rust: From Novice to Professional\\",\\n        \\"Rust in Action\\",\\n        \\"Programming Rust: Fast, Safe Systems Development\\",\\n        \\"Rust Programming Language for Beginners\\",\\n    ];\\n    quicksort::run(&mut books);\\n    assert_eq!(\\n        books,\\n        [\\n            \\"Beginning Rust: From Novice to Professional\\",\\n            \\"Programming Rust: Fast, Safe Systems Development\\",\\n            \\"Rust Programming Language for Beginners\\",\\n            \\"Rust in Action\\",\\n            \\"The Rust Programming Language\\",\\n        ]\\n    );\\n}\\n```\\n\\n<Image src=\\"/img/gt-integration-test-light.png\\"/>\\n\\nAlternatively, you can debug integration test via the CLI:\\n\\n```shell\\nfiredbg test bookshelf test_quicksort_1\\n```\\n\\n### Debugging Binary Targets\\n\\nLet\'s create an executable program. We need to add some dependencies first.\\n\\n```diff title=\\"Cargo.toml\\"\\n[dependencies]\\nfiredbg-lib = \\"0.1\\"\\n+ fastrand = \\"2\\"\\n+ structopt = \\"0.3\\"\\n```\\n\\n```rust title=\\"quicksort/src/main.rs\\"\\nuse firedbg_lib::fire;\\nuse std::iter::repeat_with;\\nuse structopt::StructOpt;\\n\\n#[derive(StructOpt, Debug)]\\nstruct Opt {\\n    /// Random seed\\n    #[structopt(long, default_value = \\"2525\\")]\\n    seed: u64,\\n    /// Number of random numbers to be sorted\\n    #[structopt(default_value = \\"10\\")]\\n    n: usize,\\n}\\n\\nfn main() {\\n    let Opt { seed, n } = Opt::from_args();\\n\\n    fire::dbg!(&seed);\\n    fire::dbg!(&n);\\n\\n    fastrand::seed(seed);\\n\\n    let max = if n <= 10 { 100 } else { 1000 };\\n\\n    println!(\\"Sort {n} numbers in ascending order\\");\\n    let mut numbers: Vec<_> = repeat_with(|| fastrand::i32(1..max)).take(n).collect();\\n\\n    println!(\\"Input:  {:?}\\", numbers);\\n    quicksort::run(&mut numbers);\\n    println!(\\"Sorted: {:?}\\", numbers);\\n\\n    let mut c = 0;\\n    for n in numbers {\\n        assert!(n >= c);\\n        c = n;\\n    }\\n}\\n```\\n\\n<Image src=\\"/img/gt-binary-light.png\\"/>\\n\\nWe can use the FireDBG CLI to pass additional parameters to the Rust binary:\\n\\n```shell\\n# Randomly generate 18 numbers with the random seed 2828, then sort it in ascending order\\nfiredbg run quicksort -- 18 --seed 2828\\n```\\n\\n### Debugging Examples\\n\\nExamples work the same as binary targets, just that they are located under the `examples/` directory.\\n\\nWe can also debug example via the CLI:\\n\\n```shell\\nfiredbg example random100\\n```\\n\\n### `firedbg/` Output Folder\\n\\n<Image src=\\"/img/gt-firedbg-folder-light.png\\"/>\\n\\nA `firedbg` folder will be created for storing the symbols, debug runs and other supporting files.\\nYou should ignore this folder from your source control, i.e. add `firedbg/` to `.gitignore`.\\n\\n### `firedbg.toml` Config\\n\\nLet\'s try and add one more crate to the workspace.\\n\\n```shell\\n$ cargo new --lib book-store\\n$ cd book-store\\n```\\n\\nUpdate the `Cargo.toml` at workspace root, adding our new `book-store` package.\\n\\n```toml title=\\"Cargo.toml\\"\\n[workspace]\\nmembers = [\\"quicksort\\", \\"book-store\\"]\\n```\\n\\nBelow we have a simple function to list the inventory in alphabetical order.\\n\\n```rust title=\\"book-store/src/lib.rs\\"\\nuse anyhow::Result;\\nuse std::fs::File;\\nuse std::io::{BufRead, BufReader};\\n\\npub fn inventory(path: &str) -> Result<Vec<String>> {\\n    let file = File::open(path)?;\\n    let reader = BufReader::new(file);\\n\\n    let mut books = Vec::new();\\n    for line in reader.lines() {\\n        let book = line?.trim().to_owned();\\n        books.push(book);\\n    }\\n    quicksort::run(&mut books);\\n    Ok(books)\\n}\\n```\\n\\nTo put it in action we can add a `books.txt` file to the package root and then write a unit test to invoke the `inventory` function.\\n\\n```txt title=\\"book-store/books.txt\\"\\nThe Rust Programming Language\\nRust Programming Language for Beginners\\nProgramming Rust: Fast, Safe Systems Development\\nBeginning Rust: From Novice to Professional\\nRust in Action\\n```\\n\\n```rust title=\\"book-store/src/lib.rs\\"\\n#[cfg(test)]\\nmod test {\\n    use super::*;\\n    use anyhow::Result;\\n\\n    #[test]\\n    fn test_inventory_1() -> Result<()> {\\n        let path = concat!(env!(\\"CARGO_MANIFEST_DIR\\"), \\"/books.txt\\");\\n        let books = inventory(path)?;\\n        assert_eq!(\\n            books,\\n            [\\n                \\"Beginning Rust: From Novice to Professional\\",\\n                \\"Programming Rust: Fast, Safe Systems Development\\",\\n                \\"Rust Programming Language for Beginners\\",\\n                \\"Rust in Action\\",\\n                \\"The Rust Programming Language\\",\\n            ]\\n        );\\n        Ok(())\\n    }\\n}\\n```\\n\\nUmm... we see that function calls to the `quicksort` crate are missing in the call tree.\\n\\n<Image src=\\"/img/gt-book-store-light.png\\"/>\\n\\nBy default FireDBG will only trace the functions of the debug target.\\nIf you want to trace other crates in your local workspace, you will need to create a `firedbg.toml` config file in your workspace root.\\n\\n```toml title=\\"firedbg.toml\\"\\n[workspace.members]\\nquicksort = { trace = \\"full\\" } \\n# Syntax: <PACKAGE> = { trace = \\"<full | none>\\" }\\n```\\n\\nNow, we can see the function calls of the `quicksort` crate!\\n\\n<Image src=\\"/img/gt-trace-config-light.png\\"/>\\n\\n## The Event Index\\n\\nWhen you open a `.firedbg.ss` file, FireDBG indexer will create a `.sqlite` file to store the analyzed debug info.\\nYou can also run the indexer manually with the `firedbg index` sub-command.\\n\\n<Image src=\\"/img/gt-sqlite-light.png\\"/>\\n\\n[^1]: Supported Linux distributions: Ubuntu 22.04, Ubuntu 20.04, Debian 10, Fedora 39\\n[^2]: Supported macOS versions: macOS 13 (Ventura), macOS 14 (Sonoma)\\n[^3]: Supported Windows (WSL 2) distributions: Ubuntu 22.04, Ubuntu 20.04"}]}')}}]);