const computerEnglishData = {
  "categories": [
    {
      "id": "terminal-commands",
      "name": "Terminal Commands",
      "nameCN": "终端命令",
      "description": "Common terminal and shell commands",
      "items": [
        {
          "id": "t001",
          "english": "cd (change directory)",
          "chinese": "切换目录",
          "pronunciation": "/siː diː/",
          "example": "cd /home/user/documents",
          "category": "navigation"
        },
        {
          "id": "t002",
          "english": "ls (list)",
          "chinese": "列出目录内容",
          "pronunciation": "/el ɛs/",
          "example": "ls -la",
          "category": "navigation"
        },
        {
          "id": "t003",
          "english": "pwd (print working directory)",
          "chinese": "显示当前目录",
          "pronunciation": "/piː ˈdʌbəljuː diː/",
          "example": "pwd",
          "category": "navigation"
        },
        {
          "id": "t004",
          "english": "mkdir (make directory)",
          "chinese": "创建目录",
          "pronunciation": "/ˈɛmk dɪr/",
          "example": "mkdir new_folder",
          "category": "file-operations"
        },
        {
          "id": "t005",
          "english": "rm (remove)",
          "chinese": "删除文件或目录",
          "pronunciation": "/ɑːr ɛm/",
          "example": "rm file.txt",
          "category": "file-operations"
        },
        {
          "id": "t006",
          "english": "cp (copy)",
          "chinese": "复制文件",
          "pronunciation": "/siː piː/",
          "example": "cp source.txt destination.txt",
          "category": "file-operations"
        },
        {
          "id": "t007",
          "english": "mv (move)",
          "chinese": "移动或重命名文件",
          "pronunciation": "/ɛm viː/",
          "example": "mv old.txt new.txt",
          "category": "file-operations"
        },
        {
          "id": "t008",
          "english": "touch",
          "chinese": "创建空文件或更新时间戳",
          "pronunciation": "/tʌtʃ/",
          "example": "touch newfile.txt",
          "category": "file-operations"
        },
        {
          "id": "t009",
          "english": "chmod (change mode)",
          "chinese": "更改文件权限",
          "pronunciation": "/ˈsiː mɒd/",
          "example": "chmod 755 script.sh",
          "category": "permissions"
        },
        {
          "id": "t010",
          "english": "sudo (superuser do)",
          "chinese": "以超级用户执行",
          "pronunciation": "/ˈsuːduː/",
          "example": "sudo apt-get update",
          "category": "permissions"
        },
        {
          "id": "t011",
          "english": "grep (global regular expression print)",
          "chinese": "文本搜索工具",
          "pronunciation": "/ɡrɛp/",
          "example": "grep 'error' log.txt",
          "category": "text-processing"
        },
        {
          "id": "t012",
          "english": "pipe",
          "chinese": "管道（将输出传递给下一个命令）",
          "pronunciation": "/paɪp/",
          "example": "cat file.txt | grep 'pattern'",
          "category": "text-processing"
        },
        {
          "id": "t013",
          "english": "echo",
          "chinese": "输出文本",
          "pronunciation": "/ˈɛkoʊ/",
          "example": "echo 'Hello World'",
          "category": "text-processing"
        },
        {
          "id": "t014",
          "english": "cat (concatenate)",
          "chinese": "查看文件内容",
          "pronunciation": "/kæt/",
          "example": "cat file.txt",
          "category": "text-processing"
        },
        {
          "id": "t015",
          "english": "nano / vim",
          "chinese": "文本编辑器",
          "pronunciation": "/ˈnɑːnoʊ / vɪm/",
          "example": "nano config.txt",
          "category": "editors"
        },
        {
          "id": "t016",
          "english": "find",
          "chinese": "查找文件",
          "pronunciation": "/faɪnd/",
          "example": "find . -name '*.txt'",
          "category": "search"
        },
        {
          "id": "t017",
          "english": "locate",
          "chinese": "快速定位文件",
          "pronunciation": "/ˈloʊkeɪt/",
          "example": "locate filename",
          "category": "search"
        },
        {
          "id": "t018",
          "english": "which",
          "chinese": "查找命令位置",
          "pronunciation": "/wɪtʃ/",
          "example": "which python",
          "category": "search"
        },
        {
          "id": "t019",
          "english": "whereis",
          "chinese": "查找程序位置",
          "pronunciation": "/ˈwɛərɪz/",
          "example": "whereis java",
          "category": "search"
        },
        {
          "id": "t020",
          "english": "top",
          "chinese": "显示进程状态",
          "pronunciation": "/tɒp/",
          "example": "top -u username",
          "category": "process"
        },
        {
          "id": "t021",
          "english": "ps (process status)",
          "chinese": "查看进程",
          "pronunciation": "/piː ɛs/",
          "example": "ps aux | grep nginx",
          "category": "process"
        },
        {
          "id": "t022",
          "english": "kill",
          "chinese": "终止进程",
          "pronunciation": "/kɪl/",
          "example": "kill -9 PID",
          "category": "process"
        },
        {
          "id": "t023",
          "english": "pkill",
          "chinese": "按名称终止进程",
          "pronunciation": "/piː kɪl/",
          "example": "pkill -f process_name",
          "category": "process"
        },
        {
          "id": "t024",
          "english": "tar",
          "chinese": "归档工具",
          "pronunciation": "/tɑːr/",
          "example": "tar -czvf archive.tar.gz folder/",
          "category": "compression"
        },
        {
          "id": "t025",
          "english": "gzip",
          "chinese": "压缩文件",
          "pronunciation": "/dʒiː zɪp/",
          "example": "gzip file.txt",
          "category": "compression"
        },
        {
          "id": "t026",
          "english": "zip / unzip",
          "chinese": "ZIP压缩/解压",
          "pronunciation": "/zɪp / ʌnˈzɪp/",
          "example": "zip -r archive.zip folder/",
          "category": "compression"
        },
        {
          "id": "t027",
          "english": "ssh (Secure Shell)",
          "chinese": "安全远程登录",
          "pronunciation": "/ɛs ɛs eɪtʃ/",
          "example": "ssh user@hostname",
          "category": "network"
        },
        {
          "id": "t028",
          "english": "scp (secure copy)",
          "chinese": "安全复制文件",
          "pronunciation": "/ɛs siː piː/",
          "example": "scp file.txt user@host:/path/",
          "category": "network"
        },
        {
          "id": "t029",
          "english": "wget",
          "chinese": "下载文件",
          "pronunciation": "/dʌbəljuː ɡɛt/",
          "example": "wget https://example.com/file.zip",
          "category": "network"
        },
        {
          "id": "t030",
          "english": "curl",
          "chinese": "传输数据工具",
          "pronunciation": "/kɜːrl/",
          "example": "curl -O https://example.com/file",
          "category": "network"
        },
        {
          "id": "t031",
          "english": "df (disk free)",
          "chinese": "查看磁盘空间",
          "pronunciation": "/diː ɛf/",
          "example": "df -h",
          "category": "disk"
        },
        {
          "id": "t032",
          "english": "du (disk usage)",
          "chinese": "查看目录大小",
          "pronunciation": "/diː juː/",
          "example": "du -sh directory/",
          "category": "disk"
        },
        {
          "id": "t033",
          "english": "free",
          "chinese": "查看内存使用",
          "pronunciation": "/friː/",
          "example": "free -h",
          "category": "system"
        },
        {
          "id": "t034",
          "english": "uptime",
          "chinese": "查看系统运行时间",
          "pronunciation": "/ˈʌptaɪm/",
          "example": "uptime",
          "category": "system"
        },
        {
          "id": "t035",
          "english": "head",
          "chinese": "查看文件开头",
          "pronunciation": "/hɛd/",
          "example": "head -n 20 file.txt",
          "category": "viewing"
        },
        {
          "id": "t036",
          "english": "tail",
          "chinese": "查看文件末尾",
          "pronunciation": "/teɪl/",
          "example": "tail -f log.txt",
          "category": "viewing"
        },
        {
          "id": "t037",
          "english": "less",
          "chinese": "分页查看文件",
          "pronunciation": "/lɛs/",
          "example": "less largefile.txt",
          "category": "viewing"
        },
        {
          "id": "t038",
          "english": "more",
          "chinese": "分页查看（简化版）",
          "pronunciation": "/mɔːr/",
          "example": "more file.txt",
          "category": "viewing"
        },
        {
          "id": "t039",
          "english": "wc (word count)",
          "chinese": "统计行数/字数",
          "pronunciation": "/dʌbəljuː siː/",
          "example": "wc -l file.txt",
          "category": "text-processing"
        },
        {
          "id": "t040",
          "english": "sort",
          "chinese": "排序",
          "pronunciation": "/sɔːrt/",
          "example": "sort -n numbers.txt",
          "category": "text-processing"
        },
        {
          "id": "t041",
          "english": "uniq",
          "chinese": "去重",
          "pronunciation": "/juːˈniːk/",
          "example": "sort file.txt | uniq",
          "category": "text-processing"
        },
        {
          "id": "t042",
          "english": "diff",
          "chinese": "比较文件差异",
          "pronunciation": "/dɪf/",
          "example": "diff file1.txt file2.txt",
          "category": "text-processing"
        },
        {
          "id": "t043",
          "english": "alias",
          "chinese": "设置命令别名",
          "pronunciation": "/ˈeɪliəs/",
          "example": "alias ll='ls -la'",
          "category": "shell"
        },
        {
          "id": "t044",
          "english": "export",
          "chinese": "设置环境变量",
          "pronunciation": "/ˈɛkspɔːrt/",
          "example": "export PATH=$PATH:/new/path",
          "category": "shell"
        },
        {
          "id": "t045",
          "english": "source",
          "chinese": "执行脚本（当前shell）",
          "pronunciation": "/sɔːrs/",
          "example": "source ~/.bashrc",
          "category": "shell"
        },
        {
          "id": "t046",
          "english": "man",
          "chinese": "查看手册页",
          "pronunciation": "/mæn/",
          "example": "man ls",
          "category": "documentation"
        },
        {
          "id": "t047",
          "english": "history",
          "chinese": "查看命令历史",
          "pronunciation": "/ˈhɪstəri/",
          "example": "history | grep ssh",
          "category": "shell"
        },
        {
          "id": "t048",
          "english": "clear",
          "chinese": "清屏",
          "pronunciation": "/klɪər/",
          "example": "clear",
          "category": "shell"
        },
        {
          "id": "t049",
          "english": "exit",
          "chinese": "退出",
          "pronunciation": "/ˈɛksɪt/",
          "example": "exit",
          "category": "shell"
        },
        {
          "id": "t050",
          "english": "whoami",
          "chinese": "显示当前用户",
          "pronunciation": "/huːˈɑːmiː/",
          "example": "whoami",
          "category": "system"
        }
      ]
    },
    {
      "id": "git-commands",
      "name": "Git Commands",
      "nameCN": "Git命令",
      "description": "Version control with Git",
      "items": [
        {
          "id": "g001",
          "english": "git init",
          "chinese": "初始化仓库",
          "pronunciation": "/ɡɪt ɪˈnɪt/",
          "example": "git init",
          "category": "repository"
        },
        {
          "id": "g002",
          "english": "git clone",
          "chinese": "克隆仓库",
          "pronunciation": "/ɡɪt kloʊn/",
          "example": "git clone https://github.com/user/repo.git",
          "category": "repository"
        },
        {
          "id": "g003",
          "english": "git add",
          "chinese": "添加文件到暂存区",
          "pronunciation": "/ɡɪt æd/",
          "example": "git add .",
          "category": "staging"
        },
        {
          "id": "g004",
          "english": "git commit",
          "chinese": "提交更改",
          "pronunciation": "/ɡɪt kəˈmɪt/",
          "example": "git commit -m 'Initial commit'",
          "category": "staging"
        },
        {
          "id": "g005",
          "english": "git push",
          "chinese": "推送到远程",
          "pronunciation": "/ɡɪt pʊʃ/",
          "example": "git push origin main",
          "category": "remote"
        },
        {
          "id": "g006",
          "english": "git pull",
          "chinese": "拉取更新",
          "pronunciation": "/ɡɪt pʊl/",
          "example": "git pull origin main",
          "category": "remote"
        },
        {
          "id": "g007",
          "english": "git status",
          "chinese": "查看状态",
          "pronunciation": "/ɡɪt ˈsteɪtəs/",
          "example": "git status",
          "category": "status"
        },
        {
          "id": "g008",
          "english": "git branch",
          "chinese": "分支操作",
          "pronunciation": "/ɡɪt bræntʃ/",
          "example": "git branch feature-branch",
          "category": "branching"
        },
        {
          "id": "g009",
          "english": "git checkout",
          "chinese": "切换分支",
          "pronunciation": "/ɡɪt ˈtʃɛkaʊt/",
          "example": "git checkout main",
          "category": "branching"
        },
        {
          "id": "g010",
          "english": "git merge",
          "chinese": "合并分支",
          "pronunciation": "/ɡɪt mɜːrdʒ/",
          "example": "git merge feature-branch",
          "category": "branching"
        },
        {
          "id": "g011",
          "english": "git log",
          "chinese": "查看提交历史",
          "pronunciation": "/ɡɪt lɒɡ/",
          "example": "git log --oneline",
          "category": "history"
        },
        {
          "id": "g012",
          "english": "git stash",
          "chinese": "暂存更改",
          "pronunciation": "/ɡɪt stæʃ/",
          "example": "git stash",
          "category": "workflow"
        },
        {
          "id": "g013",
          "english": "git rebase",
          "chinese": "变基",
          "pronunciation": "/ɡɪt riːˈbeɪs/",
          "example": "git rebase main",
          "category": "advanced"
        },
        {
          "id": "g014",
          "english": "git remote",
          "chinese": "远程仓库管理",
          "pronunciation": "/ɡɪt ˈriːmoʊt/",
          "example": "git remote add origin <url>",
          "category": "remote"
        },
        {
          "id": "g015",
          "english": "README",
          "chinese": "项目说明文档",
          "pronunciation": "/ˈridˌmi/",
          "example": "See README.md for details",
          "category": "documentation"
        },
        {
          "id": "g016",
          "english": "git fetch",
          "chinese": "获取远程更新",
          "pronunciation": "/ɡɪt fɛtʃ/",
          "example": "git fetch origin",
          "category": "remote"
        },
        {
          "id": "g017",
          "english": "git diff",
          "chinese": "查看差异",
          "pronunciation": "/ɡɪt dɪf/",
          "example": "git diff HEAD~1",
          "category": "status"
        },
        {
          "id": "g018",
          "english": "git reset",
          "chinese": "重置到指定版本",
          "pronunciation": "/ɡɪt ˈrɛsɛt/",
          "example": "git reset --hard HEAD~1",
          "category": "history"
        },
        {
          "id": "g019",
          "english": "git revert",
          "chinese": "撤销提交（创建新提交）",
          "pronunciation": "/ɡɪt rɪˈvɜːrt/",
          "example": "git revert HEAD",
          "category": "history"
        },
        {
          "id": "g020",
          "english": "git cherry-pick",
          "chinese": "拣选提交",
          "pronunciation": "/ɡɪt ˈtʃɛri pɪk/",
          "example": "git cherry-pick abc123",
          "category": "advanced"
        },
        {
          "id": "g021",
          "english": "git tag",
          "chinese": "标签管理",
          "pronunciation": "/ɡɪt tæɡ/",
          "example": "git tag -a v1.0 -m 'Version 1.0'",
          "category": "versioning"
        },
        {
          "id": "g022",
          "english": "git submodule",
          "chinese": "子模块",
          "pronunciation": "/ɡɪt ˈsʌbˌmɒdjuːl/",
          "example": "git submodule update --init",
          "category": "advanced"
        },
        {
          "id": "g023",
          "english": "git bisect",
          "chinese": "二分查找问题提交",
          "pronunciation": "/ɡɪt ˈbaɪsɛkt/",
          "example": "git bisect start",
          "category": "debugging"
        },
        {
          "id": "g024",
          "english": "git blame",
          "chinese": "查看行级提交信息",
          "pronunciation": "/ɡɪt bleɪm/",
          "example": "git blame filename",
          "category": "debugging"
        },
        {
          "id": "g025",
          "english": "git reflog",
          "chinese": "查看引用日志",
          "pronunciation": "/ɡɪt ˈrɛflɒɡ/",
          "example": "git reflog",
          "category": "history"
        },
        {
          "id": "g026",
          "english": "git clean",
          "chinese": "清理未跟踪文件",
          "pronunciation": "/ɡɪt kliːn/",
          "example": "git clean -fd",
          "category": "maintenance"
        },
        {
          "id": "g027",
          "english": "git archive",
          "chinese": "归档导出",
          "pronunciation": "/ɡɪt ˈɑːrkaɪv/",
          "example": "git archive --format=tar HEAD",
          "category": "export"
        },
        {
          "id": "g028",
          "english": "git notes",
          "chinese": "为提交添加注释",
          "pronunciation": "/ɡɪt noʊts/",
          "example": "git notes add -m 'Note' HEAD",
          "category": "advanced"
        },
        {
          "id": "g029",
          "english": "git worktree",
          "chinese": "多工作树",
          "pronunciation": "/ɡɪt ˈwɜːrktriː/",
          "example": "git worktree add ../branch folder",
          "category": "advanced"
        },
        {
          "id": "g030",
          "english": "git config",
          "chinese": "配置Git",
          "pronunciation": "/ɡɪt ˈkɒnfɪɡ/",
          "example": "git config --global user.name 'Name'",
          "category": "configuration"
        },
        {
          "id": "g031",
          "english": "gitignore",
          "chinese": "忽略文件配置",
          "pronunciation": "/ɡɪt ɪɡˈnɔːr/",
          "example": "Add patterns to .gitignore",
          "category": "configuration"
        },
        {
          "id": "g032",
          "english": "git hooks",
          "chinese": "Git钩子",
          "pronunciation": "/ɡɪt hʊks/",
          "example": "Configure pre-commit hook",
          "category": "automation"
        },
        {
          "id": "g033",
          "english": "git describe",
          "chinese": "描述版本",
          "pronunciation": "/ɡɪt dɪˈskraɪb/",
          "example": "git describe --tags",
          "category": "versioning"
        },
        {
          "id": "g034",
          "english": "git shortlog",
          "chinese": "提交统计摘要",
          "pronunciation": "/ɡɪt ˈʃɔːrtlɒɡ/",
          "example": "git shortlog -sn",
          "category": "statistics"
        },
        {
          "id": "g035",
          "english": "git show",
          "chinese": "显示提交详情",
          "pronunciation": "/ɡɪt ʃoʊ/",
          "example": "git show HEAD",
          "category": "history"
        },
        {
          "id": "g036",
          "english": "git rm",
          "chinese": "删除文件并暂存",
          "pronunciation": "/ɡɪt ɑːr ɛm/",
          "example": "git rm filename",
          "category": "staging"
        },
        {
          "id": "g037",
          "english": "git mv",
          "chinese": "移动/重命名文件",
          "pronunciation": "/ɡɪt ɛm viː/",
          "example": "git mv old.txt new.txt",
          "category": "staging"
        },
        {
          "id": "g038",
          "english": "git am",
          "chinese": "应用补丁",
          "pronunciation": "/ɡɪt eɪ ɛm/",
          "example": "git am < patch.txt",
          "category": "patch"
        },
        {
          "id": "g039",
          "english": "git format-patch",
          "chinese": "生成补丁",
          "pronunciation": "/ɡɪt ˈfɔːrmæt pætʃ/",
          "example": "git format-patch HEAD~3",
          "category": "patch"
        },
        {
          "id": "g040",
          "english": "git apply",
          "chinese": "应用补丁",
          "pronunciation": "/ɡɪt əˈplaɪ/",
          "example": "git apply patch.diff",
          "category": "patch"
        },
        {
          "id": "g041",
          "english": "git bundle",
          "chinese": "打包仓库",
          "pronunciation": "/ɡɪt ˈbʌndl/",
          "example": "git bundle create repo.bundle HEAD",
          "category": "export"
        },
        {
          "id": "g042",
          "english": "git sparse-checkout",
          "chinese": "稀疏检出",
          "pronunciation": "/ɡɪt spɑːrs ˈtʃɛkaʊt/",
          "example": "git sparse-checkout init",
          "category": "advanced"
        },
        {
          "id": "g043",
          "english": "git maintenance",
          "chinese": "仓库维护",
          "pronunciation": "/ɡɪt ˈmeɪntənəns/",
          "example": "git maintenance start",
          "category": "maintenance"
        },
        {
          "id": "g044",
          "english": "git restore",
          "chinese": "恢复文件",
          "pronunciation": "/ɡɪt rɪˈstɔːr/",
          "example": "git restore filename",
          "category": "workflow"
        },
        {
          "id": "g045",
          "english": "git switch",
          "chinese": "切换分支（新命令）",
          "pronunciation": "/ɡɪt swɪtʃ/",
          "example": "git switch main",
          "category": "branching"
        },
        {
          "id": "g046",
          "english": "Fast-forward",
          "chinese": "快进合并",
          "pronunciation": "/fɑːst ˈfɔːrwərd/",
          "example": "Fast-forward merge",
          "category": "branching"
        },
        {
          "id": "g047",
          "english": "HEAD",
          "chinese": "当前分支最新提交",
          "pronunciation": "/hɛd/",
          "example": "Reset to HEAD",
          "category": "concepts"
        },
        {
          "id": "g048",
          "english": "Detached HEAD",
          "chinese": "分离头指针",
          "pronunciation": "/dɪˈtætʃt hɛd/",
          "example": "You are in detached HEAD state",
          "category": "concepts"
        },
        {
          "id": "g049",
          "english": "Index / Staging area",
          "chinese": "暂存区/索引",
          "pronunciation": "/ˈɪndɛks / ˈsteɪdʒɪŋ ˈɛəriə/",
          "example": "Add files to the index",
          "category": "concepts"
        },
        {
          "id": "g050",
          "english": "origin",
          "chinese": "默认远程仓库名",
          "pronunciation": "/ˈɒrɪdʒɪn/",
          "example": "git push origin main",
          "category": "concepts"
        }
      ]
    },
    {
      "id": "error-messages",
      "name": "Error Messages",
      "nameCN": "错误信息",
      "description": "Common error messages and their meanings",
      "items": [
        {
          "id": "e001",
          "english": "Permission denied",
          "chinese": "权限被拒绝",
          "pronunciation": "/pərˈmɪʃən dɪˈnaɪd/",
          "example": "Permission denied: unable to access file",
          "category": "access"
        },
        {
          "id": "e002",
          "english": "File not found",
          "chinese": "文件未找到",
          "pronunciation": "/faɪl nɒt faʊnd/",
          "example": "Error: File not found: config.json",
          "category": "files"
        },
        {
          "id": "e003",
          "english": "Connection refused",
          "chinese": "连接被拒绝",
          "pronunciation": "/kəˈnɛkʃən rɪˈfjuːzd/",
          "example": "Connection refused on port 8080",
          "category": "network"
        },
        {
          "id": "e004",
          "english": "Segmentation fault",
          "chinese": "段错误（内存访问错误）",
          "pronunciation": "/ˌsɛɡmɛnˈteɪʃən fɒlt/",
          "example": "Segmentation fault (core dumped)",
          "category": "runtime"
        },
        {
          "id": "e005",
          "english": "Out of memory",
          "chinese": "内存不足",
          "pronunciation": "/aʊt ʌv ˈmɛməri/",
          "example": "Error: Out of memory",
          "category": "runtime"
        },
        {
          "id": "e006",
          "english": "Syntax error",
          "chinese": "语法错误",
          "pronunciation": "/ˈsɪntæks ˈɛrər/",
          "example": "Syntax error: unexpected token",
          "category": "compilation"
        },
        {
          "id": "e007",
          "english": "Undefined reference",
          "chinese": "未定义的引用",
          "pronunciation": "/ˌʌndɪˈfaɪnd ˈrɛfrəns/",
          "example": "undefined reference to function",
          "category": "compilation"
        },
        {
          "id": "e008",
          "english": "Fatal error",
          "chinese": "致命错误",
          "pronunciation": "/ˈfeɪtl ˈɛrər/",
          "example": "Fatal error: cannot allocate memory",
          "category": "critical"
        },
        {
          "id": "e009",
          "english": "Timeout",
          "chinese": "超时",
          "pronunciation": "/ˈtaɪmaʊt/",
          "example": "Request timeout after 30 seconds",
          "category": "network"
        },
        {
          "id": "e010",
          "english": "Access denied",
          "chinese": "访问被拒绝",
          "pronunciation": "/ˈæksɛs dɪˈnaɪd/",
          "example": "Access denied: authentication required",
          "category": "access"
        },
        {
          "id": "e011",
          "english": "Null pointer exception",
          "chinese": "空指针异常",
          "pronunciation": "/nʌl ˈpɔɪntər ɪkˈsɛpʃən/",
          "example": "java.lang.NullPointerException",
          "category": "runtime"
        },
        {
          "id": "e012",
          "english": "Stack overflow",
          "chinese": "栈溢出",
          "pronunciation": "/stæk ˈoʊvərˌfloʊ/",
          "example": "Stack overflow error",
          "category": "runtime"
        },
        {
          "id": "e013",
          "english": "Resource temporarily unavailable",
          "chinese": "资源暂时不可用",
          "pronunciation": "/ˈriːsɔːrs ˈtɛmpərɛrəli ˌʌnəˈveɪləbl/",
          "example": "Resource temporarily unavailable",
          "category": "system"
        },
        {
          "id": "e014",
          "english": "No such file or directory",
          "chinese": "无此文件或目录",
          "pronunciation": "/noʊ sʌtʃ faɪl ɔːr dɪˈrɛktəri/",
          "example": "No such file or directory: /path/to/file",
          "category": "files"
        },
        {
          "id": "e015",
          "english": "Disk full",
          "chinese": "磁盘已满",
          "pronunciation": "/dɪsk fʊl/",
          "example": "Error writing file: Disk full",
          "category": "system"
        },
        {
          "id": "e016",
          "english": "Bad gateway",
          "chinese": "网关错误",
          "pronunciation": "/bæd ˈɡeɪtweɪ/",
          "example": "502 Bad Gateway",
          "category": "http"
        },
        {
          "id": "e017",
          "english": "Service unavailable",
          "chinese": "服务不可用",
          "pronunciation": "/ˈsɜːrvɪs ˌʌnəˈveɪləbl/",
          "example": "503 Service Unavailable",
          "category": "http"
        },
        {
          "id": "e018",
          "english": "Gateway timeout",
          "chinese": "网关超时",
          "pronunciation": "/ˈɡeɪtweɪ ˈtaɪmaʊt/",
          "example": "504 Gateway Timeout",
          "category": "http"
        },
        {
          "id": "e019",
          "english": "Internal server error",
          "chinese": "服务器内部错误",
          "pronunciation": "/ɪnˈtɜːrnl ˈsɜːrvər ˈɛrər/",
          "example": "500 Internal Server Error",
          "category": "http"
        },
        {
          "id": "e020",
          "english": "Not implemented",
          "chinese": "未实现",
          "pronunciation": "/nɒt ˈɪmplɪmɛntɪd/",
          "example": "501 Not Implemented",
          "category": "http"
        },
        {
          "id": "e021",
          "english": "Method not allowed",
          "chinese": "方法不被允许",
          "pronunciation": "/ˈmɛθəd nɒt əˈlaʊd/",
          "example": "405 Method Not Allowed",
          "category": "http"
        },
        {
          "id": "e022",
          "english": "Not acceptable",
          "chinese": "不接受",
          "pronunciation": "/nɒt ækˈsɛptəbl/",
          "example": "406 Not Acceptable",
          "category": "http"
        },
        {
          "id": "e023",
          "english": "Request entity too large",
          "chinese": "请求实体过大",
          "pronunciation": "/rɪˈkwɛst ˈɛntɪti tuː lɑːrdʒ/",
          "example": "413 Request Entity Too Large",
          "category": "http"
        },
        {
          "id": "e024",
          "english": "Too many requests",
          "chinese": "请求过多",
          "pronunciation": "/tuː ˈmɛni rɪˈkwɛsts/",
          "example": "429 Too Many Requests",
          "category": "http"
        },
        {
          "id": "e025",
          "english": "SSL certificate error",
          "chinese": "SSL证书错误",
          "pronunciation": "/ɛs ɛs ɛl sərˈtɪfɪkət ˈɛrər/",
          "example": "SSL certificate verification failed",
          "category": "security"
        },
        {
          "id": "e026",
          "english": "Host not found",
          "chinese": "主机未找到",
          "pronunciation": "/hoʊst nɒt faʊnd/",
          "example": "Host not found: unknown host",
          "category": "network"
        },
        {
          "id": "e027",
          "english": "Network unreachable",
          "chinese": "网络不可达",
          "pronunciation": "/ˈnɛtwɜːrk ʌnˈriːtʃəbl/",
          "example": "Network is unreachable",
          "category": "network"
        },
        {
          "id": "e028",
          "english": "Broken pipe",
          "chinese": "管道破裂",
          "pronunciation": "/ˈbroʊkən paɪp/",
          "example": "write error: Broken pipe",
          "category": "io"
        },
        {
          "id": "e029",
          "english": "Input/output error",
          "chinese": "输入输出错误",
          "pronunciation": "/ˈɪnpʊt ˈaʊtpʊt ˈɛrər/",
          "example": "I/O error reading file",
          "category": "io"
        },
        {
          "id": "e030",
          "english": "Device or resource busy",
          "chinese": "设备或资源忙",
          "pronunciation": "/dɪˈvaɪs ɔːr ˈriːsɔːrs ˈbɪzi/",
          "example": "Device or resource busy",
          "category": "system"
        },
        {
          "id": "e031",
          "english": "Read-only file system",
          "chinese": "只读文件系统",
          "pronunciation": "/riːd ˈoʊnli faɪl ˈsɪstəm/",
          "example": "Read-only file system",
          "category": "system"
        },
        {
          "id": "e032",
          "english": "Too many open files",
          "chinese": "打开文件过多",
          "pronunciation": "/tuː ˈmɛni ˈoʊpən faɪlz/",
          "example": "Too many open files",
          "category": "system"
        },
        {
          "id": "e033",
          "english": "Invalid argument",
          "chinese": "无效参数",
          "pronunciation": "/ɪnˈvælɪd ˈɑːrɡjumənt/",
          "example": "Invalid argument supplied",
          "category": "compilation"
        },
        {
          "id": "e034",
          "english": "Floating point exception",
          "chinese": "浮点运算异常",
          "pronunciation": "/ˈfloʊtɪŋ pɔɪnt ɪkˈsɛpʃən/",
          "example": "Floating point exception (core dumped)",
          "category": "runtime"
        },
        {
          "id": "e035",
          "english": "Bus error",
          "chinese": "总线错误",
          "pronunciation": "/bʌs ˈɛrər/",
          "example": "Bus error (core dumped)",
          "category": "runtime"
        },
        {
          "id": "e036",
          "english": "Illegal instruction",
          "chinese": "非法指令",
          "pronunciation": "/ɪˈliːɡəl ɪnˈstrʌkʃən/",
          "example": "Illegal instruction (core dumped)",
          "category": "runtime"
        },
        {
          "id": "e037",
          "english": "Core dumped",
          "chinese": "核心转储",
          "pronunciation": "/kɔːr dʌmpt/",
          "example": "Segmentation fault (core dumped)",
          "category": "runtime"
        },
        {
          "id": "e038",
          "english": "Cannot allocate memory",
          "chinese": "无法分配内存",
          "pronunciation": "/kæˈnɒt ˈæləkeɪt ˈmɛməri/",
          "example": "Cannot allocate memory",
          "category": "runtime"
        },
        {
          "id": "e039",
          "english": "Module not found",
          "chinese": "模块未找到",
          "pronunciation": "/ˈmɒdjuːl nɒt faʊnd/",
          "example": "Error: Module not found: './module'",
          "category": "compilation"
        },
        {
          "id": "e040",
          "english": "Import error",
          "chinese": "导入错误",
          "pronunciation": "/ˈɪmpɔːrt ˈɛrər/",
          "example": "ImportError: No module named 'xxx'",
          "category": "compilation"
        },
        {
          "id": "e041",
          "english": "Type error",
          "chinese": "类型错误",
          "pronunciation": "/taɪp ˈɛrər/",
          "example": "TypeError: Cannot read property of undefined",
          "category": "compilation"
        },
        {
          "id": "e042",
          "english": "Reference error",
          "chinese": "引用错误",
          "pronunciation": "/ˈrɛfrəns ˈɛrər/",
          "example": "ReferenceError: x is not defined",
          "category": "compilation"
        },
        {
          "id": "e043",
          "english": "Range error",
          "chinese": "范围错误",
          "pronunciation": "/reɪndʒ ˈɛrər/",
          "example": "RangeError: Maximum call stack exceeded",
          "category": "runtime"
        },
        {
          "id": "e044",
          "english": "Unhandled exception",
          "chinese": "未处理的异常",
          "pronunciation": "/ʌnˈhændld ɪkˈsɛpʃən/",
          "example": "Unhandled exception occurred",
          "category": "runtime"
        },
        {
          "id": "e045",
          "english": "Assertion failed",
          "chinese": "断言失败",
          "pronunciation": "/əˈsɜːrʃən feɪld/",
          "example": "Assertion failed: condition is false",
          "category": "testing"
        },
        {
          "id": "e046",
          "english": "Dependency not found",
          "chinese": "依赖未找到",
          "pronunciation": "/dɪˈpɛndənsi nɒt faʊnd/",
          "example": "Dependency not found: package@version",
          "category": "compilation"
        },
        {
          "id": "e047",
          "english": "Version mismatch",
          "chinese": "版本不匹配",
          "pronunciation": "/ˈvɜːrʒən mɪsˈmætʃ/",
          "example": "Version mismatch: expected v2, got v1",
          "category": "compilation"
        },
        {
          "id": "e048",
          "english": "Circular dependency",
          "chinese": "循环依赖",
          "pronunciation": "/ˈsɜːrkjələr dɪˈpɛndənsi/",
          "example": "Circular dependency detected",
          "category": "compilation"
        },
        {
          "id": "e049",
          "english": "Deadlock",
          "chinese": "死锁",
          "pronunciation": "/ˈdɛdlɒk/",
          "example": "Deadlock detected in thread pool",
          "category": "runtime"
        },
        {
          "id": "e050",
          "english": "Race condition",
          "chinese": "竞态条件",
          "pronunciation": "/reɪs kənˈdɪʃən/",
          "example": "Race condition in concurrent access",
          "category": "runtime"
        }
      ]
    },
    {
      "id": "programming-terms",
      "name": "Programming Terms",
      "nameCN": "编程术语",
      "description": "Essential programming vocabulary",
      "items": [
        {
          "id": "p001",
          "english": "Variable",
          "chinese": "变量",
          "pronunciation": "/ˈvɛəriəbl/",
          "example": "Declare a variable: let x = 10",
          "category": "basics"
        },
        {
          "id": "p002",
          "english": "Function",
          "chinese": "函数",
          "pronunciation": "/ˈfʌŋkʃən/",
          "example": "Define a function to calculate sum",
          "category": "basics"
        },
        {
          "id": "p003",
          "english": "Array",
          "chinese": "数组",
          "pronunciation": "/əˈreɪ/",
          "example": "Create an array: [1, 2, 3]",
          "category": "data-structures"
        },
        {
          "id": "p004",
          "english": "Object",
          "chinese": "对象",
          "pronunciation": "/ˈɒbdʒɪkt/",
          "example": "Create an object with properties",
          "category": "data-structures"
        },
        {
          "id": "p005",
          "english": "Class",
          "chinese": "类",
          "pronunciation": "/klæs/",
          "example": "Define a class: class MyClass {}",
          "category": "oop"
        },
        {
          "id": "p006",
          "english": "Method",
          "chinese": "方法",
          "pronunciation": "/ˈmɛθəd/",
          "example": "Call the method: obj.method()",
          "category": "oop"
        },
        {
          "id": "p007",
          "english": "Constructor",
          "chinese": "构造函数",
          "pronunciation": "/kənˈstrʌktər/",
          "example": "The constructor initializes the object",
          "category": "oop"
        },
        {
          "id": "p008",
          "english": "Inheritance",
          "chinese": "继承",
          "pronunciation": "/ɪnˈhɛrɪtəns/",
          "example": "Use inheritance to extend the base class",
          "category": "oop"
        },
        {
          "id": "p009",
          "english": "Interface",
          "chinese": "接口",
          "pronunciation": "/ˈɪntərfeɪs/",
          "example": "Implement the interface",
          "category": "oop"
        },
        {
          "id": "p010",
          "english": "Callback",
          "chinese": "回调函数",
          "pronunciation": "/ˈkɔːlbæk/",
          "example": "Pass a callback function to handle async operations",
          "category": "async"
        },
        {
          "id": "p011",
          "english": "Promise",
          "chinese": "承诺/异步对象",
          "pronunciation": "/ˈprɒmɪs/",
          "example": "Return a Promise that resolves to data",
          "category": "async"
        },
        {
          "id": "p012",
          "english": "Async/Await",
          "chinese": "异步/等待",
          "pronunciation": "/əˈsɪŋk / əˈweɪt/",
          "example": "Use async/await for cleaner async code",
          "category": "async"
        },
        {
          "id": "p013",
          "english": "API (Application Programming Interface)",
          "chinese": "应用程序接口",
          "pronunciation": "/ˈeɪˌpiːˈaɪ/",
          "example": "Call the REST API endpoint",
          "category": "web"
        },
        {
          "id": "p014",
          "english": "JSON (JavaScript Object Notation)",
          "chinese": "JavaScript对象表示法",
          "pronunciation": "/ˈdʒeɪsən/",
          "example": "Parse the JSON response",
          "category": "data"
        },
        {
          "id": "p015",
          "english": "Debug",
          "chinese": "调试",
          "pronunciation": "/diːˈbʌɡ/",
          "example": "Debug the application to find the issue",
          "category": "development"
        },
        {
          "id": "p016",
          "english": "Compile",
          "chinese": "编译",
          "pronunciation": "/kəmˈpaɪl/",
          "example": "Compile the source code",
          "category": "development"
        },
        {
          "id": "p017",
          "english": "Runtime",
          "chinese": "运行时",
          "pronunciation": "/ˈrʌntaɪm/",
          "example": "Error occurred at runtime",
          "category": "basics"
        },
        {
          "id": "p018",
          "english": "Syntax",
          "chinese": "语法",
          "pronunciation": "/ˈsɪntæks/",
          "example": "Check the syntax of the code",
          "category": "basics"
        },
        {
          "id": "p019",
          "english": "Loop",
          "chinese": "循环",
          "pronunciation": "/luːp/",
          "example": "Use a for loop to iterate",
          "category": "basics"
        },
        {
          "id": "p020",
          "english": "Condition",
          "chinese": "条件",
          "pronunciation": "/kənˈdɪʃən/",
          "example": "Check the condition first",
          "category": "basics"
        },
        {
          "id": "p021",
          "english": "Exception",
          "chinese": "异常",
          "pronunciation": "/ɪkˈsɛpʃən/",
          "example": "Throw an exception",
          "category": "basics"
        },
        {
          "id": "p022",
          "english": "Iterate",
          "chinese": "迭代",
          "pronunciation": "/ˈɪtəreɪt/",
          "example": "Iterate over the collection",
          "category": "basics"
        },
        {
          "id": "p023",
          "english": "List",
          "chinese": "列表",
          "pronunciation": "/lɪst/",
          "example": "Create a list of items",
          "category": "data-structures"
        },
        {
          "id": "p024",
          "english": "Map",
          "chinese": "映射/字典",
          "pronunciation": "/mæp/",
          "example": "Use a map for key-value pairs",
          "category": "data-structures"
        },
        {
          "id": "p025",
          "english": "Set",
          "chinese": "集合",
          "pronunciation": "/sɛt/",
          "example": "Store unique items in a set",
          "category": "data-structures"
        },
        {
          "id": "p026",
          "english": "Tuple",
          "chinese": "元组",
          "pronunciation": "/ˈtʌpəl/",
          "example": "Return multiple values as a tuple",
          "category": "data-structures"
        },
        {
          "id": "p027",
          "english": "Stack Overflow",
          "chinese": "栈溢出",
          "pronunciation": "/stæk ˈoʊvərˌfloʊ/",
          "example": "Stack overflow in recursion",
          "category": "basics"
        },
        {
          "id": "p028",
          "english": "Heap",
          "chinese": "堆",
          "pronunciation": "/hiːp/",
          "example": "Objects are stored on the heap",
          "category": "memory"
        },
        {
          "id": "p029",
          "english": "Pointer",
          "chinese": "指针",
          "pronunciation": "/ˈpɔɪntər/",
          "example": "Dereference the pointer",
          "category": "memory"
        },
        {
          "id": "p030",
          "english": "Reference",
          "chinese": "引用",
          "pronunciation": "/ˈrɛfrəns/",
          "example": "Pass by reference",
          "category": "memory"
        },
        {
          "id": "p031",
          "english": "Value",
          "chinese": "值",
          "pronunciation": "/ˈvæljuː/",
          "example": "Pass by value",
          "category": "basics"
        },
        {
          "id": "p032",
          "english": "Scope",
          "chinese": "作用域",
          "pronunciation": "/skoʊp/",
          "example": "Variable scope is limited",
          "category": "basics"
        },
        {
          "id": "p033",
          "english": "Namespace",
          "chinese": "命名空间",
          "pronunciation": "/ˈneɪmspɛɪs/",
          "example": "Organize code in namespaces",
          "category": "basics"
        },
        {
          "id": "p034",
          "english": "Module",
          "chinese": "模块",
          "pronunciation": "/ˈmɒdjuːl/",
          "example": "Import the module",
          "category": "basics"
        },
        {
          "id": "p035",
          "english": "Import",
          "chinese": "导入",
          "pronunciation": "/ˈɪmpɔːrt/",
          "example": "Import the library",
          "category": "basics"
        },
        {
          "id": "p036",
          "english": "Export",
          "chinese": "导出",
          "pronunciation": "/ˈɛkspɔːrt/",
          "example": "Export the function",
          "category": "basics"
        },
        {
          "id": "p037",
          "english": "Generic",
          "chinese": "泛型",
          "pronunciation": "/dʒəˈnɛrɪk/",
          "example": "Define a generic type",
          "category": "oop"
        },
        {
          "id": "p038",
          "english": "Enum",
          "chinese": "枚举",
          "pronunciation": "/ˈiːnʌm/",
          "example": "Define an enum type",
          "category": "oop"
        },
        {
          "id": "p039",
          "english": "Struct",
          "chinese": "结构体",
          "pronunciation": "/strʌkt/",
          "example": "Define a struct",
          "category": "oop"
        },
        {
          "id": "p040",
          "english": "Polymorphism",
          "chinese": "多态",
          "pronunciation": "/ˌpɒliˈmɔːrfɪzəm/",
          "example": "Achieve polymorphism with inheritance",
          "category": "oop"
        },
        {
          "id": "p041",
          "english": "Encapsulation",
          "chinese": "封装",
          "pronunciation": "/ɪnˌkæpsjuˈleɪʃən/",
          "example": "Use encapsulation to hide details",
          "category": "oop"
        },
        {
          "id": "p042",
          "english": "Abstraction",
          "chinese": "抽象",
          "pronunciation": "/æbˈstrækʃən/",
          "example": "Apply abstraction to simplify",
          "category": "oop"
        },
        {
          "id": "p043",
          "english": "Singleton",
          "chinese": "单例模式",
          "pronunciation": "/ˈsɪŋɡltən/",
          "example": "Implement singleton pattern",
          "category": "patterns"
        },
        {
          "id": "p044",
          "english": "Factory",
          "chinese": "工厂模式",
          "pronunciation": "/ˈfæktəri/",
          "example": "Use factory pattern to create objects",
          "category": "patterns"
        },
        {
          "id": "p045",
          "english": "Observer",
          "chinese": "观察者模式",
          "pronunciation": "/əbˈzɜːrvər/",
          "example": "Implement observer pattern",
          "category": "patterns"
        },
        {
          "id": "p046",
          "english": "Decorator",
          "chinese": "装饰器模式",
          "pronunciation": "/ˈdɛkəreɪtər/",
          "example": "Apply decorator pattern",
          "category": "patterns"
        },
        {
          "id": "p047",
          "english": "Iterator",
          "chinese": "迭代器",
          "pronunciation": "/ˈɪtəreɪtər/",
          "example": "Use iterator to traverse",
          "category": "patterns"
        },
        {
          "id": "p048",
          "english": "Stream",
          "chinese": "流",
          "pronunciation": "/striːm/",
          "example": "Process data as a stream",
          "category": "io"
        },
        {
          "id": "p049",
          "english": "Buffer",
          "chinese": "缓冲区",
          "pronunciation": "/ˈbʌfər/",
          "example": "Write to the buffer",
          "category": "io"
        },
        {
          "id": "p050",
          "english": "Semaphore",
          "chinese": "信号量",
          "pronunciation": "/ˈsɛməfɔːr/",
          "example": "Use semaphore for synchronization",
          "category": "concurrency"
        }
      ]
    },
    {
      "id": "web-development",
      "name": "Web Development",
      "nameCN": "Web开发",
      "description": "Web development terminology",
      "items": [
        {
          "id": "w001",
          "english": "Frontend",
          "chinese": "前端",
          "pronunciation": "/ˈfrʌntɛnd/",
          "example": "Build the frontend with React",
          "category": "architecture"
        },
        {
          "id": "w002",
          "english": "Backend",
          "chinese": "后端",
          "pronunciation": "/ˈbækˌɛnd/",
          "example": "Develop the backend API",
          "category": "architecture"
        },
        {
          "id": "w003",
          "english": "Database",
          "chinese": "数据库",
          "pronunciation": "/ˈdeɪtəˌbeɪs/",
          "example": "Store data in the database",
          "category": "data"
        },
        {
          "id": "w004",
          "english": "Server",
          "chinese": "服务器",
          "pronunciation": "/ˈsɜːrvər/",
          "example": "Deploy to the production server",
          "category": "infrastructure"
        },
        {
          "id": "w005",
          "english": "Client",
          "chinese": "客户端",
          "pronunciation": "/ˈklaɪənt/",
          "example": "The client sends a request to the server",
          "category": "architecture"
        },
        {
          "id": "w006",
          "english": "Request",
          "chinese": "请求",
          "pronunciation": "/rɪˈkwɛst/",
          "example": "Handle the HTTP request",
          "category": "http"
        },
        {
          "id": "w007",
          "english": "Response",
          "chinese": "响应",
          "pronunciation": "/rɪˈspɒns/",
          "example": "Return a JSON response",
          "category": "http"
        },
        {
          "id": "w008",
          "english": "Endpoint",
          "chinese": "端点/接口地址",
          "pronunciation": "/ˈɛndˌpɔɪnt/",
          "example": "Create a new API endpoint",
          "category": "api"
        },
        {
          "id": "w009",
          "english": "Middleware",
          "chinese": "中间件",
          "pronunciation": "/ˈmɪdəlˌwɛr/",
          "example": "Add authentication middleware",
          "category": "architecture"
        },
        {
          "id": "w010",
          "english": "Framework",
          "chinese": "框架",
          "pronunciation": "/ˈfreɪmˌwɜːrk/",
          "example": "Use a JavaScript framework",
          "category": "tools"
        },
        {
          "id": "w011",
          "english": "Library",
          "chinese": "库",
          "pronunciation": "/ˈlaɪˌbrɛri/",
          "example": "Import the lodash library",
          "category": "tools"
        },
        {
          "id": "w012",
          "english": "Package",
          "chinese": "包/软件包",
          "pronunciation": "/ˈpækɪdʒ/",
          "example": "Install npm packages",
          "category": "tools"
        },
        {
          "id": "w013",
          "english": "Dependency",
          "chinese": "依赖",
          "pronunciation": "/dɪˈpɛndənsi/",
          "example": "Manage project dependencies",
          "category": "tools"
        },
        {
          "id": "w014",
          "english": "Repository",
          "chinese": "仓库",
          "pronunciation": "/rɪˈpɒzɪˌtɔːri/",
          "example": "Push code to the repository",
          "category": "version-control"
        },
        {
          "id": "w015",
          "english": "Deploy",
          "chinese": "部署",
          "pronunciation": "/dɪˈplɔɪ/",
          "example": "Deploy the application to production",
          "category": "devops"
        },
        {
          "id": "w016",
          "english": "DOM",
          "chinese": "文档对象模型",
          "pronunciation": "/dɒm/",
          "example": "Manipulate the DOM with JavaScript",
          "category": "frontend"
        },
        {
          "id": "w017",
          "english": "CSS",
          "chinese": "层叠样式表",
          "pronunciation": "/siː ɛs ɛs/",
          "example": "Style the page with CSS",
          "category": "frontend"
        },
        {
          "id": "w018",
          "english": "HTML",
          "chinese": "超文本标记语言",
          "pronunciation": "/eɪtʃ tiː ɛm ɛl/",
          "example": "Structure content with HTML",
          "category": "frontend"
        },
        {
          "id": "w019",
          "english": "AJAX",
          "chinese": "异步JavaScript和XML",
          "pronunciation": "/ˈeɪdʒæks/",
          "example": "Fetch data using AJAX",
          "category": "frontend"
        },
        {
          "id": "w020",
          "english": "SPA",
          "chinese": "单页应用",
          "pronunciation": "/ɛs piː eɪ/",
          "example": "Build a SPA with React",
          "category": "architecture"
        },
        {
          "id": "w021",
          "english": "SSR",
          "chinese": "服务端渲染",
          "pronunciation": "/ɛs ɛs ɑːr/",
          "example": "Use SSR for better SEO",
          "category": "architecture"
        },
        {
          "id": "w022",
          "english": "CSR",
          "chinese": "客户端渲染",
          "pronunciation": "/siː ɛs ɑːr/",
          "example": "CSR provides smooth interactions",
          "category": "architecture"
        },
        {
          "id": "w023",
          "english": "SEO",
          "chinese": "搜索引擎优化",
          "pronunciation": "/ˌɛs iː ˈoʊ/",
          "example": "Improve SEO with meta tags",
          "category": "marketing"
        },
        {
          "id": "w024",
          "english": "Responsive",
          "chinese": "响应式",
          "pronunciation": "/rɪˈspɒnsɪv/",
          "example": "Make the design responsive",
          "category": "design"
        },
        {
          "id": "w025",
          "english": "Mobile-first",
          "chinese": "移动优先",
          "pronunciation": "/ˈmoʊbaɪl fɜːrst/",
          "example": "Adopt a mobile-first approach",
          "category": "design"
        },
        {
          "id": "w026",
          "english": "Viewport",
          "chinese": "视口",
          "pronunciation": "/ˈvjuːpɔːrt/",
          "example": "Set the viewport for mobile",
          "category": "frontend"
        },
        {
          "id": "w027",
          "english": "Cookie",
          "chinese": "Cookie",
          "pronunciation": "/ˈkʊki/",
          "example": "Store session in a cookie",
          "category": "storage"
        },
        {
          "id": "w028",
          "english": "LocalStorage",
          "chinese": "本地存储",
          "pronunciation": "/ˈloʊkl ˈstɔːrɪdʒ/",
          "example": "Save preferences to LocalStorage",
          "category": "storage"
        },
        {
          "id": "w029",
          "english": "SessionStorage",
          "chinese": "会话存储",
          "pronunciation": "/ˈsɛʃən ˈstɔːrɪdʒ/",
          "example": "Use SessionStorage for temp data",
          "category": "storage"
        },
        {
          "id": "w030",
          "english": "GraphQL",
          "chinese": "GraphQL查询语言",
          "pronunciation": "/ɡræf kjuː ɛl/",
          "example": "Query data with GraphQL",
          "category": "api"
        },
        {
          "id": "w031",
          "english": "Webhook",
          "chinese": "网络钩子",
          "pronunciation": "/ˈwɛbhʊk/",
          "example": "Configure a webhook for events",
          "category": "api"
        },
        {
          "id": "w032",
          "english": "OAuth",
          "chinese": "开放授权",
          "pronunciation": "/oʊ ˈɔːθ/",
          "example": "Authenticate with OAuth 2.0",
          "category": "security"
        },
        {
          "id": "w033",
          "english": "JWT",
          "chinese": "JSON网络令牌",
          "pronunciation": "/dʒɒt/",
          "example": "Verify the JWT token",
          "category": "security"
        },
        {
          "id": "w034",
          "english": "SSL",
          "chinese": "安全套接层",
          "pronunciation": "/ɛs ɛs ɛl/",
          "example": "Enable SSL for HTTPS",
          "category": "security"
        },
        {
          "id": "w035",
          "english": "Load Balancing",
          "chinese": "负载均衡",
          "pronunciation": "/loʊd ˈbælənsɪŋ/",
          "example": "Configure load balancing",
          "category": "infrastructure"
        },
        {
          "id": "w036",
          "english": "Reverse Proxy",
          "chinese": "反向代理",
          "pronunciation": "/rɪˈvɜːrs ˈprɒksi/",
          "example": "Set up a reverse proxy",
          "category": "infrastructure"
        },
        {
          "id": "w037",
          "english": "Containerization",
          "chinese": "容器化",
          "pronunciation": "/kənˌteɪnəraɪˈzeɪʃən/",
          "example": "Use containerization with Docker",
          "category": "devops"
        },
        {
          "id": "w038",
          "english": "Orchestration",
          "chinese": "编排",
          "pronunciation": "/ˌɔːrkɪˈstreɪʃən/",
          "example": "Kubernetes handles orchestration",
          "category": "devops"
        },
        {
          "id": "w039",
          "english": "Blue-green",
          "chinese": "蓝绿部署",
          "pronunciation": "/bluː ɡriːn/",
          "example": "Use blue-green deployment",
          "category": "devops"
        },
        {
          "id": "w040",
          "english": "Canary",
          "chinese": "金丝雀发布",
          "pronunciation": "/kəˈnɛəri/",
          "example": "Deploy with canary release",
          "category": "devops"
        },
        {
          "id": "w041",
          "english": "Feature Flag",
          "chinese": "功能开关",
          "pronunciation": "/ˈfiːtʃər flæɡ/",
          "example": "Use feature flags for rollout",
          "category": "devops"
        },
        {
          "id": "w042",
          "english": "A/B Testing",
          "chinese": "A/B测试",
          "pronunciation": "/eɪ biː ˈtɛstɪŋ/",
          "example": "Run A/B tests on features",
          "category": "analytics"
        },
        {
          "id": "w043",
          "english": "Analytics",
          "chinese": "分析",
          "pronunciation": "/ˌænəˈlɪtɪks/",
          "example": "Track user analytics",
          "category": "analytics"
        },
        {
          "id": "w044",
          "english": "Metric",
          "chinese": "指标",
          "pronunciation": "/ˈmɛtrɪk/",
          "example": "Monitor performance metrics",
          "category": "analytics"
        },
        {
          "id": "w045",
          "english": "Uptime",
          "chinese": "正常运行时间",
          "pronunciation": "/ˈʌptaɪm/",
          "example": "Ensure 99.9% uptime",
          "category": "monitoring"
        },
        {
          "id": "w046",
          "english": "Downtime",
          "chinese": "停机时间",
          "pronunciation": "/ˈdaʊntaɪm/",
          "example": "Minimize downtime during deploy",
          "category": "monitoring"
        },
        {
          "id": "w047",
          "english": "Latency",
          "chinese": "延迟",
          "pronunciation": "/ˈleɪtənsi/",
          "example": "Reduce API latency",
          "category": "performance"
        },
        {
          "id": "w048",
          "english": "Throughput",
          "chinese": "吞吐量",
          "pronunciation": "/ˈθruːpʊt/",
          "example": "Measure request throughput",
          "category": "performance"
        },
        {
          "id": "w049",
          "english": "Scalability",
          "chinese": "可扩展性",
          "pronunciation": "/ˌskeɪləˈbɪlɪti/",
          "example": "Design for scalability",
          "category": "architecture"
        },
        {
          "id": "w050",
          "english": "Availability",
          "chinese": "可用性",
          "pronunciation": "/əˌveɪləˈbɪlɪti/",
          "example": "Ensure high availability",
          "category": "architecture"
        }
      ]
    },
    {
      "id": "system-terms",
      "name": "System Terms",
      "nameCN": "系统术语",
      "description": "Operating system and system-level terms",
      "items": [
        {
          "id": "s001",
          "english": "Process",
          "chinese": "进程",
          "pronunciation": "/ˈprɒsɛs/",
          "example": "Kill the running process",
          "category": "processes"
        },
        {
          "id": "s002",
          "english": "Thread",
          "chinese": "线程",
          "pronunciation": "/θrɛd/",
          "example": "Create a new thread",
          "category": "processes"
        },
        {
          "id": "s003",
          "english": "Daemon",
          "chinese": "守护进程",
          "pronunciation": "/ˈdiːmən/",
          "example": "Start the system daemon",
          "category": "processes"
        },
        {
          "id": "s004",
          "english": "Port",
          "chinese": "端口",
          "pronunciation": "/pɔːrt/",
          "example": "Listen on port 8080",
          "category": "network"
        },
        {
          "id": "s005",
          "english": "Socket",
          "chinese": "套接字",
          "pronunciation": "/ˈsɒkɪt/",
          "example": "Open a network socket",
          "category": "network"
        },
        {
          "id": "s006",
          "english": "Environment Variable",
          "chinese": "环境变量",
          "pronunciation": "/ɪnˈvaɪrənmənt ˈvɛəriəbl/",
          "example": "Set the PATH environment variable",
          "category": "configuration"
        },
        {
          "id": "s007",
          "english": "Configuration",
          "chinese": "配置",
          "pronunciation": "/kənˌfɪɡjəˈreɪʃən/",
          "example": "Edit the configuration file",
          "category": "configuration"
        },
        {
          "id": "s008",
          "english": "Kernel",
          "chinese": "内核",
          "pronunciation": "/ˈkɜːrnl/",
          "example": "Linux kernel version 5.10",
          "category": "os"
        },
        {
          "id": "s009",
          "english": "Boot",
          "chinese": "启动/引导",
          "pronunciation": "/buːt/",
          "example": "Boot the system",
          "category": "os"
        },
        {
          "id": "s010",
          "english": "Filesystem",
          "chinese": "文件系统",
          "pronunciation": "/ˈfaɪlˌsɪstəm/",
          "example": "Format the filesystem",
          "category": "storage"
        },
        {
          "id": "s011",
          "english": "Mount",
          "chinese": "挂载",
          "pronunciation": "/maʊnt/",
          "example": "Mount the disk partition",
          "category": "storage"
        },
        {
          "id": "s012",
          "english": "Memory",
          "chinese": "内存",
          "pronunciation": "/ˈmɛməri/",
          "example": "Allocate memory for the buffer",
          "category": "hardware"
        },
        {
          "id": "s013",
          "english": "Buffer",
          "chinese": "缓冲区",
          "pronunciation": "/ˈbʌfər/",
          "example": "Write to the output buffer",
          "category": "io"
        },
        {
          "id": "s014",
          "english": "Log",
          "chinese": "日志",
          "pronunciation": "/lɒɡ/",
          "example": "Check the system logs",
          "category": "monitoring"
        },
        {
          "id": "s015",
          "english": "Signal",
          "chinese": "信号",
          "pronunciation": "/ˈsɪɡnl/",
          "example": "Send a SIGTERM signal",
          "category": "processes"
        },
        {
          "id": "s016",
          "english": "Fork",
          "chinese": "创建子进程",
          "pronunciation": "/fɔːrk/",
          "example": "The process forks a child process",
          "category": "processes"
        },
        {
          "id": "s017",
          "english": "Zombie Process",
          "chinese": "僵尸进程",
          "pronunciation": "/ˈzɒmbi ˈprɒsɛs/",
          "example": "Kill the zombie processes",
          "category": "processes"
        },
        {
          "id": "s018",
          "english": "Orphan Process",
          "chinese": "孤儿进程",
          "pronunciation": "/ˈɔːrfən ˈprɒsɛs/",
          "example": "The orphan process is adopted by init",
          "category": "processes"
        },
        {
          "id": "s019",
          "english": "Virtual Memory",
          "chinese": "虚拟内存",
          "pronunciation": "/ˈvɜːrtʃuəl ˈmɛməri/",
          "example": "The system uses virtual memory",
          "category": "memory"
        },
        {
          "id": "s020",
          "english": "Swap",
          "chinese": "交换分区/内存交换",
          "pronunciation": "/swɒp/",
          "example": "The system is swapping to disk",
          "category": "memory"
        },
        {
          "id": "s021",
          "english": "Page Fault",
          "chinese": "页错误",
          "pronunciation": "/peɪdʒ fɒlt/",
          "example": "High page fault rate indicates memory pressure",
          "category": "memory"
        },
        {
          "id": "s022",
          "english": "Cache",
          "chinese": "缓存",
          "pronunciation": "/kæʃ/",
          "example": "Clear the DNS cache",
          "category": "memory"
        },
        {
          "id": "s023",
          "english": "Inode",
          "chinese": "索引节点",
          "pronunciation": "/ˈaɪnoʊd/",
          "example": "Check inode usage with df -i",
          "category": "storage"
        },
        {
          "id": "s024",
          "english": "Partition",
          "chinese": "分区",
          "pronunciation": "/pɑːrˈtɪʃn/",
          "example": "Create a new disk partition",
          "category": "storage"
        },
        {
          "id": "s025",
          "english": "Symlink",
          "chinese": "符号链接",
          "pronunciation": "/ˈsɪmlɪŋk/",
          "example": "Create a symbolic link",
          "category": "storage"
        },
        {
          "id": "s026",
          "english": "Pipe",
          "chinese": "管道",
          "pronunciation": "/paɪp/",
          "example": "Use pipe to chain commands",
          "category": "io"
        },
        {
          "id": "s027",
          "english": "Redirect",
          "chinese": "重定向",
          "pronunciation": "/ˌriːdəˈrɛkt/",
          "example": "Redirect output to a file",
          "category": "io"
        },
        {
          "id": "s028",
          "english": "Crontab",
          "chinese": "定时任务表",
          "pronunciation": "/ˈkrɒntæb/",
          "example": "Edit the crontab to schedule tasks",
          "category": "scheduling"
        },
        {
          "id": "s029",
          "english": "Systemd",
          "chinese": "系统和服务管理器",
          "pronunciation": "/ˈsɪstəmdiː/",
          "example": "Use systemd to manage services",
          "category": "services"
        },
        {
          "id": "s030",
          "english": "Service",
          "chinese": "服务",
          "pronunciation": "/ˈsɜːrvɪs/",
          "example": "Restart the nginx service",
          "category": "services"
        },
        {
          "id": "s031",
          "english": "Package Manager",
          "chinese": "包管理器",
          "pronunciation": "/ˈpækɪdʒ ˈmænɪdʒər/",
          "example": "Use apt package manager",
          "category": "package"
        },
        {
          "id": "s032",
          "english": "Repository",
          "chinese": "软件源/仓库",
          "pronunciation": "/rɪˈpɒzɪtɔːri/",
          "example": "Add the official repository",
          "category": "package"
        },
        {
          "id": "s033",
          "english": "PID",
          "chinese": "进程ID",
          "pronunciation": "/piː aɪ diː/",
          "example": "Find the process by PID",
          "category": "processes"
        },
        {
          "id": "s034",
          "english": "Load Average",
          "chinese": "平均负载",
          "pronunciation": "/loʊd ˈævərɪdʒ/",
          "example": "Check system load average with uptime",
          "category": "monitoring"
        },
        {
          "id": "s035",
          "english": "CPU Usage",
          "chinese": "CPU使用率",
          "pronunciation": "/siː piː juː ˈjuːsɪdʒ/",
          "example": "Monitor CPU usage with top",
          "category": "monitoring"
        },
        {
          "id": "s036",
          "english": "Memory Leak",
          "chinese": "内存泄漏",
          "pronunciation": "/ˈmɛməri liːk/",
          "example": "Detect and fix memory leaks",
          "category": "memory"
        },
        {
          "id": "s037",
          "english": "Disk I/O",
          "chinese": "磁盘输入输出",
          "pronunciation": "/dɪsk aɪ oʊ/",
          "example": "High disk I/O affects performance",
          "category": "monitoring"
        },
        {
          "id": "s038",
          "english": "Throughput",
          "chinese": "吞吐量",
          "pronunciation": "/ˈθruːpʊt/",
          "example": "Measure network throughput",
          "category": "performance"
        },
        {
          "id": "s039",
          "english": "Latency",
          "chinese": "延迟",
          "pronunciation": "/ˈleɪtənsi/",
          "example": "Reduce system latency",
          "category": "performance"
        },
        {
          "id": "s040",
          "english": "Context Switch",
          "chinese": "上下文切换",
          "pronunciation": "/ˈkɒntɛkst swɪtʃ/",
          "example": "High context switch rate",
          "category": "processes"
        },
        {
          "id": "s041",
          "english": "Interrupt",
          "chinese": "中断",
          "pronunciation": "/ˈɪntərʌpt/",
          "example": "Hardware interrupt handling",
          "category": "hardware"
        },
        {
          "id": "s042",
          "english": "SELinux",
          "chinese": "安全增强Linux",
          "pronunciation": "/ɛs iː lɪˈnʌks/",
          "example": "Configure SELinux policies",
          "category": "security"
        },
        {
          "id": "s043",
          "english": "Firewall",
          "chinese": "防火墙",
          "pronunciation": "/ˈfaɪərwɔːl/",
          "example": "Configure iptables firewall",
          "category": "security"
        },
        {
          "id": "s044",
          "english": "Kernel Panic",
          "chinese": "内核崩溃",
          "pronunciation": "/ˈkɜːrnl ˈpænɪk/",
          "example": "System encountered kernel panic",
          "category": "os"
        },
        {
          "id": "s045",
          "english": "Bootloader",
          "chinese": "引导加载程序",
          "pronunciation": "/ˈbuːtˌloʊdər/",
          "example": "GRUB is a common bootloader",
          "category": "os"
        },
        {
          "id": "s046",
          "english": "Initramfs",
          "chinese": "初始化内存文件系统",
          "pronunciation": "/ˈɪnɪtræmfs/",
          "example": "The kernel loads initramfs",
          "category": "os"
        },
        {
          "id": "s047",
          "english": "Runlevel",
          "chinese": "运行级别",
          "pronunciation": "/ˈrʌnlɛvəl/",
          "example": "Change to runlevel 3",
          "category": "os"
        },
        {
          "id": "s048",
          "english": "System Call",
          "chinese": "系统调用",
          "pronunciation": "/ˈsɪstəm kɔːl/",
          "example": "The program makes a system call",
          "category": "os"
        },
        {
          "id": "s049",
          "english": "Library",
          "chinese": "库/函数库",
          "pronunciation": "/ˈlaɪbrɛri/",
          "example": "Link against the system library",
          "category": "development"
        },
        {
          "id": "s050",
          "english": "Dependency",
          "chinese": "依赖",
          "pronunciation": "/dɪˈpɛndənsi/",
          "example": "Install missing dependencies",
          "category": "development"
        }
      ]
    },
    {
      "id": "code-comments",
      "name": "Code Comments",
      "nameCN": "代码注释",
      "description": "Common phrases used in code comments and documentation",
      "items": [
        {
          "id": "c001",
          "english": "TODO",
          "chinese": "待办事项",
          "pronunciation": "/tuː duː/",
          "example": "// TODO: Refactor this function",
          "category": "markers"
        },
        {
          "id": "c002",
          "english": "FIXME",
          "chinese": "需要修复",
          "pronunciation": "/fɪks miː/",
          "example": "// FIXME: Handle edge cases",
          "category": "markers"
        },
        {
          "id": "c003",
          "english": "HACK",
          "chinese": "临时方案/技巧",
          "pronunciation": "/hæk/",
          "example": "// HACK: Workaround for bug #123",
          "category": "markers"
        },
        {
          "id": "c004",
          "english": "Deprecated",
          "chinese": "已弃用",
          "pronunciation": "/ˈdɛprɪkeɪtɪd/",
          "example": "@deprecated Use newMethod() instead",
          "category": "status"
        },
        {
          "id": "c005",
          "english": "Returns",
          "chinese": "返回",
          "pronunciation": "/rɪˈtɜːrnz/",
          "example": "@returns The calculated value",
          "category": "documentation"
        },
        {
          "id": "c006",
          "english": "Parameters",
          "chinese": "参数",
          "pronunciation": "/pəˈræmɪtərz/",
          "example": "@param name The user's name",
          "category": "documentation"
        },
        {
          "id": "c007",
          "english": "Throws",
          "chinese": "抛出异常",
          "pronunciation": "/θroʊz/",
          "example": "@throws InvalidArgumentException",
          "category": "documentation"
        },
        {
          "id": "c008",
          "english": "See also",
          "chinese": "另请参见",
          "pronunciation": "/siː ˈɔːlsoʊ/",
          "example": "@see RelatedClass",
          "category": "documentation"
        },
        {
          "id": "c009",
          "english": "Implementation note",
          "chinese": "实现说明",
          "pronunciation": "/ˌɪmplɪmɛnˈteɪʃən noʊt/",
          "example": "// Implementation note: Thread-safe",
          "category": "notes"
        },
        {
          "id": "c010",
          "english": "Edge case",
          "chinese": "边界情况",
          "pronunciation": "/ɛdʒ keɪs/",
          "example": "// Handle the edge case: empty array",
          "category": "notes"
        },
        {
          "id": "c011",
          "english": "Workaround",
          "chinese": "变通方法",
          "pronunciation": "/ˈwɜːrkəˌraʊnd/",
          "example": "// Workaround for browser bug",
          "category": "notes"
        },
        {
          "id": "c012",
          "english": "Placeholder",
          "chinese": "占位符",
          "pronunciation": "/ˈpleɪsˌhoʊldər/",
          "example": "// TODO: Replace placeholder with actual implementation",
          "category": "notes"
        },
        {
          "id": "c013",
          "english": "Asynchronously",
          "chinese": "异步地",
          "pronunciation": "/eɪˈsɪŋkrənəsli/",
          "example": "// Execute asynchronously",
          "category": "documentation"
        },
        {
          "id": "c014",
          "english": "Null check",
          "chinese": "空值检查",
          "pronunciation": "/nʌl tʃɛk/",
          "example": "// Add null check here",
          "category": "notes"
        },
        {
          "id": "c015",
          "english": "Sanity check",
          "chinese": "合理性检查",
          "pronunciation": "/ˈsænɪti tʃɛk/",
          "example": "// Sanity check: validate input",
          "category": "notes"
        },
        {
          "id": "c016",
          "english": "NOTE",
          "chinese": "注意",
          "pronunciation": "/noʊt/",
          "example": "// NOTE: This is important",
          "category": "markers"
        },
        {
          "id": "c017",
          "english": "WARNING",
          "chinese": "警告",
          "pronunciation": "/ˈwɔːrnɪŋ/",
          "example": "// WARNING: Do not modify",
          "category": "markers"
        },
        {
          "id": "c018",
          "english": "IMPORTANT",
          "chinese": "重要",
          "pronunciation": "/ɪmˈpɔːrtnt/",
          "example": "// IMPORTANT: Read this first",
          "category": "markers"
        },
        {
          "id": "c019",
          "english": "BUG",
          "chinese": "缺陷",
          "pronunciation": "/bʌɡ/",
          "example": "// BUG: Known issue with Safari",
          "category": "markers"
        },
        {
          "id": "c020",
          "english": "OPTIMIZE",
          "chinese": "优化",
          "pronunciation": "/ˈɒptɪmaɪz/",
          "example": "// OPTIMIZE: Slow performance here",
          "category": "markers"
        },
        {
          "id": "c021",
          "english": "REFACTOR",
          "chinese": "重构",
          "pronunciation": "/riːˈfæktər/",
          "example": "// REFACTOR: Clean up this mess",
          "category": "markers"
        },
        {
          "id": "c022",
          "english": "REVIEW",
          "chinese": "需要审查",
          "pronunciation": "/rɪˈvjuː/",
          "example": "// REVIEW: Is this correct?",
          "category": "markers"
        },
        {
          "id": "c023",
          "english": "XXX",
          "chinese": "需特别关注",
          "pronunciation": "/ˌɛks ɛks ɛks/",
          "example": "// XXX: Critical section",
          "category": "markers"
        },
        {
          "id": "c024",
          "english": "IDEA",
          "chinese": "想法",
          "pronunciation": "/aɪˈdɪə/",
          "example": "// IDEA: Maybe use caching?",
          "category": "markers"
        },
        {
          "id": "c025",
          "english": "REMOVED",
          "chinese": "已移除",
          "pronunciation": "/rɪˈmuːvd/",
          "example": "// REMOVED: Deprecated feature",
          "category": "markers"
        },
        {
          "id": "c026",
          "english": "CHANGED",
          "chinese": "已更改",
          "pronunciation": "/tʃeɪndʒd/",
          "example": "// CHANGED: Updated algorithm",
          "category": "markers"
        },
        {
          "id": "c027",
          "english": "INPROGRESS",
          "chinese": "进行中",
          "pronunciation": "/ɪn ˈprɒɡrɛs/",
          "example": "// INPROGRESS: Implementing feature",
          "category": "markers"
        },
        {
          "id": "c028",
          "english": "NOTIMPLEMENTED",
          "chinese": "未实现",
          "pronunciation": "/nɒt ˈɪmplɪmɛntɪd/",
          "example": "// NOTIMPLEMENTED: Coming soon",
          "category": "markers"
        },
        {
          "id": "c029",
          "english": "TEMP",
          "chinese": "临时的",
          "pronunciation": "/tɛmp/",
          "example": "// TEMP: Quick fix, remove later",
          "category": "markers"
        },
        {
          "id": "c030",
          "english": "DEBUG",
          "chinese": "调试代码",
          "pronunciation": "/diːˈbʌɡ/",
          "example": "// DEBUG: Remove before commit",
          "category": "markers"
        },
        {
          "id": "c031",
          "english": "DEPRECATED",
          "chinese": "已弃用",
          "pronunciation": "/ˈdɛprɪkeɪtɪd/",
          "example": "@deprecated Use newMethod instead",
          "category": "status"
        },
        {
          "id": "c032",
          "english": "OBSOLETE",
          "chinese": "已淘汰",
          "pronunciation": "/ˈɒbsəliːt/",
          "example": "@obsolete Will be removed in v2.0",
          "category": "status"
        },
        {
          "id": "c033",
          "english": "Internal",
          "chinese": "内部使用",
          "pronunciation": "/ɪnˈtɜːrnl/",
          "example": "@internal Do not use externally",
          "category": "status"
        },
        {
          "id": "c034",
          "english": "Experimental",
          "chinese": "实验性的",
          "pronunciation": "/ɪkˌspɛrɪˈmɛntl/",
          "example": "@experimental API may change",
          "category": "status"
        },
        {
          "id": "c035",
          "english": "Alpha",
          "chinese": "内测版",
          "pronunciation": "/ˈælfə/",
          "example": "@alpha Early development stage",
          "category": "status"
        },
        {
          "id": "c036",
          "english": "Beta",
          "chinese": "公测版",
          "pronunciation": "/ˈbeɪtə/",
          "example": "@beta Testing phase",
          "category": "status"
        },
        {
          "id": "c037",
          "english": "Stable",
          "chinese": "稳定版",
          "pronunciation": "/ˈsteɪbl/",
          "example": "@stable Ready for production",
          "category": "status"
        },
        {
          "id": "c038",
          "english": "NOSONAR",
          "chinese": "跳过Sonar检查",
          "pronunciation": "/noʊ ˈsoʊnɑːr/",
          "example": "// NOSONAR: Intentional",
          "category": "linting"
        },
        {
          "id": "c039",
          "english": "NOLINT",
          "chinese": "跳过lint检查",
          "pronunciation": "/noʊ lɪnt/",
          "example": "// NOLINT: Required for compat",
          "category": "linting"
        },
        {
          "id": "c040",
          "english": "CHECKSTYLE:OFF",
          "chinese": "关闭Checkstyle",
          "pronunciation": "/tʃɛk staɪl ɒf/",
          "example": "// CHECKSTYLE:OFF",
          "category": "linting"
        },
        {
          "id": "c041",
          "english": "SuppressWarnings",
          "chinese": "抑制警告",
          "pronunciation": "/səˈprɛs ˈwɔːrnɪŋz/",
          "example": "@SuppressWarnings('unchecked')",
          "category": "linting"
        },
        {
          "id": "c042",
          "english": "Code Reviewed",
          "chinese": "已代码审查",
          "pronunciation": "/koʊd rɪˈvjuːd/",
          "example": "// Code reviewed by: John",
          "category": "documentation"
        },
        {
          "id": "c043",
          "english": "Tested",
          "chinese": "已测试",
          "pronunciation": "/ˈtɛstɪd/",
          "example": "// Tested: Unit tests pass",
          "category": "documentation"
        },
        {
          "id": "c044",
          "english": "Verified",
          "chinese": "已验证",
          "pronunciation": "/ˈvɛrɪfaɪd/",
          "example": "// Verified: Works on staging",
          "category": "documentation"
        },
        {
          "id": "c045",
          "english": "Author",
          "chinese": "作者",
          "pronunciation": "/ˈɔːθər/",
          "example": "@author John Doe",
          "category": "documentation"
        },
        {
          "id": "c046",
          "english": "Since",
          "chinese": "起始版本",
          "pronunciation": "/sɪns/",
          "example": "@since 1.0.0",
          "category": "documentation"
        },
        {
          "id": "c047",
          "english": "Version",
          "chinese": "版本",
          "pronunciation": "/ˈvɜːrʒən/",
          "example": "@version 2.1.0",
          "category": "documentation"
        },
        {
          "id": "c048",
          "english": "Link",
          "chinese": "链接",
          "pronunciation": "/lɪŋk/",
          "example": "@see {@link ClassName}",
          "category": "documentation"
        },
        {
          "id": "c049",
          "english": "InheritDoc",
          "chinese": "继承文档",
          "pronunciation": "/ɪnˈhɛrɪt dɒk/",
          "example": "{@inheritDoc}",
          "category": "documentation"
        },
        {
          "id": "c050",
          "english": "CodeCoverage",
          "chinese": "代码覆盖率",
          "pronunciation": "/koʊd ˈkʌvərɪdʒ/",
          "example": "// CodeCoverage: 95%",
          "category": "documentation"
        }
      ]
    },
    {
      "id": "daily-dev-phrases",
      "name": "Daily Dev Phrases",
      "nameCN": "日常开发用语",
      "description": "Common phrases used in daily development communication",
      "items": [
        {
          "id": "d001",
          "english": "It works on my machine",
          "chinese": "在我机器上能跑",
          "pronunciation": "/ɪt wɜːrks ɒn maɪ məˈʃiːn/",
          "example": "Developer: It works on my machine!",
          "category": "debugging"
        },
        {
          "id": "d002",
          "english": "Have you tried turning it off and on again?",
          "chinese": "你试过重启吗？",
          "pronunciation": "/hæv juː traɪd ˈtɜːrnɪŋ ɪt ɒf ænd ɒn əˈɡɛn/",
          "example": "Support: Have you tried turning it off and on again?",
          "category": "troubleshooting"
        },
        {
          "id": "d003",
          "english": "Let's push this to production",
          "chinese": "把这个推到生产环境",
          "pronunciation": "/lɛts pʊʃ ðɪs tuː prəˈdʌkʃən/",
          "example": "PM: Let's push this to production",
          "category": "deployment"
        },
        {
          "id": "d004",
          "english": "We need to rollback",
          "chinese": "我们需要回滚",
          "pronunciation": "/wiː niːd tuː ˈroʊlˌbæk/",
          "example": "DevOps: We need to rollback immediately!",
          "category": "deployment"
        },
        {
          "id": "d005",
          "english": "Can you review my PR?",
          "chinese": "能帮我审查PR吗？",
          "pronunciation": "/kæn juː rɪˈvjuː maɪ piː ɑːr/",
          "example": "Dev: Can you review my PR?",
          "category": "collaboration"
        },
        {
          "id": "d006",
          "english": "There's a merge conflict",
          "chinese": "有合并冲突",
          "pronunciation": "/ðɛrz ə mɜːrdʒ ˈkɒnflɪkt/",
          "example": "Git: There's a merge conflict in main.js",
          "category": "git"
        },
        {
          "id": "d007",
          "english": "The build is failing",
          "chinese": "构建失败了",
          "pronunciation": "/ðə bɪld ɪz ˈfeɪlɪŋ/",
          "example": "CI: The build is failing on step 3",
          "category": "ci-cd"
        },
        {
          "id": "d008",
          "english": "All tests pass",
          "chinese": "所有测试通过",
          "pronunciation": "/ɔːl tɛsts pɑːs/",
          "example": "CI: All tests pass! Ready to merge.",
          "category": "ci-cd"
        },
        {
          "id": "d009",
          "english": "This is a breaking change",
          "chinese": "这是一个破坏性变更",
          "pronunciation": "/ðɪs ɪz ə ˈbreɪkɪŋ tʃeɪndʒ/",
          "example": "Dev: This is a breaking change, update your code",
          "category": "versioning"
        },
        {
          "id": "d010",
          "english": "LGTM (Looks Good To Me)",
          "chinese": "看起来不错（我批准了）",
          "pronunciation": "/ˌɛl dʒiː tiː ˈɛm/",
          "example": "Reviewer: LGTM!",
          "category": "collaboration"
        },
        {
          "id": "d011",
          "english": "PTAL (Please Take A Look)",
          "chinese": "请看一下",
          "pronunciation": "/ˌpiː tiː eɪ ˈɛl/",
          "example": "Dev: PTAL at this change",
          "category": "collaboration"
        },
        {
          "id": "d012",
          "english": "WIP (Work In Progress)",
          "chinese": "进行中",
          "pronunciation": "/ˌdʌbəljuː aɪ ˈpiː/",
          "example": "PR title: WIP: Add authentication",
          "category": "collaboration"
        },
        {
          "id": "d013",
          "english": "I'll look into it",
          "chinese": "我会调查一下",
          "pronunciation": "/aɪl lʊk ˈɪntuː ɪt/",
          "example": "Dev: I'll look into this issue",
          "category": "communication"
        },
        {
          "id": "d014",
          "english": "It should be straightforward",
          "chinese": "这应该很简单",
          "pronunciation": "/ɪt ʃʊd biː ˌstreɪtˈfɔːrwərd/",
          "example": "Dev: It should be straightforward to implement",
          "category": "estimation"
        },
        {
          "id": "d015",
          "english": "That's not a bug, that's a feature",
          "chinese": "这不是bug，是特性",
          "pronunciation": "/ðæts nɒt ə bʌɡ ðæts ə ˈfiːtʃər/",
          "example": "Dev: That's not a bug, that's a feature!",
          "category": "humor"
        },
        {
          "id": "d016",
          "english": "Works as intended",
          "chinese": "按预期工作",
          "pronunciation": "/wɜːrks æz ɪnˈtɛndɪd/",
          "example": "PM: Is this a bug? Dev: No, it works as intended",
          "category": "humor"
        },
        {
          "id": "d017",
          "english": "It's a known issue",
          "chinese": "这是已知问题",
          "pronunciation": "/ɪts ə noʊn ˈɪʃuː/",
          "example": "Dev: It's a known issue, we're working on it",
          "category": "communication"
        },
        {
          "id": "d018",
          "english": "I'll create a ticket",
          "chinese": "我会创建一个工单",
          "pronunciation": "/aɪl kriːˈeɪt ə ˈtɪkɪt/",
          "example": "Dev: I'll create a ticket to track this",
          "category": "workflow"
        },
        {
          "id": "d019",
          "english": "Let me check the logs",
          "chinese": "让我查一下日志",
          "pronunciation": "/lɛt miː tʃɛk ðə lɒɡz/",
          "example": "Dev: Let me check the logs to see what happened",
          "category": "debugging"
        },
        {
          "id": "d020",
          "english": "I can't reproduce it",
          "chinese": "我无法复现",
          "pronunciation": "/aɪ kɑːnt riːˈprɒdjuːs ɪt/",
          "example": "Dev: I can't reproduce it on my machine",
          "category": "debugging"
        },
        {
          "id": "d021",
          "english": "It's in the backlog",
          "chinese": "在待办列表里",
          "pronunciation": "/ɪts ɪn ðə ˈbæklɒɡ/",
          "example": "Dev: It's in the backlog for next sprint",
          "category": "planning"
        },
        {
          "id": "d022",
          "english": "We need to prioritize",
          "chinese": "我们需要排优先级",
          "pronunciation": "/wiː niːd tuː praɪˈɒrɪtaɪz/",
          "example": "PM: We need to prioritize these features",
          "category": "planning"
        },
        {
          "id": "d023",
          "english": "Let's sync up",
          "chinese": "我们对齐一下",
          "pronunciation": "/lɛts sɪŋk ʌp/",
          "example": "Dev: Let's sync up on the progress",
          "category": "communication"
        },
        {
          "id": "d024",
          "english": "I'll ping you",
          "chinese": "我会联系你",
          "pronunciation": "/aɪl pɪŋ juː/",
          "example": "Dev: I'll ping you when it's done",
          "category": "communication"
        },
        {
          "id": "d025",
          "english": "Circle back",
          "chinese": "回头再讨论",
          "pronunciation": "/ˈsɜːrkl bæk/",
          "example": "Dev: Let's circle back to this later",
          "category": "communication"
        },
        {
          "id": "d026",
          "english": "Touch base",
          "chinese": "碰一下/沟通",
          "pronunciation": "/tʌtʃ beɪs/",
          "example": "Dev: Let's touch base tomorrow",
          "category": "communication"
        },
        {
          "id": "d027",
          "english": "Take this offline",
          "chinese": "私下讨论",
          "pronunciation": "/teɪk ðɪs ˈɒflaɪn/",
          "example": "Dev: Let's take this offline",
          "category": "communication"
        },
        {
          "id": "d028",
          "english": "Move the needle",
          "chinese": "产生实质影响",
          "pronunciation": "/muːv ðə ˈniːdl/",
          "example": "PM: Will this move the needle?",
          "category": "business"
        },
        {
          "id": "d029",
          "english": "Low-hanging fruit",
          "chinese": "容易实现的目标",
          "pronunciation": "/loʊ ˈhæŋɪŋ fruːt/",
          "example": "Dev: Let's pick the low-hanging fruit first",
          "category": "planning"
        },
        {
          "id": "d030",
          "english": "Quick win",
          "chinese": "快速胜利",
          "pronunciation": "/kwɪk wɪn/",
          "example": "Dev: This is a quick win for the team",
          "category": "planning"
        },
        {
          "id": "d031",
          "english": "Deep dive",
          "chinese": "深入分析",
          "pronunciation": "/diːp daɪv/",
          "example": "Dev: We need a deep dive into the issue",
          "category": "analysis"
        },
        {
          "id": "d032",
          "english": "Root cause",
          "chinese": "根本原因",
          "pronunciation": "/ruːt kɔːz/",
          "example": "Dev: We need to find the root cause",
          "category": "debugging"
        },
        {
          "id": "d033",
          "english": "Scope creep",
          "chinese": "范围蔓延",
          "pronunciation": "/skoʊp kriːp/",
          "example": "PM: We need to avoid scope creep",
          "category": "planning"
        },
        {
          "id": "d034",
          "english": "Buy-in",
          "chinese": "支持/认可",
          "pronunciation": "/ˈbaɪ ɪn/",
          "example": "Dev: We need stakeholder buy-in",
          "category": "business"
        },
        {
          "id": "d035",
          "english": "Action items",
          "chinese": "行动项",
          "pronunciation": "/ˈækʃən ˈaɪtəmz/",
          "example": "Dev: Here are the action items from the meeting",
          "category": "meeting"
        },
        {
          "id": "d036",
          "english": "Take ownership",
          "chinese": "承担责任",
          "pronunciation": "/teɪk ˈoʊnərʃɪp/",
          "example": "Dev: I'll take ownership of this task",
          "category": "responsibility"
        },
        {
          "id": "d037",
          "english": "On the same page",
          "chinese": "达成共识",
          "pronunciation": "/ɒn ðə seɪm peɪdʒ/",
          "example": "Dev: Are we on the same page?",
          "category": "communication"
        },
        {
          "id": "d038",
          "english": "Ballpark estimate",
          "chinese": "大致估算",
          "pronunciation": "/ˈbɔːlpɑːrk ˈɛstɪmət/",
          "example": "Dev: Give me a ballpark estimate",
          "category": "estimation"
        },
        {
          "id": "d039",
          "english": "Hard deadline",
          "chinese": "硬性截止日期",
          "pronunciation": "/hɑːrd ˈdɛdlaɪn/",
          "example": "PM: This is a hard deadline",
          "category": "planning"
        },
        {
          "id": "d040",
          "english": "Nice to have",
          "chinese": "锦上添花",
          "pronunciation": "/naɪs tuː hæv/",
          "example": "Dev: This is a nice to have feature",
          "category": "planning"
        },
        {
          "id": "d041",
          "english": "Must have",
          "chinese": "必须有",
          "pronunciation": "/mʌst hæv/",
          "example": "PM: This is a must have for MVP",
          "category": "planning"
        },
        {
          "id": "d042",
          "english": "Blocker",
          "chinese": "阻碍/障碍",
          "pronunciation": "/ˈblɒkər/",
          "example": "Dev: This is a blocker for the release",
          "category": "workflow"
        },
        {
          "id": "d043",
          "english": "Unblock",
          "chinese": "解除阻碍",
          "pronunciation": "/ʌnˈblɒk/",
          "example": "Dev: Can you help unblock me?",
          "category": "workflow"
        },
        {
          "id": "d044",
          "english": "Dependencies",
          "chinese": "依赖项",
          "pronunciation": "/dɪˈpɛndənsiz/",
          "example": "Dev: We have dependencies on other teams",
          "category": "workflow"
        },
        {
          "id": "d045",
          "english": "Stakeholder",
          "chinese": "利益相关者",
          "pronunciation": "/ˈsteɪkhoʊldər/",
          "example": "PM: We need to inform stakeholders",
          "category": "business"
        },
        {
          "id": "d046",
          "english": "Sign off",
          "chinese": "批准/签字",
          "pronunciation": "/saɪn ɒf/",
          "example": "Dev: Waiting for QA to sign off",
          "category": "approval"
        },
        {
          "id": "d047",
          "english": "Go live",
          "chinese": "上线",
          "pronunciation": "/ɡoʊ laɪv/",
          "example": "Dev: We're ready to go live",
          "category": "deployment"
        },
        {
          "id": "d048",
          "english": "Sunset",
          "chinese": "淘汰/下线",
          "pronunciation": "/ˈsʌnsɛt/",
          "example": "Dev: We need to sunset this feature",
          "category": "lifecycle"
        },
        {
          "id": "d049",
          "english": "EOD (End of Day)",
          "chinese": "今天下班前",
          "pronunciation": "/iː oʊ diː/",
          "example": "Dev: I'll finish it by EOD",
          "category": "timeline"
        },
        {
          "id": "d050",
          "english": "ASAP (As Soon As Possible)",
          "chinese": "尽快",
          "pronunciation": "/eɪ ɛs eɪ piː/",
          "example": "PM: We need this ASAP",
          "category": "timeline"
        }
      ]
    },
    {
      "id": "docker-k8s",
      "name": "Docker & Kubernetes",
      "nameCN": "容器与K8s",
      "description": "Container and orchestration commands",
      "items": [
        {
          "id": "dk001",
          "english": "docker run",
          "chinese": "运行容器",
          "pronunciation": "/ˈdɒkər rʌn/",
          "example": "docker run -d -p 80:80 nginx",
          "category": "docker"
        },
        {
          "id": "dk002",
          "english": "docker build",
          "chinese": "构建镜像",
          "pronunciation": "/ˈdɒkər bɪld/",
          "example": "docker build -t myapp:latest .",
          "category": "docker"
        },
        {
          "id": "dk003",
          "english": "docker-compose",
          "chinese": "多容器编排工具",
          "pronunciation": "/ˈdɒkər ˈkɒmpoʊz/",
          "example": "docker-compose up -d",
          "category": "docker"
        },
        {
          "id": "dk004",
          "english": "docker pull",
          "chinese": "拉取镜像",
          "pronunciation": "/ˈdɒkər pʊl/",
          "example": "docker pull ubuntu:20.04",
          "category": "docker"
        },
        {
          "id": "dk005",
          "english": "docker ps",
          "chinese": "列出运行中的容器",
          "pronunciation": "/ˈdɒkər piː ɛs/",
          "example": "docker ps -a",
          "category": "docker"
        },
        {
          "id": "dk006",
          "english": "docker exec",
          "chinese": "在容器内执行命令",
          "pronunciation": "/ˈdɒkər ɪɡˈzɛk/",
          "example": "docker exec -it container_id bash",
          "category": "docker"
        },
        {
          "id": "dk007",
          "english": "docker logs",
          "chinese": "查看容器日志",
          "pronunciation": "/ˈdɒkər lɒɡz/",
          "example": "docker logs -f container_id",
          "category": "docker"
        },
        {
          "id": "dk008",
          "english": "Image",
          "chinese": "镜像",
          "pronunciation": "/ˈɪmɪdʒ/",
          "example": "Download the Docker image",
          "category": "docker"
        },
        {
          "id": "dk009",
          "english": "Container",
          "chinese": "容器",
          "pronunciation": "/kənˈteɪnər/",
          "example": "Start the container",
          "category": "docker"
        },
        {
          "id": "dk010",
          "english": "Volume",
          "chinese": "数据卷",
          "pronunciation": "/ˈvɒljuːm/",
          "example": "Mount a volume to persist data",
          "category": "docker"
        },
        {
          "id": "dk011",
          "english": "kubectl",
          "chinese": "Kubernetes命令行工具",
          "pronunciation": "/ˈkuːb siːtl/",
          "example": "kubectl get pods",
          "category": "kubernetes"
        },
        {
          "id": "dk012",
          "english": "Pod",
          "chinese": "K8s最小部署单元",
          "pronunciation": "/pɒd/",
          "example": "Create a new pod",
          "category": "kubernetes"
        },
        {
          "id": "dk013",
          "english": "Deployment",
          "chinese": "部署",
          "pronunciation": "/dɪˈplɔɪmənt/",
          "example": "kubectl apply -f deployment.yaml",
          "category": "kubernetes"
        },
        {
          "id": "dk014",
          "english": "Service",
          "chinese": "服务",
          "pronunciation": "/ˈsɜːrvɪs/",
          "example": "Expose the deployment as a service",
          "category": "kubernetes"
        },
        {
          "id": "dk015",
          "english": "Namespace",
          "chinese": "命名空间",
          "pronunciation": "/ˈneɪmspɛɪs/",
          "example": "kubectl get pods -n production",
          "category": "kubernetes"
        },
        {
          "id": "dk016",
          "english": "docker stop",
          "chinese": "停止容器",
          "pronunciation": "/ˈdɒkər stɒp/",
          "example": "docker stop container_id",
          "category": "docker"
        },
        {
          "id": "dk017",
          "english": "docker rm",
          "chinese": "删除容器",
          "pronunciation": "/ˈdɒkər ɑːr ɛm/",
          "example": "docker rm container_id",
          "category": "docker"
        },
        {
          "id": "dk018",
          "english": "docker rmi",
          "chinese": "删除镜像",
          "pronunciation": "/ˈdɒkər ɑːr ɛm aɪ/",
          "example": "docker rmi image_id",
          "category": "docker"
        },
        {
          "id": "dk019",
          "english": "docker inspect",
          "chinese": "查看容器详情",
          "pronunciation": "/ˈdɒkər ɪnˈspɛkt/",
          "example": "docker inspect container_id",
          "category": "docker"
        },
        {
          "id": "dk020",
          "english": "docker network",
          "chinese": "管理Docker网络",
          "pronunciation": "/ˈdɒkər ˈnɛtwɜːrk/",
          "example": "docker network ls",
          "category": "docker"
        },
        {
          "id": "dk021",
          "english": "docker volume",
          "chinese": "管理数据卷",
          "pronunciation": "/ˈdɒkər ˈvɒljuːm/",
          "example": "docker volume create my_volume",
          "category": "docker"
        },
        {
          "id": "dk022",
          "english": "docker push",
          "chinese": "推送镜像到仓库",
          "pronunciation": "/ˈdɒkər pʊʃ/",
          "example": "docker push username/image:tag",
          "category": "docker"
        },
        {
          "id": "dk023",
          "english": "docker tag",
          "chinese": "标记镜像",
          "pronunciation": "/ˈdɒkər tæɡ/",
          "example": "docker tag source_image target_image:tag",
          "category": "docker"
        },
        {
          "id": "dk024",
          "english": "docker login",
          "chinese": "登录镜像仓库",
          "pronunciation": "/ˈdɒkər ˈlɒɡɪn/",
          "example": "docker login registry.example.com",
          "category": "docker"
        },
        {
          "id": "dk025",
          "english": "Dockerfile",
          "chinese": "Docker构建文件",
          "pronunciation": "/ˈdɒkər faɪl/",
          "example": "Write a Dockerfile to build image",
          "category": "docker"
        },
        {
          "id": "dk026",
          "english": "docker-compose up",
          "chinese": "启动Compose服务",
          "pronunciation": "/ˈdɒkər kɒmpoʊz ʌp/",
          "example": "docker-compose up -d",
          "category": "docker"
        },
        {
          "id": "dk027",
          "english": "docker-compose down",
          "chinese": "停止Compose服务",
          "pronunciation": "/ˈdɒkər kɒmpoʊz daʊn/",
          "example": "docker-compose down",
          "category": "docker"
        },
        {
          "id": "dk028",
          "english": "Layer",
          "chinese": "镜像层",
          "pronunciation": "/ˈleɪər/",
          "example": "Each instruction creates a new layer",
          "category": "docker"
        },
        {
          "id": "dk029",
          "english": "Registry",
          "chinese": "镜像仓库",
          "pronunciation": "/ˈrɛdʒɪstri/",
          "example": "Push image to Docker Hub registry",
          "category": "docker"
        },
        {
          "id": "dk030",
          "english": "Repository",
          "chinese": "镜像仓库（项目）",
          "pronunciation": "/rɪˈpɒzɪtɔːri/",
          "example": "Pull from official repository",
          "category": "docker"
        },
        {
          "id": "dk031",
          "english": "Multi-stage build",
          "chinese": "多阶段构建",
          "pronunciation": "/ˈmʌlti steɪdʒ bɪld/",
          "example": "Use multi-stage builds to reduce image size",
          "category": "docker"
        },
        {
          "id": "dk032",
          "english": "Health check",
          "chinese": "健康检查",
          "pronunciation": "/hɛlθ tʃɛk/",
          "example": "Configure container health check",
          "category": "docker"
        },
        {
          "id": "dk033",
          "english": "kubectl apply",
          "chinese": "应用配置",
          "pronunciation": "/ˈkuːb siːtl əˈplaɪ/",
          "example": "kubectl apply -f deployment.yaml",
          "category": "kubernetes"
        },
        {
          "id": "dk034",
          "english": "kubectl delete",
          "chinese": "删除资源",
          "pronunciation": "/ˈkuːb siːtl dɪˈliːt/",
          "example": "kubectl delete pod my-pod",
          "category": "kubernetes"
        },
        {
          "id": "dk035",
          "english": "kubectl describe",
          "chinese": "查看资源详情",
          "pronunciation": "/ˈkuːb siːtl dɪˈskraɪb/",
          "example": "kubectl describe pod my-pod",
          "category": "kubernetes"
        },
        {
          "id": "dk036",
          "english": "kubectl logs",
          "chinese": "查看容器日志",
          "pronunciation": "/ˈkuːb siːtl lɒɡz/",
          "example": "kubectl logs my-pod",
          "category": "kubernetes"
        },
        {
          "id": "dk037",
          "english": "kubectl exec",
          "chinese": "在容器内执行命令",
          "pronunciation": "/ˈkuːb siːtl ɪɡˈzɛk/",
          "example": "kubectl exec -it my-pod -- /bin/bash",
          "category": "kubernetes"
        },
        {
          "id": "dk038",
          "english": "kubectl scale",
          "chinese": "扩缩容",
          "pronunciation": "/ˈkuːb siːtl skeɪl/",
          "example": "kubectl scale deployment my-app --replicas=3",
          "category": "kubernetes"
        },
        {
          "id": "dk039",
          "english": "kubectl port-forward",
          "chinese": "端口转发",
          "pronunciation": "/ˈkuːb siːtl pɔːrt ˈfɔːrwərd/",
          "example": "kubectl port-forward pod/my-pod 8080:80",
          "category": "kubernetes"
        },
        {
          "id": "dk040",
          "english": "ConfigMap",
          "chinese": "配置映射",
          "pronunciation": "/ˈkɒnfɪɡ mæp/",
          "example": "Store configuration in ConfigMap",
          "category": "kubernetes"
        },
        {
          "id": "dk041",
          "english": "Secret",
          "chinese": "密钥",
          "pronunciation": "/ˈsiːkrət/",
          "example": "Store passwords in Secrets",
          "category": "kubernetes"
        },
        {
          "id": "dk042",
          "english": "Ingress",
          "chinese": "入口控制器",
          "pronunciation": "/ˈɪnɡrɛs/",
          "example": "Configure Ingress for external access",
          "category": "kubernetes"
        },
        {
          "id": "dk043",
          "english": "Persistent Volume",
          "chinese": "持久卷",
          "pronunciation": "/pərˈsɪstənt ˈvɒljuːm/",
          "example": "Create a Persistent Volume",
          "category": "kubernetes"
        },
        {
          "id": "dk044",
          "english": "StatefulSet",
          "chinese": "有状态应用集",
          "pronunciation": "/ˈsteɪtfʊl sɛt/",
          "example": "Deploy database with StatefulSet",
          "category": "kubernetes"
        },
        {
          "id": "dk045",
          "english": "DaemonSet",
          "chinese": "守护进程集",
          "pronunciation": "/ˈdiːmən sɛt/",
          "example": "Run logging agent as DaemonSet",
          "category": "kubernetes"
        },
        {
          "id": "dk046",
          "english": "Job",
          "chinese": "任务",
          "pronunciation": "/dʒɒb/",
          "example": "Create a batch Job",
          "category": "kubernetes"
        },
        {
          "id": "dk047",
          "english": "CronJob",
          "chinese": "定时任务",
          "pronunciation": "/krɒn dʒɒb/",
          "example": "Schedule tasks with CronJob",
          "category": "kubernetes"
        },
        {
          "id": "dk048",
          "english": "Helm",
          "chinese": "K8s包管理器",
          "pronunciation": "/hɛlm/",
          "example": "Install charts with Helm",
          "category": "kubernetes"
        },
        {
          "id": "dk049",
          "english": "Chart",
          "chinese": "Helm包",
          "pronunciation": "/tʃɑːrt/",
          "example": "Deploy using Helm chart",
          "category": "kubernetes"
        },
        {
          "id": "dk050",
          "english": "Node",
          "chinese": "工作节点",
          "pronunciation": "/noʊd/",
          "example": "Scale by adding more nodes",
          "category": "kubernetes"
        }
      ]
    },
    {
      "id": "database-sql",
      "name": "Database & SQL",
      "nameCN": "数据库与SQL",
      "description": "Database operations and SQL commands",
      "items": [
        {
          "id": "db001",
          "english": "SELECT",
          "chinese": "查询数据",
          "pronunciation": "/sɪˈlɛkt/",
          "example": "SELECT * FROM users WHERE id = 1",
          "category": "sql"
        },
        {
          "id": "db002",
          "english": "INSERT",
          "chinese": "插入数据",
          "pronunciation": "/ɪnˈsɜːrt/",
          "example": "INSERT INTO users (name, email) VALUES ('John', 'john@example.com')",
          "category": "sql"
        },
        {
          "id": "db003",
          "english": "UPDATE",
          "chinese": "更新数据",
          "pronunciation": "/ʌpˈdeɪt/",
          "example": "UPDATE users SET name = 'Jane' WHERE id = 1",
          "category": "sql"
        },
        {
          "id": "db004",
          "english": "DELETE",
          "chinese": "删除数据",
          "pronunciation": "/dɪˈliːt/",
          "example": "DELETE FROM users WHERE id = 1",
          "category": "sql"
        },
        {
          "id": "db005",
          "english": "JOIN",
          "chinese": "连接表",
          "pronunciation": "/dʒɔɪn/",
          "example": "SELECT * FROM users JOIN orders ON users.id = orders.user_id",
          "category": "sql"
        },
        {
          "id": "db006",
          "english": "INDEX",
          "chinese": "索引",
          "pronunciation": "/ˈɪndɛks/",
          "example": "CREATE INDEX idx_name ON users(name)",
          "category": "sql"
        },
        {
          "id": "db007",
          "english": "Primary Key",
          "chinese": "主键",
          "pronunciation": "/ˈpraɪmɛri kiː/",
          "example": "Define the primary key for the table",
          "category": "schema"
        },
        {
          "id": "db008",
          "english": "Foreign Key",
          "chinese": "外键",
          "pronunciation": "/ˈfɒrən kiː/",
          "example": "Set up foreign key constraints",
          "category": "schema"
        },
        {
          "id": "db009",
          "english": "Transaction",
          "chinese": "事务",
          "pronunciation": "/trænˈzækʃən/",
          "example": "BEGIN TRANSACTION; COMMIT; ROLLBACK;",
          "category": "operations"
        },
        {
          "id": "db010",
          "english": "Migration",
          "chinese": "数据库迁移",
          "pronunciation": "/maɪˈɡreɪʃən/",
          "example": "Run database migrations",
          "category": "operations"
        },
        {
          "id": "db011",
          "english": "Query",
          "chinese": "查询",
          "pronunciation": "/ˈkwɪəri/",
          "example": "Execute the SQL query",
          "category": "operations"
        },
        {
          "id": "db012",
          "english": "Schema",
          "chinese": "模式/结构",
          "pronunciation": "/ˈskiːmə/",
          "example": "Database schema design",
          "category": "schema"
        },
        {
          "id": "db013",
          "english": "Connection Pool",
          "chinese": "连接池",
          "pronunciation": "/kəˈnɛkʃən puːl/",
          "example": "Configure the connection pool size",
          "category": "performance"
        },
        {
          "id": "db014",
          "english": "ORM (Object-Relational Mapping)",
          "chinese": "对象关系映射",
          "pronunciation": "/oʊ ɑːr ɛm/",
          "example": "Use an ORM like Sequelize or Prisma",
          "category": "tools"
        },
        {
          "id": "db015",
          "english": "ACID",
          "chinese": "原子性一致性隔离性持久性",
          "pronunciation": "/ˈæsɪd/",
          "example": "Ensure ACID compliance",
          "category": "concepts"
        },
        {
          "id": "db016",
          "english": "CREATE TABLE",
          "chinese": "创建表",
          "pronunciation": "/kriːˈeɪt ˈteɪbl/",
          "example": "CREATE TABLE users (id INT PRIMARY KEY)",
          "category": "ddl"
        },
        {
          "id": "db017",
          "english": "DROP TABLE",
          "chinese": "删除表",
          "pronunciation": "/drɒp ˈteɪbl/",
          "example": "DROP TABLE IF EXISTS temp_table",
          "category": "ddl"
        },
        {
          "id": "db018",
          "english": "ALTER TABLE",
          "chinese": "修改表结构",
          "pronunciation": "/ˈɔːltər ˈteɪbl/",
          "example": "ALTER TABLE users ADD COLUMN age INT",
          "category": "ddl"
        },
        {
          "id": "db019",
          "english": "TRUNCATE",
          "chinese": "清空表",
          "pronunciation": "/ˈtrʌŋkeɪt/",
          "example": "TRUNCATE TABLE logs",
          "category": "ddl"
        },
        {
          "id": "db020",
          "english": "WHERE",
          "chinese": "条件筛选",
          "pronunciation": "/wɛər/",
          "example": "SELECT * FROM users WHERE age > 18",
          "category": "sql"
        },
        {
          "id": "db021",
          "english": "GROUP BY",
          "chinese": "分组",
          "pronunciation": "/ɡruːp baɪ/",
          "example": "SELECT department, COUNT(*) FROM employees GROUP BY department",
          "category": "sql"
        },
        {
          "id": "db022",
          "english": "ORDER BY",
          "chinese": "排序",
          "pronunciation": "/ˈɔːrdər baɪ/",
          "example": "SELECT * FROM products ORDER BY price DESC",
          "category": "sql"
        },
        {
          "id": "db023",
          "english": "HAVING",
          "chinese": "分组后筛选",
          "pronunciation": "/ˈhævɪŋ/",
          "example": "SELECT department, AVG(salary) FROM employees GROUP BY department HAVING AVG(salary) > 50000",
          "category": "sql"
        },
        {
          "id": "db024",
          "english": "LIMIT / OFFSET",
          "chinese": "限制结果数量/偏移",
          "pronunciation": "/ˈlɪmɪt / ˈɒfset/",
          "example": "SELECT * FROM products LIMIT 10 OFFSET 20",
          "category": "sql"
        },
        {
          "id": "db025",
          "english": "DISTINCT",
          "chinese": "去重",
          "pronunciation": "/dɪˈstɪŋkt/",
          "example": "SELECT DISTINCT country FROM customers",
          "category": "sql"
        },
        {
          "id": "db026",
          "english": "COUNT",
          "chinese": "计数",
          "pronunciation": "/kaʊnt/",
          "example": "SELECT COUNT(*) FROM orders",
          "category": "sql"
        },
        {
          "id": "db027",
          "english": "SUM / AVG / MAX / MIN",
          "chinese": "求和/平均/最大/最小",
          "pronunciation": "/sʌm / ˈævərɪdʒ / mæks / mɪn/",
          "example": "SELECT AVG(price), MAX(price) FROM products",
          "category": "sql"
        },
        {
          "id": "db028",
          "english": "LIKE",
          "chinese": "模糊匹配",
          "pronunciation": "/laɪk/",
          "example": "SELECT * FROM users WHERE name LIKE '%John%'",
          "category": "sql"
        },
        {
          "id": "db029",
          "english": "IN",
          "chinese": "在...之中",
          "pronunciation": "/ɪn/",
          "example": "SELECT * FROM products WHERE id IN (1, 2, 3)",
          "category": "sql"
        },
        {
          "id": "db030",
          "english": "BETWEEN",
          "chinese": "在...之间",
          "pronunciation": "/bɪˈtwiːn/",
          "example": "SELECT * FROM orders WHERE date BETWEEN '2023-01-01' AND '2023-12-31'",
          "category": "sql"
        },
        {
          "id": "db031",
          "english": "IS NULL",
          "chinese": "为空",
          "pronunciation": "/ɪz nʌl/",
          "example": "SELECT * FROM users WHERE phone IS NULL",
          "category": "sql"
        },
        {
          "id": "db032",
          "english": "UNION",
          "chinese": "合并结果集",
          "pronunciation": "/ˈjuːniən/",
          "example": "SELECT name FROM customers_a UNION SELECT name FROM customers_b",
          "category": "sql"
        },
        {
          "id": "db033",
          "english": "EXISTS",
          "chinese": "存在",
          "pronunciation": "/ɪɡˈzɪsts/",
          "example": "SELECT * FROM products WHERE EXISTS (SELECT 1 FROM orders WHERE product_id = products.id)",
          "category": "sql"
        },
        {
          "id": "db034",
          "english": "CASE WHEN",
          "chinese": "条件判断",
          "pronunciation": "/keɪs wɛn/",
          "example": "SELECT name, CASE WHEN age >= 18 THEN 'Adult' ELSE 'Minor' END FROM users",
          "category": "sql"
        },
        {
          "id": "db035",
          "english": "VIEW",
          "chinese": "视图",
          "pronunciation": "/vjuː/",
          "example": "CREATE VIEW active_users AS SELECT * FROM users WHERE status = 'active'",
          "category": "schema"
        },
        {
          "id": "db036",
          "english": "TRIGGER",
          "chinese": "触发器",
          "pronunciation": "/ˈtrɪɡər/",
          "example": "CREATE TRIGGER update_timestamp BEFORE UPDATE ON users",
          "category": "schema"
        },
        {
          "id": "db037",
          "english": "STORED PROCEDURE",
          "chinese": "存储过程",
          "pronunciation": "/stɔːrd prəˈsiːdʒər/",
          "example": "CREATE PROCEDURE GetUserById(IN userId INT)",
          "category": "schema"
        },
        {
          "id": "db038",
          "english": "UNIQUE constraint",
          "chinese": "唯一约束",
          "pronunciation": "/juːˈniːk kənˈstreɪnt/",
          "example": "ALTER TABLE users ADD CONSTRAINT unique_email UNIQUE (email)",
          "category": "schema"
        },
        {
          "id": "db039",
          "english": "CHECK constraint",
          "chinese": "检查约束",
          "pronunciation": "/tʃɛk kənˈstreɪnt/",
          "example": "CONSTRAINT check_age CHECK (age >= 0)",
          "category": "schema"
        },
        {
          "id": "db040",
          "english": "CASCADE",
          "chinese": "级联",
          "pronunciation": "/ˈkæskeɪd/",
          "example": "ON DELETE CASCADE",
          "category": "schema"
        },
        {
          "id": "db041",
          "english": "Normalization",
          "chinese": "数据库规范化",
          "pronunciation": "/ˌnɔːrmələˈzeɪʃn/",
          "example": "Apply database normalization to reduce redundancy",
          "category": "concepts"
        },
        {
          "id": "db042",
          "english": "Denormalization",
          "chinese": "反规范化",
          "pronunciation": "/diːˌnɔːrmələˈzeɪʃn/",
          "example": "Use denormalization for read-heavy workloads",
          "category": "concepts"
        },
        {
          "id": "db043",
          "english": "Sharding",
          "chinese": "分片",
          "pronunciation": "/ˈʃɑːrdɪŋ/",
          "example": "Implement database sharding for scalability",
          "category": "scaling"
        },
        {
          "id": "db044",
          "english": "Replication",
          "chinese": "复制",
          "pronunciation": "/ˌreplɪˈkeɪʃn/",
          "example": "Set up master-slave replication",
          "category": "scaling"
        },
        {
          "id": "db045",
          "english": "Master / Slave",
          "chinese": "主/从",
          "pronunciation": "/ˈmæstər / sleɪv/",
          "example": "Configure master-slave replication",
          "category": "scaling"
        },
        {
          "id": "db046",
          "english": "Deadlock",
          "chinese": "死锁",
          "pronunciation": "/ˈdedlɒk/",
          "example": "Detect and resolve database deadlock",
          "category": "performance"
        },
        {
          "id": "db047",
          "english": "Query optimization",
          "chinese": "查询优化",
          "pronunciation": "/ˈkwɪəri ˌɒptɪmaɪˈzeɪʃn/",
          "example": "Use EXPLAIN for query optimization",
          "category": "performance"
        },
        {
          "id": "db048",
          "english": "Explain plan",
          "chinese": "执行计划",
          "pronunciation": "/ɪkˈspleɪn plæn/",
          "example": "Check the EXPLAIN plan for slow queries",
          "category": "performance"
        },
        {
          "id": "db049",
          "english": "NoSQL",
          "chinese": "非关系型数据库",
          "pronunciation": "/noʊ ˈɛs kjuː ɛl/",
          "example": "Use NoSQL for unstructured data",
          "category": "concepts"
        },
        {
          "id": "db050",
          "english": "Database seeding",
          "chinese": "数据库种子数据",
          "pronunciation": "/ˈdeɪtəbeɪs ˈsiːdɪŋ/",
          "example": "Run database seeding for initial data",
          "category": "tools"
        }
      ]
    },
    {
      "id": "algorithms",
      "name": "Algorithms & Data Structures",
      "nameCN": "算法与数据结构",
      "description": "Common algorithms and data structure terms",
      "items": [
        {
          "id": "alg001",
          "english": "Big O Notation",
          "chinese": "时间复杂度表示法",
          "pronunciation": "/bɪɡ oʊ noʊˈteɪʃən/",
          "example": "This algorithm has O(n log n) complexity",
          "category": "complexity"
        },
        {
          "id": "alg002",
          "english": "Time Complexity",
          "chinese": "时间复杂度",
          "pronunciation": "/taɪm kəmˈplɛksɪti/",
          "example": "Analyze the time complexity",
          "category": "complexity"
        },
        {
          "id": "alg003",
          "english": "Space Complexity",
          "chinese": "空间复杂度",
          "pronunciation": "/speɪs kəmˈplɛksɪti/",
          "example": "Optimize for space complexity",
          "category": "complexity"
        },
        {
          "id": "alg004",
          "english": "Binary Search",
          "chinese": "二分查找",
          "pronunciation": "/ˈbaɪnɛri sɜːrtʃ/",
          "example": "Implement binary search for sorted arrays",
          "category": "search"
        },
        {
          "id": "alg005",
          "english": "Recursion",
          "chinese": "递归",
          "pronunciation": "/rɪˈkɜːrʒən/",
          "example": "Use recursion to solve this problem",
          "category": "techniques"
        },
        {
          "id": "alg006",
          "english": "Dynamic Programming",
          "chinese": "动态规划",
          "pronunciation": "/daɪˈnæmɪk ˈproʊɡræmɪŋ/",
          "example": "Apply dynamic programming to optimize",
          "category": "techniques"
        },
        {
          "id": "alg007",
          "english": "Hash Table",
          "chinese": "哈希表",
          "pronunciation": "/hæʃ ˈteɪbl/",
          "example": "Store data in a hash table for O(1) lookup",
          "category": "structures"
        },
        {
          "id": "alg008",
          "english": "Linked List",
          "chinese": "链表",
          "pronunciation": "/lɪŋkt lɪst/",
          "example": "Traverse the linked list",
          "category": "structures"
        },
        {
          "id": "alg009",
          "english": "Stack",
          "chinese": "栈",
          "pronunciation": "/stæk/",
          "example": "Use a stack for LIFO operations",
          "category": "structures"
        },
        {
          "id": "alg010",
          "english": "Queue",
          "chinese": "队列",
          "pronunciation": "/kjuː/",
          "example": "Implement a queue for BFS",
          "category": "structures"
        },
        {
          "id": "alg011",
          "english": "Tree",
          "chinese": "树",
          "pronunciation": "/triː/",
          "example": "Binary tree traversal",
          "category": "structures"
        },
        {
          "id": "alg012",
          "english": "Graph",
          "chinese": "图",
          "pronunciation": "/ɡræf/",
          "example": "Represent the network as a graph",
          "category": "structures"
        },
        {
          "id": "alg013",
          "english": "Depth-First Search",
          "chinese": "深度优先搜索",
          "pronunciation": "/dɛpθ fɜːrst sɜːrtʃ/",
          "example": "Use DFS to explore the graph",
          "category": "search"
        },
        {
          "id": "alg014",
          "english": "Breadth-First Search",
          "chinese": "广度优先搜索",
          "pronunciation": "/brɛdθ fɜːrst sɜːrtʃ/",
          "example": "BFS finds shortest path in unweighted graphs",
          "category": "search"
        },
        {
          "id": "alg015",
          "english": "Sorting Algorithm",
          "chinese": "排序算法",
          "pronunciation": "/ˈsɔːrtɪŋ ˈælɡərɪðəm/",
          "example": "Quick sort and merge sort algorithms",
          "category": "algorithms"
        },
        {
          "id": "alg016",
          "english": "Quick Sort",
          "chinese": "快速排序",
          "pronunciation": "/kwɪk sɔːrt/",
          "example": "Quick sort has O(n log n) average time complexity",
          "category": "algorithms"
        },
        {
          "id": "alg017",
          "english": "Merge Sort",
          "chinese": "归并排序",
          "pronunciation": "/mɜːrdʒ sɔːrt/",
          "example": "Merge sort uses divide and conquer approach",
          "category": "algorithms"
        },
        {
          "id": "alg018",
          "english": "Binary Search Tree",
          "chinese": "二叉搜索树",
          "pronunciation": "/ˈbaɪnəri sɜːrtʃ triː/",
          "example": "Use binary search tree for efficient lookup",
          "category": "structures"
        },
        {
          "id": "alg019",
          "english": "AVL Tree",
          "chinese": "平衡二叉树",
          "pronunciation": "/ˌeɪ viː ˈɛl triː/",
          "example": "AVL tree maintains balance factor",
          "category": "structures"
        },
        {
          "id": "alg020",
          "english": "Red-Black Tree",
          "chinese": "红黑树",
          "pronunciation": "/rɛd blæk triː/",
          "example": "Red-black tree ensures O(log n) operations",
          "category": "structures"
        },
        {
          "id": "alg021",
          "english": "Heap Sort",
          "chinese": "堆排序",
          "pronunciation": "/hiːp sɔːrt/",
          "example": "Heap sort uses max-heap structure",
          "category": "algorithms"
        },
        {
          "id": "alg022",
          "english": "Greedy Algorithm",
          "chinese": "贪心算法",
          "pronunciation": "/ˈɡriːdi ˈælɡərɪðəm/",
          "example": "Greedy algorithm makes locally optimal choices",
          "category": "techniques"
        },
        {
          "id": "alg023",
          "english": "Backtracking",
          "chinese": "回溯算法",
          "pronunciation": "/ˈbækˌtrækɪŋ/",
          "example": "Solve N-Queens problem using backtracking",
          "category": "techniques"
        },
        {
          "id": "alg024",
          "english": "Memoization",
          "chinese": "记忆化",
          "pronunciation": "/ˌmɛmɔɪˈzeɪʃən/",
          "example": "Use memoization to cache results",
          "category": "techniques"
        },
        {
          "id": "alg025",
          "english": "Tabulation",
          "chinese": "表格法",
          "pronunciation": "/ˌtæbjuˈleɪʃən/",
          "example": "Tabulation builds solution bottom-up",
          "category": "techniques"
        },
        {
          "id": "alg026",
          "english": "Dijkstra's Algorithm",
          "chinese": "迪杰斯特拉算法",
          "pronunciation": "/ˈdaɪkstrəz ˈælɡərɪðəm/",
          "example": "Dijkstra's algorithm finds shortest path",
          "category": "algorithms"
        },
        {
          "id": "alg027",
          "english": "Bellman-Ford",
          "chinese": "贝尔曼-福特算法",
          "pronunciation": "/ˈbɛlmən fɔːrd/",
          "example": "Bellman-Ford handles negative weights",
          "category": "algorithms"
        },
        {
          "id": "alg028",
          "english": "Floyd-Warshall",
          "chinese": "弗洛伊德算法",
          "pronunciation": "/flɔɪd ˈwɔːrʃəl/",
          "example": "Floyd-Warshall finds all-pairs shortest paths",
          "category": "algorithms"
        },
        {
          "id": "alg029",
          "english": "Minimum Spanning Tree",
          "chinese": "最小生成树",
          "pronunciation": "/ˈmɪnɪməm ˈspænɪŋ triː/",
          "example": "Find MST using Kruskal's algorithm",
          "category": "algorithms"
        },
        {
          "id": "alg030",
          "english": "Topological Sort",
          "chinese": "拓扑排序",
          "pronunciation": "/ˌtɒpəˈlɒdʒɪkl sɔːrt/",
          "example": "Topological sort orders DAG nodes",
          "category": "algorithms"
        },
        {
          "id": "alg031",
          "english": "Bit Manipulation",
          "chinese": "位运算",
          "pronunciation": "/bɪt məˌnɪpjuˈleɪʃən/",
          "example": "Use bit manipulation for efficiency",
          "category": "techniques"
        },
        {
          "id": "alg032",
          "english": "Sliding Window",
          "chinese": "滑动窗口",
          "pronunciation": "/ˈslaɪdɪŋ ˈwɪndoʊ/",
          "example": "Sliding window technique for subarray problems",
          "category": "techniques"
        },
        {
          "id": "alg033",
          "english": "Two Pointers",
          "chinese": "双指针",
          "pronunciation": "/tuː ˈpɔɪntərz/",
          "example": "Two pointers approach for array problems",
          "category": "techniques"
        },
        {
          "id": "alg034",
          "english": "Union-Find",
          "chinese": "并查集",
          "pronunciation": "/ˈjuːniən faɪnd/",
          "example": "Union-Find for connected components",
          "category": "structures"
        },
        {
          "id": "alg035",
          "english": "Trie",
          "chinese": "前缀树/字典树",
          "pronunciation": "/traɪ/",
          "example": "Use Trie for prefix matching",
          "category": "structures"
        },
        {
          "id": "alg036",
          "english": "Segment Tree",
          "chinese": "线段树",
          "pronunciation": "/ˈsɛɡmənt triː/",
          "example": "Segment tree for range queries",
          "category": "structures"
        },
        {
          "id": "alg037",
          "english": "Fenwick Tree",
          "chinese": "树状数组",
          "pronunciation": "/ˈfɛnɪk triː/",
          "example": "Fenwick tree for prefix sums",
          "category": "structures"
        },
        {
          "id": "alg038",
          "english": "Bloom Filter",
          "chinese": "布隆过滤器",
          "pronunciation": "/bluːm ˈfɪltər/",
          "example": "Bloom filter for membership testing",
          "category": "structures"
        },
        {
          "id": "alg039",
          "english": "LRU Cache",
          "chinese": "最近最少使用缓存",
          "pronunciation": "/ˌɛl ɑːr ˈjuː kæʃ/",
          "example": "Implement LRU cache with hash map and doubly linked list",
          "category": "structures"
        },
        {
          "id": "alg040",
          "english": "Amortized Analysis",
          "chinese": "摊还分析",
          "pronunciation": "/ˈæmɔːrtaɪzd əˈnæləsɪs/",
          "example": "Amortized analysis of dynamic array",
          "category": "complexity"
        },
        {
          "id": "alg041",
          "english": "Master Theorem",
          "chinese": "主定理",
          "pronunciation": "/ˈmɑːstər ˈθɪərəm/",
          "example": "Apply Master theorem to recurrence relations",
          "category": "complexity"
        },
        {
          "id": "alg042",
          "english": "P vs NP",
          "chinese": "P与NP问题",
          "pronunciation": "/piː vɜːrs ɛn piː/",
          "example": "P vs NP is a major unsolved problem",
          "category": "complexity"
        },
        {
          "id": "alg043",
          "english": "Brute Force",
          "chinese": "暴力解法",
          "pronunciation": "/bruːt fɔːrs/",
          "example": "Brute force approach tries all possibilities",
          "category": "techniques"
        },
        {
          "id": "alg044",
          "english": "Divide and Conquer",
          "chinese": "分治法",
          "pronunciation": "/dɪˈvaɪd ænd ˈkɒŋkər/",
          "example": "Merge sort uses divide and conquer",
          "category": "techniques"
        },
        {
          "id": "alg045",
          "english": "KMP Algorithm",
          "chinese": "字符串匹配算法",
          "pronunciation": "/keɪ ɛm piː ˈælɡərɪðəm/",
          "example": "KMP algorithm for pattern matching",
          "category": "algorithms"
        },
        {
          "id": "alg046",
          "english": "Rabin-Karp",
          "chinese": "字符串搜索算法",
          "pronunciation": "/ˈrɑːbɪn kɑːrp/",
          "example": "Rabin-Karp uses rolling hash",
          "category": "algorithms"
        },
        {
          "id": "alg047",
          "english": "Manacher's Algorithm",
          "chinese": "马拉车算法",
          "pronunciation": "/ˈmænətʃərz ˈælɡərɪðəm/",
          "example": "Manacher's algorithm finds longest palindrome",
          "category": "algorithms"
        },
        {
          "id": "alg048",
          "english": "Bucket Sort",
          "chinese": "桶排序",
          "pronunciation": "/ˈbʌkɪt sɔːrt/",
          "example": "Bucket sort distributes elements into buckets",
          "category": "algorithms"
        },
        {
          "id": "alg049",
          "english": "Counting Sort",
          "chinese": "计数排序",
          "pronunciation": "/ˈkaʊntɪŋ sɔːrt/",
          "example": "Counting sort for integers in range",
          "category": "algorithms"
        },
        {
          "id": "alg050",
          "english": "Radix Sort",
          "chinese": "基数排序",
          "pronunciation": "/ˈreɪdɪks sɔːrt/",
          "example": "Radix sort processes digits from LSD to MSD",
          "category": "algorithms"
        }
      ]
    },
    {
      "id": "networking",
      "name": "Networking & Protocols",
      "nameCN": "网络与协议",
      "description": "Network protocols and communication terms",
      "items": [
        {
          "id": "net001",
          "english": "HTTP (HyperText Transfer Protocol)",
          "chinese": "超文本传输协议",
          "pronunciation": "/eɪtʃ tiː tiː piː/",
          "example": "The browser sends an HTTP request",
          "category": "protocols"
        },
        {
          "id": "net002",
          "english": "HTTPS",
          "chinese": "安全超文本传输协议",
          "pronunciation": "/eɪtʃ tiː tiː piː ɛs/",
          "example": "Use HTTPS for secure connections",
          "category": "protocols"
        },
        {
          "id": "net003",
          "english": "TCP/IP",
          "chinese": "传输控制协议/网际协议",
          "pronunciation": "/tiː siː piː aɪ piː/",
          "example": "TCP/IP is the foundation of internet",
          "category": "protocols"
        },
        {
          "id": "net004",
          "english": "DNS (Domain Name System)",
          "chinese": "域名系统",
          "pronunciation": "/diː ɛn ɛs/",
          "example": "DNS resolves domain names to IP addresses",
          "category": "protocols"
        },
        {
          "id": "net005",
          "english": "SSL/TLS",
          "chinese": "安全套接层/传输层安全",
          "pronunciation": "/ɛs ɛs ɛl tiː ɛl ɛs/",
          "example": "Enable SSL/TLS encryption",
          "category": "security"
        },
        {
          "id": "net006",
          "english": "RESTful API",
          "chinese": "REST风格API",
          "pronunciation": "/ˈrɛstfʊl eɪ piː aɪ/",
          "example": "Design a RESTful API",
          "category": "architecture"
        },
        {
          "id": "net007",
          "english": "WebSocket",
          "chinese": "Web套接字",
          "pronunciation": "/ˈwɛb ˈsɒkɪt/",
          "example": "Use WebSocket for real-time communication",
          "category": "protocols"
        },
        {
          "id": "net008",
          "english": "Load Balancer",
          "chinese": "负载均衡器",
          "pronunciation": "/loʊd ˈbælənsər/",
          "example": "Configure the load balancer",
          "category": "infrastructure"
        },
        {
          "id": "net009",
          "english": "Proxy",
          "chinese": "代理",
          "pronunciation": "/ˈprɒksi/",
          "example": "Set up a reverse proxy",
          "category": "infrastructure"
        },
        {
          "id": "net010",
          "english": "CDN (Content Delivery Network)",
          "chinese": "内容分发网络",
          "pronunciation": "/siː diː ɛn/",
          "example": "Serve static assets via CDN",
          "category": "infrastructure"
        },
        {
          "id": "net011",
          "english": "Latency",
          "chinese": "延迟",
          "pronunciation": "/ˈleɪtənsi/",
          "example": "Reduce network latency",
          "category": "performance"
        },
        {
          "id": "net012",
          "english": "Bandwidth",
          "chinese": "带宽",
          "pronunciation": "/ˈbændwɪdθ/",
          "example": "Measure the bandwidth usage",
          "category": "performance"
        },
        {
          "id": "net013",
          "english": "Firewall",
          "chinese": "防火墙",
          "pronunciation": "/ˈfaɪərwɔːl/",
          "example": "Configure firewall rules",
          "category": "security"
        },
        {
          "id": "net014",
          "english": "VPN (Virtual Private Network)",
          "chinese": "虚拟专用网络",
          "pronunciation": "/viː piː ɛn/",
          "example": "Connect via VPN",
          "category": "security"
        },
        {
          "id": "net015",
          "english": "CORS (Cross-Origin Resource Sharing)",
          "chinese": "跨域资源共享",
          "pronunciation": "/kɔːrs/",
          "example": "Enable CORS for the API",
          "category": "security"
        },
        {
          "id": "net016",
          "english": "IP Address",
          "chinese": "IP地址",
          "pronunciation": "/aɪ piː əˈdrɛs/",
          "example": "Server has a static IP address",
          "category": "basics"
        },
        {
          "id": "net017",
          "english": "MAC Address",
          "chinese": "MAC地址",
          "pronunciation": "/mæk əˈdrɛs/",
          "example": "Each device has a unique MAC address",
          "category": "basics"
        },
        {
          "id": "net018",
          "english": "Subnet",
          "chinese": "子网",
          "pronunciation": "/ˈsʌbnɛt/",
          "example": "Divide the network into subnets",
          "category": "basics"
        },
        {
          "id": "net019",
          "english": "Gateway",
          "chinese": "网关",
          "pronunciation": "/ˈɡeɪtweɪ/",
          "example": "Default gateway for the network",
          "category": "basics"
        },
        {
          "id": "net020",
          "english": "Router",
          "chinese": "路由器",
          "pronunciation": "/ˈruːtər/",
          "example": "Configure the router settings",
          "category": "hardware"
        },
        {
          "id": "net021",
          "english": "Switch",
          "chinese": "交换机",
          "pronunciation": "/swɪtʃ/",
          "example": "Connect devices to the switch",
          "category": "hardware"
        },
        {
          "id": "net022",
          "english": "Hub",
          "chinese": "集线器",
          "pronunciation": "/hʌb/",
          "example": "Old network used hubs instead of switches",
          "category": "hardware"
        },
        {
          "id": "net023",
          "english": "Packet",
          "chinese": "数据包",
          "pronunciation": "/ˈpækɪt/",
          "example": "Network traffic is divided into packets",
          "category": "basics"
        },
        {
          "id": "net024",
          "english": "Frame",
          "chinese": "帧",
          "pronunciation": "/freɪm/",
          "example": "Data link layer uses frames",
          "category": "basics"
        },
        {
          "id": "net025",
          "english": "MTU",
          "chinese": "最大传输单元",
          "pronunciation": "/ˌɛm tiː ˈjuː/",
          "example": "Default MTU is 1500 bytes",
          "category": "performance"
        },
        {
          "id": "net026",
          "english": "NAT",
          "chinese": "网络地址转换",
          "pronunciation": "/næt/",
          "example": "Router uses NAT for multiple devices",
          "category": "basics"
        },
        {
          "id": "net027",
          "english": "DHCP",
          "chinese": "动态主机配置协议",
          "pronunciation": "/ˌdiː siː eɪtʃ ˈpiː/",
          "example": "DHCP assigns IP addresses automatically",
          "category": "protocols"
        },
        {
          "id": "net028",
          "english": "ARP",
          "chinese": "地址解析协议",
          "pronunciation": "/ɑːrp/",
          "example": "ARP resolves IP to MAC address",
          "category": "protocols"
        },
        {
          "id": "net029",
          "english": "ICMP",
          "chinese": "互联网控制消息协议",
          "pronunciation": "/ˈaɪsɪmp/",
          "example": "Ping uses ICMP protocol",
          "category": "protocols"
        },
        {
          "id": "net030",
          "english": "FTP",
          "chinese": "文件传输协议",
          "pronunciation": "/ˌɛf tiː ˈpiː/",
          "example": "Transfer files via FTP",
          "category": "protocols"
        },
        {
          "id": "net031",
          "english": "SSH",
          "chinese": "安全外壳协议",
          "pronunciation": "/ˌɛs eɪtʃ ˈtʃeɪ/",
          "example": "Connect via SSH for secure access",
          "category": "security"
        },
        {
          "id": "net032",
          "english": "Telnet",
          "chinese": "远程登录协议",
          "pronunciation": "/ˈtɛlnɛt/",
          "example": "Telnet is replaced by SSH",
          "category": "protocols"
        },
        {
          "id": "net033",
          "english": "SMTP",
          "chinese": "简单邮件传输协议",
          "pronunciation": "/ˌɛs ɛm tiː ˈpiː/",
          "example": "Send emails via SMTP",
          "category": "protocols"
        },
        {
          "id": "net034",
          "english": "IMAP",
          "chinese": "互联网消息访问协议",
          "pronunciation": "/ˈaɪmæp/",
          "example": "Access emails via IMAP",
          "category": "protocols"
        },
        {
          "id": "net035",
          "english": "POP3",
          "chinese": "邮局协议版本3",
          "pronunciation": "/piː oʊ piː θriː/",
          "example": "Download emails using POP3",
          "category": "protocols"
        },
        {
          "id": "net036",
          "english": "OSI Model",
          "chinese": "开放系统互连模型",
          "pronunciation": "/oʊ ɛs aɪ ˈmɒdl/",
          "example": "OSI model has 7 layers",
          "category": "basics"
        },
        {
          "id": "net037",
          "english": "TCP Handshake",
          "chinese": "TCP握手",
          "pronunciation": "/tiː siː piː ˈhændʃeɪk/",
          "example": "Three-way TCP handshake",
          "category": "protocols"
        },
        {
          "id": "net038",
          "english": "UDP",
          "chinese": "用户数据报协议",
          "pronunciation": "/ˌjuː diː ˈpiː/",
          "example": "UDP is faster but unreliable",
          "category": "protocols"
        },
        {
          "id": "net039",
          "english": "IPv4 / IPv6",
          "chinese": "互联网协议版本4/6",
          "pronunciation": "/aɪ piː viː fɔːr / aɪ piː viː sɪks/",
          "example": "Transition from IPv4 to IPv6",
          "category": "basics"
        },
        {
          "id": "net040",
          "english": "Ping",
          "chinese": "网络连通测试",
          "pronunciation": "/pɪŋ/",
          "example": "Ping the server to check connectivity",
          "category": "tools"
        },
        {
          "id": "net041",
          "english": "Traceroute",
          "chinese": "路由追踪",
          "pronunciation": "/ˈtreɪsruːt/",
          "example": "Use traceroute to see network path",
          "category": "tools"
        },
        {
          "id": "net042",
          "english": "Netstat",
          "chinese": "网络统计",
          "pronunciation": "/ˈnɛtstæt/",
          "example": "Check connections with netstat",
          "category": "tools"
        },
        {
          "id": "net043",
          "english": "Nmap",
          "chinese": "网络扫描工具",
          "pronunciation": "/ˈɛnmæp/",
          "example": "Scan ports with nmap",
          "category": "tools"
        },
        {
          "id": "net044",
          "english": "Wireshark",
          "chinese": "网络协议分析器",
          "pronunciation": "/ˈwaɪərʃɑːrk/",
          "example": "Capture packets with Wireshark",
          "category": "tools"
        },
        {
          "id": "net045",
          "english": "tcpdump",
          "chinese": "网络抓包工具",
          "pronunciation": "/tiː siː piː dʌmp/",
          "example": "Capture traffic with tcpdump",
          "category": "tools"
        },
        {
          "id": "net046",
          "english": "Packet Loss",
          "chinese": "丢包",
          "pronunciation": "/ˈpækɪt lɒs/",
          "example": "High packet loss affects quality",
          "category": "performance"
        },
        {
          "id": "net047",
          "english": "Jitter",
          "chinese": "抖动",
          "pronunciation": "/ˈdʒɪtər/",
          "example": "Network jitter affects real-time applications",
          "category": "performance"
        },
        {
          "id": "net048",
          "english": "QoS",
          "chinese": "服务质量",
          "pronunciation": "/kjuː oʊ ɛs/",
          "example": "Configure QoS for priority traffic",
          "category": "performance"
        },
        {
          "id": "net049",
          "english": "DDoS",
          "chinese": "分布式拒绝服务攻击",
          "pronunciation": "/diː diː oʊ ɛs/",
          "example": "Protect against DDoS attacks",
          "category": "security"
        },
        {
          "id": "net050",
          "english": "Man-in-the-Middle",
          "chinese": "中间人攻击",
          "pronunciation": "/mæn ɪn ðə ˈmɪdl/",
          "example": "Prevent man-in-the-middle attacks",
          "category": "security"
        }
      ]
    },
    {
      "id": "code-review",
      "name": "Code Review",
      "nameCN": "代码审查",
      "description": "Code review and collaboration phrases",
      "items": [
        {
          "id": "cr001",
          "english": "LGTM (Looks Good To Me)",
          "chinese": "看起来不错（批准）",
          "pronunciation": "/ˌɛl dʒiː tiː ˈɛm/",
          "example": "LGTM, ready to merge",
          "category": "approval"
        },
        {
          "id": "cr002",
          "english": "Nitpick",
          "chinese": "吹毛求疵/小问题",
          "pronunciation": "/ˈnɪtpɪk/",
          "example": "Just a nitpick: fix the indentation",
          "category": "feedback"
        },
        {
          "id": "cr003",
          "english": "Blocking Issue",
          "chinese": "阻塞性问题",
          "pronunciation": "/ˈblɒkɪŋ ˈɪʃuː/",
          "example": "This is a blocking issue, needs to be fixed",
          "category": "feedback"
        },
        {
          "id": "cr004",
          "english": "Non-blocking",
          "chinese": "非阻塞的",
          "pronunciation": "/nɒn ˈblɒkɪŋ/",
          "example": "This is non-blocking, can be addressed later",
          "category": "feedback"
        },
        {
          "id": "cr005",
          "english": "Suggestion",
          "chinese": "建议",
          "pronunciation": "/səˈdʒɛstʃən/",
          "example": "Just a suggestion: consider using async/await",
          "category": "feedback"
        },
        {
          "id": "cr006",
          "english": "Please address",
          "chinese": "请处理",
          "pronunciation": "/pliːz əˈdrɛs/",
          "example": "Please address the security concern",
          "category": "feedback"
        },
        {
          "id": "cr007",
          "english": "Consider",
          "chinese": "考虑",
          "pronunciation": "/kənˈsɪdər/",
          "example": "Consider renaming this variable for clarity",
          "category": "feedback"
        },
        {
          "id": "cr008",
          "english": "Out of scope",
          "chinese": "超出范围",
          "pronunciation": "/aʊt ʌv skoʊp/",
          "example": "This change is out of scope for this PR",
          "category": "feedback"
        },
        {
          "id": "cr009",
          "english": "Follow-up",
          "chinese": "后续跟进",
          "pronunciation": "/ˈfɒloʊ ʌp/",
          "example": "Let's address this in a follow-up PR",
          "category": "feedback"
        },
        {
          "id": "cr010",
          "english": "Approved with comments",
          "chinese": "批准但有意见",
          "pronunciation": "/əˈpruːvd wɪð ˈkɒmɛnts/",
          "example": "Approved with minor comments",
          "category": "approval"
        },
        {
          "id": "cr011",
          "english": "Request changes",
          "chinese": "请求修改",
          "pronunciation": "/rɪˈkwɛst ˈtʃeɪndʒɪz/",
          "example": "Requesting changes before approval",
          "category": "approval"
        },
        {
          "id": "cr012",
          "english": "Code smell",
          "chinese": "代码异味（潜在问题）",
          "pronunciation": "/koʊd smɛl/",
          "example": "This looks like a code smell",
          "category": "feedback"
        },
        {
          "id": "cr013",
          "english": "Edge case",
          "chinese": "边界情况",
          "pronunciation": "/ɛdʒ keɪs/",
          "example": "What about the edge case?",
          "category": "feedback"
        },
        {
          "id": "cr014",
          "english": "DRY (Don't Repeat Yourself)",
          "chinese": "不要重复自己",
          "pronunciation": "/draɪ/",
          "example": "This violates DRY principle",
          "category": "principles"
        },
        {
          "id": "cr015",
          "english": "Single Responsibility",
          "chinese": "单一职责",
          "pronunciation": "/ˈsɪŋɡl rɪˌspɒnsəˈbɪlɪti/",
          "example": "Each function should have single responsibility",
          "category": "principles"
        },
        {
          "id": "cr016",
          "english": "Ship it",
          "chinese": "合并发布",
          "pronunciation": "/ʃɪp ɪt/",
          "example": "Code looks good, ship it!",
          "category": "approval"
        },
        {
          "id": "cr017",
          "english": "Rubber stamp",
          "chinese": "快速批准",
          "pronunciation": "/ˈrʌbər stæmp/",
          "example": "I'll rubber stamp this change",
          "category": "approval"
        },
        {
          "id": "cr018",
          "english": "Stamp of approval",
          "chinese": "正式批准",
          "pronunciation": "/stæmp əv əˈpruːvl/",
          "example": "This has my stamp of approval",
          "category": "approval"
        },
        {
          "id": "cr019",
          "english": "Needs work",
          "chinese": "需要修改",
          "pronunciation": "/niːdz wɜːrk/",
          "example": "This PR needs work before merging",
          "category": "feedback"
        },
        {
          "id": "cr020",
          "english": "Needs clarification",
          "chinese": "需要澄清",
          "pronunciation": "/niːdz ˌklærɪfɪˈkeɪʃn/",
          "example": "This logic needs clarification",
          "category": "feedback"
        },
        {
          "id": "cr021",
          "english": "Can you elaborate?",
          "chinese": "能详细说明吗",
          "pronunciation": "/kæn juː ɪˈlæbəreɪt/",
          "example": "Can you elaborate on this approach?",
          "category": "feedback"
        },
        {
          "id": "cr022",
          "english": "I'm not convinced",
          "chinese": "我不确定/不认同",
          "pronunciation": "/aɪm nɒt kənˈvɪnst/",
          "example": "I'm not convinced this is the right approach",
          "category": "feedback"
        },
        {
          "id": "cr023",
          "english": "I'd prefer",
          "chinese": "我更倾向于",
          "pronunciation": "/aɪd prɪˈfɜːr/",
          "example": "I'd prefer a different approach here",
          "category": "feedback"
        },
        {
          "id": "cr024",
          "english": "Why not",
          "chinese": "为什么不",
          "pronunciation": "/waɪ nɒt/",
          "example": "Why not use a built-in function?",
          "category": "feedback"
        },
        {
          "id": "cr025",
          "english": "What about",
          "chinese": "...怎么样",
          "pronunciation": "/wɒt əˈbaʊt/",
          "example": "What about error handling?",
          "category": "feedback"
        },
        {
          "id": "cr026",
          "english": "How about",
          "chinese": "...如何",
          "pronunciation": "/haʊ əˈbaʊt/",
          "example": "How about using constants?",
          "category": "feedback"
        },
        {
          "id": "cr027",
          "english": "Take another look",
          "chinese": "再看一眼",
          "pronunciation": "/teɪk əˈnʌðər lʊk/",
          "example": "Please take another look at this",
          "category": "feedback"
        },
        {
          "id": "cr028",
          "english": "Double check",
          "chinese": "仔细检查",
          "pronunciation": "/ˈdʌbl tʃɛk/",
          "example": "Double check this condition",
          "category": "feedback"
        },
        {
          "id": "cr029",
          "english": "Watch out for",
          "chinese": "注意",
          "pronunciation": "/wɒtʃ aʊt fɔːr/",
          "example": "Watch out for null values",
          "category": "feedback"
        },
        {
          "id": "cr030",
          "english": "Be careful with",
          "chinese": "小心处理",
          "pronunciation": "/biː ˈkɛərfʊl wɪð/",
          "example": "Be careful with this change",
          "category": "feedback"
        },
        {
          "id": "cr031",
          "english": "Inconsistent",
          "chinese": "不一致的",
          "pronunciation": "/ˌɪnkənˈsɪstənt/",
          "example": "This is inconsistent with the codebase style",
          "category": "feedback"
        },
        {
          "id": "cr032",
          "english": "Missing",
          "chinese": "缺少的",
          "pronunciation": "/ˈmɪsɪŋ/",
          "example": "Missing error handling here",
          "category": "feedback"
        },
        {
          "id": "cr033",
          "english": "Unnecessary",
          "chinese": "不必要的",
          "pronunciation": "/ʌnˈnesəsɛri/",
          "example": "This seems unnecessary",
          "category": "feedback"
        },
        {
          "id": "cr034",
          "english": "Overcomplicated",
          "chinese": "过于复杂",
          "pronunciation": "/ˌoʊvərˈkɒmplɪkeɪtɪd/",
          "example": "This solution is overcomplicated",
          "category": "feedback"
        },
        {
          "id": "cr035",
          "english": "Could be simpler",
          "chinese": "可以更简洁",
          "pronunciation": "/kʊd biː ˈsɪmplər/",
          "example": "This could be simpler",
          "category": "feedback"
        },
        {
          "id": "cr036",
          "english": "Security concern",
          "chinese": "安全问题",
          "pronunciation": "/sɪˈkjʊərəti kənˈsɜːrn/",
          "example": "This raises a security concern",
          "category": "feedback"
        },
        {
          "id": "cr037",
          "english": "Performance issue",
          "chinese": "性能问题",
          "pronunciation": "/pərˈfɔːrməns ˈɪʃuː/",
          "example": "This might cause performance issues",
          "category": "feedback"
        },
        {
          "id": "cr038",
          "english": "Potential bug",
          "chinese": "潜在bug",
          "pronunciation": "/pəˈtɛnʃəl bʌɡ/",
          "example": "This looks like a potential bug",
          "category": "feedback"
        },
        {
          "id": "cr039",
          "english": "Typo",
          "chinese": "拼写错误",
          "pronunciation": "/ˈtaɪpoʊ/",
          "example": "Fixed typo in variable name",
          "category": "feedback"
        },
        {
          "id": "cr040",
          "english": "Format",
          "chinese": "格式化",
          "pronunciation": "/ˈfɔːrmæt/",
          "example": "Please format this code",
          "category": "feedback"
        },
        {
          "id": "cr041",
          "english": "Indentation",
          "chinese": "缩进",
          "pronunciation": "/ˌɪndɛnˈteɪʃən/",
          "example": "Fix the indentation here",
          "category": "feedback"
        },
        {
          "id": "cr042",
          "english": "Naming convention",
          "chinese": "命名规范",
          "pronunciation": "/ˈneɪmɪŋ kənˈvɛnʃən/",
          "example": "Follow the naming convention",
          "category": "principles"
        },
        {
          "id": "cr043",
          "english": "YAGNI",
          "chinese": "你不会需要它",
          "pronunciation": "/ˈjæɡni/",
          "example": "YAGNI - remove unused code",
          "category": "principles"
        },
        {
          "id": "cr044",
          "english": "KISS",
          "chinese": "保持简单直接",
          "pronunciation": "/kɪs/",
          "example": "KISS principle - keep it simple",
          "category": "principles"
        },
        {
          "id": "cr045",
          "english": "Boy Scout Rule",
          "chinese": "童子军规则",
          "pronunciation": "/bɔɪ skaʊt ruːl/",
          "example": "Follow Boy Scout Rule: leave code cleaner",
          "category": "principles"
        },
        {
          "id": "cr046",
          "english": "SOLID",
          "chinese": "面向对象设计原则",
          "pronunciation": "/ˈsɒlɪd/",
          "example": "Follow SOLID principles",
          "category": "principles"
        },
        {
          "id": "cr047",
          "english": "Open/Closed Principle",
          "chinese": "开闭原则",
          "pronunciation": "/ˈoʊpən ˈkloʊzd ˈprɪnsəpl/",
          "example": "Classes should be open for extension",
          "category": "principles"
        },
        {
          "id": "cr048",
          "english": "Liskov Substitution",
          "chinese": "里氏替换原则",
          "pronunciation": "/ˈlɪskɒv ˌsʌbstɪˈtuːʃən/",
          "example": "Follow Liskov Substitution Principle",
          "category": "principles"
        },
        {
          "id": "cr049",
          "english": "Interface Segregation",
          "chinese": "接口隔离原则",
          "pronunciation": "/ˈɪntərfeɪs ˌsɛɡrɪˈɡeɪʃən/",
          "example": "Apply Interface Segregation Principle",
          "category": "principles"
        },
        {
          "id": "cr050",
          "english": "Dependency Inversion",
          "chinese": "依赖倒置原则",
          "pronunciation": "/dɪˈpɛndənsi ɪnˈvɜːrʒən/",
          "example": "Use Dependency Inversion Principle",
          "category": "principles"
        }
      ]
    },
    {
      "id": "ai-ml",
      "name": "AI & Machine Learning",
      "nameCN": "AI与机器学习",
      "description": "Artificial Intelligence and ML terminology",
      "items": [
        {
          "id": "ai001",
          "english": "Machine Learning",
          "chinese": "机器学习",
          "pronunciation": "/məˈʃiːn ˈlɜːrnɪŋ/",
          "example": "Use machine learning for predictions",
          "category": "concepts"
        },
        {
          "id": "ai002",
          "english": "Deep Learning",
          "chinese": "深度学习",
          "pronunciation": "/diːp ˈlɜːrnɪŋ/",
          "example": "Deep learning with neural networks",
          "category": "concepts"
        },
        {
          "id": "ai003",
          "english": "Neural Network",
          "chinese": "神经网络",
          "pronunciation": "/ˈnjʊərəl ˈnɛtwɜːrk/",
          "example": "Train a neural network",
          "category": "concepts"
        },
        {
          "id": "ai004",
          "english": "LLM (Large Language Model)",
          "chinese": "大语言模型",
          "pronunciation": "/ˌɛl ɛl ˈɛm/",
          "example": "GPT is a popular LLM",
          "category": "concepts"
        },
        {
          "id": "ai005",
          "english": "Prompt",
          "chinese": "提示词",
          "pronunciation": "/prɒmpt/",
          "example": "Write an effective prompt",
          "category": "concepts"
        },
        {
          "id": "ai006",
          "english": "Token",
          "chinese": "令牌/词元",
          "pronunciation": "/ˈtoʊkən/",
          "example": "Count the tokens in the input",
          "category": "concepts"
        },
        {
          "id": "ai007",
          "english": "Embedding",
          "chinese": "嵌入向量",
          "pronunciation": "/ɪmˈbɛdɪŋ/",
          "example": "Generate text embeddings",
          "category": "concepts"
        },
        {
          "id": "ai008",
          "english": "Fine-tuning",
          "chinese": "微调",
          "pronunciation": "/faɪn ˈtuːnɪŋ/",
          "example": "Fine-tune the model on custom data",
          "category": "training"
        },
        {
          "id": "ai009",
          "english": "Inference",
          "chinese": "推理",
          "pronunciation": "/ˈɪnfərəns/",
          "example": "Run inference on the model",
          "category": "training"
        },
        {
          "id": "ai010",
          "english": "Training Data",
          "chinese": "训练数据",
          "pronunciation": "/ˈtreɪnɪŋ ˈdeɪtə/",
          "example": "Prepare the training dataset",
          "category": "training"
        },
        {
          "id": "ai011",
          "english": "Overfitting",
          "chinese": "过拟合",
          "pronunciation": "/ˌoʊvərˈfɪtɪŋ/",
          "example": "The model is overfitting",
          "category": "training"
        },
        {
          "id": "ai012",
          "english": "RAG (Retrieval-Augmented Generation)",
          "chinese": "检索增强生成",
          "pronunciation": "/ræɡ/",
          "example": "Implement RAG for better answers",
          "category": "techniques"
        },
        {
          "id": "ai013",
          "english": "Vector Database",
          "chinese": "向量数据库",
          "pronunciation": "/ˈvɛktər ˈdeɪtəbeɪs/",
          "example": "Store embeddings in a vector database",
          "category": "infrastructure"
        },
        {
          "id": "ai014",
          "english": "Hallucination",
          "chinese": "幻觉（AI编造信息）",
          "pronunciation": "/həˌluːsɪˈneɪʃən/",
          "example": "The model produces hallucinations",
          "category": "concepts"
        },
        {
          "id": "ai015",
          "english": "Agent",
          "chinese": "智能体",
          "pronunciation": "/ˈeɪdʒənt/",
          "example": "Build an AI agent",
          "category": "concepts"
        },
        {
          "id": "ai016",
          "english": "Neural Network",
          "chinese": "神经网络",
          "pronunciation": "/ˈnjʊərəl ˈnɛtwɜːrk/",
          "example": "Train a deep neural network",
          "category": "concepts"
        },
        {
          "id": "ai017",
          "english": "Supervised Learning",
          "chinese": "监督学习",
          "pronunciation": "/ˈsuːpəvaɪzd ˈlɜːrnɪŋ/",
          "example": "Use supervised learning with labeled data",
          "category": "training"
        },
        {
          "id": "ai018",
          "english": "Unsupervised Learning",
          "chinese": "无监督学习",
          "pronunciation": "/ʌnˈsuːpəvaɪzd ˈlɜːrnɪŋ/",
          "example": "Cluster data with unsupervised learning",
          "category": "training"
        },
        {
          "id": "ai019",
          "english": "Reinforcement Learning",
          "chinese": "强化学习",
          "pronunciation": "/ˌriːɪnˈfɔːrsmənt ˈlɜːrnɪŋ/",
          "example": "Game AI uses reinforcement learning",
          "category": "training"
        },
        {
          "id": "ai020",
          "english": "Transfer Learning",
          "chinese": "迁移学习",
          "pronunciation": "/ˈtrænsfɜːr ˈlɜːrnɪŋ/",
          "example": "Apply transfer learning to new domain",
          "category": "training"
        },
        {
          "id": "ai021",
          "english": "Epoch",
          "chinese": "轮次/周期",
          "pronunciation": "/ˈɛpɒk/",
          "example": "Train for 100 epochs",
          "category": "training"
        },
        {
          "id": "ai022",
          "english": "Batch",
          "chinese": "批次",
          "pronunciation": "/bætʃ/",
          "example": "Process data in batches of 32",
          "category": "training"
        },
        {
          "id": "ai023",
          "english": "Learning Rate",
          "chinese": "学习率",
          "pronunciation": "/ˈlɜːrnɪŋ reɪt/",
          "example": "Adjust the learning rate",
          "category": "training"
        },
        {
          "id": "ai024",
          "english": "Loss Function",
          "chinese": "损失函数",
          "pronunciation": "/lɒs ˈfʌŋkʃən/",
          "example": "Minimize the loss function",
          "category": "training"
        },
        {
          "id": "ai025",
          "english": "Gradient Descent",
          "chinese": "梯度下降",
          "pronunciation": "/ˈɡreɪdiənt dɪˈsɛnt/",
          "example": "Use stochastic gradient descent",
          "category": "training"
        },
        {
          "id": "ai026",
          "english": "Backpropagation",
          "chinese": "反向传播",
          "pronunciation": "/ˌbækprɒpəˈɡeɪʃən/",
          "example": "Compute gradients via backpropagation",
          "category": "training"
        },
        {
          "id": "ai027",
          "english": "Activation Function",
          "chinese": "激活函数",
          "pronunciation": "/ˌæktɪˈveɪʃən ˈfʌŋkʃən/",
          "example": "Use ReLU activation function",
          "category": "concepts"
        },
        {
          "id": "ai028",
          "english": "CNN",
          "chinese": "卷积神经网络",
          "pronunciation": "/siː ɛn ɛn/",
          "example": "CNN for image recognition",
          "category": "architecture"
        },
        {
          "id": "ai029",
          "english": "RNN",
          "chinese": "循环神经网络",
          "pronunciation": "/ɑːr ɛn ɛn/",
          "example": "RNN for sequence data",
          "category": "architecture"
        },
        {
          "id": "ai030",
          "english": "LSTM",
          "chinese": "长短期记忆网络",
          "pronunciation": "/ɛl ɛs tiː ɛm/",
          "example": "LSTM for long sequences",
          "category": "architecture"
        },
        {
          "id": "ai031",
          "english": "Transformer",
          "chinese": "Transformer架构",
          "pronunciation": "/trænsˈfɔːrmər/",
          "example": "BERT uses Transformer architecture",
          "category": "architecture"
        },
        {
          "id": "ai032",
          "english": "Attention",
          "chinese": "注意力机制",
          "pronunciation": "/əˈtɛnʃən/",
          "example": "Self-attention mechanism",
          "category": "architecture"
        },
        {
          "id": "ai033",
          "english": "BERT",
          "chinese": "BERT模型",
          "pronunciation": "/bɜːrt/",
          "example": "Fine-tune BERT for classification",
          "category": "models"
        },
        {
          "id": "ai034",
          "english": "GPT",
          "chinese": "生成式预训练模型",
          "pronunciation": "/dʒiː piː tiː/",
          "example": "GPT-4 is a powerful LLM",
          "category": "models"
        },
        {
          "id": "ai035",
          "english": "Classification",
          "chinese": "分类",
          "pronunciation": "/ˌklæsɪfɪˈkeɪʃən/",
          "example": "Image classification task",
          "category": "tasks"
        },
        {
          "id": "ai036",
          "english": "Regression",
          "chinese": "回归",
          "pronunciation": "/rɪˈɡrɛʃən/",
          "example": "Linear regression for prediction",
          "category": "tasks"
        },
        {
          "id": "ai037",
          "english": "Clustering",
          "chinese": "聚类",
          "pronunciation": "/ˈklʌstərɪŋ/",
          "example": "K-means clustering algorithm",
          "category": "tasks"
        },
        {
          "id": "ai038",
          "english": "Dimensionality Reduction",
          "chinese": "降维",
          "pronunciation": "/daɪˌmɛnʃəˈnælɪti rɪˈdʌkʃən/",
          "example": "PCA for dimensionality reduction",
          "category": "techniques"
        },
        {
          "id": "ai039",
          "english": "Cross-validation",
          "chinese": "交叉验证",
          "pronunciation": "/krɒs ˌvælɪˈdeɪʃən/",
          "example": "Use 5-fold cross-validation",
          "category": "evaluation"
        },
        {
          "id": "ai040",
          "english": "Precision",
          "chinese": "精确率",
          "pronunciation": "/prɪˈsɪʒən/",
          "example": "High precision means few false positives",
          "category": "evaluation"
        },
        {
          "id": "ai041",
          "english": "Recall",
          "chinese": "召回率",
          "pronunciation": "/rɪˈkɔːl/",
          "example": "High recall means few false negatives",
          "category": "evaluation"
        },
        {
          "id": "ai042",
          "english": "F1 Score",
          "chinese": "F1分数",
          "pronunciation": "/ɛf wʌn skɔːr/",
          "example": "F1 score balances precision and recall",
          "category": "evaluation"
        },
        {
          "id": "ai043",
          "english": "Confusion Matrix",
          "chinese": "混淆矩阵",
          "pronunciation": "/kənˈfjuːʒən ˈmeɪtrɪks/",
          "example": "Analyze results with confusion matrix",
          "category": "evaluation"
        },
        {
          "id": "ai044",
          "english": "ROC Curve",
          "chinese": "ROC曲线",
          "pronunciation": "/ɑːr oʊ siː kɜːrv/",
          "example": "Plot the ROC curve",
          "category": "evaluation"
        },
        {
          "id": "ai045",
          "english": "AUC",
          "chinese": "曲线下面积",
          "pronunciation": "/eɪ juː siː/",
          "example": "AUC measures model performance",
          "category": "evaluation"
        },
        {
          "id": "ai046",
          "english": "Bias",
          "chinese": "偏差/偏见",
          "pronunciation": "/ˈbaɪəs/",
          "example": "Check for bias in training data",
          "category": "ethics"
        },
        {
          "id": "ai047",
          "english": "Fairness",
          "chinese": "公平性",
          "pronunciation": "/ˈfɛərnəs/",
          "example": "Ensure AI fairness across groups",
          "category": "ethics"
        },
        {
          "id": "ai048",
          "english": "Explainability",
          "chinese": "可解释性",
          "pronunciation": "/ɪkˌspleɪnəˈbɪlɪti/",
          "example": "Improve model explainability",
          "category": "ethics"
        },
        {
          "id": "ai049",
          "english": "MLOps",
          "chinese": "机器学习运维",
          "pronunciation": "/ɛm ɛl ɒps/",
          "example": "Implement MLOps pipeline",
          "category": "operations"
        },
        {
          "id": "ai050",
          "english": "Data Augmentation",
          "chinese": "数据增强",
          "pronunciation": "/ˈdeɪtə ˌɔːɡmɛnˈteɪʃən/",
          "example": "Use data augmentation for images",
          "category": "techniques"
        }
      ]
    },
    {
      "id": "agile-dev",
      "name": "Agile Development",
      "nameCN": "敏捷开发",
      "description": "Agile and project management terms",
      "items": [
        {
          "id": "ag001",
          "english": "Sprint",
          "chinese": "冲刺/迭代",
          "pronunciation": "/sprɪnt/",
          "example": "This sprint lasts two weeks",
          "category": "scrum"
        },
        {
          "id": "ag002",
          "english": "Scrum",
          "chinese": "敏捷开发框架",
          "pronunciation": "/skrʌm/",
          "example": "We use Scrum methodology",
          "category": "scrum"
        },
        {
          "id": "ag003",
          "english": "Backlog",
          "chinese": "待办列表",
          "pronunciation": "/ˈbæklɒɡ/",
          "example": "Add tasks to the backlog",
          "category": "scrum"
        },
        {
          "id": "ag004",
          "english": "Stand-up",
          "chinese": "站会",
          "pronunciation": "/ˈstænd ʌp/",
          "example": "Daily stand-up at 9am",
          "category": "scrum"
        },
        {
          "id": "ag005",
          "english": "User Story",
          "chinese": "用户故事",
          "pronunciation": "/ˈjuːzər ˈstɔːri/",
          "example": "Write user stories for features",
          "category": "scrum"
        },
        {
          "id": "ag006",
          "english": "Epic",
          "chinese": "史诗（大型需求）",
          "pronunciation": "/ˈɛpɪk/",
          "example": "This epic includes multiple stories",
          "category": "scrum"
        },
        {
          "id": "ag007",
          "english": "Retrospective",
          "chinese": "回顾会议",
          "pronunciation": "/ˌrɛtrəˈspɛktɪv/",
          "example": "Sprint retrospective meeting",
          "category": "scrum"
        },
        {
          "id": "ag008",
          "english": "Kanban",
          "chinese": "看板",
          "pronunciation": "/ˈkɑːnbɑːn/",
          "example": "Use Kanban board for visualization",
          "category": "methodology"
        },
        {
          "id": "ag009",
          "english": "MVP (Minimum Viable Product)",
          "chinese": "最小可行产品",
          "pronunciation": "/ˌɛm viː ˈpiː/",
          "example": "Build the MVP first",
          "category": "methodology"
        },
        {
          "id": "ag010",
          "english": "Tech Debt",
          "chinese": "技术债务",
          "pronunciation": "/tɛk dɛt/",
          "example": "We need to address tech debt",
          "category": "planning"
        },
        {
          "id": "ag011",
          "english": "Refactor",
          "chinese": "重构",
          "pronunciation": "/riːˈfæktər/",
          "example": "Refactor the legacy code",
          "category": "development"
        },
        {
          "id": "ag012",
          "english": "Spike",
          "chinese": "技术预研",
          "pronunciation": "/spaɪk/",
          "example": "Create a spike to investigate",
          "category": "planning"
        },
        {
          "id": "ag013",
          "english": "CI/CD",
          "chinese": "持续集成/持续部署",
          "pronunciation": "/siː aɪ siː diː/",
          "example": "Set up CI/CD pipeline",
          "category": "devops"
        },
        {
          "id": "ag014",
          "english": "Hotfix",
          "chinese": "热修复",
          "pronunciation": "/ˈhɒtfɪks/",
          "example": "Deploy a hotfix immediately",
          "category": "devops"
        },
        {
          "id": "ag015",
          "english": "Rollback",
          "chinese": "回滚",
          "pronunciation": "/ˈroʊlbæk/",
          "example": "Execute rollback plan",
          "category": "devops"
        },
        {
          "id": "ag016",
          "english": "Sprint Planning",
          "chinese": "冲刺计划会议",
          "pronunciation": "/sprɪnt ˈplænɪŋ/",
          "example": "Attend sprint planning meeting",
          "category": "scrum"
        },
        {
          "id": "ag017",
          "english": "Sprint Review",
          "chinese": "冲刺评审",
          "pronunciation": "/sprɪnt rɪˈvjuː/",
          "example": "Demo features in sprint review",
          "category": "scrum"
        },
        {
          "id": "ag018",
          "english": "Burndown Chart",
          "chinese": "燃尽图",
          "pronunciation": "/ˈbɜːrndaʊn tʃɑːrt/",
          "example": "Check the burndown chart daily",
          "category": "scrum"
        },
        {
          "id": "ag019",
          "english": "Velocity",
          "chinese": "速率/速度",
          "pronunciation": "/vəˈlɒsɪti/",
          "example": "Team velocity is 40 points per sprint",
          "category": "scrum"
        },
        {
          "id": "ag020",
          "english": "Story Point",
          "chinese": "故事点",
          "pronunciation": "/ˈstɔːri pɔɪnt/",
          "example": "Estimate tasks in story points",
          "category": "scrum"
        },
        {
          "id": "ag021",
          "english": "Definition of Done",
          "chinese": "完成定义",
          "pronunciation": "/ˌdɛfɪˈnɪʃən əv dʌn/",
          "example": "Meet the definition of done",
          "category": "scrum"
        },
        {
          "id": "ag022",
          "english": "Definition of Ready",
          "chinese": "准备就绪定义",
          "pronunciation": "/ˌdɛfɪˈnɪʃən əv ˈrɛdi/",
          "example": "Story meets definition of ready",
          "category": "scrum"
        },
        {
          "id": "ag023",
          "english": "Product Owner",
          "chinese": "产品负责人",
          "pronunciation": "/ˈprɒdʌkt ˈoʊnər/",
          "example": "Product Owner prioritizes backlog",
          "category": "roles"
        },
        {
          "id": "ag024",
          "english": "Scrum Master",
          "chinese": "Scrum主管",
          "pronunciation": "/skrʌm ˈmɑːstər/",
          "example": "Scrum Master facilitates ceremonies",
          "category": "roles"
        },
        {
          "id": "ag025",
          "english": "Stakeholder",
          "chinese": "利益相关者",
          "pronunciation": "/ˈsteɪkhoʊldər/",
          "example": "Gather feedback from stakeholders",
          "category": "roles"
        },
        {
          "id": "ag026",
          "english": "Acceptance Criteria",
          "chinese": "验收标准",
          "pronunciation": "/əkˈsɛptəns kraɪˈtɪəriə/",
          "example": "Define clear acceptance criteria",
          "category": "scrum"
        },
        {
          "id": "ag027",
          "english": "Release Planning",
          "chinese": "发布计划",
          "pronunciation": "/rɪˈliːs ˈplænɪŋ/",
          "example": "Create release planning roadmap",
          "category": "planning"
        },
        {
          "id": "ag028",
          "english": "Roadmap",
          "chinese": "路线图",
          "pronunciation": "/ˈroʊdmæp/",
          "example": "Update the product roadmap",
          "category": "planning"
        },
        {
          "id": "ag029",
          "english": "Timeboxing",
          "chinese": "时间盒",
          "pronunciation": "/ˈtaɪmbɒksɪŋ/",
          "example": "Use timeboxing for meetings",
          "category": "methodology"
        },
        {
          "id": "ag030",
          "english": "Pair Programming",
          "chinese": "结对编程",
          "pronunciation": "/pɛər ˈproʊɡræmɪŋ/",
          "example": "Practice pair programming",
          "category": "methodology"
        },
        {
          "id": "ag031",
          "english": "Mob Programming",
          "chinese": "集体编程",
          "pronunciation": "/mɒb ˈproʊɡræmɪŋ/",
          "example": "Team does mob programming",
          "category": "methodology"
        },
        {
          "id": "ag032",
          "english": "Test Driven Development",
          "chinese": "测试驱动开发",
          "pronunciation": "/tɛst ˈdrɪvən dɪˈvɛləpmənt/",
          "example": "Follow TDD: write tests first",
          "category": "methodology"
        },
        {
          "id": "ag033",
          "english": "Behavior Driven Development",
          "chinese": "行为驱动开发",
          "pronunciation": "/bɪˈheɪvjər ˈdrɪvən dɪˈvɛləpmənt/",
          "example": "Use BDD for clearer requirements",
          "category": "methodology"
        },
        {
          "id": "ag034",
          "english": "Domain Driven Design",
          "chinese": "领域驱动设计",
          "pronunciation": "/doʊˈmeɪn ˈdrɪvən dɪˈzaɪn/",
          "example": "Apply domain driven design",
          "category": "methodology"
        },
        {
          "id": "ag035",
          "english": "Continuous Integration",
          "chinese": "持续集成",
          "pronunciation": "/kənˈtɪnjuəs ˌɪntɪˈɡreɪʃən/",
          "example": "Set up continuous integration",
          "category": "devops"
        },
        {
          "id": "ag036",
          "english": "Continuous Delivery",
          "chinese": "持续交付",
          "pronunciation": "/kənˈtɪnjuəs dɪˈlɪvəri/",
          "example": "Achieve continuous delivery",
          "category": "devops"
        },
        {
          "id": "ag037",
          "english": "Continuous Deployment",
          "chinese": "持续部署",
          "pronunciation": "/kənˈtɪnjuəs dɪˈplɔɪmənt/",
          "example": "Enable continuous deployment",
          "category": "devops"
        },
        {
          "id": "ag038",
          "english": "Infrastructure as Code",
          "chinese": "基础设施即代码",
          "pronunciation": "/ˈɪnfrəˌstrʌktʃər æz koʊd/",
          "example": "Manage infrastructure as code",
          "category": "devops"
        },
        {
          "id": "ag039",
          "english": "GitOps",
          "chinese": "Git运维",
          "pronunciation": "/ɡɪt ɒps/",
          "example": "Implement GitOps workflow",
          "category": "devops"
        },
        {
          "id": "ag040",
          "english": "Feature Branch",
          "chinese": "功能分支",
          "pronunciation": "/ˈfiːtʃər bræntʃ/",
          "example": "Create a feature branch",
          "category": "version-control"
        },
        {
          "id": "ag041",
          "english": "Trunk Based Development",
          "chinese": "主干开发",
          "pronunciation": "/trʌŋk beɪst dɪˈvɛləpmənt/",
          "example": "Practice trunk based development",
          "category": "version-control"
        },
        {
          "id": "ag042",
          "english": "Shift Left",
          "chinese": "左移",
          "pronunciation": "/ʃɪft lɛft/",
          "example": "Shift left on testing",
          "category": "methodology"
        },
        {
          "id": "ag043",
          "english": "Fail Fast",
          "chinese": "快速失败",
          "pronunciation": "/feɪl fɑːst/",
          "example": "Fail fast to learn quickly",
          "category": "methodology"
        },
        {
          "id": "ag044",
          "english": "Psychological Safety",
          "chinese": "心理安全",
          "pronunciation": "/ˌsaɪkəˈlɒdʒɪkl ˈseɪfti/",
          "example": "Build psychological safety in team",
          "category": "culture"
        },
        {
          "id": "ag045",
          "english": "Collective Ownership",
          "chinese": "集体所有权",
          "pronunciation": "/kəˈlɛktɪv ˈoʊnərʃɪp/",
          "example": "Practice collective code ownership",
          "category": "culture"
        },
        {
          "id": "ag046",
          "english": "Sustainable Pace",
          "chinese": "可持续节奏",
          "pronunciation": "/səˈsteɪnəbleɪ peɪs/",
          "example": "Maintain sustainable pace",
          "category": "culture"
        },
        {
          "id": "ag047",
          "english": "Information Radiator",
          "chinese": "信息发射源",
          "pronunciation": "/ˌɪnfərˈmeɪʃən ˈreɪdieɪtər/",
          "example": "Use dashboard as information radiator",
          "category": "scrum"
        },
        {
          "id": "ag048",
          "english": "Impediment",
          "chinese": "障碍",
          "pronunciation": "/ɪmˈpɛdɪmənt/",
          "example": "Remove impediments for the team",
          "category": "scrum"
        },
        {
          "id": "ag049",
          "english": "Story Mapping",
          "chinese": "故事地图",
          "pronunciation": "/ˈstɔːri ˈmæpɪŋ/",
          "example": "Create user story mapping",
          "category": "planning"
        },
        {
          "id": "ag050",
          "english": "Walking Skeleton",
          "chinese": "行走骨架",
          "pronunciation": "/ˈwɔːkɪŋ ˈskɛlɪtn/",
          "example": "Build a walking skeleton first",
          "category": "planning"
        }
      ]
    }
  ]
};

if (typeof module !== 'undefined' && module.exports) {
  module.exports = computerEnglishData;
}
