(self.webpackChunkfiredbg=self.webpackChunkfiredbg||[]).push([[232],{5286:(e,t,n)=>{"use strict";n.r(t),n.d(t,{default:()=>d});var a=n(557),o=n(6687),r=n(3985),i=n(4371);const s={heroBanner:"heroBanner_mT2W",buttons:"buttons_boyo",homepageBanner:"homepageBanner_Q_R3",homepageLogo:"homepageLogo_z8Hs"};var l=n(6941),p=n(8820);function c(e){let{mounted:t,code:n}=e;const{siteConfig:{themeConfig:{prism:r={}}}}=(0,i.Z)(),s=r.theme;return o.createElement(l.ZP,(0,a.Z)({},l.lG,{code:"curl https://raw.githubusercontent.com/SeaQL/FireDBG.for.Rust/main/install.sh -sSf | sh",key:t,theme:s,language:"bash"}),(e=>{let{className:t,tokens:n,getLineProps:a,getTokenProps:r}=e;return o.createElement("pre",{className:`${t}`,style:{backgroundColor:"#292d3e"}},n.map(((e,t)=>o.createElement("div",a({line:e,key:t}),e.map(((e,t)=>o.createElement("span",r({token:e,key:t}))))))))}))}function u(e){let{mounted:t}=e;return o.createElement("header",{className:s.heroBanner},o.createElement("div",{className:"container"},o.createElement("img",{className:s.homepageLogo,width:"90%",src:"/img/FireDBG logo.png"}),o.createElement("img",{className:s.homepageBanner,width:"90%",src:"/img/FireDBG logo.png"}),o.createElement("h1",null,"Install ",o.createElement("code",null,"FireDBG")),o.createElement("div",{id:"platform-instructions-unix",style:{display:"none"}},o.createElement("p",null,"You appear to be running one of Unix, Linux, MacOS. Install by running:"),o.createElement(c,{mounted:t})),o.createElement("div",{id:"platform-instructions-win64",style:{display:"none"}},o.createElement("p",null,"You appear to be running Windows 64-bit. Install by running command in Windows Subsystem for Linux user:"),o.createElement(c,{mounted:t})),o.createElement("div",{id:"platform-instructions-unknown",style:{display:"none"}},o.createElement("p",null,"I don't recognize your platform."),o.createElement("p",null,"We would appreciate it if you",o.createElement("a",{href:"https://github.com/SeaQL/FireDBG.for.Rust/issues/new"}," reported an issue"),", along with the following values:"),o.createElement("div",null,o.createElement("div",null,"navigator.platform:"),o.createElement("code",{id:"nav-plat"}),o.createElement("div",null,"navigator.appVersion:"),o.createElement("code",{id:"nav-app"})))))}function d(){const{siteConfig:e}=(0,i.Z)(),[t,n]=(0,o.useState)(!1);return(0,o.useEffect)((()=>{n(!0)}),[]),(0,o.useEffect)((()=>{var e,t,n,a=["unknown","win64","unix"],o=null;e=function(){if(null!==o)return a[o];var e="unknown";return"Linux x86_64"==navigator.platform&&(e="unix"),"Linux i686"==navigator.platform&&(e="unix"),"Linux i686 on x86_64"==navigator.platform&&(e="unix"),"Linux aarch64"==navigator.platform&&(e="unix"),"Linux armv6l"==navigator.platform&&(e="unix"),"Linux armv7l"==navigator.platform&&(e="unix"),"Linux armv8l"==navigator.platform&&(e="unix"),"Linux ppc64"==navigator.platform&&(e="unix"),"Linux mips"==navigator.platform&&(e="unix"),"Linux mips64"==navigator.platform&&(e="unix"),"Mac"==navigator.platform&&(e="unix"),"Win64"!=navigator.platform&&-1==navigator.userAgent.indexOf("WOW64")&&-1==navigator.userAgent.indexOf("Win64")||(e="win64"),"FreeBSD x86_64"==navigator.platform&&(e="unix"),"FreeBSD amd64"==navigator.platform&&(e="unix"),"NetBSD x86_64"==navigator.platform&&(e="unix"),"NetBSD amd64"==navigator.platform&&(e="unix"),"unknown"==e&&(-1!=navigator.appVersion.indexOf("Mac")&&(e="unix"),-1!=navigator.appVersion.indexOf("FreeBSD")&&(e="unix")),navigator.oscpu&&(-1!=navigator.oscpu.indexOf("Win64")&&(e="win64"),-1!=navigator.oscpu.indexOf("Mac")&&(e="unix"),-1!=navigator.oscpu.indexOf("Linux")&&(e="unix"),-1!=navigator.oscpu.indexOf("FreeBSD")&&(e="unix"),-1!=navigator.oscpu.indexOf("NetBSD")&&(e="unix")),e}(),a.forEach((function(t){var n=document.getElementById("platform-instructions-"+t);n&&(n.style.display="none",e===t&&(n.style.display="block"))})),t=document.getElementById("nav-plat"),n=document.getElementById("nav-app"),t&&(t.textContent=navigator.platform),n&&(n.textContent=navigator.appVersion)})),o.createElement(r.Z,{description:e.tagline},o.createElement("main",null,o.createElement(u,{mounted:t})))}(void 0!==n.g?n.g:window).Prism=p.Z,n(7124)},6941:(e,t,n)=>{"use strict";n.d(t,{ZP:()=>g,lG:()=>i});var a=n(8820);const o={plain:{backgroundColor:"#2a2734",color:"#9a86fd"},styles:[{types:["comment","prolog","doctype","cdata","punctuation"],style:{color:"#6c6783"}},{types:["namespace"],style:{opacity:.7}},{types:["tag","operator","number"],style:{color:"#e09142"}},{types:["property","function"],style:{color:"#9a86fd"}},{types:["tag-id","selector","atrule-id"],style:{color:"#eeebff"}},{types:["attr-name"],style:{color:"#c4b9fe"}},{types:["boolean","string","entity","url","attr-value","keyword","control","directive","unit","statement","regex","atrule","placeholder","variable"],style:{color:"#ffcc99"}},{types:["deleted"],style:{textDecorationLine:"line-through"}},{types:["inserted"],style:{textDecorationLine:"underline"}},{types:["italic"],style:{fontStyle:"italic"}},{types:["important","bold"],style:{fontWeight:"bold"}},{types:["important"],style:{color:"#c4b9fe"}}]};var r=n(6687),i={Prism:a.Z,theme:o};function s(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function l(){return l=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var a in n)Object.prototype.hasOwnProperty.call(n,a)&&(e[a]=n[a])}return e},l.apply(this,arguments)}var p=/\r\n|\r|\n/,c=function(e){0===e.length?e.push({types:["plain"],content:"\n",empty:!0}):1===e.length&&""===e[0].content&&(e[0].content="\n",e[0].empty=!0)},u=function(e,t){var n=e.length;return n>0&&e[n-1]===t?e:e.concat(t)},d=function(e,t){var n=e.plain,a=Object.create(null),o=e.styles.reduce((function(e,n){var a=n.languages,o=n.style;return a&&!a.includes(t)||n.types.forEach((function(t){var n=l({},e[t],o);e[t]=n})),e}),a);return o.root=n,o.plain=l({},n,{backgroundColor:null}),o};function m(e,t){var n={};for(var a in e)Object.prototype.hasOwnProperty.call(e,a)&&-1===t.indexOf(a)&&(n[a]=e[a]);return n}const g=function(e){function t(){for(var t=this,n=[],a=arguments.length;a--;)n[a]=arguments[a];e.apply(this,n),s(this,"getThemeDict",(function(e){if(void 0!==t.themeDict&&e.theme===t.prevTheme&&e.language===t.prevLanguage)return t.themeDict;t.prevTheme=e.theme,t.prevLanguage=e.language;var n=e.theme?d(e.theme,e.language):void 0;return t.themeDict=n})),s(this,"getLineProps",(function(e){var n=e.key,a=e.className,o=e.style,r=l({},m(e,["key","className","style","line"]),{className:"token-line",style:void 0,key:void 0}),i=t.getThemeDict(t.props);return void 0!==i&&(r.style=i.plain),void 0!==o&&(r.style=void 0!==r.style?l({},r.style,o):o),void 0!==n&&(r.key=n),a&&(r.className+=" "+a),r})),s(this,"getStyleForToken",(function(e){var n=e.types,a=e.empty,o=n.length,r=t.getThemeDict(t.props);if(void 0!==r){if(1===o&&"plain"===n[0])return a?{display:"inline-block"}:void 0;if(1===o&&!a)return r[n[0]];var i=a?{display:"inline-block"}:{},s=n.map((function(e){return r[e]}));return Object.assign.apply(Object,[i].concat(s))}})),s(this,"getTokenProps",(function(e){var n=e.key,a=e.className,o=e.style,r=e.token,i=l({},m(e,["key","className","style","token"]),{className:"token "+r.types.join(" "),children:r.content,style:t.getStyleForToken(r),key:void 0});return void 0!==o&&(i.style=void 0!==i.style?l({},i.style,o):o),void 0!==n&&(i.key=n),a&&(i.className+=" "+a),i})),s(this,"tokenize",(function(e,t,n,a){var o={code:t,grammar:n,language:a,tokens:[]};e.hooks.run("before-tokenize",o);var r=o.tokens=e.tokenize(o.code,o.grammar,o.language);return e.hooks.run("after-tokenize",o),r}))}return e&&(t.__proto__=e),t.prototype=Object.create(e&&e.prototype),t.prototype.constructor=t,t.prototype.render=function(){var e=this.props,t=e.Prism,n=e.language,a=e.code,o=e.children,r=this.getThemeDict(this.props),i=t.languages[n];return o({tokens:function(e){for(var t=[[]],n=[e],a=[0],o=[e.length],r=0,i=0,s=[],l=[s];i>-1;){for(;(r=a[i]++)<o[i];){var d=void 0,m=t[i],g=n[i][r];if("string"==typeof g?(m=i>0?m:["plain"],d=g):(m=u(m,g.type),g.alias&&(m=u(m,g.alias)),d=g.content),"string"==typeof d){var f=d.split(p),h=f.length;s.push({types:m,content:f[0]});for(var S=1;S<h;S++)c(s),l.push(s=[]),s.push({types:m,content:f[S]})}else i++,t.push(m),n.push(d),a.push(0),o.push(d.length)}i--,t.pop(),n.pop(),a.pop(),o.pop()}return c(s),l}(void 0!==i?this.tokenize(t,a,i,n):[a]),className:"prism-code language-"+n,style:void 0!==r?r.root:{},getLineProps:this.getLineProps,getTokenProps:this.getTokenProps})},t}(r.Component)},7124:()=>{!function(e){var t="\\b(?:BASH|BASHOPTS|BASH_ALIASES|BASH_ARGC|BASH_ARGV|BASH_CMDS|BASH_COMPLETION_COMPAT_DIR|BASH_LINENO|BASH_REMATCH|BASH_SOURCE|BASH_VERSINFO|BASH_VERSION|COLORTERM|COLUMNS|COMP_WORDBREAKS|DBUS_SESSION_BUS_ADDRESS|DEFAULTS_PATH|DESKTOP_SESSION|DIRSTACK|DISPLAY|EUID|GDMSESSION|GDM_LANG|GNOME_KEYRING_CONTROL|GNOME_KEYRING_PID|GPG_AGENT_INFO|GROUPS|HISTCONTROL|HISTFILE|HISTFILESIZE|HISTSIZE|HOME|HOSTNAME|HOSTTYPE|IFS|INSTANCE|JOB|LANG|LANGUAGE|LC_ADDRESS|LC_ALL|LC_IDENTIFICATION|LC_MEASUREMENT|LC_MONETARY|LC_NAME|LC_NUMERIC|LC_PAPER|LC_TELEPHONE|LC_TIME|LESSCLOSE|LESSOPEN|LINES|LOGNAME|LS_COLORS|MACHTYPE|MAILCHECK|MANDATORY_PATH|NO_AT_BRIDGE|OLDPWD|OPTERR|OPTIND|ORBIT_SOCKETDIR|OSTYPE|PAPERSIZE|PATH|PIPESTATUS|PPID|PS1|PS2|PS3|PS4|PWD|RANDOM|REPLY|SECONDS|SELINUX_INIT|SESSION|SESSIONTYPE|SESSION_MANAGER|SHELL|SHELLOPTS|SHLVL|SSH_AUTH_SOCK|TERM|UID|UPSTART_EVENTS|UPSTART_INSTANCE|UPSTART_JOB|UPSTART_SESSION|USER|WINDOWID|XAUTHORITY|XDG_CONFIG_DIRS|XDG_CURRENT_DESKTOP|XDG_DATA_DIRS|XDG_GREETER_DATA_DIR|XDG_MENU_PREFIX|XDG_RUNTIME_DIR|XDG_SEAT|XDG_SEAT_PATH|XDG_SESSION_DESKTOP|XDG_SESSION_ID|XDG_SESSION_PATH|XDG_SESSION_TYPE|XDG_VTNR|XMODIFIERS)\\b",n={pattern:/(^(["']?)\w+\2)[ \t]+\S.*/,lookbehind:!0,alias:"punctuation",inside:null},a={bash:n,environment:{pattern:RegExp("\\$"+t),alias:"constant"},variable:[{pattern:/\$?\(\([\s\S]+?\)\)/,greedy:!0,inside:{variable:[{pattern:/(^\$\(\([\s\S]+)\)\)/,lookbehind:!0},/^\$\(\(/],number:/\b0x[\dA-Fa-f]+\b|(?:\b\d+(?:\.\d*)?|\B\.\d+)(?:[Ee]-?\d+)?/,operator:/--|\+\+|\*\*=?|<<=?|>>=?|&&|\|\||[=!+\-*/%<>^&|]=?|[?~:]/,punctuation:/\(\(?|\)\)?|,|;/}},{pattern:/\$\((?:\([^)]+\)|[^()])+\)|`[^`]+`/,greedy:!0,inside:{variable:/^\$\(|^`|\)$|`$/}},{pattern:/\$\{[^}]+\}/,greedy:!0,inside:{operator:/:[-=?+]?|[!\/]|##?|%%?|\^\^?|,,?/,punctuation:/[\[\]]/,environment:{pattern:RegExp("(\\{)"+t),lookbehind:!0,alias:"constant"}}},/\$(?:\w+|[#?*!@$])/],entity:/\\(?:[abceEfnrtv\\"]|O?[0-7]{1,3}|U[0-9a-fA-F]{8}|u[0-9a-fA-F]{4}|x[0-9a-fA-F]{1,2})/};e.languages.bash={shebang:{pattern:/^#!\s*\/.*/,alias:"important"},comment:{pattern:/(^|[^"{\\$])#.*/,lookbehind:!0},"function-name":[{pattern:/(\bfunction\s+)[\w-]+(?=(?:\s*\(?:\s*\))?\s*\{)/,lookbehind:!0,alias:"function"},{pattern:/\b[\w-]+(?=\s*\(\s*\)\s*\{)/,alias:"function"}],"for-or-select":{pattern:/(\b(?:for|select)\s+)\w+(?=\s+in\s)/,alias:"variable",lookbehind:!0},"assign-left":{pattern:/(^|[\s;|&]|[<>]\()\w+(?:\.\w+)*(?=\+?=)/,inside:{environment:{pattern:RegExp("(^|[\\s;|&]|[<>]\\()"+t),lookbehind:!0,alias:"constant"}},alias:"variable",lookbehind:!0},parameter:{pattern:/(^|\s)-{1,2}(?:\w+:[+-]?)?\w+(?:\.\w+)*(?=[=\s]|$)/,alias:"variable",lookbehind:!0},string:[{pattern:/((?:^|[^<])<<-?\s*)(\w+)\s[\s\S]*?(?:\r?\n|\r)\2/,lookbehind:!0,greedy:!0,inside:a},{pattern:/((?:^|[^<])<<-?\s*)(["'])(\w+)\2\s[\s\S]*?(?:\r?\n|\r)\3/,lookbehind:!0,greedy:!0,inside:{bash:n}},{pattern:/(^|[^\\](?:\\\\)*)"(?:\\[\s\S]|\$\([^)]+\)|\$(?!\()|`[^`]+`|[^"\\`$])*"/,lookbehind:!0,greedy:!0,inside:a},{pattern:/(^|[^$\\])'[^']*'/,lookbehind:!0,greedy:!0},{pattern:/\$'(?:[^'\\]|\\[\s\S])*'/,greedy:!0,inside:{entity:a.entity}}],environment:{pattern:RegExp("\\$?"+t),alias:"constant"},variable:a.variable,function:{pattern:/(^|[\s;|&]|[<>]\()(?:add|apropos|apt|apt-cache|apt-get|aptitude|aspell|automysqlbackup|awk|basename|bash|bc|bconsole|bg|bzip2|cal|cargo|cat|cfdisk|chgrp|chkconfig|chmod|chown|chroot|cksum|clear|cmp|column|comm|composer|cp|cron|crontab|csplit|curl|cut|date|dc|dd|ddrescue|debootstrap|df|diff|diff3|dig|dir|dircolors|dirname|dirs|dmesg|docker|docker-compose|du|egrep|eject|env|ethtool|expand|expect|expr|fdformat|fdisk|fg|fgrep|file|find|fmt|fold|format|free|fsck|ftp|fuser|gawk|git|gparted|grep|groupadd|groupdel|groupmod|groups|grub-mkconfig|gzip|halt|head|hg|history|host|hostname|htop|iconv|id|ifconfig|ifdown|ifup|import|install|ip|java|jobs|join|kill|killall|less|link|ln|locate|logname|logrotate|look|lpc|lpr|lprint|lprintd|lprintq|lprm|ls|lsof|lynx|make|man|mc|mdadm|mkconfig|mkdir|mke2fs|mkfifo|mkfs|mkisofs|mknod|mkswap|mmv|more|most|mount|mtools|mtr|mutt|mv|nano|nc|netstat|nice|nl|node|nohup|notify-send|npm|nslookup|op|open|parted|passwd|paste|pathchk|ping|pkill|pnpm|podman|podman-compose|popd|pr|printcap|printenv|ps|pushd|pv|quota|quotacheck|quotactl|ram|rar|rcp|reboot|remsync|rename|renice|rev|rm|rmdir|rpm|rsync|scp|screen|sdiff|sed|sendmail|seq|service|sftp|sh|shellcheck|shuf|shutdown|sleep|slocate|sort|split|ssh|stat|strace|su|sudo|sum|suspend|swapon|sync|sysctl|tac|tail|tar|tee|time|timeout|top|touch|tr|traceroute|tsort|tty|umount|uname|unexpand|uniq|units|unrar|unshar|unzip|update-grub|uptime|useradd|userdel|usermod|users|uudecode|uuencode|v|vcpkg|vdir|vi|vim|virsh|vmstat|wait|watch|wc|wget|whereis|which|who|whoami|write|xargs|xdg-open|yarn|yes|zenity|zip|zsh|zypper)(?=$|[)\s;|&])/,lookbehind:!0},keyword:{pattern:/(^|[\s;|&]|[<>]\()(?:case|do|done|elif|else|esac|fi|for|function|if|in|select|then|until|while)(?=$|[)\s;|&])/,lookbehind:!0},builtin:{pattern:/(^|[\s;|&]|[<>]\()(?:\.|:|alias|bind|break|builtin|caller|cd|command|continue|declare|echo|enable|eval|exec|exit|export|getopts|hash|help|let|local|logout|mapfile|printf|pwd|read|readarray|readonly|return|set|shift|shopt|source|test|times|trap|type|typeset|ulimit|umask|unalias|unset)(?=$|[)\s;|&])/,lookbehind:!0,alias:"class-name"},boolean:{pattern:/(^|[\s;|&]|[<>]\()(?:false|true)(?=$|[)\s;|&])/,lookbehind:!0},"file-descriptor":{pattern:/\B&\d\b/,alias:"important"},operator:{pattern:/\d?<>|>\||\+=|=[=~]?|!=?|<<[<-]?|[&\d]?>>|\d[<>]&?|[<>][&=]?|&[>&]?|\|[&|]?/,inside:{"file-descriptor":{pattern:/^\d/,alias:"important"}}},punctuation:/\$?\(\(?|\)\)?|\.\.|[{}[\];\\]/,number:{pattern:/(^|\s)(?:[1-9]\d*|0)(?:[.,]\d+)?\b/,lookbehind:!0}},n.inside=e.languages.bash;for(var o=["comment","function-name","for-or-select","assign-left","parameter","string","environment","function","keyword","builtin","boolean","file-descriptor","operator","punctuation","number"],r=a.variable[1].inside,i=0;i<o.length;i++)r[o[i]]=e.languages.bash[o[i]];e.languages.sh=e.languages.bash,e.languages.shell=e.languages.bash}(Prism)}}]);