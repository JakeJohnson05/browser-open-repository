/*
repo() {
	alias repo="git remote -v 2>/dev/null | awk \"/^origin.*\(push\)$/ {print \\\$2}\" | xargs start chrome"
alias repo="git remote -v 2>/dev/null | sed -rn \"s/^origin\s(.*)\s\(push\)$/\1/p\""
	isGit || return 1;
	local repoUrl=$(git remote -v 2>/dev/null | awk '/^origin\s.*\s\(push\)$/ {print $2}')
	local repoUrl=$(git remote -v 2>/dev/null | awk '/^origin\s.*\s\(push\)$/ {print $2}')
	echo "repoUrl: $repoUrl"
	[ -z "$repoUrl" ] && { printErr "No repoURL found"; return 1; }
	echo "Repo URL exists"
}
*/
// "test": "xo && ava && tsd"
