"use strict";(self.webpackChunkfiredbg=self.webpackChunkfiredbg||[]).push([[780],{3905:(e,t,n)=>{n.d(t,{Zo:()=>c,kt:()=>h});var i=n(7294);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function a(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);t&&(i=i.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,i)}return n}function o(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?a(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):a(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,i,r=function(e,t){if(null==e)return{};var n,i,r={},a=Object.keys(e);for(i=0;i<a.length;i++)n=a[i],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(i=0;i<a.length;i++)n=a[i],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var m=i.createContext({}),s=function(e){var t=i.useContext(m),n=t;return e&&(n="function"==typeof e?e(t):o(o({},t),e)),n},c=function(e){var t=s(e.components);return i.createElement(m.Provider,{value:t},e.children)},u="mdxType",p={inlineCode:"code",wrapper:function(e){var t=e.children;return i.createElement(i.Fragment,{},t)}},g=i.forwardRef((function(e,t){var n=e.components,r=e.mdxType,a=e.originalType,m=e.parentName,c=l(e,["components","mdxType","originalType","parentName"]),u=s(n),g=r,h=u["".concat(m,".").concat(g)]||u[g]||p[g]||a;return n?i.createElement(h,o(o({ref:t},c),{},{components:n})):i.createElement(h,o({ref:t},c))}));function h(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var a=n.length,o=new Array(a);o[0]=g;var l={};for(var m in t)hasOwnProperty.call(t,m)&&(l[m]=t[m]);l.originalType=e,l[u]="string"==typeof e?e:r,o[1]=l;for(var s=2;s<a;s++)o[s]=n[s];return i.createElement.apply(null,o)}return i.createElement.apply(null,n)}g.displayName="MDXCreateElement"},7236:(e,t,n)=>{n.d(t,{E:()=>a,n:()=>r});var i=n(7294);function r(e){let{src:t}=e;const n=t.replace("-dark","-light"),r=t.replace("-light","-dark");return i.createElement(i.Fragment,null,i.createElement("video",{controls:!0,muted:!0,autoPlay:!0,loop:!0,style:{width:"100%"},"data-theme":"light"},i.createElement("source",{src:n,type:"video/mp4"})),i.createElement("video",{controls:!0,muted:!0,autoPlay:!0,loop:!0,style:{width:"100%"},"data-theme":"dark"},i.createElement("source",{src:r,type:"video/mp4"})))}function a(e){const t=e.src.replace("-dark","-light"),n=e.src.replace("-light","-dark"),r=()=>i.createElement(i.Fragment,null,i.createElement("img",{style:{width:"100%"},src:`${t}#light`}),i.createElement("img",{style:{width:"100%"},src:`${n}#dark`}));return void 0===e.children?r():i.createElement("table",null,i.createElement("tbody",null,i.createElement("tr",{style:{backgroundColor:"unset"}},i.createElement("td",null,r())),i.createElement("tr",{style:{backgroundColor:"unset"}},i.createElement("td",{style:{color:"var(--ifm-blockquote-color)"}},e.children))))}},1729:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>s,contentTitle:()=>l,default:()=>g,frontMatter:()=>o,metadata:()=>m,toc:()=>c});var i=n(7462),r=(n(7294),n(3905)),a=n(7236);const o={slug:"2024-01-31-visual-dynamic-program",title:"Visualizing Dynamic Programming - Part 1",author:"Chris Tsang",author_title:"FireDBG Team",author_url:"https://github.com/tyt2y3",author_image_url:"https://avatars.githubusercontent.com/u/1782664?v=4",image:"https://firedbg.sea-ql.org/img/visual-dynamic-program.png",tags:["news"]},l=void 0,m={permalink:"/blog/2024-01-31-visual-dynamic-program",editUrl:"https://github.com/SeaQL/firedbg.sea-ql.org/edit/main/FireDBG/blog/blog/2024-01-31-visual-dynamic-program.mdx",source:"@site/blog/2024-01-31-visual-dynamic-program.mdx",title:"Visualizing Dynamic Programming - Part 1",description:"If you haven't already, go watch the video Mastering Dynamic Programming by Tech With Nikola! This tutorial is based off that.",date:"2024-01-31T00:00:00.000Z",formattedDate:"January 31, 2024",tags:[{label:"news",permalink:"/blog/tags/news"}],readingTime:5.125,hasTruncateMarker:!1,authors:[{name:"Chris Tsang",title:"FireDBG Team",url:"https://github.com/tyt2y3",imageURL:"https://avatars.githubusercontent.com/u/1782664?v=4"}],frontMatter:{slug:"2024-01-31-visual-dynamic-program",title:"Visualizing Dynamic Programming - Part 1",author:"Chris Tsang",author_title:"FireDBG Team",author_url:"https://github.com/tyt2y3",author_image_url:"https://avatars.githubusercontent.com/u/1782664?v=4",image:"https://firedbg.sea-ql.org/img/visual-dynamic-program.png",tags:["news"]},prevItem:{title:"FizzBuzz Multithreaded - synchronization with rendezvous channels",permalink:"/blog/2024-06-30-fizzbuzz-multithread"},nextItem:{title:"Getting Started",permalink:"/blog/2023-12-13-getting-started"}},s={authorsImageUrls:[void 0]},c=[{value:"Fibonacci",id:"fibonacci",level:2},{value:"Minimum Coins",id:"minimum-coins",level:2},{value:"Longest common subsequence",id:"longest-common-subsequence",level:2},{value:"Conclusion",id:"conclusion",level:2}],u={toc:c},p="wrapper";function g(e){let{components:t,...n}=e;return(0,r.kt)(p,(0,i.Z)({},u,n,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("img",{src:"/img/visual-dynamic-program.png",width:"50%"}),(0,r.kt)("p",null,"If you haven't already, go watch the video ",(0,r.kt)("a",{parentName:"p",href:"https://www.youtube.com/watch?v=Hdr64lKQ3e4"},"Mastering Dynamic Programming")," by Tech With Nikola! This tutorial is based off that."),(0,r.kt)("p",null,"We will look into three examples today, and gain some new insights by visualizing the call trees."),(0,r.kt)("ol",null,(0,r.kt)("li",{parentName:"ol"},"Fibonacci"),(0,r.kt)("li",{parentName:"ol"},"Minimum Coins"),(0,r.kt)("li",{parentName:"ol"},"Longest common subsequence")),(0,r.kt)("h2",{id:"fibonacci"},"Fibonacci"),(0,r.kt)("p",null,"This one is tried and true! But not bad as a starter:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-rust"},'fn fib(n: i32) -> i32 {\n    if n <= 2 {\n        return 1;\n    }\n    fire::dbg!("return", fib(n - 1) + fib(n - 2))\n}\n')),(0,r.kt)("p",null,"What does the call tree of ",(0,r.kt)("inlineCode",{parentName:"p"},"fib(5)")," look like?"),(0,r.kt)(a.E,{src:"/img/more/fib-5-light.png",mdxType:"Image"},"Call tree of `fib(5)`"),(0,r.kt)("p",null,'To make it more efficient, we can use a "memo" to cache the function calls. There are multiple ways to do this, let\'s try using a static ',(0,r.kt)("inlineCode",{parentName:"p"},"HashMap"),":"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-rust"},"lazy_static::lazy_static! {\n    static ref MEMO: Mutex<HashMap<i32, i32>> = Mutex::new(HashMap::new());\n}\n\nfn fibm(n: i32) -> i32 {\n    if n <= 2 {\n        return 1;\n    }\n    {\n        let mut memo = MEMO.lock().unwrap();\n        if let Some(o) = memo.get(&n) {\n            return *o;\n        }\n        // we have to release the lock here\n    }\n    let res = fibm(n - 1) + fibm(n - 2);\n    let mut memo = MEMO.lock().unwrap();\n    memo.insert(n, res);\n    res\n}\n")),(0,r.kt)("p",null,"Now, what will the call tree look like?"),(0,r.kt)(a.E,{src:"/img/more/fibm-5-light.png",mdxType:"Image"},"Call tree of `fibm(5)`"),(0,r.kt)("p",null,"Nice! We can see that the ",(0,r.kt)("inlineCode",{parentName:"p"},"fibm(n = 3)")," (9th node) returned early."),(0,r.kt)("p",null,"Here is one more comparison for ",(0,r.kt)("inlineCode",{parentName:"p"},"fib(10)"),"."),(0,r.kt)(a.E,{src:"/img/more/fib-10-light.png",mdxType:"Image"},"Call tree of `fib(10)`"),(0,r.kt)(a.E,{src:"/img/more/fibm-10-light.png",mdxType:"Image"},"Call tree of `fibm(10)`"),(0,r.kt)("p",null,"We can see that the memo helped reduce the number of nodes down from 111 to just 19!"),(0,r.kt)("h2",{id:"minimum-coins"},"Minimum Coins"),(0,r.kt)("p",null,"Let's get to a slightly more interesting problem. According to ",(0,r.kt)("a",{parentName:"p",href:"https://en.wikipedia.org/wiki/Change-making_problem"},"Wikipedia"),", the change-making problem addresses the question of finding the minimum number of coins that add up to a given amount of money."),(0,r.kt)("p",null,"Example 1:"),(0,r.kt)("p",null,"Given the coins ",(0,r.kt)("inlineCode",{parentName:"p"},"{ 1, 2 }")," (with unlimited number), how many coins do we need to make up to ",(0,r.kt)("inlineCode",{parentName:"p"},"5"),"? "),(0,r.kt)("p",null,"The answer is 3, with coins ",(0,r.kt)("inlineCode",{parentName:"p"},"1")," + ",(0,r.kt)("inlineCode",{parentName:"p"},"2")," + ",(0,r.kt)("inlineCode",{parentName:"p"},"2"),". Now, let's look at the standard recursive implementation:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-rust"},'fn min_coins(m: i32, coins: &[i32]) -> Option<usize> {\n    if m == 0 {\n        return Some(0);\n    }\n    let mut count: Option<usize> = None;\n    for coin in coins {\n        let next = m - coin;\n        if next < 0 {\n            continue;\n        }\n        count = match (count, min_coins(next, coins)) {\n            (Some(a), Some(b)) => Some(a.min(b + 1)),\n            (Some(a), None) => Some(a),\n            (None, Some(b)) => Some(b + 1),\n            (None, None) => None,\n        }\n    }\n    fire::dbg!("return", count)\n}\n')),(0,r.kt)("p",null,"The call tree for ",(0,r.kt)("inlineCode",{parentName:"p"},"min_coins(13, &[1, 4, 5])"),":"),(0,r.kt)(a.E,{src:"/img/more/min-coins-13-light.png",mdxType:"Image"},"Call tree of `min_coins(13, ..)`"),(0,r.kt)("p",null,"With memoization, we'd use a context specific ",(0,r.kt)("inlineCode",{parentName:"p"},"HashMap"),":"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-rust"},"fn min_coins_m(m: i32, coins: &[i32], memo: &mut HashMap<i32, Option<usize>>) -> Option<usize> {\n    if m == 0 {\n        return Some(0);\n    }\n    if let Some(c) = memo.get(&m) {\n        return *c;\n    }\n    let mut count: Option<usize> = None;\n    for coin in coins {\n        let next = m - coin;\n        if next < 0 {\n            continue;\n        }\n        count = match (count, min_coins_m(next, coins, memo)) {\n            (Some(a), Some(b)) => Some(a.min(b + 1)),\n            (Some(a), None) => Some(a),\n            (None, Some(b)) => Some(b + 1),\n            (None, None) => None,\n        }\n    }\n    memo.insert(m, count);\n    count\n}\n")),(0,r.kt)("p",null,"Now, the call tree is reduced down to just 28 nodes:"),(0,r.kt)(a.E,{src:"/img/more/min-coins-m-13-light.png",mdxType:"Image"},"Call tree of `min_coins_m(13, ..)`"),(0,r.kt)("p",null,"Not bad, right?"),(0,r.kt)("h2",{id:"longest-common-subsequence"},"Longest common subsequence"),(0,r.kt)("p",null,"This is the most interesting and practical problem. The video uses it to implement a git diff algorithm which is pretty neat."),(0,r.kt)("p",null,"Here let's go straight into memoizing, because otherwise it would never return even for trivial test cases:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-rust"},'struct Memo {\n    memo: HashMap<(usize, usize), usize>,\n}\n\nfn lcs_impl<T: Copy + Eq>(left: &[T], right: &[T], state: &mut Memo) -> usize {\n    if left.is_empty() || right.is_empty() {\n        return 0;\n    }\n    fire::dbg!("(i, j)", (left.len() - 1, right.len() - 1));\n    if let Some(n) = state.memo.get(&(left.len() - 1, right.len() - 1)) {\n        return *n;\n    }\n    let n = if left[left.len() - 1] == right[right.len() - 1] {\n        1 + lcs_impl(&left[..left.len() - 1], &right[..right.len() - 1], state)\n    } else {\n        let leftn = lcs_impl(&left[..left.len() - 1], right, state);\n        let rightn = lcs_impl(left, &right[..right.len() - 1], state);\n        leftn.max(rightn)\n    };\n    state.memo.insert((left.len() - 1, right.len() - 1), n);\n    n\n}\n')),(0,r.kt)("p",null,"The ",(0,r.kt)("inlineCode",{parentName:"p"},".len() - 1")," bits are pretty verbose, but if you look pass them, the code should be pretty understandable. The clever bit here is to use a ",(0,r.kt)("inlineCode",{parentName:"p"},"HashMap")," with a tuple key instead of a 2D vector to save space!"),(0,r.kt)("p",null,"But it's only half of the story. Because we still need to walk the path again to re-construct the common subsequence:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-rust"},"pub fn lcs<T: Copy + Eq>(left: &[T], right: &[T]) -> Vec<T> {\n    let mut state = Memo {\n        memo: Default::default(),\n    };\n    let length = lcs_impl(left, right, &mut state);\n\n    // reconstruct the common subsequence\n    let mut seq = Vec::new();\n    let (mut i, mut j) = (left.len() - 1, right.len() - 1);\n    while seq.len() < length {\n        if left[i] == right[j] {\n            seq.push(left[i]);\n            if seq.len() == length {\n                break;\n            }\n            i -= 1;\n            j -= 1;\n        } else {\n            if i > 0 && state.memo.get(&(i, j)).unwrap() == state.memo.get(&(i - 1, j)).unwrap() {\n                i -= 1;\n            } else {\n                j -= 1;\n            }\n        }\n    }\n    seq.reverse();\n    seq\n}\n")),(0,r.kt)("p",null,"Here is the call tree for:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-rust"},"assert_eq!(\n    lcs(&[1, 4, 5, 6, 9, 10, 11], &[6, 4, 5, 9, 11]),\n    [4, 5, 9, 11]\n);\n")),(0,r.kt)(a.E,{src:"/img/more/lcs-light.png",mdxType:"Image"},"Call tree of `lcs(..)`"),(0,r.kt)(a.E,{src:"/img/more/lcs-memo-light.png",mdxType:"Image"},"Memo of `lcs(..)` (last node)"),(0,r.kt)("p",null,"If we look into the memo of the last node, we can see that we only used 13 elements, instead of 8 x 6 = 48 as in the video (or pretty much every other tutorial), and that the call tree only has 35 nodes. So there is some trade-off between top-down vs bottom-up dynamic programming here."),(0,r.kt)("h2",{id:"conclusion"},"Conclusion"),(0,r.kt)("p",null,"I hope you learnt something today! FireDBG is your ",(0,r.kt)("em",{parentName:"p"},"best companion")," in writing, debugging and analyzing algorithms. You don't have to install the Rust toolchain to interact with the call trees, as I have bundled them in the ",(0,r.kt)("a",{parentName:"p",href:"https://github.com/SeaQL/FireDBG.Rust.Testbench/tree/main/dynamic-programming"},"testbench with full source code here"),". You should be able to just open the ",(0,r.kt)("inlineCode",{parentName:"p"},"dynamic-programming")," folder, install the VS Code extension and start playing."))}g.isMDXComponent=!0}}]);