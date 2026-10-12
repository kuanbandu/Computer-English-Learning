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
    },
    {
      "id": "cloud-computing",
      "name": "Cloud Computing",
      "nameCN": "云计算",
      "description": "Cloud infrastructure, scaling and deployment vocabulary",
      "items": [
        {
          "id": "cloud001",
          "english": "region",
          "chinese": "区域（云服务的地理部署单元）",
          "pronunciation": "/ˈriːdʒən/",
          "example": "Deploy the cluster in the us-east-1 region.",
          "category": "infrastructure"
        },
        {
          "id": "cloud002",
          "english": "availability zone (AZ)",
          "chinese": "可用区",
          "pronunciation": "/əˌveɪləˈbɪləti zoʊn/",
          "example": "Spread replicas across three availability zones.",
          "category": "infrastructure"
        },
        {
          "id": "cloud003",
          "english": "auto scaling",
          "chinese": "自动扩缩容",
          "pronunciation": "/ˈɔːtoʊ ˈskeɪlɪŋ/",
          "example": "Configure auto scaling based on CPU utilization.",
          "category": "scaling"
        },
        {
          "id": "cloud004",
          "english": "load balancer",
          "chinese": "负载均衡器",
          "pronunciation": "/loʊd ˈbælənsər/",
          "example": "The load balancer distributes traffic to healthy instances.",
          "category": "networking"
        },
        {
          "id": "cloud005",
          "english": "cold start",
          "chinese": "冷启动（首次调用的延迟）",
          "pronunciation": "/koʊld stɑːrt/",
          "example": "Serverless functions suffer from cold start latency.",
          "category": "performance"
        },
        {
          "id": "cloud006",
          "english": "serverless",
          "chinese": "无服务器（架构）",
          "pronunciation": "/ˈsɜːrvərləs/",
          "example": "We moved cron jobs to a serverless scheduler.",
          "category": "architecture"
        },
        {
          "id": "cloud007",
          "english": "bucket",
          "chinese": "存储桶",
          "pronunciation": "/ˈbʌkɪt/",
          "example": "Upload the backup to the S3 bucket.",
          "category": "storage"
        },
        {
          "id": "cloud008",
          "english": "object storage",
          "chinese": "对象存储",
          "pronunciation": "/ˈɑːbdʒɪkt ˈstɔːrɪdʒ/",
          "example": "Static assets are served from object storage.",
          "category": "storage"
        },
        {
          "id": "cloud009",
          "english": "IAM role",
          "chinese": "IAM 角色（身份与访问管理）",
          "pronunciation": "/ˈaɪæm roʊl/",
          "example": "The instance assumes an IAM role to access the database.",
          "category": "security"
        },
        {
          "id": "cloud010",
          "english": "virtual private cloud (VPC)",
          "chinese": "虚拟私有云",
          "pronunciation": "/ˈvɜːrtʃuəl ˈpraɪvət klaʊd/",
          "example": "Deploy the database inside a private subnet of the VPC.",
          "category": "networking"
        },
        {
          "id": "cloud011",
          "english": "subnet",
          "chinese": "子网",
          "pronunciation": "/ˈsʌbnet/",
          "example": "Public subnets hold the load balancers; private subnets hold the app.",
          "category": "networking"
        },
        {
          "id": "cloud012",
          "english": "elastic IP",
          "chinese": "弹性 IP",
          "pronunciation": "/ɪˈlæstɪk ˌaɪˈpiː/",
          "example": "Reserve an elastic IP for the NAT gateway.",
          "category": "networking"
        },
        {
          "id": "cloud013",
          "english": "snapshot",
          "chinese": "快照",
          "pronunciation": "/ˈsnæpʃɑːt/",
          "example": "Restore the volume from last night's snapshot.",
          "category": "backup"
        },
        {
          "id": "cloud014",
          "english": "on-demand instance",
          "chinese": "按需实例",
          "pronunciation": "/ɑːn dɪˈmænd ˈɪnstəns/",
          "example": "On-demand instances cost more but need no commitment.",
          "category": "billing"
        },
        {
          "id": "cloud015",
          "english": "spot instance",
          "chinese": "竞价实例",
          "pronunciation": "/spɑːt ˈɪnstəns/",
          "example": "Batch jobs run on cheap spot instances.",
          "category": "billing"
        },
        {
          "id": "cloud016",
          "english": "reserved instance",
          "chinese": "预留实例",
          "pronunciation": "/rɪˈzɜːrvd ˈɪnstəns/",
          "example": "We saved 40% by switching to reserved instances.",
          "category": "billing"
        },
        {
          "id": "cloud017",
          "english": "multi-tenant",
          "chinese": "多租户",
          "pronunciation": "/ˈmʌlti ˈtenənt/",
          "example": "A multi-tenant database isolates customer data by tenant id.",
          "category": "architecture"
        },
        {
          "id": "cloud018",
          "english": "control plane",
          "chinese": "控制平面",
          "pronunciation": "/kənˈtroʊl pleɪn/",
          "example": "The control plane schedules workloads onto worker nodes.",
          "category": "orchestration"
        },
        {
          "id": "cloud019",
          "english": "data plane",
          "chinese": "数据平面",
          "pronunciation": "/ˈdeɪtə pleɪn/",
          "example": "The data plane forwards packets at line rate.",
          "category": "orchestration"
        },
        {
          "id": "cloud020",
          "english": "managed service",
          "chinese": "托管服务",
          "pronunciation": "/ˈmænɪdʒd ˈsɜːrvɪs/",
          "example": "Prefer managed services so you don't patch the OS yourself.",
          "category": "architecture"
        },
        {
          "id": "cloud021",
          "english": "vertical scaling (scale up)",
          "chinese": "垂直扩展（纵向扩容）",
          "pronunciation": "/ˈvɜːrtɪkl ˈskeɪlɪŋ/",
          "example": "Vertical scaling just means buying a bigger machine.",
          "category": "scaling"
        },
        {
          "id": "cloud022",
          "english": "horizontal scaling (scale out)",
          "chinese": "水平扩展（横向扩容）",
          "pronunciation": "/ˌhɔːrɪˈzɑːntl ˈskeɪlɪŋ/",
          "example": "Horizontal scaling adds more instances behind the balancer.",
          "category": "scaling"
        },
        {
          "id": "cloud023",
          "english": "failover",
          "chinese": "故障转移",
          "pronunciation": "/ˈfeɪloʊvər/",
          "example": "Automatic failover promotes the standby database.",
          "category": "reliability"
        },
        {
          "id": "cloud024",
          "english": "quota",
          "chinese": "配额",
          "pronunciation": "/ˈkwoʊtə/",
          "example": "We hit the vCPU quota in this region.",
          "category": "limits"
        },
        {
          "id": "cloud025",
          "english": "provision",
          "chinese": "开通／配置（资源）",
          "pronunciation": "/prəˈvɪʒn/",
          "example": "Terraform provisions the whole stack in one apply.",
          "category": "deployment"
        }
      ]
    },
    {
      "id": "cicd-devops",
      "name": "CI/CD & DevOps",
      "nameCN": "持续集成与运维",
      "description": "Continuous integration, delivery and operations vocabulary",
      "items": [
        {
          "id": "ci001",
          "english": "pipeline",
          "chinese": "流水线",
          "pronunciation": "/ˈpaɪplaɪn/",
          "example": "The build pipeline failed at the test stage.",
          "category": "general"
        },
        {
          "id": "ci002",
          "english": "stage",
          "chinese": "阶段（流水线中的一环）",
          "pronunciation": "/steɪdʒ/",
          "example": "Add a lint stage before running the tests.",
          "category": "pipeline"
        },
        {
          "id": "ci003",
          "english": "artifact",
          "chinese": "构建产物",
          "pronunciation": "/ˈɑːrtɪfækt/",
          "example": "Upload the build artifact to the registry.",
          "category": "build"
        },
        {
          "id": "ci004",
          "english": "rollback",
          "chinese": "回滚",
          "pronunciation": "/ˈroʊlbæk/",
          "example": "The deploy was bad, so we triggered a rollback.",
          "category": "deployment"
        },
        {
          "id": "ci005",
          "english": "blue-green deployment",
          "chinese": "蓝绿部署",
          "pronunciation": "/bluː griːn dɪˈplɔɪmənt/",
          "example": "Blue-green deployment swaps traffic between two identical environments.",
          "category": "deployment"
        },
        {
          "id": "ci006",
          "english": "canary release",
          "chinese": "金丝雀发布",
          "pronunciation": "/kəˈneri rɪˈliːs/",
          "example": "Route 5% of traffic to the canary release first.",
          "category": "deployment"
        },
        {
          "id": "ci007",
          "english": "feature flag",
          "chinese": "功能开关",
          "pronunciation": "/ˈfiːtʃər flæɡ/",
          "example": "Hide the new UI behind a feature flag.",
          "category": "release"
        },
        {
          "id": "ci008",
          "english": "hotfix",
          "chinese": "紧急修复",
          "pronunciation": "/ˈhɑːtfɪks/",
          "example": "A hotfix was shipped outside the normal release train.",
          "category": "release"
        },
        {
          "id": "ci009",
          "english": "release candidate (RC)",
          "chinese": "发布候选版本",
          "pronunciation": "/rɪˈliːs ˈkændɪdət/",
          "example": "RC 2 fixes the last two blocker bugs.",
          "category": "release"
        },
        {
          "id": "ci010",
          "english": "version tag",
          "chinese": "版本标签",
          "pronunciation": "/ˈvɜːrʒən tæɡ/",
          "example": "Tag the release as v2.1.0 before building.",
          "category": "release"
        },
        {
          "id": "ci011",
          "english": "changelog",
          "chinese": "变更日志",
          "pronunciation": "/ˈtʃeɪndʒlɔːɡ/",
          "example": "Update the changelog with this fix.",
          "category": "documentation"
        },
        {
          "id": "ci012",
          "english": "infrastructure as code (IaC)",
          "chinese": "基础设施即代码",
          "pronunciation": "/ˈɪnfrəstrʌktʃər æz koʊd/",
          "example": "All servers are defined as code with Terraform.",
          "category": "infrastructure"
        },
        {
          "id": "ci013",
          "english": "configuration drift",
          "chinese": "配置漂移",
          "pronunciation": "/kənˌfɪɡjəˈreɪʃən drɪft/",
          "example": "Manual SSH edits cause configuration drift.",
          "category": "infrastructure"
        },
        {
          "id": "ci014",
          "english": "runbook",
          "chinese": "运维手册",
          "pronunciation": "/ˈrʌnbʊk/",
          "example": "Follow the runbook when the disk fills up.",
          "category": "operations"
        },
        {
          "id": "ci015",
          "english": "on-call",
          "chinese": "值班（待命）",
          "pronunciation": "/ɒn kɔːl/",
          "example": "I'm on-call this weekend, wish me luck.",
          "category": "operations"
        },
        {
          "id": "ci016",
          "english": "postmortem",
          "chinese": "复盘（事后分析）",
          "pronunciation": "/ˈpoʊstmɔːrtəm/",
          "example": "The incident postmortem found a missing health check.",
          "category": "operations"
        },
        {
          "id": "ci017",
          "english": "build matrix",
          "chinese": "构建矩阵",
          "pronunciation": "/bɪld ˈmeɪtrɪks/",
          "example": "The build matrix tests Node 18, 20 and 22.",
          "category": "build"
        },
        {
          "id": "ci018",
          "english": "flaky test",
          "chinese": "不稳定测试（偶发失败）",
          "pronunciation": "/ˈfleɪki test/",
          "example": "Quarantine the flaky test until it's fixed.",
          "category": "testing"
        },
        {
          "id": "ci019",
          "english": "smoke test",
          "chinese": "冒烟测试",
          "pronunciation": "/smoʊk test/",
          "example": "Run the smoke tests right after deployment.",
          "category": "testing"
        },
        {
          "id": "ci020",
          "english": "golden master",
          "chinese": "基准版本（黄金母版）",
          "pronunciation": "/ˈɡoʊldən ˈmæstər/",
          "example": "Compare the output against the golden master.",
          "category": "testing"
        },
        {
          "id": "ci021",
          "english": "deployment freeze",
          "chinese": "部署冻结",
          "pronunciation": "/dɪˈplɔɪmənt friːz/",
          "example": "No releases during the deployment freeze.",
          "category": "release"
        },
        {
          "id": "ci022",
          "english": "job",
          "chinese": "作业（CI 中的任务）",
          "pronunciation": "/dʒɑːb/",
          "example": "The lint job runs in under a minute.",
          "category": "pipeline"
        },
        {
          "id": "ci023",
          "english": "runner",
          "chinese": "运行器（执行 CI 的机器）",
          "pronunciation": "/ˈrʌnər/",
          "example": "Self-hosted runners execute jobs on our own hardware.",
          "category": "pipeline"
        },
        {
          "id": "ci024",
          "english": "environment",
          "chinese": "环境（dev/staging/prod）",
          "pronunciation": "/ɪnˈvaɪrənmənt/",
          "example": "The bug only reproduces in the staging environment.",
          "category": "general"
        },
        {
          "id": "ci025",
          "english": "mean time to recovery (MTTR)",
          "chinese": "平均恢复时间",
          "pronunciation": "/miːn taɪm tuː rɪˈkʌvəri/",
          "example": "MTTR dropped after we added auto-restart.",
          "category": "metrics"
        }
      ]
    },
    {
      "id": "security",
      "name": "Security",
      "nameCN": "信息安全",
      "description": "Application and infrastructure security vocabulary",
      "items": [
        {
          "id": "sec001",
          "english": "authentication",
          "chinese": "身份认证",
          "pronunciation": "/ɔːˌθentɪˈkeɪʃən/",
          "example": "Authentication is handled by the OAuth2 provider.",
          "category": "identity"
        },
        {
          "id": "sec002",
          "english": "authorization",
          "chinese": "授权",
          "pronunciation": "/ˌɔːθərəˈzeɪʃən/",
          "example": "Authentication proves who you are; authorization defines what you may do.",
          "category": "identity"
        },
        {
          "id": "sec003",
          "english": "encryption",
          "chinese": "加密",
          "pronunciation": "/ɪnˈkrɪpʃən/",
          "example": "Enable encryption at rest for the database.",
          "category": "crypto"
        },
        {
          "id": "sec004",
          "english": "hash",
          "chinese": "哈希（散列）",
          "pronunciation": "/hæʃ/",
          "example": "Store the hash of the file to verify integrity.",
          "category": "crypto"
        },
        {
          "id": "sec005",
          "english": "salt",
          "chinese": "盐（随机附加值）",
          "pronunciation": "/sɔːlt/",
          "example": "Each password hash uses a unique random salt.",
          "category": "crypto"
        },
        {
          "id": "sec006",
          "english": "TLS",
          "chinese": "传输层安全协议",
          "pronunciation": "/ˌtiː el ˈes/",
          "example": "All traffic must go over TLS 1.3.",
          "category": "crypto"
        },
        {
          "id": "sec007",
          "english": "certificate",
          "chinese": "证书",
          "pronunciation": "/sərˈtɪfɪkət/",
          "example": "The TLS certificate expires next month.",
          "category": "crypto"
        },
        {
          "id": "sec008",
          "english": "vulnerability",
          "chinese": "漏洞",
          "pronunciation": "/ˌvʌlnərəˈbɪləti/",
          "example": "The scan found one critical vulnerability.",
          "category": "risk"
        },
        {
          "id": "sec009",
          "english": "exploit",
          "chinese": "利用（漏洞的攻击）",
          "pronunciation": "/ˈeksplɔɪt/",
          "example": "The exploit chains two weaknesses together.",
          "category": "attack"
        },
        {
          "id": "sec010",
          "english": "patch",
          "chinese": "补丁",
          "pronunciation": "/pætʃ/",
          "example": "Patch the server before Friday's disclosure.",
          "category": "remediation"
        },
        {
          "id": "sec011",
          "english": "penetration testing",
          "chinese": "渗透测试",
          "pronunciation": "/ˌpenɪˈtreɪʃən ˈtestɪŋ/",
          "example": "An outside firm runs penetration testing yearly.",
          "category": "testing"
        },
        {
          "id": "sec012",
          "english": "injection",
          "chinese": "注入（攻击）",
          "pronunciation": "/ɪnˈdʒekʃən/",
          "example": "SQL injection is prevented by parameterized queries.",
          "category": "attack"
        },
        {
          "id": "sec013",
          "english": "cross-site scripting (XSS)",
          "chinese": "跨站脚本攻击",
          "pronunciation": "/krɔːs saɪt ˈskrɪptɪŋ/",
          "example": "Escape user input to prevent cross-site scripting.",
          "category": "attack"
        },
        {
          "id": "sec014",
          "english": "cross-site request forgery (CSRF)",
          "chinese": "跨站请求伪造",
          "pronunciation": "/krɔːs saɪt rɪˈkwest ˈfɔːrdʒəri/",
          "example": "The form posts with a CSRF token.",
          "category": "attack"
        },
        {
          "id": "sec015",
          "english": "least privilege",
          "chinese": "最小权限原则",
          "pronunciation": "/liːst ˈprɪvəlɪdʒ/",
          "example": "Grant the service account least privilege.",
          "category": "principle"
        },
        {
          "id": "sec016",
          "english": "audit log",
          "chinese": "审计日志",
          "pronunciation": "/ˈɔːdɪt lɔːɡ/",
          "example": "Every admin action lands in the audit log.",
          "category": "operations"
        },
        {
          "id": "sec017",
          "english": "incident response",
          "chinese": "应急响应",
          "pronunciation": "/ˈɪnsɪdənt rɪˈspɑːns/",
          "example": "The incident response plan was activated at 2 a.m.",
          "category": "operations"
        },
        {
          "id": "sec018",
          "english": "threat model",
          "chinese": "威胁建模",
          "pronunciation": "/θret ˈmɑːdl/",
          "example": "Update the threat model for the new payment flow.",
          "category": "risk"
        },
        {
          "id": "sec019",
          "english": "zero trust",
          "chinese": "零信任（架构）",
          "pronunciation": "/ˈzɪroʊ trʌst/",
          "example": "Zero trust means never trusting the internal network.",
          "category": "architecture"
        },
        {
          "id": "sec020",
          "english": "brute force attack",
          "chinese": "暴力破解",
          "pronunciation": "/bruːt fɔːrs əˈtæk/",
          "example": "Rate limiting blocks the brute force attack.",
          "category": "attack"
        },
        {
          "id": "sec021",
          "english": "man-in-the-middle attack",
          "chinese": "中间人攻击",
          "pronunciation": "/mæn ɪn ðə ˈmɪdl əˈtæk/",
          "example": "Certificate pinning defeats man-in-the-middle attacks.",
          "category": "attack"
        },
        {
          "id": "sec022",
          "english": "secrets management",
          "chinese": "密钥管理",
          "pronunciation": "/ˈsiːkrəts ˈmænɪdʒmənt/",
          "example": "Never commit credentials; use secrets management.",
          "category": "operations"
        },
        {
          "id": "sec023",
          "english": "security through obscurity",
          "chinese": "隐蔽式安全",
          "pronunciation": "/sɪˈkjʊrəti θruː əbˈskjʊrəti/",
          "example": "Security through obscurity is not security.",
          "category": "principle"
        },
        {
          "id": "sec024",
          "english": "denial of service (DoS)",
          "chinese": "拒绝服务攻击",
          "pronunciation": "/dɪˈnaɪəl əv ˈsɜːrvɪs/",
          "example": "The WAF mitigated the denial of service attempt.",
          "category": "attack"
        },
        {
          "id": "sec025",
          "english": "privilege escalation",
          "chinese": "权限提升（提权）",
          "pronunciation": "/ˈprɪvəlɪdʒ ˌeskəˈleɪʃən/",
          "example": "The bug allowed local privilege escalation to root.",
          "category": "attack"
        }
      ]
    },
    {
      "id": "api-design",
      "name": "API Design",
      "nameCN": "API 设计",
      "description": "HTTP API, protocol and integration vocabulary",
      "items": [
        {
          "id": "api001",
          "english": "endpoint",
          "chinese": "接口端点",
          "pronunciation": "/ˈendpɔɪnt/",
          "example": "The health endpoint returns 200 OK.",
          "category": "rest"
        },
        {
          "id": "api002",
          "english": "request",
          "chinese": "请求",
          "pronunciation": "/rɪˈkwest/",
          "example": "The request body must be valid JSON.",
          "category": "http"
        },
        {
          "id": "api003",
          "english": "response",
          "chinese": "响应",
          "pronunciation": "/rɪˈspɑːns/",
          "example": "A 201 response confirms the resource was created.",
          "category": "http"
        },
        {
          "id": "api004",
          "english": "header",
          "chinese": "请求头",
          "pronunciation": "/ˈhedər/",
          "example": "Send the API key in the Authorization header.",
          "category": "http"
        },
        {
          "id": "api005",
          "english": "payload",
          "chinese": "载荷（请求体数据）",
          "pronunciation": "/ˈpeɪloʊd/",
          "example": "The webhook payload contains the event id.",
          "category": "data"
        },
        {
          "id": "api006",
          "english": "status code",
          "chinese": "状态码",
          "pronunciation": "/ˈstætəs koʊd/",
          "example": "A 429 status code means too many requests.",
          "category": "http"
        },
        {
          "id": "api007",
          "english": "idempotent",
          "chinese": "幂等的",
          "pronunciation": "/ˌaɪdəmˈpoʊtənt/",
          "example": "PUT is idempotent: calling it twice changes nothing.",
          "category": "semantics"
        },
        {
          "id": "api008",
          "english": "rate limiting",
          "chinese": "限流",
          "pronunciation": "/reɪt ˈlɪmɪtɪŋ/",
          "example": "The API returns 429 when rate limiting kicks in.",
          "category": "throttle"
        },
        {
          "id": "api009",
          "english": "pagination",
          "chinese": "分页",
          "pronunciation": "/ˌpædʒɪˈneɪʃən/",
          "example": "Use cursor-based pagination for large collections.",
          "category": "data"
        },
        {
          "id": "api010",
          "english": "cursor",
          "chinese": "游标",
          "pronunciation": "/ˈkɜːrsər/",
          "example": "Pass the cursor to fetch the next page.",
          "category": "data"
        },
        {
          "id": "api011",
          "english": "webhook",
          "chinese": "回调通知",
          "pronunciation": "/ˈwebhʊk/",
          "example": "Subscribe to push events via webhook.",
          "category": "integration"
        },
        {
          "id": "api012",
          "english": "REST",
          "chinese": "表述性状态转移（架构风格）",
          "pronunciation": "/rest/",
          "example": "The service exposes a REST API over HTTP.",
          "category": "style"
        },
        {
          "id": "api013",
          "english": "GraphQL",
          "chinese": "GraphQL 查询语言",
          "pronunciation": "/ˌɡræf kjuː el/",
          "example": "GraphQL lets clients pick exactly the fields they need.",
          "category": "style"
        },
        {
          "id": "api014",
          "english": "schema",
          "chinese": "模式（数据结构定义）",
          "pronunciation": "/ˈskiːmə/",
          "example": "Validate the payload against the schema first.",
          "category": "data"
        },
        {
          "id": "api015",
          "english": "API versioning",
          "chinese": "API 版本控制",
          "pronunciation": "/ˌeɪ piː ˈaɪ ˈvɜːrʒənɪŋ/",
          "example": "Versioning in the URL keeps old clients working.",
          "category": "lifecycle"
        },
        {
          "id": "api016",
          "english": "deprecation",
          "chinese": "弃用（废弃）",
          "pronunciation": "/ˌdeprəˈkeɪʃən/",
          "example": "The v1 endpoint is scheduled for deprecation.",
          "category": "lifecycle"
        },
        {
          "id": "api017",
          "english": "backward compatibility",
          "chinese": "向后兼容",
          "pronunciation": "/ˈbækwərd kəmˌpætɪˈbɪləti/",
          "example": "Renaming a field breaks backward compatibility.",
          "category": "lifecycle"
        },
        {
          "id": "api018",
          "english": "sandbox",
          "chinese": "沙箱（测试环境）",
          "pronunciation": "/ˈsændbɑːks/",
          "example": "Test your integration against the sandbox first.",
          "category": "testing"
        },
        {
          "id": "api019",
          "english": "throttling",
          "chinese": "节流",
          "pronunciation": "/ˈθrɑːtlɪŋ/",
          "example": "Throttling protects the backend from burst traffic.",
          "category": "throttle"
        },
        {
          "id": "api020",
          "english": "OAuth",
          "chinese": "开放授权协议",
          "pronunciation": "/ˈoʊˌɔːθ/",
          "example": "We use OAuth 2.0 for delegated access.",
          "category": "auth"
        },
        {
          "id": "api021",
          "english": "bearer token",
          "chinese": "持有者令牌",
          "pronunciation": "/ˈberər ˈtoʊkən/",
          "example": "Send the bearer token in every request.",
          "category": "auth"
        },
        {
          "id": "api022",
          "english": "request timeout",
          "chinese": "请求超时",
          "pronunciation": "/rɪˈkwest ˈtaɪmaʊt/",
          "example": "Set the request timeout to five seconds.",
          "category": "http"
        },
        {
          "id": "api023",
          "english": "retry with backoff",
          "chinese": "带退避的重试",
          "pronunciation": "/ˈriːtraɪ wɪð ˈbækɔːf/",
          "example": "Retry with exponential backoff on 503.",
          "category": "resilience"
        },
        {
          "id": "api024",
          "english": "graceful degradation",
          "chinese": "优雅降级",
          "pronunciation": "/ˈɡreɪsfəl ˌdeɡrəˈdeɪʃən/",
          "example": "The page uses graceful degradation when the API is down.",
          "category": "resilience"
        },
        {
          "id": "api025",
          "english": "contract testing",
          "chinese": "契约测试",
          "pronunciation": "/ˈkɑːntrækt ˈtestɪŋ/",
          "example": "Contract testing catches API mismatches in CI.",
          "category": "testing"
        }
      ]
    },
    {
      "id": "microservices",
      "name": "Microservices & Distributed Systems",
      "nameCN": "微服务与分布式",
      "description": "Distributed architecture patterns and reliability vocabulary",
      "items": [
        {
          "id": "ms001",
          "english": "monolith",
          "chinese": "单体应用",
          "pronunciation": "/ˈmɑːnəlɪθ/",
          "example": "We are slowly breaking the monolith apart.",
          "category": "architecture"
        },
        {
          "id": "ms002",
          "english": "microservice",
          "chinese": "微服务",
          "pronunciation": "/ˈmaɪkroʊsɜːrvɪs/",
          "example": "Each microservice owns its own database.",
          "category": "architecture"
        },
        {
          "id": "ms003",
          "english": "service mesh",
          "chinese": "服务网格",
          "pronunciation": "/ˈsɜːrvɪs meʃ/",
          "example": "The service mesh handles retries so the app code doesn't have to.",
          "category": "architecture"
        },
        {
          "id": "ms004",
          "english": "sidecar",
          "chinese": "边车（伴生容器）",
          "pronunciation": "/ˈsaɪdkɑːr/",
          "example": "A sidecar proxy sits next to every service instance.",
          "category": "architecture"
        },
        {
          "id": "ms005",
          "english": "API gateway",
          "chinese": "API 网关",
          "pronunciation": "/ˌeɪ piː ˈaɪ ˈɡeɪtweɪ/",
          "example": "All external traffic enters through the API gateway.",
          "category": "architecture"
        },
        {
          "id": "ms006",
          "english": "circuit breaker",
          "chinese": "熔断器",
          "pronunciation": "/ˈsɜːrkɪt ˈbreɪkər/",
          "example": "The circuit breaker opens after five consecutive failures.",
          "category": "resilience"
        },
        {
          "id": "ms007",
          "english": "fallback",
          "chinese": "回退（降级方案）",
          "pronunciation": "/ˈfɔːlbæk/",
          "example": "Show cached data as a fallback when the API is down.",
          "category": "resilience"
        },
        {
          "id": "ms008",
          "english": "bulkhead",
          "chinese": "舱壁隔离",
          "pronunciation": "/ˈbʌlkhed/",
          "example": "Bulkheads stop one failing service from exhausting the whole thread pool.",
          "category": "resilience"
        },
        {
          "id": "ms009",
          "english": "retry",
          "chinese": "重试",
          "pronunciation": "/ˌriːˈtraɪ/",
          "example": "Add a retry for transient network errors.",
          "category": "resilience"
        },
        {
          "id": "ms010",
          "english": "exponential backoff",
          "chinese": "指数退避",
          "pronunciation": "/ˌekspəˈnenʃl ˈbækɔːf/",
          "example": "Retries use exponential backoff starting at 100 ms.",
          "category": "resilience"
        },
        {
          "id": "ms011",
          "english": "heartbeat",
          "chinese": "心跳（存活信号）",
          "pronunciation": "/ˈhɑːrtbiːt/",
          "example": "The agent sends a heartbeat every ten seconds.",
          "category": "resilience"
        },
        {
          "id": "ms012",
          "english": "rate limiter",
          "chinese": "限流器",
          "pronunciation": "/reɪt ˈlɪmɪtər/",
          "example": "The rate limiter rejects requests above 100 per second.",
          "category": "resilience"
        },
        {
          "id": "ms013",
          "english": "service discovery",
          "chinese": "服务发现",
          "pronunciation": "/ˈsɜːrvɪs dɪˈskʌvəri/",
          "example": "Service discovery tells clients where the healthy instances are.",
          "category": "networking"
        },
        {
          "id": "ms014",
          "english": "registry",
          "chinese": "注册中心",
          "pronunciation": "/ˈredʒɪstri/",
          "example": "New instances register themselves in the registry on boot.",
          "category": "networking"
        },
        {
          "id": "ms015",
          "english": "readiness probe",
          "chinese": "就绪探针",
          "pronunciation": "/ˈredinəs proʊb/",
          "example": "Kubernetes routes traffic only after the readiness probe passes.",
          "category": "orchestration"
        },
        {
          "id": "ms016",
          "english": "eventual consistency",
          "chinese": "最终一致性",
          "pronunciation": "/ɪˈventʃuəl kənˈsɪstənsi/",
          "example": "The replicas are eventually consistent within about a second.",
          "category": "consistency"
        },
        {
          "id": "ms017",
          "english": "strong consistency",
          "chinese": "强一致性",
          "pronunciation": "/strɔːŋ kənˈsɪstənsi/",
          "example": "Payments require strong consistency, so we use a synchronous write.",
          "category": "consistency"
        },
        {
          "id": "ms018",
          "english": "consensus",
          "chinese": "共识（算法）",
          "pronunciation": "/kənˈsensəs/",
          "example": "Raft reaches consensus through a leader-based protocol.",
          "category": "consistency"
        },
        {
          "id": "ms019",
          "english": "leader election",
          "chinese": "主节点选举",
          "pronunciation": "/ˈliːdər ɪˈlekʃən/",
          "example": "When the master dies, leader election picks a replacement automatically.",
          "category": "consistency"
        },
        {
          "id": "ms020",
          "english": "quorum",
          "chinese": "法定人数（多数派）",
          "pronunciation": "/ˈkwɔːrəm/",
          "example": "A write succeeds if a quorum of nodes acknowledges it.",
          "category": "consistency"
        },
        {
          "id": "ms021",
          "english": "replication",
          "chinese": "副本复制",
          "pronunciation": "/ˌreplɪˈkeɪʃən/",
          "example": "Replication gives us three copies of every partition.",
          "category": "data"
        },
        {
          "id": "ms022",
          "english": "consistent hashing",
          "chinese": "一致性哈希",
          "pronunciation": "/kənˈsɪstənt ˈhæʃɪŋ/",
          "example": "Consistent hashing minimizes data movement when nodes leave.",
          "category": "data"
        },
        {
          "id": "ms023",
          "english": "partition tolerance",
          "chinese": "分区容忍性",
          "pronunciation": "/pɑːrˈtɪʃən ˈtɑːlərəns/",
          "example": "CAP theorem says partition tolerance is non-negotiable in a network.",
          "category": "consistency"
        },
        {
          "id": "ms024",
          "english": "CAP theorem",
          "chinese": "CAP 定理",
          "pronunciation": "/kæp ˈθɪrəm/",
          "example": "Under a network split, the CAP theorem forces a choice between consistency and availability.",
          "category": "theory"
        },
        {
          "id": "ms025",
          "english": "saga",
          "chinese": "Saga 模式（长事务拆分）",
          "pronunciation": "/ˈsɑːɡə/",
          "example": "A saga coordinates the order, payment and shipping steps.",
          "category": "transactions"
        },
        {
          "id": "ms026",
          "english": "two-phase commit",
          "chinese": "两阶段提交",
          "pronunciation": "/tuː feɪz kəˈmɪt/",
          "example": "Two-phase commit is correct but blocks during failures.",
          "category": "transactions"
        },
        {
          "id": "ms027",
          "english": "compensating transaction",
          "chinese": "补偿事务",
          "pronunciation": "/ˈkɑːmpenseɪtɪŋ trænˈzækʃən/",
          "example": "If shipping fails, a compensating transaction refunds the payment.",
          "category": "transactions"
        },
        {
          "id": "ms028",
          "english": "distributed tracing",
          "chinese": "分布式链路追踪",
          "pronunciation": "/dɪˈstrɪbjuːtɪd ˈtreɪsɪŋ/",
          "example": "Distributed tracing shows where the 300 ms went.",
          "category": "observability"
        },
        {
          "id": "ms029",
          "english": "correlation id",
          "chinese": "关联 ID",
          "pronunciation": "/ˌkɔːrəˈleɪʃən aɪ ˈdiː/",
          "example": "Attach a correlation id so logs across services can be joined.",
          "category": "observability"
        },
        {
          "id": "ms030",
          "english": "message queue",
          "chinese": "消息队列",
          "pronunciation": "/ˈmesɪdʒ kjuː/",
          "example": "Put the email job on a message queue instead of blocking the request.",
          "category": "messaging"
        },
        {
          "id": "ms031",
          "english": "dead letter queue",
          "chinese": "死信队列",
          "pronunciation": "/ded ˈletər kjuː/",
          "example": "Poison messages land in the dead letter queue for inspection.",
          "category": "messaging"
        },
        {
          "id": "ms032",
          "english": "at-least-once delivery",
          "chinese": "至少一次投递",
          "pronunciation": "/æt liːst wʌns dɪˈlɪvəri/",
          "example": "With at-least-once delivery, consumers must handle duplicates.",
          "category": "messaging"
        },
        {
          "id": "ms033",
          "english": "exactly-once semantics",
          "chinese": "恰好一次语义",
          "pronunciation": "/ɪɡˈzæktli wʌns sɪˈmæntɪks/",
          "example": "Exactly-once semantics costs throughput but simplifies consumers.",
          "category": "messaging"
        },
        {
          "id": "ms034",
          "english": "idempotency key",
          "chinese": "幂等键",
          "pronunciation": "/ˌaɪdəmˈpoʊtənsi kiː/",
          "example": "Send an idempotency key so retried payments aren't charged twice.",
          "category": "messaging"
        },
        {
          "id": "ms035",
          "english": "backpressure",
          "chinese": "背压（下游反压）",
          "pronunciation": "/ˈbækˌpreʃər/",
          "example": "When the consumer slows down, backpressure propagates upstream.",
          "category": "messaging"
        },
        {
          "id": "ms036",
          "english": "fan-out",
          "chinese": "扇出（一消息多订阅）",
          "pronunciation": "/fæn aʊt/",
          "example": "The exchange uses fan-out to broadcast to every queue.",
          "category": "messaging"
        },
        {
          "id": "ms037",
          "english": "event sourcing",
          "chinese": "事件溯源",
          "pronunciation": "/ɪˈvent ˈsɔːrsɪŋ/",
          "example": "With event sourcing, state is derived by replaying the event log.",
          "category": "architecture"
        },
        {
          "id": "ms038",
          "english": "CQRS",
          "chinese": "命令查询职责分离",
          "pronunciation": "/ˌsiː kjuː ɑːr ˈes/",
          "example": "CQRS lets the read model use a totally different store.",
          "category": "architecture"
        },
        {
          "id": "ms039",
          "english": "bounded context",
          "chinese": "限界上下文",
          "pronunciation": "/ˈbaʊndɪd ˈkɑːntekst/",
          "example": "Order and Inventory are separate bounded contexts in the domain model.",
          "category": "architecture"
        },
        {
          "id": "ms040",
          "english": "strangler fig pattern",
          "chinese": "绞杀者模式（渐进迁移）",
          "pronunciation": "/ˈstræŋɡlər fɪɡ ˈpætərn/",
          "example": "Use the strangler fig pattern to migrate the monolith route by route.",
          "category": "architecture"
        },
        {
          "id": "ms041",
          "english": "anti-corruption layer",
          "chinese": "防腐层",
          "pronunciation": "/ˌænti kəˈrʌpʃən ˈleɪər/",
          "example": "An anti-corruption layer translates the legacy data model.",
          "category": "architecture"
        },
        {
          "id": "ms042",
          "english": "event-driven architecture",
          "chinese": "事件驱动架构",
          "pronunciation": "/ɪˈvent ˈdrɪvn ˈɑːrkɪtektʃər/",
          "example": "In an event-driven architecture, services react to domain events.",
          "category": "architecture"
        },
        {
          "id": "ms043",
          "english": "choreography",
          "chinese": "协同（无中心编排）",
          "pronunciation": "/ˌkɔːriˈɑːɡrəfi/",
          "example": "With choreography, each service subscribes to the events it cares about.",
          "category": "architecture"
        },
        {
          "id": "ms044",
          "english": "downstream service",
          "chinese": "下游服务",
          "pronunciation": "/ˈdaʊnstriːm ˈsɜːrvɪs/",
          "example": "If the downstream service is slow, our request times out.",
          "category": "networking"
        },
        {
          "id": "ms045",
          "english": "synchronous call",
          "chinese": "同步调用",
          "pronunciation": "/ˈsɪŋkrənəs kɔːl/",
          "example": "Every synchronous call adds a availability risk.",
          "category": "networking"
        },
        {
          "id": "ms046",
          "english": "asynchronous messaging",
          "chinese": "异步消息",
          "pronunciation": "/eɪˈsɪŋkrənəs ˈmesɪdʒɪŋ/",
          "example": "Asynchronous messaging decouples producers from consumers.",
          "category": "messaging"
        },
        {
          "id": "ms047",
          "english": "latency budget",
          "chinese": "延迟预算",
          "pronunciation": "/ˈleɪtənsi ˈbʌdʒɪt/",
          "example": "Each hop gets a share of the 200 ms latency budget.",
          "category": "performance"
        },
        {
          "id": "ms048",
          "english": "thundering herd",
          "chinese": "惊群效应",
          "pronunciation": "/ˈθʌndərɪŋ hɜːrd/",
          "example": "All caches expiring at once causes a thundering herd on the database.",
          "category": "performance"
        },
        {
          "id": "ms049",
          "english": "cache stampede",
          "chinese": "缓存击穿",
          "pronunciation": "/kæʃ stæmˈpiːd/",
          "example": "Request coalescing prevents a cache stampede on the hot key.",
          "category": "performance"
        },
        {
          "id": "ms050",
          "english": "single point of failure",
          "chinese": "单点故障",
          "pronunciation": "/ˈsɪŋɡəl pɔɪnt əv ˈfeɪljər/",
          "example": "That unreplicated database is our single point of failure.",
          "category": "reliability"
        }
      ]
    },
    {
      "id": "observability",
      "name": "Observability",
      "nameCN": "可观测性",
      "description": "Metrics, logs, traces and SRE monitoring vocabulary",
      "items": [
        {
          "id": "ob001",
          "english": "observability",
          "chinese": "可观测性",
          "pronunciation": "/əbˌzɜːrvəˈbɪləti/",
          "example": "Observability means you can answer new questions without shipping new code.",
          "category": "core"
        },
        {
          "id": "ob002",
          "english": "telemetry",
          "chinese": "遥测数据",
          "pronunciation": "/təˈlemətri/",
          "example": "The agent collects telemetry from every host.",
          "category": "core"
        },
        {
          "id": "ob003",
          "english": "instrumentation",
          "chinese": "埋点／插桩",
          "pronunciation": "/ˌɪnstrəmenˈteɪʃən/",
          "example": "Add instrumentation around the database calls.",
          "category": "core"
        },
        {
          "id": "ob004",
          "english": "log",
          "chinese": "日志",
          "pronunciation": "/lɔːɡ/",
          "example": "Check the application log for stack traces.",
          "category": "logs"
        },
        {
          "id": "ob005",
          "english": "log level",
          "chinese": "日志级别",
          "pronunciation": "/lɔːɡ ˈlevl/",
          "example": "Lower the log level to DEBUG in staging only.",
          "category": "logs"
        },
        {
          "id": "ob006",
          "english": "structured logging",
          "chinese": "结构化日志",
          "pronunciation": "/ˈstrʌktʃərd ˈlɔːɡɪŋ/",
          "example": "Structured logging makes logs queryable by field.",
          "category": "logs"
        },
        {
          "id": "ob007",
          "english": "log aggregation",
          "chinese": "日志聚合",
          "pronunciation": "/lɔːɡ ˌæɡrɪˈɡeɪʃən/",
          "example": "Log aggregation pipes every service's output into one search index.",
          "category": "logs"
        },
        {
          "id": "ob008",
          "english": "metric",
          "chinese": "指标",
          "pronunciation": "/ˈmetrɪk/",
          "example": "The dashboard plots one metric per panel.",
          "category": "metrics"
        },
        {
          "id": "ob009",
          "english": "counter",
          "chinese": "计数器（只增不减）",
          "pronunciation": "/ˈkaʊntər/",
          "example": "A counter for total requests resets to zero on restart.",
          "category": "metrics"
        },
        {
          "id": "ob010",
          "english": "gauge",
          "chinese": "瞬时值指标",
          "pronunciation": "/ɡeɪdʒ/",
          "example": "Memory usage is a gauge that can go up or down.",
          "category": "metrics"
        },
        {
          "id": "ob011",
          "english": "histogram",
          "chinese": "直方图",
          "pronunciation": "/ˈhɪstəɡræm/",
          "example": "A histogram buckets request durations into ranges.",
          "category": "metrics"
        },
        {
          "id": "ob012",
          "english": "summary metric",
          "chinese": "摘要型指标（分位数）",
          "pronunciation": "/ˈsʌməri ˈmetrɪk/",
          "example": "The summary metric exposes precomputed quantiles.",
          "category": "metrics"
        },
        {
          "id": "ob013",
          "english": "percentile",
          "chinese": "百分位数",
          "pronunciation": "/pərˈsentaɪl/",
          "example": "The 95th percentile latency is under 120 ms.",
          "category": "metrics"
        },
        {
          "id": "ob014",
          "english": "p99 latency",
          "chinese": "P99 延迟",
          "pronunciation": "/piː naɪnti naɪn ˈleɪtənsi/",
          "example": "The p99 latency spikes during the nightly batch job.",
          "category": "metrics"
        },
        {
          "id": "ob015",
          "english": "long-tail latency",
          "chinese": "长尾延迟",
          "pronunciation": "/lɔːŋ teɪl ˈleɪtənsi/",
          "example": "The average looks fine, but long-tail latency is awful.",
          "category": "metrics"
        },
        {
          "id": "ob016",
          "english": "trace",
          "chinese": "调用链",
          "pronunciation": "/treɪs/",
          "example": "Open the trace to see every span in the request.",
          "category": "tracing"
        },
        {
          "id": "ob017",
          "english": "span",
          "chinese": "跨度（一段调用）",
          "pronunciation": "/spæn/",
          "example": "Each span records the service, operation and duration.",
          "category": "tracing"
        },
        {
          "id": "ob018",
          "english": "trace id",
          "chinese": "追踪 ID",
          "pronunciation": "/treɪs aɪ ˈdiː/",
          "example": "Carry the trace id through every hop.",
          "category": "tracing"
        },
        {
          "id": "ob019",
          "english": "context propagation",
          "chinese": "上下文传播",
          "pronunciation": "/ˈkɑːntekst ˌprɑːpəˈɡeɪʃən/",
          "example": "Context propagation broke because one library dropped the headers.",
          "category": "tracing"
        },
        {
          "id": "ob020",
          "english": "sampling",
          "chinese": "采样",
          "pronunciation": "/ˈsæmplɪŋ/",
          "example": "We sample one trace in a hundred to control cost.",
          "category": "tracing"
        },
        {
          "id": "ob021",
          "english": "dashboard",
          "chinese": "仪表盘",
          "pronunciation": "/ˈdæʃbɔːrd/",
          "example": "Share the latency dashboard link during the incident.",
          "category": "monitoring"
        },
        {
          "id": "ob022",
          "english": "panel",
          "chinese": "面板（图表单元）",
          "pronunciation": "/ˈpænl/",
          "example": "Add a panel for error rate per region.",
          "category": "monitoring"
        },
        {
          "id": "ob023",
          "english": "alert",
          "chinese": "告警",
          "pronunciation": "/əˈlɜːrt/",
          "example": "The alert fired twice last night for the same issue.",
          "category": "alerting"
        },
        {
          "id": "ob024",
          "english": "alert threshold",
          "chinese": "告警阈值",
          "pronunciation": "/əˈlɜːrt ˈθreʃhoʊld/",
          "example": "Raise the alert threshold to cut the noise.",
          "category": "alerting"
        },
        {
          "id": "ob025",
          "english": "alert fatigue",
          "chinese": "告警疲劳",
          "pronunciation": "/əˈlɜːrt fəˈtiːɡ/",
          "example": "Alert fatigue makes engineers ignore real pages.",
          "category": "alerting"
        },
        {
          "id": "ob026",
          "english": "escalation",
          "chinese": "升级上报",
          "pronunciation": "/ˌeskəˈleɪʃən/",
          "example": "After 15 minutes without a fix, the escalation policy pages the secondary.",
          "category": "alerting"
        },
        {
          "id": "ob027",
          "english": "severity",
          "chinese": "严重级别",
          "pronunciation": "/sɪˈverəti/",
          "example": "A sev-1 incident triggers the full response process.",
          "category": "incident"
        },
        {
          "id": "ob028",
          "english": "incident",
          "chinese": "事故／故障",
          "pronunciation": "/ˈɪnsɪdənt/",
          "example": "The incident lasted 40 minutes and hit 5% of users.",
          "category": "incident"
        },
        {
          "id": "ob029",
          "english": "SLI",
          "chinese": "服务水平指标",
          "pronunciation": "/ˌes el ˈaɪ/",
          "example": "Our main SLI is the fraction of requests under 300 ms.",
          "category": "sre"
        },
        {
          "id": "ob030",
          "english": "SLO",
          "chinese": "服务水平目标",
          "pronunciation": "/ˌes el ˈoʊ/",
          "example": "The 99.9% availability SLO leaves us a monthly error budget.",
          "category": "sre"
        },
        {
          "id": "ob031",
          "english": "SLA",
          "chinese": "服务水平协议",
          "pronunciation": "/ˌes el ˈeɪ/",
          "example": "Missing the SLA triggers contractual penalties.",
          "category": "sre"
        },
        {
          "id": "ob032",
          "english": "error budget",
          "chinese": "错误预算",
          "pronunciation": "/ˈerər ˈbʌdʒɪt/",
          "example": "We burned the error budget, so feature launches are paused.",
          "category": "sre"
        },
        {
          "id": "ob033",
          "english": "burn rate",
          "chinese": "错误预算燃烧率",
          "pronunciation": "/bɜːrn reɪt/",
          "example": "A burn rate of 10x means the SLO fails in three hours.",
          "category": "sre"
        },
        {
          "id": "ob034",
          "english": "uptime",
          "chinese": "可用时长",
          "pronunciation": "/ˈʌptaɪm/",
          "example": "The service kept 99.95% uptime this quarter.",
          "category": "reliability"
        },
        {
          "id": "ob035",
          "english": "downtime",
          "chinese": "停机时间",
          "pronunciation": "/ˈdaʊntaɪm/",
          "example": "Scheduled maintenance counts against planned downtime.",
          "category": "reliability"
        },
        {
          "id": "ob036",
          "english": "golden signals",
          "chinese": "黄金信号（延迟/流量/错误/饱和）",
          "pronunciation": "/ˈɡoʊldən ˈsɪɡnəlz/",
          "example": "Start with the four golden signals when instrumenting a service.",
          "category": "sre"
        },
        {
          "id": "ob037",
          "english": "latency",
          "chinese": "延迟",
          "pronunciation": "/ˈleɪtənsi/",
          "example": "Latency doubled after the last deploy.",
          "category": "signals"
        },
        {
          "id": "ob038",
          "english": "traffic",
          "chinese": "流量",
          "pronunciation": "/ˈtræfɪk/",
          "example": "Traffic ramps up sharply at 9 a.m.",
          "category": "signals"
        },
        {
          "id": "ob039",
          "english": "saturation",
          "chinese": "饱和度",
          "pronunciation": "/ˌsætʃəˈreɪʃən/",
          "example": "Disk saturation above 85% predicts trouble.",
          "category": "signals"
        },
        {
          "id": "ob040",
          "english": "cardinality",
          "chinese": "基数（标签组合数）",
          "pronunciation": "/kɑːrˈdɪnələti/",
          "example": "Tagging metrics with user id explodes cardinality.",
          "category": "metrics"
        },
        {
          "id": "ob041",
          "english": "time series",
          "chinese": "时间序列",
          "pronunciation": "/taɪm ˈsɪriːz/",
          "example": "The store keeps two years of time series data.",
          "category": "metrics"
        },
        {
          "id": "ob042",
          "english": "retention period",
          "chinese": "数据保留期",
          "pronunciation": "/rɪˈtenʃən ˈpɪriəd/",
          "example": "Raw traces have a 7-day retention period.",
          "category": "storage"
        },
        {
          "id": "ob043",
          "english": "scrape",
          "chinese": "抓取（指标采集）",
          "pronunciation": "/skreɪp/",
          "example": "The server exposes /metrics for the scraper to scrape.",
          "category": "collection"
        },
        {
          "id": "ob044",
          "english": "exporter",
          "chinese": "导出器",
          "pronunciation": "/ɪkˈspɔːrtər/",
          "example": "Install the Postgres exporter to collect database metrics.",
          "category": "collection"
        },
        {
          "id": "ob045",
          "english": "pull model",
          "chinese": "拉取模式",
          "pronunciation": "/pʊl ˈmɑːdl/",
          "example": "The pull model makes the monitor the active party.",
          "category": "collection"
        },
        {
          "id": "ob046",
          "english": "push model",
          "chinese": "推送模式",
          "pronunciation": "/pʊʃ ˈmɑːdl/",
          "example": "Short-lived jobs use the push model via a gateway.",
          "category": "collection"
        },
        {
          "id": "ob047",
          "english": "anomaly detection",
          "chinese": "异常检测",
          "pronunciation": "/əˈnɑːməli dɪˈtekʃən/",
          "example": "Anomaly detection flagged the unusual Sunday traffic.",
          "category": "analysis"
        },
        {
          "id": "ob048",
          "english": "baseline",
          "chinese": "基线",
          "pronunciation": "/ˈbeɪslaɪn/",
          "example": "Compare against the two-week baseline before declaring a regression.",
          "category": "analysis"
        },
        {
          "id": "ob049",
          "english": "root cause",
          "chinese": "根因",
          "pronunciation": "/ruːt kɔːz/",
          "example": "The root cause was a certificate that expired silently.",
          "category": "analysis"
        },
        {
          "id": "ob050",
          "english": "signal-to-noise ratio",
          "chinese": "信噪比",
          "pronunciation": "/ˈsɪɡnəl tuː nɔɪz ˈreɪʃioʊ/",
          "example": "Fewer, smarter alerts improved the signal-to-noise ratio.",
          "category": "analysis"
        }
      ]
    },
    {
      "id": "modern-web",
      "name": "Modern Web Development",
      "nameCN": "现代 Web 开发",
      "description": "Frontend rendering, bundling and browser platform vocabulary",
      "items": [
        {
          "id": "mw001",
          "english": "single-page application",
          "chinese": "单页应用",
          "pronunciation": "/ˈsɪŋɡəl peɪdʒ ˌæplɪˈkeɪʃən/",
          "example": "A single-page application swaps views without full reloads.",
          "category": "rendering"
        },
        {
          "id": "mw002",
          "english": "client-side rendering",
          "chinese": "客户端渲染",
          "pronunciation": "/ˈklaɪənt saɪd ˈrendərɪŋ/",
          "example": "Pure client-side rendering ships an empty HTML shell.",
          "category": "rendering"
        },
        {
          "id": "mw003",
          "english": "static site generation",
          "chinese": "静态站点生成",
          "pronunciation": "/ˈstætɪk saɪt ˌdʒenəˈreɪʃən/",
          "example": "Static site generation pre-builds every page at deploy time.",
          "category": "rendering"
        },
        {
          "id": "mw004",
          "english": "hydration",
          "chinese": "水合（激活静态 HTML）",
          "pronunciation": "/haɪˈdreɪʃən/",
          "example": "The page renders instantly, then hydration attaches the event listeners.",
          "category": "rendering"
        },
        {
          "id": "mw005",
          "english": "island architecture",
          "chinese": "岛屿架构",
          "pronunciation": "/ˈaɪlənd ˈɑːrkɪtektʃər/",
          "example": "Island architecture hydrates only the interactive widgets.",
          "category": "rendering"
        },
        {
          "id": "mw006",
          "english": "virtual DOM",
          "chinese": "虚拟 DOM",
          "pronunciation": "/ˈvɜːrtʃuəl dɑːm/",
          "example": "The framework diffs the virtual DOM before touching the real one.",
          "category": "rendering"
        },
        {
          "id": "mw007",
          "english": "diffing",
          "chinese": "差异比较",
          "pronunciation": "/ˈdɪfɪŋ/",
          "example": "Diffing two trees finds the minimum set of DOM updates.",
          "category": "rendering"
        },
        {
          "id": "mw008",
          "english": "reconciliation",
          "chinese": "渲染协调",
          "pronunciation": "/ˌrekənsɪliˈeɪʃən/",
          "example": "Reconciliation decides which components to re-render.",
          "category": "rendering"
        },
        {
          "id": "mw009",
          "english": "component",
          "chinese": "组件",
          "pronunciation": "/kəmˈpoʊnənt/",
          "example": "Keep each component small and focused.",
          "category": "component"
        },
        {
          "id": "mw010",
          "english": "props",
          "chinese": "属性（父传子数据）",
          "pronunciation": "/prɑːps/",
          "example": "Pass the user data down as props.",
          "category": "component"
        },
        {
          "id": "mw011",
          "english": "state",
          "chinese": "状态",
          "pronunciation": "/steɪt/",
          "example": "Lift state up when two siblings need the same data.",
          "category": "component"
        },
        {
          "id": "mw012",
          "english": "two-way data binding",
          "chinese": "双向数据绑定",
          "pronunciation": "/tuː weɪ ˈdeɪtə ˈbaɪndɪŋ/",
          "example": "Two-way data binding syncs the input and the model automatically.",
          "category": "component"
        },
        {
          "id": "mw013",
          "english": "hooks",
          "chinese": "钩子函数",
          "pronunciation": "/hʊks/",
          "example": "Custom hooks let you reuse stateful logic.",
          "category": "component"
        },
        {
          "id": "mw014",
          "english": "lifecycle",
          "chinese": "生命周期",
          "pronunciation": "/ˈlaɪfˌsaɪkl/",
          "example": "Fetch data in the mount phase of the lifecycle.",
          "category": "component"
        },
        {
          "id": "mw015",
          "english": "bundler",
          "chinese": "打包器",
          "pronunciation": "/ˈbʌndlər/",
          "example": "The bundler resolves imports and emits one optimized file.",
          "category": "build"
        },
        {
          "id": "mw016",
          "english": "tree shaking",
          "chinese": "摇树优化（删无用代码）",
          "pronunciation": "/triː ˈʃeɪkɪŋ/",
          "example": "Tree shaking removed 60% of the unused library code.",
          "category": "build"
        },
        {
          "id": "mw017",
          "english": "code splitting",
          "chinese": "代码分割",
          "pronunciation": "/koʊd ˈsplɪtɪŋ/",
          "example": "Code splitting loads the admin bundle only for admins.",
          "category": "build"
        },
        {
          "id": "mw018",
          "english": "lazy loading",
          "chinese": "懒加载",
          "pronunciation": "/ˈleɪzi ˈloʊdɪŋ/",
          "example": "Images below the fold use lazy loading.",
          "category": "build"
        },
        {
          "id": "mw019",
          "english": "minification",
          "chinese": "压缩（混淆）",
          "pronunciation": "/ˌmɪnɪfɪˈkeɪʃən/",
          "example": "Minification cut the bundle from 400 KB to 150 KB.",
          "category": "build"
        },
        {
          "id": "mw020",
          "english": "source map",
          "chinese": "源码映射",
          "pronunciation": "/sɔːrs mæp/",
          "example": "Upload source maps so production errors point to real code.",
          "category": "build"
        },
        {
          "id": "mw021",
          "english": "transpile",
          "chinese": "转译",
          "pronunciation": "/trænˈspaɪl/",
          "example": "Babel transpiles JSX into plain function calls.",
          "category": "build"
        },
        {
          "id": "mw022",
          "english": "polyfill",
          "chinese": "垫片（兼容补丁）",
          "pronunciation": "/ˈpɑːlifɪl/",
          "example": "Older Safari needs a polyfill for structuredClone.",
          "category": "build"
        },
        {
          "id": "mw023",
          "english": "progressive enhancement",
          "chinese": "渐进增强",
          "pronunciation": "/prəˈɡresɪv ɪnˈhænsmənt/",
          "example": "Progressive enhancement keeps the form usable without JavaScript.",
          "category": "principle"
        },
        {
          "id": "mw024",
          "english": "mobile-first design",
          "chinese": "移动优先设计",
          "pronunciation": "/ˈmoʊbaɪl fɜːrst dɪˈzaɪn/",
          "example": "Mobile-first design starts with the smallest screen.",
          "category": "design"
        },
        {
          "id": "mw025",
          "english": "media query",
          "chinese": "媒体查询",
          "pronunciation": "/ˈmiːdiə ˈkwɪri/",
          "example": "The media query switches the layout at 768 px.",
          "category": "design"
        },
        {
          "id": "mw026",
          "english": "breakpoint",
          "chinese": "响应式断点",
          "pronunciation": "/ˈbreɪkpɔɪnt/",
          "example": "We added a breakpoint for tablets.",
          "category": "design"
        },
        {
          "id": "mw027",
          "english": "accessibility",
          "chinese": "无障碍",
          "pronunciation": "/əkˌsesəˈbɪləti/",
          "example": "Accessibility isn't optional — add the aria labels.",
          "category": "a11y"
        },
        {
          "id": "mw028",
          "english": "semantic HTML",
          "chinese": "语义化 HTML",
          "pronunciation": "/sɪˈmæntɪk eɪtʃ tiː em ˈel/",
          "example": "Semantic HTML helps screen readers and SEO alike.",
          "category": "a11y"
        },
        {
          "id": "mw029",
          "english": "screen reader",
          "chinese": "屏幕阅读器",
          "pronunciation": "/skriːn ˈriːdər/",
          "example": "Test the checkout flow with a screen reader.",
          "category": "a11y"
        },
        {
          "id": "mw030",
          "english": "origin",
          "chinese": "源（协议+域名+端口）",
          "pronunciation": "/ˈɔːrɪdʒɪn/",
          "example": "Two pages share an origin only if scheme, host and port all match.",
          "category": "platform"
        },
        {
          "id": "mw031",
          "english": "safe area",
          "chinese": "安全区（刘海屏等）",
          "pronunciation": "/seɪf ˈeriə/",
          "example": "Respect the safe area so the notch doesn't cover the button.",
          "category": "design"
        },
        {
          "id": "mw032",
          "english": "Intersection Observer",
          "chinese": "交叉观察器",
          "pronunciation": "/ˌɪntərˈsekʃən əbˈzɜːrvər/",
          "example": "Use Intersection Observer to trigger the reveal animation.",
          "category": "platform"
        },
        {
          "id": "mw033",
          "english": "Web Components",
          "chinese": "Web 组件标准",
          "pronunciation": "/web kəmˈpoʊnənts/",
          "example": "Web Components work in every framework because they're a platform feature.",
          "category": "platform"
        },
        {
          "id": "mw034",
          "english": "custom element",
          "chinese": "自定义元素",
          "pronunciation": "/ˈkʌstəm ˈelɪmənt/",
          "example": "Register <date-picker> as a custom element.",
          "category": "platform"
        },
        {
          "id": "mw035",
          "english": "shadow DOM",
          "chinese": "影子 DOM",
          "pronunciation": "/ˈʃædoʊ dɑːm/",
          "example": "Shadow DOM keeps the component's styles from leaking out.",
          "category": "platform"
        },
        {
          "id": "mw036",
          "english": "web worker",
          "chinese": "工作线程",
          "pronunciation": "/web ˈwɜːrkər/",
          "example": "Move the heavy parsing into a web worker.",
          "category": "platform"
        },
        {
          "id": "mw037",
          "english": "fetch",
          "chinese": "fetch 请求 API",
          "pronunciation": "/fetʃ/",
          "example": "Call fetch with credentials to include the cookie.",
          "category": "platform"
        },
        {
          "id": "mw038",
          "english": "CORS",
          "chinese": "跨域资源共享",
          "pronunciation": "/kɔːrz/",
          "example": "The request failed because the server didn't allow CORS.",
          "category": "security"
        },
        {
          "id": "mw039",
          "english": "same-origin policy",
          "chinese": "同源策略",
          "pronunciation": "/seɪm ˈɔːrɪdʒɪn ˈpɑːləsi/",
          "example": "The same-origin policy blocks scripts from reading cross-origin responses.",
          "category": "security"
        },
        {
          "id": "mw040",
          "english": "content security policy",
          "chinese": "内容安全策略",
          "pronunciation": "/ˈkɑːntent sɪˈkjʊrəti ˈpɑːləsi/",
          "example": "A strict content security policy blocks inline scripts.",
          "category": "security"
        },
        {
          "id": "mw041",
          "english": "cross-origin isolation",
          "chinese": "跨域隔离",
          "pronunciation": "/krɔːs ˈɔːrɪdʒɪn ˌaɪsəˈleɪʃən/",
          "example": "SharedArrayBuffer requires cross-origin isolation.",
          "category": "security"
        },
        {
          "id": "mw042",
          "english": "IndexedDB",
          "chinese": "浏览器数据库",
          "pronunciation": "/ˈɪndekst diː biː/",
          "example": "Cache the API response in IndexedDB for offline reads.",
          "category": "storage"
        },
        {
          "id": "mw043",
          "english": "prefetch",
          "chinese": "预取",
          "pronunciation": "/ˌpriːˈfetʃ/",
          "example": "Prefetch the likely next page during idle time.",
          "category": "performance"
        },
        {
          "id": "mw044",
          "english": "preload",
          "chinese": "预加载",
          "pronunciation": "/ˌpriːˈloʊd/",
          "example": "Preload the hero font so text doesn't flash.",
          "category": "performance"
        },
        {
          "id": "mw045",
          "english": "critical rendering path",
          "chinese": "关键渲染路径",
          "pronunciation": "/ˈkrɪtɪkl ˈrendərɪŋ pæθ/",
          "example": "Blocking scripts on the critical rendering path delay first paint.",
          "category": "performance"
        },
        {
          "id": "mw046",
          "english": "layout thrashing",
          "chinese": "布局抖动（读写交替）",
          "pronunciation": "/ˈlaɪaʊt ˈθræʃɪŋ/",
          "example": "Layout thrashing happens when you read offsets inside a write loop.",
          "category": "performance"
        },
        {
          "id": "mw047",
          "english": "repaint",
          "chinese": "重绘",
          "pronunciation": "/ˌriːˈpeɪnt/",
          "example": "Changing color triggers a repaint but not a reflow.",
          "category": "performance"
        },
        {
          "id": "mw048",
          "english": "reflow",
          "chinese": "重排（回流）",
          "pronunciation": "/ˌriːˈfloʊ/",
          "example": "Animating width forces a reflow every frame.",
          "category": "performance"
        },
        {
          "id": "mw049",
          "english": "compositing",
          "chinese": "合成（图层合并）",
          "pronunciation": "/kəmˈpɑːzɪtɪŋ/",
          "example": "Compositing on the GPU makes transform animations cheap.",
          "category": "performance"
        },
        {
          "id": "mw050",
          "english": "event loop",
          "chinese": "事件循环",
          "pronunciation": "/ɪˈvent luːp/",
          "example": "The event loop drains microtasks before the next macrotask.",
          "category": "platform"
        }
      ]
    },
    {
      "id": "soft-skills",
      "name": "Collaboration & Soft Skills",
      "nameCN": "协作与软技能",
      "description": "Workplace communication and collaboration vocabulary",
      "items": [
        {
          "id": "ss001",
          "english": "alignment",
          "chinese": "对齐（目标一致）",
          "pronunciation": "/əˈlaɪnmənt/",
          "example": "We need alignment on the launch date before we commit.",
          "category": "communication"
        },
        {
          "id": "ss002",
          "english": "cross-functional",
          "chinese": "跨职能的",
          "pronunciation": "/krɔːs ˈfʌŋkʃənəl/",
          "example": "The migration needs a cross-functional team of devs, DBAs and SREs.",
          "category": "teamwork"
        },
        {
          "id": "ss003",
          "english": "unblock",
          "chinese": "解除阻塞",
          "pronunciation": "/ʌnˈblɑːk/",
          "example": "Can you review my PR today to unblock the release?",
          "category": "teamwork"
        },
        {
          "id": "ss004",
          "english": "disagree and commit",
          "chinese": "保留异议但执行",
          "pronunciation": "/ˌdɪsəˈɡriː ænd kəˈmɪt/",
          "example": "I still have doubts, but disagree and commit — let's ship it.",
          "category": "communication"
        },
        {
          "id": "ss005",
          "english": "push back",
          "chinese": "提出反对",
          "pronunciation": "/pʊʃ bæk/",
          "example": "I had to push back on the timeline; it's simply not feasible.",
          "category": "communication"
        },
        {
          "id": "ss006",
          "english": "concern",
          "chinese": "顾虑／担忧",
          "pronunciation": "/kənˈsɜːrn/",
          "example": "My main concern is the migration path for existing users.",
          "category": "communication"
        },
        {
          "id": "ss007",
          "english": "compromise",
          "chinese": "妥协／折中",
          "pronunciation": "/ˈkɑːmprəmaɪz/",
          "example": "We compromised on weekly releases instead of daily.",
          "category": "communication"
        },
        {
          "id": "ss008",
          "english": "win-win",
          "chinese": "双赢",
          "pronunciation": "/wɪn wɪn/",
          "example": "Open-sourcing the library is a win-win for us and the community.",
          "category": "communication"
        },
        {
          "id": "ss009",
          "english": "empathy",
          "chinese": "同理心",
          "pronunciation": "/ˈempəθi/",
          "example": "Review the code with empathy — the author is a human.",
          "category": "communication"
        },
        {
          "id": "ss010",
          "english": "active listening",
          "chinese": "积极倾听",
          "pronunciation": "/ˈæktɪv ˈlɪsənɪŋ/",
          "example": "Active listening means paraphrasing before you reply.",
          "category": "communication"
        },
        {
          "id": "ss011",
          "english": "paraphrase",
          "chinese": "复述／改述",
          "pronunciation": "/ˈpærəfreɪz/",
          "example": "Let me paraphrase your idea to make sure I got it.",
          "category": "communication"
        },
        {
          "id": "ss012",
          "english": "clarification",
          "chinese": "澄清",
          "pronunciation": "/ˌklærɪfɪˈkeɪʃən/",
          "example": "Just to ask for clarification: is this blocking or best-effort?",
          "category": "communication"
        },
        {
          "id": "ss013",
          "english": "expectation",
          "chinese": "期望",
          "pronunciation": "/ˌekspekˈteɪʃən/",
          "example": "Set expectations early: review may take up to two days.",
          "category": "management"
        },
        {
          "id": "ss014",
          "english": "underpromise, overdeliver",
          "chinese": "低承诺高交付",
          "pronunciation": "/ˌʌndərˈprɑːmɪs ˌoʊvərdɪˈlɪvər/",
          "example": "Underpromise, overdeliver — quote three days and ship in two.",
          "category": "management"
        },
        {
          "id": "ss015",
          "english": "milestone",
          "chinese": "里程碑",
          "pronunciation": "/ˈmaɪlstoʊn/",
          "example": "The next milestone is a working demo on Friday.",
          "category": "planning"
        },
        {
          "id": "ss016",
          "english": "timebox",
          "chinese": "时间盒（限时）",
          "pronunciation": "/ˈtaɪmbɑːks/",
          "example": "Let's timebox this discussion to fifteen minutes.",
          "category": "planning"
        },
        {
          "id": "ss017",
          "english": "de-scope",
          "chinese": "缩减范围",
          "pronunciation": "/diː skoʊp/",
          "example": "To hit the date, we de-scoped the export feature.",
          "category": "planning"
        },
        {
          "id": "ss018",
          "english": "scope creep",
          "chinese": "范围蔓延",
          "pronunciation": "/skoʊp kriːp/",
          "example": "Scope creep killed the original timeline.",
          "category": "planning"
        },
        {
          "id": "ss019",
          "english": "requirement",
          "chinese": "需求",
          "pronunciation": "/rɪˈkwaɪərmənt/",
          "example": "That's a nice idea, but it's not a requirement for v1.",
          "category": "planning"
        },
        {
          "id": "ss020",
          "english": "requirements gathering",
          "chinese": "需求收集",
          "pronunciation": "/rɪˈkwaɪərmənts ˈɡæðərɪŋ/",
          "example": "Two days of requirements gathering saved two months of rework.",
          "category": "planning"
        },
        {
          "id": "ss021",
          "english": "acceptance criteria",
          "chinese": "验收标准",
          "pronunciation": "/əkˈseptəns kraɪˈtɪriə/",
          "example": "Write acceptance criteria before writing the code.",
          "category": "planning"
        },
        {
          "id": "ss022",
          "english": "definition of done",
          "chinese": "完成定义",
          "pronunciation": "/ˌdefɪˈnɪʃən əv dʌn/",
          "example": "Our definition of done includes tests and docs.",
          "category": "planning"
        },
        {
          "id": "ss023",
          "english": "handover",
          "chinese": "交接",
          "pronunciation": "/ˈhændoʊvər/",
          "example": "Write a handover doc before you rotate off the project.",
          "category": "process"
        },
        {
          "id": "ss024",
          "english": "onboarding",
          "chinese": "入职引导",
          "pronunciation": "/ˈɔːnbɔːrdɪŋ/",
          "example": "Good onboarding gets a new hire shipping in week one.",
          "category": "process"
        },
        {
          "id": "ss025",
          "english": "knowledge transfer",
          "chinese": "知识移交",
          "pronunciation": "/ˈnɑːlɪdʒ ˈtrænsfɜːr/",
          "example": "Schedule a knowledge transfer session with the new owner.",
          "category": "process"
        },
        {
          "id": "ss026",
          "english": "initiative",
          "chinese": "主动性",
          "pronunciation": "/ɪˈnɪʃətɪv/",
          "example": "She took the initiative and fixed the flaky test herself.",
          "category": "attitude"
        },
        {
          "id": "ss027",
          "english": "accountability",
          "chinese": "担当／问责",
          "pronunciation": "/əˌkaʊntəˈbɪləti/",
          "example": "Ownership means accountability, not just credit.",
          "category": "attitude"
        },
        {
          "id": "ss028",
          "english": "autonomy",
          "chinese": "自主性",
          "pronunciation": "/ɔːˈtɑːnəmi/",
          "example": "Senior engineers get more autonomy over their projects.",
          "category": "attitude"
        },
        {
          "id": "ss029",
          "english": "psychological safety",
          "chinese": "心理安全",
          "pronunciation": "/ˌsaɪkəˈlɑːdʒɪkl ˈseɪfti/",
          "example": "Psychological safety lets juniors challenge seniors in review.",
          "category": "culture"
        },
        {
          "id": "ss030",
          "english": "blameless culture",
          "chinese": "无责文化",
          "pronunciation": "/ˈbleɪmləs ˈkʌltʃər/",
          "example": "In a blameless culture, postmortems fix systems, not people.",
          "category": "culture"
        },
        {
          "id": "ss031",
          "english": "constructive criticism",
          "chinese": "建设性批评",
          "pronunciation": "/kənˈstrʌktɪv ˈkrɪtɪsɪzəm/",
          "example": "Constructive criticism attacks the code, never the coder.",
          "category": "feedback"
        },
        {
          "id": "ss032",
          "english": "feedback loop",
          "chinese": "反馈回路",
          "pronunciation": "/ˈfiːdbæk luːp/",
          "example": "Shorten the feedback loop: deploy to staging on every commit.",
          "category": "feedback"
        },
        {
          "id": "ss033",
          "english": "difficult conversation",
          "chinese": "困难对话",
          "pronunciation": "/ˈdɪfɪkəlt ˌkɑːnvərˈseɪʃən/",
          "example": "Have the difficult conversation now; delaying only makes it worse.",
          "category": "communication"
        },
        {
          "id": "ss034",
          "english": "deliverable",
          "chinese": "交付物",
          "pronunciation": "/dɪˈlɪvərəbl/",
          "example": "The deliverable for this sprint is a working API endpoint.",
          "category": "planning"
        },
        {
          "id": "ss035",
          "english": "commitment",
          "chinese": "承诺",
          "pronunciation": "/kəˈmɪtmənt/",
          "example": "Once we make a commitment, we manage scope, not the date.",
          "category": "management"
        },
        {
          "id": "ss036",
          "english": "capacity planning",
          "chinese": "容量规划",
          "pronunciation": "/kəˈpæsəti ˈplænɪŋ/",
          "example": "Capacity planning says we can staff two projects, not three.",
          "category": "management"
        },
        {
          "id": "ss037",
          "english": "workload",
          "chinese": "工作量／负荷",
          "pronunciation": "/ˈwɜːrkloʊd/",
          "example": "My workload is full until the release — ask me next sprint.",
          "category": "management"
        },
        {
          "id": "ss038",
          "english": "maker's schedule",
          "chinese": "创作者时间表（整块时间）",
          "pronunciation": "/ˈmeɪkərz ˈskedʒuːl/",
          "example": "Meetings shatter the maker's schedule into useless fragments.",
          "category": "productivity"
        },
        {
          "id": "ss039",
          "english": "deep work",
          "chinese": "深度工作",
          "pronunciation": "/diːp wɜːrk/",
          "example": "I block two hours of deep work every morning.",
          "category": "productivity"
        },
        {
          "id": "ss040",
          "english": "focus time",
          "chinese": "专注时间",
          "pronunciation": "/ˈfoʊkəs taɪm/",
          "example": "My calendar shows focus time from 9 to 11 — please don't book it.",
          "category": "productivity"
        },
        {
          "id": "ss041",
          "english": "meeting fatigue",
          "chinese": "会议疲劳",
          "pronunciation": "/ˈmiːtɪŋ fəˈtiːɡ/",
          "example": "Too many syncs cause meeting fatigue and kill actual output.",
          "category": "productivity"
        },
        {
          "id": "ss042",
          "english": "agenda",
          "chinese": "议程",
          "pronunciation": "/əˈdʒendə/",
          "example": "No agenda, no meeting — it's that simple.",
          "category": "meetings"
        },
        {
          "id": "ss043",
          "english": "action item",
          "chinese": "行动项",
          "pronunciation": "/ˈækʃən ˈaɪtəm/",
          "example": "Each meeting ends with owners on every action item.",
          "category": "meetings"
        },
        {
          "id": "ss044",
          "english": "recap",
          "chinese": "总结回顾",
          "pronunciation": "/ˈriːkæp/",
          "example": "Posting a quick recap in the channel keeps everyone aligned.",
          "category": "meetings"
        },
        {
          "id": "ss045",
          "english": "takeaways",
          "chinese": "要点收获",
          "pronunciation": "/ˈteɪkəweɪz/",
          "example": "Key takeaways: ship the fix, then write the postmortem.",
          "category": "meetings"
        },
        {
          "id": "ss046",
          "english": "silo",
          "chinese": "孤岛（部门隔阂）",
          "pronunciation": "/ˈsaɪloʊ/",
          "example": "Data silos mean the mobile team repeats the backend team's mistakes.",
          "category": "culture"
        },
        {
          "id": "ss047",
          "english": "shared understanding",
          "chinese": "共同理解／共识",
          "pronunciation": "/ʃerd ˌʌndərˈstændɪŋ/",
          "example": "The design doc created a shared understanding before any code.",
          "category": "culture"
        },
        {
          "id": "ss048",
          "english": "communication style",
          "chinese": "沟通风格",
          "pronunciation": "/kəˌmjuːnɪˈkeɪʃən staɪl/",
          "example": "Adapt your communication style to the audience.",
          "category": "communication"
        },
        {
          "id": "ss049",
          "english": "written communication",
          "chinese": "书面沟通",
          "pronunciation": "/ˈrɪtən kəˌmjuːnɪˈkeɪʃən/",
          "example": "In a remote team, written communication is the default.",
          "category": "communication"
        },
        {
          "id": "ss050",
          "english": "conflict resolution",
          "chinese": "冲突解决",
          "pronunciation": "/ˈkɑːnflɪkt ˌrezəˈluːʃən/",
          "example": "Good conflict resolution focuses on interests, not positions.",
          "category": "communication"
        }
      ]
    },
    {
      "id": "tech-writing",
      "name": "Technical Writing",
      "nameCN": "技术写作",
      "description": "Documentation types and writing style vocabulary",
      "items": [
        {
          "id": "tw001",
          "english": "documentation",
          "chinese": "文档",
          "pronunciation": "/ˌdɑːkjumenˈteɪʃən/",
          "example": "Good documentation is a feature, not an afterthought.",
          "category": "general"
        },
        {
          "id": "tw002",
          "english": "documentation site",
          "chinese": "文档站点",
          "pronunciation": "/ˌdɑːkjumenˈteɪʃən saɪt/",
          "example": "The documentation site is versioned per release.",
          "category": "general"
        },
        {
          "id": "tw003",
          "english": "tutorial",
          "chinese": "教程",
          "pronunciation": "/tuːˈtɔːriəl/",
          "example": "A tutorial should get the reader to a win in 15 minutes.",
          "category": "doc-types"
        },
        {
          "id": "tw004",
          "english": "how-to guide",
          "chinese": "操作指南",
          "pronunciation": "/ˈhaʊ tuː ɡaɪd/",
          "example": "The how-to guide assumes you already know the basics.",
          "category": "doc-types"
        },
        {
          "id": "tw005",
          "english": "specification",
          "chinese": "规格说明",
          "pronunciation": "/ˌspesɪfɪˈkeɪʃən/",
          "example": "The spec defines the wire format down to the byte.",
          "category": "doc-types"
        },
        {
          "id": "tw006",
          "english": "explanation",
          "chinese": "原理说明",
          "pronunciation": "/ˌekspləˈneɪʃən/",
          "example": "An explanation answers why, not how.",
          "category": "doc-types"
        },
        {
          "id": "tw007",
          "english": "quickstart",
          "chinese": "快速开始",
          "pronunciation": "/ˈkwɪkstɑːrt/",
          "example": "The quickstart should be copy-paste runnable.",
          "category": "doc-types"
        },
        {
          "id": "tw008",
          "english": "prerequisite",
          "chinese": "前置条件",
          "pronunciation": "/priːˈrekwəzɪt/",
          "example": "List the prerequisites at the top of the guide.",
          "category": "structure"
        },
        {
          "id": "tw009",
          "english": "step-by-step",
          "chinese": "分步的",
          "pronunciation": "/step baɪ step/",
          "example": "Give step-by-step instructions with expected output at each step.",
          "category": "structure"
        },
        {
          "id": "tw010",
          "english": "code sample",
          "chinese": "代码示例",
          "pronunciation": "/koʊd ˈsæmpl/",
          "example": "Every code sample must actually compile.",
          "category": "content"
        },
        {
          "id": "tw011",
          "english": "snippet",
          "chinese": "代码片段",
          "pronunciation": "/ˈsnɪpɪt/",
          "example": "Keep the snippet short — link to the full file.",
          "category": "content"
        },
        {
          "id": "tw012",
          "english": "placeholder",
          "chinese": "占位符",
          "pronunciation": "/ˈpleɪshoʊldər/",
          "example": "Replace YOUR_API_KEY with the placeholder from the console.",
          "category": "content"
        },
        {
          "id": "tw013",
          "english": "boilerplate",
          "chinese": "样板文字／代码",
          "pronunciation": "/ˈbɔɪlərpleɪt/",
          "example": "Hide the boilerplate so the key logic stands out.",
          "category": "content"
        },
        {
          "id": "tw014",
          "english": "caveat",
          "chinese": "注意事项",
          "pronunciation": "/ˈkæviæt/",
          "example": "One caveat: this only works on Linux.",
          "category": "content"
        },
        {
          "id": "tw015",
          "english": "gotcha",
          "chinese": "坑／易错点",
          "pronunciation": "/ˈɡɑːtʃə/",
          "example": "The docs have a whole section on common gotchas.",
          "category": "content"
        },
        {
          "id": "tw016",
          "english": "callout",
          "chinese": "提示框（警示块）",
          "pronunciation": "/ˈkɔːlaʊt/",
          "example": "Put the deprecation warning in a callout box.",
          "category": "structure"
        },
        {
          "id": "tw017",
          "english": "TL;DR",
          "chinese": "太长不看版／摘要",
          "pronunciation": "/ˌtiː el ˌdiː ɑːr/",
          "example": "Start long docs with a TL;DR for busy readers.",
          "category": "structure"
        },
        {
          "id": "tw018",
          "english": "table of contents",
          "chinese": "目录",
          "pronunciation": "/ˈteɪbl əv ˈkɑːntents/",
          "example": "Auto-generate the table of contents from the headings.",
          "category": "structure"
        },
        {
          "id": "tw019",
          "english": "release note",
          "chinese": "发布说明",
          "pronunciation": "/rɪˈliːs noʊt/",
          "example": "Write release notes users actually care about.",
          "category": "doc-types"
        },
        {
          "id": "tw020",
          "english": "glossary",
          "chinese": "术语表",
          "pronunciation": "/ˈɡlɔːsəri/",
          "example": "Add new jargon to the glossary, not a footnote.",
          "category": "doc-types"
        },
        {
          "id": "tw021",
          "english": "style guide",
          "chinese": "风格指南",
          "pronunciation": "/staɪl ɡaɪd/",
          "example": "Follow the Microsoft style guide for UI text.",
          "category": "style"
        },
        {
          "id": "tw022",
          "english": "tone",
          "chinese": "语气",
          "pronunciation": "/toʊn/",
          "example": "Keep the tone friendly but precise.",
          "category": "style"
        },
        {
          "id": "tw023",
          "english": "active voice",
          "chinese": "主动语态",
          "pronunciation": "/ˈæktɪv vɔɪs/",
          "example": "Prefer active voice: 'the server sends', not 'it is sent'.",
          "category": "style"
        },
        {
          "id": "tw024",
          "english": "passive voice",
          "chinese": "被动语态",
          "pronunciation": "/ˈpæsɪv vɔɪs/",
          "example": "Passive voice hides who is responsible for the action.",
          "category": "style"
        },
        {
          "id": "tw025",
          "english": "second person",
          "chinese": "第二人称（用“你”）",
          "pronunciation": "/ˈsekənd ˈpɜːrsən/",
          "example": "Address the reader in the second person: 'you will see…'.",
          "category": "style"
        },
        {
          "id": "tw026",
          "english": "present tense",
          "chinese": "一般现在时",
          "pronunciation": "/ˈprezənt tens/",
          "example": "Write instructions in the present tense: 'click Save'.",
          "category": "style"
        },
        {
          "id": "tw027",
          "english": "concise",
          "chinese": "简洁的",
          "pronunciation": "/kənˈsaɪs/",
          "example": "Be concise: cut every word that doesn't earn its place.",
          "category": "style"
        },
        {
          "id": "tw028",
          "english": "jargon",
          "chinese": "行话／术语",
          "pronunciation": "/ˈdʒɑːrɡən/",
          "example": "Explain jargon on first use or drop it.",
          "category": "style"
        },
        {
          "id": "tw029",
          "english": "plain language",
          "chinese": "平实语言",
          "pronunciation": "/pleɪn ˈlæŋɡwɪdʒ/",
          "example": "Plain language beats clever language in documentation.",
          "category": "style"
        },
        {
          "id": "tw030",
          "english": "readability",
          "chinese": "可读性",
          "pronunciation": "/ˌriːdəˈbɪləti/",
          "example": "Short sentences improve readability scores.",
          "category": "style"
        },
        {
          "id": "tw031",
          "english": "proofread",
          "chinese": "校对",
          "pronunciation": "/ˈpruːfriːd/",
          "example": "Always proofread before publishing — typos erode trust.",
          "category": "editing"
        },
        {
          "id": "tw032",
          "english": "errata",
          "chinese": "勘误",
          "pronunciation": "/eˈrɑːtə/",
          "example": "The errata page lists mistakes found after printing.",
          "category": "editing"
        },
        {
          "id": "tw033",
          "english": "grammar",
          "chinese": "语法",
          "pronunciation": "/ˈɡræmər/",
          "example": "Perfect grammar matters less than perfect clarity.",
          "category": "editing"
        },
        {
          "id": "tw034",
          "english": "punctuation",
          "chinese": "标点",
          "pronunciation": "/ˌpʌŋktʃuˈeɪʃən/",
          "example": "In tech writing, punctuation is part of the interface.",
          "category": "editing"
        },
        {
          "id": "tw035",
          "english": "versioned docs",
          "chinese": "版本化文档",
          "pronunciation": "/ˈvɜːrʒənd dɑːks/",
          "example": "Versioned docs let v1 users avoid v2-only features.",
          "category": "process"
        },
        {
          "id": "tw036",
          "english": "canonical URL",
          "chinese": "规范链接",
          "pronunciation": "/kəˈnɑːnɪkl ˌjuː ɑːr ˈel/",
          "example": "Point all mirrors at the canonical URL to avoid SEO splits.",
          "category": "process"
        },
        {
          "id": "tw037",
          "english": "deprecation notice",
          "chinese": "弃用通告",
          "pronunciation": "/ˌdeprəˈkeɪʃən ˈnoʊtɪs/",
          "example": "The deprecation notice includes a migration deadline.",
          "category": "process"
        },
        {
          "id": "tw038",
          "english": "migration guide",
          "chinese": "迁移指南",
          "pronunciation": "/maɪˈɡreɪʃən ɡaɪd/",
          "example": "Every breaking release ships with a migration guide.",
          "category": "process"
        },
        {
          "id": "tw039",
          "english": "FAQ",
          "chinese": "常见问题",
          "pronunciation": "/ˌef eɪ ˈkjuː/",
          "example": "Move recurring support tickets into the FAQ.",
          "category": "doc-types"
        },
        {
          "id": "tw040",
          "english": "known issue",
          "chinese": "已知问题",
          "pronunciation": "/noʊn ˈɪʃuː/",
          "example": "List it as a known issue with a workaround.",
          "category": "doc-types"
        },
        {
          "id": "tw041",
          "english": "disclaimer",
          "chinese": "免责声明",
          "pronunciation": "/dɪsˈkleɪmər/",
          "example": "The benchmark page carries a disclaimer about test conditions.",
          "category": "doc-types"
        },
        {
          "id": "tw042",
          "english": "attribution",
          "chinese": "署名／来源标注",
          "pronunciation": "/ˌætrɪˈbjuːʃən/",
          "example": "CC-BY requires attribution to the original author.",
          "category": "licensing"
        },
        {
          "id": "tw043",
          "english": "footnote",
          "chinese": "脚注",
          "pronunciation": "/ˈfʊtnoʊt/",
          "example": "Move the tangent into a footnote to protect the main flow.",
          "category": "structure"
        },
        {
          "id": "tw044",
          "english": "cross-reference",
          "chinese": "交叉引用",
          "pronunciation": "/krɔːs ˈrefrəns/",
          "example": "Use cross-references instead of repeating the same content.",
          "category": "structure"
        },
        {
          "id": "tw045",
          "english": "anchor",
          "chinese": "锚点",
          "pronunciation": "/ˈæŋkər/",
          "example": "Link directly to the anchor of the relevant section.",
          "category": "structure"
        },
        {
          "id": "tw046",
          "english": "screenshot",
          "chinese": "截图",
          "pronunciation": "/ˈskriːnʃɑːt/",
          "example": "Update the screenshot after the UI redesign.",
          "category": "visuals"
        },
        {
          "id": "tw047",
          "english": "diagram",
          "chinese": "示意图",
          "pronunciation": "/ˈdaɪəɡræm/",
          "example": "One architecture diagram replaces three paragraphs.",
          "category": "visuals"
        },
        {
          "id": "tw048",
          "english": "sequence diagram",
          "chinese": "时序图",
          "pronunciation": "/ˈsiːkwəns ˈdaɪəɡræm/",
          "example": "The sequence diagram shows the OAuth handshake step by step.",
          "category": "visuals"
        },
        {
          "id": "tw049",
          "english": "ASCII art",
          "chinese": "字符画",
          "pronunciation": "/ˈæski ɑːrt/",
          "example": "ASCII art diagrams survive any terminal and any diff.",
          "category": "visuals"
        },
        {
          "id": "tw050",
          "english": "commit message",
          "chinese": "提交信息",
          "pronunciation": "/kəˈmɪt ˈmesɪdʒ/",
          "example": "A good commit message explains why, not what.",
          "category": "general"
        }
      ]
    },
    {
      "id": "interview-english",
      "name": "Interview English",
      "nameCN": "面试英语",
      "description": "Technical and behavioral interview vocabulary",
      "items": [
        {
          "id": "iv001",
          "english": "walk me through",
          "chinese": "请带我梳理一遍",
          "pronunciation": "/wɔːk miː θruː/",
          "example": "Walk me through how you'd design this system.",
          "category": "phrases"
        },
        {
          "id": "iv002",
          "english": "tell me about yourself",
          "chinese": "请自我介绍",
          "pronunciation": "/tel miː əˈbaʊt jɔːrˈself/",
          "example": "Tell me about yourself — keep it to two minutes.",
          "category": "phrases"
        },
        {
          "id": "iv003",
          "english": "behavioral question",
          "chinese": "行为面试题",
          "pronunciation": "/bɪˈheɪvjərəl ˈkwestʃən/",
          "example": "Behavioral questions probe how you acted in real situations.",
          "category": "types"
        },
        {
          "id": "iv004",
          "english": "STAR method",
          "chinese": "STAR 叙事法",
          "pronunciation": "/stɑːr ˈmeθəd/",
          "example": "Answer with the STAR method: Situation, Task, Action, Result.",
          "category": "types"
        },
        {
          "id": "iv005",
          "english": "situational question",
          "chinese": "情境题",
          "pronunciation": "/ˌsɪtʃuˈeɪʃənəl ˈkwestʃən/",
          "example": "Situational questions ask what you would do, hypothetically.",
          "category": "types"
        },
        {
          "id": "iv006",
          "english": "technical screen",
          "chinese": "技术初筛",
          "pronunciation": "/ˈteknɪkl skriːn/",
          "example": "The technical screen is a 60-minute coding call.",
          "category": "process"
        },
        {
          "id": "iv007",
          "english": "coding round",
          "chinese": "编程轮",
          "pronunciation": "/ˈkoʊdɪŋ raʊnd/",
          "example": "The coding round covers data structures and algorithms.",
          "category": "process"
        },
        {
          "id": "iv008",
          "english": "system design",
          "chinese": "系统设计（面试）",
          "pronunciation": "/ˈsɪstəm dɪˈzaɪn/",
          "example": "In system design interviews, clarify requirements before drawing boxes.",
          "category": "process"
        },
        {
          "id": "iv009",
          "english": "onsite interview",
          "chinese": "现场面试",
          "pronunciation": "/ˈɑːnsaɪt ˈɪntərvjuː/",
          "example": "The onsite interview has four rounds back to back.",
          "category": "process"
        },
        {
          "id": "iv010",
          "english": "phone screen",
          "chinese": "电话初筛",
          "pronunciation": "/foʊn skriːn/",
          "example": "The recruiter does a 15-minute phone screen first.",
          "category": "process"
        },
        {
          "id": "iv011",
          "english": "recruiter",
          "chinese": "招聘官",
          "pronunciation": "/rɪˈkruːtər/",
          "example": "The recruiter will call you with the offer details.",
          "category": "people"
        },
        {
          "id": "iv012",
          "english": "hiring manager",
          "chinese": "用人经理",
          "pronunciation": "/ˈhaɪrɪŋ ˈmænɪdʒər/",
          "example": "The hiring manager cares most about team fit and ownership.",
          "category": "people"
        },
        {
          "id": "iv013",
          "english": "panel interview",
          "chinese": "多考官面试",
          "pronunciation": "/ˈpænl ˈɪntərvjuː/",
          "example": "The panel interview had three engineers and a manager.",
          "category": "process"
        },
        {
          "id": "iv014",
          "english": "whiteboarding",
          "chinese": "白板演算",
          "pronunciation": "/ˈwaɪtbɔːrdɪŋ/",
          "example": "Whiteboarding tests how you think, not just the final answer.",
          "category": "process"
        },
        {
          "id": "iv015",
          "english": "take-home assignment",
          "chinese": "带回家作业",
          "pronunciation": "/teɪk hoʊm əˈsaɪnmənt/",
          "example": "The take-home assignment is capped at four hours.",
          "category": "process"
        },
        {
          "id": "iv016",
          "english": "portfolio",
          "chinese": "作品集",
          "pronunciation": "/pɔːrtˈfoʊlioʊ/",
          "example": "Your portfolio should show depth, not just volume.",
          "category": "application"
        },
        {
          "id": "iv017",
          "english": "resume",
          "chinese": "简历",
          "pronunciation": "/ˈrezəmeɪ/",
          "example": "Tailor your resume to the job description's keywords.",
          "category": "application"
        },
        {
          "id": "iv018",
          "english": "cover letter",
          "chinese": "求职信",
          "pronunciation": "/ˈkʌvər ˈletər/",
          "example": "A short cover letter should say why this company, why now.",
          "category": "application"
        },
        {
          "id": "iv019",
          "english": "screening call",
          "chinese": "初筛电话",
          "pronunciation": "/ˈskriːnɪŋ kɔːl/",
          "example": "The screening call covers salary expectations and logistics.",
          "category": "process"
        },
        {
          "id": "iv020",
          "english": "culture fit",
          "chinese": "文化契合",
          "pronunciation": "/ˈkʌltʃər fɪt/",
          "example": "Culture fit questions check how you collaborate, not if you'd be fun at lunch.",
          "category": "types"
        },
        {
          "id": "iv021",
          "english": "elevator pitch",
          "chinese": "电梯陈述",
          "pronunciation": "/ˈelɪveɪtər pɪtʃ/",
          "example": "Your elevator pitch should land in 30 seconds.",
          "category": "phrases"
        },
        {
          "id": "iv022",
          "english": "strengths and weaknesses",
          "chinese": "优势与不足",
          "pronunciation": "/streŋθs ænd ˈwiːknəsɪz/",
          "example": "For weaknesses, name a real one and how you're fixing it.",
          "category": "phrases"
        },
        {
          "id": "iv023",
          "english": "conflict",
          "chinese": "冲突",
          "pronunciation": "/ˈkɑːnflɪkt/",
          "example": "Tell me about a conflict with a teammate and how you resolved it.",
          "category": "behavioral"
        },
        {
          "id": "iv024",
          "english": "disagreement",
          "chinese": "分歧",
          "pronunciation": "/ˌdɪsəˈɡriːmənt/",
          "example": "Describe a technical disagreement where you changed your mind.",
          "category": "behavioral"
        },
        {
          "id": "iv025",
          "english": "trade-off",
          "chinese": "权衡取舍",
          "pronunciation": "/ˈtreɪd ɔːf/",
          "example": "Every design answer should name its trade-offs.",
          "category": "technical"
        },
        {
          "id": "iv026",
          "english": "requirement clarification",
          "chinese": "需求澄清",
          "pronunciation": "/rɪˈkwaɪərmənt ˌklærɪfɪˈkeɪʃən/",
          "example": "Start the design round with requirement clarification.",
          "category": "technical"
        },
        {
          "id": "iv027",
          "english": "back-of-envelope calculation",
          "chinese": "粗略估算",
          "pronunciation": "/bæk əv ˈenveloʊp ˌkælkjuˈleɪʃən/",
          "example": "Do a back-of-envelope calculation: 10M writes per day is ~115 per second.",
          "category": "technical"
        },
        {
          "id": "iv028",
          "english": "think out loud",
          "chinese": "边想边说",
          "pronunciation": "/θɪŋk aʊt laʊd/",
          "example": "Think out loud so the interviewer can follow your reasoning.",
          "category": "phrases"
        },
        {
          "id": "iv029",
          "english": "rationale",
          "chinese": "理由／依据",
          "pronunciation": "/ˌræʃəˈnæl/",
          "example": "Explain your rationale for choosing a queue over a database.",
          "category": "technical"
        },
        {
          "id": "iv030",
          "english": "assumption",
          "chinese": "假设",
          "pronunciation": "/əˈsʌmpʃən/",
          "example": "State your assumptions before estimating.",
          "category": "technical"
        },
        {
          "id": "iv031",
          "english": "brute force",
          "chinese": "暴力解法",
          "pronunciation": "/bruːt fɔːrs/",
          "example": "Start with the brute force solution, then optimize.",
          "category": "technical"
        },
        {
          "id": "iv032",
          "english": "optimal solution",
          "chinese": "最优解",
          "pronunciation": "/ˈɑːptɪməl səˈluːʃən/",
          "example": "The optimal solution runs in linear time.",
          "category": "technical"
        },
        {
          "id": "iv033",
          "english": "naive solution",
          "chinese": "朴素解法",
          "pronunciation": "/naɪˈiːv səˈluːʃən/",
          "example": "The naive solution is correct but O(n²).",
          "category": "technical"
        },
        {
          "id": "iv034",
          "english": "clarifying question",
          "chinese": "澄清性问题",
          "pronunciation": "/ˈklærɪfaɪɪŋ ˈkwestʃən/",
          "example": "Asking a good clarifying question scores points in itself.",
          "category": "phrases"
        },
        {
          "id": "iv035",
          "english": "impact",
          "chinese": "影响力／成果",
          "pronunciation": "/ˈɪmpækt/",
          "example": "Describe your impact with numbers: latency down 40%.",
          "category": "behavioral"
        },
        {
          "id": "iv036",
          "english": "quantify",
          "chinese": "量化",
          "pronunciation": "/ˈkwɑːntɪfaɪ/",
          "example": "Quantify your achievements — 'improved performance' means nothing alone.",
          "category": "behavioral"
        },
        {
          "id": "iv037",
          "english": "measurable results",
          "chinese": "可衡量的成果",
          "pronunciation": "/ˈmeʒərəbl rɪˈzʌlts/",
          "example": "Interviewers remember measurable results, not tasks.",
          "category": "behavioral"
        },
        {
          "id": "iv038",
          "english": "negotiation",
          "chinese": "谈判（薪酬）",
          "pronunciation": "/nɪˌɡoʊʃiˈeɪʃən/",
          "example": "Salary negotiation is expected, not rude.",
          "category": "offer"
        },
        {
          "id": "iv039",
          "english": "offer",
          "chinese": "录用通知",
          "pronunciation": "/ˈɔːfər/",
          "example": "I received an offer from the platform team.",
          "category": "offer"
        },
        {
          "id": "iv040",
          "english": "compensation package",
          "chinese": "薪酬方案",
          "pronunciation": "/ˌkɑːmpenˈseɪʃən ˈpækɪdʒ/",
          "example": "Evaluate the whole compensation package, not just base salary.",
          "category": "offer"
        },
        {
          "id": "iv041",
          "english": "sign-on bonus",
          "chinese": "签约奖金",
          "pronunciation": "/ˈsaɪn ɔːn ˈboʊnəs/",
          "example": "They added a sign-on bonus to offset my unvested equity.",
          "category": "offer"
        },
        {
          "id": "iv042",
          "english": "equity",
          "chinese": "股权",
          "pronunciation": "/ˈekwəti/",
          "example": "The equity vests over four years with a one-year cliff.",
          "category": "offer"
        },
        {
          "id": "iv043",
          "english": "counteroffer",
          "chinese": "反报价",
          "pronunciation": "/ˈkaʊntərˌɔːfər/",
          "example": "I made a counteroffer based on competing market data.",
          "category": "offer"
        },
        {
          "id": "iv044",
          "english": "notice period",
          "chinese": "离职通知期",
          "pronunciation": "/ˈnoʊtɪs ˈpɪriəd/",
          "example": "I have a one-month notice period at my current job.",
          "category": "offer"
        },
        {
          "id": "iv045",
          "english": "background check",
          "chinese": "背景调查",
          "pronunciation": "/ˈbækɡraʊnd tʃek/",
          "example": "The background check takes about a week.",
          "category": "offer"
        },
        {
          "id": "iv046",
          "english": "reference check",
          "chinese": "推荐人核查",
          "pronunciation": "/ˈrefrəns tʃek/",
          "example": "They'll do a reference check with your previous manager.",
          "category": "offer"
        },
        {
          "id": "iv047",
          "english": "follow-up question",
          "chinese": "追问",
          "pronunciation": "/ˈfɑːloʊ ʌp ˈkwestʃən/",
          "example": "Expect follow-up questions that dig into your specific role.",
          "category": "phrases"
        },
        {
          "id": "iv048",
          "english": "rejection",
          "chinese": "拒信／被拒",
          "pronunciation": "/rɪˈdʒekʃən/",
          "example": "A rejection after five rounds still stings.",
          "category": "process"
        },
        {
          "id": "iv049",
          "english": "ghosting",
          "chinese": "失联（已读不回）",
          "pronunciation": "/ˈɡoʊstɪŋ/",
          "example": "After the final round, the company started ghosting me.",
          "category": "process"
        },
        {
          "id": "iv050",
          "english": "salary expectations",
          "chinese": "期望薪资",
          "pronunciation": "/ˈsæləri ˌekspekˈteɪʃənz/",
          "example": "Ask about the band first before stating salary expectations.",
          "category": "offer"
        }
      ]
    },
    {
      "id": "career-development",
      "name": "Career Development",
      "nameCN": "职业发展",
      "description": "Growth, roles and workplace culture vocabulary",
      "items": [
        {
          "id": "cd001",
          "english": "career ladder",
          "chinese": "职级阶梯",
          "pronunciation": "/kəˈrɪr ˈlædər/",
          "example": "Read the career ladder before your promotion packet.",
          "category": "growth"
        },
        {
          "id": "cd002",
          "english": "promotion",
          "chinese": "晋升",
          "pronunciation": "/prəˈmoʊʃən/",
          "example": "The promotion requires impact beyond your own team.",
          "category": "growth"
        },
        {
          "id": "cd003",
          "english": "performance review",
          "chinese": "绩效评估",
          "pronunciation": "/pərˈfɔːrməns rɪˈvjuː/",
          "example": "Bring evidence to your performance review, not adjectives.",
          "category": "review"
        },
        {
          "id": "cd004",
          "english": "peer feedback",
          "chinese": "同事互评",
          "pronunciation": "/pɪr ˈfiːdbæk/",
          "example": "Peer feedback carries real weight in the calibration.",
          "category": "review"
        },
        {
          "id": "cd005",
          "english": "self-assessment",
          "chinese": "自评",
          "pronunciation": "/self əˈsesmənt/",
          "example": "Write your self-assessment in outcomes, not activities.",
          "category": "review"
        },
        {
          "id": "cd006",
          "english": "goal setting",
          "chinese": "目标制定",
          "pronunciation": "/ɡoʊl ˈsetɪŋ/",
          "example": "Quarterly goal setting keeps priorities visible.",
          "category": "review"
        },
        {
          "id": "cd007",
          "english": "OKR",
          "chinese": "目标与关键成果",
          "pronunciation": "/ˌoʊ keɪ ˈɑːr/",
          "example": "Our OKR is 99.9% uptime with a 20% latency cut.",
          "category": "review"
        },
        {
          "id": "cd008",
          "english": "KPI",
          "chinese": "关键绩效指标",
          "pronunciation": "/ˌkeɪ piː ˈaɪ/",
          "example": "Pick KPIs you can actually influence.",
          "category": "review"
        },
        {
          "id": "cd009",
          "english": "one-on-one",
          "chinese": "一对一沟通",
          "pronunciation": "/wʌn ɒn wʌn/",
          "example": "Use the one-on-one for career talk, not status updates.",
          "category": "management"
        },
        {
          "id": "cd010",
          "english": "skip-level meeting",
          "chinese": "越级会议",
          "pronunciation": "/skɪp ˈlevl ˈmiːtɪŋ/",
          "example": "The skip-level meeting gives your manager's manager direct signal.",
          "category": "management"
        },
        {
          "id": "cd011",
          "english": "360-degree feedback",
          "chinese": "360 度反馈",
          "pronunciation": "/θriː ˈsɪksti ˌdɪɡriː ˈfiːdbæk/",
          "example": "360-degree feedback surfaces blind spots early.",
          "category": "review"
        },
        {
          "id": "cd012",
          "english": "mentor",
          "chinese": "导师",
          "pronunciation": "/ˈmentɔːr/",
          "example": "Find a mentor who's two steps ahead of where you want to be.",
          "category": "growth"
        },
        {
          "id": "cd013",
          "english": "mentee",
          "chinese": "学员／被辅导者",
          "pronunciation": "/menˈtiː/",
          "example": "Being a good mentee means coming prepared with questions.",
          "category": "growth"
        },
        {
          "id": "cd014",
          "english": "sponsorship",
          "chinese": "提携（为你发声）",
          "pronunciation": "/ˈspɑːnsərʃɪp/",
          "example": "A mentor advises you; sponsorship gets you the promotion.",
          "category": "growth"
        },
        {
          "id": "cd015",
          "english": "career switch",
          "chinese": "转行",
          "pronunciation": "/kəˈrɪr swɪtʃ/",
          "example": "Her career switch from QA to SRE took about a year.",
          "category": "growth"
        },
        {
          "id": "cd016",
          "english": "upskilling",
          "chinese": "技能提升",
          "pronunciation": "/ˈʌpskɪlɪŋ/",
          "example": "The company funds upskilling in cloud certification.",
          "category": "learning"
        },
        {
          "id": "cd017",
          "english": "reskilling",
          "chinese": "技能重塑（转岗培训）",
          "pronunciation": "/ˌriːˈskɪlɪŋ/",
          "example": "Reskilling the QA team into automation engineers worked well.",
          "category": "learning"
        },
        {
          "id": "cd018",
          "english": "continuous learning",
          "chinese": "持续学习",
          "pronunciation": "/kənˈtɪnjuəs ˈlɜːrnɪŋ/",
          "example": "Continuous learning is survival in this industry.",
          "category": "learning"
        },
        {
          "id": "cd019",
          "english": "conference",
          "chinese": "技术大会",
          "pronunciation": "/ˈkɑːnfərəns/",
          "example": "Submit a talk to the conference before dismissing the idea.",
          "category": "community"
        },
        {
          "id": "cd020",
          "english": "tech talk",
          "chinese": "技术分享",
          "pronunciation": "/tek tɔːk/",
          "example": "Give a tech talk on what your team learned from the outage.",
          "category": "community"
        },
        {
          "id": "cd021",
          "english": "lightning talk",
          "chinese": "闪电演讲",
          "pronunciation": "/ˈlaɪtnɪŋ tɔːk/",
          "example": "A lightning talk is five minutes and one idea.",
          "category": "community"
        },
        {
          "id": "cd022",
          "english": "open source contribution",
          "chinese": "开源贡献",
          "pronunciation": "/ˈoʊpən sɔːrs ˌkɑːntrɪˈbjuːʃən/",
          "example": "One meaningful open source contribution beats ten toy repos.",
          "category": "community"
        },
        {
          "id": "cd023",
          "english": "side project",
          "chinese": "副业项目",
          "pronunciation": "/saɪd ˈprɑːdʒekt/",
          "example": "The side project became the portfolio piece that got her hired.",
          "category": "community"
        },
        {
          "id": "cd024",
          "english": "pet project",
          "chinese": "兴趣项目",
          "pronunciation": "/pet ˈprɑːdʒekt/",
          "example": "My pet project is a CLI for tracking reading lists.",
          "category": "community"
        },
        {
          "id": "cd025",
          "english": "personal brand",
          "chinese": "个人品牌",
          "pronunciation": "/ˈpɜːrsənəl brænd/",
          "example": "Consistent writing builds a personal brand faster than any course.",
          "category": "community"
        },
        {
          "id": "cd026",
          "english": "technical blog",
          "chinese": "技术博客",
          "pronunciation": "/ˈteknɪkl blɔːɡ/",
          "example": "A technical blog is proof you can explain hard things.",
          "category": "community"
        },
        {
          "id": "cd027",
          "english": "public speaking",
          "chinese": "公开演讲",
          "pronunciation": "/ˈpʌblɪk ˈspiːkɪŋ/",
          "example": "Public speaking is a skill you build by reps, not talent.",
          "category": "community"
        },
        {
          "id": "cd028",
          "english": "impostor syndrome",
          "chinese": "冒名顶替综合征",
          "pronunciation": "/ɪmˈpɑːstər ˈsɪndroʊm/",
          "example": "Impostor syndrome fades as you accumulate evidence of competence.",
          "category": "wellbeing"
        },
        {
          "id": "cd029",
          "english": "burnout",
          "chinese": "职业倦怠",
          "pronunciation": "/ˈbɜːrnaʊt/",
          "example": "Burnout is a signal to fix the system, not just take a vacation.",
          "category": "wellbeing"
        },
        {
          "id": "cd030",
          "english": "work-life balance",
          "chinese": "工作生活平衡",
          "pronunciation": "/wɜːrk laɪf ˈbæləns/",
          "example": "Sustainable pace beats heroics; that's work-life balance.",
          "category": "wellbeing"
        },
        {
          "id": "cd031",
          "english": "remote work",
          "chinese": "远程工作",
          "pronunciation": "/rɪˈmoʊt wɜːrk/",
          "example": "Remote work trades commutes for communication overhead.",
          "category": "workstyle"
        },
        {
          "id": "cd032",
          "english": "hybrid work",
          "chinese": "混合办公",
          "pronunciation": "/ˈhaɪbrɪd wɜːrk/",
          "example": "Hybrid work needs anchor days so the office trip is worth it.",
          "category": "workstyle"
        },
        {
          "id": "cd033",
          "english": "asynchronous work",
          "chinese": "异步协作",
          "pronunciation": "/eɪˈsɪŋkrənəs wɜːrk/",
          "example": "Asynchronous work makes writing your core skill.",
          "category": "workstyle"
        },
        {
          "id": "cd034",
          "english": "time zone overlap",
          "chinese": "时区重叠",
          "pronunciation": "/taɪm zoʊn ˈoʊvərlæp/",
          "example": "We keep four hours of time zone overlap for pairing.",
          "category": "workstyle"
        },
        {
          "id": "cd035",
          "english": "documentation-first",
          "chinese": "文档先行",
          "pronunciation": "/ˌdɑːkjumenˈteɪʃən fɜːrst/",
          "example": "Documentation-first companies decide in writing, then meet.",
          "category": "workstyle"
        },
        {
          "id": "cd036",
          "english": "knowledge sharing",
          "chinese": "知识分享",
          "pronunciation": "/ˈnɑːlɪdʒ ˈʃerɪŋ/",
          "example": "Weekly demos keep knowledge sharing alive.",
          "category": "culture"
        },
        {
          "id": "cd037",
          "english": "brown-bag session",
          "chinese": "午餐学习会",
          "pronunciation": "/braʊn bæɡ ˈseʃən/",
          "example": "Thursday's brown-bag session covers WebAssembly basics.",
          "category": "culture"
        },
        {
          "id": "cd038",
          "english": "guild",
          "chinese": "行会（跨团队社区）",
          "pronunciation": "/ɡɪld/",
          "example": "The frontend guild sets shared standards across squads.",
          "category": "culture"
        },
        {
          "id": "cd039",
          "english": "community of practice",
          "chinese": "实践社区",
          "pronunciation": "/kəˈmjuːnəti əv ˈpræktɪs/",
          "example": "The SRE community of practice owns the incident guide.",
          "category": "culture"
        },
        {
          "id": "cd040",
          "english": "engineering culture",
          "chinese": "工程文化",
          "pronunciation": "/ˌendʒɪˈnɪrɪŋ ˈkʌltʃər/",
          "example": "Engineering culture is what happens when the manager isn't looking.",
          "category": "culture"
        },
        {
          "id": "cd041",
          "english": "tech lead",
          "chinese": "技术负责人",
          "pronunciation": "/tek liːd/",
          "example": "The tech lead spends half the time unblocking others.",
          "category": "roles"
        },
        {
          "id": "cd042",
          "english": "staff engineer",
          "chinese": "资深主管工程师",
          "pronunciation": "/stæf ˌendʒɪˈnɪr/",
          "example": "A staff engineer multiplies the output of several teams.",
          "category": "roles"
        },
        {
          "id": "cd043",
          "english": "principal engineer",
          "chinese": "首席工程师",
          "pronunciation": "/ˈprɪnsəpl ˌendʒɪˈnɪr/",
          "example": "The principal engineer owns multi-year technical direction.",
          "category": "roles"
        },
        {
          "id": "cd044",
          "english": "people manager",
          "chinese": "线经理（管人）",
          "pronunciation": "/ˈpiːpl ˈmænɪdʒər/",
          "example": "You can switch from IC to people manager and back.",
          "category": "roles"
        },
        {
          "id": "cd045",
          "english": "individual contributor",
          "chinese": "个人贡献者（IC）",
          "pronunciation": "/ˌɪndɪˈvɪdʒuəl kənˈtrɪbjətər/",
          "example": "Individual contributor tracks now reach staff and principal levels.",
          "category": "roles"
        },
        {
          "id": "cd046",
          "english": "management track",
          "chinese": "管理路线",
          "pronunciation": "/ˈmænɪdʒmənt træk/",
          "example": "The management track trades coding time for context and coaching.",
          "category": "roles"
        },
        {
          "id": "cd047",
          "english": "technical track",
          "chinese": "技术路线",
          "pronunciation": "/ˈteknɪkl træk/",
          "example": "The technical track rewards depth and influence without reports.",
          "category": "roles"
        },
        {
          "id": "cd048",
          "english": "succession plan",
          "chinese": "接班计划",
          "pronunciation": "/səkˈseʃən plæn/",
          "example": "A succession plan means no one is a single point of failure.",
          "category": "management"
        },
        {
          "id": "cd049",
          "english": "career plateau",
          "chinese": "职业平台期",
          "pronunciation": "/kəˈrɪr plæˈtoʊ/",
          "example": "A career plateau is often a scope problem, not a skill problem.",
          "category": "growth"
        },
        {
          "id": "cd050",
          "english": "90-day plan",
          "chinese": "入职 90 天计划",
          "pronunciation": "/naɪnti deɪ plæn/",
          "example": "A 90-day plan: learn in month one, contribute in month two, own in month three.",
          "category": "growth"
        }
      ]
    },
    {
      "id": "data-engineering",
      "name": "Data Engineering",
      "nameCN": "数据工程",
      "description": "Pipelines, streaming and data platform vocabulary",
      "items": [
        {
          "id": "de001",
          "english": "ETL",
          "chinese": "抽取-转换-加载",
          "pronunciation": "/ˌiː tiː ˈel/",
          "example": "The nightly ETL job loads yesterday's orders into the warehouse.",
          "category": "pipeline"
        },
        {
          "id": "de002",
          "english": "ELT",
          "chinese": "抽取-加载-转换",
          "pronunciation": "/ˌiː el ˈtiː/",
          "example": "With ELT, raw data lands first and transforms run inside the warehouse.",
          "category": "pipeline"
        },
        {
          "id": "de003",
          "english": "data pipeline",
          "chinese": "数据管道",
          "pronunciation": "/ˈdeɪtə ˈpaɪplaɪn/",
          "example": "The data pipeline broke upstream, so today's dashboard is stale.",
          "category": "pipeline"
        },
        {
          "id": "de004",
          "english": "data warehouse",
          "chinese": "数据仓库",
          "pronunciation": "/ˈdeɪtə ˈwerhaʊs/",
          "example": "The data warehouse powers all analyst queries.",
          "category": "storage"
        },
        {
          "id": "de005",
          "english": "data lake",
          "chinese": "数据湖",
          "pronunciation": "/ˈdeɪtə leɪk/",
          "example": "Dump everything raw into the data lake; sort it out later.",
          "category": "storage"
        },
        {
          "id": "de006",
          "english": "data lakehouse",
          "chinese": "湖仓一体",
          "pronunciation": "/ˈdeɪtə ˈleɪkhaʊs/",
          "example": "A lakehouse combines lake flexibility with warehouse performance.",
          "category": "storage"
        },
        {
          "id": "de007",
          "english": "data mart",
          "chinese": "数据集市",
          "pronunciation": "/ˈdeɪtə mɑːrt/",
          "example": "The finance data mart only serves finance analysts.",
          "category": "storage"
        },
        {
          "id": "de008",
          "english": "staging area",
          "chinese": "暂存区",
          "pronunciation": "/ˈsteɪdʒɪŋ ˈeriə/",
          "example": "Files land in the staging area before validation.",
          "category": "pipeline"
        },
        {
          "id": "de009",
          "english": "ingestion",
          "chinese": "数据摄取",
          "pronunciation": "/ɪnˈdʒestʃən/",
          "example": "We have three ingestion paths: batch, CDC and streaming.",
          "category": "pipeline"
        },
        {
          "id": "de010",
          "english": "batch processing",
          "chinese": "批处理",
          "pronunciation": "/bætʃ ˈprɑːsesɪŋ/",
          "example": "Batch processing is cheaper but adds a day of delay.",
          "category": "processing"
        },
        {
          "id": "de011",
          "english": "stream processing",
          "chinese": "流处理",
          "pronunciation": "/striːm ˈprɑːsesɪŋ/",
          "example": "Stream processing alerts on anomalies within seconds.",
          "category": "processing"
        },
        {
          "id": "de012",
          "english": "real-time analytics",
          "chinese": "实时分析",
          "pronunciation": "/ˈriːəl taɪm əˈnælɪtɪks/",
          "example": "Real-time analytics drove the live dashboard during the launch.",
          "category": "processing"
        },
        {
          "id": "de013",
          "english": "message broker",
          "chinese": "消息代理",
          "pronunciation": "/ˈmesɪdʒ ˈbroʊkər/",
          "example": "The message broker persists events until consumers catch up.",
          "category": "streaming"
        },
        {
          "id": "de014",
          "english": "topic",
          "chinese": "主题（消息分类）",
          "pronunciation": "/ˈtɑːpɪk/",
          "example": "Publish order events to the orders topic.",
          "category": "streaming"
        },
        {
          "id": "de015",
          "english": "consumer group",
          "chinese": "消费者组",
          "pronunciation": "/kənˈsuːmər ɡruːp/",
          "example": "Each consumer group gets the full stream on its own partitions.",
          "category": "streaming"
        },
        {
          "id": "de016",
          "english": "offset",
          "chinese": "偏移量",
          "pronunciation": "/ˈɔːfset/",
          "example": "The consumer resumed from its stored offset after restart.",
          "category": "streaming"
        },
        {
          "id": "de017",
          "english": "partition",
          "chinese": "分区",
          "pronunciation": "/pɑːrˈtɪʃən/",
          "example": "Key the events by user id so they land on the same partition.",
          "category": "streaming"
        },
        {
          "id": "de018",
          "english": "replication factor",
          "chinese": "副本因子",
          "pronunciation": "/ˌreplɪˈkeɪʃən ˈfæktər/",
          "example": "A replication factor of three survives two broker failures.",
          "category": "streaming"
        },
        {
          "id": "de019",
          "english": "schema registry",
          "chinese": "模式注册中心",
          "pronunciation": "/ˈskiːmə ˈredʒɪstri/",
          "example": "The schema registry rejects incompatible schema changes.",
          "category": "governance"
        },
        {
          "id": "de020",
          "english": "schema evolution",
          "chinese": "模式演进",
          "pronunciation": "/ˈskiːmə ˌevəˈluːʃən/",
          "example": "Plan schema evolution so old consumers keep working.",
          "category": "governance"
        },
        {
          "id": "de021",
          "english": "schema-on-write",
          "chinese": "写时模式（先定结构）",
          "pronunciation": "/ˈskiːmə ɒn raɪt/",
          "example": "Warehouses enforce schema-on-write; lakes allow schema-on-read.",
          "category": "governance"
        },
        {
          "id": "de022",
          "english": "schema-on-read",
          "chinese": "读时模式（后定结构）",
          "pronunciation": "/ˈskiːmə ɒn riːd/",
          "example": "Schema-on-read keeps ingestion fast and flexible.",
          "category": "governance"
        },
        {
          "id": "de023",
          "english": "structured data",
          "chinese": "结构化数据",
          "pronunciation": "/ˈstrʌktʃərd ˈdeɪtə/",
          "example": "Relational tables hold structured data with fixed columns.",
          "category": "data"
        },
        {
          "id": "de024",
          "english": "semi-structured data",
          "chinese": "半结构化数据",
          "pronunciation": "/ˈsemi ˈstrʌktʃərd ˈdeɪtə/",
          "example": "JSON logs are semi-structured data.",
          "category": "data"
        },
        {
          "id": "de025",
          "english": "unstructured data",
          "chinese": "非结构化数据",
          "pronunciation": "/ʌnˈstrʌktʃərd ˈdeɪtə/",
          "example": "Emails, images and free text are unstructured data.",
          "category": "data"
        },
        {
          "id": "de026",
          "english": "fact table",
          "chinese": "事实表",
          "pronunciation": "/fækt ˈteɪbl/",
          "example": "The fact table stores one row per order line item.",
          "category": "modeling"
        },
        {
          "id": "de027",
          "english": "dimension table",
          "chinese": "维度表",
          "pronunciation": "/dəˈmenʃən ˈteɪbl/",
          "example": "Join the fact table to the date and product dimension tables.",
          "category": "modeling"
        },
        {
          "id": "de028",
          "english": "star schema",
          "chinese": "星型模式",
          "pronunciation": "/stɑːr ˈskiːmə/",
          "example": "A star schema is the classic OLAP design.",
          "category": "modeling"
        },
        {
          "id": "de029",
          "english": "snowflake schema",
          "chinese": "雪花模式",
          "pronunciation": "/ˈsnoʊfleɪk ˈskiːmə/",
          "example": "The snowflake schema normalizes dimensions further.",
          "category": "modeling"
        },
        {
          "id": "de030",
          "english": "OLAP",
          "chinese": "联机分析处理",
          "pronunciation": "/ˈoʊlæp/",
          "example": "OLAP workloads scan billions of rows for aggregation.",
          "category": "processing"
        },
        {
          "id": "de031",
          "english": "OLTP",
          "chinese": "联机事务处理",
          "pronunciation": "/ˈoʊltiːˈpiː/",
          "example": "OLTP needs fast point writes, not heavy scans.",
          "category": "processing"
        },
        {
          "id": "de032",
          "english": "data modeling",
          "chinese": "数据建模",
          "pronunciation": "/ˈdeɪtə ˈmɑːdlɪŋ/",
          "example": "Data modeling decisions outlive any single tool.",
          "category": "modeling"
        },
        {
          "id": "de033",
          "english": "normalization",
          "chinese": "规范化（消除冗余）",
          "pronunciation": "/ˌnɔːrmələˈzeɪʃən/",
          "example": "Normalization removes redundancy at the cost of joins.",
          "category": "modeling"
        },
        {
          "id": "de034",
          "english": "denormalization",
          "chinese": "反规范化（以冗余换速度）",
          "pronunciation": "/diːˌnɔːrmələˈzeɪʃən/",
          "example": "Analytics tables use denormalization to avoid join storms.",
          "category": "modeling"
        },
        {
          "id": "de035",
          "english": "columnar storage",
          "chinese": "列式存储",
          "pronunciation": "/kəˈlʌmnər ˈstɔːrɪdʒ/",
          "example": "Columnar storage makes SUM over one column nearly free.",
          "category": "storage"
        },
        {
          "id": "de036",
          "english": "row-oriented storage",
          "chinese": "行式存储",
          "pronunciation": "/roʊ ˈɔːrientɪd ˈstɔːrɪdʒ/",
          "example": "Row-oriented storage suits OLTP point lookups.",
          "category": "storage"
        },
        {
          "id": "de037",
          "english": "data cleansing",
          "chinese": "数据清洗",
          "pronunciation": "/ˈdeɪtə ˈklenzɪŋ/",
          "example": "Data cleansing fixed the country codes in 12% of records.",
          "category": "quality"
        },
        {
          "id": "de038",
          "english": "data quality",
          "chinese": "数据质量",
          "pronunciation": "/ˈdeɪtə ˈkwɑːləti/",
          "example": "Data quality checks run right after ingestion.",
          "category": "quality"
        },
        {
          "id": "de039",
          "english": "deduplication",
          "chinese": "去重",
          "pronunciation": "/ˌdiːdjuːplɪˈkeɪʃən/",
          "example": "At-least-once delivery requires deduplication downstream.",
          "category": "quality"
        },
        {
          "id": "de040",
          "english": "late-arriving data",
          "chinese": "迟到数据",
          "pronunciation": "/leɪt əˈraɪvɪŋ ˈdeɪtə/",
          "example": "Handle late-arriving data by reprocessing the affected window.",
          "category": "quality"
        },
        {
          "id": "de041",
          "english": "watermark",
          "chinese": "水位线（进度标记）",
          "pronunciation": "/ˈwɔːtərmɑːrk/",
          "example": "Once the watermark passes 10:05, the 10:00 window closes.",
          "category": "streaming"
        },
        {
          "id": "de042",
          "english": "windowing",
          "chinese": "窗口化",
          "pronunciation": "/ˈwɪndoʊɪŋ/",
          "example": "Windowing splits an infinite stream into finite chunks.",
          "category": "streaming"
        },
        {
          "id": "de043",
          "english": "tumbling window",
          "chinese": "滚动窗口",
          "pronunciation": "/ˈtʌmblɪŋ ˈwɪndoʊ/",
          "example": "A tumbling window counts events per minute, non-overlapping.",
          "category": "streaming"
        },
        {
          "id": "de044",
          "english": "sliding window",
          "chinese": "滑动窗口",
          "pronunciation": "/ˈslaɪdɪŋ ˈwɪndoʊ/",
          "example": "Use a sliding window for a rolling five-minute average.",
          "category": "streaming"
        },
        {
          "id": "de045",
          "english": "backfill",
          "chinese": "回填（重算历史）",
          "pronunciation": "/ˈbækfɪl/",
          "example": "Backfill the last 90 days after fixing the bug in the transform.",
          "category": "pipeline"
        },
        {
          "id": "de046",
          "english": "incremental load",
          "chinese": "增量加载",
          "pronunciation": "/ˌɪnkrəˈmentl loʊd/",
          "example": "Incremental load copies only rows changed since the last run.",
          "category": "pipeline"
        },
        {
          "id": "de047",
          "english": "change data capture",
          "chinese": "变更数据捕获（CDC）",
          "pronunciation": "/tʃeɪndʒ ˈdeɪtə ˈkæptʃər/",
          "example": "CDC streams every row change from the database log.",
          "category": "pipeline"
        },
        {
          "id": "de048",
          "english": "data lineage",
          "chinese": "数据血缘",
          "pronunciation": "/ˈdeɪtə ˈlɪniɪdʒ/",
          "example": "Data lineage shows exactly which upstream table fed this metric.",
          "category": "governance"
        },
        {
          "id": "de049",
          "english": "data catalog",
          "chinese": "数据目录",
          "pronunciation": "/ˈdeɪtə ˈkætəlɔːɡ/",
          "example": "Search the data catalog to find the table's owner.",
          "category": "governance"
        },
        {
          "id": "de050",
          "english": "data governance",
          "chinese": "数据治理",
          "pronunciation": "/ˈdeɪtə ˈɡʌvərnəns/",
          "example": "Data governance defines who owns, masks and approves each dataset.",
          "category": "governance"
        }
      ]
    },
    {
      "id": "performance-optimization",
      "name": "Performance Optimization",
      "nameCN": "性能优化",
      "description": "Profiling, caching and low-level performance vocabulary",
      "items": [
        {
          "id": "pf001",
          "english": "profiling",
          "chinese": "性能剖析",
          "pronunciation": "/ˈproʊfaɪlɪŋ/",
          "example": "Start with profiling, never with guessing.",
          "category": "method"
        },
        {
          "id": "pf002",
          "english": "profiler",
          "chinese": "性能分析器",
          "pronunciation": "/prəˈfaɪlər/",
          "example": "The profiler shows 80% of CPU time in JSON parsing.",
          "category": "method"
        },
        {
          "id": "pf003",
          "english": "CPU-bound",
          "chinese": "CPU 密集型",
          "pronunciation": "/ˌsiː piː ˈjuː baʊnd/",
          "example": "Image resizing is CPU-bound, so more cores help.",
          "category": "workload"
        },
        {
          "id": "pf004",
          "english": "I/O-bound",
          "chinese": "I/O 密集型",
          "pronunciation": "/ˌaɪ ˈoʊ baʊnd/",
          "example": "The service is I/O-bound; async I/O fixed the throughput.",
          "category": "workload"
        },
        {
          "id": "pf005",
          "english": "memory-bound",
          "chinese": "内存受限型",
          "pronunciation": "/ˈmeməri baʊnd/",
          "example": "The matrix multiply is memory-bound, not compute-bound.",
          "category": "workload"
        },
        {
          "id": "pf006",
          "english": "bottleneck",
          "chinese": "瓶颈",
          "pronunciation": "/ˈbɑːtlnek/",
          "example": "Fix the slowest bottleneck first — everything else is noise.",
          "category": "method"
        },
        {
          "id": "pf007",
          "english": "queries per second",
          "chinese": "每秒查询数（QPS）",
          "pronunciation": "/ˈkwɪriz pər ˈsekənd/",
          "example": "The proxy handles 50k queries per second at p99 under 10 ms.",
          "category": "metrics"
        },
        {
          "id": "pf008",
          "english": "memory leak",
          "chinese": "内存泄漏",
          "pronunciation": "/ˈmeməri liːk/",
          "example": "The chart library had a memory leak on every redraw.",
          "category": "memory"
        },
        {
          "id": "pf009",
          "english": "garbage collection",
          "chinese": "垃圾回收（GC）",
          "pronunciation": "/ˈɡɑːrbɪdʒ kəˈlekʃən/",
          "example": "Frequent garbage collection pauses caused the jitter.",
          "category": "memory"
        },
        {
          "id": "pf010",
          "english": "GC pause",
          "chinese": "GC 停顿",
          "pronunciation": "/ˌdʒiː ˈsiː pɔːz/",
          "example": "A 400 ms GC pause is why the health check timed out.",
          "category": "memory"
        },
        {
          "id": "pf011",
          "english": "off-heap memory",
          "chinese": "堆外内存",
          "pronunciation": "/ɔːf hiːp ˈmeməri/",
          "example": "The cache stores entries in off-heap memory to avoid GC pressure.",
          "category": "memory"
        },
        {
          "id": "pf012",
          "english": "memory pressure",
          "chinese": "内存压力",
          "pronunciation": "/ˈmeməri ˈpreʃər/",
          "example": "Under memory pressure the kernel starts swapping.",
          "category": "memory"
        },
        {
          "id": "pf013",
          "english": "object pool",
          "chinese": "对象池",
          "pronunciation": "/ˈɑːbdʒɪkt puːl/",
          "example": "An object pool reuses buffers instead of allocating per request.",
          "category": "memory"
        },
        {
          "id": "pf014",
          "english": "connection pool",
          "chinese": "连接池",
          "pronunciation": "/kəˈnekʃən puːl/",
          "example": "Size the connection pool to the database's max limit.",
          "category": "pooling"
        },
        {
          "id": "pf015",
          "english": "thread pool",
          "chinese": "线程池",
          "pronunciation": "/θred puːl/",
          "example": "The thread pool saturated at 200 concurrent requests.",
          "category": "pooling"
        },
        {
          "id": "pf016",
          "english": "cache hit rate",
          "chinese": "缓存命中率",
          "pronunciation": "/kæʃ hɪt reɪt/",
          "example": "Push the cache hit rate above 95% to spare the database.",
          "category": "cache"
        },
        {
          "id": "pf017",
          "english": "cache miss",
          "chinese": "缓存未命中",
          "pronunciation": "/kæʃ mɪs/",
          "example": "A cache miss falls through to the origin server.",
          "category": "cache"
        },
        {
          "id": "pf018",
          "english": "cache invalidation",
          "chinese": "缓存失效",
          "pronunciation": "/kæʃ ɪnˌvælɪˈdeɪʃən/",
          "example": "Cache invalidation is the second hard problem in CS.",
          "category": "cache"
        },
        {
          "id": "pf019",
          "english": "cache warming",
          "chinese": "缓存预热",
          "pronunciation": "/kæʃ ˈwɜːrmɪŋ/",
          "example": "Cache warming after deploy avoids the cold-start spike.",
          "category": "cache"
        },
        {
          "id": "pf020",
          "english": "lookup table",
          "chinese": "查找表（空间换时间）",
          "pronunciation": "/ˈlʊkʌp ˈteɪbl/",
          "example": "Replace the trig calls with a lookup table.",
          "category": "cache"
        },
        {
          "id": "pf021",
          "english": "lazy initialization",
          "chinese": "惰性初始化",
          "pronunciation": "/ˈleɪzi ɪˌnɪʃəliˈzeɪʃən/",
          "example": "Lazy initialization cut startup time from 30 s to 2 s.",
          "category": "strategy"
        },
        {
          "id": "pf022",
          "english": "eager loading",
          "chinese": "预加载（防 N+1）",
          "pronunciation": "/ˈiːɡər ˈloʊdɪŋ/",
          "example": "Eager loading the association removed 200 extra queries.",
          "category": "strategy"
        },
        {
          "id": "pf023",
          "english": "N+1 query problem",
          "chinese": "N+1 查询问题",
          "pronunciation": "/en plʌs wʌn ˈkwɪri ˈprɑːbləm/",
          "example": "The page ran 1 + 500 queries — a classic N+1 query problem.",
          "category": "database"
        },
        {
          "id": "pf024",
          "english": "query optimization",
          "chinese": "查询优化",
          "pronunciation": "/ˈkwɪri ˌɑːptɪməˈzeɪʃən/",
          "example": "Query optimization dropped the report from 40 s to 800 ms.",
          "category": "database"
        },
        {
          "id": "pf025",
          "english": "execution plan",
          "chinese": "执行计划",
          "pronunciation": "/ˌeksɪˈkjuːʃən plæn/",
          "example": "Read the execution plan: it's doing a full scan on the join.",
          "category": "database"
        },
        {
          "id": "pf026",
          "english": "full table scan",
          "chinese": "全表扫描",
          "pronunciation": "/fʊl ˈteɪbl skæn/",
          "example": "The missing index forced a full table scan on every lookup.",
          "category": "database"
        },
        {
          "id": "pf027",
          "english": "covering index",
          "chinese": "覆盖索引",
          "pronunciation": "/ˈkʌvərɪŋ ˈɪndeks/",
          "example": "A covering index answers the query without touching the table.",
          "category": "database"
        },
        {
          "id": "pf028",
          "english": "read replica",
          "chinese": "读副本",
          "pronunciation": "/riːd ˈreplɪkə/",
          "example": "Point the analytics workload at the read replica.",
          "category": "database"
        },
        {
          "id": "pf029",
          "english": "write-ahead log",
          "chinese": "预写日志（WAL）",
          "pronunciation": "/raɪt əˈhɛd lɔːɡ/",
          "example": "The write-ahead log makes commits durable before the data files.",
          "category": "database"
        },
        {
          "id": "pf030",
          "english": "lock contention",
          "chinese": "锁竞争",
          "pronunciation": "/lɑːk kənˈtenʃən/",
          "example": "Lock contention on the counter row serialized all writers.",
          "category": "concurrency"
        },
        {
          "id": "pf031",
          "english": "mutex",
          "chinese": "互斥锁",
          "pronunciation": "/ˈmjuːteks/",
          "example": "Hold the mutex only for the critical section.",
          "category": "concurrency"
        },
        {
          "id": "pf032",
          "english": "atomic operation",
          "chinese": "原子操作",
          "pronunciation": "/əˈtɑːmɪk ˌɑːpəˈreɪʃən/",
          "example": "An atomic operation needs no lock at all.",
          "category": "concurrency"
        },
        {
          "id": "pf033",
          "english": "false sharing",
          "chinese": "伪共享",
          "pronunciation": "/fɔːls ˈʃerɪŋ/",
          "example": "Padding the struct fixed the false sharing between cores.",
          "category": "concurrency"
        },
        {
          "id": "pf034",
          "english": "branch prediction",
          "chinese": "分支预测",
          "pronunciation": "/bræntʃ prɪˈdɪkʃən/",
          "example": "Branch prediction makes sorted loops measurably faster.",
          "category": "cpu"
        },
        {
          "id": "pf035",
          "english": "SIMD",
          "chinese": "单指令多数据",
          "pronunciation": "/sɪm d/",
          "example": "SIMD processes four floats per instruction.",
          "category": "cpu"
        },
        {
          "id": "pf036",
          "english": "loop unrolling",
          "chinese": "循环展开",
          "pronunciation": "/luːp ʌnˈroʊlɪŋ/",
          "example": "Loop unrolling cuts loop overhead at the cost of code size.",
          "category": "cpu"
        },
        {
          "id": "pf037",
          "english": "inline function",
          "chinese": "内联函数",
          "pronunciation": "/ˌɪnˈlaɪn ˈfʌŋkʃən/",
          "example": "Marking it an inline function removed the call overhead.",
          "category": "cpu"
        },
        {
          "id": "pf038",
          "english": "JIT compilation",
          "chinese": "即时编译",
          "pronunciation": "/dʒɪt ˌkɑːmpɪˈleɪʃən/",
          "example": "JIT compilation optimizes the hot paths at runtime.",
          "category": "runtime"
        },
        {
          "id": "pf039",
          "english": "ahead-of-time compilation",
          "chinese": "预先编译（AOT）",
          "pronunciation": "/əˈhɛd əv taɪm ˌkɑːmpɪˈleɪʃən/",
          "example": "AOT compilation trades startup speed for peak throughput.",
          "category": "runtime"
        },
        {
          "id": "pf040",
          "english": "flame graph",
          "chinese": "火焰图",
          "pronunciation": "/fleɪm ɡræf/",
          "example": "The flame graph instantly showed the hot parse function.",
          "category": "method"
        },
        {
          "id": "pf041",
          "english": "sampling profiler",
          "chinese": "采样式分析器",
          "pronunciation": "/ˈsæmplɪŋ prəˈfaɪlər/",
          "example": "A sampling profiler adds little overhead and finds hot spots fast.",
          "category": "method"
        },
        {
          "id": "pf042",
          "english": "benchmark",
          "chinese": "基准测试",
          "pronunciation": "/ˈbentʃmɑːrk/",
          "example": "Commit the benchmark so regressions are caught in CI.",
          "category": "method"
        },
        {
          "id": "pf043",
          "english": "microbenchmark",
          "chinese": "微基准测试",
          "pronunciation": "/ˈmaɪkroʊˌbentʃmɑːrk/",
          "example": "A microbenchmark can lie: JIT warms up and dead code disappears.",
          "category": "method"
        },
        {
          "id": "pf044",
          "english": "performance budget",
          "chinese": "性能预算",
          "pronunciation": "/pərˈfɔːrməns ˈbʌdʒɪt/",
          "example": "The performance budget caps the JS bundle at 150 KB.",
          "category": "method"
        },
        {
          "id": "pf045",
          "english": "capacity",
          "chinese": "容量",
          "pronunciation": "/kəˈpæsəti/",
          "example": "We doubled capacity ahead of the Black Friday traffic.",
          "category": "metrics"
        },
        {
          "id": "pf046",
          "english": "premature optimization",
          "chinese": "过早优化",
          "pronunciation": "/ˌpriːməˈtʃʊr ˌɑːptɪməˈzeɪʃən/",
          "example": "Premature optimization is the root of all evil — Knuth.",
          "category": "principle"
        },
        {
          "id": "pf047",
          "english": "hot path",
          "chinese": "热点路径",
          "pronunciation": "/hɑːt pæθ/",
          "example": "Optimize the hot path; leave the cold path readable.",
          "category": "principle"
        },
        {
          "id": "pf048",
          "english": "deoptimization",
          "chinese": "去优化（反优化）",
          "pronunciation": "/diːˌɑːptɪməˈzeɪʃən/",
          "example": "A type change in the loop triggered deoptimization.",
          "category": "runtime"
        },
        {
          "id": "pf049",
          "english": "escape analysis",
          "chinese": "逃逸分析",
          "pronunciation": "/ɪˈskeɪp əˈnæləsɪs/",
          "example": "Escape analysis lets the JIT allocate the object on the stack.",
          "category": "runtime"
        },
        {
          "id": "pf050",
          "english": "vectorization",
          "chinese": "向量化",
          "pronunciation": "/ˌvektərəˈzeɪʃən/",
          "example": "Vectorization turned the pixel loop into one SIMD pass.",
          "category": "cpu"
        }
      ]
    },
    {
      "id": "testing-quality",
      "name": "Testing & Quality",
      "nameCN": "测试与质量",
      "description": "Test types, tooling and defect management vocabulary",
      "items": [
        {
          "id": "tq001",
          "english": "test suite",
          "chinese": "测试套件",
          "pronunciation": "/test swiːt/",
          "example": "The full test suite runs in four minutes.",
          "category": "general"
        },
        {
          "id": "tq002",
          "english": "unit test",
          "chinese": "单元测试",
          "pronunciation": "/ˈjuːnɪt test/",
          "example": "A unit test should fail for exactly one reason.",
          "category": "types"
        },
        {
          "id": "tq003",
          "english": "integration test",
          "chinese": "集成测试",
          "pronunciation": "/ˌɪntɪˈɡreɪʃən test/",
          "example": "Integration tests catch the wiring mistakes unit tests miss.",
          "category": "types"
        },
        {
          "id": "tq004",
          "english": "end-to-end test",
          "chinese": "端到端测试",
          "pronunciation": "/end tuː end test/",
          "example": "Keep a thin layer of end-to-end tests for critical flows.",
          "category": "types"
        },
        {
          "id": "tq005",
          "english": "acceptance test",
          "chinese": "验收测试",
          "pronunciation": "/əkˈseptəns test/",
          "example": "Acceptance tests encode the product owner's criteria.",
          "category": "types"
        },
        {
          "id": "tq006",
          "english": "test pyramid",
          "chinese": "测试金字塔",
          "pronunciation": "/test ˈpɪrəmɪd/",
          "example": "The test pyramid: many unit, fewer integration, few E2E.",
          "category": "principle"
        },
        {
          "id": "tq007",
          "english": "test coverage",
          "chinese": "测试覆盖率",
          "pronunciation": "/test ˈkʌvərɪdʒ/",
          "example": "100% test coverage proves nothing about correctness.",
          "category": "metrics"
        },
        {
          "id": "tq008",
          "english": "assertion",
          "chinese": "断言",
          "pronunciation": "/əˈsɜːrʃən/",
          "example": "Each assertion should pin down one expected behavior.",
          "category": "general"
        },
        {
          "id": "tq009",
          "english": "test double",
          "chinese": "测试替身（统称）",
          "pronunciation": "/test ˈdʌbl/",
          "example": "Mock, stub, fake and spy are all test doubles.",
          "category": "tooling"
        },
        {
          "id": "tq010",
          "english": "mock",
          "chinese": "模拟对象（带验证）",
          "pronunciation": "/mɑːk/",
          "example": "The mock verifies that sendEmail was called exactly once.",
          "category": "tooling"
        },
        {
          "id": "tq011",
          "english": "stub",
          "chinese": "桩（只给固定返回）",
          "pronunciation": "/stʌb/",
          "example": "A stub returns canned data; it never verifies calls.",
          "category": "tooling"
        },
        {
          "id": "tq012",
          "english": "spy",
          "chinese": "侦测（记录调用）",
          "pronunciation": "/spaɪ/",
          "example": "Use a spy to record how many times the handler ran.",
          "category": "tooling"
        },
        {
          "id": "tq013",
          "english": "fixture",
          "chinese": "测试夹具（固定数据）",
          "pronunciation": "/ˈfɪkstʃər/",
          "example": "The fixture loads a known database state before each test.",
          "category": "tooling"
        },
        {
          "id": "tq014",
          "english": "test data",
          "chinese": "测试数据",
          "pronunciation": "/test ˈdeɪtə/",
          "example": "Generate test data that covers the edge cases.",
          "category": "general"
        },
        {
          "id": "tq015",
          "english": "test case",
          "chinese": "测试用例",
          "pronunciation": "/test keɪs/",
          "example": "Add a test case for the empty-input boundary.",
          "category": "general"
        },
        {
          "id": "tq016",
          "english": "test plan",
          "chinese": "测试计划",
          "pronunciation": "/test plæn/",
          "example": "The test plan lists scope, environments and exit criteria.",
          "category": "process"
        },
        {
          "id": "tq017",
          "english": "test environment",
          "chinese": "测试环境",
          "pronunciation": "/test ɪnˈvaɪrənmənt/",
          "example": "The bug reproduces only in the test environment with prod data.",
          "category": "process"
        },
        {
          "id": "tq018",
          "english": "seed data",
          "chinese": "种子数据",
          "pronunciation": "/siːd ˈdeɪtə/",
          "example": "Seed data makes the staging instance demo-ready.",
          "category": "process"
        },
        {
          "id": "tq019",
          "english": "factory",
          "chinese": "工厂（构造测试数据）",
          "pronunciation": "/ˈfæktəri/",
          "example": "Use the factory to build valid records without fixtures drifting.",
          "category": "tooling"
        },
        {
          "id": "tq020",
          "english": "setup and teardown",
          "chinese": "前置与清理",
          "pronunciation": "/ˈsetʌp ænd ˈterdaʊn/",
          "example": "Setup creates the temp dir; teardown removes it.",
          "category": "tooling"
        },
        {
          "id": "tq021",
          "english": "test runner",
          "chinese": "测试运行器",
          "pronunciation": "/test ˈrʌnər/",
          "example": "The test runner watches files and reruns affected specs.",
          "category": "tooling"
        },
        {
          "id": "tq022",
          "english": "test report",
          "chinese": "测试报告",
          "pronunciation": "/test rɪˈpɔːrt/",
          "example": "The test report attaches screenshots of every failure.",
          "category": "process"
        },
        {
          "id": "tq023",
          "english": "test failure",
          "chinese": "测试失败",
          "pronunciation": "/test ˈfeɪljər/",
          "example": "A test failure on main blocks all merges.",
          "category": "process"
        },
        {
          "id": "tq024",
          "english": "false positive",
          "chinese": "假阳性（误报）",
          "pronunciation": "/fɔːls ˈpɑːzətɪv/",
          "example": "The alert was a false positive triggered by a timezone bug.",
          "category": "analysis"
        },
        {
          "id": "tq025",
          "english": "false negative",
          "chinese": "假阴性（漏报）",
          "pronunciation": "/fɔːls ˈneɡətɪv/",
          "example": "A false negative is worse: the bug ships undetected.",
          "category": "analysis"
        },
        {
          "id": "tq026",
          "english": "defect",
          "chinese": "缺陷",
          "pronunciation": "/ˈdiːfekt/",
          "example": "Log the defect with severity, priority and repro steps.",
          "category": "defects"
        },
        {
          "id": "tq027",
          "english": "bug bash",
          "chinese": "集中捉虫活动",
          "pronunciation": "/bʌɡ bæʃ/",
          "example": "We run a company-wide bug bash before every major release.",
          "category": "process"
        },
        {
          "id": "tq028",
          "english": "reproduce",
          "chinese": "复现",
          "pronunciation": "/ˌriːprəˈduːs/",
          "example": "I can't reproduce it locally — need your exact inputs.",
          "category": "defects"
        },
        {
          "id": "tq029",
          "english": "reproduction steps",
          "chinese": "复现步骤",
          "pronunciation": "/ˌriːprəˈdʌkʃən steps/",
          "example": "Good reproduction steps start from a clean session.",
          "category": "defects"
        },
        {
          "id": "tq030",
          "english": "expected behavior",
          "chinese": "预期行为",
          "pronunciation": "/ɪkˈspektɪd bɪˈheɪvjər/",
          "example": "State the expected behavior in the bug title.",
          "category": "defects"
        },
        {
          "id": "tq031",
          "english": "actual behavior",
          "chinese": "实际行为",
          "pronunciation": "/ˈæktʃuəl bɪˈheɪvjər/",
          "example": "Expected 200; actual behavior was a 500 with a stack trace.",
          "category": "defects"
        },
        {
          "id": "tq032",
          "english": "edge case",
          "chinese": "边界情况",
          "pronunciation": "/edʒ keɪs/",
          "example": "Empty string, timezone midnight — classic edge cases.",
          "category": "analysis"
        },
        {
          "id": "tq033",
          "english": "happy path",
          "chinese": "正常路径",
          "pronunciation": "/ˈhæpi pæθ/",
          "example": "The happy path works; now test the error branches.",
          "category": "analysis"
        },
        {
          "id": "tq034",
          "english": "failure path",
          "chinese": "失败路径",
          "pronunciation": "/ˈfeɪljər pæθ/",
          "example": "Every failure path needs its own test.",
          "category": "analysis"
        },
        {
          "id": "tq035",
          "english": "fuzzing",
          "chinese": "模糊测试",
          "pronunciation": "/ˈfʌzɪŋ/",
          "example": "Fuzzing found a crash on the third malformed input.",
          "category": "types"
        },
        {
          "id": "tq036",
          "english": "mutation testing",
          "chinese": "变异测试",
          "pronunciation": "/mjuːˈteɪʃən ˈtestɪŋ/",
          "example": "Mutation testing measures whether tests actually catch bugs.",
          "category": "types"
        },
        {
          "id": "tq037",
          "english": "property-based testing",
          "chinese": "基于属性的测试",
          "pronunciation": "/ˈprɑːpərti beɪst ˈtestɪŋ/",
          "example": "Property-based testing found the rounding bug at odd decimals.",
          "category": "types"
        },
        {
          "id": "tq038",
          "english": "snapshot test",
          "chinese": "快照测试",
          "pronunciation": "/ˈsnæpʃɑːt test/",
          "example": "Review snapshot diffs as carefully as code.",
          "category": "types"
        },
        {
          "id": "tq039",
          "english": "UI test",
          "chinese": "界面测试",
          "pronunciation": "/ˌjuː ˈaɪ test/",
          "example": "The UI test clicks through the checkout flow headlessly.",
          "category": "types"
        },
        {
          "id": "tq040",
          "english": "load test",
          "chinese": "负载测试",
          "pronunciation": "/loʊd test/",
          "example": "The load test simulates 10,000 concurrent shoppers.",
          "category": "types"
        },
        {
          "id": "tq041",
          "english": "stress test",
          "chinese": "压力测试",
          "pronunciation": "/stress test/",
          "example": "The stress test pushes until something breaks — then we know the ceiling.",
          "category": "types"
        },
        {
          "id": "tq042",
          "english": "soak test",
          "chinese": "浸泡测试（长稳测试）",
          "pronunciation": "/soʊk test/",
          "example": "A 48-hour soak test exposed the slow memory leak.",
          "category": "types"
        },
        {
          "id": "tq043",
          "english": "spike test",
          "chinese": "尖峰测试",
          "pronunciation": "/spaɪk test/",
          "example": "The spike test emulates a flash-sale traffic burst.",
          "category": "types"
        },
        {
          "id": "tq044",
          "english": "test automation",
          "chinese": "测试自动化",
          "pronunciation": "/test ˌɔːtəˈmeɪʃən/",
          "example": "Test automation pays back on the second run, not the first.",
          "category": "process"
        },
        {
          "id": "tq045",
          "english": "quality gate",
          "chinese": "质量门禁",
          "pronunciation": "/ˈkwɑːləti ɡeɪt/",
          "example": "The quality gate blocks merges when coverage drops 2%.",
          "category": "process"
        },
        {
          "id": "tq046",
          "english": "static analysis",
          "chinese": "静态分析",
          "pronunciation": "/ˈstætɪk əˈnæləsɪs/",
          "example": "Static analysis catches the null deref before runtime does.",
          "category": "tooling"
        },
        {
          "id": "tq047",
          "english": "linter",
          "chinese": "代码检查器",
          "pronunciation": "/ˈlɪntər/",
          "example": "Let the linter win the style arguments.",
          "category": "tooling"
        },
        {
          "id": "tq048",
          "english": "maintainability",
          "chinese": "可维护性",
          "pronunciation": "/ˌmeɪntənəˈbɪləti/",
          "example": "Readable tests are a maintainability feature.",
          "category": "quality"
        },
        {
          "id": "tq049",
          "english": "test isolation",
          "chinese": "测试隔离",
          "pronunciation": "/test ˌaɪsəˈleɪʃən/",
          "example": "Without test isolation, order changes cause false failures.",
          "category": "principle"
        },
        {
          "id": "tq050",
          "english": "deterministic test",
          "chinese": "确定性测试",
          "pronunciation": "/dɪˌtɜːrmɪˈnɪstɪk test/",
          "example": "A deterministic test passes every time or fails every time.",
          "category": "principle"
        }
      ]
    },
    {
      "id": "open-source",
      "name": "Open Source & Collaboration",
      "nameCN": "开源协作",
      "description": "Open source community, licensing and ecosystem vocabulary",
      "items": [
        {
          "id": "os001",
          "english": "open source",
          "chinese": "开源",
          "pronunciation": "/ˈoʊpən sɔːrs/",
          "example": "The core is open source; the hosting is paid.",
          "category": "general"
        },
        {
          "id": "os002",
          "english": "open-source license",
          "chinese": "开源许可证",
          "pronunciation": "/ˈoʊpən sɔːrs ˈlaɪsns/",
          "example": "Check the open-source license before you copy the code.",
          "category": "licensing"
        },
        {
          "id": "os003",
          "english": "permissive license",
          "chinese": "宽松许可证（MIT/Apache）",
          "pronunciation": "/pərˈmɪsɪv ˈlaɪsns/",
          "example": "MIT is a permissive license with minimal conditions.",
          "category": "licensing"
        },
        {
          "id": "os004",
          "english": "copyleft",
          "chinese": "著佐权（传染性许可）",
          "pronunciation": "/ˈkɑːpileft/",
          "example": "GPL's copyleft requires derivatives to stay open.",
          "category": "licensing"
        },
        {
          "id": "os005",
          "english": "attribution clause",
          "chinese": "署名条款",
          "pronunciation": "/ˌætrɪˈbjuːʃən klɔːz/",
          "example": "Apache 2.0 adds a patent grant and attribution clause.",
          "category": "licensing"
        },
        {
          "id": "os006",
          "english": "dual licensing",
          "chinese": "双重许可",
          "pronunciation": "/ˈduːəl ˈlaɪsnsɪŋ/",
          "example": "Dual licensing sells a commercial license alongside AGPL.",
          "category": "licensing"
        },
        {
          "id": "os007",
          "english": "semantic versioning",
          "chinese": "语义化版本（SemVer）",
          "pronunciation": "/sɪˈmæntɪk ˈvɜːrʒənɪŋ/",
          "example": "Semantic versioning: breaking changes bump the major.",
          "category": "release"
        },
        {
          "id": "os008",
          "english": "long-term support",
          "chinese": "长期支持（LTS）",
          "pronunciation": "/lɔːŋ tɜːrm səˈpɔːrt/",
          "example": "Stay on the LTS release if you can't upgrade often.",
          "category": "release"
        },
        {
          "id": "os009",
          "english": "maintainer",
          "chinese": "维护者",
          "pronunciation": "/meɪnˈteɪnər/",
          "example": "Be kind to the maintainer — they're often unpaid.",
          "category": "community"
        },
        {
          "id": "os010",
          "english": "contributor",
          "chinese": "贡献者",
          "pronunciation": "/kənˈtrɪbjətər/",
          "example": "First-time contributors get extra review patience.",
          "category": "community"
        },
        {
          "id": "os011",
          "english": "first-time contributor",
          "chinese": "首次贡献者",
          "pronunciation": "/fɜːrst taɪm kənˈtrɪbjətər/",
          "example": "Label easy bugs to welcome the first-time contributor.",
          "category": "community"
        },
        {
          "id": "os012",
          "english": "good first issue",
          "chinese": "新手友好议题",
          "pronunciation": "/ɡʊd fɜːrst ˈɪʃuː/",
          "example": "Start with a good first issue to learn the workflow.",
          "category": "community"
        },
        {
          "id": "os013",
          "english": "code of conduct",
          "chinese": "行为准则",
          "pronunciation": "/koʊd əv kənˈdʌkt/",
          "example": "Every repo should ship a code of conduct.",
          "category": "community"
        },
        {
          "id": "os014",
          "english": "contributing guide",
          "chinese": "贡献指南",
          "pronunciation": "/kənˈtrɪbjuːtɪŋ ɡaɪd/",
          "example": "The contributing guide explains the PR checklist.",
          "category": "community"
        },
        {
          "id": "os015",
          "english": "issue tracker",
          "chinese": "议题追踪器",
          "pronunciation": "/ˈɪʃuː ˈtrækər/",
          "example": "Search the issue tracker before opening a new one.",
          "category": "process"
        },
        {
          "id": "os016",
          "english": "triage",
          "chinese": "议题分诊",
          "pronunciation": "/triˈɑːʒ/",
          "example": "Maintainers triage new issues every Monday.",
          "category": "process"
        },
        {
          "id": "os017",
          "english": "duplicate issue",
          "chinese": "重复议题",
          "pronunciation": "/ˈduːplɪkət ˈɪʃuː/",
          "example": "Close the duplicate issue with a link to the original.",
          "category": "process"
        },
        {
          "id": "os018",
          "english": "minimal reproducible example",
          "chinese": "最小可复现示例",
          "pronunciation": "/ˈmɪnɪməl ˌriːprəˈduːsəbl ɪɡˈzæmpl/",
          "example": "Attach a minimal reproducible example and you'll get help today.",
          "category": "process"
        },
        {
          "id": "os019",
          "english": "upstream",
          "chinese": "上游（主仓库）",
          "pronunciation": "/ˌʌpˈstriːm/",
          "example": "Send the fix upstream so everyone benefits.",
          "category": "process"
        },
        {
          "id": "os020",
          "english": "backport",
          "chinese": "向后移植",
          "pronunciation": "/ˈbækpɔːrt/",
          "example": "Backport the security fix to the 2.x branch.",
          "category": "release"
        },
        {
          "id": "os021",
          "english": "release channel",
          "chinese": "发布渠道",
          "pronunciation": "/rɪˈliːs ˈtʃænl/",
          "example": "Users on the beta release channel get builds weekly.",
          "category": "release"
        },
        {
          "id": "os022",
          "english": "nightly build",
          "chinese": "每日构建",
          "pronunciation": "/ˈnaɪtli bɪld/",
          "example": "Try the nightly build if the bug might be fixed already.",
          "category": "release"
        },
        {
          "id": "os023",
          "english": "stable release",
          "chinese": "稳定版",
          "pronunciation": "/ˈsteɪbl rɪˈliːs/",
          "example": "Pin production to the latest stable release.",
          "category": "release"
        },
        {
          "id": "os024",
          "english": "feature request",
          "chinese": "功能请求",
          "pronunciation": "/ˈfiːtʃər rɪˈkwest/",
          "example": "The feature request has 200 upvotes and no owner.",
          "category": "process"
        },
        {
          "id": "os025",
          "english": "bounty",
          "chinese": "赏金",
          "pronunciation": "/ˈbaʊnti/",
          "example": "A $500 bounty is attached to the accessibility issue.",
          "category": "community"
        },
        {
          "id": "os026",
          "english": "sponsor",
          "chinese": "赞助（资助项目）",
          "pronunciation": "/ˈspɑːnsər/",
          "example": "Sponsor the libraries your product depends on.",
          "category": "community"
        },
        {
          "id": "os027",
          "english": "stewardship",
          "chinese": "守护（长期维护责任）",
          "pronunciation": "/ˈstuːərdʃɪp/",
          "example": "Stewardship matters more than a flashy launch.",
          "category": "community"
        },
        {
          "id": "os028",
          "english": "governance",
          "chinese": "治理（决策机制）",
          "pronunciation": "/ˈɡʌvərnəns/",
          "example": "The project moved to foundation governance.",
          "category": "community"
        },
        {
          "id": "os029",
          "english": "steering committee",
          "chinese": "指导委员会",
          "pronunciation": "/ˈstɪrɪŋ kəˈmɪti/",
          "example": "The steering committee approves RFCs quarterly.",
          "category": "community"
        },
        {
          "id": "os030",
          "english": "RFC",
          "chinese": "征求意见稿",
          "pronunciation": "/ˌɑːr ef ˈsiː/",
          "example": "Write an RFC before rewriting the API.",
          "category": "process"
        },
        {
          "id": "os031",
          "english": "design doc",
          "chinese": "设计文档",
          "pronunciation": "/dɪˈzaɪn dɑːk/",
          "example": "The design doc settles the storage engine debate.",
          "category": "process"
        },
        {
          "id": "os032",
          "english": "proof of concept",
          "chinese": "概念验证（PoC）",
          "pronunciation": "/pruːf əv ˈkɑːnsept/",
          "example": "Build a proof of concept before committing the roadmap.",
          "category": "process"
        },
        {
          "id": "os033",
          "english": "reference implementation",
          "chinese": "参考实现",
          "pronunciation": "/ˈrefrəns ˌɪmplɪmenˈteɪʃən/",
          "example": "The spec ships with a reference implementation.",
          "category": "process"
        },
        {
          "id": "os034",
          "english": "early adopter",
          "chinese": "早期采用者",
          "pronunciation": "/ˈɜːrli əˈdɑːptər/",
          "example": "Early adopters find the rough edges first.",
          "category": "community"
        },
        {
          "id": "os035",
          "english": "community",
          "chinese": "社区",
          "pronunciation": "/kəˈmjuːnəti/",
          "example": "A healthy community answers questions faster than support.",
          "category": "community"
        },
        {
          "id": "os036",
          "english": "ecosystem",
          "chinese": "生态系统",
          "pronunciation": "/ˈiːkoʊsɪstəm/",
          "example": "Choose the language with the richest ecosystem for your domain.",
          "category": "general"
        },
        {
          "id": "os037",
          "english": "plugin",
          "chinese": "插件",
          "pronunciation": "/ˈplʌɡɪn/",
          "example": "Write a plugin instead of forking the core.",
          "category": "extension"
        },
        {
          "id": "os038",
          "english": "SDK",
          "chinese": "软件开发工具包",
          "pronunciation": "/ˌes diː ˈkeɪ/",
          "example": "The SDK handles auth, retries and serialization for you.",
          "category": "extension"
        },
        {
          "id": "os039",
          "english": "zero-config",
          "chinese": "零配置",
          "pronunciation": "/ˈzɪroʊ kənˈfɪɡ/",
          "example": "Zero-config tooling with sane defaults wins adoption.",
          "category": "general"
        },
        {
          "id": "os040",
          "english": "license compliance",
          "chinese": "许可证合规",
          "pronunciation": "/ˈlaɪsns kəmˈplaɪəns/",
          "example": "Legal reviews license compliance for every dependency.",
          "category": "licensing"
        },
        {
          "id": "os041",
          "english": "license scanning",
          "chinese": "许可证扫描",
          "pronunciation": "/ˈlaɪsns ˈskænɪŋ/",
          "example": "License scanning caught a hidden GPL dependency.",
          "category": "licensing"
        },
        {
          "id": "os042",
          "english": "vendoring",
          "chinese": "内嵌依赖（复制进库）",
          "pronunciation": "/ˈvendərɪŋ/",
          "example": "Vendoring the lib froze us on an old version for years.",
          "category": "dependencies"
        },
        {
          "id": "os043",
          "english": "package registry",
          "chinese": "包注册仓库",
          "pronunciation": "/ˈpækɪdʒ ˈredʒɪstri/",
          "example": "Publish the package to the public registry.",
          "category": "dependencies"
        },
        {
          "id": "os044",
          "english": "transitive dependency",
          "chinese": "传递依赖",
          "pronunciation": "/ˈtrænzətɪv dɪˈpendənsi/",
          "example": "The vulnerable package was a transitive dependency, three levels deep.",
          "category": "dependencies"
        },
        {
          "id": "os045",
          "english": "lockfile",
          "chinese": "锁文件",
          "pronunciation": "/ˈlɑːkfaɪl/",
          "example": "Commit the lockfile so CI builds are reproducible.",
          "category": "dependencies"
        },
        {
          "id": "os046",
          "english": "supply-chain attack",
          "chinese": "供应链攻击",
          "pronunciation": "/səˈplaɪ tʃeɪn əˈtæk/",
          "example": "The supply-chain attack hid malware in a popular package update.",
          "category": "security"
        },
        {
          "id": "os047",
          "english": "checksum",
          "chinese": "校验和",
          "pronunciation": "/ˈtʃeksʌm/",
          "example": "Verify the checksum before trusting the downloaded tarball.",
          "category": "security"
        },
        {
          "id": "os048",
          "english": "signed commit",
          "chinese": "签名提交",
          "pronunciation": "/saɪnd kəˈmɪt/",
          "example": "A signed commit proves the code really came from you.",
          "category": "security"
        },
        {
          "id": "os049",
          "english": "provenance",
          "chinese": "来源可溯",
          "pronunciation": "/ˈprɑːvənəns/",
          "example": "Build provenance proves the artifact came from that source.",
          "category": "security"
        },
        {
          "id": "os050",
          "english": "migration path",
          "chinese": "迁移路径",
          "pronunciation": "/maɪˈɡreɪʃən pæθ/",
          "example": "No migration path means users stay on v1 forever.",
          "category": "release"
        }
      ]
    },
    {
      "id": "blockchain-web3",
      "name": "Blockchain & Web3",
      "nameCN": "区块链与 Web3",
      "description": "Blockchain, crypto and decentralized application vocabulary",
      "items": [
        {
          "id": "bw001",
          "english": "decentralized",
          "chinese": "去中心化的",
          "pronunciation": "/diːˈsentrəlaɪzd/",
          "example": "The whole point is a decentralized network with no single owner.",
          "category": "core"
        },
        {
          "id": "bw002",
          "english": "blockchain",
          "chinese": "区块链",
          "pronunciation": "/ˈblɑːktʃeɪn/",
          "example": "The blockchain appends a new block roughly every ten minutes.",
          "category": "core"
        },
        {
          "id": "bw003",
          "english": "distributed ledger",
          "chinese": "分布式账本",
          "pronunciation": "/dɪˈstrɪbjuːtɪd ˈledʒər/",
          "example": "A distributed ledger keeps every participant's copy in sync.",
          "category": "core"
        },
        {
          "id": "bw004",
          "english": "smart contract",
          "chinese": "智能合约",
          "pronunciation": "/smɑːrt ˈkɑːntrækt/",
          "example": "The smart contract releases payment when the oracle confirms delivery.",
          "category": "core"
        },
        {
          "id": "bw005",
          "english": "gas fee",
          "chinese": "手续费（Gas 费）",
          "pronunciation": "/ɡæs fiː/",
          "example": "Gas fees spiked to $40 per swap during the mint.",
          "category": "fees"
        },
        {
          "id": "bw006",
          "english": "gas limit",
          "chinese": "Gas 上限",
          "pronunciation": "/ɡæs ˈlɪmɪt/",
          "example": "The transaction reverted because it hit the gas limit.",
          "category": "fees"
        },
        {
          "id": "bw007",
          "english": "mint",
          "chinese": "铸造（NFT/代币）",
          "pronunciation": "/mɪnt/",
          "example": "You can mint one NFT per wallet during the allowlist phase.",
          "category": "actions"
        },
        {
          "id": "bw008",
          "english": "crypto wallet",
          "chinese": "加密钱包",
          "pronunciation": "/ˈkrɪptoʊ ˈwɑːlɪt/",
          "example": "Connect your crypto wallet to sign the transaction.",
          "category": "wallet"
        },
        {
          "id": "bw009",
          "english": "private key",
          "chinese": "私钥",
          "pronunciation": "/ˈpraɪvət kiː/",
          "example": "Never share your private key — not even with support staff.",
          "category": "wallet"
        },
        {
          "id": "bw010",
          "english": "public key",
          "chinese": "公钥",
          "pronunciation": "/ˈpʌblɪk kiː/",
          "example": "The public key is safe to share; it derives your address.",
          "category": "wallet"
        },
        {
          "id": "bw011",
          "english": "seed phrase",
          "chinese": "助记词（种子短语）",
          "pronunciation": "/siːd freɪz/",
          "example": "Write the seed phrase on paper, never in a screenshot.",
          "category": "wallet"
        },
        {
          "id": "bw012",
          "english": "dApp",
          "chinese": "去中心化应用",
          "pronunciation": "/diː æp/",
          "example": "A dApp's frontend is normal web code; the backend is contracts.",
          "category": "core"
        },
        {
          "id": "bw013",
          "english": "DeFi",
          "chinese": "去中心化金融",
          "pronunciation": "/ˌdiː ef ˈaɪ/",
          "example": "DeFi lending lets you borrow against your collateral.",
          "category": "domains"
        },
        {
          "id": "bw014",
          "english": "NFT",
          "chinese": "非同质化代币",
          "pronunciation": "/ˌen ef ˈtiː/",
          "example": "The NFT proves you own this specific artwork, not a copy.",
          "category": "domains"
        },
        {
          "id": "bw015",
          "english": "DAO",
          "chinese": "去中心化自治组织",
          "pronunciation": "/daʊ/",
          "example": "The DAO treasury spends funds only by token vote.",
          "category": "domains"
        },
        {
          "id": "bw016",
          "english": "tokenomics",
          "chinese": "代币经济模型",
          "pronunciation": "/ˌtoʊkənˈɑːmɪks/",
          "example": "Read the tokenomics: 40% to the team with a four-year vest.",
          "category": "domains"
        },
        {
          "id": "bw017",
          "english": "stablecoin",
          "chinese": "稳定币",
          "pronunciation": "/ˈsteɪblkoʊn/",
          "example": "Pay the invoice in a dollar-pegged stablecoin.",
          "category": "domains"
        },
        {
          "id": "bw018",
          "english": "proof of work",
          "chinese": "工作量证明（PoW）",
          "pronunciation": "/pruːf əv wɜːrk/",
          "example": "Proof of work secures Bitcoin by making attacks expensive.",
          "category": "consensus-mech"
        },
        {
          "id": "bw019",
          "english": "proof of stake",
          "chinese": "权益证明（PoS）",
          "pronunciation": "/pruːf əv steɪk/",
          "example": "After the merge, Ethereum runs on proof of stake.",
          "category": "consensus-mech"
        },
        {
          "id": "bw020",
          "english": "staking",
          "chinese": "质押",
          "pronunciation": "/ˈsteɪkɪŋ/",
          "example": "Staking locks your tokens to earn protocol rewards.",
          "category": "actions"
        },
        {
          "id": "bw021",
          "english": "validator node",
          "chinese": "验证节点",
          "pronunciation": "/ˈvælɪdeɪtər noʊd/",
          "example": "Running a validator node requires bonded collateral.",
          "category": "network"
        },
        {
          "id": "bw022",
          "english": "block explorer",
          "chinese": "区块浏览器",
          "pronunciation": "/blɑːk ɪkˈsplɔːrər/",
          "example": "Paste the tx hash into a block explorer to watch it confirm.",
          "category": "tools"
        },
        {
          "id": "bw023",
          "english": "mempool",
          "chinese": "待处理交易池",
          "pronunciation": "/ˈmempuːl/",
          "example": "Low-fee transactions sit in the mempool for hours.",
          "category": "network"
        },
        {
          "id": "bw024",
          "english": "confirmation",
          "chinese": "交易确认数",
          "pronunciation": "/ˌkɑːnfərˈmeɪʃən/",
          "example": "Wait for six confirmations before shipping the goods.",
          "category": "network"
        },
        {
          "id": "bw025",
          "english": "immutable",
          "chinese": "不可篡改的",
          "pronunciation": "/ɪˈmjuːtəbl/",
          "example": "The ledger is immutable: history can never be edited.",
          "category": "properties"
        },
        {
          "id": "bw026",
          "english": "on-chain",
          "chinese": "链上（数据/操作）",
          "pronunciation": "/ɒn tʃeɪn/",
          "example": "Keep the vote tally on-chain so anyone can audit it.",
          "category": "properties"
        },
        {
          "id": "bw027",
          "english": "off-chain",
          "chinese": "链下（数据/操作）",
          "pronunciation": "/ɔːf tʃeɪn/",
          "example": "Store images off-chain; only the hash goes on-chain.",
          "category": "properties"
        },
        {
          "id": "bw028",
          "english": "Layer 2",
          "chinese": "二层网络（L2）",
          "pronunciation": "/ˈleɪər tuː/",
          "example": "A Layer 2 rollup batches transactions and posts one proof to mainnet.",
          "category": "scaling"
        },
        {
          "id": "bw029",
          "english": "sidechain",
          "chinese": "侧链",
          "pronunciation": "/ˈsaɪdtʃeɪn/",
          "example": "The game assets live on a low-fee sidechain.",
          "category": "scaling"
        },
        {
          "id": "bw030",
          "english": "rollup",
          "chinese": "滚动汇总（扩容方案）",
          "pronunciation": "/ˈroʊlʌp/",
          "example": "A zk rollup proves correctness with a single validity proof.",
          "category": "scaling"
        },
        {
          "id": "bw031",
          "english": "cross-chain bridge",
          "chinese": "跨链桥",
          "pronunciation": "/krɔːs tʃeɪn brɪdʒ/",
          "example": "Use the cross-chain bridge to move assets between networks.",
          "category": "scaling"
        },
        {
          "id": "bw032",
          "english": "oracle",
          "chinese": "预言机（喂价/外部数据）",
          "pronunciation": "/ˈɔːrəkl/",
          "example": "The contract reads prices from a decentralized oracle feed.",
          "category": "network"
        },
        {
          "id": "bw033",
          "english": "mainnet",
          "chinese": "主网",
          "pronunciation": "/ˈmeɪnnet/",
          "example": "Deploy to testnet first; mainnet is forever.",
          "category": "network"
        },
        {
          "id": "bw034",
          "english": "testnet",
          "chinese": "测试网",
          "pronunciation": "/ˈtestnet/",
          "example": "Testnet ETH is free and holds no real value.",
          "category": "network"
        },
        {
          "id": "bw035",
          "english": "faucet",
          "chinese": "测试币水龙头",
          "pronunciation": "/ˈfɔːsɪt/",
          "example": "The faucet drips 0.5 test ETH per request.",
          "category": "tools"
        },
        {
          "id": "bw036",
          "english": "airdrop",
          "chinese": "空投",
          "pronunciation": "/ˈerdrɑːp/",
          "example": "Early users qualified for the governance airdrop.",
          "category": "actions"
        },
        {
          "id": "bw037",
          "english": "rug pull",
          "chinese": "卷款跑路（貔貅盘）",
          "pronunciation": "/rʌɡ pʊl/",
          "example": "The founders dumped their tokens — a textbook rug pull.",
          "category": "risks"
        },
        {
          "id": "bw038",
          "english": "cold storage",
          "chinese": "冷存储（离线保存）",
          "pronunciation": "/koʊld ˈstɔːrɪdʒ/",
          "example": "Keep long-term holdings in cold storage.",
          "category": "wallet"
        },
        {
          "id": "bw039",
          "english": "hardware wallet",
          "chinese": "硬件钱包",
          "pronunciation": "/ˈhɑːrdwer ˈwɑːlɪt/",
          "example": "A hardware wallet signs transactions without exposing the key.",
          "category": "wallet"
        },
        {
          "id": "bw040",
          "english": "custody",
          "chinese": "托管",
          "pronunciation": "/ˈkʌstədi/",
          "example": "Exchanges hold custody; wallets give you control.",
          "category": "wallet"
        },
        {
          "id": "bw041",
          "english": "non-custodial wallet",
          "chinese": "非托管钱包",
          "pronunciation": "/nɑːn kʌˈstoʊdiəl ˈwɑːlɪt/",
          "example": "With a non-custodial wallet, you are the bank.",
          "category": "wallet"
        },
        {
          "id": "bw042",
          "english": "whale",
          "chinese": "巨鲸（大户）",
          "pronunciation": "/weɪl/",
          "example": "A whale moved 10,000 ETH and the market noticed.",
          "category": "community"
        },
        {
          "id": "bw043",
          "english": "double spending",
          "chinese": "双花（重复支付）",
          "pronunciation": "/ˈdʌbl ˈspendɪŋ/",
          "example": "Confirmations exist to make double spending impossible.",
          "category": "risks"
        },
        {
          "id": "bw044",
          "english": "51% attack",
          "chinese": "51% 攻击（算力多数攻击）",
          "pronunciation": "/ˌfaɪfti wʌn pərˈsent əˈtæk/",
          "example": "Small chains are vulnerable to a 51% attack.",
          "category": "risks"
        },
        {
          "id": "bw045",
          "english": "zero-knowledge proof",
          "chinese": "零知识证明",
          "pronunciation": "/ˈzɪroʊ ˈnɑːlɪdʒ pruːf/",
          "example": "A zero-knowledge proof shows you're over 18 without revealing your age.",
          "category": "crypto"
        },
        {
          "id": "bw046",
          "english": "Solidity",
          "chinese": "Solidity 语言",
          "pronunciation": "/səˈlɪdəti/",
          "example": "Solidity is the contract language of the EVM world.",
          "category": "dev"
        },
        {
          "id": "bw047",
          "english": "EVM",
          "chinese": "以太坊虚拟机",
          "pronunciation": "/ˌiː viː ˈem/",
          "example": "Any EVM-compatible chain can run the same bytecode.",
          "category": "dev"
        },
        {
          "id": "bw048",
          "english": "reentrancy attack",
          "chinese": "重入攻击",
          "pronunciation": "/riːˈentrənsi əˈtæk/",
          "example": "The DAO hack was a reentrancy attack draining the contract.",
          "category": "risks"
        },
        {
          "id": "bw049",
          "english": "block reward",
          "chinese": "区块奖励",
          "pronunciation": "/blɑːk rɪˈwɔːrd/",
          "example": "Miners compete for the block reward plus fees.",
          "category": "consensus-mech"
        },
        {
          "id": "bw050",
          "english": "halving",
          "chinese": "减半（奖励减半事件）",
          "pronunciation": "/ˈhælvɪŋ/",
          "example": "After each halving, new supply drops by 50%.",
          "category": "consensus-mech"
        }
      ]
    },
    {
      "id": "game-development",
      "name": "Game Development",
      "nameCN": "游戏开发",
      "description": "Game engines, rendering and gameplay programming vocabulary",
      "items": [
        {
          "id": "gd001",
          "english": "game loop",
          "chinese": "游戏主循环",
          "pronunciation": "/ɡeɪm luːp/",
          "example": "The game loop runs input → update → render, 60 times a second.",
          "category": "core"
        },
        {
          "id": "gd002",
          "english": "frame rate",
          "chinese": "帧率",
          "pronunciation": "/freɪm reɪt/",
          "example": "The frame rate dips in the forest scene — too many draw calls.",
          "category": "performance"
        },
        {
          "id": "gd003",
          "english": "delta time",
          "chinese": "帧间隔时间（Δt）",
          "pronunciation": "/ˈdeltə taɪm/",
          "example": "Multiply speed by delta time so movement is framerate-independent.",
          "category": "core"
        },
        {
          "id": "gd004",
          "english": "sprite",
          "chinese": "精灵图（2D 图像）",
          "pronunciation": "/spraɪt/",
          "example": "The character sprite flips horizontally when walking left.",
          "category": "2d"
        },
        {
          "id": "gd005",
          "english": "sprite sheet",
          "chinese": "精灵图集",
          "pronunciation": "/spraɪt ʃiːt/",
          "example": "All animation frames live in one sprite sheet.",
          "category": "2d"
        },
        {
          "id": "gd006",
          "english": "tilemap",
          "chinese": "瓦片地图",
          "pronunciation": "/ˈtaɪlmæp/",
          "example": "The level is a 100×100 tilemap of 16-pixel tiles.",
          "category": "2d"
        },
        {
          "id": "gd007",
          "english": "draw call",
          "chinese": "绘制调用",
          "pronunciation": "/drɔː kɔːl/",
          "example": "Batching sprites cut draw calls from 2000 to 40.",
          "category": "performance"
        },
        {
          "id": "gd008",
          "english": "culling",
          "chinese": "剔除（不渲染不可见物）",
          "pronunciation": "/ˈkʌlɪŋ/",
          "example": "Frustum culling skips everything outside the camera.",
          "category": "performance"
        },
        {
          "id": "gd009",
          "english": "level of detail",
          "chinese": "细节层次（LOD）",
          "pronunciation": "/ˈlevl əv dɪˈteɪl/",
          "example": "Distant rocks swap to a low-poly level of detail mesh.",
          "category": "performance"
        },
        {
          "id": "gd010",
          "english": "tween",
          "chinese": "补间动画",
          "pronunciation": "/twiːn/",
          "example": "A tween moves the button in over 200 ms.",
          "category": "animation"
        },
        {
          "id": "gd011",
          "english": "easing",
          "chinese": "缓动（曲线）",
          "pronunciation": "/ˈiːzɪŋ/",
          "example": "Ease-out easing makes the jump feel snappy at the start.",
          "category": "animation"
        },
        {
          "id": "gd012",
          "english": "state machine",
          "chinese": "状态机",
          "pronunciation": "/steɪt məˈʃiːn/",
          "example": "The boss runs a finite state machine: idle, chase, attack, dead.",
          "category": "gameplay"
        },
        {
          "id": "gd013",
          "english": "collision detection",
          "chinese": "碰撞检测",
          "pronunciation": "/kəˈlɪʒən dɪˈtekʃən/",
          "example": "Use broad-phase collision detection before expensive polygon checks.",
          "category": "physics"
        },
        {
          "id": "gd014",
          "english": "hitbox",
          "chinese": "判定框（碰撞盒）",
          "pronunciation": "/ˈhɪtbɑːks/",
          "example": "Make the hitbox smaller than the sprite — it feels fairer.",
          "category": "physics"
        },
        {
          "id": "gd015",
          "english": "physics engine",
          "chinese": "物理引擎",
          "pronunciation": "/ˈfɪzɪks ˈendʒɪn/",
          "example": "The physics engine resolves gravity, friction and restitution.",
          "category": "physics"
        },
        {
          "id": "gd016",
          "english": "rigid body",
          "chinese": "刚体",
          "pronunciation": "/ˈrɪdʒɪd ˈbɑːdi/",
          "example": "Attach a rigid body and the crate starts obeying gravity.",
          "category": "physics"
        },
        {
          "id": "gd017",
          "english": "particle system",
          "chinese": "粒子系统",
          "pronunciation": "/ˈpɑːrtɪkl ˈsɪstəm/",
          "example": "Explosions, sparks and smoke all come from one particle system.",
          "category": "graphics"
        },
        {
          "id": "gd018",
          "english": "spawn point",
          "chinese": "出生点",
          "pronunciation": "/spɔːn pɔɪnt/",
          "example": "Move the spawn point closer to the boss room.",
          "category": "gameplay"
        },
        {
          "id": "gd019",
          "english": "respawn",
          "chinese": "重生",
          "pronunciation": "/ˌriːˈspɔːn/",
          "example": "Enemies respawn 30 seconds after being defeated.",
          "category": "gameplay"
        },
        {
          "id": "gd020",
          "english": "NPC",
          "chinese": "非玩家角色",
          "pronunciation": "/ˌen piː ˈsiː/",
          "example": "The NPC greets you differently based on quest state.",
          "category": "gameplay"
        },
        {
          "id": "gd021",
          "english": "pathfinding",
          "chinese": "寻路",
          "pronunciation": "/ˈpæθfaɪndɪŋ/",
          "example": "A* pathfinding walks the grid around obstacles.",
          "category": "ai"
        },
        {
          "id": "gd022",
          "english": "behavior tree",
          "chinese": "行为树（AI）",
          "pronunciation": "/bɪˈheɪvjər triː/",
          "example": "Guard AI: a behavior tree of patrol, investigate, attack.",
          "category": "ai"
        },
        {
          "id": "gd023",
          "english": "fog of war",
          "chinese": "战争迷雾",
          "pronunciation": "/fɔːɡ əv wɔːr/",
          "example": "The map hides unexplored areas under fog of war.",
          "category": "gameplay"
        },
        {
          "id": "gd024",
          "english": "level design",
          "chinese": "关卡设计",
          "pronunciation": "/ˈlevl dɪˈzaɪn/",
          "example": "Good level design teaches mechanics without a tutorial.",
          "category": "design"
        },
        {
          "id": "gd025",
          "english": "procedural generation",
          "chinese": "程序化生成",
          "pronunciation": "/prəˈsiːdʒərəl ˌdʒenəˈreɪʃən/",
          "example": "The dungeon layout uses procedural generation from a seed.",
          "category": "design"
        },
        {
          "id": "gd026",
          "english": "game engine",
          "chinese": "游戏引擎",
          "pronunciation": "/ɡeɪm ˈendʒɪn/",
          "example": "Unity, Unreal and Godot are the big three game engines.",
          "category": "core"
        },
        {
          "id": "gd027",
          "english": "prefab",
          "chinese": "预制体（可复用对象模板）",
          "pronunciation": "/ˈpriːfæb/",
          "example": "Turn the finished enemy into a prefab and instantiate it anywhere.",
          "category": "engines"
        },
        {
          "id": "gd028",
          "english": "asset",
          "chinese": "美术资源",
          "pronunciation": "/ˈæset/",
          "example": "The asset bundle downloads on first launch.",
          "category": "engines"
        },
        {
          "id": "gd029",
          "english": "texture",
          "chinese": "贴图／纹理",
          "pronunciation": "/ˈtekstʃər/",
          "example": "A 4K texture looks great but doubles memory use.",
          "category": "graphics"
        },
        {
          "id": "gd030",
          "english": "shader",
          "chinese": "着色器",
          "pronunciation": "/ˈʃeɪdər/",
          "example": "The water shader handles reflection and waves on the GPU.",
          "category": "graphics"
        },
        {
          "id": "gd031",
          "english": "vertex",
          "chinese": "顶点",
          "pronunciation": "/ˈvɜːrteks/",
          "example": "The mesh deforms by moving each vertex along a bone weight.",
          "category": "graphics"
        },
        {
          "id": "gd032",
          "english": "polygon count",
          "chinese": "多边形数量（面数）",
          "pronunciation": "/ˈpɑːliɡɑːn kaʊnt/",
          "example": "Keep the polygon count under 30k for mobile.",
          "category": "graphics"
        },
        {
          "id": "gd033",
          "english": "mesh",
          "chinese": "网格模型",
          "pronunciation": "/meʃ/",
          "example": "The character mesh is skinned to 52 bones.",
          "category": "graphics"
        },
        {
          "id": "gd034",
          "english": "rigging",
          "chinese": "绑骨（骨骼绑定）",
          "pronunciation": "/ˈrɪɡɪŋ/",
          "example": "Rigging took a week; the model had 80 joints.",
          "category": "animation"
        },
        {
          "id": "gd035",
          "english": "skeletal animation",
          "chinese": "骨骼动画",
          "pronunciation": "/ˈskelətl ˌænɪˈmeɪʃən/",
          "example": "Skeletal animation blends a run cycle with an aim pose.",
          "category": "animation"
        },
        {
          "id": "gd036",
          "english": "cutscene",
          "chinese": "过场动画",
          "pronunciation": "/ˈkʌtsiːn/",
          "example": "Skip the cutscene after the player has seen it once.",
          "category": "design"
        },
        {
          "id": "gd037",
          "english": "game feel",
          "chinese": "游戏手感（打击感）",
          "pronunciation": "/ɡeɪm fiːl/",
          "example": "Screen shake and hit-stop are cheap game feel wins.",
          "category": "design"
        },
        {
          "id": "gd038",
          "english": "hit-stop",
          "chinese": "打击停顿（顿帧）",
          "pronunciation": "/hɪt stɑːp/",
          "example": "Two frames of hit-stop make every punch land.",
          "category": "design"
        },
        {
          "id": "gd039",
          "english": "cooldown",
          "chinese": "冷却时间",
          "pronunciation": "/ˈkoʊldaʊn/",
          "example": "The dash has a 1.5-second cooldown.",
          "category": "gameplay"
        },
        {
          "id": "gd040",
          "english": "drop rate",
          "chinese": "掉落率",
          "pronunciation": "/drɑːp reɪt/",
          "example": "The sword's drop rate is 0.5% — expect a grind.",
          "category": "gameplay"
        },
        {
          "id": "gd041",
          "english": "checkpoint",
          "chinese": "存档点（检查点）",
          "pronunciation": "/ˈtʃekpɔɪnt/",
          "example": "You respawn at the last checkpoint with half health.",
          "category": "gameplay"
        },
        {
          "id": "gd042",
          "english": "difficulty curve",
          "chinese": "难度曲线",
          "pronunciation": "/ˈdɪfɪkəlti kɜːrv/",
          "example": "Playtest data showed the difficulty curve spikes at level 4.",
          "category": "design"
        },
        {
          "id": "gd043",
          "english": "playtesting",
          "chinese": "试玩测试",
          "pronunciation": "/ˈpleɪtestɪŋ/",
          "example": "Watch playtesting sessions without saying a word.",
          "category": "process"
        },
        {
          "id": "gd044",
          "english": "vertical slice",
          "chinese": "垂直切片（核心玩法完整样段）",
          "pronunciation": "/ˈvɜːrtɪkl slaɪs/",
          "example": "Build a vertical slice before greenlighting the full game.",
          "category": "process"
        },
        {
          "id": "gd045",
          "english": "physics tick",
          "chinese": "物理帧（固定步长）",
          "pronunciation": "/ˈfɪzɪks tɪk/",
          "example": "Run the physics tick at a fixed 60 Hz, render unlocked.",
          "category": "physics"
        },
        {
          "id": "gd046",
          "english": "input lag",
          "chinese": "输入延迟",
          "pronunciation": "/ˈɪnpʊt læɡ/",
          "example": "Above 50 ms of input lag, the game feels mushy.",
          "category": "performance"
        },
        {
          "id": "gd047",
          "english": "render pipeline",
          "chinese": "渲染管线",
          "pronunciation": "/ˈrendər ˈpaɪplaɪn/",
          "example": "The new render pipeline uses deferred shading.",
          "category": "graphics"
        },
        {
          "id": "gd048",
          "english": "draw order",
          "chinese": "绘制顺序（层叠顺序）",
          "pronunciation": "/drɔː ˈɔːrdər/",
          "example": "Sort by draw order so clouds render behind the player.",
          "category": "2d"
        },
        {
          "id": "gd049",
          "english": "isometric view",
          "chinese": "等距视角",
          "pronunciation": "/ˌaɪsəˈmetrɪk vjuː/",
          "example": "The farm sim uses a classic isometric view.",
          "category": "design"
        },
        {
          "id": "gd050",
          "english": "hit point",
          "chinese": "生命值（HP）",
          "pronunciation": "/hɪt pɔɪnt/",
          "example": "The shield adds 50 hit points for three seconds.",
          "category": "gameplay"
        }
      ]
    },
    {
      "id": "embedded-systems",
      "name": "Embedded Systems",
      "nameCN": "嵌入式系统",
      "description": "Firmware, microcontrollers and hardware interface vocabulary",
      "items": [
        {
          "id": "em001",
          "english": "firmware",
          "chinese": "固件",
          "pronunciation": "/ˈfɜːrmwer/",
          "example": "The firmware update adds Matter support to the hub.",
          "category": "core"
        },
        {
          "id": "em002",
          "english": "microcontroller",
          "chinese": "微控制器（MCU）",
          "pronunciation": "/ˈmaɪkroʊkənˌtroʊlər/",
          "example": "An ESP32 microcontroller drives the whole sensor node.",
          "category": "core"
        },
        {
          "id": "em003",
          "english": "GPIO",
          "chinese": "通用输入输出引脚",
          "pronunciation": "/ˌdʒiː piː aɪ ˈoʊ/",
          "example": "Blink the LED by toggling GPIO 2.",
          "category": "pins"
        },
        {
          "id": "em004",
          "english": "PWM",
          "chinese": "脉宽调制",
          "pronunciation": "/ˌpiː dʌbljuː ˈem/",
          "example": "PWM controls motor speed by varying duty cycle.",
          "category": "signals"
        },
        {
          "id": "em005",
          "english": "analog-to-digital converter",
          "chinese": "模数转换器（ADC）",
          "pronunciation": "/ˈænəlɔːɡ tuː ˈdɪdʒɪtl kənˈvɜːrtər/",
          "example": "The ADC reads the temperature sensor at 12-bit resolution.",
          "category": "signals"
        },
        {
          "id": "em006",
          "english": "register",
          "chinese": "寄存器",
          "pronunciation": "/ˈredʒɪstər/",
          "example": "Write the config value to the status register.",
          "category": "core"
        },
        {
          "id": "em007",
          "english": "memory-mapped I/O",
          "chinese": "内存映射 I/O",
          "pronunciation": "/ˈmeməri mæpt ˌaɪ ˈoʊ/",
          "example": "With memory-mapped I/O, peripherals look like normal memory addresses.",
          "category": "core"
        },
        {
          "id": "em008",
          "english": "interrupt handler",
          "chinese": "中断处理函数",
          "pronunciation": "/ˌɪntəˈrʌpt ˈhændlər/",
          "example": "Keep the interrupt handler short; set a flag and return.",
          "category": "interrupts"
        },
        {
          "id": "em009",
          "english": "interrupt latency",
          "chinese": "中断延迟",
          "pronunciation": "/ˌɪntəˈrʌpt ˈleɪtənsi/",
          "example": "Interrupt latency must stay under 10 µs for motor control.",
          "category": "interrupts"
        },
        {
          "id": "em010",
          "english": "interrupt priority",
          "chinese": "中断优先级",
          "pronunciation": "/ˌɪntəˈrʌpt praɪˈɔːrəti/",
          "example": "The safety stop gets the highest interrupt priority.",
          "category": "interrupts"
        },
        {
          "id": "em011",
          "english": "real-time operating system",
          "chinese": "实时操作系统（RTOS）",
          "pronunciation": "/ˈriːəl taɪm ˈɑːpəreɪtɪŋ ˈsɪstəm/",
          "example": "FreeRTOS is a small real-time operating system for MCUs.",
          "category": "software"
        },
        {
          "id": "em012",
          "english": "watchdog timer",
          "chinese": "看门狗定时器",
          "pronunciation": "/ˈwɑːtʃdɔːɡ ˈtaɪmər/",
          "example": "If the main loop hangs, the watchdog timer resets the chip.",
          "category": "reliability"
        },
        {
          "id": "em013",
          "english": "cross-compilation",
          "chinese": "交叉编译",
          "pronunciation": "/krɔːs ˌkɑːmpɪˈleɪʃən/",
          "example": "Cross-compilation builds ARM binaries on your x86 laptop.",
          "category": "toolchain"
        },
        {
          "id": "em014",
          "english": "toolchain",
          "chinese": "工具链",
          "pronunciation": "/ˈtuːltʃeɪn/",
          "example": "The toolchain bundles compiler, linker and debugger for the target.",
          "category": "toolchain"
        },
        {
          "id": "em015",
          "english": "flashing",
          "chinese": "烧录固件",
          "pronunciation": "/ˈflæʃɪŋ/",
          "example": "Flashing new firmware takes about 20 seconds over USB.",
          "category": "toolchain"
        },
        {
          "id": "em016",
          "english": "JTAG",
          "chinese": "JTAG 调试接口",
          "pronunciation": "/ˈdʒeɪtæɡ/",
          "example": "Connect the JTAG probe to step through the boot code.",
          "category": "toolchain"
        },
        {
          "id": "em017",
          "english": "datasheet",
          "chinese": "数据手册",
          "pronunciation": "/ˈdeɪtəʃiːt/",
          "example": "The datasheet says max clock is 133 MHz at 3.3 V.",
          "category": "hardware"
        },
        {
          "id": "em018",
          "english": "schematic",
          "chinese": "电路原理图",
          "pronunciation": "/skiːˈmætɪk/",
          "example": "Check the schematic before wiring the sensor.",
          "category": "hardware"
        },
        {
          "id": "em019",
          "english": "pull-up resistor",
          "chinese": "上拉电阻",
          "pronunciation": "/pʊl ʌp rɪˈzɪstər/",
          "example": "The I2C bus needs a 4.7 kΩ pull-up resistor on each line.",
          "category": "hardware"
        },
        {
          "id": "em020",
          "english": "breadboard",
          "chinese": "面包板",
          "pronunciation": "/ˈbredbɔːrd/",
          "example": "Prototype the circuit on a breadboard before soldering.",
          "category": "hardware"
        },
        {
          "id": "em021",
          "english": "oscilloscope",
          "chinese": "示波器",
          "pronunciation": "/əˈsɪləskoʊp/",
          "example": "The oscilloscope shows the SPI clock at 2 MHz.",
          "category": "hardware"
        },
        {
          "id": "em022",
          "english": "logic analyzer",
          "chinese": "逻辑分析仪",
          "pronunciation": "/ˈlɑːdʒɪk ˈænəlaɪzər/",
          "example": "A cheap logic analyzer decodes the I2C traffic for you.",
          "category": "hardware"
        },
        {
          "id": "em023",
          "english": "bare-metal programming",
          "chinese": "裸机编程（无操作系统）",
          "pronunciation": "/ber ˈmetl ˈproʊɡræmɪŋ/",
          "example": "Bare-metal programming means you own every clock cycle.",
          "category": "software"
        },
        {
          "id": "em024",
          "english": "peripheral",
          "chinese": "外设",
          "pronunciation": "/pəˈrɪfərəl/",
          "example": "Enable the UART peripheral before configuring its pins.",
          "category": "core"
        },
        {
          "id": "em025",
          "english": "UART",
          "chinese": "通用异步收发器（串口）",
          "pronunciation": "/ˈjuːɑːrt/",
          "example": "Debug logs go out over UART at 115200 baud.",
          "category": "buses"
        },
        {
          "id": "em026",
          "english": "SPI",
          "chinese": "串行外设接口",
          "pronunciation": "/ˌes piː ˈaɪ/",
          "example": "The display connects over SPI at 40 MHz.",
          "category": "buses"
        },
        {
          "id": "em027",
          "english": "I2C",
          "chinese": "I2C 总线（两线制）",
          "pronunciation": "/ˌaɪ skweərd ˈsiː/",
          "example": "Both sensors share one I2C bus with different addresses.",
          "category": "buses"
        },
        {
          "id": "em028",
          "english": "CAN bus",
          "chinese": "CAN 总线（车载）",
          "pronunciation": "/kæn bʌs/",
          "example": "Modern cars run dozens of ECUs on a CAN bus.",
          "category": "buses"
        },
        {
          "id": "em029",
          "english": "direct memory access",
          "chinese": "直接内存访问（DMA）",
          "pronunciation": "/dəˈrekt ˈmeməri ˈækˌses/",
          "example": "DMA moves the ADC samples to RAM without CPU help.",
          "category": "core"
        },
        {
          "id": "em030",
          "english": "bit manipulation",
          "chinese": "位运算操作",
          "pronunciation": "/bɪt məˌnɪpjuˈleɪʃən/",
          "example": "Bit manipulation sets bit 3 without touching the others.",
          "category": "software"
        },
        {
          "id": "em031",
          "english": "bitmask",
          "chinese": "位掩码",
          "pronunciation": "/ˈbɪtmæsk/",
          "example": "Pass a bitmask of enabled features to init().",
          "category": "software"
        },
        {
          "id": "em032",
          "english": "endianness",
          "chinese": "字节序",
          "pronunciation": "/ˈendiənnəs/",
          "example": "The protocol is big-endian; your MCU is little-endian — swap.",
          "category": "software"
        },
        {
          "id": "em033",
          "english": "volatile keyword",
          "chinese": "volatile 关键字",
          "pronunciation": "/ˈvɑːlətl ˈkiːwɜːrd/",
          "example": "Mark hardware registers volatile or the optimizer breaks them.",
          "category": "software"
        },
        {
          "id": "em034",
          "english": "soft reset",
          "chinese": "软复位",
          "pronunciation": "/sɔːft ˈriːset/",
          "example": "A soft reset reboots the firmware without power cycling.",
          "category": "reliability"
        },
        {
          "id": "em035",
          "english": "hard fault",
          "chinese": "硬错误（异常崩溃）",
          "pronunciation": "/hɑːrd fɔːlt/",
          "example": "A null pointer dereference triggers a hard fault handler.",
          "category": "reliability"
        },
        {
          "id": "em036",
          "english": "brown-out detection",
          "chinese": "欠压检测",
          "pronunciation": "/braʊn aʊt dɪˈtekʃən/",
          "example": "Brown-out detection saves flash when the battery sags.",
          "category": "power"
        },
        {
          "id": "em037",
          "english": "deep sleep mode",
          "chinese": "深度睡眠模式",
          "pronunciation": "/diːp sliːp moʊd/",
          "example": "In deep sleep mode the board draws 10 µA.",
          "category": "power"
        },
        {
          "id": "em038",
          "english": "duty cycle",
          "chinese": "占空比",
          "pronunciation": "/ˈduːti ˈsaɪkl/",
          "example": "A 25% duty cycle keeps the heater at quarter power.",
          "category": "power"
        },
        {
          "id": "em039",
          "english": "power consumption",
          "chinese": "功耗",
          "pronunciation": "/ˈpaʊər kənˈsʌmpʃən/",
          "example": "Power consumption matters more than speed on battery devices.",
          "category": "power"
        },
        {
          "id": "em040",
          "english": "sensor fusion",
          "chinese": "传感器融合",
          "pronunciation": "/ˈsensər ˈfjuːʒən/",
          "example": "Sensor fusion merges accelerometer and gyro data for stable orientation.",
          "category": "applications"
        },
        {
          "id": "em041",
          "english": "firmware over-the-air",
          "chinese": "OTA 固件升级",
          "pronunciation": "/ˈfɜːrmwer ˈoʊvər ði ˈer/",
          "example": "Firmware over-the-air updates ship in signed A/B partitions.",
          "category": "reliability"
        },
        {
          "id": "em042",
          "english": "real-time constraint",
          "chinese": "实时性约束",
          "pronunciation": "/ˈriːəl taɪm kənˈstreɪnt/",
          "example": "The control loop has a 1 ms real-time constraint.",
          "category": "core"
        },
        {
          "id": "em043",
          "english": "determinism",
          "chinese": "确定性（时间可预测）",
          "pronunciation": "/dɪˌtɜːrmɪˈnɪzəm/",
          "example": "Hard real-time systems demand timing determinism.",
          "category": "core"
        },
        {
          "id": "em044",
          "english": "hard real-time",
          "chinese": "硬实时",
          "pronunciation": "/hɑːrd ˈriːəl taɪm/",
          "example": "Airbag deployment is a hard real-time task.",
          "category": "core"
        },
        {
          "id": "em045",
          "english": "soft real-time",
          "chinese": "软实时",
          "pronunciation": "/sɔːft ˈriːəl taɪm/",
          "example": "Video streaming is soft real-time: late frames degrade, not kill.",
          "category": "core"
        },
        {
          "id": "em046",
          "english": "single-board computer",
          "chinese": "单板计算机",
          "pronunciation": "/ˈsɪŋɡəl bɔːrd kəmˈpjuːtər/",
          "example": "A Raspberry Pi is a single-board computer running Linux.",
          "category": "hardware"
        },
        {
          "id": "em047",
          "english": "System on a Chip",
          "chinese": "片上系统（SoC）",
          "pronunciation": "/ˈsɪstəm ɑːn ə tʃɪp/",
          "example": "The SoC integrates CPU, radio and flash on one die.",
          "category": "hardware"
        },
        {
          "id": "em048",
          "english": "analog pin",
          "chinese": "模拟引脚",
          "pronunciation": "/ˈænəlɔːɡ pɪn/",
          "example": "Plug the potentiometer into an analog pin.",
          "category": "pins"
        },
        {
          "id": "em049",
          "english": "debouncing",
          "chinese": "按键消抖",
          "pronunciation": "/diˈbaʊnsɪŋ/",
          "example": "Without debouncing, one button press registers as five.",
          "category": "software"
        },
        {
          "id": "em050",
          "english": "pulse sensor",
          "chinese": "脉冲传感器",
          "pronunciation": "/pʌls ˈsensər/",
          "example": "The pulse sensor counts wheel rotations for the odometer.",
          "category": "applications"
        }
      ]
    }
  ]
};

if (typeof module !== 'undefined' && module.exports) {
  module.exports = computerEnglishData;
}
