import arrowposition from "./glsl/arrow.position.js";
import axisposition from "./glsl/axis.position.js";
import cartesian4position from "./glsl/cartesian4.position.js";
import cartesianposition from "./glsl/cartesian.position.js";
import clampposition from "./glsl/clamp.position.js";
import coloropaque from "./glsl/color.opaque.js";
import faceposition from "./glsl/face.position.js";
import facepositionnormal from "./glsl/face.position.normal.js";
import floatencode from "./glsl/float.encode.js";
import floatindexpack from "./glsl/float.index.pack.js";
import floatstretch from "./glsl/float.stretch.js";
import fragmentclipdashed from "./glsl/fragment.clip.dashed.js";
import fragmentclipdotted from "./glsl/fragment.clip.dotted.js";
import fragmentclipends from "./glsl/fragment.clip.ends.js";
import fragmentclipproximity from "./glsl/fragment.clip.proximity.js";
import fragmentcolor from "./glsl/fragment.color.js";
import fragmentmaprgba from "./glsl/fragment.map.rgba.js";
import fragmentsolid from "./glsl/fragment.solid.js";
import fragmenttransparent from "./glsl/fragment.transparent.js";
import gridposition from "./glsl/grid.position.js";
import growposition from "./glsl/grow.position.js";
import joinposition from "./glsl/join.position.js";
import labelalpha from "./glsl/label.alpha.js";
import labelmap from "./glsl/label.map.js";
import labeloutline from "./glsl/label.outline.js";
import layerposition from "./glsl/layer.position.js";
import lerpdepth from "./glsl/lerp.depth.js";
import lerpheight from "./glsl/lerp.height.js";
import lerpitems from "./glsl/lerp.items.js";
import lerpwidth from "./glsl/lerp.width.js";
import lineposition from "./glsl/line.position.js";
import map2ddata from "./glsl/map.2d.data.js";
import map2ddatawrap from "./glsl/map.2d.data.wrap.js";
import mapxyzw2dv from "./glsl/map.xyzw.2dv.js";
import mapxyzwalign from "./glsl/map.xyzw.align.js";
import mapxyzwtexture from "./glsl/map.xyzw.texture.js";
import meshfragmentcolor from "./glsl/mesh.fragment.color.js";
import meshfragmentmap from "./glsl/mesh.fragment.map.js";
import meshfragmentmask from "./glsl/mesh.fragment.mask.js";
import meshfragmentmaterial from "./glsl/mesh.fragment.material.js";
import meshfragmentshaded from "./glsl/mesh.fragment.shaded.js";
import meshfragmenttexture from "./glsl/mesh.fragment.texture.js";
import meshgammain from "./glsl/mesh.gamma.in.js";
import meshgammaout from "./glsl/mesh.gamma.out.js";
import meshmapuvwo from "./glsl/mesh.map.uvwo.js";
import meshposition from "./glsl/mesh.position.js";
import meshvertexcolor from "./glsl/mesh.vertex.color.js";
import meshvertexmask from "./glsl/mesh.vertex.mask.js";
import meshvertexposition from "./glsl/mesh.vertex.position.js";
import moveposition from "./glsl/move.position.js";
import objectmaskdefault from "./glsl/object.mask.default.js";
import pointalphacircle from "./glsl/point.alpha.circle.js";
import pointalphacirclehollow from "./glsl/point.alpha.circle.hollow.js";
import pointalphageneric from "./glsl/point.alpha.generic.js";
import pointalphagenerichollow from "./glsl/point.alpha.generic.hollow.js";
import pointedge from "./glsl/point.edge.js";
import pointfill from "./glsl/point.fill.js";
import pointmaskcircle from "./glsl/point.mask.circle.js";
import pointmaskdiamond from "./glsl/point.mask.diamond.js";
import pointmaskdown from "./glsl/point.mask.down.js";
import pointmaskleft from "./glsl/point.mask.left.js";
import pointmaskright from "./glsl/point.mask.right.js";
import pointmasksquare from "./glsl/point.mask.square.js";
import pointmaskup from "./glsl/point.mask.up.js";
import pointposition from "./glsl/point.position.js";
import pointsizeuniform from "./glsl/point.size.uniform.js";
import pointsizevarying from "./glsl/point.size.varying.js";
import polarposition from "./glsl/polar.position.js";
import projectposition from "./glsl/project.position.js";
import projectreadback from "./glsl/project.readback.js";
import rawpositionscale from "./glsl/raw.position.scale.js";
import repeatposition from "./glsl/repeat.position.js";
import resamplepadding from "./glsl/resample.padding.js";
import resamplerelative from "./glsl/resample.relative.js";
import revealmask from "./glsl/reveal.mask.js";
import reverseposition from "./glsl/reverse.position.js";
import rootposition from "./glsl/root.position.js";
import sample2d from "./glsl/sample.2d.js";
import scaleposition from "./glsl/scale.position.js";
import screenmapstpq from "./glsl/screen.map.stpq.js";
import screenmapxy from "./glsl/screen.map.xy.js";
import screenmapxyzw from "./glsl/screen.map.xyzw.js";
import screenpassuv from "./glsl/screen.pass.uv.js";
import screenposition from "./glsl/screen.position.js";
import sliceposition from "./glsl/slice.position.js";
import sphericalposition from "./glsl/spherical.position.js";
import splitposition from "./glsl/split.position.js";
import spreadposition from "./glsl/spread.position.js";
import spritefragment from "./glsl/sprite.fragment.js";
import spriteposition from "./glsl/sprite.position.js";
import stereographic4position from "./glsl/stereographic4.position.js";
import stereographicposition from "./glsl/stereographic.position.js";
import stpqsample2d from "./glsl/stpq.sample.2d.js";
import stpqxyzw2d from "./glsl/stpq.xyzw.2d.js";
import strippositionnormal from "./glsl/strip.position.normal.js";
import stylecolor from "./glsl/style.color.js";
import subdividedepth from "./glsl/subdivide.depth.js";
import subdividedepthlerp from "./glsl/subdivide.depth.lerp.js";
import subdivideheight from "./glsl/subdivide.height.js";
import subdivideheightlerp from "./glsl/subdivide.height.lerp.js";
import subdivideitems from "./glsl/subdivide.items.js";
import subdivideitemslerp from "./glsl/subdivide.items.lerp.js";
import subdividewidth from "./glsl/subdivide.width.js";
import subdividewidthlerp from "./glsl/subdivide.width.lerp.js";
import surfacemaskhollow from "./glsl/surface.mask.hollow.js";
import surfaceposition from "./glsl/surface.position.js";
import surfacepositionnormal from "./glsl/surface.position.normal.js";
import surfacepositionshaded from "./glsl/surface.position.shaded.js";
import ticksposition from "./glsl/ticks.position.js";
import transform3position from "./glsl/transform3.position.js";
import transform4position from "./glsl/transform4.position.js";
import viewposition from "./glsl/view.position.js";

