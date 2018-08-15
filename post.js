"use strict";

const post = {
    bindings: {
        post: "<",
        index: "<",
        deletePost: "&"
    },
    template:`
    <h3>{{ $ctrl.post.title }}<h3>
    <p>{{ $ctrl.post.thought }}</p>
    <i ng-click = "$ctrl.deletePost({ index: $ctrl.index });" class="material-icons">
    close</i>
    `
};

angular
    .module("App")
    .component("post", post);