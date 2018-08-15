"use strict";

const postForm = {
    bindings: {
    addPost: "&"
    },
    template: `
    <section ng-show="showForm">
    <form ng-submit="$ctrl.addPost({ newPost: $ctrl.postForm });">
        <label class="form_label">Title</label>
        <input type=text ng-model="$ctrl.postForm.title">
        <label class="form_label">Thought</label>
        <input type=text ng-model="$ctrl.postForm.thought">
        <button ng-click = "$ctrl.addPost({ newPost: $ctrl.newPost });">Add Post</button>
    </form>
    </section>
    `
};

angular
    .module("App")
    .component("postForm", postForm);