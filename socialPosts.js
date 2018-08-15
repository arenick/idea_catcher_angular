"use strict";

const socialPosts = {
    template: `
    <h1>My Thoughts</h1>
    <button ng-model="showForm">New Thought</button>
    <post delete-post="$ctrl.deletePost(index);" post="post" index="index" ng-repeat="post in $ctrl.postList track by $index"></post>
    <post-form add-post="$ctrl.addPost(newPost);"></post-form>
    `,
    controller: function () {
        const vm = this;
        vm.postList = [
            {
            title: "Whale",
            thought: "Whales are very large"
            },
            {
            title: "Dog",
            thought: "Some dogs are stinky"
            }
        ];
        vm.addPost = (newPost) => {
            vm.postList.push(angular.copy(newPost));
        }
        vm.deletePost = (index) => {
            console.log(index);
            vm.postList.splice(index,1);
        }
    }
}

angular
    .module('App')
    .component("socialPosts", socialPosts);