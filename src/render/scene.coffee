class MathBox extends THREE.Object3D

class Scene
  constructor: (@scene) ->
    @root = new MathBox

  inject: () ->
    @scene.add @root

  unject: () ->
    @scene.remove @root

  add: (object) ->
    @root.add object

  remove: (object) ->
    @root.remove object

module.exports = Scene