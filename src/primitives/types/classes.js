/* eslint-disable sort-imports */
import { Group, Inherit, Root, Unit } from "./base/index.js";
import { Camera } from "./camera/index.js";
import {
  Area,
  Array_,
  Interval,
  Latch,
  Matrix,
  Scale,
  Volume,
  Voxel,
} from "./data/index.js";
import {
  Axis,
  Face,
  Grid,
  Line,
  Point,
  Strip,
  Surface,
  Ticks,
  Vector,
} from "./draw/index.js";
import { DOM, HTML } from "./overlay/index.js";
import { Format, Label, Retext, Text } from "./text/index.js";
import { Clock, Now } from "./time/index.js";
import {
  Fragment,
  Layer,
  Mask,
  Transform3,
  Transform4,
  Vertex,
} from "./transform/index.js";
import {
  Clamp,
  Grow,
  Join,
  Lerp,
  Memo,
  Readback,
  Repeat,
  Resample,
  Reverse,
  Slice,
  Split,
  Spread,
  Subdivide,
  Swizzle,
  Transpose,
} from "./operator/index.js";
import { Move, Play, Present, Reveal, Slide, Step } from "./present/index.js";
import { Compose, RTT } from "./rtt/index.js";
import {
  Cartesian,
  Cartesian4,
  Polar,
  Spherical,
  Stereographic,
  Stereographic4,
  View,
} from "./view/index.js";

import { Shader } from "./shader/index.js";

export const Classes = {
  axis: Axis,
  face: Face,
  grid: Grid,
  line: Line,
  point: Point,
  strip: Strip,
  surface: Surface,
  ticks: Ticks,
  vector: Vector,

  view: View,
  cartesian: Cartesian,
  cartesian4: Cartesian4,
  polar: Polar,
  spherical: Spherical,
  stereographic: Stereographic,
  stereographic4: Stereographic4,

  transform: Transform3,
  transform4: Transform4,
  vertex: Vertex,
  fragment: Fragment,
  layer: Layer,
  mask: Mask,

  array: Array_,
  interval: Interval,
  matrix: Matrix,
  area: Area,
  voxel: Voxel,
  volume: Volume,
  scale: Scale,
  latch: Latch,

  html: HTML,
  dom: DOM,

  text: Text,
  format: Format,
  label: Label,
  retext: Retext,

  clamp: Clamp,
  grow: Grow,
  join: Join,
  lerp: Lerp,
  memo: Memo,
  readback: Readback,
  resample: Resample,
  repeat: Repeat,
  reverse: Reverse,
  swizzle: Swizzle,
  spread: Spread,
  split: Split,
  slice: Slice,
  subdivide: Subdivide,
  transpose: Transpose,

  group: Group,
  inherit: Inherit,
  root: Root,
  unit: Unit,

  shader: Shader,

  camera: Camera,

  rtt: RTT,
  compose: Compose,

  clock: Clock,
  now: Now,

  move: Move,
  play: Play,
  present: Present,
  reveal: Reveal,
  slide: Slide,
  step: Step,
};