export const Snippets = {
  "arrow.position": arrowposition,
  "axis.position": axisposition,
  "cartesian.position": cartesianposition,
  "cartesian4.position": cartesian4position,
  "clamp.position": clampposition,
  "color.opaque": coloropaque,
  "face.position": faceposition,
  "face.position.normal": facepositionnormal,
  "float.encode": floatencode,
  "float.index.pack": floatindexpack,
  "float.stretch": floatstretch,
  "fragment.clip.dashed": fragmentclipdashed,
  "fragment.clip.dotted": fragmentclipdotted,
  "fragment.clip.ends": fragmentclipends,
  "fragment.clip.proximity": fragmentclipproximity,
  "fragment.color": fragmentcolor,
  "fragment.map.rgba": fragmentmaprgba,
  "fragment.solid": fragmentsolid,
  "fragment.transparent": fragmenttransparent,
  "grid.position": gridposition,
  "grow.position": growposition,
  "join.position": joinposition,
  "label.alpha": labelalpha,
  "label.map": labelmap,
  "label.outline": labeloutline,
  "layer.position": layerposition,
  "lerp.depth": lerpdepth,
  "lerp.height": lerpheight,
  "lerp.items": lerpitems,
  "lerp.width": lerpwidth,
  "line.position": lineposition,
  "map.2d.data": map2ddata,
  "map.2d.data.wrap": map2ddatawrap,
  "map.xyzw.2dv": mapxyzw2dv,
  "map.xyzw.align": mapxyzwalign,
  "map.xyzw.texture": mapxyzwtexture,
  "mesh.fragment.color": meshfragmentcolor,
  "mesh.fragment.map": meshfragmentmap,
  "mesh.fragment.mask": meshfragmentmask,
  "mesh.fragment.material": meshfragmentmaterial,
  "mesh.fragment.shaded": meshfragmentshaded,
  "mesh.fragment.texture": meshfragmenttexture,
  "mesh.gamma.in": meshgammain,
  "mesh.gamma.out": meshgammaout,
  "mesh.map.uvwo": meshmapuvwo,
  "mesh.position": meshposition,
  "mesh.vertex.color": meshvertexcolor,
  "mesh.vertex.mask": meshvertexmask,
  "mesh.vertex.position": meshvertexposition,
  "move.position": moveposition,
  "object.mask.default": objectmaskdefault,
  "point.alpha.circle": pointalphacircle,
  "point.alpha.circle.hollow": pointalphacirclehollow,
  "point.alpha.generic": pointalphageneric,
  "point.alpha.generic.hollow": pointalphagenerichollow,
  "point.edge": pointedge,
  "point.fill": pointfill,
  "point.mask.circle": pointmaskcircle,
  "point.mask.diamond": pointmaskdiamond,
  "point.mask.down": pointmaskdown,
  "point.mask.left": pointmaskleft,
  "point.mask.right": pointmaskright,
  "point.mask.square": pointmasksquare,
  "point.mask.up": pointmaskup,
  "point.position": pointposition,
  "point.size.uniform": pointsizeuniform,
  "point.size.varying": pointsizevarying,
  "polar.position": polarposition,
  "project.position": projectposition,
  "project.readback": projectreadback,
  "raw.position.scale": rawpositionscale,
  "repeat.position": repeatposition,
  "resample.padding": resamplepadding,
  "resample.relative": resamplerelative,
  "reveal.mask": revealmask,
  "reverse.position": reverseposition,
  "root.position": rootposition,
  "sample.2d": sample2d,
  "scale.position": scaleposition,
  "screen.map.stpq": screenmapstpq,
  "screen.map.xy": screenmapxy,
  "screen.map.xyzw": screenmapxyzw,
  "screen.pass.uv": screenpassuv,
  "screen.position": screenposition,
  "slice.position": sliceposition,
  "spherical.position": sphericalposition,
  "split.position": splitposition,
  "spread.position": spreadposition,
  "sprite.fragment": spritefragment,
  "sprite.position": spriteposition,
  "stereographic.position": stereographicposition,
  "stereographic4.position": stereographic4position,
  "stpq.sample.2d": stpqsample2d,
  "stpq.xyzw.2d": stpqxyzw2d,
  "strip.position.normal": strippositionnormal,
  "style.color": stylecolor,
  "subdivide.depth": subdividedepth,
  "subdivide.depth.lerp": subdividedepthlerp,
  "subdivide.height": subdivideheight,
  "subdivide.height.lerp": subdivideheightlerp,
  "subdivide.items": subdivideitems,
  "subdivide.items.lerp": subdivideitemslerp,
  "subdivide.width": subdividewidth,
  "subdivide.width.lerp": subdividewidthlerp,
  "surface.mask.hollow": surfacemaskhollow,
  "surface.position": surfaceposition,
  "surface.position.normal": surfacepositionnormal,
  "surface.position.shaded": surfacepositionshaded,
  "ticks.position": ticksposition,
  "transform3.position": transform3position,
  "transform4.position": transform4position,
  "view.position": viewposition,
};

export * from "./factory.js";
