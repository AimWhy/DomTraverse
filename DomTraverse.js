var DomTraverse = {
    getPrevBeginTagNode: function (node) {
        if (!node.previousSibling) {
            return node.parentNode;
        } else {
            var leaf = node.previousSibling;
            while (leaf.lastChild) {
                leaf = leaf.lastChild;
            }
            return leaf;
        }
    },
    getNextBeginTagNode: function (node) {
        if (node.firstChild) {
            return node.firstChild;
        } else {
            while (node && !node.nextSibling) {
                node = node.parentNode;
            }
            return node ? node.nextSibling : node;
        }
    },
    getPrevEndTagNode: function (node) {
        if (node.lastChild) {
            return node.lastChild;
        } else {
            while (node && !node.previousSibling) {
                node = node.parentNode;
            }
            return node ? node.previousSibling : node;
        }
    },
    getNextEndTagNode: function (node) {
        if (!node.nextSibling) {
            return node.parentNode;
        } else {
            var leaf = node.nextSibling;
            while (leaf.firstChild) {
                leaf = leaf.firstChild;
            }
            return leaf;
        }
    },
    getPrevBeginTagLeaf: function (node) {
        var leaf = DomTraverse.getPrevBeginTagNode(node);
        while (leaf && leaf.firstChild) {
            leaf = DomTraverse.getPrevBeginTagNode(leaf);
        }
        return leaf;
    },
    getNextBeginTagLeaf: function (node) {
        var leaf = DomTraverse.getNextBeginTagNode(node);
        while (leaf && leaf.firstChild) {
            leaf = DomTraverse.getNextBeginTagNode(leaf);
        }
        return leaf;
    },
    getPrevEndTagLeaf: function (node) {
        var leaf = DomTraverse.getPrevEndTagNode(node);
        while (leaf && leaf.firstChild) {
            leaf = DomTraverse.getPrevEndTagNode(leaf);
        }
        return leaf;
    },
    getNextEndTagLeaf: function (node) {
        var leaf = DomTraverse.getNextEndTagNode(node);
        while (leaf && leaf.firstChild) {
            leaf = DomTraverse.getNextEndTagNode(leaf);
        }
        return leaf;
    }
};
