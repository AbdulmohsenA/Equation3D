(function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const r of document.querySelectorAll('link[rel="modulepreload"]'))i(r);new MutationObserver(r=>{for(const a of r)if(a.type==="childList")for(const l of a.addedNodes)l.tagName==="LINK"&&l.rel==="modulepreload"&&i(l)}).observe(document,{childList:!0,subtree:!0});function n(r){const a={};return r.integrity&&(a.integrity=r.integrity),r.referrerpolicy&&(a.referrerPolicy=r.referrerpolicy),r.crossorigin==="use-credentials"?a.credentials="include":r.crossorigin==="anonymous"?a.credentials="omit":a.credentials="same-origin",a}function i(r){if(r.ep)return;r.ep=!0;const a=n(r);fetch(r.href,a)}})();const style="";/**
 * @license
 * Copyright 2010-2023 Three.js Authors
 * SPDX-License-Identifier: MIT
 */const REVISION="149",MOUSE={LEFT:0,MIDDLE:1,RIGHT:2,ROTATE:0,DOLLY:1,PAN:2},TOUCH={ROTATE:0,PAN:1,DOLLY_PAN:2,DOLLY_ROTATE:3},CullFaceNone=0,CullFaceBack=1,CullFaceFront=2,PCFShadowMap=1,PCFSoftShadowMap=2,VSMShadowMap=3,FrontSide=0,BackSide=1,DoubleSide=2,NoBlending=0,NormalBlending=1,AdditiveBlending=2,SubtractiveBlending=3,MultiplyBlending=4,CustomBlending=5,AddEquation=100,SubtractEquation=101,ReverseSubtractEquation=102,MinEquation=103,MaxEquation=104,ZeroFactor=200,OneFactor=201,SrcColorFactor=202,OneMinusSrcColorFactor=203,SrcAlphaFactor=204,OneMinusSrcAlphaFactor=205,DstAlphaFactor=206,OneMinusDstAlphaFactor=207,DstColorFactor=208,OneMinusDstColorFactor=209,SrcAlphaSaturateFactor=210,NeverDepth=0,AlwaysDepth=1,LessDepth=2,LessEqualDepth=3,EqualDepth=4,GreaterEqualDepth=5,GreaterDepth=6,NotEqualDepth=7,MultiplyOperation=0,MixOperation=1,AddOperation=2,NoToneMapping=0,LinearToneMapping=1,ReinhardToneMapping=2,CineonToneMapping=3,ACESFilmicToneMapping=4,CustomToneMapping=5,UVMapping=300,CubeReflectionMapping=301,CubeRefractionMapping=302,EquirectangularReflectionMapping=303,EquirectangularRefractionMapping=304,CubeUVReflectionMapping=306,RepeatWrapping=1e3,ClampToEdgeWrapping=1001,MirroredRepeatWrapping=1002,NearestFilter=1003,NearestMipmapNearestFilter=1004,NearestMipmapLinearFilter=1005,LinearFilter=1006,LinearMipmapNearestFilter=1007,LinearMipmapLinearFilter=1008,UnsignedByteType=1009,ByteType=1010,ShortType=1011,UnsignedShortType=1012,IntType=1013,UnsignedIntType=1014,FloatType=1015,HalfFloatType=1016,UnsignedShort4444Type=1017,UnsignedShort5551Type=1018,UnsignedInt248Type=1020,AlphaFormat=1021,RGBAFormat=1023,LuminanceFormat=1024,LuminanceAlphaFormat=1025,DepthFormat=1026,DepthStencilFormat=1027,RedFormat=1028,RedIntegerFormat=1029,RGFormat=1030,RGIntegerFormat=1031,RGBAIntegerFormat=1033,RGB_S3TC_DXT1_Format=33776,RGBA_S3TC_DXT1_Format=33777,RGBA_S3TC_DXT3_Format=33778,RGBA_S3TC_DXT5_Format=33779,RGB_PVRTC_4BPPV1_Format=35840,RGB_PVRTC_2BPPV1_Format=35841,RGBA_PVRTC_4BPPV1_Format=35842,RGBA_PVRTC_2BPPV1_Format=35843,RGB_ETC1_Format=36196,RGB_ETC2_Format=37492,RGBA_ETC2_EAC_Format=37496,RGBA_ASTC_4x4_Format=37808,RGBA_ASTC_5x4_Format=37809,RGBA_ASTC_5x5_Format=37810,RGBA_ASTC_6x5_Format=37811,RGBA_ASTC_6x6_Format=37812,RGBA_ASTC_8x5_Format=37813,RGBA_ASTC_8x6_Format=37814,RGBA_ASTC_8x8_Format=37815,RGBA_ASTC_10x5_Format=37816,RGBA_ASTC_10x6_Format=37817,RGBA_ASTC_10x8_Format=37818,RGBA_ASTC_10x10_Format=37819,RGBA_ASTC_12x10_Format=37820,RGBA_ASTC_12x12_Format=37821,RGBA_BPTC_Format=36492,RED_RGTC1_Format=36283,SIGNED_RED_RGTC1_Format=36284,RED_GREEN_RGTC2_Format=36285,SIGNED_RED_GREEN_RGTC2_Format=36286,LinearEncoding=3e3,sRGBEncoding=3001,BasicDepthPacking=3200,RGBADepthPacking=3201,TangentSpaceNormalMap=0,ObjectSpaceNormalMap=1,SRGBColorSpace="srgb",LinearSRGBColorSpace="srgb-linear",KeepStencilOp=7680,AlwaysStencilFunc=519,StaticDrawUsage=35044,GLSL3="300 es",_SRGBAFormat=1035;class EventDispatcher{addEventListener(e,n){this._listeners===void 0&&(this._listeners={});const i=this._listeners;i[e]===void 0&&(i[e]=[]),i[e].indexOf(n)===-1&&i[e].push(n)}hasEventListener(e,n){if(this._listeners===void 0)return!1;const i=this._listeners;return i[e]!==void 0&&i[e].indexOf(n)!==-1}removeEventListener(e,n){if(this._listeners===void 0)return;const r=this._listeners[e];if(r!==void 0){const a=r.indexOf(n);a!==-1&&r.splice(a,1)}}dispatchEvent(e){if(this._listeners===void 0)return;const i=this._listeners[e.type];if(i!==void 0){e.target=this;const r=i.slice(0);for(let a=0,l=r.length;a<l;a++)r[a].call(this,e);e.target=null}}}const _lut=["00","01","02","03","04","05","06","07","08","09","0a","0b","0c","0d","0e","0f","10","11","12","13","14","15","16","17","18","19","1a","1b","1c","1d","1e","1f","20","21","22","23","24","25","26","27","28","29","2a","2b","2c","2d","2e","2f","30","31","32","33","34","35","36","37","38","39","3a","3b","3c","3d","3e","3f","40","41","42","43","44","45","46","47","48","49","4a","4b","4c","4d","4e","4f","50","51","52","53","54","55","56","57","58","59","5a","5b","5c","5d","5e","5f","60","61","62","63","64","65","66","67","68","69","6a","6b","6c","6d","6e","6f","70","71","72","73","74","75","76","77","78","79","7a","7b","7c","7d","7e","7f","80","81","82","83","84","85","86","87","88","89","8a","8b","8c","8d","8e","8f","90","91","92","93","94","95","96","97","98","99","9a","9b","9c","9d","9e","9f","a0","a1","a2","a3","a4","a5","a6","a7","a8","a9","aa","ab","ac","ad","ae","af","b0","b1","b2","b3","b4","b5","b6","b7","b8","b9","ba","bb","bc","bd","be","bf","c0","c1","c2","c3","c4","c5","c6","c7","c8","c9","ca","cb","cc","cd","ce","cf","d0","d1","d2","d3","d4","d5","d6","d7","d8","d9","da","db","dc","dd","de","df","e0","e1","e2","e3","e4","e5","e6","e7","e8","e9","ea","eb","ec","ed","ee","ef","f0","f1","f2","f3","f4","f5","f6","f7","f8","f9","fa","fb","fc","fd","fe","ff"],DEG2RAD=Math.PI/180,RAD2DEG=180/Math.PI;function generateUUID(){const s=Math.random()*4294967295|0,e=Math.random()*4294967295|0,n=Math.random()*4294967295|0,i=Math.random()*4294967295|0;return(_lut[s&255]+_lut[s>>8&255]+_lut[s>>16&255]+_lut[s>>24&255]+"-"+_lut[e&255]+_lut[e>>8&255]+"-"+_lut[e>>16&15|64]+_lut[e>>24&255]+"-"+_lut[n&63|128]+_lut[n>>8&255]+"-"+_lut[n>>16&255]+_lut[n>>24&255]+_lut[i&255]+_lut[i>>8&255]+_lut[i>>16&255]+_lut[i>>24&255]).toLowerCase()}function clamp(s,e,n){return Math.max(e,Math.min(n,s))}function euclideanModulo(s,e){return(s%e+e)%e}function lerp(s,e,n){return(1-n)*s+n*e}function isPowerOfTwo(s){return(s&s-1)===0&&s!==0}function floorPowerOfTwo(s){return Math.pow(2,Math.floor(Math.log(s)/Math.LN2))}function denormalize(s,e){switch(e.constructor){case Float32Array:return s;case Uint16Array:return s/65535;case Uint8Array:return s/255;case Int16Array:return Math.max(s/32767,-1);case Int8Array:return Math.max(s/127,-1);default:throw new Error("Invalid component type.")}}function normalize(s,e){switch(e.constructor){case Float32Array:return s;case Uint16Array:return Math.round(s*65535);case Uint8Array:return Math.round(s*255);case Int16Array:return Math.round(s*32767);case Int8Array:return Math.round(s*127);default:throw new Error("Invalid component type.")}}class Vector2{constructor(e=0,n=0){Vector2.prototype.isVector2=!0,this.x=e,this.y=n}get width(){return this.x}set width(e){this.x=e}get height(){return this.y}set height(e){this.y=e}set(e,n){return this.x=e,this.y=n,this}setScalar(e){return this.x=e,this.y=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setComponent(e,n){switch(e){case 0:this.x=n;break;case 1:this.y=n;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y)}copy(e){return this.x=e.x,this.y=e.y,this}add(e){return this.x+=e.x,this.y+=e.y,this}addScalar(e){return this.x+=e,this.y+=e,this}addVectors(e,n){return this.x=e.x+n.x,this.y=e.y+n.y,this}addScaledVector(e,n){return this.x+=e.x*n,this.y+=e.y*n,this}sub(e){return this.x-=e.x,this.y-=e.y,this}subScalar(e){return this.x-=e,this.y-=e,this}subVectors(e,n){return this.x=e.x-n.x,this.y=e.y-n.y,this}multiply(e){return this.x*=e.x,this.y*=e.y,this}multiplyScalar(e){return this.x*=e,this.y*=e,this}divide(e){return this.x/=e.x,this.y/=e.y,this}divideScalar(e){return this.multiplyScalar(1/e)}applyMatrix3(e){const n=this.x,i=this.y,r=e.elements;return this.x=r[0]*n+r[3]*i+r[6],this.y=r[1]*n+r[4]*i+r[7],this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this}clamp(e,n){return this.x=Math.max(e.x,Math.min(n.x,this.x)),this.y=Math.max(e.y,Math.min(n.y,this.y)),this}clampScalar(e,n){return this.x=Math.max(e,Math.min(n,this.x)),this.y=Math.max(e,Math.min(n,this.y)),this}clampLength(e,n){const i=this.length();return this.divideScalar(i||1).multiplyScalar(Math.max(e,Math.min(n,i)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this}roundToZero(){return this.x=this.x<0?Math.ceil(this.x):Math.floor(this.x),this.y=this.y<0?Math.ceil(this.y):Math.floor(this.y),this}negate(){return this.x=-this.x,this.y=-this.y,this}dot(e){return this.x*e.x+this.y*e.y}cross(e){return this.x*e.y-this.y*e.x}lengthSq(){return this.x*this.x+this.y*this.y}length(){return Math.sqrt(this.x*this.x+this.y*this.y)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)}normalize(){return this.divideScalar(this.length()||1)}angle(){return Math.atan2(-this.y,-this.x)+Math.PI}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){const n=this.x-e.x,i=this.y-e.y;return n*n+i*i}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,n){return this.x+=(e.x-this.x)*n,this.y+=(e.y-this.y)*n,this}lerpVectors(e,n,i){return this.x=e.x+(n.x-e.x)*i,this.y=e.y+(n.y-e.y)*i,this}equals(e){return e.x===this.x&&e.y===this.y}fromArray(e,n=0){return this.x=e[n],this.y=e[n+1],this}toArray(e=[],n=0){return e[n]=this.x,e[n+1]=this.y,e}fromBufferAttribute(e,n){return this.x=e.getX(n),this.y=e.getY(n),this}rotateAround(e,n){const i=Math.cos(n),r=Math.sin(n),a=this.x-e.x,l=this.y-e.y;return this.x=a*i-l*r+e.x,this.y=a*r+l*i+e.y,this}random(){return this.x=Math.random(),this.y=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y}}class Matrix3{constructor(){Matrix3.prototype.isMatrix3=!0,this.elements=[1,0,0,0,1,0,0,0,1]}set(e,n,i,r,a,l,o,c,u){const d=this.elements;return d[0]=e,d[1]=r,d[2]=o,d[3]=n,d[4]=a,d[5]=c,d[6]=i,d[7]=l,d[8]=u,this}identity(){return this.set(1,0,0,0,1,0,0,0,1),this}copy(e){const n=this.elements,i=e.elements;return n[0]=i[0],n[1]=i[1],n[2]=i[2],n[3]=i[3],n[4]=i[4],n[5]=i[5],n[6]=i[6],n[7]=i[7],n[8]=i[8],this}extractBasis(e,n,i){return e.setFromMatrix3Column(this,0),n.setFromMatrix3Column(this,1),i.setFromMatrix3Column(this,2),this}setFromMatrix4(e){const n=e.elements;return this.set(n[0],n[4],n[8],n[1],n[5],n[9],n[2],n[6],n[10]),this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,n){const i=e.elements,r=n.elements,a=this.elements,l=i[0],o=i[3],c=i[6],u=i[1],d=i[4],f=i[7],h=i[2],_=i[5],v=i[8],m=r[0],p=r[3],y=r[6],C=r[1],w=r[4],A=r[7],M=r[2],P=r[5],N=r[8];return a[0]=l*m+o*C+c*M,a[3]=l*p+o*w+c*P,a[6]=l*y+o*A+c*N,a[1]=u*m+d*C+f*M,a[4]=u*p+d*w+f*P,a[7]=u*y+d*A+f*N,a[2]=h*m+_*C+v*M,a[5]=h*p+_*w+v*P,a[8]=h*y+_*A+v*N,this}multiplyScalar(e){const n=this.elements;return n[0]*=e,n[3]*=e,n[6]*=e,n[1]*=e,n[4]*=e,n[7]*=e,n[2]*=e,n[5]*=e,n[8]*=e,this}determinant(){const e=this.elements,n=e[0],i=e[1],r=e[2],a=e[3],l=e[4],o=e[5],c=e[6],u=e[7],d=e[8];return n*l*d-n*o*u-i*a*d+i*o*c+r*a*u-r*l*c}invert(){const e=this.elements,n=e[0],i=e[1],r=e[2],a=e[3],l=e[4],o=e[5],c=e[6],u=e[7],d=e[8],f=d*l-o*u,h=o*c-d*a,_=u*a-l*c,v=n*f+i*h+r*_;if(v===0)return this.set(0,0,0,0,0,0,0,0,0);const m=1/v;return e[0]=f*m,e[1]=(r*u-d*i)*m,e[2]=(o*i-r*l)*m,e[3]=h*m,e[4]=(d*n-r*c)*m,e[5]=(r*a-o*n)*m,e[6]=_*m,e[7]=(i*c-u*n)*m,e[8]=(l*n-i*a)*m,this}transpose(){let e;const n=this.elements;return e=n[1],n[1]=n[3],n[3]=e,e=n[2],n[2]=n[6],n[6]=e,e=n[5],n[5]=n[7],n[7]=e,this}getNormalMatrix(e){return this.setFromMatrix4(e).invert().transpose()}transposeIntoArray(e){const n=this.elements;return e[0]=n[0],e[1]=n[3],e[2]=n[6],e[3]=n[1],e[4]=n[4],e[5]=n[7],e[6]=n[2],e[7]=n[5],e[8]=n[8],this}setUvTransform(e,n,i,r,a,l,o){const c=Math.cos(a),u=Math.sin(a);return this.set(i*c,i*u,-i*(c*l+u*o)+l+e,-r*u,r*c,-r*(-u*l+c*o)+o+n,0,0,1),this}scale(e,n){return this.premultiply(_m3.makeScale(e,n)),this}rotate(e){return this.premultiply(_m3.makeRotation(-e)),this}translate(e,n){return this.premultiply(_m3.makeTranslation(e,n)),this}makeTranslation(e,n){return this.set(1,0,e,0,1,n,0,0,1),this}makeRotation(e){const n=Math.cos(e),i=Math.sin(e);return this.set(n,-i,0,i,n,0,0,0,1),this}makeScale(e,n){return this.set(e,0,0,0,n,0,0,0,1),this}equals(e){const n=this.elements,i=e.elements;for(let r=0;r<9;r++)if(n[r]!==i[r])return!1;return!0}fromArray(e,n=0){for(let i=0;i<9;i++)this.elements[i]=e[i+n];return this}toArray(e=[],n=0){const i=this.elements;return e[n]=i[0],e[n+1]=i[1],e[n+2]=i[2],e[n+3]=i[3],e[n+4]=i[4],e[n+5]=i[5],e[n+6]=i[6],e[n+7]=i[7],e[n+8]=i[8],e}clone(){return new this.constructor().fromArray(this.elements)}}const _m3=new Matrix3;function arrayNeedsUint32(s){for(let e=s.length-1;e>=0;--e)if(s[e]>=65535)return!0;return!1}function createElementNS(s){return document.createElementNS("http://www.w3.org/1999/xhtml",s)}function SRGBToLinear(s){return s<.04045?s*.0773993808:Math.pow(s*.9478672986+.0521327014,2.4)}function LinearToSRGB(s){return s<.0031308?s*12.92:1.055*Math.pow(s,.41666)-.055}const FN={[SRGBColorSpace]:{[LinearSRGBColorSpace]:SRGBToLinear},[LinearSRGBColorSpace]:{[SRGBColorSpace]:LinearToSRGB}},ColorManagement={legacyMode:!0,get workingColorSpace(){return LinearSRGBColorSpace},set workingColorSpace(s){console.warn("THREE.ColorManagement: .workingColorSpace is readonly.")},convert:function(s,e,n){if(this.legacyMode||e===n||!e||!n)return s;if(FN[e]&&FN[e][n]!==void 0){const i=FN[e][n];return s.r=i(s.r),s.g=i(s.g),s.b=i(s.b),s}throw new Error("Unsupported color space conversion.")},fromWorkingColorSpace:function(s,e){return this.convert(s,this.workingColorSpace,e)},toWorkingColorSpace:function(s,e){return this.convert(s,e,this.workingColorSpace)}},_colorKeywords={aliceblue:15792383,antiquewhite:16444375,aqua:65535,aquamarine:8388564,azure:15794175,beige:16119260,bisque:16770244,black:0,blanchedalmond:16772045,blue:255,blueviolet:9055202,brown:10824234,burlywood:14596231,cadetblue:6266528,chartreuse:8388352,chocolate:13789470,coral:16744272,cornflowerblue:6591981,cornsilk:16775388,crimson:14423100,cyan:65535,darkblue:139,darkcyan:35723,darkgoldenrod:12092939,darkgray:11119017,darkgreen:25600,darkgrey:11119017,darkkhaki:12433259,darkmagenta:9109643,darkolivegreen:5597999,darkorange:16747520,darkorchid:10040012,darkred:9109504,darksalmon:15308410,darkseagreen:9419919,darkslateblue:4734347,darkslategray:3100495,darkslategrey:3100495,darkturquoise:52945,darkviolet:9699539,deeppink:16716947,deepskyblue:49151,dimgray:6908265,dimgrey:6908265,dodgerblue:2003199,firebrick:11674146,floralwhite:16775920,forestgreen:2263842,fuchsia:16711935,gainsboro:14474460,ghostwhite:16316671,gold:16766720,goldenrod:14329120,gray:8421504,green:32768,greenyellow:11403055,grey:8421504,honeydew:15794160,hotpink:16738740,indianred:13458524,indigo:4915330,ivory:16777200,khaki:15787660,lavender:15132410,lavenderblush:16773365,lawngreen:8190976,lemonchiffon:16775885,lightblue:11393254,lightcoral:15761536,lightcyan:14745599,lightgoldenrodyellow:16448210,lightgray:13882323,lightgreen:9498256,lightgrey:13882323,lightpink:16758465,lightsalmon:16752762,lightseagreen:2142890,lightskyblue:8900346,lightslategray:7833753,lightslategrey:7833753,lightsteelblue:11584734,lightyellow:16777184,lime:65280,limegreen:3329330,linen:16445670,magenta:16711935,maroon:8388608,mediumaquamarine:6737322,mediumblue:205,mediumorchid:12211667,mediumpurple:9662683,mediumseagreen:3978097,mediumslateblue:8087790,mediumspringgreen:64154,mediumturquoise:4772300,mediumvioletred:13047173,midnightblue:1644912,mintcream:16121850,mistyrose:16770273,moccasin:16770229,navajowhite:16768685,navy:128,oldlace:16643558,olive:8421376,olivedrab:7048739,orange:16753920,orangered:16729344,orchid:14315734,palegoldenrod:15657130,palegreen:10025880,paleturquoise:11529966,palevioletred:14381203,papayawhip:16773077,peachpuff:16767673,peru:13468991,pink:16761035,plum:14524637,powderblue:11591910,purple:8388736,rebeccapurple:6697881,red:16711680,rosybrown:12357519,royalblue:4286945,saddlebrown:9127187,salmon:16416882,sandybrown:16032864,seagreen:3050327,seashell:16774638,sienna:10506797,silver:12632256,skyblue:8900331,slateblue:6970061,slategray:7372944,slategrey:7372944,snow:16775930,springgreen:65407,steelblue:4620980,tan:13808780,teal:32896,thistle:14204888,tomato:16737095,turquoise:4251856,violet:15631086,wheat:16113331,white:16777215,whitesmoke:16119285,yellow:16776960,yellowgreen:10145074},_rgb$1={r:0,g:0,b:0},_hslA={h:0,s:0,l:0},_hslB={h:0,s:0,l:0};function hue2rgb(s,e,n){return n<0&&(n+=1),n>1&&(n-=1),n<1/6?s+(e-s)*6*n:n<1/2?e:n<2/3?s+(e-s)*6*(2/3-n):s}function toComponents(s,e){return e.r=s.r,e.g=s.g,e.b=s.b,e}class Color$1{constructor(e,n,i){return this.isColor=!0,this.r=1,this.g=1,this.b=1,n===void 0&&i===void 0?this.set(e):this.setRGB(e,n,i)}set(e){return e&&e.isColor?this.copy(e):typeof e=="number"?this.setHex(e):typeof e=="string"&&this.setStyle(e),this}setScalar(e){return this.r=e,this.g=e,this.b=e,this}setHex(e,n=SRGBColorSpace){return e=Math.floor(e),this.r=(e>>16&255)/255,this.g=(e>>8&255)/255,this.b=(e&255)/255,ColorManagement.toWorkingColorSpace(this,n),this}setRGB(e,n,i,r=ColorManagement.workingColorSpace){return this.r=e,this.g=n,this.b=i,ColorManagement.toWorkingColorSpace(this,r),this}setHSL(e,n,i,r=ColorManagement.workingColorSpace){if(e=euclideanModulo(e,1),n=clamp(n,0,1),i=clamp(i,0,1),n===0)this.r=this.g=this.b=i;else{const a=i<=.5?i*(1+n):i+n-i*n,l=2*i-a;this.r=hue2rgb(l,a,e+1/3),this.g=hue2rgb(l,a,e),this.b=hue2rgb(l,a,e-1/3)}return ColorManagement.toWorkingColorSpace(this,r),this}setStyle(e,n=SRGBColorSpace){function i(a){a!==void 0&&parseFloat(a)<1&&console.warn("THREE.Color: Alpha component of "+e+" will be ignored.")}let r;if(r=/^((?:rgb|hsl)a?)\(([^\)]*)\)/.exec(e)){let a;const l=r[1],o=r[2];switch(l){case"rgb":case"rgba":if(a=/^\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(o))return this.r=Math.min(255,parseInt(a[1],10))/255,this.g=Math.min(255,parseInt(a[2],10))/255,this.b=Math.min(255,parseInt(a[3],10))/255,ColorManagement.toWorkingColorSpace(this,n),i(a[4]),this;if(a=/^\s*(\d+)\%\s*,\s*(\d+)\%\s*,\s*(\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(o))return this.r=Math.min(100,parseInt(a[1],10))/100,this.g=Math.min(100,parseInt(a[2],10))/100,this.b=Math.min(100,parseInt(a[3],10))/100,ColorManagement.toWorkingColorSpace(this,n),i(a[4]),this;break;case"hsl":case"hsla":if(a=/^\s*(\d*\.?\d+)\s*,\s*(\d*\.?\d+)\%\s*,\s*(\d*\.?\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(o)){const c=parseFloat(a[1])/360,u=parseFloat(a[2])/100,d=parseFloat(a[3])/100;return i(a[4]),this.setHSL(c,u,d,n)}break}}else if(r=/^\#([A-Fa-f\d]+)$/.exec(e)){const a=r[1],l=a.length;if(l===3)return this.r=parseInt(a.charAt(0)+a.charAt(0),16)/255,this.g=parseInt(a.charAt(1)+a.charAt(1),16)/255,this.b=parseInt(a.charAt(2)+a.charAt(2),16)/255,ColorManagement.toWorkingColorSpace(this,n),this;if(l===6)return this.r=parseInt(a.charAt(0)+a.charAt(1),16)/255,this.g=parseInt(a.charAt(2)+a.charAt(3),16)/255,this.b=parseInt(a.charAt(4)+a.charAt(5),16)/255,ColorManagement.toWorkingColorSpace(this,n),this}return e&&e.length>0?this.setColorName(e,n):this}setColorName(e,n=SRGBColorSpace){const i=_colorKeywords[e.toLowerCase()];return i!==void 0?this.setHex(i,n):console.warn("THREE.Color: Unknown color "+e),this}clone(){return new this.constructor(this.r,this.g,this.b)}copy(e){return this.r=e.r,this.g=e.g,this.b=e.b,this}copySRGBToLinear(e){return this.r=SRGBToLinear(e.r),this.g=SRGBToLinear(e.g),this.b=SRGBToLinear(e.b),this}copyLinearToSRGB(e){return this.r=LinearToSRGB(e.r),this.g=LinearToSRGB(e.g),this.b=LinearToSRGB(e.b),this}convertSRGBToLinear(){return this.copySRGBToLinear(this),this}convertLinearToSRGB(){return this.copyLinearToSRGB(this),this}getHex(e=SRGBColorSpace){return ColorManagement.fromWorkingColorSpace(toComponents(this,_rgb$1),e),clamp(_rgb$1.r*255,0,255)<<16^clamp(_rgb$1.g*255,0,255)<<8^clamp(_rgb$1.b*255,0,255)<<0}getHexString(e=SRGBColorSpace){return("000000"+this.getHex(e).toString(16)).slice(-6)}getHSL(e,n=ColorManagement.workingColorSpace){ColorManagement.fromWorkingColorSpace(toComponents(this,_rgb$1),n);const i=_rgb$1.r,r=_rgb$1.g,a=_rgb$1.b,l=Math.max(i,r,a),o=Math.min(i,r,a);let c,u;const d=(o+l)/2;if(o===l)c=0,u=0;else{const f=l-o;switch(u=d<=.5?f/(l+o):f/(2-l-o),l){case i:c=(r-a)/f+(r<a?6:0);break;case r:c=(a-i)/f+2;break;case a:c=(i-r)/f+4;break}c/=6}return e.h=c,e.s=u,e.l=d,e}getRGB(e,n=ColorManagement.workingColorSpace){return ColorManagement.fromWorkingColorSpace(toComponents(this,_rgb$1),n),e.r=_rgb$1.r,e.g=_rgb$1.g,e.b=_rgb$1.b,e}getStyle(e=SRGBColorSpace){return ColorManagement.fromWorkingColorSpace(toComponents(this,_rgb$1),e),e!==SRGBColorSpace?`color(${e} ${_rgb$1.r} ${_rgb$1.g} ${_rgb$1.b})`:`rgb(${_rgb$1.r*255|0},${_rgb$1.g*255|0},${_rgb$1.b*255|0})`}offsetHSL(e,n,i){return this.getHSL(_hslA),_hslA.h+=e,_hslA.s+=n,_hslA.l+=i,this.setHSL(_hslA.h,_hslA.s,_hslA.l),this}add(e){return this.r+=e.r,this.g+=e.g,this.b+=e.b,this}addColors(e,n){return this.r=e.r+n.r,this.g=e.g+n.g,this.b=e.b+n.b,this}addScalar(e){return this.r+=e,this.g+=e,this.b+=e,this}sub(e){return this.r=Math.max(0,this.r-e.r),this.g=Math.max(0,this.g-e.g),this.b=Math.max(0,this.b-e.b),this}multiply(e){return this.r*=e.r,this.g*=e.g,this.b*=e.b,this}multiplyScalar(e){return this.r*=e,this.g*=e,this.b*=e,this}lerp(e,n){return this.r+=(e.r-this.r)*n,this.g+=(e.g-this.g)*n,this.b+=(e.b-this.b)*n,this}lerpColors(e,n,i){return this.r=e.r+(n.r-e.r)*i,this.g=e.g+(n.g-e.g)*i,this.b=e.b+(n.b-e.b)*i,this}lerpHSL(e,n){this.getHSL(_hslA),e.getHSL(_hslB);const i=lerp(_hslA.h,_hslB.h,n),r=lerp(_hslA.s,_hslB.s,n),a=lerp(_hslA.l,_hslB.l,n);return this.setHSL(i,r,a),this}equals(e){return e.r===this.r&&e.g===this.g&&e.b===this.b}fromArray(e,n=0){return this.r=e[n],this.g=e[n+1],this.b=e[n+2],this}toArray(e=[],n=0){return e[n]=this.r,e[n+1]=this.g,e[n+2]=this.b,e}fromBufferAttribute(e,n){return this.r=e.getX(n),this.g=e.getY(n),this.b=e.getZ(n),this}toJSON(){return this.getHex()}*[Symbol.iterator](){yield this.r,yield this.g,yield this.b}}Color$1.NAMES=_colorKeywords;let _canvas;class ImageUtils{static getDataURL(e){if(/^data:/i.test(e.src)||typeof HTMLCanvasElement>"u")return e.src;let n;if(e instanceof HTMLCanvasElement)n=e;else{_canvas===void 0&&(_canvas=createElementNS("canvas")),_canvas.width=e.width,_canvas.height=e.height;const i=_canvas.getContext("2d");e instanceof ImageData?i.putImageData(e,0,0):i.drawImage(e,0,0,e.width,e.height),n=_canvas}return n.width>2048||n.height>2048?(console.warn("THREE.ImageUtils.getDataURL: Image converted to jpg for performance reasons",e),n.toDataURL("image/jpeg",.6)):n.toDataURL("image/png")}static sRGBToLinear(e){if(typeof HTMLImageElement<"u"&&e instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&e instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&e instanceof ImageBitmap){const n=createElementNS("canvas");n.width=e.width,n.height=e.height;const i=n.getContext("2d");i.drawImage(e,0,0,e.width,e.height);const r=i.getImageData(0,0,e.width,e.height),a=r.data;for(let l=0;l<a.length;l++)a[l]=SRGBToLinear(a[l]/255)*255;return i.putImageData(r,0,0),n}else if(e.data){const n=e.data.slice(0);for(let i=0;i<n.length;i++)n instanceof Uint8Array||n instanceof Uint8ClampedArray?n[i]=Math.floor(SRGBToLinear(n[i]/255)*255):n[i]=SRGBToLinear(n[i]);return{data:n,width:e.width,height:e.height}}else return console.warn("THREE.ImageUtils.sRGBToLinear(): Unsupported image type. No color space conversion applied."),e}}class Source{constructor(e=null){this.isSource=!0,this.uuid=generateUUID(),this.data=e,this.version=0}set needsUpdate(e){e===!0&&this.version++}toJSON(e){const n=e===void 0||typeof e=="string";if(!n&&e.images[this.uuid]!==void 0)return e.images[this.uuid];const i={uuid:this.uuid,url:""},r=this.data;if(r!==null){let a;if(Array.isArray(r)){a=[];for(let l=0,o=r.length;l<o;l++)r[l].isDataTexture?a.push(serializeImage(r[l].image)):a.push(serializeImage(r[l]))}else a=serializeImage(r);i.url=a}return n||(e.images[this.uuid]=i),i}}function serializeImage(s){return typeof HTMLImageElement<"u"&&s instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&s instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&s instanceof ImageBitmap?ImageUtils.getDataURL(s):s.data?{data:Array.from(s.data),width:s.width,height:s.height,type:s.data.constructor.name}:(console.warn("THREE.Texture: Unable to serialize Texture."),{})}let textureId=0;class Texture extends EventDispatcher{constructor(e=Texture.DEFAULT_IMAGE,n=Texture.DEFAULT_MAPPING,i=ClampToEdgeWrapping,r=ClampToEdgeWrapping,a=LinearFilter,l=LinearMipmapLinearFilter,o=RGBAFormat,c=UnsignedByteType,u=Texture.DEFAULT_ANISOTROPY,d=LinearEncoding){super(),this.isTexture=!0,Object.defineProperty(this,"id",{value:textureId++}),this.uuid=generateUUID(),this.name="",this.source=new Source(e),this.mipmaps=[],this.mapping=n,this.wrapS=i,this.wrapT=r,this.magFilter=a,this.minFilter=l,this.anisotropy=u,this.format=o,this.internalFormat=null,this.type=c,this.offset=new Vector2(0,0),this.repeat=new Vector2(1,1),this.center=new Vector2(0,0),this.rotation=0,this.matrixAutoUpdate=!0,this.matrix=new Matrix3,this.generateMipmaps=!0,this.premultiplyAlpha=!1,this.flipY=!0,this.unpackAlignment=4,this.encoding=d,this.userData={},this.version=0,this.onUpdate=null,this.isRenderTargetTexture=!1,this.needsPMREMUpdate=!1}get image(){return this.source.data}set image(e){this.source.data=e}updateMatrix(){this.matrix.setUvTransform(this.offset.x,this.offset.y,this.repeat.x,this.repeat.y,this.rotation,this.center.x,this.center.y)}clone(){return new this.constructor().copy(this)}copy(e){return this.name=e.name,this.source=e.source,this.mipmaps=e.mipmaps.slice(0),this.mapping=e.mapping,this.wrapS=e.wrapS,this.wrapT=e.wrapT,this.magFilter=e.magFilter,this.minFilter=e.minFilter,this.anisotropy=e.anisotropy,this.format=e.format,this.internalFormat=e.internalFormat,this.type=e.type,this.offset.copy(e.offset),this.repeat.copy(e.repeat),this.center.copy(e.center),this.rotation=e.rotation,this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrix.copy(e.matrix),this.generateMipmaps=e.generateMipmaps,this.premultiplyAlpha=e.premultiplyAlpha,this.flipY=e.flipY,this.unpackAlignment=e.unpackAlignment,this.encoding=e.encoding,this.userData=JSON.parse(JSON.stringify(e.userData)),this.needsUpdate=!0,this}toJSON(e){const n=e===void 0||typeof e=="string";if(!n&&e.textures[this.uuid]!==void 0)return e.textures[this.uuid];const i={metadata:{version:4.5,type:"Texture",generator:"Texture.toJSON"},uuid:this.uuid,name:this.name,image:this.source.toJSON(e).uuid,mapping:this.mapping,repeat:[this.repeat.x,this.repeat.y],offset:[this.offset.x,this.offset.y],center:[this.center.x,this.center.y],rotation:this.rotation,wrap:[this.wrapS,this.wrapT],format:this.format,type:this.type,encoding:this.encoding,minFilter:this.minFilter,magFilter:this.magFilter,anisotropy:this.anisotropy,flipY:this.flipY,generateMipmaps:this.generateMipmaps,premultiplyAlpha:this.premultiplyAlpha,unpackAlignment:this.unpackAlignment};return Object.keys(this.userData).length>0&&(i.userData=this.userData),n||(e.textures[this.uuid]=i),i}dispose(){this.dispatchEvent({type:"dispose"})}transformUv(e){if(this.mapping!==UVMapping)return e;if(e.applyMatrix3(this.matrix),e.x<0||e.x>1)switch(this.wrapS){case RepeatWrapping:e.x=e.x-Math.floor(e.x);break;case ClampToEdgeWrapping:e.x=e.x<0?0:1;break;case MirroredRepeatWrapping:Math.abs(Math.floor(e.x)%2)===1?e.x=Math.ceil(e.x)-e.x:e.x=e.x-Math.floor(e.x);break}if(e.y<0||e.y>1)switch(this.wrapT){case RepeatWrapping:e.y=e.y-Math.floor(e.y);break;case ClampToEdgeWrapping:e.y=e.y<0?0:1;break;case MirroredRepeatWrapping:Math.abs(Math.floor(e.y)%2)===1?e.y=Math.ceil(e.y)-e.y:e.y=e.y-Math.floor(e.y);break}return this.flipY&&(e.y=1-e.y),e}set needsUpdate(e){e===!0&&(this.version++,this.source.needsUpdate=!0)}}Texture.DEFAULT_IMAGE=null;Texture.DEFAULT_MAPPING=UVMapping;Texture.DEFAULT_ANISOTROPY=1;class Vector4{constructor(e=0,n=0,i=0,r=1){Vector4.prototype.isVector4=!0,this.x=e,this.y=n,this.z=i,this.w=r}get width(){return this.z}set width(e){this.z=e}get height(){return this.w}set height(e){this.w=e}set(e,n,i,r){return this.x=e,this.y=n,this.z=i,this.w=r,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this.w=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setW(e){return this.w=e,this}setComponent(e,n){switch(e){case 0:this.x=n;break;case 1:this.y=n;break;case 2:this.z=n;break;case 3:this.w=n;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;case 3:return this.w;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z,this.w)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this.w=e.w!==void 0?e.w:1,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this.w+=e.w,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this.w+=e,this}addVectors(e,n){return this.x=e.x+n.x,this.y=e.y+n.y,this.z=e.z+n.z,this.w=e.w+n.w,this}addScaledVector(e,n){return this.x+=e.x*n,this.y+=e.y*n,this.z+=e.z*n,this.w+=e.w*n,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this.w-=e.w,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this.w-=e,this}subVectors(e,n){return this.x=e.x-n.x,this.y=e.y-n.y,this.z=e.z-n.z,this.w=e.w-n.w,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this.w*=e.w,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this.w*=e,this}applyMatrix4(e){const n=this.x,i=this.y,r=this.z,a=this.w,l=e.elements;return this.x=l[0]*n+l[4]*i+l[8]*r+l[12]*a,this.y=l[1]*n+l[5]*i+l[9]*r+l[13]*a,this.z=l[2]*n+l[6]*i+l[10]*r+l[14]*a,this.w=l[3]*n+l[7]*i+l[11]*r+l[15]*a,this}divideScalar(e){return this.multiplyScalar(1/e)}setAxisAngleFromQuaternion(e){this.w=2*Math.acos(e.w);const n=Math.sqrt(1-e.w*e.w);return n<1e-4?(this.x=1,this.y=0,this.z=0):(this.x=e.x/n,this.y=e.y/n,this.z=e.z/n),this}setAxisAngleFromRotationMatrix(e){let n,i,r,a;const c=e.elements,u=c[0],d=c[4],f=c[8],h=c[1],_=c[5],v=c[9],m=c[2],p=c[6],y=c[10];if(Math.abs(d-h)<.01&&Math.abs(f-m)<.01&&Math.abs(v-p)<.01){if(Math.abs(d+h)<.1&&Math.abs(f+m)<.1&&Math.abs(v+p)<.1&&Math.abs(u+_+y-3)<.1)return this.set(1,0,0,0),this;n=Math.PI;const w=(u+1)/2,A=(_+1)/2,M=(y+1)/2,P=(d+h)/4,N=(f+m)/4,b=(v+p)/4;return w>A&&w>M?w<.01?(i=0,r=.707106781,a=.707106781):(i=Math.sqrt(w),r=P/i,a=N/i):A>M?A<.01?(i=.707106781,r=0,a=.707106781):(r=Math.sqrt(A),i=P/r,a=b/r):M<.01?(i=.707106781,r=.707106781,a=0):(a=Math.sqrt(M),i=N/a,r=b/a),this.set(i,r,a,n),this}let C=Math.sqrt((p-v)*(p-v)+(f-m)*(f-m)+(h-d)*(h-d));return Math.abs(C)<.001&&(C=1),this.x=(p-v)/C,this.y=(f-m)/C,this.z=(h-d)/C,this.w=Math.acos((u+_+y-1)/2),this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this.w=Math.min(this.w,e.w),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this.w=Math.max(this.w,e.w),this}clamp(e,n){return this.x=Math.max(e.x,Math.min(n.x,this.x)),this.y=Math.max(e.y,Math.min(n.y,this.y)),this.z=Math.max(e.z,Math.min(n.z,this.z)),this.w=Math.max(e.w,Math.min(n.w,this.w)),this}clampScalar(e,n){return this.x=Math.max(e,Math.min(n,this.x)),this.y=Math.max(e,Math.min(n,this.y)),this.z=Math.max(e,Math.min(n,this.z)),this.w=Math.max(e,Math.min(n,this.w)),this}clampLength(e,n){const i=this.length();return this.divideScalar(i||1).multiplyScalar(Math.max(e,Math.min(n,i)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this.w=Math.floor(this.w),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this.w=Math.ceil(this.w),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this.w=Math.round(this.w),this}roundToZero(){return this.x=this.x<0?Math.ceil(this.x):Math.floor(this.x),this.y=this.y<0?Math.ceil(this.y):Math.floor(this.y),this.z=this.z<0?Math.ceil(this.z):Math.floor(this.z),this.w=this.w<0?Math.ceil(this.w):Math.floor(this.w),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this.w=-this.w,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z+this.w*e.w}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)+Math.abs(this.w)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,n){return this.x+=(e.x-this.x)*n,this.y+=(e.y-this.y)*n,this.z+=(e.z-this.z)*n,this.w+=(e.w-this.w)*n,this}lerpVectors(e,n,i){return this.x=e.x+(n.x-e.x)*i,this.y=e.y+(n.y-e.y)*i,this.z=e.z+(n.z-e.z)*i,this.w=e.w+(n.w-e.w)*i,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z&&e.w===this.w}fromArray(e,n=0){return this.x=e[n],this.y=e[n+1],this.z=e[n+2],this.w=e[n+3],this}toArray(e=[],n=0){return e[n]=this.x,e[n+1]=this.y,e[n+2]=this.z,e[n+3]=this.w,e}fromBufferAttribute(e,n){return this.x=e.getX(n),this.y=e.getY(n),this.z=e.getZ(n),this.w=e.getW(n),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this.w=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z,yield this.w}}class WebGLRenderTarget extends EventDispatcher{constructor(e=1,n=1,i={}){super(),this.isWebGLRenderTarget=!0,this.width=e,this.height=n,this.depth=1,this.scissor=new Vector4(0,0,e,n),this.scissorTest=!1,this.viewport=new Vector4(0,0,e,n);const r={width:e,height:n,depth:1};this.texture=new Texture(r,i.mapping,i.wrapS,i.wrapT,i.magFilter,i.minFilter,i.format,i.type,i.anisotropy,i.encoding),this.texture.isRenderTargetTexture=!0,this.texture.flipY=!1,this.texture.generateMipmaps=i.generateMipmaps!==void 0?i.generateMipmaps:!1,this.texture.internalFormat=i.internalFormat!==void 0?i.internalFormat:null,this.texture.minFilter=i.minFilter!==void 0?i.minFilter:LinearFilter,this.depthBuffer=i.depthBuffer!==void 0?i.depthBuffer:!0,this.stencilBuffer=i.stencilBuffer!==void 0?i.stencilBuffer:!1,this.depthTexture=i.depthTexture!==void 0?i.depthTexture:null,this.samples=i.samples!==void 0?i.samples:0}setSize(e,n,i=1){(this.width!==e||this.height!==n||this.depth!==i)&&(this.width=e,this.height=n,this.depth=i,this.texture.image.width=e,this.texture.image.height=n,this.texture.image.depth=i,this.dispose()),this.viewport.set(0,0,e,n),this.scissor.set(0,0,e,n)}clone(){return new this.constructor().copy(this)}copy(e){this.width=e.width,this.height=e.height,this.depth=e.depth,this.viewport.copy(e.viewport),this.texture=e.texture.clone(),this.texture.isRenderTargetTexture=!0;const n=Object.assign({},e.texture.image);return this.texture.source=new Source(n),this.depthBuffer=e.depthBuffer,this.stencilBuffer=e.stencilBuffer,e.depthTexture!==null&&(this.depthTexture=e.depthTexture.clone()),this.samples=e.samples,this}dispose(){this.dispatchEvent({type:"dispose"})}}class DataArrayTexture extends Texture{constructor(e=null,n=1,i=1,r=1){super(null),this.isDataArrayTexture=!0,this.image={data:e,width:n,height:i,depth:r},this.magFilter=NearestFilter,this.minFilter=NearestFilter,this.wrapR=ClampToEdgeWrapping,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}class Data3DTexture extends Texture{constructor(e=null,n=1,i=1,r=1){super(null),this.isData3DTexture=!0,this.image={data:e,width:n,height:i,depth:r},this.magFilter=NearestFilter,this.minFilter=NearestFilter,this.wrapR=ClampToEdgeWrapping,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}class Quaternion{constructor(e=0,n=0,i=0,r=1){this.isQuaternion=!0,this._x=e,this._y=n,this._z=i,this._w=r}static slerpFlat(e,n,i,r,a,l,o){let c=i[r+0],u=i[r+1],d=i[r+2],f=i[r+3];const h=a[l+0],_=a[l+1],v=a[l+2],m=a[l+3];if(o===0){e[n+0]=c,e[n+1]=u,e[n+2]=d,e[n+3]=f;return}if(o===1){e[n+0]=h,e[n+1]=_,e[n+2]=v,e[n+3]=m;return}if(f!==m||c!==h||u!==_||d!==v){let p=1-o;const y=c*h+u*_+d*v+f*m,C=y>=0?1:-1,w=1-y*y;if(w>Number.EPSILON){const M=Math.sqrt(w),P=Math.atan2(M,y*C);p=Math.sin(p*P)/M,o=Math.sin(o*P)/M}const A=o*C;if(c=c*p+h*A,u=u*p+_*A,d=d*p+v*A,f=f*p+m*A,p===1-o){const M=1/Math.sqrt(c*c+u*u+d*d+f*f);c*=M,u*=M,d*=M,f*=M}}e[n]=c,e[n+1]=u,e[n+2]=d,e[n+3]=f}static multiplyQuaternionsFlat(e,n,i,r,a,l){const o=i[r],c=i[r+1],u=i[r+2],d=i[r+3],f=a[l],h=a[l+1],_=a[l+2],v=a[l+3];return e[n]=o*v+d*f+c*_-u*h,e[n+1]=c*v+d*h+u*f-o*_,e[n+2]=u*v+d*_+o*h-c*f,e[n+3]=d*v-o*f-c*h-u*_,e}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get w(){return this._w}set w(e){this._w=e,this._onChangeCallback()}set(e,n,i,r){return this._x=e,this._y=n,this._z=i,this._w=r,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._w)}copy(e){return this._x=e.x,this._y=e.y,this._z=e.z,this._w=e.w,this._onChangeCallback(),this}setFromEuler(e,n){const i=e._x,r=e._y,a=e._z,l=e._order,o=Math.cos,c=Math.sin,u=o(i/2),d=o(r/2),f=o(a/2),h=c(i/2),_=c(r/2),v=c(a/2);switch(l){case"XYZ":this._x=h*d*f+u*_*v,this._y=u*_*f-h*d*v,this._z=u*d*v+h*_*f,this._w=u*d*f-h*_*v;break;case"YXZ":this._x=h*d*f+u*_*v,this._y=u*_*f-h*d*v,this._z=u*d*v-h*_*f,this._w=u*d*f+h*_*v;break;case"ZXY":this._x=h*d*f-u*_*v,this._y=u*_*f+h*d*v,this._z=u*d*v+h*_*f,this._w=u*d*f-h*_*v;break;case"ZYX":this._x=h*d*f-u*_*v,this._y=u*_*f+h*d*v,this._z=u*d*v-h*_*f,this._w=u*d*f+h*_*v;break;case"YZX":this._x=h*d*f+u*_*v,this._y=u*_*f+h*d*v,this._z=u*d*v-h*_*f,this._w=u*d*f-h*_*v;break;case"XZY":this._x=h*d*f-u*_*v,this._y=u*_*f-h*d*v,this._z=u*d*v+h*_*f,this._w=u*d*f+h*_*v;break;default:console.warn("THREE.Quaternion: .setFromEuler() encountered an unknown order: "+l)}return n!==!1&&this._onChangeCallback(),this}setFromAxisAngle(e,n){const i=n/2,r=Math.sin(i);return this._x=e.x*r,this._y=e.y*r,this._z=e.z*r,this._w=Math.cos(i),this._onChangeCallback(),this}setFromRotationMatrix(e){const n=e.elements,i=n[0],r=n[4],a=n[8],l=n[1],o=n[5],c=n[9],u=n[2],d=n[6],f=n[10],h=i+o+f;if(h>0){const _=.5/Math.sqrt(h+1);this._w=.25/_,this._x=(d-c)*_,this._y=(a-u)*_,this._z=(l-r)*_}else if(i>o&&i>f){const _=2*Math.sqrt(1+i-o-f);this._w=(d-c)/_,this._x=.25*_,this._y=(r+l)/_,this._z=(a+u)/_}else if(o>f){const _=2*Math.sqrt(1+o-i-f);this._w=(a-u)/_,this._x=(r+l)/_,this._y=.25*_,this._z=(c+d)/_}else{const _=2*Math.sqrt(1+f-i-o);this._w=(l-r)/_,this._x=(a+u)/_,this._y=(c+d)/_,this._z=.25*_}return this._onChangeCallback(),this}setFromUnitVectors(e,n){let i=e.dot(n)+1;return i<Number.EPSILON?(i=0,Math.abs(e.x)>Math.abs(e.z)?(this._x=-e.y,this._y=e.x,this._z=0,this._w=i):(this._x=0,this._y=-e.z,this._z=e.y,this._w=i)):(this._x=e.y*n.z-e.z*n.y,this._y=e.z*n.x-e.x*n.z,this._z=e.x*n.y-e.y*n.x,this._w=i),this.normalize()}angleTo(e){return 2*Math.acos(Math.abs(clamp(this.dot(e),-1,1)))}rotateTowards(e,n){const i=this.angleTo(e);if(i===0)return this;const r=Math.min(1,n/i);return this.slerp(e,r),this}identity(){return this.set(0,0,0,1)}invert(){return this.conjugate()}conjugate(){return this._x*=-1,this._y*=-1,this._z*=-1,this._onChangeCallback(),this}dot(e){return this._x*e._x+this._y*e._y+this._z*e._z+this._w*e._w}lengthSq(){return this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w}length(){return Math.sqrt(this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w)}normalize(){let e=this.length();return e===0?(this._x=0,this._y=0,this._z=0,this._w=1):(e=1/e,this._x=this._x*e,this._y=this._y*e,this._z=this._z*e,this._w=this._w*e),this._onChangeCallback(),this}multiply(e){return this.multiplyQuaternions(this,e)}premultiply(e){return this.multiplyQuaternions(e,this)}multiplyQuaternions(e,n){const i=e._x,r=e._y,a=e._z,l=e._w,o=n._x,c=n._y,u=n._z,d=n._w;return this._x=i*d+l*o+r*u-a*c,this._y=r*d+l*c+a*o-i*u,this._z=a*d+l*u+i*c-r*o,this._w=l*d-i*o-r*c-a*u,this._onChangeCallback(),this}slerp(e,n){if(n===0)return this;if(n===1)return this.copy(e);const i=this._x,r=this._y,a=this._z,l=this._w;let o=l*e._w+i*e._x+r*e._y+a*e._z;if(o<0?(this._w=-e._w,this._x=-e._x,this._y=-e._y,this._z=-e._z,o=-o):this.copy(e),o>=1)return this._w=l,this._x=i,this._y=r,this._z=a,this;const c=1-o*o;if(c<=Number.EPSILON){const _=1-n;return this._w=_*l+n*this._w,this._x=_*i+n*this._x,this._y=_*r+n*this._y,this._z=_*a+n*this._z,this.normalize(),this._onChangeCallback(),this}const u=Math.sqrt(c),d=Math.atan2(u,o),f=Math.sin((1-n)*d)/u,h=Math.sin(n*d)/u;return this._w=l*f+this._w*h,this._x=i*f+this._x*h,this._y=r*f+this._y*h,this._z=a*f+this._z*h,this._onChangeCallback(),this}slerpQuaternions(e,n,i){return this.copy(e).slerp(n,i)}random(){const e=Math.random(),n=Math.sqrt(1-e),i=Math.sqrt(e),r=2*Math.PI*Math.random(),a=2*Math.PI*Math.random();return this.set(n*Math.cos(r),i*Math.sin(a),i*Math.cos(a),n*Math.sin(r))}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._w===this._w}fromArray(e,n=0){return this._x=e[n],this._y=e[n+1],this._z=e[n+2],this._w=e[n+3],this._onChangeCallback(),this}toArray(e=[],n=0){return e[n]=this._x,e[n+1]=this._y,e[n+2]=this._z,e[n+3]=this._w,e}fromBufferAttribute(e,n){return this._x=e.getX(n),this._y=e.getY(n),this._z=e.getZ(n),this._w=e.getW(n),this}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._w}}class Vector3{constructor(e=0,n=0,i=0){Vector3.prototype.isVector3=!0,this.x=e,this.y=n,this.z=i}set(e,n,i){return i===void 0&&(i=this.z),this.x=e,this.y=n,this.z=i,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setComponent(e,n){switch(e){case 0:this.x=n;break;case 1:this.y=n;break;case 2:this.z=n;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this}addVectors(e,n){return this.x=e.x+n.x,this.y=e.y+n.y,this.z=e.z+n.z,this}addScaledVector(e,n){return this.x+=e.x*n,this.y+=e.y*n,this.z+=e.z*n,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this}subVectors(e,n){return this.x=e.x-n.x,this.y=e.y-n.y,this.z=e.z-n.z,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this}multiplyVectors(e,n){return this.x=e.x*n.x,this.y=e.y*n.y,this.z=e.z*n.z,this}applyEuler(e){return this.applyQuaternion(_quaternion$4.setFromEuler(e))}applyAxisAngle(e,n){return this.applyQuaternion(_quaternion$4.setFromAxisAngle(e,n))}applyMatrix3(e){const n=this.x,i=this.y,r=this.z,a=e.elements;return this.x=a[0]*n+a[3]*i+a[6]*r,this.y=a[1]*n+a[4]*i+a[7]*r,this.z=a[2]*n+a[5]*i+a[8]*r,this}applyNormalMatrix(e){return this.applyMatrix3(e).normalize()}applyMatrix4(e){const n=this.x,i=this.y,r=this.z,a=e.elements,l=1/(a[3]*n+a[7]*i+a[11]*r+a[15]);return this.x=(a[0]*n+a[4]*i+a[8]*r+a[12])*l,this.y=(a[1]*n+a[5]*i+a[9]*r+a[13])*l,this.z=(a[2]*n+a[6]*i+a[10]*r+a[14])*l,this}applyQuaternion(e){const n=this.x,i=this.y,r=this.z,a=e.x,l=e.y,o=e.z,c=e.w,u=c*n+l*r-o*i,d=c*i+o*n-a*r,f=c*r+a*i-l*n,h=-a*n-l*i-o*r;return this.x=u*c+h*-a+d*-o-f*-l,this.y=d*c+h*-l+f*-a-u*-o,this.z=f*c+h*-o+u*-l-d*-a,this}project(e){return this.applyMatrix4(e.matrixWorldInverse).applyMatrix4(e.projectionMatrix)}unproject(e){return this.applyMatrix4(e.projectionMatrixInverse).applyMatrix4(e.matrixWorld)}transformDirection(e){const n=this.x,i=this.y,r=this.z,a=e.elements;return this.x=a[0]*n+a[4]*i+a[8]*r,this.y=a[1]*n+a[5]*i+a[9]*r,this.z=a[2]*n+a[6]*i+a[10]*r,this.normalize()}divide(e){return this.x/=e.x,this.y/=e.y,this.z/=e.z,this}divideScalar(e){return this.multiplyScalar(1/e)}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this}clamp(e,n){return this.x=Math.max(e.x,Math.min(n.x,this.x)),this.y=Math.max(e.y,Math.min(n.y,this.y)),this.z=Math.max(e.z,Math.min(n.z,this.z)),this}clampScalar(e,n){return this.x=Math.max(e,Math.min(n,this.x)),this.y=Math.max(e,Math.min(n,this.y)),this.z=Math.max(e,Math.min(n,this.z)),this}clampLength(e,n){const i=this.length();return this.divideScalar(i||1).multiplyScalar(Math.max(e,Math.min(n,i)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this}roundToZero(){return this.x=this.x<0?Math.ceil(this.x):Math.floor(this.x),this.y=this.y<0?Math.ceil(this.y):Math.floor(this.y),this.z=this.z<0?Math.ceil(this.z):Math.floor(this.z),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,n){return this.x+=(e.x-this.x)*n,this.y+=(e.y-this.y)*n,this.z+=(e.z-this.z)*n,this}lerpVectors(e,n,i){return this.x=e.x+(n.x-e.x)*i,this.y=e.y+(n.y-e.y)*i,this.z=e.z+(n.z-e.z)*i,this}cross(e){return this.crossVectors(this,e)}crossVectors(e,n){const i=e.x,r=e.y,a=e.z,l=n.x,o=n.y,c=n.z;return this.x=r*c-a*o,this.y=a*l-i*c,this.z=i*o-r*l,this}projectOnVector(e){const n=e.lengthSq();if(n===0)return this.set(0,0,0);const i=e.dot(this)/n;return this.copy(e).multiplyScalar(i)}projectOnPlane(e){return _vector$c.copy(this).projectOnVector(e),this.sub(_vector$c)}reflect(e){return this.sub(_vector$c.copy(e).multiplyScalar(2*this.dot(e)))}angleTo(e){const n=Math.sqrt(this.lengthSq()*e.lengthSq());if(n===0)return Math.PI/2;const i=this.dot(e)/n;return Math.acos(clamp(i,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){const n=this.x-e.x,i=this.y-e.y,r=this.z-e.z;return n*n+i*i+r*r}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)+Math.abs(this.z-e.z)}setFromSpherical(e){return this.setFromSphericalCoords(e.radius,e.phi,e.theta)}setFromSphericalCoords(e,n,i){const r=Math.sin(n)*e;return this.x=r*Math.sin(i),this.y=Math.cos(n)*e,this.z=r*Math.cos(i),this}setFromCylindrical(e){return this.setFromCylindricalCoords(e.radius,e.theta,e.y)}setFromCylindricalCoords(e,n,i){return this.x=e*Math.sin(n),this.y=i,this.z=e*Math.cos(n),this}setFromMatrixPosition(e){const n=e.elements;return this.x=n[12],this.y=n[13],this.z=n[14],this}setFromMatrixScale(e){const n=this.setFromMatrixColumn(e,0).length(),i=this.setFromMatrixColumn(e,1).length(),r=this.setFromMatrixColumn(e,2).length();return this.x=n,this.y=i,this.z=r,this}setFromMatrixColumn(e,n){return this.fromArray(e.elements,n*4)}setFromMatrix3Column(e,n){return this.fromArray(e.elements,n*3)}setFromEuler(e){return this.x=e._x,this.y=e._y,this.z=e._z,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z}fromArray(e,n=0){return this.x=e[n],this.y=e[n+1],this.z=e[n+2],this}toArray(e=[],n=0){return e[n]=this.x,e[n+1]=this.y,e[n+2]=this.z,e}fromBufferAttribute(e,n){return this.x=e.getX(n),this.y=e.getY(n),this.z=e.getZ(n),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this}randomDirection(){const e=(Math.random()-.5)*2,n=Math.random()*Math.PI*2,i=Math.sqrt(1-e**2);return this.x=i*Math.cos(n),this.y=i*Math.sin(n),this.z=e,this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z}}const _vector$c=new Vector3,_quaternion$4=new Quaternion;class Box3{constructor(e=new Vector3(1/0,1/0,1/0),n=new Vector3(-1/0,-1/0,-1/0)){this.isBox3=!0,this.min=e,this.max=n}set(e,n){return this.min.copy(e),this.max.copy(n),this}setFromArray(e){let n=1/0,i=1/0,r=1/0,a=-1/0,l=-1/0,o=-1/0;for(let c=0,u=e.length;c<u;c+=3){const d=e[c],f=e[c+1],h=e[c+2];d<n&&(n=d),f<i&&(i=f),h<r&&(r=h),d>a&&(a=d),f>l&&(l=f),h>o&&(o=h)}return this.min.set(n,i,r),this.max.set(a,l,o),this}setFromBufferAttribute(e){let n=1/0,i=1/0,r=1/0,a=-1/0,l=-1/0,o=-1/0;for(let c=0,u=e.count;c<u;c++){const d=e.getX(c),f=e.getY(c),h=e.getZ(c);d<n&&(n=d),f<i&&(i=f),h<r&&(r=h),d>a&&(a=d),f>l&&(l=f),h>o&&(o=h)}return this.min.set(n,i,r),this.max.set(a,l,o),this}setFromPoints(e){this.makeEmpty();for(let n=0,i=e.length;n<i;n++)this.expandByPoint(e[n]);return this}setFromCenterAndSize(e,n){const i=_vector$b.copy(n).multiplyScalar(.5);return this.min.copy(e).sub(i),this.max.copy(e).add(i),this}setFromObject(e,n=!1){return this.makeEmpty(),this.expandByObject(e,n)}clone(){return new this.constructor().copy(this)}copy(e){return this.min.copy(e.min),this.max.copy(e.max),this}makeEmpty(){return this.min.x=this.min.y=this.min.z=1/0,this.max.x=this.max.y=this.max.z=-1/0,this}isEmpty(){return this.max.x<this.min.x||this.max.y<this.min.y||this.max.z<this.min.z}getCenter(e){return this.isEmpty()?e.set(0,0,0):e.addVectors(this.min,this.max).multiplyScalar(.5)}getSize(e){return this.isEmpty()?e.set(0,0,0):e.subVectors(this.max,this.min)}expandByPoint(e){return this.min.min(e),this.max.max(e),this}expandByVector(e){return this.min.sub(e),this.max.add(e),this}expandByScalar(e){return this.min.addScalar(-e),this.max.addScalar(e),this}expandByObject(e,n=!1){e.updateWorldMatrix(!1,!1);const i=e.geometry;if(i!==void 0)if(n&&i.attributes!=null&&i.attributes.position!==void 0){const a=i.attributes.position;for(let l=0,o=a.count;l<o;l++)_vector$b.fromBufferAttribute(a,l).applyMatrix4(e.matrixWorld),this.expandByPoint(_vector$b)}else i.boundingBox===null&&i.computeBoundingBox(),_box$3.copy(i.boundingBox),_box$3.applyMatrix4(e.matrixWorld),this.union(_box$3);const r=e.children;for(let a=0,l=r.length;a<l;a++)this.expandByObject(r[a],n);return this}containsPoint(e){return!(e.x<this.min.x||e.x>this.max.x||e.y<this.min.y||e.y>this.max.y||e.z<this.min.z||e.z>this.max.z)}containsBox(e){return this.min.x<=e.min.x&&e.max.x<=this.max.x&&this.min.y<=e.min.y&&e.max.y<=this.max.y&&this.min.z<=e.min.z&&e.max.z<=this.max.z}getParameter(e,n){return n.set((e.x-this.min.x)/(this.max.x-this.min.x),(e.y-this.min.y)/(this.max.y-this.min.y),(e.z-this.min.z)/(this.max.z-this.min.z))}intersectsBox(e){return!(e.max.x<this.min.x||e.min.x>this.max.x||e.max.y<this.min.y||e.min.y>this.max.y||e.max.z<this.min.z||e.min.z>this.max.z)}intersectsSphere(e){return this.clampPoint(e.center,_vector$b),_vector$b.distanceToSquared(e.center)<=e.radius*e.radius}intersectsPlane(e){let n,i;return e.normal.x>0?(n=e.normal.x*this.min.x,i=e.normal.x*this.max.x):(n=e.normal.x*this.max.x,i=e.normal.x*this.min.x),e.normal.y>0?(n+=e.normal.y*this.min.y,i+=e.normal.y*this.max.y):(n+=e.normal.y*this.max.y,i+=e.normal.y*this.min.y),e.normal.z>0?(n+=e.normal.z*this.min.z,i+=e.normal.z*this.max.z):(n+=e.normal.z*this.max.z,i+=e.normal.z*this.min.z),n<=-e.constant&&i>=-e.constant}intersectsTriangle(e){if(this.isEmpty())return!1;this.getCenter(_center),_extents.subVectors(this.max,_center),_v0$2.subVectors(e.a,_center),_v1$7.subVectors(e.b,_center),_v2$4.subVectors(e.c,_center),_f0.subVectors(_v1$7,_v0$2),_f1.subVectors(_v2$4,_v1$7),_f2.subVectors(_v0$2,_v2$4);let n=[0,-_f0.z,_f0.y,0,-_f1.z,_f1.y,0,-_f2.z,_f2.y,_f0.z,0,-_f0.x,_f1.z,0,-_f1.x,_f2.z,0,-_f2.x,-_f0.y,_f0.x,0,-_f1.y,_f1.x,0,-_f2.y,_f2.x,0];return!satForAxes(n,_v0$2,_v1$7,_v2$4,_extents)||(n=[1,0,0,0,1,0,0,0,1],!satForAxes(n,_v0$2,_v1$7,_v2$4,_extents))?!1:(_triangleNormal.crossVectors(_f0,_f1),n=[_triangleNormal.x,_triangleNormal.y,_triangleNormal.z],satForAxes(n,_v0$2,_v1$7,_v2$4,_extents))}clampPoint(e,n){return n.copy(e).clamp(this.min,this.max)}distanceToPoint(e){return _vector$b.copy(e).clamp(this.min,this.max).sub(e).length()}getBoundingSphere(e){return this.getCenter(e.center),e.radius=this.getSize(_vector$b).length()*.5,e}intersect(e){return this.min.max(e.min),this.max.min(e.max),this.isEmpty()&&this.makeEmpty(),this}union(e){return this.min.min(e.min),this.max.max(e.max),this}applyMatrix4(e){return this.isEmpty()?this:(_points[0].set(this.min.x,this.min.y,this.min.z).applyMatrix4(e),_points[1].set(this.min.x,this.min.y,this.max.z).applyMatrix4(e),_points[2].set(this.min.x,this.max.y,this.min.z).applyMatrix4(e),_points[3].set(this.min.x,this.max.y,this.max.z).applyMatrix4(e),_points[4].set(this.max.x,this.min.y,this.min.z).applyMatrix4(e),_points[5].set(this.max.x,this.min.y,this.max.z).applyMatrix4(e),_points[6].set(this.max.x,this.max.y,this.min.z).applyMatrix4(e),_points[7].set(this.max.x,this.max.y,this.max.z).applyMatrix4(e),this.setFromPoints(_points),this)}translate(e){return this.min.add(e),this.max.add(e),this}equals(e){return e.min.equals(this.min)&&e.max.equals(this.max)}}const _points=[new Vector3,new Vector3,new Vector3,new Vector3,new Vector3,new Vector3,new Vector3,new Vector3],_vector$b=new Vector3,_box$3=new Box3,_v0$2=new Vector3,_v1$7=new Vector3,_v2$4=new Vector3,_f0=new Vector3,_f1=new Vector3,_f2=new Vector3,_center=new Vector3,_extents=new Vector3,_triangleNormal=new Vector3,_testAxis=new Vector3;function satForAxes(s,e,n,i,r){for(let a=0,l=s.length-3;a<=l;a+=3){_testAxis.fromArray(s,a);const o=r.x*Math.abs(_testAxis.x)+r.y*Math.abs(_testAxis.y)+r.z*Math.abs(_testAxis.z),c=e.dot(_testAxis),u=n.dot(_testAxis),d=i.dot(_testAxis);if(Math.max(-Math.max(c,u,d),Math.min(c,u,d))>o)return!1}return!0}const _box$2=new Box3,_v1$6=new Vector3,_v2$3=new Vector3;class Sphere{constructor(e=new Vector3,n=-1){this.center=e,this.radius=n}set(e,n){return this.center.copy(e),this.radius=n,this}setFromPoints(e,n){const i=this.center;n!==void 0?i.copy(n):_box$2.setFromPoints(e).getCenter(i);let r=0;for(let a=0,l=e.length;a<l;a++)r=Math.max(r,i.distanceToSquared(e[a]));return this.radius=Math.sqrt(r),this}copy(e){return this.center.copy(e.center),this.radius=e.radius,this}isEmpty(){return this.radius<0}makeEmpty(){return this.center.set(0,0,0),this.radius=-1,this}containsPoint(e){return e.distanceToSquared(this.center)<=this.radius*this.radius}distanceToPoint(e){return e.distanceTo(this.center)-this.radius}intersectsSphere(e){const n=this.radius+e.radius;return e.center.distanceToSquared(this.center)<=n*n}intersectsBox(e){return e.intersectsSphere(this)}intersectsPlane(e){return Math.abs(e.distanceToPoint(this.center))<=this.radius}clampPoint(e,n){const i=this.center.distanceToSquared(e);return n.copy(e),i>this.radius*this.radius&&(n.sub(this.center).normalize(),n.multiplyScalar(this.radius).add(this.center)),n}getBoundingBox(e){return this.isEmpty()?(e.makeEmpty(),e):(e.set(this.center,this.center),e.expandByScalar(this.radius),e)}applyMatrix4(e){return this.center.applyMatrix4(e),this.radius=this.radius*e.getMaxScaleOnAxis(),this}translate(e){return this.center.add(e),this}expandByPoint(e){if(this.isEmpty())return this.center.copy(e),this.radius=0,this;_v1$6.subVectors(e,this.center);const n=_v1$6.lengthSq();if(n>this.radius*this.radius){const i=Math.sqrt(n),r=(i-this.radius)*.5;this.center.addScaledVector(_v1$6,r/i),this.radius+=r}return this}union(e){return e.isEmpty()?this:this.isEmpty()?(this.copy(e),this):(this.center.equals(e.center)===!0?this.radius=Math.max(this.radius,e.radius):(_v2$3.subVectors(e.center,this.center).setLength(e.radius),this.expandByPoint(_v1$6.copy(e.center).add(_v2$3)),this.expandByPoint(_v1$6.copy(e.center).sub(_v2$3))),this)}equals(e){return e.center.equals(this.center)&&e.radius===this.radius}clone(){return new this.constructor().copy(this)}}const _vector$a=new Vector3,_segCenter=new Vector3,_segDir=new Vector3,_diff=new Vector3,_edge1=new Vector3,_edge2=new Vector3,_normal$1=new Vector3;class Ray{constructor(e=new Vector3,n=new Vector3(0,0,-1)){this.origin=e,this.direction=n}set(e,n){return this.origin.copy(e),this.direction.copy(n),this}copy(e){return this.origin.copy(e.origin),this.direction.copy(e.direction),this}at(e,n){return n.copy(this.direction).multiplyScalar(e).add(this.origin)}lookAt(e){return this.direction.copy(e).sub(this.origin).normalize(),this}recast(e){return this.origin.copy(this.at(e,_vector$a)),this}closestPointToPoint(e,n){n.subVectors(e,this.origin);const i=n.dot(this.direction);return i<0?n.copy(this.origin):n.copy(this.direction).multiplyScalar(i).add(this.origin)}distanceToPoint(e){return Math.sqrt(this.distanceSqToPoint(e))}distanceSqToPoint(e){const n=_vector$a.subVectors(e,this.origin).dot(this.direction);return n<0?this.origin.distanceToSquared(e):(_vector$a.copy(this.direction).multiplyScalar(n).add(this.origin),_vector$a.distanceToSquared(e))}distanceSqToSegment(e,n,i,r){_segCenter.copy(e).add(n).multiplyScalar(.5),_segDir.copy(n).sub(e).normalize(),_diff.copy(this.origin).sub(_segCenter);const a=e.distanceTo(n)*.5,l=-this.direction.dot(_segDir),o=_diff.dot(this.direction),c=-_diff.dot(_segDir),u=_diff.lengthSq(),d=Math.abs(1-l*l);let f,h,_,v;if(d>0)if(f=l*c-o,h=l*o-c,v=a*d,f>=0)if(h>=-v)if(h<=v){const m=1/d;f*=m,h*=m,_=f*(f+l*h+2*o)+h*(l*f+h+2*c)+u}else h=a,f=Math.max(0,-(l*h+o)),_=-f*f+h*(h+2*c)+u;else h=-a,f=Math.max(0,-(l*h+o)),_=-f*f+h*(h+2*c)+u;else h<=-v?(f=Math.max(0,-(-l*a+o)),h=f>0?-a:Math.min(Math.max(-a,-c),a),_=-f*f+h*(h+2*c)+u):h<=v?(f=0,h=Math.min(Math.max(-a,-c),a),_=h*(h+2*c)+u):(f=Math.max(0,-(l*a+o)),h=f>0?a:Math.min(Math.max(-a,-c),a),_=-f*f+h*(h+2*c)+u);else h=l>0?-a:a,f=Math.max(0,-(l*h+o)),_=-f*f+h*(h+2*c)+u;return i&&i.copy(this.direction).multiplyScalar(f).add(this.origin),r&&r.copy(_segDir).multiplyScalar(h).add(_segCenter),_}intersectSphere(e,n){_vector$a.subVectors(e.center,this.origin);const i=_vector$a.dot(this.direction),r=_vector$a.dot(_vector$a)-i*i,a=e.radius*e.radius;if(r>a)return null;const l=Math.sqrt(a-r),o=i-l,c=i+l;return o<0&&c<0?null:o<0?this.at(c,n):this.at(o,n)}intersectsSphere(e){return this.distanceSqToPoint(e.center)<=e.radius*e.radius}distanceToPlane(e){const n=e.normal.dot(this.direction);if(n===0)return e.distanceToPoint(this.origin)===0?0:null;const i=-(this.origin.dot(e.normal)+e.constant)/n;return i>=0?i:null}intersectPlane(e,n){const i=this.distanceToPlane(e);return i===null?null:this.at(i,n)}intersectsPlane(e){const n=e.distanceToPoint(this.origin);return n===0||e.normal.dot(this.direction)*n<0}intersectBox(e,n){let i,r,a,l,o,c;const u=1/this.direction.x,d=1/this.direction.y,f=1/this.direction.z,h=this.origin;return u>=0?(i=(e.min.x-h.x)*u,r=(e.max.x-h.x)*u):(i=(e.max.x-h.x)*u,r=(e.min.x-h.x)*u),d>=0?(a=(e.min.y-h.y)*d,l=(e.max.y-h.y)*d):(a=(e.max.y-h.y)*d,l=(e.min.y-h.y)*d),i>l||a>r||((a>i||isNaN(i))&&(i=a),(l<r||isNaN(r))&&(r=l),f>=0?(o=(e.min.z-h.z)*f,c=(e.max.z-h.z)*f):(o=(e.max.z-h.z)*f,c=(e.min.z-h.z)*f),i>c||o>r)||((o>i||i!==i)&&(i=o),(c<r||r!==r)&&(r=c),r<0)?null:this.at(i>=0?i:r,n)}intersectsBox(e){return this.intersectBox(e,_vector$a)!==null}intersectTriangle(e,n,i,r,a){_edge1.subVectors(n,e),_edge2.subVectors(i,e),_normal$1.crossVectors(_edge1,_edge2);let l=this.direction.dot(_normal$1),o;if(l>0){if(r)return null;o=1}else if(l<0)o=-1,l=-l;else return null;_diff.subVectors(this.origin,e);const c=o*this.direction.dot(_edge2.crossVectors(_diff,_edge2));if(c<0)return null;const u=o*this.direction.dot(_edge1.cross(_diff));if(u<0||c+u>l)return null;const d=-o*_diff.dot(_normal$1);return d<0?null:this.at(d/l,a)}applyMatrix4(e){return this.origin.applyMatrix4(e),this.direction.transformDirection(e),this}equals(e){return e.origin.equals(this.origin)&&e.direction.equals(this.direction)}clone(){return new this.constructor().copy(this)}}class Matrix4{constructor(){Matrix4.prototype.isMatrix4=!0,this.elements=[1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1]}set(e,n,i,r,a,l,o,c,u,d,f,h,_,v,m,p){const y=this.elements;return y[0]=e,y[4]=n,y[8]=i,y[12]=r,y[1]=a,y[5]=l,y[9]=o,y[13]=c,y[2]=u,y[6]=d,y[10]=f,y[14]=h,y[3]=_,y[7]=v,y[11]=m,y[15]=p,this}identity(){return this.set(1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1),this}clone(){return new Matrix4().fromArray(this.elements)}copy(e){const n=this.elements,i=e.elements;return n[0]=i[0],n[1]=i[1],n[2]=i[2],n[3]=i[3],n[4]=i[4],n[5]=i[5],n[6]=i[6],n[7]=i[7],n[8]=i[8],n[9]=i[9],n[10]=i[10],n[11]=i[11],n[12]=i[12],n[13]=i[13],n[14]=i[14],n[15]=i[15],this}copyPosition(e){const n=this.elements,i=e.elements;return n[12]=i[12],n[13]=i[13],n[14]=i[14],this}setFromMatrix3(e){const n=e.elements;return this.set(n[0],n[3],n[6],0,n[1],n[4],n[7],0,n[2],n[5],n[8],0,0,0,0,1),this}extractBasis(e,n,i){return e.setFromMatrixColumn(this,0),n.setFromMatrixColumn(this,1),i.setFromMatrixColumn(this,2),this}makeBasis(e,n,i){return this.set(e.x,n.x,i.x,0,e.y,n.y,i.y,0,e.z,n.z,i.z,0,0,0,0,1),this}extractRotation(e){const n=this.elements,i=e.elements,r=1/_v1$5.setFromMatrixColumn(e,0).length(),a=1/_v1$5.setFromMatrixColumn(e,1).length(),l=1/_v1$5.setFromMatrixColumn(e,2).length();return n[0]=i[0]*r,n[1]=i[1]*r,n[2]=i[2]*r,n[3]=0,n[4]=i[4]*a,n[5]=i[5]*a,n[6]=i[6]*a,n[7]=0,n[8]=i[8]*l,n[9]=i[9]*l,n[10]=i[10]*l,n[11]=0,n[12]=0,n[13]=0,n[14]=0,n[15]=1,this}makeRotationFromEuler(e){const n=this.elements,i=e.x,r=e.y,a=e.z,l=Math.cos(i),o=Math.sin(i),c=Math.cos(r),u=Math.sin(r),d=Math.cos(a),f=Math.sin(a);if(e.order==="XYZ"){const h=l*d,_=l*f,v=o*d,m=o*f;n[0]=c*d,n[4]=-c*f,n[8]=u,n[1]=_+v*u,n[5]=h-m*u,n[9]=-o*c,n[2]=m-h*u,n[6]=v+_*u,n[10]=l*c}else if(e.order==="YXZ"){const h=c*d,_=c*f,v=u*d,m=u*f;n[0]=h+m*o,n[4]=v*o-_,n[8]=l*u,n[1]=l*f,n[5]=l*d,n[9]=-o,n[2]=_*o-v,n[6]=m+h*o,n[10]=l*c}else if(e.order==="ZXY"){const h=c*d,_=c*f,v=u*d,m=u*f;n[0]=h-m*o,n[4]=-l*f,n[8]=v+_*o,n[1]=_+v*o,n[5]=l*d,n[9]=m-h*o,n[2]=-l*u,n[6]=o,n[10]=l*c}else if(e.order==="ZYX"){const h=l*d,_=l*f,v=o*d,m=o*f;n[0]=c*d,n[4]=v*u-_,n[8]=h*u+m,n[1]=c*f,n[5]=m*u+h,n[9]=_*u-v,n[2]=-u,n[6]=o*c,n[10]=l*c}else if(e.order==="YZX"){const h=l*c,_=l*u,v=o*c,m=o*u;n[0]=c*d,n[4]=m-h*f,n[8]=v*f+_,n[1]=f,n[5]=l*d,n[9]=-o*d,n[2]=-u*d,n[6]=_*f+v,n[10]=h-m*f}else if(e.order==="XZY"){const h=l*c,_=l*u,v=o*c,m=o*u;n[0]=c*d,n[4]=-f,n[8]=u*d,n[1]=h*f+m,n[5]=l*d,n[9]=_*f-v,n[2]=v*f-_,n[6]=o*d,n[10]=m*f+h}return n[3]=0,n[7]=0,n[11]=0,n[12]=0,n[13]=0,n[14]=0,n[15]=1,this}makeRotationFromQuaternion(e){return this.compose(_zero,e,_one)}lookAt(e,n,i){const r=this.elements;return _z.subVectors(e,n),_z.lengthSq()===0&&(_z.z=1),_z.normalize(),_x.crossVectors(i,_z),_x.lengthSq()===0&&(Math.abs(i.z)===1?_z.x+=1e-4:_z.z+=1e-4,_z.normalize(),_x.crossVectors(i,_z)),_x.normalize(),_y.crossVectors(_z,_x),r[0]=_x.x,r[4]=_y.x,r[8]=_z.x,r[1]=_x.y,r[5]=_y.y,r[9]=_z.y,r[2]=_x.z,r[6]=_y.z,r[10]=_z.z,this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,n){const i=e.elements,r=n.elements,a=this.elements,l=i[0],o=i[4],c=i[8],u=i[12],d=i[1],f=i[5],h=i[9],_=i[13],v=i[2],m=i[6],p=i[10],y=i[14],C=i[3],w=i[7],A=i[11],M=i[15],P=r[0],N=r[4],b=r[8],L=r[12],U=r[1],Y=r[5],Q=r[9],O=r[13],F=r[2],q=r[6],Z=r[10],J=r[14],X=r[3],ne=r[7],te=r[11],he=r[15];return a[0]=l*P+o*U+c*F+u*X,a[4]=l*N+o*Y+c*q+u*ne,a[8]=l*b+o*Q+c*Z+u*te,a[12]=l*L+o*O+c*J+u*he,a[1]=d*P+f*U+h*F+_*X,a[5]=d*N+f*Y+h*q+_*ne,a[9]=d*b+f*Q+h*Z+_*te,a[13]=d*L+f*O+h*J+_*he,a[2]=v*P+m*U+p*F+y*X,a[6]=v*N+m*Y+p*q+y*ne,a[10]=v*b+m*Q+p*Z+y*te,a[14]=v*L+m*O+p*J+y*he,a[3]=C*P+w*U+A*F+M*X,a[7]=C*N+w*Y+A*q+M*ne,a[11]=C*b+w*Q+A*Z+M*te,a[15]=C*L+w*O+A*J+M*he,this}multiplyScalar(e){const n=this.elements;return n[0]*=e,n[4]*=e,n[8]*=e,n[12]*=e,n[1]*=e,n[5]*=e,n[9]*=e,n[13]*=e,n[2]*=e,n[6]*=e,n[10]*=e,n[14]*=e,n[3]*=e,n[7]*=e,n[11]*=e,n[15]*=e,this}determinant(){const e=this.elements,n=e[0],i=e[4],r=e[8],a=e[12],l=e[1],o=e[5],c=e[9],u=e[13],d=e[2],f=e[6],h=e[10],_=e[14],v=e[3],m=e[7],p=e[11],y=e[15];return v*(+a*c*f-r*u*f-a*o*h+i*u*h+r*o*_-i*c*_)+m*(+n*c*_-n*u*h+a*l*h-r*l*_+r*u*d-a*c*d)+p*(+n*u*f-n*o*_-a*l*f+i*l*_+a*o*d-i*u*d)+y*(-r*o*d-n*c*f+n*o*h+r*l*f-i*l*h+i*c*d)}transpose(){const e=this.elements;let n;return n=e[1],e[1]=e[4],e[4]=n,n=e[2],e[2]=e[8],e[8]=n,n=e[6],e[6]=e[9],e[9]=n,n=e[3],e[3]=e[12],e[12]=n,n=e[7],e[7]=e[13],e[13]=n,n=e[11],e[11]=e[14],e[14]=n,this}setPosition(e,n,i){const r=this.elements;return e.isVector3?(r[12]=e.x,r[13]=e.y,r[14]=e.z):(r[12]=e,r[13]=n,r[14]=i),this}invert(){const e=this.elements,n=e[0],i=e[1],r=e[2],a=e[3],l=e[4],o=e[5],c=e[6],u=e[7],d=e[8],f=e[9],h=e[10],_=e[11],v=e[12],m=e[13],p=e[14],y=e[15],C=f*p*u-m*h*u+m*c*_-o*p*_-f*c*y+o*h*y,w=v*h*u-d*p*u-v*c*_+l*p*_+d*c*y-l*h*y,A=d*m*u-v*f*u+v*o*_-l*m*_-d*o*y+l*f*y,M=v*f*c-d*m*c-v*o*h+l*m*h+d*o*p-l*f*p,P=n*C+i*w+r*A+a*M;if(P===0)return this.set(0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0);const N=1/P;return e[0]=C*N,e[1]=(m*h*a-f*p*a-m*r*_+i*p*_+f*r*y-i*h*y)*N,e[2]=(o*p*a-m*c*a+m*r*u-i*p*u-o*r*y+i*c*y)*N,e[3]=(f*c*a-o*h*a-f*r*u+i*h*u+o*r*_-i*c*_)*N,e[4]=w*N,e[5]=(d*p*a-v*h*a+v*r*_-n*p*_-d*r*y+n*h*y)*N,e[6]=(v*c*a-l*p*a-v*r*u+n*p*u+l*r*y-n*c*y)*N,e[7]=(l*h*a-d*c*a+d*r*u-n*h*u-l*r*_+n*c*_)*N,e[8]=A*N,e[9]=(v*f*a-d*m*a-v*i*_+n*m*_+d*i*y-n*f*y)*N,e[10]=(l*m*a-v*o*a+v*i*u-n*m*u-l*i*y+n*o*y)*N,e[11]=(d*o*a-l*f*a-d*i*u+n*f*u+l*i*_-n*o*_)*N,e[12]=M*N,e[13]=(d*m*r-v*f*r+v*i*h-n*m*h-d*i*p+n*f*p)*N,e[14]=(v*o*r-l*m*r-v*i*c+n*m*c+l*i*p-n*o*p)*N,e[15]=(l*f*r-d*o*r+d*i*c-n*f*c-l*i*h+n*o*h)*N,this}scale(e){const n=this.elements,i=e.x,r=e.y,a=e.z;return n[0]*=i,n[4]*=r,n[8]*=a,n[1]*=i,n[5]*=r,n[9]*=a,n[2]*=i,n[6]*=r,n[10]*=a,n[3]*=i,n[7]*=r,n[11]*=a,this}getMaxScaleOnAxis(){const e=this.elements,n=e[0]*e[0]+e[1]*e[1]+e[2]*e[2],i=e[4]*e[4]+e[5]*e[5]+e[6]*e[6],r=e[8]*e[8]+e[9]*e[9]+e[10]*e[10];return Math.sqrt(Math.max(n,i,r))}makeTranslation(e,n,i){return this.set(1,0,0,e,0,1,0,n,0,0,1,i,0,0,0,1),this}makeRotationX(e){const n=Math.cos(e),i=Math.sin(e);return this.set(1,0,0,0,0,n,-i,0,0,i,n,0,0,0,0,1),this}makeRotationY(e){const n=Math.cos(e),i=Math.sin(e);return this.set(n,0,i,0,0,1,0,0,-i,0,n,0,0,0,0,1),this}makeRotationZ(e){const n=Math.cos(e),i=Math.sin(e);return this.set(n,-i,0,0,i,n,0,0,0,0,1,0,0,0,0,1),this}makeRotationAxis(e,n){const i=Math.cos(n),r=Math.sin(n),a=1-i,l=e.x,o=e.y,c=e.z,u=a*l,d=a*o;return this.set(u*l+i,u*o-r*c,u*c+r*o,0,u*o+r*c,d*o+i,d*c-r*l,0,u*c-r*o,d*c+r*l,a*c*c+i,0,0,0,0,1),this}makeScale(e,n,i){return this.set(e,0,0,0,0,n,0,0,0,0,i,0,0,0,0,1),this}makeShear(e,n,i,r,a,l){return this.set(1,i,a,0,e,1,l,0,n,r,1,0,0,0,0,1),this}compose(e,n,i){const r=this.elements,a=n._x,l=n._y,o=n._z,c=n._w,u=a+a,d=l+l,f=o+o,h=a*u,_=a*d,v=a*f,m=l*d,p=l*f,y=o*f,C=c*u,w=c*d,A=c*f,M=i.x,P=i.y,N=i.z;return r[0]=(1-(m+y))*M,r[1]=(_+A)*M,r[2]=(v-w)*M,r[3]=0,r[4]=(_-A)*P,r[5]=(1-(h+y))*P,r[6]=(p+C)*P,r[7]=0,r[8]=(v+w)*N,r[9]=(p-C)*N,r[10]=(1-(h+m))*N,r[11]=0,r[12]=e.x,r[13]=e.y,r[14]=e.z,r[15]=1,this}decompose(e,n,i){const r=this.elements;let a=_v1$5.set(r[0],r[1],r[2]).length();const l=_v1$5.set(r[4],r[5],r[6]).length(),o=_v1$5.set(r[8],r[9],r[10]).length();this.determinant()<0&&(a=-a),e.x=r[12],e.y=r[13],e.z=r[14],_m1$2.copy(this);const u=1/a,d=1/l,f=1/o;return _m1$2.elements[0]*=u,_m1$2.elements[1]*=u,_m1$2.elements[2]*=u,_m1$2.elements[4]*=d,_m1$2.elements[5]*=d,_m1$2.elements[6]*=d,_m1$2.elements[8]*=f,_m1$2.elements[9]*=f,_m1$2.elements[10]*=f,n.setFromRotationMatrix(_m1$2),i.x=a,i.y=l,i.z=o,this}makePerspective(e,n,i,r,a,l){const o=this.elements,c=2*a/(n-e),u=2*a/(i-r),d=(n+e)/(n-e),f=(i+r)/(i-r),h=-(l+a)/(l-a),_=-2*l*a/(l-a);return o[0]=c,o[4]=0,o[8]=d,o[12]=0,o[1]=0,o[5]=u,o[9]=f,o[13]=0,o[2]=0,o[6]=0,o[10]=h,o[14]=_,o[3]=0,o[7]=0,o[11]=-1,o[15]=0,this}makeOrthographic(e,n,i,r,a,l){const o=this.elements,c=1/(n-e),u=1/(i-r),d=1/(l-a),f=(n+e)*c,h=(i+r)*u,_=(l+a)*d;return o[0]=2*c,o[4]=0,o[8]=0,o[12]=-f,o[1]=0,o[5]=2*u,o[9]=0,o[13]=-h,o[2]=0,o[6]=0,o[10]=-2*d,o[14]=-_,o[3]=0,o[7]=0,o[11]=0,o[15]=1,this}equals(e){const n=this.elements,i=e.elements;for(let r=0;r<16;r++)if(n[r]!==i[r])return!1;return!0}fromArray(e,n=0){for(let i=0;i<16;i++)this.elements[i]=e[i+n];return this}toArray(e=[],n=0){const i=this.elements;return e[n]=i[0],e[n+1]=i[1],e[n+2]=i[2],e[n+3]=i[3],e[n+4]=i[4],e[n+5]=i[5],e[n+6]=i[6],e[n+7]=i[7],e[n+8]=i[8],e[n+9]=i[9],e[n+10]=i[10],e[n+11]=i[11],e[n+12]=i[12],e[n+13]=i[13],e[n+14]=i[14],e[n+15]=i[15],e}}const _v1$5=new Vector3,_m1$2=new Matrix4,_zero=new Vector3(0,0,0),_one=new Vector3(1,1,1),_x=new Vector3,_y=new Vector3,_z=new Vector3,_matrix$1=new Matrix4,_quaternion$3=new Quaternion;class Euler{constructor(e=0,n=0,i=0,r=Euler.DEFAULT_ORDER){this.isEuler=!0,this._x=e,this._y=n,this._z=i,this._order=r}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get order(){return this._order}set order(e){this._order=e,this._onChangeCallback()}set(e,n,i,r=this._order){return this._x=e,this._y=n,this._z=i,this._order=r,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._order)}copy(e){return this._x=e._x,this._y=e._y,this._z=e._z,this._order=e._order,this._onChangeCallback(),this}setFromRotationMatrix(e,n=this._order,i=!0){const r=e.elements,a=r[0],l=r[4],o=r[8],c=r[1],u=r[5],d=r[9],f=r[2],h=r[6],_=r[10];switch(n){case"XYZ":this._y=Math.asin(clamp(o,-1,1)),Math.abs(o)<.9999999?(this._x=Math.atan2(-d,_),this._z=Math.atan2(-l,a)):(this._x=Math.atan2(h,u),this._z=0);break;case"YXZ":this._x=Math.asin(-clamp(d,-1,1)),Math.abs(d)<.9999999?(this._y=Math.atan2(o,_),this._z=Math.atan2(c,u)):(this._y=Math.atan2(-f,a),this._z=0);break;case"ZXY":this._x=Math.asin(clamp(h,-1,1)),Math.abs(h)<.9999999?(this._y=Math.atan2(-f,_),this._z=Math.atan2(-l,u)):(this._y=0,this._z=Math.atan2(c,a));break;case"ZYX":this._y=Math.asin(-clamp(f,-1,1)),Math.abs(f)<.9999999?(this._x=Math.atan2(h,_),this._z=Math.atan2(c,a)):(this._x=0,this._z=Math.atan2(-l,u));break;case"YZX":this._z=Math.asin(clamp(c,-1,1)),Math.abs(c)<.9999999?(this._x=Math.atan2(-d,u),this._y=Math.atan2(-f,a)):(this._x=0,this._y=Math.atan2(o,_));break;case"XZY":this._z=Math.asin(-clamp(l,-1,1)),Math.abs(l)<.9999999?(this._x=Math.atan2(h,u),this._y=Math.atan2(o,a)):(this._x=Math.atan2(-d,_),this._y=0);break;default:console.warn("THREE.Euler: .setFromRotationMatrix() encountered an unknown order: "+n)}return this._order=n,i===!0&&this._onChangeCallback(),this}setFromQuaternion(e,n,i){return _matrix$1.makeRotationFromQuaternion(e),this.setFromRotationMatrix(_matrix$1,n,i)}setFromVector3(e,n=this._order){return this.set(e.x,e.y,e.z,n)}reorder(e){return _quaternion$3.setFromEuler(this),this.setFromQuaternion(_quaternion$3,e)}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._order===this._order}fromArray(e){return this._x=e[0],this._y=e[1],this._z=e[2],e[3]!==void 0&&(this._order=e[3]),this._onChangeCallback(),this}toArray(e=[],n=0){return e[n]=this._x,e[n+1]=this._y,e[n+2]=this._z,e[n+3]=this._order,e}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._order}}Euler.DEFAULT_ORDER="XYZ";class Layers{constructor(){this.mask=1}set(e){this.mask=(1<<e|0)>>>0}enable(e){this.mask|=1<<e|0}enableAll(){this.mask=-1}toggle(e){this.mask^=1<<e|0}disable(e){this.mask&=~(1<<e|0)}disableAll(){this.mask=0}test(e){return(this.mask&e.mask)!==0}isEnabled(e){return(this.mask&(1<<e|0))!==0}}let _object3DId=0;const _v1$4=new Vector3,_q1=new Quaternion,_m1$1=new Matrix4,_target=new Vector3,_position$3=new Vector3,_scale$2=new Vector3,_quaternion$2=new Quaternion,_xAxis=new Vector3(1,0,0),_yAxis=new Vector3(0,1,0),_zAxis=new Vector3(0,0,1),_addedEvent={type:"added"},_removedEvent={type:"removed"};class Object3D extends EventDispatcher{constructor(){super(),this.isObject3D=!0,Object.defineProperty(this,"id",{value:_object3DId++}),this.uuid=generateUUID(),this.name="",this.type="Object3D",this.parent=null,this.children=[],this.up=Object3D.DEFAULT_UP.clone();const e=new Vector3,n=new Euler,i=new Quaternion,r=new Vector3(1,1,1);function a(){i.setFromEuler(n,!1)}function l(){n.setFromQuaternion(i,void 0,!1)}n._onChange(a),i._onChange(l),Object.defineProperties(this,{position:{configurable:!0,enumerable:!0,value:e},rotation:{configurable:!0,enumerable:!0,value:n},quaternion:{configurable:!0,enumerable:!0,value:i},scale:{configurable:!0,enumerable:!0,value:r},modelViewMatrix:{value:new Matrix4},normalMatrix:{value:new Matrix3}}),this.matrix=new Matrix4,this.matrixWorld=new Matrix4,this.matrixAutoUpdate=Object3D.DEFAULT_MATRIX_AUTO_UPDATE,this.matrixWorldNeedsUpdate=!1,this.matrixWorldAutoUpdate=Object3D.DEFAULT_MATRIX_WORLD_AUTO_UPDATE,this.layers=new Layers,this.visible=!0,this.castShadow=!1,this.receiveShadow=!1,this.frustumCulled=!0,this.renderOrder=0,this.animations=[],this.userData={}}onBeforeRender(){}onAfterRender(){}applyMatrix4(e){this.matrixAutoUpdate&&this.updateMatrix(),this.matrix.premultiply(e),this.matrix.decompose(this.position,this.quaternion,this.scale)}applyQuaternion(e){return this.quaternion.premultiply(e),this}setRotationFromAxisAngle(e,n){this.quaternion.setFromAxisAngle(e,n)}setRotationFromEuler(e){this.quaternion.setFromEuler(e,!0)}setRotationFromMatrix(e){this.quaternion.setFromRotationMatrix(e)}setRotationFromQuaternion(e){this.quaternion.copy(e)}rotateOnAxis(e,n){return _q1.setFromAxisAngle(e,n),this.quaternion.multiply(_q1),this}rotateOnWorldAxis(e,n){return _q1.setFromAxisAngle(e,n),this.quaternion.premultiply(_q1),this}rotateX(e){return this.rotateOnAxis(_xAxis,e)}rotateY(e){return this.rotateOnAxis(_yAxis,e)}rotateZ(e){return this.rotateOnAxis(_zAxis,e)}translateOnAxis(e,n){return _v1$4.copy(e).applyQuaternion(this.quaternion),this.position.add(_v1$4.multiplyScalar(n)),this}translateX(e){return this.translateOnAxis(_xAxis,e)}translateY(e){return this.translateOnAxis(_yAxis,e)}translateZ(e){return this.translateOnAxis(_zAxis,e)}localToWorld(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(this.matrixWorld)}worldToLocal(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(_m1$1.copy(this.matrixWorld).invert())}lookAt(e,n,i){e.isVector3?_target.copy(e):_target.set(e,n,i);const r=this.parent;this.updateWorldMatrix(!0,!1),_position$3.setFromMatrixPosition(this.matrixWorld),this.isCamera||this.isLight?_m1$1.lookAt(_position$3,_target,this.up):_m1$1.lookAt(_target,_position$3,this.up),this.quaternion.setFromRotationMatrix(_m1$1),r&&(_m1$1.extractRotation(r.matrixWorld),_q1.setFromRotationMatrix(_m1$1),this.quaternion.premultiply(_q1.invert()))}add(e){if(arguments.length>1){for(let n=0;n<arguments.length;n++)this.add(arguments[n]);return this}return e===this?(console.error("THREE.Object3D.add: object can't be added as a child of itself.",e),this):(e&&e.isObject3D?(e.parent!==null&&e.parent.remove(e),e.parent=this,this.children.push(e),e.dispatchEvent(_addedEvent)):console.error("THREE.Object3D.add: object not an instance of THREE.Object3D.",e),this)}remove(e){if(arguments.length>1){for(let i=0;i<arguments.length;i++)this.remove(arguments[i]);return this}const n=this.children.indexOf(e);return n!==-1&&(e.parent=null,this.children.splice(n,1),e.dispatchEvent(_removedEvent)),this}removeFromParent(){const e=this.parent;return e!==null&&e.remove(this),this}clear(){for(let e=0;e<this.children.length;e++){const n=this.children[e];n.parent=null,n.dispatchEvent(_removedEvent)}return this.children.length=0,this}attach(e){return this.updateWorldMatrix(!0,!1),_m1$1.copy(this.matrixWorld).invert(),e.parent!==null&&(e.parent.updateWorldMatrix(!0,!1),_m1$1.multiply(e.parent.matrixWorld)),e.applyMatrix4(_m1$1),this.add(e),e.updateWorldMatrix(!1,!0),this}getObjectById(e){return this.getObjectByProperty("id",e)}getObjectByName(e){return this.getObjectByProperty("name",e)}getObjectByProperty(e,n){if(this[e]===n)return this;for(let i=0,r=this.children.length;i<r;i++){const l=this.children[i].getObjectByProperty(e,n);if(l!==void 0)return l}}getObjectsByProperty(e,n){let i=[];this[e]===n&&i.push(this);for(let r=0,a=this.children.length;r<a;r++){const l=this.children[r].getObjectsByProperty(e,n);l.length>0&&(i=i.concat(l))}return i}getWorldPosition(e){return this.updateWorldMatrix(!0,!1),e.setFromMatrixPosition(this.matrixWorld)}getWorldQuaternion(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(_position$3,e,_scale$2),e}getWorldScale(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(_position$3,_quaternion$2,e),e}getWorldDirection(e){this.updateWorldMatrix(!0,!1);const n=this.matrixWorld.elements;return e.set(n[8],n[9],n[10]).normalize()}raycast(){}traverse(e){e(this);const n=this.children;for(let i=0,r=n.length;i<r;i++)n[i].traverse(e)}traverseVisible(e){if(this.visible===!1)return;e(this);const n=this.children;for(let i=0,r=n.length;i<r;i++)n[i].traverseVisible(e)}traverseAncestors(e){const n=this.parent;n!==null&&(e(n),n.traverseAncestors(e))}updateMatrix(){this.matrix.compose(this.position,this.quaternion,this.scale),this.matrixWorldNeedsUpdate=!0}updateMatrixWorld(e){this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||e)&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix),this.matrixWorldNeedsUpdate=!1,e=!0);const n=this.children;for(let i=0,r=n.length;i<r;i++){const a=n[i];(a.matrixWorldAutoUpdate===!0||e===!0)&&a.updateMatrixWorld(e)}}updateWorldMatrix(e,n){const i=this.parent;if(e===!0&&i!==null&&i.matrixWorldAutoUpdate===!0&&i.updateWorldMatrix(!0,!1),this.matrixAutoUpdate&&this.updateMatrix(),this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix),n===!0){const r=this.children;for(let a=0,l=r.length;a<l;a++){const o=r[a];o.matrixWorldAutoUpdate===!0&&o.updateWorldMatrix(!1,!0)}}}toJSON(e){const n=e===void 0||typeof e=="string",i={};n&&(e={geometries:{},materials:{},textures:{},images:{},shapes:{},skeletons:{},animations:{},nodes:{}},i.metadata={version:4.5,type:"Object",generator:"Object3D.toJSON"});const r={};r.uuid=this.uuid,r.type=this.type,this.name!==""&&(r.name=this.name),this.castShadow===!0&&(r.castShadow=!0),this.receiveShadow===!0&&(r.receiveShadow=!0),this.visible===!1&&(r.visible=!1),this.frustumCulled===!1&&(r.frustumCulled=!1),this.renderOrder!==0&&(r.renderOrder=this.renderOrder),Object.keys(this.userData).length>0&&(r.userData=this.userData),r.layers=this.layers.mask,r.matrix=this.matrix.toArray(),this.matrixAutoUpdate===!1&&(r.matrixAutoUpdate=!1),this.isInstancedMesh&&(r.type="InstancedMesh",r.count=this.count,r.instanceMatrix=this.instanceMatrix.toJSON(),this.instanceColor!==null&&(r.instanceColor=this.instanceColor.toJSON()));function a(o,c){return o[c.uuid]===void 0&&(o[c.uuid]=c.toJSON(e)),c.uuid}if(this.isScene)this.background&&(this.background.isColor?r.background=this.background.toJSON():this.background.isTexture&&(r.background=this.background.toJSON(e).uuid)),this.environment&&this.environment.isTexture&&this.environment.isRenderTargetTexture!==!0&&(r.environment=this.environment.toJSON(e).uuid);else if(this.isMesh||this.isLine||this.isPoints){r.geometry=a(e.geometries,this.geometry);const o=this.geometry.parameters;if(o!==void 0&&o.shapes!==void 0){const c=o.shapes;if(Array.isArray(c))for(let u=0,d=c.length;u<d;u++){const f=c[u];a(e.shapes,f)}else a(e.shapes,c)}}if(this.isSkinnedMesh&&(r.bindMode=this.bindMode,r.bindMatrix=this.bindMatrix.toArray(),this.skeleton!==void 0&&(a(e.skeletons,this.skeleton),r.skeleton=this.skeleton.uuid)),this.material!==void 0)if(Array.isArray(this.material)){const o=[];for(let c=0,u=this.material.length;c<u;c++)o.push(a(e.materials,this.material[c]));r.material=o}else r.material=a(e.materials,this.material);if(this.children.length>0){r.children=[];for(let o=0;o<this.children.length;o++)r.children.push(this.children[o].toJSON(e).object)}if(this.animations.length>0){r.animations=[];for(let o=0;o<this.animations.length;o++){const c=this.animations[o];r.animations.push(a(e.animations,c))}}if(n){const o=l(e.geometries),c=l(e.materials),u=l(e.textures),d=l(e.images),f=l(e.shapes),h=l(e.skeletons),_=l(e.animations),v=l(e.nodes);o.length>0&&(i.geometries=o),c.length>0&&(i.materials=c),u.length>0&&(i.textures=u),d.length>0&&(i.images=d),f.length>0&&(i.shapes=f),h.length>0&&(i.skeletons=h),_.length>0&&(i.animations=_),v.length>0&&(i.nodes=v)}return i.object=r,i;function l(o){const c=[];for(const u in o){const d=o[u];delete d.metadata,c.push(d)}return c}}clone(e){return new this.constructor().copy(this,e)}copy(e,n=!0){if(this.name=e.name,this.up.copy(e.up),this.position.copy(e.position),this.rotation.order=e.rotation.order,this.quaternion.copy(e.quaternion),this.scale.copy(e.scale),this.matrix.copy(e.matrix),this.matrixWorld.copy(e.matrixWorld),this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrixWorldNeedsUpdate=e.matrixWorldNeedsUpdate,this.matrixWorldAutoUpdate=e.matrixWorldAutoUpdate,this.layers.mask=e.layers.mask,this.visible=e.visible,this.castShadow=e.castShadow,this.receiveShadow=e.receiveShadow,this.frustumCulled=e.frustumCulled,this.renderOrder=e.renderOrder,this.userData=JSON.parse(JSON.stringify(e.userData)),n===!0)for(let i=0;i<e.children.length;i++){const r=e.children[i];this.add(r.clone())}return this}}Object3D.DEFAULT_UP=new Vector3(0,1,0);Object3D.DEFAULT_MATRIX_AUTO_UPDATE=!0;Object3D.DEFAULT_MATRIX_WORLD_AUTO_UPDATE=!0;const _v0$1=new Vector3,_v1$3=new Vector3,_v2$2=new Vector3,_v3$1=new Vector3,_vab=new Vector3,_vac=new Vector3,_vbc=new Vector3,_vap=new Vector3,_vbp=new Vector3,_vcp=new Vector3;class Triangle{constructor(e=new Vector3,n=new Vector3,i=new Vector3){this.a=e,this.b=n,this.c=i}static getNormal(e,n,i,r){r.subVectors(i,n),_v0$1.subVectors(e,n),r.cross(_v0$1);const a=r.lengthSq();return a>0?r.multiplyScalar(1/Math.sqrt(a)):r.set(0,0,0)}static getBarycoord(e,n,i,r,a){_v0$1.subVectors(r,n),_v1$3.subVectors(i,n),_v2$2.subVectors(e,n);const l=_v0$1.dot(_v0$1),o=_v0$1.dot(_v1$3),c=_v0$1.dot(_v2$2),u=_v1$3.dot(_v1$3),d=_v1$3.dot(_v2$2),f=l*u-o*o;if(f===0)return a.set(-2,-1,-1);const h=1/f,_=(u*c-o*d)*h,v=(l*d-o*c)*h;return a.set(1-_-v,v,_)}static containsPoint(e,n,i,r){return this.getBarycoord(e,n,i,r,_v3$1),_v3$1.x>=0&&_v3$1.y>=0&&_v3$1.x+_v3$1.y<=1}static getUV(e,n,i,r,a,l,o,c){return this.getBarycoord(e,n,i,r,_v3$1),c.set(0,0),c.addScaledVector(a,_v3$1.x),c.addScaledVector(l,_v3$1.y),c.addScaledVector(o,_v3$1.z),c}static isFrontFacing(e,n,i,r){return _v0$1.subVectors(i,n),_v1$3.subVectors(e,n),_v0$1.cross(_v1$3).dot(r)<0}set(e,n,i){return this.a.copy(e),this.b.copy(n),this.c.copy(i),this}setFromPointsAndIndices(e,n,i,r){return this.a.copy(e[n]),this.b.copy(e[i]),this.c.copy(e[r]),this}setFromAttributeAndIndices(e,n,i,r){return this.a.fromBufferAttribute(e,n),this.b.fromBufferAttribute(e,i),this.c.fromBufferAttribute(e,r),this}clone(){return new this.constructor().copy(this)}copy(e){return this.a.copy(e.a),this.b.copy(e.b),this.c.copy(e.c),this}getArea(){return _v0$1.subVectors(this.c,this.b),_v1$3.subVectors(this.a,this.b),_v0$1.cross(_v1$3).length()*.5}getMidpoint(e){return e.addVectors(this.a,this.b).add(this.c).multiplyScalar(1/3)}getNormal(e){return Triangle.getNormal(this.a,this.b,this.c,e)}getPlane(e){return e.setFromCoplanarPoints(this.a,this.b,this.c)}getBarycoord(e,n){return Triangle.getBarycoord(e,this.a,this.b,this.c,n)}getUV(e,n,i,r,a){return Triangle.getUV(e,this.a,this.b,this.c,n,i,r,a)}containsPoint(e){return Triangle.containsPoint(e,this.a,this.b,this.c)}isFrontFacing(e){return Triangle.isFrontFacing(this.a,this.b,this.c,e)}intersectsBox(e){return e.intersectsTriangle(this)}closestPointToPoint(e,n){const i=this.a,r=this.b,a=this.c;let l,o;_vab.subVectors(r,i),_vac.subVectors(a,i),_vap.subVectors(e,i);const c=_vab.dot(_vap),u=_vac.dot(_vap);if(c<=0&&u<=0)return n.copy(i);_vbp.subVectors(e,r);const d=_vab.dot(_vbp),f=_vac.dot(_vbp);if(d>=0&&f<=d)return n.copy(r);const h=c*f-d*u;if(h<=0&&c>=0&&d<=0)return l=c/(c-d),n.copy(i).addScaledVector(_vab,l);_vcp.subVectors(e,a);const _=_vab.dot(_vcp),v=_vac.dot(_vcp);if(v>=0&&_<=v)return n.copy(a);const m=_*u-c*v;if(m<=0&&u>=0&&v<=0)return o=u/(u-v),n.copy(i).addScaledVector(_vac,o);const p=d*v-_*f;if(p<=0&&f-d>=0&&_-v>=0)return _vbc.subVectors(a,r),o=(f-d)/(f-d+(_-v)),n.copy(r).addScaledVector(_vbc,o);const y=1/(p+m+h);return l=m*y,o=h*y,n.copy(i).addScaledVector(_vab,l).addScaledVector(_vac,o)}equals(e){return e.a.equals(this.a)&&e.b.equals(this.b)&&e.c.equals(this.c)}}let materialId=0;class Material extends EventDispatcher{constructor(){super(),this.isMaterial=!0,Object.defineProperty(this,"id",{value:materialId++}),this.uuid=generateUUID(),this.name="",this.type="Material",this.blending=NormalBlending,this.side=FrontSide,this.vertexColors=!1,this.opacity=1,this.transparent=!1,this.blendSrc=SrcAlphaFactor,this.blendDst=OneMinusSrcAlphaFactor,this.blendEquation=AddEquation,this.blendSrcAlpha=null,this.blendDstAlpha=null,this.blendEquationAlpha=null,this.depthFunc=LessEqualDepth,this.depthTest=!0,this.depthWrite=!0,this.stencilWriteMask=255,this.stencilFunc=AlwaysStencilFunc,this.stencilRef=0,this.stencilFuncMask=255,this.stencilFail=KeepStencilOp,this.stencilZFail=KeepStencilOp,this.stencilZPass=KeepStencilOp,this.stencilWrite=!1,this.clippingPlanes=null,this.clipIntersection=!1,this.clipShadows=!1,this.shadowSide=null,this.colorWrite=!0,this.precision=null,this.polygonOffset=!1,this.polygonOffsetFactor=0,this.polygonOffsetUnits=0,this.dithering=!1,this.alphaToCoverage=!1,this.premultipliedAlpha=!1,this.forceSinglePass=!1,this.visible=!0,this.toneMapped=!0,this.userData={},this.version=0,this._alphaTest=0}get alphaTest(){return this._alphaTest}set alphaTest(e){this._alphaTest>0!=e>0&&this.version++,this._alphaTest=e}onBuild(){}onBeforeRender(){}onBeforeCompile(){}customProgramCacheKey(){return this.onBeforeCompile.toString()}setValues(e){if(e!==void 0)for(const n in e){const i=e[n];if(i===void 0){console.warn("THREE.Material: '"+n+"' parameter is undefined.");continue}const r=this[n];if(r===void 0){console.warn("THREE."+this.type+": '"+n+"' is not a property of this material.");continue}r&&r.isColor?r.set(i):r&&r.isVector3&&i&&i.isVector3?r.copy(i):this[n]=i}}toJSON(e){const n=e===void 0||typeof e=="string";n&&(e={textures:{},images:{}});const i={metadata:{version:4.5,type:"Material",generator:"Material.toJSON"}};i.uuid=this.uuid,i.type=this.type,this.name!==""&&(i.name=this.name),this.color&&this.color.isColor&&(i.color=this.color.getHex()),this.roughness!==void 0&&(i.roughness=this.roughness),this.metalness!==void 0&&(i.metalness=this.metalness),this.sheen!==void 0&&(i.sheen=this.sheen),this.sheenColor&&this.sheenColor.isColor&&(i.sheenColor=this.sheenColor.getHex()),this.sheenRoughness!==void 0&&(i.sheenRoughness=this.sheenRoughness),this.emissive&&this.emissive.isColor&&(i.emissive=this.emissive.getHex()),this.emissiveIntensity&&this.emissiveIntensity!==1&&(i.emissiveIntensity=this.emissiveIntensity),this.specular&&this.specular.isColor&&(i.specular=this.specular.getHex()),this.specularIntensity!==void 0&&(i.specularIntensity=this.specularIntensity),this.specularColor&&this.specularColor.isColor&&(i.specularColor=this.specularColor.getHex()),this.shininess!==void 0&&(i.shininess=this.shininess),this.clearcoat!==void 0&&(i.clearcoat=this.clearcoat),this.clearcoatRoughness!==void 0&&(i.clearcoatRoughness=this.clearcoatRoughness),this.clearcoatMap&&this.clearcoatMap.isTexture&&(i.clearcoatMap=this.clearcoatMap.toJSON(e).uuid),this.clearcoatRoughnessMap&&this.clearcoatRoughnessMap.isTexture&&(i.clearcoatRoughnessMap=this.clearcoatRoughnessMap.toJSON(e).uuid),this.clearcoatNormalMap&&this.clearcoatNormalMap.isTexture&&(i.clearcoatNormalMap=this.clearcoatNormalMap.toJSON(e).uuid,i.clearcoatNormalScale=this.clearcoatNormalScale.toArray()),this.iridescence!==void 0&&(i.iridescence=this.iridescence),this.iridescenceIOR!==void 0&&(i.iridescenceIOR=this.iridescenceIOR),this.iridescenceThicknessRange!==void 0&&(i.iridescenceThicknessRange=this.iridescenceThicknessRange),this.iridescenceMap&&this.iridescenceMap.isTexture&&(i.iridescenceMap=this.iridescenceMap.toJSON(e).uuid),this.iridescenceThicknessMap&&this.iridescenceThicknessMap.isTexture&&(i.iridescenceThicknessMap=this.iridescenceThicknessMap.toJSON(e).uuid),this.map&&this.map.isTexture&&(i.map=this.map.toJSON(e).uuid),this.matcap&&this.matcap.isTexture&&(i.matcap=this.matcap.toJSON(e).uuid),this.alphaMap&&this.alphaMap.isTexture&&(i.alphaMap=this.alphaMap.toJSON(e).uuid),this.lightMap&&this.lightMap.isTexture&&(i.lightMap=this.lightMap.toJSON(e).uuid,i.lightMapIntensity=this.lightMapIntensity),this.aoMap&&this.aoMap.isTexture&&(i.aoMap=this.aoMap.toJSON(e).uuid,i.aoMapIntensity=this.aoMapIntensity),this.bumpMap&&this.bumpMap.isTexture&&(i.bumpMap=this.bumpMap.toJSON(e).uuid,i.bumpScale=this.bumpScale),this.normalMap&&this.normalMap.isTexture&&(i.normalMap=this.normalMap.toJSON(e).uuid,i.normalMapType=this.normalMapType,i.normalScale=this.normalScale.toArray()),this.displacementMap&&this.displacementMap.isTexture&&(i.displacementMap=this.displacementMap.toJSON(e).uuid,i.displacementScale=this.displacementScale,i.displacementBias=this.displacementBias),this.roughnessMap&&this.roughnessMap.isTexture&&(i.roughnessMap=this.roughnessMap.toJSON(e).uuid),this.metalnessMap&&this.metalnessMap.isTexture&&(i.metalnessMap=this.metalnessMap.toJSON(e).uuid),this.emissiveMap&&this.emissiveMap.isTexture&&(i.emissiveMap=this.emissiveMap.toJSON(e).uuid),this.specularMap&&this.specularMap.isTexture&&(i.specularMap=this.specularMap.toJSON(e).uuid),this.specularIntensityMap&&this.specularIntensityMap.isTexture&&(i.specularIntensityMap=this.specularIntensityMap.toJSON(e).uuid),this.specularColorMap&&this.specularColorMap.isTexture&&(i.specularColorMap=this.specularColorMap.toJSON(e).uuid),this.envMap&&this.envMap.isTexture&&(i.envMap=this.envMap.toJSON(e).uuid,this.combine!==void 0&&(i.combine=this.combine)),this.envMapIntensity!==void 0&&(i.envMapIntensity=this.envMapIntensity),this.reflectivity!==void 0&&(i.reflectivity=this.reflectivity),this.refractionRatio!==void 0&&(i.refractionRatio=this.refractionRatio),this.gradientMap&&this.gradientMap.isTexture&&(i.gradientMap=this.gradientMap.toJSON(e).uuid),this.transmission!==void 0&&(i.transmission=this.transmission),this.transmissionMap&&this.transmissionMap.isTexture&&(i.transmissionMap=this.transmissionMap.toJSON(e).uuid),this.thickness!==void 0&&(i.thickness=this.thickness),this.thicknessMap&&this.thicknessMap.isTexture&&(i.thicknessMap=this.thicknessMap.toJSON(e).uuid),this.attenuationDistance!==void 0&&this.attenuationDistance!==1/0&&(i.attenuationDistance=this.attenuationDistance),this.attenuationColor!==void 0&&(i.attenuationColor=this.attenuationColor.getHex()),this.size!==void 0&&(i.size=this.size),this.shadowSide!==null&&(i.shadowSide=this.shadowSide),this.sizeAttenuation!==void 0&&(i.sizeAttenuation=this.sizeAttenuation),this.blending!==NormalBlending&&(i.blending=this.blending),this.side!==FrontSide&&(i.side=this.side),this.vertexColors&&(i.vertexColors=!0),this.opacity<1&&(i.opacity=this.opacity),this.transparent===!0&&(i.transparent=this.transparent),i.depthFunc=this.depthFunc,i.depthTest=this.depthTest,i.depthWrite=this.depthWrite,i.colorWrite=this.colorWrite,i.stencilWrite=this.stencilWrite,i.stencilWriteMask=this.stencilWriteMask,i.stencilFunc=this.stencilFunc,i.stencilRef=this.stencilRef,i.stencilFuncMask=this.stencilFuncMask,i.stencilFail=this.stencilFail,i.stencilZFail=this.stencilZFail,i.stencilZPass=this.stencilZPass,this.rotation!==void 0&&this.rotation!==0&&(i.rotation=this.rotation),this.polygonOffset===!0&&(i.polygonOffset=!0),this.polygonOffsetFactor!==0&&(i.polygonOffsetFactor=this.polygonOffsetFactor),this.polygonOffsetUnits!==0&&(i.polygonOffsetUnits=this.polygonOffsetUnits),this.linewidth!==void 0&&this.linewidth!==1&&(i.linewidth=this.linewidth),this.dashSize!==void 0&&(i.dashSize=this.dashSize),this.gapSize!==void 0&&(i.gapSize=this.gapSize),this.scale!==void 0&&(i.scale=this.scale),this.dithering===!0&&(i.dithering=!0),this.alphaTest>0&&(i.alphaTest=this.alphaTest),this.alphaToCoverage===!0&&(i.alphaToCoverage=this.alphaToCoverage),this.premultipliedAlpha===!0&&(i.premultipliedAlpha=this.premultipliedAlpha),this.forceSinglePass===!0&&(i.forceSinglePass=this.forceSinglePass),this.wireframe===!0&&(i.wireframe=this.wireframe),this.wireframeLinewidth>1&&(i.wireframeLinewidth=this.wireframeLinewidth),this.wireframeLinecap!=="round"&&(i.wireframeLinecap=this.wireframeLinecap),this.wireframeLinejoin!=="round"&&(i.wireframeLinejoin=this.wireframeLinejoin),this.flatShading===!0&&(i.flatShading=this.flatShading),this.visible===!1&&(i.visible=!1),this.toneMapped===!1&&(i.toneMapped=!1),this.fog===!1&&(i.fog=!1),Object.keys(this.userData).length>0&&(i.userData=this.userData);function r(a){const l=[];for(const o in a){const c=a[o];delete c.metadata,l.push(c)}return l}if(n){const a=r(e.textures),l=r(e.images);a.length>0&&(i.textures=a),l.length>0&&(i.images=l)}return i}clone(){return new this.constructor().copy(this)}copy(e){this.name=e.name,this.blending=e.blending,this.side=e.side,this.vertexColors=e.vertexColors,this.opacity=e.opacity,this.transparent=e.transparent,this.blendSrc=e.blendSrc,this.blendDst=e.blendDst,this.blendEquation=e.blendEquation,this.blendSrcAlpha=e.blendSrcAlpha,this.blendDstAlpha=e.blendDstAlpha,this.blendEquationAlpha=e.blendEquationAlpha,this.depthFunc=e.depthFunc,this.depthTest=e.depthTest,this.depthWrite=e.depthWrite,this.stencilWriteMask=e.stencilWriteMask,this.stencilFunc=e.stencilFunc,this.stencilRef=e.stencilRef,this.stencilFuncMask=e.stencilFuncMask,this.stencilFail=e.stencilFail,this.stencilZFail=e.stencilZFail,this.stencilZPass=e.stencilZPass,this.stencilWrite=e.stencilWrite;const n=e.clippingPlanes;let i=null;if(n!==null){const r=n.length;i=new Array(r);for(let a=0;a!==r;++a)i[a]=n[a].clone()}return this.clippingPlanes=i,this.clipIntersection=e.clipIntersection,this.clipShadows=e.clipShadows,this.shadowSide=e.shadowSide,this.colorWrite=e.colorWrite,this.precision=e.precision,this.polygonOffset=e.polygonOffset,this.polygonOffsetFactor=e.polygonOffsetFactor,this.polygonOffsetUnits=e.polygonOffsetUnits,this.dithering=e.dithering,this.alphaTest=e.alphaTest,this.alphaToCoverage=e.alphaToCoverage,this.premultipliedAlpha=e.premultipliedAlpha,this.forceSinglePass=e.forceSinglePass,this.visible=e.visible,this.toneMapped=e.toneMapped,this.userData=JSON.parse(JSON.stringify(e.userData)),this}dispose(){this.dispatchEvent({type:"dispose"})}set needsUpdate(e){e===!0&&this.version++}}class MeshBasicMaterial extends Material{constructor(e){super(),this.isMeshBasicMaterial=!0,this.type="MeshBasicMaterial",this.color=new Color$1(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.combine=MultiplyOperation,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.specularMap=e.specularMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.combine=e.combine,this.reflectivity=e.reflectivity,this.refractionRatio=e.refractionRatio,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.fog=e.fog,this}}const _vector$9=new Vector3,_vector2$1=new Vector2;class BufferAttribute{constructor(e,n,i=!1){if(Array.isArray(e))throw new TypeError("THREE.BufferAttribute: array should be a Typed Array.");this.isBufferAttribute=!0,this.name="",this.array=e,this.itemSize=n,this.count=e!==void 0?e.length/n:0,this.normalized=i,this.usage=StaticDrawUsage,this.updateRange={offset:0,count:-1},this.version=0}onUploadCallback(){}set needsUpdate(e){e===!0&&this.version++}setUsage(e){return this.usage=e,this}copy(e){return this.name=e.name,this.array=new e.array.constructor(e.array),this.itemSize=e.itemSize,this.count=e.count,this.normalized=e.normalized,this.usage=e.usage,this}copyAt(e,n,i){e*=this.itemSize,i*=n.itemSize;for(let r=0,a=this.itemSize;r<a;r++)this.array[e+r]=n.array[i+r];return this}copyArray(e){return this.array.set(e),this}applyMatrix3(e){if(this.itemSize===2)for(let n=0,i=this.count;n<i;n++)_vector2$1.fromBufferAttribute(this,n),_vector2$1.applyMatrix3(e),this.setXY(n,_vector2$1.x,_vector2$1.y);else if(this.itemSize===3)for(let n=0,i=this.count;n<i;n++)_vector$9.fromBufferAttribute(this,n),_vector$9.applyMatrix3(e),this.setXYZ(n,_vector$9.x,_vector$9.y,_vector$9.z);return this}applyMatrix4(e){for(let n=0,i=this.count;n<i;n++)_vector$9.fromBufferAttribute(this,n),_vector$9.applyMatrix4(e),this.setXYZ(n,_vector$9.x,_vector$9.y,_vector$9.z);return this}applyNormalMatrix(e){for(let n=0,i=this.count;n<i;n++)_vector$9.fromBufferAttribute(this,n),_vector$9.applyNormalMatrix(e),this.setXYZ(n,_vector$9.x,_vector$9.y,_vector$9.z);return this}transformDirection(e){for(let n=0,i=this.count;n<i;n++)_vector$9.fromBufferAttribute(this,n),_vector$9.transformDirection(e),this.setXYZ(n,_vector$9.x,_vector$9.y,_vector$9.z);return this}set(e,n=0){return this.array.set(e,n),this}getX(e){let n=this.array[e*this.itemSize];return this.normalized&&(n=denormalize(n,this.array)),n}setX(e,n){return this.normalized&&(n=normalize(n,this.array)),this.array[e*this.itemSize]=n,this}getY(e){let n=this.array[e*this.itemSize+1];return this.normalized&&(n=denormalize(n,this.array)),n}setY(e,n){return this.normalized&&(n=normalize(n,this.array)),this.array[e*this.itemSize+1]=n,this}getZ(e){let n=this.array[e*this.itemSize+2];return this.normalized&&(n=denormalize(n,this.array)),n}setZ(e,n){return this.normalized&&(n=normalize(n,this.array)),this.array[e*this.itemSize+2]=n,this}getW(e){let n=this.array[e*this.itemSize+3];return this.normalized&&(n=denormalize(n,this.array)),n}setW(e,n){return this.normalized&&(n=normalize(n,this.array)),this.array[e*this.itemSize+3]=n,this}setXY(e,n,i){return e*=this.itemSize,this.normalized&&(n=normalize(n,this.array),i=normalize(i,this.array)),this.array[e+0]=n,this.array[e+1]=i,this}setXYZ(e,n,i,r){return e*=this.itemSize,this.normalized&&(n=normalize(n,this.array),i=normalize(i,this.array),r=normalize(r,this.array)),this.array[e+0]=n,this.array[e+1]=i,this.array[e+2]=r,this}setXYZW(e,n,i,r,a){return e*=this.itemSize,this.normalized&&(n=normalize(n,this.array),i=normalize(i,this.array),r=normalize(r,this.array),a=normalize(a,this.array)),this.array[e+0]=n,this.array[e+1]=i,this.array[e+2]=r,this.array[e+3]=a,this}onUpload(e){return this.onUploadCallback=e,this}clone(){return new this.constructor(this.array,this.itemSize).copy(this)}toJSON(){const e={itemSize:this.itemSize,type:this.array.constructor.name,array:Array.from(this.array),normalized:this.normalized};return this.name!==""&&(e.name=this.name),this.usage!==StaticDrawUsage&&(e.usage=this.usage),(this.updateRange.offset!==0||this.updateRange.count!==-1)&&(e.updateRange=this.updateRange),e}copyColorsArray(){console.error("THREE.BufferAttribute: copyColorsArray() was removed in r144.")}copyVector2sArray(){console.error("THREE.BufferAttribute: copyVector2sArray() was removed in r144.")}copyVector3sArray(){console.error("THREE.BufferAttribute: copyVector3sArray() was removed in r144.")}copyVector4sArray(){console.error("THREE.BufferAttribute: copyVector4sArray() was removed in r144.")}}class Uint16BufferAttribute extends BufferAttribute{constructor(e,n,i){super(new Uint16Array(e),n,i)}}class Uint32BufferAttribute extends BufferAttribute{constructor(e,n,i){super(new Uint32Array(e),n,i)}}class Float32BufferAttribute extends BufferAttribute{constructor(e,n,i){super(new Float32Array(e),n,i)}}let _id$1=0;const _m1=new Matrix4,_obj=new Object3D,_offset=new Vector3,_box$1=new Box3,_boxMorphTargets=new Box3,_vector$8=new Vector3;class BufferGeometry extends EventDispatcher{constructor(){super(),this.isBufferGeometry=!0,Object.defineProperty(this,"id",{value:_id$1++}),this.uuid=generateUUID(),this.name="",this.type="BufferGeometry",this.index=null,this.attributes={},this.morphAttributes={},this.morphTargetsRelative=!1,this.groups=[],this.boundingBox=null,this.boundingSphere=null,this.drawRange={start:0,count:1/0},this.userData={}}getIndex(){return this.index}setIndex(e){return Array.isArray(e)?this.index=new(arrayNeedsUint32(e)?Uint32BufferAttribute:Uint16BufferAttribute)(e,1):this.index=e,this}getAttribute(e){return this.attributes[e]}setAttribute(e,n){return this.attributes[e]=n,this}deleteAttribute(e){return delete this.attributes[e],this}hasAttribute(e){return this.attributes[e]!==void 0}addGroup(e,n,i=0){this.groups.push({start:e,count:n,materialIndex:i})}clearGroups(){this.groups=[]}setDrawRange(e,n){this.drawRange.start=e,this.drawRange.count=n}applyMatrix4(e){const n=this.attributes.position;n!==void 0&&(n.applyMatrix4(e),n.needsUpdate=!0);const i=this.attributes.normal;if(i!==void 0){const a=new Matrix3().getNormalMatrix(e);i.applyNormalMatrix(a),i.needsUpdate=!0}const r=this.attributes.tangent;return r!==void 0&&(r.transformDirection(e),r.needsUpdate=!0),this.boundingBox!==null&&this.computeBoundingBox(),this.boundingSphere!==null&&this.computeBoundingSphere(),this}applyQuaternion(e){return _m1.makeRotationFromQuaternion(e),this.applyMatrix4(_m1),this}rotateX(e){return _m1.makeRotationX(e),this.applyMatrix4(_m1),this}rotateY(e){return _m1.makeRotationY(e),this.applyMatrix4(_m1),this}rotateZ(e){return _m1.makeRotationZ(e),this.applyMatrix4(_m1),this}translate(e,n,i){return _m1.makeTranslation(e,n,i),this.applyMatrix4(_m1),this}scale(e,n,i){return _m1.makeScale(e,n,i),this.applyMatrix4(_m1),this}lookAt(e){return _obj.lookAt(e),_obj.updateMatrix(),this.applyMatrix4(_obj.matrix),this}center(){return this.computeBoundingBox(),this.boundingBox.getCenter(_offset).negate(),this.translate(_offset.x,_offset.y,_offset.z),this}setFromPoints(e){const n=[];for(let i=0,r=e.length;i<r;i++){const a=e[i];n.push(a.x,a.y,a.z||0)}return this.setAttribute("position",new Float32BufferAttribute(n,3)),this}computeBoundingBox(){this.boundingBox===null&&(this.boundingBox=new Box3);const e=this.attributes.position,n=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){console.error('THREE.BufferGeometry.computeBoundingBox(): GLBufferAttribute requires a manual bounding box. Alternatively set "mesh.frustumCulled" to "false".',this),this.boundingBox.set(new Vector3(-1/0,-1/0,-1/0),new Vector3(1/0,1/0,1/0));return}if(e!==void 0){if(this.boundingBox.setFromBufferAttribute(e),n)for(let i=0,r=n.length;i<r;i++){const a=n[i];_box$1.setFromBufferAttribute(a),this.morphTargetsRelative?(_vector$8.addVectors(this.boundingBox.min,_box$1.min),this.boundingBox.expandByPoint(_vector$8),_vector$8.addVectors(this.boundingBox.max,_box$1.max),this.boundingBox.expandByPoint(_vector$8)):(this.boundingBox.expandByPoint(_box$1.min),this.boundingBox.expandByPoint(_box$1.max))}}else this.boundingBox.makeEmpty();(isNaN(this.boundingBox.min.x)||isNaN(this.boundingBox.min.y)||isNaN(this.boundingBox.min.z))&&console.error('THREE.BufferGeometry.computeBoundingBox(): Computed min/max have NaN values. The "position" attribute is likely to have NaN values.',this)}computeBoundingSphere(){this.boundingSphere===null&&(this.boundingSphere=new Sphere);const e=this.attributes.position,n=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){console.error('THREE.BufferGeometry.computeBoundingSphere(): GLBufferAttribute requires a manual bounding sphere. Alternatively set "mesh.frustumCulled" to "false".',this),this.boundingSphere.set(new Vector3,1/0);return}if(e){const i=this.boundingSphere.center;if(_box$1.setFromBufferAttribute(e),n)for(let a=0,l=n.length;a<l;a++){const o=n[a];_boxMorphTargets.setFromBufferAttribute(o),this.morphTargetsRelative?(_vector$8.addVectors(_box$1.min,_boxMorphTargets.min),_box$1.expandByPoint(_vector$8),_vector$8.addVectors(_box$1.max,_boxMorphTargets.max),_box$1.expandByPoint(_vector$8)):(_box$1.expandByPoint(_boxMorphTargets.min),_box$1.expandByPoint(_boxMorphTargets.max))}_box$1.getCenter(i);let r=0;for(let a=0,l=e.count;a<l;a++)_vector$8.fromBufferAttribute(e,a),r=Math.max(r,i.distanceToSquared(_vector$8));if(n)for(let a=0,l=n.length;a<l;a++){const o=n[a],c=this.morphTargetsRelative;for(let u=0,d=o.count;u<d;u++)_vector$8.fromBufferAttribute(o,u),c&&(_offset.fromBufferAttribute(e,u),_vector$8.add(_offset)),r=Math.max(r,i.distanceToSquared(_vector$8))}this.boundingSphere.radius=Math.sqrt(r),isNaN(this.boundingSphere.radius)&&console.error('THREE.BufferGeometry.computeBoundingSphere(): Computed radius is NaN. The "position" attribute is likely to have NaN values.',this)}}computeTangents(){const e=this.index,n=this.attributes;if(e===null||n.position===void 0||n.normal===void 0||n.uv===void 0){console.error("THREE.BufferGeometry: .computeTangents() failed. Missing required attributes (index, position, normal or uv)");return}const i=e.array,r=n.position.array,a=n.normal.array,l=n.uv.array,o=r.length/3;this.hasAttribute("tangent")===!1&&this.setAttribute("tangent",new BufferAttribute(new Float32Array(4*o),4));const c=this.getAttribute("tangent").array,u=[],d=[];for(let U=0;U<o;U++)u[U]=new Vector3,d[U]=new Vector3;const f=new Vector3,h=new Vector3,_=new Vector3,v=new Vector2,m=new Vector2,p=new Vector2,y=new Vector3,C=new Vector3;function w(U,Y,Q){f.fromArray(r,U*3),h.fromArray(r,Y*3),_.fromArray(r,Q*3),v.fromArray(l,U*2),m.fromArray(l,Y*2),p.fromArray(l,Q*2),h.sub(f),_.sub(f),m.sub(v),p.sub(v);const O=1/(m.x*p.y-p.x*m.y);!isFinite(O)||(y.copy(h).multiplyScalar(p.y).addScaledVector(_,-m.y).multiplyScalar(O),C.copy(_).multiplyScalar(m.x).addScaledVector(h,-p.x).multiplyScalar(O),u[U].add(y),u[Y].add(y),u[Q].add(y),d[U].add(C),d[Y].add(C),d[Q].add(C))}let A=this.groups;A.length===0&&(A=[{start:0,count:i.length}]);for(let U=0,Y=A.length;U<Y;++U){const Q=A[U],O=Q.start,F=Q.count;for(let q=O,Z=O+F;q<Z;q+=3)w(i[q+0],i[q+1],i[q+2])}const M=new Vector3,P=new Vector3,N=new Vector3,b=new Vector3;function L(U){N.fromArray(a,U*3),b.copy(N);const Y=u[U];M.copy(Y),M.sub(N.multiplyScalar(N.dot(Y))).normalize(),P.crossVectors(b,Y);const O=P.dot(d[U])<0?-1:1;c[U*4]=M.x,c[U*4+1]=M.y,c[U*4+2]=M.z,c[U*4+3]=O}for(let U=0,Y=A.length;U<Y;++U){const Q=A[U],O=Q.start,F=Q.count;for(let q=O,Z=O+F;q<Z;q+=3)L(i[q+0]),L(i[q+1]),L(i[q+2])}}computeVertexNormals(){const e=this.index,n=this.getAttribute("position");if(n!==void 0){let i=this.getAttribute("normal");if(i===void 0)i=new BufferAttribute(new Float32Array(n.count*3),3),this.setAttribute("normal",i);else for(let h=0,_=i.count;h<_;h++)i.setXYZ(h,0,0,0);const r=new Vector3,a=new Vector3,l=new Vector3,o=new Vector3,c=new Vector3,u=new Vector3,d=new Vector3,f=new Vector3;if(e)for(let h=0,_=e.count;h<_;h+=3){const v=e.getX(h+0),m=e.getX(h+1),p=e.getX(h+2);r.fromBufferAttribute(n,v),a.fromBufferAttribute(n,m),l.fromBufferAttribute(n,p),d.subVectors(l,a),f.subVectors(r,a),d.cross(f),o.fromBufferAttribute(i,v),c.fromBufferAttribute(i,m),u.fromBufferAttribute(i,p),o.add(d),c.add(d),u.add(d),i.setXYZ(v,o.x,o.y,o.z),i.setXYZ(m,c.x,c.y,c.z),i.setXYZ(p,u.x,u.y,u.z)}else for(let h=0,_=n.count;h<_;h+=3)r.fromBufferAttribute(n,h+0),a.fromBufferAttribute(n,h+1),l.fromBufferAttribute(n,h+2),d.subVectors(l,a),f.subVectors(r,a),d.cross(f),i.setXYZ(h+0,d.x,d.y,d.z),i.setXYZ(h+1,d.x,d.y,d.z),i.setXYZ(h+2,d.x,d.y,d.z);this.normalizeNormals(),i.needsUpdate=!0}}merge(){return console.error("THREE.BufferGeometry.merge() has been removed. Use THREE.BufferGeometryUtils.mergeBufferGeometries() instead."),this}normalizeNormals(){const e=this.attributes.normal;for(let n=0,i=e.count;n<i;n++)_vector$8.fromBufferAttribute(e,n),_vector$8.normalize(),e.setXYZ(n,_vector$8.x,_vector$8.y,_vector$8.z)}toNonIndexed(){function e(o,c){const u=o.array,d=o.itemSize,f=o.normalized,h=new u.constructor(c.length*d);let _=0,v=0;for(let m=0,p=c.length;m<p;m++){o.isInterleavedBufferAttribute?_=c[m]*o.data.stride+o.offset:_=c[m]*d;for(let y=0;y<d;y++)h[v++]=u[_++]}return new BufferAttribute(h,d,f)}if(this.index===null)return console.warn("THREE.BufferGeometry.toNonIndexed(): BufferGeometry is already non-indexed."),this;const n=new BufferGeometry,i=this.index.array,r=this.attributes;for(const o in r){const c=r[o],u=e(c,i);n.setAttribute(o,u)}const a=this.morphAttributes;for(const o in a){const c=[],u=a[o];for(let d=0,f=u.length;d<f;d++){const h=u[d],_=e(h,i);c.push(_)}n.morphAttributes[o]=c}n.morphTargetsRelative=this.morphTargetsRelative;const l=this.groups;for(let o=0,c=l.length;o<c;o++){const u=l[o];n.addGroup(u.start,u.count,u.materialIndex)}return n}toJSON(){const e={metadata:{version:4.5,type:"BufferGeometry",generator:"BufferGeometry.toJSON"}};if(e.uuid=this.uuid,e.type=this.type,this.name!==""&&(e.name=this.name),Object.keys(this.userData).length>0&&(e.userData=this.userData),this.parameters!==void 0){const c=this.parameters;for(const u in c)c[u]!==void 0&&(e[u]=c[u]);return e}e.data={attributes:{}};const n=this.index;n!==null&&(e.data.index={type:n.array.constructor.name,array:Array.prototype.slice.call(n.array)});const i=this.attributes;for(const c in i){const u=i[c];e.data.attributes[c]=u.toJSON(e.data)}const r={};let a=!1;for(const c in this.morphAttributes){const u=this.morphAttributes[c],d=[];for(let f=0,h=u.length;f<h;f++){const _=u[f];d.push(_.toJSON(e.data))}d.length>0&&(r[c]=d,a=!0)}a&&(e.data.morphAttributes=r,e.data.morphTargetsRelative=this.morphTargetsRelative);const l=this.groups;l.length>0&&(e.data.groups=JSON.parse(JSON.stringify(l)));const o=this.boundingSphere;return o!==null&&(e.data.boundingSphere={center:o.center.toArray(),radius:o.radius}),e}clone(){return new this.constructor().copy(this)}copy(e){this.index=null,this.attributes={},this.morphAttributes={},this.groups=[],this.boundingBox=null,this.boundingSphere=null;const n={};this.name=e.name;const i=e.index;i!==null&&this.setIndex(i.clone(n));const r=e.attributes;for(const u in r){const d=r[u];this.setAttribute(u,d.clone(n))}const a=e.morphAttributes;for(const u in a){const d=[],f=a[u];for(let h=0,_=f.length;h<_;h++)d.push(f[h].clone(n));this.morphAttributes[u]=d}this.morphTargetsRelative=e.morphTargetsRelative;const l=e.groups;for(let u=0,d=l.length;u<d;u++){const f=l[u];this.addGroup(f.start,f.count,f.materialIndex)}const o=e.boundingBox;o!==null&&(this.boundingBox=o.clone());const c=e.boundingSphere;return c!==null&&(this.boundingSphere=c.clone()),this.drawRange.start=e.drawRange.start,this.drawRange.count=e.drawRange.count,this.userData=e.userData,e.parameters!==void 0&&(this.parameters=Object.assign({},e.parameters)),this}dispose(){this.dispatchEvent({type:"dispose"})}}const _inverseMatrix$2=new Matrix4,_ray$2=new Ray,_sphere$3=new Sphere,_vA$1=new Vector3,_vB$1=new Vector3,_vC$1=new Vector3,_tempA=new Vector3,_morphA=new Vector3,_uvA$1=new Vector2,_uvB$1=new Vector2,_uvC$1=new Vector2,_intersectionPoint=new Vector3,_intersectionPointWorld=new Vector3;class Mesh extends Object3D{constructor(e=new BufferGeometry,n=new MeshBasicMaterial){super(),this.isMesh=!0,this.type="Mesh",this.geometry=e,this.material=n,this.updateMorphTargets()}copy(e,n){return super.copy(e,n),e.morphTargetInfluences!==void 0&&(this.morphTargetInfluences=e.morphTargetInfluences.slice()),e.morphTargetDictionary!==void 0&&(this.morphTargetDictionary=Object.assign({},e.morphTargetDictionary)),this.material=e.material,this.geometry=e.geometry,this}updateMorphTargets(){const n=this.geometry.morphAttributes,i=Object.keys(n);if(i.length>0){const r=n[i[0]];if(r!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let a=0,l=r.length;a<l;a++){const o=r[a].name||String(a);this.morphTargetInfluences.push(0),this.morphTargetDictionary[o]=a}}}}getVertexPosition(e,n){const i=this.geometry,r=i.attributes.position,a=i.morphAttributes.position,l=i.morphTargetsRelative;n.fromBufferAttribute(r,e);const o=this.morphTargetInfluences;if(a&&o){_morphA.set(0,0,0);for(let c=0,u=a.length;c<u;c++){const d=o[c],f=a[c];d!==0&&(_tempA.fromBufferAttribute(f,e),l?_morphA.addScaledVector(_tempA,d):_morphA.addScaledVector(_tempA.sub(n),d))}n.add(_morphA)}return this.isSkinnedMesh&&this.boneTransform(e,n),n}raycast(e,n){const i=this.geometry,r=this.material,a=this.matrixWorld;if(r===void 0||(i.boundingSphere===null&&i.computeBoundingSphere(),_sphere$3.copy(i.boundingSphere),_sphere$3.applyMatrix4(a),e.ray.intersectsSphere(_sphere$3)===!1)||(_inverseMatrix$2.copy(a).invert(),_ray$2.copy(e.ray).applyMatrix4(_inverseMatrix$2),i.boundingBox!==null&&_ray$2.intersectsBox(i.boundingBox)===!1))return;let l;const o=i.index,c=i.attributes.position,u=i.attributes.uv,d=i.attributes.uv2,f=i.groups,h=i.drawRange;if(o!==null)if(Array.isArray(r))for(let _=0,v=f.length;_<v;_++){const m=f[_],p=r[m.materialIndex],y=Math.max(m.start,h.start),C=Math.min(o.count,Math.min(m.start+m.count,h.start+h.count));for(let w=y,A=C;w<A;w+=3){const M=o.getX(w),P=o.getX(w+1),N=o.getX(w+2);l=checkBufferGeometryIntersection(this,p,e,_ray$2,u,d,M,P,N),l&&(l.faceIndex=Math.floor(w/3),l.face.materialIndex=m.materialIndex,n.push(l))}}else{const _=Math.max(0,h.start),v=Math.min(o.count,h.start+h.count);for(let m=_,p=v;m<p;m+=3){const y=o.getX(m),C=o.getX(m+1),w=o.getX(m+2);l=checkBufferGeometryIntersection(this,r,e,_ray$2,u,d,y,C,w),l&&(l.faceIndex=Math.floor(m/3),n.push(l))}}else if(c!==void 0)if(Array.isArray(r))for(let _=0,v=f.length;_<v;_++){const m=f[_],p=r[m.materialIndex],y=Math.max(m.start,h.start),C=Math.min(c.count,Math.min(m.start+m.count,h.start+h.count));for(let w=y,A=C;w<A;w+=3){const M=w,P=w+1,N=w+2;l=checkBufferGeometryIntersection(this,p,e,_ray$2,u,d,M,P,N),l&&(l.faceIndex=Math.floor(w/3),l.face.materialIndex=m.materialIndex,n.push(l))}}else{const _=Math.max(0,h.start),v=Math.min(c.count,h.start+h.count);for(let m=_,p=v;m<p;m+=3){const y=m,C=m+1,w=m+2;l=checkBufferGeometryIntersection(this,r,e,_ray$2,u,d,y,C,w),l&&(l.faceIndex=Math.floor(m/3),n.push(l))}}}}function checkIntersection(s,e,n,i,r,a,l,o){let c;if(e.side===BackSide?c=i.intersectTriangle(l,a,r,!0,o):c=i.intersectTriangle(r,a,l,e.side===FrontSide,o),c===null)return null;_intersectionPointWorld.copy(o),_intersectionPointWorld.applyMatrix4(s.matrixWorld);const u=n.ray.origin.distanceTo(_intersectionPointWorld);return u<n.near||u>n.far?null:{distance:u,point:_intersectionPointWorld.clone(),object:s}}function checkBufferGeometryIntersection(s,e,n,i,r,a,l,o,c){s.getVertexPosition(l,_vA$1),s.getVertexPosition(o,_vB$1),s.getVertexPosition(c,_vC$1);const u=checkIntersection(s,e,n,i,_vA$1,_vB$1,_vC$1,_intersectionPoint);if(u){r&&(_uvA$1.fromBufferAttribute(r,l),_uvB$1.fromBufferAttribute(r,o),_uvC$1.fromBufferAttribute(r,c),u.uv=Triangle.getUV(_intersectionPoint,_vA$1,_vB$1,_vC$1,_uvA$1,_uvB$1,_uvC$1,new Vector2)),a&&(_uvA$1.fromBufferAttribute(a,l),_uvB$1.fromBufferAttribute(a,o),_uvC$1.fromBufferAttribute(a,c),u.uv2=Triangle.getUV(_intersectionPoint,_vA$1,_vB$1,_vC$1,_uvA$1,_uvB$1,_uvC$1,new Vector2));const d={a:l,b:o,c,normal:new Vector3,materialIndex:0};Triangle.getNormal(_vA$1,_vB$1,_vC$1,d.normal),u.face=d}return u}class BoxGeometry extends BufferGeometry{constructor(e=1,n=1,i=1,r=1,a=1,l=1){super(),this.type="BoxGeometry",this.parameters={width:e,height:n,depth:i,widthSegments:r,heightSegments:a,depthSegments:l};const o=this;r=Math.floor(r),a=Math.floor(a),l=Math.floor(l);const c=[],u=[],d=[],f=[];let h=0,_=0;v("z","y","x",-1,-1,i,n,e,l,a,0),v("z","y","x",1,-1,i,n,-e,l,a,1),v("x","z","y",1,1,e,i,n,r,l,2),v("x","z","y",1,-1,e,i,-n,r,l,3),v("x","y","z",1,-1,e,n,i,r,a,4),v("x","y","z",-1,-1,e,n,-i,r,a,5),this.setIndex(c),this.setAttribute("position",new Float32BufferAttribute(u,3)),this.setAttribute("normal",new Float32BufferAttribute(d,3)),this.setAttribute("uv",new Float32BufferAttribute(f,2));function v(m,p,y,C,w,A,M,P,N,b,L){const U=A/N,Y=M/b,Q=A/2,O=M/2,F=P/2,q=N+1,Z=b+1;let J=0,X=0;const ne=new Vector3;for(let te=0;te<Z;te++){const he=te*Y-O;for(let G=0;G<q;G++){const j=G*U-Q;ne[m]=j*C,ne[p]=he*w,ne[y]=F,u.push(ne.x,ne.y,ne.z),ne[m]=0,ne[p]=0,ne[y]=P>0?1:-1,d.push(ne.x,ne.y,ne.z),f.push(G/N),f.push(1-te/b),J+=1}}for(let te=0;te<b;te++)for(let he=0;he<N;he++){const G=h+he+q*te,j=h+he+q*(te+1),re=h+(he+1)+q*(te+1),se=h+(he+1)+q*te;c.push(G,j,se),c.push(j,re,se),X+=6}o.addGroup(_,X,L),_+=X,h+=J}}static fromJSON(e){return new BoxGeometry(e.width,e.height,e.depth,e.widthSegments,e.heightSegments,e.depthSegments)}}function cloneUniforms(s){const e={};for(const n in s){e[n]={};for(const i in s[n]){const r=s[n][i];r&&(r.isColor||r.isMatrix3||r.isMatrix4||r.isVector2||r.isVector3||r.isVector4||r.isTexture||r.isQuaternion)?e[n][i]=r.clone():Array.isArray(r)?e[n][i]=r.slice():e[n][i]=r}}return e}function mergeUniforms(s){const e={};for(let n=0;n<s.length;n++){const i=cloneUniforms(s[n]);for(const r in i)e[r]=i[r]}return e}function cloneUniformsGroups(s){const e=[];for(let n=0;n<s.length;n++)e.push(s[n].clone());return e}function getUnlitUniformColorSpace(s){return s.getRenderTarget()===null&&s.outputEncoding===sRGBEncoding?SRGBColorSpace:LinearSRGBColorSpace}const UniformsUtils={clone:cloneUniforms,merge:mergeUniforms};var default_vertex=`void main() {
	gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
}`,default_fragment=`void main() {
	gl_FragColor = vec4( 1.0, 0.0, 0.0, 1.0 );
}`;class ShaderMaterial extends Material{constructor(e){super(),this.isShaderMaterial=!0,this.type="ShaderMaterial",this.defines={},this.uniforms={},this.uniformsGroups=[],this.vertexShader=default_vertex,this.fragmentShader=default_fragment,this.linewidth=1,this.wireframe=!1,this.wireframeLinewidth=1,this.fog=!1,this.lights=!1,this.clipping=!1,this.extensions={derivatives:!1,fragDepth:!1,drawBuffers:!1,shaderTextureLOD:!1},this.defaultAttributeValues={color:[1,1,1],uv:[0,0],uv2:[0,0]},this.index0AttributeName=void 0,this.uniformsNeedUpdate=!1,this.glslVersion=null,e!==void 0&&this.setValues(e)}copy(e){return super.copy(e),this.fragmentShader=e.fragmentShader,this.vertexShader=e.vertexShader,this.uniforms=cloneUniforms(e.uniforms),this.uniformsGroups=cloneUniformsGroups(e.uniformsGroups),this.defines=Object.assign({},e.defines),this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.fog=e.fog,this.lights=e.lights,this.clipping=e.clipping,this.extensions=Object.assign({},e.extensions),this.glslVersion=e.glslVersion,this}toJSON(e){const n=super.toJSON(e);n.glslVersion=this.glslVersion,n.uniforms={};for(const r in this.uniforms){const l=this.uniforms[r].value;l&&l.isTexture?n.uniforms[r]={type:"t",value:l.toJSON(e).uuid}:l&&l.isColor?n.uniforms[r]={type:"c",value:l.getHex()}:l&&l.isVector2?n.uniforms[r]={type:"v2",value:l.toArray()}:l&&l.isVector3?n.uniforms[r]={type:"v3",value:l.toArray()}:l&&l.isVector4?n.uniforms[r]={type:"v4",value:l.toArray()}:l&&l.isMatrix3?n.uniforms[r]={type:"m3",value:l.toArray()}:l&&l.isMatrix4?n.uniforms[r]={type:"m4",value:l.toArray()}:n.uniforms[r]={value:l}}Object.keys(this.defines).length>0&&(n.defines=this.defines),n.vertexShader=this.vertexShader,n.fragmentShader=this.fragmentShader;const i={};for(const r in this.extensions)this.extensions[r]===!0&&(i[r]=!0);return Object.keys(i).length>0&&(n.extensions=i),n}}class Camera extends Object3D{constructor(){super(),this.isCamera=!0,this.type="Camera",this.matrixWorldInverse=new Matrix4,this.projectionMatrix=new Matrix4,this.projectionMatrixInverse=new Matrix4}copy(e,n){return super.copy(e,n),this.matrixWorldInverse.copy(e.matrixWorldInverse),this.projectionMatrix.copy(e.projectionMatrix),this.projectionMatrixInverse.copy(e.projectionMatrixInverse),this}getWorldDirection(e){this.updateWorldMatrix(!0,!1);const n=this.matrixWorld.elements;return e.set(-n[8],-n[9],-n[10]).normalize()}updateMatrixWorld(e){super.updateMatrixWorld(e),this.matrixWorldInverse.copy(this.matrixWorld).invert()}updateWorldMatrix(e,n){super.updateWorldMatrix(e,n),this.matrixWorldInverse.copy(this.matrixWorld).invert()}clone(){return new this.constructor().copy(this)}}class PerspectiveCamera extends Camera{constructor(e=50,n=1,i=.1,r=2e3){super(),this.isPerspectiveCamera=!0,this.type="PerspectiveCamera",this.fov=e,this.zoom=1,this.near=i,this.far=r,this.focus=10,this.aspect=n,this.view=null,this.filmGauge=35,this.filmOffset=0,this.updateProjectionMatrix()}copy(e,n){return super.copy(e,n),this.fov=e.fov,this.zoom=e.zoom,this.near=e.near,this.far=e.far,this.focus=e.focus,this.aspect=e.aspect,this.view=e.view===null?null:Object.assign({},e.view),this.filmGauge=e.filmGauge,this.filmOffset=e.filmOffset,this}setFocalLength(e){const n=.5*this.getFilmHeight()/e;this.fov=RAD2DEG*2*Math.atan(n),this.updateProjectionMatrix()}getFocalLength(){const e=Math.tan(DEG2RAD*.5*this.fov);return .5*this.getFilmHeight()/e}getEffectiveFOV(){return RAD2DEG*2*Math.atan(Math.tan(DEG2RAD*.5*this.fov)/this.zoom)}getFilmWidth(){return this.filmGauge*Math.min(this.aspect,1)}getFilmHeight(){return this.filmGauge/Math.max(this.aspect,1)}setViewOffset(e,n,i,r,a,l){this.aspect=e/n,this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=n,this.view.offsetX=i,this.view.offsetY=r,this.view.width=a,this.view.height=l,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const e=this.near;let n=e*Math.tan(DEG2RAD*.5*this.fov)/this.zoom,i=2*n,r=this.aspect*i,a=-.5*r;const l=this.view;if(this.view!==null&&this.view.enabled){const c=l.fullWidth,u=l.fullHeight;a+=l.offsetX*r/c,n-=l.offsetY*i/u,r*=l.width/c,i*=l.height/u}const o=this.filmOffset;o!==0&&(a+=e*o/this.getFilmWidth()),this.projectionMatrix.makePerspective(a,a+r,n,n-i,e,this.far),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){const n=super.toJSON(e);return n.object.fov=this.fov,n.object.zoom=this.zoom,n.object.near=this.near,n.object.far=this.far,n.object.focus=this.focus,n.object.aspect=this.aspect,this.view!==null&&(n.object.view=Object.assign({},this.view)),n.object.filmGauge=this.filmGauge,n.object.filmOffset=this.filmOffset,n}}const fov=-90,aspect=1;class CubeCamera extends Object3D{constructor(e,n,i){super(),this.type="CubeCamera",this.renderTarget=i;const r=new PerspectiveCamera(fov,aspect,e,n);r.layers=this.layers,r.up.set(0,1,0),r.lookAt(1,0,0),this.add(r);const a=new PerspectiveCamera(fov,aspect,e,n);a.layers=this.layers,a.up.set(0,1,0),a.lookAt(-1,0,0),this.add(a);const l=new PerspectiveCamera(fov,aspect,e,n);l.layers=this.layers,l.up.set(0,0,-1),l.lookAt(0,1,0),this.add(l);const o=new PerspectiveCamera(fov,aspect,e,n);o.layers=this.layers,o.up.set(0,0,1),o.lookAt(0,-1,0),this.add(o);const c=new PerspectiveCamera(fov,aspect,e,n);c.layers=this.layers,c.up.set(0,1,0),c.lookAt(0,0,1),this.add(c);const u=new PerspectiveCamera(fov,aspect,e,n);u.layers=this.layers,u.up.set(0,1,0),u.lookAt(0,0,-1),this.add(u)}update(e,n){this.parent===null&&this.updateMatrixWorld();const i=this.renderTarget,[r,a,l,o,c,u]=this.children,d=e.getRenderTarget(),f=e.toneMapping,h=e.xr.enabled;e.toneMapping=NoToneMapping,e.xr.enabled=!1;const _=i.texture.generateMipmaps;i.texture.generateMipmaps=!1,e.setRenderTarget(i,0),e.render(n,r),e.setRenderTarget(i,1),e.render(n,a),e.setRenderTarget(i,2),e.render(n,l),e.setRenderTarget(i,3),e.render(n,o),e.setRenderTarget(i,4),e.render(n,c),i.texture.generateMipmaps=_,e.setRenderTarget(i,5),e.render(n,u),e.setRenderTarget(d),e.toneMapping=f,e.xr.enabled=h,i.texture.needsPMREMUpdate=!0}}class CubeTexture extends Texture{constructor(e,n,i,r,a,l,o,c,u,d){e=e!==void 0?e:[],n=n!==void 0?n:CubeReflectionMapping,super(e,n,i,r,a,l,o,c,u,d),this.isCubeTexture=!0,this.flipY=!1}get images(){return this.image}set images(e){this.image=e}}class WebGLCubeRenderTarget extends WebGLRenderTarget{constructor(e=1,n={}){super(e,e,n),this.isWebGLCubeRenderTarget=!0;const i={width:e,height:e,depth:1},r=[i,i,i,i,i,i];this.texture=new CubeTexture(r,n.mapping,n.wrapS,n.wrapT,n.magFilter,n.minFilter,n.format,n.type,n.anisotropy,n.encoding),this.texture.isRenderTargetTexture=!0,this.texture.generateMipmaps=n.generateMipmaps!==void 0?n.generateMipmaps:!1,this.texture.minFilter=n.minFilter!==void 0?n.minFilter:LinearFilter}fromEquirectangularTexture(e,n){this.texture.type=n.type,this.texture.encoding=n.encoding,this.texture.generateMipmaps=n.generateMipmaps,this.texture.minFilter=n.minFilter,this.texture.magFilter=n.magFilter;const i={uniforms:{tEquirect:{value:null}},vertexShader:`

				varying vec3 vWorldDirection;

				vec3 transformDirection( in vec3 dir, in mat4 matrix ) {

					return normalize( ( matrix * vec4( dir, 0.0 ) ).xyz );

				}

				void main() {

					vWorldDirection = transformDirection( position, modelMatrix );

					#include <begin_vertex>
					#include <project_vertex>

				}
			`,fragmentShader:`

				uniform sampler2D tEquirect;

				varying vec3 vWorldDirection;

				#include <common>

				void main() {

					vec3 direction = normalize( vWorldDirection );

					vec2 sampleUV = equirectUv( direction );

					gl_FragColor = texture2D( tEquirect, sampleUV );

				}
			`},r=new BoxGeometry(5,5,5),a=new ShaderMaterial({name:"CubemapFromEquirect",uniforms:cloneUniforms(i.uniforms),vertexShader:i.vertexShader,fragmentShader:i.fragmentShader,side:BackSide,blending:NoBlending});a.uniforms.tEquirect.value=n;const l=new Mesh(r,a),o=n.minFilter;return n.minFilter===LinearMipmapLinearFilter&&(n.minFilter=LinearFilter),new CubeCamera(1,10,this).update(e,l),n.minFilter=o,l.geometry.dispose(),l.material.dispose(),this}clear(e,n,i,r){const a=e.getRenderTarget();for(let l=0;l<6;l++)e.setRenderTarget(this,l),e.clear(n,i,r);e.setRenderTarget(a)}}const _vector1=new Vector3,_vector2=new Vector3,_normalMatrix=new Matrix3;class Plane{constructor(e=new Vector3(1,0,0),n=0){this.isPlane=!0,this.normal=e,this.constant=n}set(e,n){return this.normal.copy(e),this.constant=n,this}setComponents(e,n,i,r){return this.normal.set(e,n,i),this.constant=r,this}setFromNormalAndCoplanarPoint(e,n){return this.normal.copy(e),this.constant=-n.dot(this.normal),this}setFromCoplanarPoints(e,n,i){const r=_vector1.subVectors(i,n).cross(_vector2.subVectors(e,n)).normalize();return this.setFromNormalAndCoplanarPoint(r,e),this}copy(e){return this.normal.copy(e.normal),this.constant=e.constant,this}normalize(){const e=1/this.normal.length();return this.normal.multiplyScalar(e),this.constant*=e,this}negate(){return this.constant*=-1,this.normal.negate(),this}distanceToPoint(e){return this.normal.dot(e)+this.constant}distanceToSphere(e){return this.distanceToPoint(e.center)-e.radius}projectPoint(e,n){return n.copy(this.normal).multiplyScalar(-this.distanceToPoint(e)).add(e)}intersectLine(e,n){const i=e.delta(_vector1),r=this.normal.dot(i);if(r===0)return this.distanceToPoint(e.start)===0?n.copy(e.start):null;const a=-(e.start.dot(this.normal)+this.constant)/r;return a<0||a>1?null:n.copy(i).multiplyScalar(a).add(e.start)}intersectsLine(e){const n=this.distanceToPoint(e.start),i=this.distanceToPoint(e.end);return n<0&&i>0||i<0&&n>0}intersectsBox(e){return e.intersectsPlane(this)}intersectsSphere(e){return e.intersectsPlane(this)}coplanarPoint(e){return e.copy(this.normal).multiplyScalar(-this.constant)}applyMatrix4(e,n){const i=n||_normalMatrix.getNormalMatrix(e),r=this.coplanarPoint(_vector1).applyMatrix4(e),a=this.normal.applyMatrix3(i).normalize();return this.constant=-r.dot(a),this}translate(e){return this.constant-=e.dot(this.normal),this}equals(e){return e.normal.equals(this.normal)&&e.constant===this.constant}clone(){return new this.constructor().copy(this)}}const _sphere$2=new Sphere,_vector$7=new Vector3;class Frustum{constructor(e=new Plane,n=new Plane,i=new Plane,r=new Plane,a=new Plane,l=new Plane){this.planes=[e,n,i,r,a,l]}set(e,n,i,r,a,l){const o=this.planes;return o[0].copy(e),o[1].copy(n),o[2].copy(i),o[3].copy(r),o[4].copy(a),o[5].copy(l),this}copy(e){const n=this.planes;for(let i=0;i<6;i++)n[i].copy(e.planes[i]);return this}setFromProjectionMatrix(e){const n=this.planes,i=e.elements,r=i[0],a=i[1],l=i[2],o=i[3],c=i[4],u=i[5],d=i[6],f=i[7],h=i[8],_=i[9],v=i[10],m=i[11],p=i[12],y=i[13],C=i[14],w=i[15];return n[0].setComponents(o-r,f-c,m-h,w-p).normalize(),n[1].setComponents(o+r,f+c,m+h,w+p).normalize(),n[2].setComponents(o+a,f+u,m+_,w+y).normalize(),n[3].setComponents(o-a,f-u,m-_,w-y).normalize(),n[4].setComponents(o-l,f-d,m-v,w-C).normalize(),n[5].setComponents(o+l,f+d,m+v,w+C).normalize(),this}intersectsObject(e){const n=e.geometry;return n.boundingSphere===null&&n.computeBoundingSphere(),_sphere$2.copy(n.boundingSphere).applyMatrix4(e.matrixWorld),this.intersectsSphere(_sphere$2)}intersectsSprite(e){return _sphere$2.center.set(0,0,0),_sphere$2.radius=.7071067811865476,_sphere$2.applyMatrix4(e.matrixWorld),this.intersectsSphere(_sphere$2)}intersectsSphere(e){const n=this.planes,i=e.center,r=-e.radius;for(let a=0;a<6;a++)if(n[a].distanceToPoint(i)<r)return!1;return!0}intersectsBox(e){const n=this.planes;for(let i=0;i<6;i++){const r=n[i];if(_vector$7.x=r.normal.x>0?e.max.x:e.min.x,_vector$7.y=r.normal.y>0?e.max.y:e.min.y,_vector$7.z=r.normal.z>0?e.max.z:e.min.z,r.distanceToPoint(_vector$7)<0)return!1}return!0}containsPoint(e){const n=this.planes;for(let i=0;i<6;i++)if(n[i].distanceToPoint(e)<0)return!1;return!0}clone(){return new this.constructor().copy(this)}}function WebGLAnimation(){let s=null,e=!1,n=null,i=null;function r(a,l){n(a,l),i=s.requestAnimationFrame(r)}return{start:function(){e!==!0&&n!==null&&(i=s.requestAnimationFrame(r),e=!0)},stop:function(){s.cancelAnimationFrame(i),e=!1},setAnimationLoop:function(a){n=a},setContext:function(a){s=a}}}function WebGLAttributes(s,e){const n=e.isWebGL2,i=new WeakMap;function r(u,d){const f=u.array,h=u.usage,_=s.createBuffer();s.bindBuffer(d,_),s.bufferData(d,f,h),u.onUploadCallback();let v;if(f instanceof Float32Array)v=5126;else if(f instanceof Uint16Array)if(u.isFloat16BufferAttribute)if(n)v=5131;else throw new Error("THREE.WebGLAttributes: Usage of Float16BufferAttribute requires WebGL2.");else v=5123;else if(f instanceof Int16Array)v=5122;else if(f instanceof Uint32Array)v=5125;else if(f instanceof Int32Array)v=5124;else if(f instanceof Int8Array)v=5120;else if(f instanceof Uint8Array)v=5121;else if(f instanceof Uint8ClampedArray)v=5121;else throw new Error("THREE.WebGLAttributes: Unsupported buffer data format: "+f);return{buffer:_,type:v,bytesPerElement:f.BYTES_PER_ELEMENT,version:u.version}}function a(u,d,f){const h=d.array,_=d.updateRange;s.bindBuffer(f,u),_.count===-1?s.bufferSubData(f,0,h):(n?s.bufferSubData(f,_.offset*h.BYTES_PER_ELEMENT,h,_.offset,_.count):s.bufferSubData(f,_.offset*h.BYTES_PER_ELEMENT,h.subarray(_.offset,_.offset+_.count)),_.count=-1),d.onUploadCallback()}function l(u){return u.isInterleavedBufferAttribute&&(u=u.data),i.get(u)}function o(u){u.isInterleavedBufferAttribute&&(u=u.data);const d=i.get(u);d&&(s.deleteBuffer(d.buffer),i.delete(u))}function c(u,d){if(u.isGLBufferAttribute){const h=i.get(u);(!h||h.version<u.version)&&i.set(u,{buffer:u.buffer,type:u.type,bytesPerElement:u.elementSize,version:u.version});return}u.isInterleavedBufferAttribute&&(u=u.data);const f=i.get(u);f===void 0?i.set(u,r(u,d)):f.version<u.version&&(a(f.buffer,u,d),f.version=u.version)}return{get:l,remove:o,update:c}}class PlaneGeometry extends BufferGeometry{constructor(e=1,n=1,i=1,r=1){super(),this.type="PlaneGeometry",this.parameters={width:e,height:n,widthSegments:i,heightSegments:r};const a=e/2,l=n/2,o=Math.floor(i),c=Math.floor(r),u=o+1,d=c+1,f=e/o,h=n/c,_=[],v=[],m=[],p=[];for(let y=0;y<d;y++){const C=y*h-l;for(let w=0;w<u;w++){const A=w*f-a;v.push(A,-C,0),m.push(0,0,1),p.push(w/o),p.push(1-y/c)}}for(let y=0;y<c;y++)for(let C=0;C<o;C++){const w=C+u*y,A=C+u*(y+1),M=C+1+u*(y+1),P=C+1+u*y;_.push(w,A,P),_.push(A,M,P)}this.setIndex(_),this.setAttribute("position",new Float32BufferAttribute(v,3)),this.setAttribute("normal",new Float32BufferAttribute(m,3)),this.setAttribute("uv",new Float32BufferAttribute(p,2))}static fromJSON(e){return new PlaneGeometry(e.width,e.height,e.widthSegments,e.heightSegments)}}var alphamap_fragment=`#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, vUv ).g;
#endif`,alphamap_pars_fragment=`#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,alphatest_fragment=`#ifdef USE_ALPHATEST
	if ( diffuseColor.a < alphaTest ) discard;
#endif`,alphatest_pars_fragment=`#ifdef USE_ALPHATEST
	uniform float alphaTest;
#endif`,aomap_fragment=`#ifdef USE_AOMAP
	float ambientOcclusion = ( texture2D( aoMap, vUv2 ).r - 1.0 ) * aoMapIntensity + 1.0;
	reflectedLight.indirectDiffuse *= ambientOcclusion;
	#if defined( USE_ENVMAP ) && defined( STANDARD )
		float dotNV = saturate( dot( geometry.normal, geometry.viewDir ) );
		reflectedLight.indirectSpecular *= computeSpecularOcclusion( dotNV, ambientOcclusion, material.roughness );
	#endif
#endif`,aomap_pars_fragment=`#ifdef USE_AOMAP
	uniform sampler2D aoMap;
	uniform float aoMapIntensity;
#endif`,begin_vertex="vec3 transformed = vec3( position );",beginnormal_vertex=`vec3 objectNormal = vec3( normal );
#ifdef USE_TANGENT
	vec3 objectTangent = vec3( tangent.xyz );
#endif`,bsdfs=`vec3 BRDF_Lambert( const in vec3 diffuseColor ) {
	return RECIPROCAL_PI * diffuseColor;
}
vec3 F_Schlick( const in vec3 f0, const in float f90, const in float dotVH ) {
	float fresnel = exp2( ( - 5.55473 * dotVH - 6.98316 ) * dotVH );
	return f0 * ( 1.0 - fresnel ) + ( f90 * fresnel );
}
float F_Schlick( const in float f0, const in float f90, const in float dotVH ) {
	float fresnel = exp2( ( - 5.55473 * dotVH - 6.98316 ) * dotVH );
	return f0 * ( 1.0 - fresnel ) + ( f90 * fresnel );
}
vec3 Schlick_to_F0( const in vec3 f, const in float f90, const in float dotVH ) {
    float x = clamp( 1.0 - dotVH, 0.0, 1.0 );
    float x2 = x * x;
    float x5 = clamp( x * x2 * x2, 0.0, 0.9999 );
    return ( f - vec3( f90 ) * x5 ) / ( 1.0 - x5 );
}
float V_GGX_SmithCorrelated( const in float alpha, const in float dotNL, const in float dotNV ) {
	float a2 = pow2( alpha );
	float gv = dotNL * sqrt( a2 + ( 1.0 - a2 ) * pow2( dotNV ) );
	float gl = dotNV * sqrt( a2 + ( 1.0 - a2 ) * pow2( dotNL ) );
	return 0.5 / max( gv + gl, EPSILON );
}
float D_GGX( const in float alpha, const in float dotNH ) {
	float a2 = pow2( alpha );
	float denom = pow2( dotNH ) * ( a2 - 1.0 ) + 1.0;
	return RECIPROCAL_PI * a2 / pow2( denom );
}
vec3 BRDF_GGX( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in vec3 f0, const in float f90, const in float roughness ) {
	float alpha = pow2( roughness );
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNL = saturate( dot( normal, lightDir ) );
	float dotNV = saturate( dot( normal, viewDir ) );
	float dotNH = saturate( dot( normal, halfDir ) );
	float dotVH = saturate( dot( viewDir, halfDir ) );
	vec3 F = F_Schlick( f0, f90, dotVH );
	float V = V_GGX_SmithCorrelated( alpha, dotNL, dotNV );
	float D = D_GGX( alpha, dotNH );
	return F * ( V * D );
}
#ifdef USE_IRIDESCENCE
	vec3 BRDF_GGX_Iridescence( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in vec3 f0, const in float f90, const in float iridescence, const in vec3 iridescenceFresnel, const in float roughness ) {
		float alpha = pow2( roughness );
		vec3 halfDir = normalize( lightDir + viewDir );
		float dotNL = saturate( dot( normal, lightDir ) );
		float dotNV = saturate( dot( normal, viewDir ) );
		float dotNH = saturate( dot( normal, halfDir ) );
		float dotVH = saturate( dot( viewDir, halfDir ) );
		vec3 F = mix( F_Schlick( f0, f90, dotVH ), iridescenceFresnel, iridescence );
		float V = V_GGX_SmithCorrelated( alpha, dotNL, dotNV );
		float D = D_GGX( alpha, dotNH );
		return F * ( V * D );
	}
#endif
vec2 LTC_Uv( const in vec3 N, const in vec3 V, const in float roughness ) {
	const float LUT_SIZE = 64.0;
	const float LUT_SCALE = ( LUT_SIZE - 1.0 ) / LUT_SIZE;
	const float LUT_BIAS = 0.5 / LUT_SIZE;
	float dotNV = saturate( dot( N, V ) );
	vec2 uv = vec2( roughness, sqrt( 1.0 - dotNV ) );
	uv = uv * LUT_SCALE + LUT_BIAS;
	return uv;
}
float LTC_ClippedSphereFormFactor( const in vec3 f ) {
	float l = length( f );
	return max( ( l * l + f.z ) / ( l + 1.0 ), 0.0 );
}
vec3 LTC_EdgeVectorFormFactor( const in vec3 v1, const in vec3 v2 ) {
	float x = dot( v1, v2 );
	float y = abs( x );
	float a = 0.8543985 + ( 0.4965155 + 0.0145206 * y ) * y;
	float b = 3.4175940 + ( 4.1616724 + y ) * y;
	float v = a / b;
	float theta_sintheta = ( x > 0.0 ) ? v : 0.5 * inversesqrt( max( 1.0 - x * x, 1e-7 ) ) - v;
	return cross( v1, v2 ) * theta_sintheta;
}
vec3 LTC_Evaluate( const in vec3 N, const in vec3 V, const in vec3 P, const in mat3 mInv, const in vec3 rectCoords[ 4 ] ) {
	vec3 v1 = rectCoords[ 1 ] - rectCoords[ 0 ];
	vec3 v2 = rectCoords[ 3 ] - rectCoords[ 0 ];
	vec3 lightNormal = cross( v1, v2 );
	if( dot( lightNormal, P - rectCoords[ 0 ] ) < 0.0 ) return vec3( 0.0 );
	vec3 T1, T2;
	T1 = normalize( V - N * dot( V, N ) );
	T2 = - cross( N, T1 );
	mat3 mat = mInv * transposeMat3( mat3( T1, T2, N ) );
	vec3 coords[ 4 ];
	coords[ 0 ] = mat * ( rectCoords[ 0 ] - P );
	coords[ 1 ] = mat * ( rectCoords[ 1 ] - P );
	coords[ 2 ] = mat * ( rectCoords[ 2 ] - P );
	coords[ 3 ] = mat * ( rectCoords[ 3 ] - P );
	coords[ 0 ] = normalize( coords[ 0 ] );
	coords[ 1 ] = normalize( coords[ 1 ] );
	coords[ 2 ] = normalize( coords[ 2 ] );
	coords[ 3 ] = normalize( coords[ 3 ] );
	vec3 vectorFormFactor = vec3( 0.0 );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 0 ], coords[ 1 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 1 ], coords[ 2 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 2 ], coords[ 3 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 3 ], coords[ 0 ] );
	float result = LTC_ClippedSphereFormFactor( vectorFormFactor );
	return vec3( result );
}
float G_BlinnPhong_Implicit( ) {
	return 0.25;
}
float D_BlinnPhong( const in float shininess, const in float dotNH ) {
	return RECIPROCAL_PI * ( shininess * 0.5 + 1.0 ) * pow( dotNH, shininess );
}
vec3 BRDF_BlinnPhong( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in vec3 specularColor, const in float shininess ) {
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNH = saturate( dot( normal, halfDir ) );
	float dotVH = saturate( dot( viewDir, halfDir ) );
	vec3 F = F_Schlick( specularColor, 1.0, dotVH );
	float G = G_BlinnPhong_Implicit( );
	float D = D_BlinnPhong( shininess, dotNH );
	return F * ( G * D );
}
#if defined( USE_SHEEN )
float D_Charlie( float roughness, float dotNH ) {
	float alpha = pow2( roughness );
	float invAlpha = 1.0 / alpha;
	float cos2h = dotNH * dotNH;
	float sin2h = max( 1.0 - cos2h, 0.0078125 );
	return ( 2.0 + invAlpha ) * pow( sin2h, invAlpha * 0.5 ) / ( 2.0 * PI );
}
float V_Neubelt( float dotNV, float dotNL ) {
	return saturate( 1.0 / ( 4.0 * ( dotNL + dotNV - dotNL * dotNV ) ) );
}
vec3 BRDF_Sheen( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, vec3 sheenColor, const in float sheenRoughness ) {
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNL = saturate( dot( normal, lightDir ) );
	float dotNV = saturate( dot( normal, viewDir ) );
	float dotNH = saturate( dot( normal, halfDir ) );
	float D = D_Charlie( sheenRoughness, dotNH );
	float V = V_Neubelt( dotNV, dotNL );
	return sheenColor * ( D * V );
}
#endif`,iridescence_fragment=`#ifdef USE_IRIDESCENCE
	const mat3 XYZ_TO_REC709 = mat3(
		 3.2404542, -0.9692660,  0.0556434,
		-1.5371385,  1.8760108, -0.2040259,
		-0.4985314,  0.0415560,  1.0572252
	);
	vec3 Fresnel0ToIor( vec3 fresnel0 ) {
		vec3 sqrtF0 = sqrt( fresnel0 );
		return ( vec3( 1.0 ) + sqrtF0 ) / ( vec3( 1.0 ) - sqrtF0 );
	}
	vec3 IorToFresnel0( vec3 transmittedIor, float incidentIor ) {
		return pow2( ( transmittedIor - vec3( incidentIor ) ) / ( transmittedIor + vec3( incidentIor ) ) );
	}
	float IorToFresnel0( float transmittedIor, float incidentIor ) {
		return pow2( ( transmittedIor - incidentIor ) / ( transmittedIor + incidentIor ));
	}
	vec3 evalSensitivity( float OPD, vec3 shift ) {
		float phase = 2.0 * PI * OPD * 1.0e-9;
		vec3 val = vec3( 5.4856e-13, 4.4201e-13, 5.2481e-13 );
		vec3 pos = vec3( 1.6810e+06, 1.7953e+06, 2.2084e+06 );
		vec3 var = vec3( 4.3278e+09, 9.3046e+09, 6.6121e+09 );
		vec3 xyz = val * sqrt( 2.0 * PI * var ) * cos( pos * phase + shift ) * exp( - pow2( phase ) * var );
		xyz.x += 9.7470e-14 * sqrt( 2.0 * PI * 4.5282e+09 ) * cos( 2.2399e+06 * phase + shift[ 0 ] ) * exp( - 4.5282e+09 * pow2( phase ) );
		xyz /= 1.0685e-7;
		vec3 rgb = XYZ_TO_REC709 * xyz;
		return rgb;
	}
	vec3 evalIridescence( float outsideIOR, float eta2, float cosTheta1, float thinFilmThickness, vec3 baseF0 ) {
		vec3 I;
		float iridescenceIOR = mix( outsideIOR, eta2, smoothstep( 0.0, 0.03, thinFilmThickness ) );
		float sinTheta2Sq = pow2( outsideIOR / iridescenceIOR ) * ( 1.0 - pow2( cosTheta1 ) );
		float cosTheta2Sq = 1.0 - sinTheta2Sq;
		if ( cosTheta2Sq < 0.0 ) {
			 return vec3( 1.0 );
		}
		float cosTheta2 = sqrt( cosTheta2Sq );
		float R0 = IorToFresnel0( iridescenceIOR, outsideIOR );
		float R12 = F_Schlick( R0, 1.0, cosTheta1 );
		float R21 = R12;
		float T121 = 1.0 - R12;
		float phi12 = 0.0;
		if ( iridescenceIOR < outsideIOR ) phi12 = PI;
		float phi21 = PI - phi12;
		vec3 baseIOR = Fresnel0ToIor( clamp( baseF0, 0.0, 0.9999 ) );		vec3 R1 = IorToFresnel0( baseIOR, iridescenceIOR );
		vec3 R23 = F_Schlick( R1, 1.0, cosTheta2 );
		vec3 phi23 = vec3( 0.0 );
		if ( baseIOR[ 0 ] < iridescenceIOR ) phi23[ 0 ] = PI;
		if ( baseIOR[ 1 ] < iridescenceIOR ) phi23[ 1 ] = PI;
		if ( baseIOR[ 2 ] < iridescenceIOR ) phi23[ 2 ] = PI;
		float OPD = 2.0 * iridescenceIOR * thinFilmThickness * cosTheta2;
		vec3 phi = vec3( phi21 ) + phi23;
		vec3 R123 = clamp( R12 * R23, 1e-5, 0.9999 );
		vec3 r123 = sqrt( R123 );
		vec3 Rs = pow2( T121 ) * R23 / ( vec3( 1.0 ) - R123 );
		vec3 C0 = R12 + Rs;
		I = C0;
		vec3 Cm = Rs - T121;
		for ( int m = 1; m <= 2; ++ m ) {
			Cm *= r123;
			vec3 Sm = 2.0 * evalSensitivity( float( m ) * OPD, float( m ) * phi );
			I += Cm * Sm;
		}
		return max( I, vec3( 0.0 ) );
	}
#endif`,bumpmap_pars_fragment=`#ifdef USE_BUMPMAP
	uniform sampler2D bumpMap;
	uniform float bumpScale;
	vec2 dHdxy_fwd() {
		vec2 dSTdx = dFdx( vUv );
		vec2 dSTdy = dFdy( vUv );
		float Hll = bumpScale * texture2D( bumpMap, vUv ).x;
		float dBx = bumpScale * texture2D( bumpMap, vUv + dSTdx ).x - Hll;
		float dBy = bumpScale * texture2D( bumpMap, vUv + dSTdy ).x - Hll;
		return vec2( dBx, dBy );
	}
	vec3 perturbNormalArb( vec3 surf_pos, vec3 surf_norm, vec2 dHdxy, float faceDirection ) {
		vec3 vSigmaX = dFdx( surf_pos.xyz );
		vec3 vSigmaY = dFdy( surf_pos.xyz );
		vec3 vN = surf_norm;
		vec3 R1 = cross( vSigmaY, vN );
		vec3 R2 = cross( vN, vSigmaX );
		float fDet = dot( vSigmaX, R1 ) * faceDirection;
		vec3 vGrad = sign( fDet ) * ( dHdxy.x * R1 + dHdxy.y * R2 );
		return normalize( abs( fDet ) * surf_norm - vGrad );
	}
#endif`,clipping_planes_fragment=`#if NUM_CLIPPING_PLANES > 0
	vec4 plane;
	#pragma unroll_loop_start
	for ( int i = 0; i < UNION_CLIPPING_PLANES; i ++ ) {
		plane = clippingPlanes[ i ];
		if ( dot( vClipPosition, plane.xyz ) > plane.w ) discard;
	}
	#pragma unroll_loop_end
	#if UNION_CLIPPING_PLANES < NUM_CLIPPING_PLANES
		bool clipped = true;
		#pragma unroll_loop_start
		for ( int i = UNION_CLIPPING_PLANES; i < NUM_CLIPPING_PLANES; i ++ ) {
			plane = clippingPlanes[ i ];
			clipped = ( dot( vClipPosition, plane.xyz ) > plane.w ) && clipped;
		}
		#pragma unroll_loop_end
		if ( clipped ) discard;
	#endif
#endif`,clipping_planes_pars_fragment=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
	uniform vec4 clippingPlanes[ NUM_CLIPPING_PLANES ];
#endif`,clipping_planes_pars_vertex=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
#endif`,clipping_planes_vertex=`#if NUM_CLIPPING_PLANES > 0
	vClipPosition = - mvPosition.xyz;
#endif`,color_fragment=`#if defined( USE_COLOR_ALPHA )
	diffuseColor *= vColor;
#elif defined( USE_COLOR )
	diffuseColor.rgb *= vColor;
#endif`,color_pars_fragment=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR )
	varying vec3 vColor;
#endif`,color_pars_vertex=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR ) || defined( USE_INSTANCING_COLOR )
	varying vec3 vColor;
#endif`,color_vertex=`#if defined( USE_COLOR_ALPHA )
	vColor = vec4( 1.0 );
#elif defined( USE_COLOR ) || defined( USE_INSTANCING_COLOR )
	vColor = vec3( 1.0 );
#endif
#ifdef USE_COLOR
	vColor *= color;
#endif
#ifdef USE_INSTANCING_COLOR
	vColor.xyz *= instanceColor.xyz;
#endif`,common=`#define PI 3.141592653589793
#define PI2 6.283185307179586
#define PI_HALF 1.5707963267948966
#define RECIPROCAL_PI 0.3183098861837907
#define RECIPROCAL_PI2 0.15915494309189535
#define EPSILON 1e-6
#ifndef saturate
#define saturate( a ) clamp( a, 0.0, 1.0 )
#endif
#define whiteComplement( a ) ( 1.0 - saturate( a ) )
float pow2( const in float x ) { return x*x; }
vec3 pow2( const in vec3 x ) { return x*x; }
float pow3( const in float x ) { return x*x*x; }
float pow4( const in float x ) { float x2 = x*x; return x2*x2; }
float max3( const in vec3 v ) { return max( max( v.x, v.y ), v.z ); }
float average( const in vec3 v ) { return dot( v, vec3( 0.3333333 ) ); }
highp float rand( const in vec2 uv ) {
	const highp float a = 12.9898, b = 78.233, c = 43758.5453;
	highp float dt = dot( uv.xy, vec2( a,b ) ), sn = mod( dt, PI );
	return fract( sin( sn ) * c );
}
#ifdef HIGH_PRECISION
	float precisionSafeLength( vec3 v ) { return length( v ); }
#else
	float precisionSafeLength( vec3 v ) {
		float maxComponent = max3( abs( v ) );
		return length( v / maxComponent ) * maxComponent;
	}
#endif
struct IncidentLight {
	vec3 color;
	vec3 direction;
	bool visible;
};
struct ReflectedLight {
	vec3 directDiffuse;
	vec3 directSpecular;
	vec3 indirectDiffuse;
	vec3 indirectSpecular;
};
struct GeometricContext {
	vec3 position;
	vec3 normal;
	vec3 viewDir;
#ifdef USE_CLEARCOAT
	vec3 clearcoatNormal;
#endif
};
vec3 transformDirection( in vec3 dir, in mat4 matrix ) {
	return normalize( ( matrix * vec4( dir, 0.0 ) ).xyz );
}
vec3 inverseTransformDirection( in vec3 dir, in mat4 matrix ) {
	return normalize( ( vec4( dir, 0.0 ) * matrix ).xyz );
}
mat3 transposeMat3( const in mat3 m ) {
	mat3 tmp;
	tmp[ 0 ] = vec3( m[ 0 ].x, m[ 1 ].x, m[ 2 ].x );
	tmp[ 1 ] = vec3( m[ 0 ].y, m[ 1 ].y, m[ 2 ].y );
	tmp[ 2 ] = vec3( m[ 0 ].z, m[ 1 ].z, m[ 2 ].z );
	return tmp;
}
float luminance( const in vec3 rgb ) {
	const vec3 weights = vec3( 0.2126729, 0.7151522, 0.0721750 );
	return dot( weights, rgb );
}
bool isPerspectiveMatrix( mat4 m ) {
	return m[ 2 ][ 3 ] == - 1.0;
}
vec2 equirectUv( in vec3 dir ) {
	float u = atan( dir.z, dir.x ) * RECIPROCAL_PI2 + 0.5;
	float v = asin( clamp( dir.y, - 1.0, 1.0 ) ) * RECIPROCAL_PI + 0.5;
	return vec2( u, v );
}`,cube_uv_reflection_fragment=`#ifdef ENVMAP_TYPE_CUBE_UV
	#define cubeUV_minMipLevel 4.0
	#define cubeUV_minTileSize 16.0
	float getFace( vec3 direction ) {
		vec3 absDirection = abs( direction );
		float face = - 1.0;
		if ( absDirection.x > absDirection.z ) {
			if ( absDirection.x > absDirection.y )
				face = direction.x > 0.0 ? 0.0 : 3.0;
			else
				face = direction.y > 0.0 ? 1.0 : 4.0;
		} else {
			if ( absDirection.z > absDirection.y )
				face = direction.z > 0.0 ? 2.0 : 5.0;
			else
				face = direction.y > 0.0 ? 1.0 : 4.0;
		}
		return face;
	}
	vec2 getUV( vec3 direction, float face ) {
		vec2 uv;
		if ( face == 0.0 ) {
			uv = vec2( direction.z, direction.y ) / abs( direction.x );
		} else if ( face == 1.0 ) {
			uv = vec2( - direction.x, - direction.z ) / abs( direction.y );
		} else if ( face == 2.0 ) {
			uv = vec2( - direction.x, direction.y ) / abs( direction.z );
		} else if ( face == 3.0 ) {
			uv = vec2( - direction.z, direction.y ) / abs( direction.x );
		} else if ( face == 4.0 ) {
			uv = vec2( - direction.x, direction.z ) / abs( direction.y );
		} else {
			uv = vec2( direction.x, direction.y ) / abs( direction.z );
		}
		return 0.5 * ( uv + 1.0 );
	}
	vec3 bilinearCubeUV( sampler2D envMap, vec3 direction, float mipInt ) {
		float face = getFace( direction );
		float filterInt = max( cubeUV_minMipLevel - mipInt, 0.0 );
		mipInt = max( mipInt, cubeUV_minMipLevel );
		float faceSize = exp2( mipInt );
		highp vec2 uv = getUV( direction, face ) * ( faceSize - 2.0 ) + 1.0;
		if ( face > 2.0 ) {
			uv.y += faceSize;
			face -= 3.0;
		}
		uv.x += face * faceSize;
		uv.x += filterInt * 3.0 * cubeUV_minTileSize;
		uv.y += 4.0 * ( exp2( CUBEUV_MAX_MIP ) - faceSize );
		uv.x *= CUBEUV_TEXEL_WIDTH;
		uv.y *= CUBEUV_TEXEL_HEIGHT;
		#ifdef texture2DGradEXT
			return texture2DGradEXT( envMap, uv, vec2( 0.0 ), vec2( 0.0 ) ).rgb;
		#else
			return texture2D( envMap, uv ).rgb;
		#endif
	}
	#define cubeUV_r0 1.0
	#define cubeUV_v0 0.339
	#define cubeUV_m0 - 2.0
	#define cubeUV_r1 0.8
	#define cubeUV_v1 0.276
	#define cubeUV_m1 - 1.0
	#define cubeUV_r4 0.4
	#define cubeUV_v4 0.046
	#define cubeUV_m4 2.0
	#define cubeUV_r5 0.305
	#define cubeUV_v5 0.016
	#define cubeUV_m5 3.0
	#define cubeUV_r6 0.21
	#define cubeUV_v6 0.0038
	#define cubeUV_m6 4.0
	float roughnessToMip( float roughness ) {
		float mip = 0.0;
		if ( roughness >= cubeUV_r1 ) {
			mip = ( cubeUV_r0 - roughness ) * ( cubeUV_m1 - cubeUV_m0 ) / ( cubeUV_r0 - cubeUV_r1 ) + cubeUV_m0;
		} else if ( roughness >= cubeUV_r4 ) {
			mip = ( cubeUV_r1 - roughness ) * ( cubeUV_m4 - cubeUV_m1 ) / ( cubeUV_r1 - cubeUV_r4 ) + cubeUV_m1;
		} else if ( roughness >= cubeUV_r5 ) {
			mip = ( cubeUV_r4 - roughness ) * ( cubeUV_m5 - cubeUV_m4 ) / ( cubeUV_r4 - cubeUV_r5 ) + cubeUV_m4;
		} else if ( roughness >= cubeUV_r6 ) {
			mip = ( cubeUV_r5 - roughness ) * ( cubeUV_m6 - cubeUV_m5 ) / ( cubeUV_r5 - cubeUV_r6 ) + cubeUV_m5;
		} else {
			mip = - 2.0 * log2( 1.16 * roughness );		}
		return mip;
	}
	vec4 textureCubeUV( sampler2D envMap, vec3 sampleDir, float roughness ) {
		float mip = clamp( roughnessToMip( roughness ), cubeUV_m0, CUBEUV_MAX_MIP );
		float mipF = fract( mip );
		float mipInt = floor( mip );
		vec3 color0 = bilinearCubeUV( envMap, sampleDir, mipInt );
		if ( mipF == 0.0 ) {
			return vec4( color0, 1.0 );
		} else {
			vec3 color1 = bilinearCubeUV( envMap, sampleDir, mipInt + 1.0 );
			return vec4( mix( color0, color1, mipF ), 1.0 );
		}
	}
#endif`,defaultnormal_vertex=`vec3 transformedNormal = objectNormal;
#ifdef USE_INSTANCING
	mat3 m = mat3( instanceMatrix );
	transformedNormal /= vec3( dot( m[ 0 ], m[ 0 ] ), dot( m[ 1 ], m[ 1 ] ), dot( m[ 2 ], m[ 2 ] ) );
	transformedNormal = m * transformedNormal;
#endif
transformedNormal = normalMatrix * transformedNormal;
#ifdef FLIP_SIDED
	transformedNormal = - transformedNormal;
#endif
#ifdef USE_TANGENT
	vec3 transformedTangent = ( modelViewMatrix * vec4( objectTangent, 0.0 ) ).xyz;
	#ifdef FLIP_SIDED
		transformedTangent = - transformedTangent;
	#endif
#endif`,displacementmap_pars_vertex=`#ifdef USE_DISPLACEMENTMAP
	uniform sampler2D displacementMap;
	uniform float displacementScale;
	uniform float displacementBias;
#endif`,displacementmap_vertex=`#ifdef USE_DISPLACEMENTMAP
	transformed += normalize( objectNormal ) * ( texture2D( displacementMap, vUv ).x * displacementScale + displacementBias );
#endif`,emissivemap_fragment=`#ifdef USE_EMISSIVEMAP
	vec4 emissiveColor = texture2D( emissiveMap, vUv );
	totalEmissiveRadiance *= emissiveColor.rgb;
#endif`,emissivemap_pars_fragment=`#ifdef USE_EMISSIVEMAP
	uniform sampler2D emissiveMap;
#endif`,encodings_fragment="gl_FragColor = linearToOutputTexel( gl_FragColor );",encodings_pars_fragment=`vec4 LinearToLinear( in vec4 value ) {
	return value;
}
vec4 LinearTosRGB( in vec4 value ) {
	return vec4( mix( pow( value.rgb, vec3( 0.41666 ) ) * 1.055 - vec3( 0.055 ), value.rgb * 12.92, vec3( lessThanEqual( value.rgb, vec3( 0.0031308 ) ) ) ), value.a );
}`,envmap_fragment=`#ifdef USE_ENVMAP
	#ifdef ENV_WORLDPOS
		vec3 cameraToFrag;
		if ( isOrthographic ) {
			cameraToFrag = normalize( vec3( - viewMatrix[ 0 ][ 2 ], - viewMatrix[ 1 ][ 2 ], - viewMatrix[ 2 ][ 2 ] ) );
		} else {
			cameraToFrag = normalize( vWorldPosition - cameraPosition );
		}
		vec3 worldNormal = inverseTransformDirection( normal, viewMatrix );
		#ifdef ENVMAP_MODE_REFLECTION
			vec3 reflectVec = reflect( cameraToFrag, worldNormal );
		#else
			vec3 reflectVec = refract( cameraToFrag, worldNormal, refractionRatio );
		#endif
	#else
		vec3 reflectVec = vReflect;
	#endif
	#ifdef ENVMAP_TYPE_CUBE
		vec4 envColor = textureCube( envMap, vec3( flipEnvMap * reflectVec.x, reflectVec.yz ) );
	#else
		vec4 envColor = vec4( 0.0 );
	#endif
	#ifdef ENVMAP_BLENDING_MULTIPLY
		outgoingLight = mix( outgoingLight, outgoingLight * envColor.xyz, specularStrength * reflectivity );
	#elif defined( ENVMAP_BLENDING_MIX )
		outgoingLight = mix( outgoingLight, envColor.xyz, specularStrength * reflectivity );
	#elif defined( ENVMAP_BLENDING_ADD )
		outgoingLight += envColor.xyz * specularStrength * reflectivity;
	#endif
#endif`,envmap_common_pars_fragment=`#ifdef USE_ENVMAP
	uniform float envMapIntensity;
	uniform float flipEnvMap;
	#ifdef ENVMAP_TYPE_CUBE
		uniform samplerCube envMap;
	#else
		uniform sampler2D envMap;
	#endif
	
#endif`,envmap_pars_fragment=`#ifdef USE_ENVMAP
	uniform float reflectivity;
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		varying vec3 vWorldPosition;
		uniform float refractionRatio;
	#else
		varying vec3 vReflect;
	#endif
#endif`,envmap_pars_vertex=`#ifdef USE_ENVMAP
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		
		varying vec3 vWorldPosition;
	#else
		varying vec3 vReflect;
		uniform float refractionRatio;
	#endif
#endif`,envmap_vertex=`#ifdef USE_ENVMAP
	#ifdef ENV_WORLDPOS
		vWorldPosition = worldPosition.xyz;
	#else
		vec3 cameraToVertex;
		if ( isOrthographic ) {
			cameraToVertex = normalize( vec3( - viewMatrix[ 0 ][ 2 ], - viewMatrix[ 1 ][ 2 ], - viewMatrix[ 2 ][ 2 ] ) );
		} else {
			cameraToVertex = normalize( worldPosition.xyz - cameraPosition );
		}
		vec3 worldNormal = inverseTransformDirection( transformedNormal, viewMatrix );
		#ifdef ENVMAP_MODE_REFLECTION
			vReflect = reflect( cameraToVertex, worldNormal );
		#else
			vReflect = refract( cameraToVertex, worldNormal, refractionRatio );
		#endif
	#endif
#endif`,fog_vertex=`#ifdef USE_FOG
	vFogDepth = - mvPosition.z;
#endif`,fog_pars_vertex=`#ifdef USE_FOG
	varying float vFogDepth;
#endif`,fog_fragment=`#ifdef USE_FOG
	#ifdef FOG_EXP2
		float fogFactor = 1.0 - exp( - fogDensity * fogDensity * vFogDepth * vFogDepth );
	#else
		float fogFactor = smoothstep( fogNear, fogFar, vFogDepth );
	#endif
	gl_FragColor.rgb = mix( gl_FragColor.rgb, fogColor, fogFactor );
#endif`,fog_pars_fragment=`#ifdef USE_FOG
	uniform vec3 fogColor;
	varying float vFogDepth;
	#ifdef FOG_EXP2
		uniform float fogDensity;
	#else
		uniform float fogNear;
		uniform float fogFar;
	#endif
#endif`,gradientmap_pars_fragment=`#ifdef USE_GRADIENTMAP
	uniform sampler2D gradientMap;
#endif
vec3 getGradientIrradiance( vec3 normal, vec3 lightDirection ) {
	float dotNL = dot( normal, lightDirection );
	vec2 coord = vec2( dotNL * 0.5 + 0.5, 0.0 );
	#ifdef USE_GRADIENTMAP
		return vec3( texture2D( gradientMap, coord ).r );
	#else
		vec2 fw = fwidth( coord ) * 0.5;
		return mix( vec3( 0.7 ), vec3( 1.0 ), smoothstep( 0.7 - fw.x, 0.7 + fw.x, coord.x ) );
	#endif
}`,lightmap_fragment=`#ifdef USE_LIGHTMAP
	vec4 lightMapTexel = texture2D( lightMap, vUv2 );
	vec3 lightMapIrradiance = lightMapTexel.rgb * lightMapIntensity;
	reflectedLight.indirectDiffuse += lightMapIrradiance;
#endif`,lightmap_pars_fragment=`#ifdef USE_LIGHTMAP
	uniform sampler2D lightMap;
	uniform float lightMapIntensity;
#endif`,lights_lambert_fragment=`LambertMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularStrength = specularStrength;`,lights_lambert_pars_fragment=`varying vec3 vViewPosition;
struct LambertMaterial {
	vec3 diffuseColor;
	float specularStrength;
};
void RE_Direct_Lambert( const in IncidentLight directLight, const in GeometricContext geometry, const in LambertMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometry.normal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Lambert( const in vec3 irradiance, const in GeometricContext geometry, const in LambertMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_Lambert
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Lambert`,lights_pars_begin=`uniform bool receiveShadow;
uniform vec3 ambientLightColor;
uniform vec3 lightProbe[ 9 ];
vec3 shGetIrradianceAt( in vec3 normal, in vec3 shCoefficients[ 9 ] ) {
	float x = normal.x, y = normal.y, z = normal.z;
	vec3 result = shCoefficients[ 0 ] * 0.886227;
	result += shCoefficients[ 1 ] * 2.0 * 0.511664 * y;
	result += shCoefficients[ 2 ] * 2.0 * 0.511664 * z;
	result += shCoefficients[ 3 ] * 2.0 * 0.511664 * x;
	result += shCoefficients[ 4 ] * 2.0 * 0.429043 * x * y;
	result += shCoefficients[ 5 ] * 2.0 * 0.429043 * y * z;
	result += shCoefficients[ 6 ] * ( 0.743125 * z * z - 0.247708 );
	result += shCoefficients[ 7 ] * 2.0 * 0.429043 * x * z;
	result += shCoefficients[ 8 ] * 0.429043 * ( x * x - y * y );
	return result;
}
vec3 getLightProbeIrradiance( const in vec3 lightProbe[ 9 ], const in vec3 normal ) {
	vec3 worldNormal = inverseTransformDirection( normal, viewMatrix );
	vec3 irradiance = shGetIrradianceAt( worldNormal, lightProbe );
	return irradiance;
}
vec3 getAmbientLightIrradiance( const in vec3 ambientLightColor ) {
	vec3 irradiance = ambientLightColor;
	return irradiance;
}
float getDistanceAttenuation( const in float lightDistance, const in float cutoffDistance, const in float decayExponent ) {
	#if defined ( PHYSICALLY_CORRECT_LIGHTS )
		float distanceFalloff = 1.0 / max( pow( lightDistance, decayExponent ), 0.01 );
		if ( cutoffDistance > 0.0 ) {
			distanceFalloff *= pow2( saturate( 1.0 - pow4( lightDistance / cutoffDistance ) ) );
		}
		return distanceFalloff;
	#else
		if ( cutoffDistance > 0.0 && decayExponent > 0.0 ) {
			return pow( saturate( - lightDistance / cutoffDistance + 1.0 ), decayExponent );
		}
		return 1.0;
	#endif
}
float getSpotAttenuation( const in float coneCosine, const in float penumbraCosine, const in float angleCosine ) {
	return smoothstep( coneCosine, penumbraCosine, angleCosine );
}
#if NUM_DIR_LIGHTS > 0
	struct DirectionalLight {
		vec3 direction;
		vec3 color;
	};
	uniform DirectionalLight directionalLights[ NUM_DIR_LIGHTS ];
	void getDirectionalLightInfo( const in DirectionalLight directionalLight, const in GeometricContext geometry, out IncidentLight light ) {
		light.color = directionalLight.color;
		light.direction = directionalLight.direction;
		light.visible = true;
	}
#endif
#if NUM_POINT_LIGHTS > 0
	struct PointLight {
		vec3 position;
		vec3 color;
		float distance;
		float decay;
	};
	uniform PointLight pointLights[ NUM_POINT_LIGHTS ];
	void getPointLightInfo( const in PointLight pointLight, const in GeometricContext geometry, out IncidentLight light ) {
		vec3 lVector = pointLight.position - geometry.position;
		light.direction = normalize( lVector );
		float lightDistance = length( lVector );
		light.color = pointLight.color;
		light.color *= getDistanceAttenuation( lightDistance, pointLight.distance, pointLight.decay );
		light.visible = ( light.color != vec3( 0.0 ) );
	}
#endif
#if NUM_SPOT_LIGHTS > 0
	struct SpotLight {
		vec3 position;
		vec3 direction;
		vec3 color;
		float distance;
		float decay;
		float coneCos;
		float penumbraCos;
	};
	uniform SpotLight spotLights[ NUM_SPOT_LIGHTS ];
	void getSpotLightInfo( const in SpotLight spotLight, const in GeometricContext geometry, out IncidentLight light ) {
		vec3 lVector = spotLight.position - geometry.position;
		light.direction = normalize( lVector );
		float angleCos = dot( light.direction, spotLight.direction );
		float spotAttenuation = getSpotAttenuation( spotLight.coneCos, spotLight.penumbraCos, angleCos );
		if ( spotAttenuation > 0.0 ) {
			float lightDistance = length( lVector );
			light.color = spotLight.color * spotAttenuation;
			light.color *= getDistanceAttenuation( lightDistance, spotLight.distance, spotLight.decay );
			light.visible = ( light.color != vec3( 0.0 ) );
		} else {
			light.color = vec3( 0.0 );
			light.visible = false;
		}
	}
#endif
#if NUM_RECT_AREA_LIGHTS > 0
	struct RectAreaLight {
		vec3 color;
		vec3 position;
		vec3 halfWidth;
		vec3 halfHeight;
	};
	uniform sampler2D ltc_1;	uniform sampler2D ltc_2;
	uniform RectAreaLight rectAreaLights[ NUM_RECT_AREA_LIGHTS ];
#endif
#if NUM_HEMI_LIGHTS > 0
	struct HemisphereLight {
		vec3 direction;
		vec3 skyColor;
		vec3 groundColor;
	};
	uniform HemisphereLight hemisphereLights[ NUM_HEMI_LIGHTS ];
	vec3 getHemisphereLightIrradiance( const in HemisphereLight hemiLight, const in vec3 normal ) {
		float dotNL = dot( normal, hemiLight.direction );
		float hemiDiffuseWeight = 0.5 * dotNL + 0.5;
		vec3 irradiance = mix( hemiLight.groundColor, hemiLight.skyColor, hemiDiffuseWeight );
		return irradiance;
	}
#endif`,envmap_physical_pars_fragment=`#if defined( USE_ENVMAP )
	vec3 getIBLIrradiance( const in vec3 normal ) {
		#if defined( ENVMAP_TYPE_CUBE_UV )
			vec3 worldNormal = inverseTransformDirection( normal, viewMatrix );
			vec4 envMapColor = textureCubeUV( envMap, worldNormal, 1.0 );
			return PI * envMapColor.rgb * envMapIntensity;
		#else
			return vec3( 0.0 );
		#endif
	}
	vec3 getIBLRadiance( const in vec3 viewDir, const in vec3 normal, const in float roughness ) {
		#if defined( ENVMAP_TYPE_CUBE_UV )
			vec3 reflectVec = reflect( - viewDir, normal );
			reflectVec = normalize( mix( reflectVec, normal, roughness * roughness) );
			reflectVec = inverseTransformDirection( reflectVec, viewMatrix );
			vec4 envMapColor = textureCubeUV( envMap, reflectVec, roughness );
			return envMapColor.rgb * envMapIntensity;
		#else
			return vec3( 0.0 );
		#endif
	}
#endif`,lights_toon_fragment=`ToonMaterial material;
material.diffuseColor = diffuseColor.rgb;`,lights_toon_pars_fragment=`varying vec3 vViewPosition;
struct ToonMaterial {
	vec3 diffuseColor;
};
void RE_Direct_Toon( const in IncidentLight directLight, const in GeometricContext geometry, const in ToonMaterial material, inout ReflectedLight reflectedLight ) {
	vec3 irradiance = getGradientIrradiance( geometry.normal, directLight.direction ) * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Toon( const in vec3 irradiance, const in GeometricContext geometry, const in ToonMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_Toon
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Toon`,lights_phong_fragment=`BlinnPhongMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularColor = specular;
material.specularShininess = shininess;
material.specularStrength = specularStrength;`,lights_phong_pars_fragment=`varying vec3 vViewPosition;
struct BlinnPhongMaterial {
	vec3 diffuseColor;
	vec3 specularColor;
	float specularShininess;
	float specularStrength;
};
void RE_Direct_BlinnPhong( const in IncidentLight directLight, const in GeometricContext geometry, const in BlinnPhongMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometry.normal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
	reflectedLight.directSpecular += irradiance * BRDF_BlinnPhong( directLight.direction, geometry.viewDir, geometry.normal, material.specularColor, material.specularShininess ) * material.specularStrength;
}
void RE_IndirectDiffuse_BlinnPhong( const in vec3 irradiance, const in GeometricContext geometry, const in BlinnPhongMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_BlinnPhong
#define RE_IndirectDiffuse		RE_IndirectDiffuse_BlinnPhong`,lights_physical_fragment=`PhysicalMaterial material;
material.diffuseColor = diffuseColor.rgb * ( 1.0 - metalnessFactor );
vec3 dxy = max( abs( dFdx( geometryNormal ) ), abs( dFdy( geometryNormal ) ) );
float geometryRoughness = max( max( dxy.x, dxy.y ), dxy.z );
material.roughness = max( roughnessFactor, 0.0525 );material.roughness += geometryRoughness;
material.roughness = min( material.roughness, 1.0 );
#ifdef IOR
	material.ior = ior;
	#ifdef SPECULAR
		float specularIntensityFactor = specularIntensity;
		vec3 specularColorFactor = specularColor;
		#ifdef USE_SPECULARINTENSITYMAP
			specularIntensityFactor *= texture2D( specularIntensityMap, vUv ).a;
		#endif
		#ifdef USE_SPECULARCOLORMAP
			specularColorFactor *= texture2D( specularColorMap, vUv ).rgb;
		#endif
		material.specularF90 = mix( specularIntensityFactor, 1.0, metalnessFactor );
	#else
		float specularIntensityFactor = 1.0;
		vec3 specularColorFactor = vec3( 1.0 );
		material.specularF90 = 1.0;
	#endif
	material.specularColor = mix( min( pow2( ( material.ior - 1.0 ) / ( material.ior + 1.0 ) ) * specularColorFactor, vec3( 1.0 ) ) * specularIntensityFactor, diffuseColor.rgb, metalnessFactor );
#else
	material.specularColor = mix( vec3( 0.04 ), diffuseColor.rgb, metalnessFactor );
	material.specularF90 = 1.0;
#endif
#ifdef USE_CLEARCOAT
	material.clearcoat = clearcoat;
	material.clearcoatRoughness = clearcoatRoughness;
	material.clearcoatF0 = vec3( 0.04 );
	material.clearcoatF90 = 1.0;
	#ifdef USE_CLEARCOATMAP
		material.clearcoat *= texture2D( clearcoatMap, vUv ).x;
	#endif
	#ifdef USE_CLEARCOAT_ROUGHNESSMAP
		material.clearcoatRoughness *= texture2D( clearcoatRoughnessMap, vUv ).y;
	#endif
	material.clearcoat = saturate( material.clearcoat );	material.clearcoatRoughness = max( material.clearcoatRoughness, 0.0525 );
	material.clearcoatRoughness += geometryRoughness;
	material.clearcoatRoughness = min( material.clearcoatRoughness, 1.0 );
#endif
#ifdef USE_IRIDESCENCE
	material.iridescence = iridescence;
	material.iridescenceIOR = iridescenceIOR;
	#ifdef USE_IRIDESCENCEMAP
		material.iridescence *= texture2D( iridescenceMap, vUv ).r;
	#endif
	#ifdef USE_IRIDESCENCE_THICKNESSMAP
		material.iridescenceThickness = (iridescenceThicknessMaximum - iridescenceThicknessMinimum) * texture2D( iridescenceThicknessMap, vUv ).g + iridescenceThicknessMinimum;
	#else
		material.iridescenceThickness = iridescenceThicknessMaximum;
	#endif
#endif
#ifdef USE_SHEEN
	material.sheenColor = sheenColor;
	#ifdef USE_SHEENCOLORMAP
		material.sheenColor *= texture2D( sheenColorMap, vUv ).rgb;
	#endif
	material.sheenRoughness = clamp( sheenRoughness, 0.07, 1.0 );
	#ifdef USE_SHEENROUGHNESSMAP
		material.sheenRoughness *= texture2D( sheenRoughnessMap, vUv ).a;
	#endif
#endif`,lights_physical_pars_fragment=`struct PhysicalMaterial {
	vec3 diffuseColor;
	float roughness;
	vec3 specularColor;
	float specularF90;
	#ifdef USE_CLEARCOAT
		float clearcoat;
		float clearcoatRoughness;
		vec3 clearcoatF0;
		float clearcoatF90;
	#endif
	#ifdef USE_IRIDESCENCE
		float iridescence;
		float iridescenceIOR;
		float iridescenceThickness;
		vec3 iridescenceFresnel;
		vec3 iridescenceF0;
	#endif
	#ifdef USE_SHEEN
		vec3 sheenColor;
		float sheenRoughness;
	#endif
	#ifdef IOR
		float ior;
	#endif
	#ifdef USE_TRANSMISSION
		float transmission;
		float transmissionAlpha;
		float thickness;
		float attenuationDistance;
		vec3 attenuationColor;
	#endif
};
vec3 clearcoatSpecular = vec3( 0.0 );
vec3 sheenSpecular = vec3( 0.0 );
float IBLSheenBRDF( const in vec3 normal, const in vec3 viewDir, const in float roughness ) {
	float dotNV = saturate( dot( normal, viewDir ) );
	float r2 = roughness * roughness;
	float a = roughness < 0.25 ? -339.2 * r2 + 161.4 * roughness - 25.9 : -8.48 * r2 + 14.3 * roughness - 9.95;
	float b = roughness < 0.25 ? 44.0 * r2 - 23.7 * roughness + 3.26 : 1.97 * r2 - 3.27 * roughness + 0.72;
	float DG = exp( a * dotNV + b ) + ( roughness < 0.25 ? 0.0 : 0.1 * ( roughness - 0.25 ) );
	return saturate( DG * RECIPROCAL_PI );
}
vec2 DFGApprox( const in vec3 normal, const in vec3 viewDir, const in float roughness ) {
	float dotNV = saturate( dot( normal, viewDir ) );
	const vec4 c0 = vec4( - 1, - 0.0275, - 0.572, 0.022 );
	const vec4 c1 = vec4( 1, 0.0425, 1.04, - 0.04 );
	vec4 r = roughness * c0 + c1;
	float a004 = min( r.x * r.x, exp2( - 9.28 * dotNV ) ) * r.x + r.y;
	vec2 fab = vec2( - 1.04, 1.04 ) * a004 + r.zw;
	return fab;
}
vec3 EnvironmentBRDF( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float roughness ) {
	vec2 fab = DFGApprox( normal, viewDir, roughness );
	return specularColor * fab.x + specularF90 * fab.y;
}
#ifdef USE_IRIDESCENCE
void computeMultiscatteringIridescence( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float iridescence, const in vec3 iridescenceF0, const in float roughness, inout vec3 singleScatter, inout vec3 multiScatter ) {
#else
void computeMultiscattering( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float roughness, inout vec3 singleScatter, inout vec3 multiScatter ) {
#endif
	vec2 fab = DFGApprox( normal, viewDir, roughness );
	#ifdef USE_IRIDESCENCE
		vec3 Fr = mix( specularColor, iridescenceF0, iridescence );
	#else
		vec3 Fr = specularColor;
	#endif
	vec3 FssEss = Fr * fab.x + specularF90 * fab.y;
	float Ess = fab.x + fab.y;
	float Ems = 1.0 - Ess;
	vec3 Favg = Fr + ( 1.0 - Fr ) * 0.047619;	vec3 Fms = FssEss * Favg / ( 1.0 - Ems * Favg );
	singleScatter += FssEss;
	multiScatter += Fms * Ems;
}
#if NUM_RECT_AREA_LIGHTS > 0
	void RE_Direct_RectArea_Physical( const in RectAreaLight rectAreaLight, const in GeometricContext geometry, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
		vec3 normal = geometry.normal;
		vec3 viewDir = geometry.viewDir;
		vec3 position = geometry.position;
		vec3 lightPos = rectAreaLight.position;
		vec3 halfWidth = rectAreaLight.halfWidth;
		vec3 halfHeight = rectAreaLight.halfHeight;
		vec3 lightColor = rectAreaLight.color;
		float roughness = material.roughness;
		vec3 rectCoords[ 4 ];
		rectCoords[ 0 ] = lightPos + halfWidth - halfHeight;		rectCoords[ 1 ] = lightPos - halfWidth - halfHeight;
		rectCoords[ 2 ] = lightPos - halfWidth + halfHeight;
		rectCoords[ 3 ] = lightPos + halfWidth + halfHeight;
		vec2 uv = LTC_Uv( normal, viewDir, roughness );
		vec4 t1 = texture2D( ltc_1, uv );
		vec4 t2 = texture2D( ltc_2, uv );
		mat3 mInv = mat3(
			vec3( t1.x, 0, t1.y ),
			vec3(    0, 1,    0 ),
			vec3( t1.z, 0, t1.w )
		);
		vec3 fresnel = ( material.specularColor * t2.x + ( vec3( 1.0 ) - material.specularColor ) * t2.y );
		reflectedLight.directSpecular += lightColor * fresnel * LTC_Evaluate( normal, viewDir, position, mInv, rectCoords );
		reflectedLight.directDiffuse += lightColor * material.diffuseColor * LTC_Evaluate( normal, viewDir, position, mat3( 1.0 ), rectCoords );
	}
#endif
void RE_Direct_Physical( const in IncidentLight directLight, const in GeometricContext geometry, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometry.normal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	#ifdef USE_CLEARCOAT
		float dotNLcc = saturate( dot( geometry.clearcoatNormal, directLight.direction ) );
		vec3 ccIrradiance = dotNLcc * directLight.color;
		clearcoatSpecular += ccIrradiance * BRDF_GGX( directLight.direction, geometry.viewDir, geometry.clearcoatNormal, material.clearcoatF0, material.clearcoatF90, material.clearcoatRoughness );
	#endif
	#ifdef USE_SHEEN
		sheenSpecular += irradiance * BRDF_Sheen( directLight.direction, geometry.viewDir, geometry.normal, material.sheenColor, material.sheenRoughness );
	#endif
	#ifdef USE_IRIDESCENCE
		reflectedLight.directSpecular += irradiance * BRDF_GGX_Iridescence( directLight.direction, geometry.viewDir, geometry.normal, material.specularColor, material.specularF90, material.iridescence, material.iridescenceFresnel, material.roughness );
	#else
		reflectedLight.directSpecular += irradiance * BRDF_GGX( directLight.direction, geometry.viewDir, geometry.normal, material.specularColor, material.specularF90, material.roughness );
	#endif
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Physical( const in vec3 irradiance, const in GeometricContext geometry, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectSpecular_Physical( const in vec3 radiance, const in vec3 irradiance, const in vec3 clearcoatRadiance, const in GeometricContext geometry, const in PhysicalMaterial material, inout ReflectedLight reflectedLight) {
	#ifdef USE_CLEARCOAT
		clearcoatSpecular += clearcoatRadiance * EnvironmentBRDF( geometry.clearcoatNormal, geometry.viewDir, material.clearcoatF0, material.clearcoatF90, material.clearcoatRoughness );
	#endif
	#ifdef USE_SHEEN
		sheenSpecular += irradiance * material.sheenColor * IBLSheenBRDF( geometry.normal, geometry.viewDir, material.sheenRoughness );
	#endif
	vec3 singleScattering = vec3( 0.0 );
	vec3 multiScattering = vec3( 0.0 );
	vec3 cosineWeightedIrradiance = irradiance * RECIPROCAL_PI;
	#ifdef USE_IRIDESCENCE
		computeMultiscatteringIridescence( geometry.normal, geometry.viewDir, material.specularColor, material.specularF90, material.iridescence, material.iridescenceFresnel, material.roughness, singleScattering, multiScattering );
	#else
		computeMultiscattering( geometry.normal, geometry.viewDir, material.specularColor, material.specularF90, material.roughness, singleScattering, multiScattering );
	#endif
	vec3 totalScattering = singleScattering + multiScattering;
	vec3 diffuse = material.diffuseColor * ( 1.0 - max( max( totalScattering.r, totalScattering.g ), totalScattering.b ) );
	reflectedLight.indirectSpecular += radiance * singleScattering;
	reflectedLight.indirectSpecular += multiScattering * cosineWeightedIrradiance;
	reflectedLight.indirectDiffuse += diffuse * cosineWeightedIrradiance;
}
#define RE_Direct				RE_Direct_Physical
#define RE_Direct_RectArea		RE_Direct_RectArea_Physical
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Physical
#define RE_IndirectSpecular		RE_IndirectSpecular_Physical
float computeSpecularOcclusion( const in float dotNV, const in float ambientOcclusion, const in float roughness ) {
	return saturate( pow( dotNV + ambientOcclusion, exp2( - 16.0 * roughness - 1.0 ) ) - 1.0 + ambientOcclusion );
}`,lights_fragment_begin=`
GeometricContext geometry;
geometry.position = - vViewPosition;
geometry.normal = normal;
geometry.viewDir = ( isOrthographic ) ? vec3( 0, 0, 1 ) : normalize( vViewPosition );
#ifdef USE_CLEARCOAT
	geometry.clearcoatNormal = clearcoatNormal;
#endif
#ifdef USE_IRIDESCENCE
	float dotNVi = saturate( dot( normal, geometry.viewDir ) );
	if ( material.iridescenceThickness == 0.0 ) {
		material.iridescence = 0.0;
	} else {
		material.iridescence = saturate( material.iridescence );
	}
	if ( material.iridescence > 0.0 ) {
		material.iridescenceFresnel = evalIridescence( 1.0, material.iridescenceIOR, dotNVi, material.iridescenceThickness, material.specularColor );
		material.iridescenceF0 = Schlick_to_F0( material.iridescenceFresnel, 1.0, dotNVi );
	}
#endif
IncidentLight directLight;
#if ( NUM_POINT_LIGHTS > 0 ) && defined( RE_Direct )
	PointLight pointLight;
	#if defined( USE_SHADOWMAP ) && NUM_POINT_LIGHT_SHADOWS > 0
	PointLightShadow pointLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_POINT_LIGHTS; i ++ ) {
		pointLight = pointLights[ i ];
		getPointLightInfo( pointLight, geometry, directLight );
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_POINT_LIGHT_SHADOWS )
		pointLightShadow = pointLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getPointShadow( pointShadowMap[ i ], pointLightShadow.shadowMapSize, pointLightShadow.shadowBias, pointLightShadow.shadowRadius, vPointShadowCoord[ i ], pointLightShadow.shadowCameraNear, pointLightShadow.shadowCameraFar ) : 1.0;
		#endif
		RE_Direct( directLight, geometry, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_SPOT_LIGHTS > 0 ) && defined( RE_Direct )
	SpotLight spotLight;
	vec4 spotColor;
	vec3 spotLightCoord;
	bool inSpotLightMap;
	#if defined( USE_SHADOWMAP ) && NUM_SPOT_LIGHT_SHADOWS > 0
	SpotLightShadow spotLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHTS; i ++ ) {
		spotLight = spotLights[ i ];
		getSpotLightInfo( spotLight, geometry, directLight );
		#if ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS )
		#define SPOT_LIGHT_MAP_INDEX UNROLLED_LOOP_INDEX
		#elif ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
		#define SPOT_LIGHT_MAP_INDEX NUM_SPOT_LIGHT_MAPS
		#else
		#define SPOT_LIGHT_MAP_INDEX ( UNROLLED_LOOP_INDEX - NUM_SPOT_LIGHT_SHADOWS + NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS )
		#endif
		#if ( SPOT_LIGHT_MAP_INDEX < NUM_SPOT_LIGHT_MAPS )
			spotLightCoord = vSpotLightCoord[ i ].xyz / vSpotLightCoord[ i ].w;
			inSpotLightMap = all( lessThan( abs( spotLightCoord * 2. - 1. ), vec3( 1.0 ) ) );
			spotColor = texture2D( spotLightMap[ SPOT_LIGHT_MAP_INDEX ], spotLightCoord.xy );
			directLight.color = inSpotLightMap ? directLight.color * spotColor.rgb : directLight.color;
		#endif
		#undef SPOT_LIGHT_MAP_INDEX
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
		spotLightShadow = spotLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getShadow( spotShadowMap[ i ], spotLightShadow.shadowMapSize, spotLightShadow.shadowBias, spotLightShadow.shadowRadius, vSpotLightCoord[ i ] ) : 1.0;
		#endif
		RE_Direct( directLight, geometry, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_DIR_LIGHTS > 0 ) && defined( RE_Direct )
	DirectionalLight directionalLight;
	#if defined( USE_SHADOWMAP ) && NUM_DIR_LIGHT_SHADOWS > 0
	DirectionalLightShadow directionalLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_DIR_LIGHTS; i ++ ) {
		directionalLight = directionalLights[ i ];
		getDirectionalLightInfo( directionalLight, geometry, directLight );
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_DIR_LIGHT_SHADOWS )
		directionalLightShadow = directionalLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getShadow( directionalShadowMap[ i ], directionalLightShadow.shadowMapSize, directionalLightShadow.shadowBias, directionalLightShadow.shadowRadius, vDirectionalShadowCoord[ i ] ) : 1.0;
		#endif
		RE_Direct( directLight, geometry, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_RECT_AREA_LIGHTS > 0 ) && defined( RE_Direct_RectArea )
	RectAreaLight rectAreaLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_RECT_AREA_LIGHTS; i ++ ) {
		rectAreaLight = rectAreaLights[ i ];
		RE_Direct_RectArea( rectAreaLight, geometry, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if defined( RE_IndirectDiffuse )
	vec3 iblIrradiance = vec3( 0.0 );
	vec3 irradiance = getAmbientLightIrradiance( ambientLightColor );
	irradiance += getLightProbeIrradiance( lightProbe, geometry.normal );
	#if ( NUM_HEMI_LIGHTS > 0 )
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_HEMI_LIGHTS; i ++ ) {
			irradiance += getHemisphereLightIrradiance( hemisphereLights[ i ], geometry.normal );
		}
		#pragma unroll_loop_end
	#endif
#endif
#if defined( RE_IndirectSpecular )
	vec3 radiance = vec3( 0.0 );
	vec3 clearcoatRadiance = vec3( 0.0 );
#endif`,lights_fragment_maps=`#if defined( RE_IndirectDiffuse )
	#ifdef USE_LIGHTMAP
		vec4 lightMapTexel = texture2D( lightMap, vUv2 );
		vec3 lightMapIrradiance = lightMapTexel.rgb * lightMapIntensity;
		irradiance += lightMapIrradiance;
	#endif
	#if defined( USE_ENVMAP ) && defined( STANDARD ) && defined( ENVMAP_TYPE_CUBE_UV )
		iblIrradiance += getIBLIrradiance( geometry.normal );
	#endif
#endif
#if defined( USE_ENVMAP ) && defined( RE_IndirectSpecular )
	radiance += getIBLRadiance( geometry.viewDir, geometry.normal, material.roughness );
	#ifdef USE_CLEARCOAT
		clearcoatRadiance += getIBLRadiance( geometry.viewDir, geometry.clearcoatNormal, material.clearcoatRoughness );
	#endif
#endif`,lights_fragment_end=`#if defined( RE_IndirectDiffuse )
	RE_IndirectDiffuse( irradiance, geometry, material, reflectedLight );
#endif
#if defined( RE_IndirectSpecular )
	RE_IndirectSpecular( radiance, iblIrradiance, clearcoatRadiance, geometry, material, reflectedLight );
#endif`,logdepthbuf_fragment=`#if defined( USE_LOGDEPTHBUF ) && defined( USE_LOGDEPTHBUF_EXT )
	gl_FragDepthEXT = vIsPerspective == 0.0 ? gl_FragCoord.z : log2( vFragDepth ) * logDepthBufFC * 0.5;
#endif`,logdepthbuf_pars_fragment=`#if defined( USE_LOGDEPTHBUF ) && defined( USE_LOGDEPTHBUF_EXT )
	uniform float logDepthBufFC;
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,logdepthbuf_pars_vertex=`#ifdef USE_LOGDEPTHBUF
	#ifdef USE_LOGDEPTHBUF_EXT
		varying float vFragDepth;
		varying float vIsPerspective;
	#else
		uniform float logDepthBufFC;
	#endif
#endif`,logdepthbuf_vertex=`#ifdef USE_LOGDEPTHBUF
	#ifdef USE_LOGDEPTHBUF_EXT
		vFragDepth = 1.0 + gl_Position.w;
		vIsPerspective = float( isPerspectiveMatrix( projectionMatrix ) );
	#else
		if ( isPerspectiveMatrix( projectionMatrix ) ) {
			gl_Position.z = log2( max( EPSILON, gl_Position.w + 1.0 ) ) * logDepthBufFC - 1.0;
			gl_Position.z *= gl_Position.w;
		}
	#endif
#endif`,map_fragment=`#ifdef USE_MAP
	vec4 sampledDiffuseColor = texture2D( map, vUv );
	#ifdef DECODE_VIDEO_TEXTURE
		sampledDiffuseColor = vec4( mix( pow( sampledDiffuseColor.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), sampledDiffuseColor.rgb * 0.0773993808, vec3( lessThanEqual( sampledDiffuseColor.rgb, vec3( 0.04045 ) ) ) ), sampledDiffuseColor.w );
	#endif
	diffuseColor *= sampledDiffuseColor;
#endif`,map_pars_fragment=`#ifdef USE_MAP
	uniform sampler2D map;
#endif`,map_particle_fragment=`#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
	vec2 uv = ( uvTransform * vec3( gl_PointCoord.x, 1.0 - gl_PointCoord.y, 1 ) ).xy;
#endif
#ifdef USE_MAP
	diffuseColor *= texture2D( map, uv );
#endif
#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, uv ).g;
#endif`,map_particle_pars_fragment=`#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
	uniform mat3 uvTransform;
#endif
#ifdef USE_MAP
	uniform sampler2D map;
#endif
#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,metalnessmap_fragment=`float metalnessFactor = metalness;
#ifdef USE_METALNESSMAP
	vec4 texelMetalness = texture2D( metalnessMap, vUv );
	metalnessFactor *= texelMetalness.b;
#endif`,metalnessmap_pars_fragment=`#ifdef USE_METALNESSMAP
	uniform sampler2D metalnessMap;
#endif`,morphcolor_vertex=`#if defined( USE_MORPHCOLORS ) && defined( MORPHTARGETS_TEXTURE )
	vColor *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		#if defined( USE_COLOR_ALPHA )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ) * morphTargetInfluences[ i ];
		#elif defined( USE_COLOR )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ).rgb * morphTargetInfluences[ i ];
		#endif
	}
#endif`,morphnormal_vertex=`#ifdef USE_MORPHNORMALS
	objectNormal *= morphTargetBaseInfluence;
	#ifdef MORPHTARGETS_TEXTURE
		for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
			if ( morphTargetInfluences[ i ] != 0.0 ) objectNormal += getMorph( gl_VertexID, i, 1 ).xyz * morphTargetInfluences[ i ];
		}
	#else
		objectNormal += morphNormal0 * morphTargetInfluences[ 0 ];
		objectNormal += morphNormal1 * morphTargetInfluences[ 1 ];
		objectNormal += morphNormal2 * morphTargetInfluences[ 2 ];
		objectNormal += morphNormal3 * morphTargetInfluences[ 3 ];
	#endif
#endif`,morphtarget_pars_vertex=`#ifdef USE_MORPHTARGETS
	uniform float morphTargetBaseInfluence;
	#ifdef MORPHTARGETS_TEXTURE
		uniform float morphTargetInfluences[ MORPHTARGETS_COUNT ];
		uniform sampler2DArray morphTargetsTexture;
		uniform ivec2 morphTargetsTextureSize;
		vec4 getMorph( const in int vertexIndex, const in int morphTargetIndex, const in int offset ) {
			int texelIndex = vertexIndex * MORPHTARGETS_TEXTURE_STRIDE + offset;
			int y = texelIndex / morphTargetsTextureSize.x;
			int x = texelIndex - y * morphTargetsTextureSize.x;
			ivec3 morphUV = ivec3( x, y, morphTargetIndex );
			return texelFetch( morphTargetsTexture, morphUV, 0 );
		}
	#else
		#ifndef USE_MORPHNORMALS
			uniform float morphTargetInfluences[ 8 ];
		#else
			uniform float morphTargetInfluences[ 4 ];
		#endif
	#endif
#endif`,morphtarget_vertex=`#ifdef USE_MORPHTARGETS
	transformed *= morphTargetBaseInfluence;
	#ifdef MORPHTARGETS_TEXTURE
		for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
			if ( morphTargetInfluences[ i ] != 0.0 ) transformed += getMorph( gl_VertexID, i, 0 ).xyz * morphTargetInfluences[ i ];
		}
	#else
		transformed += morphTarget0 * morphTargetInfluences[ 0 ];
		transformed += morphTarget1 * morphTargetInfluences[ 1 ];
		transformed += morphTarget2 * morphTargetInfluences[ 2 ];
		transformed += morphTarget3 * morphTargetInfluences[ 3 ];
		#ifndef USE_MORPHNORMALS
			transformed += morphTarget4 * morphTargetInfluences[ 4 ];
			transformed += morphTarget5 * morphTargetInfluences[ 5 ];
			transformed += morphTarget6 * morphTargetInfluences[ 6 ];
			transformed += morphTarget7 * morphTargetInfluences[ 7 ];
		#endif
	#endif
#endif`,normal_fragment_begin=`float faceDirection = gl_FrontFacing ? 1.0 : - 1.0;
#ifdef FLAT_SHADED
	vec3 fdx = dFdx( vViewPosition );
	vec3 fdy = dFdy( vViewPosition );
	vec3 normal = normalize( cross( fdx, fdy ) );
#else
	vec3 normal = normalize( vNormal );
	#ifdef DOUBLE_SIDED
		normal = normal * faceDirection;
	#endif
	#ifdef USE_TANGENT
		vec3 tangent = normalize( vTangent );
		vec3 bitangent = normalize( vBitangent );
		#ifdef DOUBLE_SIDED
			tangent = tangent * faceDirection;
			bitangent = bitangent * faceDirection;
		#endif
		#if defined( TANGENTSPACE_NORMALMAP ) || defined( USE_CLEARCOAT_NORMALMAP )
			mat3 vTBN = mat3( tangent, bitangent, normal );
		#endif
	#endif
#endif
vec3 geometryNormal = normal;`,normal_fragment_maps=`#ifdef OBJECTSPACE_NORMALMAP
	normal = texture2D( normalMap, vUv ).xyz * 2.0 - 1.0;
	#ifdef FLIP_SIDED
		normal = - normal;
	#endif
	#ifdef DOUBLE_SIDED
		normal = normal * faceDirection;
	#endif
	normal = normalize( normalMatrix * normal );
#elif defined( TANGENTSPACE_NORMALMAP )
	vec3 mapN = texture2D( normalMap, vUv ).xyz * 2.0 - 1.0;
	mapN.xy *= normalScale;
	#ifdef USE_TANGENT
		normal = normalize( vTBN * mapN );
	#else
		normal = perturbNormal2Arb( - vViewPosition, normal, mapN, faceDirection );
	#endif
#elif defined( USE_BUMPMAP )
	normal = perturbNormalArb( - vViewPosition, normal, dHdxy_fwd(), faceDirection );
#endif`,normal_pars_fragment=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,normal_pars_vertex=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,normal_vertex=`#ifndef FLAT_SHADED
	vNormal = normalize( transformedNormal );
	#ifdef USE_TANGENT
		vTangent = normalize( transformedTangent );
		vBitangent = normalize( cross( vNormal, vTangent ) * tangent.w );
	#endif
#endif`,normalmap_pars_fragment=`#ifdef USE_NORMALMAP
	uniform sampler2D normalMap;
	uniform vec2 normalScale;
#endif
#ifdef OBJECTSPACE_NORMALMAP
	uniform mat3 normalMatrix;
#endif
#if ! defined ( USE_TANGENT ) && ( defined ( TANGENTSPACE_NORMALMAP ) || defined ( USE_CLEARCOAT_NORMALMAP ) )
	vec3 perturbNormal2Arb( vec3 eye_pos, vec3 surf_norm, vec3 mapN, float faceDirection ) {
		vec3 q0 = dFdx( eye_pos.xyz );
		vec3 q1 = dFdy( eye_pos.xyz );
		vec2 st0 = dFdx( vUv.st );
		vec2 st1 = dFdy( vUv.st );
		vec3 N = surf_norm;
		vec3 q1perp = cross( q1, N );
		vec3 q0perp = cross( N, q0 );
		vec3 T = q1perp * st0.x + q0perp * st1.x;
		vec3 B = q1perp * st0.y + q0perp * st1.y;
		float det = max( dot( T, T ), dot( B, B ) );
		float scale = ( det == 0.0 ) ? 0.0 : faceDirection * inversesqrt( det );
		return normalize( T * ( mapN.x * scale ) + B * ( mapN.y * scale ) + N * mapN.z );
	}
#endif`,clearcoat_normal_fragment_begin=`#ifdef USE_CLEARCOAT
	vec3 clearcoatNormal = geometryNormal;
#endif`,clearcoat_normal_fragment_maps=`#ifdef USE_CLEARCOAT_NORMALMAP
	vec3 clearcoatMapN = texture2D( clearcoatNormalMap, vUv ).xyz * 2.0 - 1.0;
	clearcoatMapN.xy *= clearcoatNormalScale;
	#ifdef USE_TANGENT
		clearcoatNormal = normalize( vTBN * clearcoatMapN );
	#else
		clearcoatNormal = perturbNormal2Arb( - vViewPosition, clearcoatNormal, clearcoatMapN, faceDirection );
	#endif
#endif`,clearcoat_pars_fragment=`#ifdef USE_CLEARCOATMAP
	uniform sampler2D clearcoatMap;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform sampler2D clearcoatRoughnessMap;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform sampler2D clearcoatNormalMap;
	uniform vec2 clearcoatNormalScale;
#endif`,iridescence_pars_fragment=`#ifdef USE_IRIDESCENCEMAP
	uniform sampler2D iridescenceMap;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform sampler2D iridescenceThicknessMap;
#endif`,output_fragment=`#ifdef OPAQUE
diffuseColor.a = 1.0;
#endif
#ifdef USE_TRANSMISSION
diffuseColor.a *= material.transmissionAlpha + 0.1;
#endif
gl_FragColor = vec4( outgoingLight, diffuseColor.a );`,packing=`vec3 packNormalToRGB( const in vec3 normal ) {
	return normalize( normal ) * 0.5 + 0.5;
}
vec3 unpackRGBToNormal( const in vec3 rgb ) {
	return 2.0 * rgb.xyz - 1.0;
}
const float PackUpscale = 256. / 255.;const float UnpackDownscale = 255. / 256.;
const vec3 PackFactors = vec3( 256. * 256. * 256., 256. * 256., 256. );
const vec4 UnpackFactors = UnpackDownscale / vec4( PackFactors, 1. );
const float ShiftRight8 = 1. / 256.;
vec4 packDepthToRGBA( const in float v ) {
	vec4 r = vec4( fract( v * PackFactors ), v );
	r.yzw -= r.xyz * ShiftRight8;	return r * PackUpscale;
}
float unpackRGBAToDepth( const in vec4 v ) {
	return dot( v, UnpackFactors );
}
vec2 packDepthToRG( in highp float v ) {
	return packDepthToRGBA( v ).yx;
}
float unpackRGToDepth( const in highp vec2 v ) {
	return unpackRGBAToDepth( vec4( v.xy, 0.0, 0.0 ) );
}
vec4 pack2HalfToRGBA( vec2 v ) {
	vec4 r = vec4( v.x, fract( v.x * 255.0 ), v.y, fract( v.y * 255.0 ) );
	return vec4( r.x - r.y / 255.0, r.y, r.z - r.w / 255.0, r.w );
}
vec2 unpackRGBATo2Half( vec4 v ) {
	return vec2( v.x + ( v.y / 255.0 ), v.z + ( v.w / 255.0 ) );
}
float viewZToOrthographicDepth( const in float viewZ, const in float near, const in float far ) {
	return ( viewZ + near ) / ( near - far );
}
float orthographicDepthToViewZ( const in float linearClipZ, const in float near, const in float far ) {
	return linearClipZ * ( near - far ) - near;
}
float viewZToPerspectiveDepth( const in float viewZ, const in float near, const in float far ) {
	return ( ( near + viewZ ) * far ) / ( ( far - near ) * viewZ );
}
float perspectiveDepthToViewZ( const in float invClipZ, const in float near, const in float far ) {
	return ( near * far ) / ( ( far - near ) * invClipZ - far );
}`,premultiplied_alpha_fragment=`#ifdef PREMULTIPLIED_ALPHA
	gl_FragColor.rgb *= gl_FragColor.a;
#endif`,project_vertex=`vec4 mvPosition = vec4( transformed, 1.0 );
#ifdef USE_INSTANCING
	mvPosition = instanceMatrix * mvPosition;
#endif
mvPosition = modelViewMatrix * mvPosition;
gl_Position = projectionMatrix * mvPosition;`,dithering_fragment=`#ifdef DITHERING
	gl_FragColor.rgb = dithering( gl_FragColor.rgb );
#endif`,dithering_pars_fragment=`#ifdef DITHERING
	vec3 dithering( vec3 color ) {
		float grid_position = rand( gl_FragCoord.xy );
		vec3 dither_shift_RGB = vec3( 0.25 / 255.0, -0.25 / 255.0, 0.25 / 255.0 );
		dither_shift_RGB = mix( 2.0 * dither_shift_RGB, -2.0 * dither_shift_RGB, grid_position );
		return color + dither_shift_RGB;
	}
#endif`,roughnessmap_fragment=`float roughnessFactor = roughness;
#ifdef USE_ROUGHNESSMAP
	vec4 texelRoughness = texture2D( roughnessMap, vUv );
	roughnessFactor *= texelRoughness.g;
#endif`,roughnessmap_pars_fragment=`#ifdef USE_ROUGHNESSMAP
	uniform sampler2D roughnessMap;
#endif`,shadowmap_pars_fragment=`#if NUM_SPOT_LIGHT_COORDS > 0
  varying vec4 vSpotLightCoord[ NUM_SPOT_LIGHT_COORDS ];
#endif
#if NUM_SPOT_LIGHT_MAPS > 0
  uniform sampler2D spotLightMap[ NUM_SPOT_LIGHT_MAPS ];
#endif
#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
		uniform sampler2D directionalShadowMap[ NUM_DIR_LIGHT_SHADOWS ];
		varying vec4 vDirectionalShadowCoord[ NUM_DIR_LIGHT_SHADOWS ];
		struct DirectionalLightShadow {
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform DirectionalLightShadow directionalLightShadows[ NUM_DIR_LIGHT_SHADOWS ];
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
		uniform sampler2D spotShadowMap[ NUM_SPOT_LIGHT_SHADOWS ];
		struct SpotLightShadow {
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform SpotLightShadow spotLightShadows[ NUM_SPOT_LIGHT_SHADOWS ];
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		uniform sampler2D pointShadowMap[ NUM_POINT_LIGHT_SHADOWS ];
		varying vec4 vPointShadowCoord[ NUM_POINT_LIGHT_SHADOWS ];
		struct PointLightShadow {
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
			float shadowCameraNear;
			float shadowCameraFar;
		};
		uniform PointLightShadow pointLightShadows[ NUM_POINT_LIGHT_SHADOWS ];
	#endif
	float texture2DCompare( sampler2D depths, vec2 uv, float compare ) {
		return step( compare, unpackRGBAToDepth( texture2D( depths, uv ) ) );
	}
	vec2 texture2DDistribution( sampler2D shadow, vec2 uv ) {
		return unpackRGBATo2Half( texture2D( shadow, uv ) );
	}
	float VSMShadow (sampler2D shadow, vec2 uv, float compare ){
		float occlusion = 1.0;
		vec2 distribution = texture2DDistribution( shadow, uv );
		float hard_shadow = step( compare , distribution.x );
		if (hard_shadow != 1.0 ) {
			float distance = compare - distribution.x ;
			float variance = max( 0.00000, distribution.y * distribution.y );
			float softness_probability = variance / (variance + distance * distance );			softness_probability = clamp( ( softness_probability - 0.3 ) / ( 0.95 - 0.3 ), 0.0, 1.0 );			occlusion = clamp( max( hard_shadow, softness_probability ), 0.0, 1.0 );
		}
		return occlusion;
	}
	float getShadow( sampler2D shadowMap, vec2 shadowMapSize, float shadowBias, float shadowRadius, vec4 shadowCoord ) {
		float shadow = 1.0;
		shadowCoord.xyz /= shadowCoord.w;
		shadowCoord.z += shadowBias;
		bool inFrustum = shadowCoord.x >= 0.0 && shadowCoord.x <= 1.0 && shadowCoord.y >= 0.0 && shadowCoord.y <= 1.0;
		bool frustumTest = inFrustum && shadowCoord.z <= 1.0;
		if ( frustumTest ) {
		#if defined( SHADOWMAP_TYPE_PCF )
			vec2 texelSize = vec2( 1.0 ) / shadowMapSize;
			float dx0 = - texelSize.x * shadowRadius;
			float dy0 = - texelSize.y * shadowRadius;
			float dx1 = + texelSize.x * shadowRadius;
			float dy1 = + texelSize.y * shadowRadius;
			float dx2 = dx0 / 2.0;
			float dy2 = dy0 / 2.0;
			float dx3 = dx1 / 2.0;
			float dy3 = dy1 / 2.0;
			shadow = (
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx0, dy0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx1, dy0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx2, dy2 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy2 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx3, dy2 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx0, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx2, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy, shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx3, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx1, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx2, dy3 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy3 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx3, dy3 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx0, dy1 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy1 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx1, dy1 ), shadowCoord.z )
			) * ( 1.0 / 17.0 );
		#elif defined( SHADOWMAP_TYPE_PCF_SOFT )
			vec2 texelSize = vec2( 1.0 ) / shadowMapSize;
			float dx = texelSize.x;
			float dy = texelSize.y;
			vec2 uv = shadowCoord.xy;
			vec2 f = fract( uv * shadowMapSize + 0.5 );
			uv -= f * texelSize;
			shadow = (
				texture2DCompare( shadowMap, uv, shadowCoord.z ) +
				texture2DCompare( shadowMap, uv + vec2( dx, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, uv + vec2( 0.0, dy ), shadowCoord.z ) +
				texture2DCompare( shadowMap, uv + texelSize, shadowCoord.z ) +
				mix( texture2DCompare( shadowMap, uv + vec2( -dx, 0.0 ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, 0.0 ), shadowCoord.z ),
					 f.x ) +
				mix( texture2DCompare( shadowMap, uv + vec2( -dx, dy ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, dy ), shadowCoord.z ),
					 f.x ) +
				mix( texture2DCompare( shadowMap, uv + vec2( 0.0, -dy ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( 0.0, 2.0 * dy ), shadowCoord.z ),
					 f.y ) +
				mix( texture2DCompare( shadowMap, uv + vec2( dx, -dy ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( dx, 2.0 * dy ), shadowCoord.z ),
					 f.y ) +
				mix( mix( texture2DCompare( shadowMap, uv + vec2( -dx, -dy ), shadowCoord.z ),
						  texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, -dy ), shadowCoord.z ),
						  f.x ),
					 mix( texture2DCompare( shadowMap, uv + vec2( -dx, 2.0 * dy ), shadowCoord.z ),
						  texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, 2.0 * dy ), shadowCoord.z ),
						  f.x ),
					 f.y )
			) * ( 1.0 / 9.0 );
		#elif defined( SHADOWMAP_TYPE_VSM )
			shadow = VSMShadow( shadowMap, shadowCoord.xy, shadowCoord.z );
		#else
			shadow = texture2DCompare( shadowMap, shadowCoord.xy, shadowCoord.z );
		#endif
		}
		return shadow;
	}
	vec2 cubeToUV( vec3 v, float texelSizeY ) {
		vec3 absV = abs( v );
		float scaleToCube = 1.0 / max( absV.x, max( absV.y, absV.z ) );
		absV *= scaleToCube;
		v *= scaleToCube * ( 1.0 - 2.0 * texelSizeY );
		vec2 planar = v.xy;
		float almostATexel = 1.5 * texelSizeY;
		float almostOne = 1.0 - almostATexel;
		if ( absV.z >= almostOne ) {
			if ( v.z > 0.0 )
				planar.x = 4.0 - v.x;
		} else if ( absV.x >= almostOne ) {
			float signX = sign( v.x );
			planar.x = v.z * signX + 2.0 * signX;
		} else if ( absV.y >= almostOne ) {
			float signY = sign( v.y );
			planar.x = v.x + 2.0 * signY + 2.0;
			planar.y = v.z * signY - 2.0;
		}
		return vec2( 0.125, 0.25 ) * planar + vec2( 0.375, 0.75 );
	}
	float getPointShadow( sampler2D shadowMap, vec2 shadowMapSize, float shadowBias, float shadowRadius, vec4 shadowCoord, float shadowCameraNear, float shadowCameraFar ) {
		vec2 texelSize = vec2( 1.0 ) / ( shadowMapSize * vec2( 4.0, 2.0 ) );
		vec3 lightToPosition = shadowCoord.xyz;
		float dp = ( length( lightToPosition ) - shadowCameraNear ) / ( shadowCameraFar - shadowCameraNear );		dp += shadowBias;
		vec3 bd3D = normalize( lightToPosition );
		#if defined( SHADOWMAP_TYPE_PCF ) || defined( SHADOWMAP_TYPE_PCF_SOFT ) || defined( SHADOWMAP_TYPE_VSM )
			vec2 offset = vec2( - 1, 1 ) * shadowRadius * texelSize.y;
			return (
				texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xyy, texelSize.y ), dp ) +
				texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yyy, texelSize.y ), dp ) +
				texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xyx, texelSize.y ), dp ) +
				texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yyx, texelSize.y ), dp ) +
				texture2DCompare( shadowMap, cubeToUV( bd3D, texelSize.y ), dp ) +
				texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xxy, texelSize.y ), dp ) +
				texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yxy, texelSize.y ), dp ) +
				texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xxx, texelSize.y ), dp ) +
				texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yxx, texelSize.y ), dp )
			) * ( 1.0 / 9.0 );
		#else
			return texture2DCompare( shadowMap, cubeToUV( bd3D, texelSize.y ), dp );
		#endif
	}
#endif`,shadowmap_pars_vertex=`#if NUM_SPOT_LIGHT_COORDS > 0
  uniform mat4 spotLightMatrix[ NUM_SPOT_LIGHT_COORDS ];
  varying vec4 vSpotLightCoord[ NUM_SPOT_LIGHT_COORDS ];
#endif
#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
		uniform mat4 directionalShadowMatrix[ NUM_DIR_LIGHT_SHADOWS ];
		varying vec4 vDirectionalShadowCoord[ NUM_DIR_LIGHT_SHADOWS ];
		struct DirectionalLightShadow {
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform DirectionalLightShadow directionalLightShadows[ NUM_DIR_LIGHT_SHADOWS ];
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
		struct SpotLightShadow {
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform SpotLightShadow spotLightShadows[ NUM_SPOT_LIGHT_SHADOWS ];
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		uniform mat4 pointShadowMatrix[ NUM_POINT_LIGHT_SHADOWS ];
		varying vec4 vPointShadowCoord[ NUM_POINT_LIGHT_SHADOWS ];
		struct PointLightShadow {
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
			float shadowCameraNear;
			float shadowCameraFar;
		};
		uniform PointLightShadow pointLightShadows[ NUM_POINT_LIGHT_SHADOWS ];
	#endif
#endif`,shadowmap_vertex=`#if ( defined( USE_SHADOWMAP ) && ( NUM_DIR_LIGHT_SHADOWS > 0 || NUM_POINT_LIGHT_SHADOWS > 0 ) ) || ( NUM_SPOT_LIGHT_COORDS > 0 )
	vec3 shadowWorldNormal = inverseTransformDirection( transformedNormal, viewMatrix );
	vec4 shadowWorldPosition;
#endif
#if defined( USE_SHADOWMAP )
	#if NUM_DIR_LIGHT_SHADOWS > 0
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_DIR_LIGHT_SHADOWS; i ++ ) {
			shadowWorldPosition = worldPosition + vec4( shadowWorldNormal * directionalLightShadows[ i ].shadowNormalBias, 0 );
			vDirectionalShadowCoord[ i ] = directionalShadowMatrix[ i ] * shadowWorldPosition;
		}
		#pragma unroll_loop_end
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_POINT_LIGHT_SHADOWS; i ++ ) {
			shadowWorldPosition = worldPosition + vec4( shadowWorldNormal * pointLightShadows[ i ].shadowNormalBias, 0 );
			vPointShadowCoord[ i ] = pointShadowMatrix[ i ] * shadowWorldPosition;
		}
		#pragma unroll_loop_end
	#endif
#endif
#if NUM_SPOT_LIGHT_COORDS > 0
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHT_COORDS; i ++ ) {
		shadowWorldPosition = worldPosition;
		#if ( defined( USE_SHADOWMAP ) && UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
			shadowWorldPosition.xyz += shadowWorldNormal * spotLightShadows[ i ].shadowNormalBias;
		#endif
		vSpotLightCoord[ i ] = spotLightMatrix[ i ] * shadowWorldPosition;
	}
	#pragma unroll_loop_end
#endif`,shadowmask_pars_fragment=`float getShadowMask() {
	float shadow = 1.0;
	#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
	DirectionalLightShadow directionalLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_DIR_LIGHT_SHADOWS; i ++ ) {
		directionalLight = directionalLightShadows[ i ];
		shadow *= receiveShadow ? getShadow( directionalShadowMap[ i ], directionalLight.shadowMapSize, directionalLight.shadowBias, directionalLight.shadowRadius, vDirectionalShadowCoord[ i ] ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
	SpotLightShadow spotLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHT_SHADOWS; i ++ ) {
		spotLight = spotLightShadows[ i ];
		shadow *= receiveShadow ? getShadow( spotShadowMap[ i ], spotLight.shadowMapSize, spotLight.shadowBias, spotLight.shadowRadius, vSpotLightCoord[ i ] ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
	PointLightShadow pointLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_POINT_LIGHT_SHADOWS; i ++ ) {
		pointLight = pointLightShadows[ i ];
		shadow *= receiveShadow ? getPointShadow( pointShadowMap[ i ], pointLight.shadowMapSize, pointLight.shadowBias, pointLight.shadowRadius, vPointShadowCoord[ i ], pointLight.shadowCameraNear, pointLight.shadowCameraFar ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#endif
	return shadow;
}`,skinbase_vertex=`#ifdef USE_SKINNING
	mat4 boneMatX = getBoneMatrix( skinIndex.x );
	mat4 boneMatY = getBoneMatrix( skinIndex.y );
	mat4 boneMatZ = getBoneMatrix( skinIndex.z );
	mat4 boneMatW = getBoneMatrix( skinIndex.w );
#endif`,skinning_pars_vertex=`#ifdef USE_SKINNING
	uniform mat4 bindMatrix;
	uniform mat4 bindMatrixInverse;
	uniform highp sampler2D boneTexture;
	uniform int boneTextureSize;
	mat4 getBoneMatrix( const in float i ) {
		float j = i * 4.0;
		float x = mod( j, float( boneTextureSize ) );
		float y = floor( j / float( boneTextureSize ) );
		float dx = 1.0 / float( boneTextureSize );
		float dy = 1.0 / float( boneTextureSize );
		y = dy * ( y + 0.5 );
		vec4 v1 = texture2D( boneTexture, vec2( dx * ( x + 0.5 ), y ) );
		vec4 v2 = texture2D( boneTexture, vec2( dx * ( x + 1.5 ), y ) );
		vec4 v3 = texture2D( boneTexture, vec2( dx * ( x + 2.5 ), y ) );
		vec4 v4 = texture2D( boneTexture, vec2( dx * ( x + 3.5 ), y ) );
		mat4 bone = mat4( v1, v2, v3, v4 );
		return bone;
	}
#endif`,skinning_vertex=`#ifdef USE_SKINNING
	vec4 skinVertex = bindMatrix * vec4( transformed, 1.0 );
	vec4 skinned = vec4( 0.0 );
	skinned += boneMatX * skinVertex * skinWeight.x;
	skinned += boneMatY * skinVertex * skinWeight.y;
	skinned += boneMatZ * skinVertex * skinWeight.z;
	skinned += boneMatW * skinVertex * skinWeight.w;
	transformed = ( bindMatrixInverse * skinned ).xyz;
#endif`,skinnormal_vertex=`#ifdef USE_SKINNING
	mat4 skinMatrix = mat4( 0.0 );
	skinMatrix += skinWeight.x * boneMatX;
	skinMatrix += skinWeight.y * boneMatY;
	skinMatrix += skinWeight.z * boneMatZ;
	skinMatrix += skinWeight.w * boneMatW;
	skinMatrix = bindMatrixInverse * skinMatrix * bindMatrix;
	objectNormal = vec4( skinMatrix * vec4( objectNormal, 0.0 ) ).xyz;
	#ifdef USE_TANGENT
		objectTangent = vec4( skinMatrix * vec4( objectTangent, 0.0 ) ).xyz;
	#endif
#endif`,specularmap_fragment=`float specularStrength;
#ifdef USE_SPECULARMAP
	vec4 texelSpecular = texture2D( specularMap, vUv );
	specularStrength = texelSpecular.r;
#else
	specularStrength = 1.0;
#endif`,specularmap_pars_fragment=`#ifdef USE_SPECULARMAP
	uniform sampler2D specularMap;
#endif`,tonemapping_fragment=`#if defined( TONE_MAPPING )
	gl_FragColor.rgb = toneMapping( gl_FragColor.rgb );
#endif`,tonemapping_pars_fragment=`#ifndef saturate
#define saturate( a ) clamp( a, 0.0, 1.0 )
#endif
uniform float toneMappingExposure;
vec3 LinearToneMapping( vec3 color ) {
	return toneMappingExposure * color;
}
vec3 ReinhardToneMapping( vec3 color ) {
	color *= toneMappingExposure;
	return saturate( color / ( vec3( 1.0 ) + color ) );
}
vec3 OptimizedCineonToneMapping( vec3 color ) {
	color *= toneMappingExposure;
	color = max( vec3( 0.0 ), color - 0.004 );
	return pow( ( color * ( 6.2 * color + 0.5 ) ) / ( color * ( 6.2 * color + 1.7 ) + 0.06 ), vec3( 2.2 ) );
}
vec3 RRTAndODTFit( vec3 v ) {
	vec3 a = v * ( v + 0.0245786 ) - 0.000090537;
	vec3 b = v * ( 0.983729 * v + 0.4329510 ) + 0.238081;
	return a / b;
}
vec3 ACESFilmicToneMapping( vec3 color ) {
	const mat3 ACESInputMat = mat3(
		vec3( 0.59719, 0.07600, 0.02840 ),		vec3( 0.35458, 0.90834, 0.13383 ),
		vec3( 0.04823, 0.01566, 0.83777 )
	);
	const mat3 ACESOutputMat = mat3(
		vec3(  1.60475, -0.10208, -0.00327 ),		vec3( -0.53108,  1.10813, -0.07276 ),
		vec3( -0.07367, -0.00605,  1.07602 )
	);
	color *= toneMappingExposure / 0.6;
	color = ACESInputMat * color;
	color = RRTAndODTFit( color );
	color = ACESOutputMat * color;
	return saturate( color );
}
vec3 CustomToneMapping( vec3 color ) { return color; }`,transmission_fragment=`#ifdef USE_TRANSMISSION
	material.transmission = transmission;
	material.transmissionAlpha = 1.0;
	material.thickness = thickness;
	material.attenuationDistance = attenuationDistance;
	material.attenuationColor = attenuationColor;
	#ifdef USE_TRANSMISSIONMAP
		material.transmission *= texture2D( transmissionMap, vUv ).r;
	#endif
	#ifdef USE_THICKNESSMAP
		material.thickness *= texture2D( thicknessMap, vUv ).g;
	#endif
	vec3 pos = vWorldPosition;
	vec3 v = normalize( cameraPosition - pos );
	vec3 n = inverseTransformDirection( normal, viewMatrix );
	vec4 transmission = getIBLVolumeRefraction(
		n, v, material.roughness, material.diffuseColor, material.specularColor, material.specularF90,
		pos, modelMatrix, viewMatrix, projectionMatrix, material.ior, material.thickness,
		material.attenuationColor, material.attenuationDistance );
	material.transmissionAlpha = mix( material.transmissionAlpha, transmission.a, material.transmission );
	totalDiffuse = mix( totalDiffuse, transmission.rgb, material.transmission );
#endif`,transmission_pars_fragment=`#ifdef USE_TRANSMISSION
	uniform float transmission;
	uniform float thickness;
	uniform float attenuationDistance;
	uniform vec3 attenuationColor;
	#ifdef USE_TRANSMISSIONMAP
		uniform sampler2D transmissionMap;
	#endif
	#ifdef USE_THICKNESSMAP
		uniform sampler2D thicknessMap;
	#endif
	uniform vec2 transmissionSamplerSize;
	uniform sampler2D transmissionSamplerMap;
	uniform mat4 modelMatrix;
	uniform mat4 projectionMatrix;
	varying vec3 vWorldPosition;
	vec3 getVolumeTransmissionRay( const in vec3 n, const in vec3 v, const in float thickness, const in float ior, const in mat4 modelMatrix ) {
		vec3 refractionVector = refract( - v, normalize( n ), 1.0 / ior );
		vec3 modelScale;
		modelScale.x = length( vec3( modelMatrix[ 0 ].xyz ) );
		modelScale.y = length( vec3( modelMatrix[ 1 ].xyz ) );
		modelScale.z = length( vec3( modelMatrix[ 2 ].xyz ) );
		return normalize( refractionVector ) * thickness * modelScale;
	}
	float applyIorToRoughness( const in float roughness, const in float ior ) {
		return roughness * clamp( ior * 2.0 - 2.0, 0.0, 1.0 );
	}
	vec4 getTransmissionSample( const in vec2 fragCoord, const in float roughness, const in float ior ) {
		float framebufferLod = log2( transmissionSamplerSize.x ) * applyIorToRoughness( roughness, ior );
		#ifdef texture2DLodEXT
			return texture2DLodEXT( transmissionSamplerMap, fragCoord.xy, framebufferLod );
		#else
			return texture2D( transmissionSamplerMap, fragCoord.xy, framebufferLod );
		#endif
	}
	vec3 applyVolumeAttenuation( const in vec3 radiance, const in float transmissionDistance, const in vec3 attenuationColor, const in float attenuationDistance ) {
		if ( isinf( attenuationDistance ) ) {
			return radiance;
		} else {
			vec3 attenuationCoefficient = -log( attenuationColor ) / attenuationDistance;
			vec3 transmittance = exp( - attenuationCoefficient * transmissionDistance );			return transmittance * radiance;
		}
	}
	vec4 getIBLVolumeRefraction( const in vec3 n, const in vec3 v, const in float roughness, const in vec3 diffuseColor,
		const in vec3 specularColor, const in float specularF90, const in vec3 position, const in mat4 modelMatrix,
		const in mat4 viewMatrix, const in mat4 projMatrix, const in float ior, const in float thickness,
		const in vec3 attenuationColor, const in float attenuationDistance ) {
		vec3 transmissionRay = getVolumeTransmissionRay( n, v, thickness, ior, modelMatrix );
		vec3 refractedRayExit = position + transmissionRay;
		vec4 ndcPos = projMatrix * viewMatrix * vec4( refractedRayExit, 1.0 );
		vec2 refractionCoords = ndcPos.xy / ndcPos.w;
		refractionCoords += 1.0;
		refractionCoords /= 2.0;
		vec4 transmittedLight = getTransmissionSample( refractionCoords, roughness, ior );
		vec3 attenuatedColor = applyVolumeAttenuation( transmittedLight.rgb, length( transmissionRay ), attenuationColor, attenuationDistance );
		vec3 F = EnvironmentBRDF( n, v, specularColor, specularF90, roughness );
		return vec4( ( 1.0 - F ) * attenuatedColor * diffuseColor, transmittedLight.a );
	}
#endif`,uv_pars_fragment=`#if ( defined( USE_UV ) && ! defined( UVS_VERTEX_ONLY ) )
	varying vec2 vUv;
#endif`,uv_pars_vertex=`#ifdef USE_UV
	#ifdef UVS_VERTEX_ONLY
		vec2 vUv;
	#else
		varying vec2 vUv;
	#endif
	uniform mat3 uvTransform;
#endif`,uv_vertex=`#ifdef USE_UV
	vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
#endif`,uv2_pars_fragment=`#if defined( USE_LIGHTMAP ) || defined( USE_AOMAP )
	varying vec2 vUv2;
#endif`,uv2_pars_vertex=`#if defined( USE_LIGHTMAP ) || defined( USE_AOMAP )
	attribute vec2 uv2;
	varying vec2 vUv2;
	uniform mat3 uv2Transform;
#endif`,uv2_vertex=`#if defined( USE_LIGHTMAP ) || defined( USE_AOMAP )
	vUv2 = ( uv2Transform * vec3( uv2, 1 ) ).xy;
#endif`,worldpos_vertex=`#if defined( USE_ENVMAP ) || defined( DISTANCE ) || defined ( USE_SHADOWMAP ) || defined ( USE_TRANSMISSION ) || NUM_SPOT_LIGHT_COORDS > 0
	vec4 worldPosition = vec4( transformed, 1.0 );
	#ifdef USE_INSTANCING
		worldPosition = instanceMatrix * worldPosition;
	#endif
	worldPosition = modelMatrix * worldPosition;
#endif`;const vertex$h=`varying vec2 vUv;
uniform mat3 uvTransform;
void main() {
	vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	gl_Position = vec4( position.xy, 1.0, 1.0 );
}`,fragment$h=`uniform sampler2D t2D;
uniform float backgroundIntensity;
varying vec2 vUv;
void main() {
	vec4 texColor = texture2D( t2D, vUv );
	#ifdef DECODE_VIDEO_TEXTURE
		texColor = vec4( mix( pow( texColor.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), texColor.rgb * 0.0773993808, vec3( lessThanEqual( texColor.rgb, vec3( 0.04045 ) ) ) ), texColor.w );
	#endif
	texColor.rgb *= backgroundIntensity;
	gl_FragColor = texColor;
	#include <tonemapping_fragment>
	#include <encodings_fragment>
}`,vertex$g=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,fragment$g=`#ifdef ENVMAP_TYPE_CUBE
	uniform samplerCube envMap;
#elif defined( ENVMAP_TYPE_CUBE_UV )
	uniform sampler2D envMap;
#endif
uniform float flipEnvMap;
uniform float backgroundBlurriness;
uniform float backgroundIntensity;
varying vec3 vWorldDirection;
#include <cube_uv_reflection_fragment>
void main() {
	#ifdef ENVMAP_TYPE_CUBE
		vec4 texColor = textureCube( envMap, vec3( flipEnvMap * vWorldDirection.x, vWorldDirection.yz ) );
	#elif defined( ENVMAP_TYPE_CUBE_UV )
		vec4 texColor = textureCubeUV( envMap, vWorldDirection, backgroundBlurriness );
	#else
		vec4 texColor = vec4( 0.0, 0.0, 0.0, 1.0 );
	#endif
	texColor.rgb *= backgroundIntensity;
	gl_FragColor = texColor;
	#include <tonemapping_fragment>
	#include <encodings_fragment>
}`,vertex$f=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,fragment$f=`uniform samplerCube tCube;
uniform float tFlip;
uniform float opacity;
varying vec3 vWorldDirection;
void main() {
	vec4 texColor = textureCube( tCube, vec3( tFlip * vWorldDirection.x, vWorldDirection.yz ) );
	gl_FragColor = texColor;
	gl_FragColor.a *= opacity;
	#include <tonemapping_fragment>
	#include <encodings_fragment>
}`,vertex$e=`#include <common>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
varying vec2 vHighPrecisionZW;
void main() {
	#include <uv_vertex>
	#include <skinbase_vertex>
	#ifdef USE_DISPLACEMENTMAP
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vHighPrecisionZW = gl_Position.zw;
}`,fragment$e=`#if DEPTH_PACKING == 3200
	uniform float opacity;
#endif
#include <common>
#include <packing>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
varying vec2 vHighPrecisionZW;
void main() {
	#include <clipping_planes_fragment>
	vec4 diffuseColor = vec4( 1.0 );
	#if DEPTH_PACKING == 3200
		diffuseColor.a = opacity;
	#endif
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <logdepthbuf_fragment>
	float fragCoordZ = 0.5 * vHighPrecisionZW[0] / vHighPrecisionZW[1] + 0.5;
	#if DEPTH_PACKING == 3200
		gl_FragColor = vec4( vec3( 1.0 - fragCoordZ ), opacity );
	#elif DEPTH_PACKING == 3201
		gl_FragColor = packDepthToRGBA( fragCoordZ );
	#endif
}`,vertex$d=`#define DISTANCE
varying vec3 vWorldPosition;
#include <common>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <skinbase_vertex>
	#ifdef USE_DISPLACEMENTMAP
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <worldpos_vertex>
	#include <clipping_planes_vertex>
	vWorldPosition = worldPosition.xyz;
}`,fragment$d=`#define DISTANCE
uniform vec3 referencePosition;
uniform float nearDistance;
uniform float farDistance;
varying vec3 vWorldPosition;
#include <common>
#include <packing>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <clipping_planes_pars_fragment>
void main () {
	#include <clipping_planes_fragment>
	vec4 diffuseColor = vec4( 1.0 );
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	float dist = length( vWorldPosition - referencePosition );
	dist = ( dist - nearDistance ) / ( farDistance - nearDistance );
	dist = saturate( dist );
	gl_FragColor = packDepthToRGBA( dist );
}`,vertex$c=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
}`,fragment$c=`uniform sampler2D tEquirect;
varying vec3 vWorldDirection;
#include <common>
void main() {
	vec3 direction = normalize( vWorldDirection );
	vec2 sampleUV = equirectUv( direction );
	gl_FragColor = texture2D( tEquirect, sampleUV );
	#include <tonemapping_fragment>
	#include <encodings_fragment>
}`,vertex$b=`uniform float scale;
attribute float lineDistance;
varying float vLineDistance;
#include <common>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	vLineDistance = scale * lineDistance;
	#include <color_vertex>
	#include <morphcolor_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
}`,fragment$b=`uniform vec3 diffuse;
uniform float opacity;
uniform float dashSize;
uniform float totalSize;
varying float vLineDistance;
#include <common>
#include <color_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	#include <clipping_planes_fragment>
	if ( mod( vLineDistance, totalSize ) > dashSize ) {
		discard;
	}
	vec3 outgoingLight = vec3( 0.0 );
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <logdepthbuf_fragment>
	#include <color_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <output_fragment>
	#include <tonemapping_fragment>
	#include <encodings_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
}`,vertex$a=`#include <common>
#include <uv_pars_vertex>
#include <uv2_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <uv2_vertex>
	#include <color_vertex>
	#include <morphcolor_vertex>
	#if defined ( USE_ENVMAP ) || defined ( USE_SKINNING )
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinbase_vertex>
		#include <skinnormal_vertex>
		#include <defaultnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <fog_vertex>
}`,fragment$a=`uniform vec3 diffuse;
uniform float opacity;
#ifndef FLAT_SHADED
	varying vec3 vNormal;
#endif
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <uv2_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <fog_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	#include <clipping_planes_fragment>
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <specularmap_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	#ifdef USE_LIGHTMAP
		vec4 lightMapTexel = texture2D( lightMap, vUv2 );
		reflectedLight.indirectDiffuse += lightMapTexel.rgb * lightMapIntensity * RECIPROCAL_PI;
	#else
		reflectedLight.indirectDiffuse += vec3( 1.0 );
	#endif
	#include <aomap_fragment>
	reflectedLight.indirectDiffuse *= diffuseColor.rgb;
	vec3 outgoingLight = reflectedLight.indirectDiffuse;
	#include <envmap_fragment>
	#include <output_fragment>
	#include <tonemapping_fragment>
	#include <encodings_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,vertex$9=`#define LAMBERT
varying vec3 vViewPosition;
#include <common>
#include <uv_pars_vertex>
#include <uv2_pars_vertex>
#include <displacementmap_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <uv2_vertex>
	#include <color_vertex>
	#include <morphcolor_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,fragment$9=`#define LAMBERT
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float opacity;
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <uv2_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_lambert_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	#include <clipping_planes_fragment>
	vec4 diffuseColor = vec4( diffuse, opacity );
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <specularmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_lambert_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + totalEmissiveRadiance;
	#include <envmap_fragment>
	#include <output_fragment>
	#include <tonemapping_fragment>
	#include <encodings_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,vertex$8=`#define MATCAP
varying vec3 vViewPosition;
#include <common>
#include <uv_pars_vertex>
#include <color_pars_vertex>
#include <displacementmap_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphcolor_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
	vViewPosition = - mvPosition.xyz;
}`,fragment$8=`#define MATCAP
uniform vec3 diffuse;
uniform float opacity;
uniform sampler2D matcap;
varying vec3 vViewPosition;
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <fog_pars_fragment>
#include <normal_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	#include <clipping_planes_fragment>
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	vec3 viewDir = normalize( vViewPosition );
	vec3 x = normalize( vec3( viewDir.z, 0.0, - viewDir.x ) );
	vec3 y = cross( viewDir, x );
	vec2 uv = vec2( dot( x, normal ), dot( y, normal ) ) * 0.495 + 0.5;
	#ifdef USE_MATCAP
		vec4 matcapColor = texture2D( matcap, uv );
	#else
		vec4 matcapColor = vec4( vec3( mix( 0.2, 0.8, uv.y ) ), 1.0 );
	#endif
	vec3 outgoingLight = diffuseColor.rgb * matcapColor.rgb;
	#include <output_fragment>
	#include <tonemapping_fragment>
	#include <encodings_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,vertex$7=`#define NORMAL
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( TANGENTSPACE_NORMALMAP )
	varying vec3 vViewPosition;
#endif
#include <common>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( TANGENTSPACE_NORMALMAP )
	vViewPosition = - mvPosition.xyz;
#endif
}`,fragment$7=`#define NORMAL
uniform float opacity;
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( TANGENTSPACE_NORMALMAP )
	varying vec3 vViewPosition;
#endif
#include <packing>
#include <uv_pars_fragment>
#include <normal_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	#include <clipping_planes_fragment>
	#include <logdepthbuf_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	gl_FragColor = vec4( packNormalToRGB( normal ), opacity );
	#ifdef OPAQUE
		gl_FragColor.a = 1.0;
	#endif
}`,vertex$6=`#define PHONG
varying vec3 vViewPosition;
#include <common>
#include <uv_pars_vertex>
#include <uv2_pars_vertex>
#include <displacementmap_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <uv2_vertex>
	#include <color_vertex>
	#include <morphcolor_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,fragment$6=`#define PHONG
uniform vec3 diffuse;
uniform vec3 emissive;
uniform vec3 specular;
uniform float shininess;
uniform float opacity;
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <uv2_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_phong_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	#include <clipping_planes_fragment>
	vec4 diffuseColor = vec4( diffuse, opacity );
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <specularmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_phong_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + reflectedLight.directSpecular + reflectedLight.indirectSpecular + totalEmissiveRadiance;
	#include <envmap_fragment>
	#include <output_fragment>
	#include <tonemapping_fragment>
	#include <encodings_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,vertex$5=`#define STANDARD
varying vec3 vViewPosition;
#ifdef USE_TRANSMISSION
	varying vec3 vWorldPosition;
#endif
#include <common>
#include <uv_pars_vertex>
#include <uv2_pars_vertex>
#include <displacementmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <uv2_vertex>
	#include <color_vertex>
	#include <morphcolor_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
#ifdef USE_TRANSMISSION
	vWorldPosition = worldPosition.xyz;
#endif
}`,fragment$5=`#define STANDARD
#ifdef PHYSICAL
	#define IOR
	#define SPECULAR
#endif
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float roughness;
uniform float metalness;
uniform float opacity;
#ifdef IOR
	uniform float ior;
#endif
#ifdef SPECULAR
	uniform float specularIntensity;
	uniform vec3 specularColor;
	#ifdef USE_SPECULARINTENSITYMAP
		uniform sampler2D specularIntensityMap;
	#endif
	#ifdef USE_SPECULARCOLORMAP
		uniform sampler2D specularColorMap;
	#endif
#endif
#ifdef USE_CLEARCOAT
	uniform float clearcoat;
	uniform float clearcoatRoughness;
#endif
#ifdef USE_IRIDESCENCE
	uniform float iridescence;
	uniform float iridescenceIOR;
	uniform float iridescenceThicknessMinimum;
	uniform float iridescenceThicknessMaximum;
#endif
#ifdef USE_SHEEN
	uniform vec3 sheenColor;
	uniform float sheenRoughness;
	#ifdef USE_SHEENCOLORMAP
		uniform sampler2D sheenColorMap;
	#endif
	#ifdef USE_SHEENROUGHNESSMAP
		uniform sampler2D sheenRoughnessMap;
	#endif
#endif
varying vec3 vViewPosition;
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <uv2_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <bsdfs>
#include <iridescence_fragment>
#include <cube_uv_reflection_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_physical_pars_fragment>
#include <fog_pars_fragment>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_physical_pars_fragment>
#include <transmission_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <clearcoat_pars_fragment>
#include <iridescence_pars_fragment>
#include <roughnessmap_pars_fragment>
#include <metalnessmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	#include <clipping_planes_fragment>
	vec4 diffuseColor = vec4( diffuse, opacity );
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <roughnessmap_fragment>
	#include <metalnessmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <clearcoat_normal_fragment_begin>
	#include <clearcoat_normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_physical_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 totalDiffuse = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse;
	vec3 totalSpecular = reflectedLight.directSpecular + reflectedLight.indirectSpecular;
	#include <transmission_fragment>
	vec3 outgoingLight = totalDiffuse + totalSpecular + totalEmissiveRadiance;
	#ifdef USE_SHEEN
		float sheenEnergyComp = 1.0 - 0.157 * max3( material.sheenColor );
		outgoingLight = outgoingLight * sheenEnergyComp + sheenSpecular;
	#endif
	#ifdef USE_CLEARCOAT
		float dotNVcc = saturate( dot( geometry.clearcoatNormal, geometry.viewDir ) );
		vec3 Fcc = F_Schlick( material.clearcoatF0, material.clearcoatF90, dotNVcc );
		outgoingLight = outgoingLight * ( 1.0 - material.clearcoat * Fcc ) + clearcoatSpecular * material.clearcoat;
	#endif
	#include <output_fragment>
	#include <tonemapping_fragment>
	#include <encodings_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,vertex$4=`#define TOON
varying vec3 vViewPosition;
#include <common>
#include <uv_pars_vertex>
#include <uv2_pars_vertex>
#include <displacementmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <uv2_vertex>
	#include <color_vertex>
	#include <morphcolor_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,fragment$4=`#define TOON
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float opacity;
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <uv2_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <gradientmap_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_toon_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	#include <clipping_planes_fragment>
	vec4 diffuseColor = vec4( diffuse, opacity );
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_toon_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + totalEmissiveRadiance;
	#include <output_fragment>
	#include <tonemapping_fragment>
	#include <encodings_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,vertex$3=`uniform float size;
uniform float scale;
#include <common>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <color_vertex>
	#include <morphcolor_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <project_vertex>
	gl_PointSize = size;
	#ifdef USE_SIZEATTENUATION
		bool isPerspective = isPerspectiveMatrix( projectionMatrix );
		if ( isPerspective ) gl_PointSize *= ( scale / - mvPosition.z );
	#endif
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <worldpos_vertex>
	#include <fog_vertex>
}`,fragment$3=`uniform vec3 diffuse;
uniform float opacity;
#include <common>
#include <color_pars_fragment>
#include <map_particle_pars_fragment>
#include <alphatest_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	#include <clipping_planes_fragment>
	vec3 outgoingLight = vec3( 0.0 );
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <logdepthbuf_fragment>
	#include <map_particle_fragment>
	#include <color_fragment>
	#include <alphatest_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <output_fragment>
	#include <tonemapping_fragment>
	#include <encodings_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
}`,vertex$2=`#include <common>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
void main() {
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <project_vertex>
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,fragment$2=`uniform vec3 color;
uniform float opacity;
#include <common>
#include <packing>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <shadowmap_pars_fragment>
#include <shadowmask_pars_fragment>
void main() {
	gl_FragColor = vec4( color, opacity * ( 1.0 - getShadowMask() ) );
	#include <tonemapping_fragment>
	#include <encodings_fragment>
	#include <fog_fragment>
}`,vertex$1=`uniform float rotation;
uniform vec2 center;
#include <common>
#include <uv_pars_vertex>
#include <fog_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	vec4 mvPosition = modelViewMatrix * vec4( 0.0, 0.0, 0.0, 1.0 );
	vec2 scale;
	scale.x = length( vec3( modelMatrix[ 0 ].x, modelMatrix[ 0 ].y, modelMatrix[ 0 ].z ) );
	scale.y = length( vec3( modelMatrix[ 1 ].x, modelMatrix[ 1 ].y, modelMatrix[ 1 ].z ) );
	#ifndef USE_SIZEATTENUATION
		bool isPerspective = isPerspectiveMatrix( projectionMatrix );
		if ( isPerspective ) scale *= - mvPosition.z;
	#endif
	vec2 alignedPosition = ( position.xy - ( center - vec2( 0.5 ) ) ) * scale;
	vec2 rotatedPosition;
	rotatedPosition.x = cos( rotation ) * alignedPosition.x - sin( rotation ) * alignedPosition.y;
	rotatedPosition.y = sin( rotation ) * alignedPosition.x + cos( rotation ) * alignedPosition.y;
	mvPosition.xy += rotatedPosition;
	gl_Position = projectionMatrix * mvPosition;
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
}`,fragment$1=`uniform vec3 diffuse;
uniform float opacity;
#include <common>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	#include <clipping_planes_fragment>
	vec3 outgoingLight = vec3( 0.0 );
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <output_fragment>
	#include <tonemapping_fragment>
	#include <encodings_fragment>
	#include <fog_fragment>
}`,ShaderChunk={alphamap_fragment,alphamap_pars_fragment,alphatest_fragment,alphatest_pars_fragment,aomap_fragment,aomap_pars_fragment,begin_vertex,beginnormal_vertex,bsdfs,iridescence_fragment,bumpmap_pars_fragment,clipping_planes_fragment,clipping_planes_pars_fragment,clipping_planes_pars_vertex,clipping_planes_vertex,color_fragment,color_pars_fragment,color_pars_vertex,color_vertex,common,cube_uv_reflection_fragment,defaultnormal_vertex,displacementmap_pars_vertex,displacementmap_vertex,emissivemap_fragment,emissivemap_pars_fragment,encodings_fragment,encodings_pars_fragment,envmap_fragment,envmap_common_pars_fragment,envmap_pars_fragment,envmap_pars_vertex,envmap_physical_pars_fragment,envmap_vertex,fog_vertex,fog_pars_vertex,fog_fragment,fog_pars_fragment,gradientmap_pars_fragment,lightmap_fragment,lightmap_pars_fragment,lights_lambert_fragment,lights_lambert_pars_fragment,lights_pars_begin,lights_toon_fragment,lights_toon_pars_fragment,lights_phong_fragment,lights_phong_pars_fragment,lights_physical_fragment,lights_physical_pars_fragment,lights_fragment_begin,lights_fragment_maps,lights_fragment_end,logdepthbuf_fragment,logdepthbuf_pars_fragment,logdepthbuf_pars_vertex,logdepthbuf_vertex,map_fragment,map_pars_fragment,map_particle_fragment,map_particle_pars_fragment,metalnessmap_fragment,metalnessmap_pars_fragment,morphcolor_vertex,morphnormal_vertex,morphtarget_pars_vertex,morphtarget_vertex,normal_fragment_begin,normal_fragment_maps,normal_pars_fragment,normal_pars_vertex,normal_vertex,normalmap_pars_fragment,clearcoat_normal_fragment_begin,clearcoat_normal_fragment_maps,clearcoat_pars_fragment,iridescence_pars_fragment,output_fragment,packing,premultiplied_alpha_fragment,project_vertex,dithering_fragment,dithering_pars_fragment,roughnessmap_fragment,roughnessmap_pars_fragment,shadowmap_pars_fragment,shadowmap_pars_vertex,shadowmap_vertex,shadowmask_pars_fragment,skinbase_vertex,skinning_pars_vertex,skinning_vertex,skinnormal_vertex,specularmap_fragment,specularmap_pars_fragment,tonemapping_fragment,tonemapping_pars_fragment,transmission_fragment,transmission_pars_fragment,uv_pars_fragment,uv_pars_vertex,uv_vertex,uv2_pars_fragment,uv2_pars_vertex,uv2_vertex,worldpos_vertex,background_vert:vertex$h,background_frag:fragment$h,backgroundCube_vert:vertex$g,backgroundCube_frag:fragment$g,cube_vert:vertex$f,cube_frag:fragment$f,depth_vert:vertex$e,depth_frag:fragment$e,distanceRGBA_vert:vertex$d,distanceRGBA_frag:fragment$d,equirect_vert:vertex$c,equirect_frag:fragment$c,linedashed_vert:vertex$b,linedashed_frag:fragment$b,meshbasic_vert:vertex$a,meshbasic_frag:fragment$a,meshlambert_vert:vertex$9,meshlambert_frag:fragment$9,meshmatcap_vert:vertex$8,meshmatcap_frag:fragment$8,meshnormal_vert:vertex$7,meshnormal_frag:fragment$7,meshphong_vert:vertex$6,meshphong_frag:fragment$6,meshphysical_vert:vertex$5,meshphysical_frag:fragment$5,meshtoon_vert:vertex$4,meshtoon_frag:fragment$4,points_vert:vertex$3,points_frag:fragment$3,shadow_vert:vertex$2,shadow_frag:fragment$2,sprite_vert:vertex$1,sprite_frag:fragment$1},UniformsLib={common:{diffuse:{value:new Color$1(16777215)},opacity:{value:1},map:{value:null},uvTransform:{value:new Matrix3},uv2Transform:{value:new Matrix3},alphaMap:{value:null},alphaTest:{value:0}},specularmap:{specularMap:{value:null}},envmap:{envMap:{value:null},flipEnvMap:{value:-1},reflectivity:{value:1},ior:{value:1.5},refractionRatio:{value:.98}},aomap:{aoMap:{value:null},aoMapIntensity:{value:1}},lightmap:{lightMap:{value:null},lightMapIntensity:{value:1}},emissivemap:{emissiveMap:{value:null}},bumpmap:{bumpMap:{value:null},bumpScale:{value:1}},normalmap:{normalMap:{value:null},normalScale:{value:new Vector2(1,1)}},displacementmap:{displacementMap:{value:null},displacementScale:{value:1},displacementBias:{value:0}},roughnessmap:{roughnessMap:{value:null}},metalnessmap:{metalnessMap:{value:null}},gradientmap:{gradientMap:{value:null}},fog:{fogDensity:{value:25e-5},fogNear:{value:1},fogFar:{value:2e3},fogColor:{value:new Color$1(16777215)}},lights:{ambientLightColor:{value:[]},lightProbe:{value:[]},directionalLights:{value:[],properties:{direction:{},color:{}}},directionalLightShadows:{value:[],properties:{shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},directionalShadowMap:{value:[]},directionalShadowMatrix:{value:[]},spotLights:{value:[],properties:{color:{},position:{},direction:{},distance:{},coneCos:{},penumbraCos:{},decay:{}}},spotLightShadows:{value:[],properties:{shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},spotLightMap:{value:[]},spotShadowMap:{value:[]},spotLightMatrix:{value:[]},pointLights:{value:[],properties:{color:{},position:{},decay:{},distance:{}}},pointLightShadows:{value:[],properties:{shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{},shadowCameraNear:{},shadowCameraFar:{}}},pointShadowMap:{value:[]},pointShadowMatrix:{value:[]},hemisphereLights:{value:[],properties:{direction:{},skyColor:{},groundColor:{}}},rectAreaLights:{value:[],properties:{color:{},position:{},width:{},height:{}}},ltc_1:{value:null},ltc_2:{value:null}},points:{diffuse:{value:new Color$1(16777215)},opacity:{value:1},size:{value:1},scale:{value:1},map:{value:null},alphaMap:{value:null},alphaTest:{value:0},uvTransform:{value:new Matrix3}},sprite:{diffuse:{value:new Color$1(16777215)},opacity:{value:1},center:{value:new Vector2(.5,.5)},rotation:{value:0},map:{value:null},alphaMap:{value:null},alphaTest:{value:0},uvTransform:{value:new Matrix3}}},ShaderLib={basic:{uniforms:mergeUniforms([UniformsLib.common,UniformsLib.specularmap,UniformsLib.envmap,UniformsLib.aomap,UniformsLib.lightmap,UniformsLib.fog]),vertexShader:ShaderChunk.meshbasic_vert,fragmentShader:ShaderChunk.meshbasic_frag},lambert:{uniforms:mergeUniforms([UniformsLib.common,UniformsLib.specularmap,UniformsLib.envmap,UniformsLib.aomap,UniformsLib.lightmap,UniformsLib.emissivemap,UniformsLib.bumpmap,UniformsLib.normalmap,UniformsLib.displacementmap,UniformsLib.fog,UniformsLib.lights,{emissive:{value:new Color$1(0)}}]),vertexShader:ShaderChunk.meshlambert_vert,fragmentShader:ShaderChunk.meshlambert_frag},phong:{uniforms:mergeUniforms([UniformsLib.common,UniformsLib.specularmap,UniformsLib.envmap,UniformsLib.aomap,UniformsLib.lightmap,UniformsLib.emissivemap,UniformsLib.bumpmap,UniformsLib.normalmap,UniformsLib.displacementmap,UniformsLib.fog,UniformsLib.lights,{emissive:{value:new Color$1(0)},specular:{value:new Color$1(1118481)},shininess:{value:30}}]),vertexShader:ShaderChunk.meshphong_vert,fragmentShader:ShaderChunk.meshphong_frag},standard:{uniforms:mergeUniforms([UniformsLib.common,UniformsLib.envmap,UniformsLib.aomap,UniformsLib.lightmap,UniformsLib.emissivemap,UniformsLib.bumpmap,UniformsLib.normalmap,UniformsLib.displacementmap,UniformsLib.roughnessmap,UniformsLib.metalnessmap,UniformsLib.fog,UniformsLib.lights,{emissive:{value:new Color$1(0)},roughness:{value:1},metalness:{value:0},envMapIntensity:{value:1}}]),vertexShader:ShaderChunk.meshphysical_vert,fragmentShader:ShaderChunk.meshphysical_frag},toon:{uniforms:mergeUniforms([UniformsLib.common,UniformsLib.aomap,UniformsLib.lightmap,UniformsLib.emissivemap,UniformsLib.bumpmap,UniformsLib.normalmap,UniformsLib.displacementmap,UniformsLib.gradientmap,UniformsLib.fog,UniformsLib.lights,{emissive:{value:new Color$1(0)}}]),vertexShader:ShaderChunk.meshtoon_vert,fragmentShader:ShaderChunk.meshtoon_frag},matcap:{uniforms:mergeUniforms([UniformsLib.common,UniformsLib.bumpmap,UniformsLib.normalmap,UniformsLib.displacementmap,UniformsLib.fog,{matcap:{value:null}}]),vertexShader:ShaderChunk.meshmatcap_vert,fragmentShader:ShaderChunk.meshmatcap_frag},points:{uniforms:mergeUniforms([UniformsLib.points,UniformsLib.fog]),vertexShader:ShaderChunk.points_vert,fragmentShader:ShaderChunk.points_frag},dashed:{uniforms:mergeUniforms([UniformsLib.common,UniformsLib.fog,{scale:{value:1},dashSize:{value:1},totalSize:{value:2}}]),vertexShader:ShaderChunk.linedashed_vert,fragmentShader:ShaderChunk.linedashed_frag},depth:{uniforms:mergeUniforms([UniformsLib.common,UniformsLib.displacementmap]),vertexShader:ShaderChunk.depth_vert,fragmentShader:ShaderChunk.depth_frag},normal:{uniforms:mergeUniforms([UniformsLib.common,UniformsLib.bumpmap,UniformsLib.normalmap,UniformsLib.displacementmap,{opacity:{value:1}}]),vertexShader:ShaderChunk.meshnormal_vert,fragmentShader:ShaderChunk.meshnormal_frag},sprite:{uniforms:mergeUniforms([UniformsLib.sprite,UniformsLib.fog]),vertexShader:ShaderChunk.sprite_vert,fragmentShader:ShaderChunk.sprite_frag},background:{uniforms:{uvTransform:{value:new Matrix3},t2D:{value:null},backgroundIntensity:{value:1}},vertexShader:ShaderChunk.background_vert,fragmentShader:ShaderChunk.background_frag},backgroundCube:{uniforms:{envMap:{value:null},flipEnvMap:{value:-1},backgroundBlurriness:{value:0},backgroundIntensity:{value:1}},vertexShader:ShaderChunk.backgroundCube_vert,fragmentShader:ShaderChunk.backgroundCube_frag},cube:{uniforms:{tCube:{value:null},tFlip:{value:-1},opacity:{value:1}},vertexShader:ShaderChunk.cube_vert,fragmentShader:ShaderChunk.cube_frag},equirect:{uniforms:{tEquirect:{value:null}},vertexShader:ShaderChunk.equirect_vert,fragmentShader:ShaderChunk.equirect_frag},distanceRGBA:{uniforms:mergeUniforms([UniformsLib.common,UniformsLib.displacementmap,{referencePosition:{value:new Vector3},nearDistance:{value:1},farDistance:{value:1e3}}]),vertexShader:ShaderChunk.distanceRGBA_vert,fragmentShader:ShaderChunk.distanceRGBA_frag},shadow:{uniforms:mergeUniforms([UniformsLib.lights,UniformsLib.fog,{color:{value:new Color$1(0)},opacity:{value:1}}]),vertexShader:ShaderChunk.shadow_vert,fragmentShader:ShaderChunk.shadow_frag}};ShaderLib.physical={uniforms:mergeUniforms([ShaderLib.standard.uniforms,{clearcoat:{value:0},clearcoatMap:{value:null},clearcoatRoughness:{value:0},clearcoatRoughnessMap:{value:null},clearcoatNormalScale:{value:new Vector2(1,1)},clearcoatNormalMap:{value:null},iridescence:{value:0},iridescenceMap:{value:null},iridescenceIOR:{value:1.3},iridescenceThicknessMinimum:{value:100},iridescenceThicknessMaximum:{value:400},iridescenceThicknessMap:{value:null},sheen:{value:0},sheenColor:{value:new Color$1(0)},sheenColorMap:{value:null},sheenRoughness:{value:1},sheenRoughnessMap:{value:null},transmission:{value:0},transmissionMap:{value:null},transmissionSamplerSize:{value:new Vector2},transmissionSamplerMap:{value:null},thickness:{value:0},thicknessMap:{value:null},attenuationDistance:{value:0},attenuationColor:{value:new Color$1(0)},specularIntensity:{value:1},specularIntensityMap:{value:null},specularColor:{value:new Color$1(1,1,1)},specularColorMap:{value:null}}]),vertexShader:ShaderChunk.meshphysical_vert,fragmentShader:ShaderChunk.meshphysical_frag};const _rgb={r:0,b:0,g:0};function WebGLBackground(s,e,n,i,r,a,l){const o=new Color$1(0);let c=a===!0?0:1,u,d,f=null,h=0,_=null;function v(p,y){let C=!1,w=y.isScene===!0?y.background:null;w&&w.isTexture&&(w=(y.backgroundBlurriness>0?n:e).get(w));const A=s.xr,M=A.getSession&&A.getSession();M&&M.environmentBlendMode==="additive"&&(w=null),w===null?m(o,c):w&&w.isColor&&(m(w,1),C=!0),(s.autoClear||C)&&s.clear(s.autoClearColor,s.autoClearDepth,s.autoClearStencil),w&&(w.isCubeTexture||w.mapping===CubeUVReflectionMapping)?(d===void 0&&(d=new Mesh(new BoxGeometry(1,1,1),new ShaderMaterial({name:"BackgroundCubeMaterial",uniforms:cloneUniforms(ShaderLib.backgroundCube.uniforms),vertexShader:ShaderLib.backgroundCube.vertexShader,fragmentShader:ShaderLib.backgroundCube.fragmentShader,side:BackSide,depthTest:!1,depthWrite:!1,fog:!1})),d.geometry.deleteAttribute("normal"),d.geometry.deleteAttribute("uv"),d.onBeforeRender=function(P,N,b){this.matrixWorld.copyPosition(b.matrixWorld)},Object.defineProperty(d.material,"envMap",{get:function(){return this.uniforms.envMap.value}}),r.update(d)),d.material.uniforms.envMap.value=w,d.material.uniforms.flipEnvMap.value=w.isCubeTexture&&w.isRenderTargetTexture===!1?-1:1,d.material.uniforms.backgroundBlurriness.value=y.backgroundBlurriness,d.material.uniforms.backgroundIntensity.value=y.backgroundIntensity,d.material.toneMapped=w.encoding!==sRGBEncoding,(f!==w||h!==w.version||_!==s.toneMapping)&&(d.material.needsUpdate=!0,f=w,h=w.version,_=s.toneMapping),d.layers.enableAll(),p.unshift(d,d.geometry,d.material,0,0,null)):w&&w.isTexture&&(u===void 0&&(u=new Mesh(new PlaneGeometry(2,2),new ShaderMaterial({name:"BackgroundMaterial",uniforms:cloneUniforms(ShaderLib.background.uniforms),vertexShader:ShaderLib.background.vertexShader,fragmentShader:ShaderLib.background.fragmentShader,side:FrontSide,depthTest:!1,depthWrite:!1,fog:!1})),u.geometry.deleteAttribute("normal"),Object.defineProperty(u.material,"map",{get:function(){return this.uniforms.t2D.value}}),r.update(u)),u.material.uniforms.t2D.value=w,u.material.uniforms.backgroundIntensity.value=y.backgroundIntensity,u.material.toneMapped=w.encoding!==sRGBEncoding,w.matrixAutoUpdate===!0&&w.updateMatrix(),u.material.uniforms.uvTransform.value.copy(w.matrix),(f!==w||h!==w.version||_!==s.toneMapping)&&(u.material.needsUpdate=!0,f=w,h=w.version,_=s.toneMapping),u.layers.enableAll(),p.unshift(u,u.geometry,u.material,0,0,null))}function m(p,y){p.getRGB(_rgb,getUnlitUniformColorSpace(s)),i.buffers.color.setClear(_rgb.r,_rgb.g,_rgb.b,y,l)}return{getClearColor:function(){return o},setClearColor:function(p,y=1){o.set(p),c=y,m(o,c)},getClearAlpha:function(){return c},setClearAlpha:function(p){c=p,m(o,c)},render:v}}function WebGLBindingStates(s,e,n,i){const r=s.getParameter(34921),a=i.isWebGL2?null:e.get("OES_vertex_array_object"),l=i.isWebGL2||a!==null,o={},c=p(null);let u=c,d=!1;function f(F,q,Z,J,X){let ne=!1;if(l){const te=m(J,Z,q);u!==te&&(u=te,_(u.object)),ne=y(F,J,Z,X),ne&&C(F,J,Z,X)}else{const te=q.wireframe===!0;(u.geometry!==J.id||u.program!==Z.id||u.wireframe!==te)&&(u.geometry=J.id,u.program=Z.id,u.wireframe=te,ne=!0)}X!==null&&n.update(X,34963),(ne||d)&&(d=!1,b(F,q,Z,J),X!==null&&s.bindBuffer(34963,n.get(X).buffer))}function h(){return i.isWebGL2?s.createVertexArray():a.createVertexArrayOES()}function _(F){return i.isWebGL2?s.bindVertexArray(F):a.bindVertexArrayOES(F)}function v(F){return i.isWebGL2?s.deleteVertexArray(F):a.deleteVertexArrayOES(F)}function m(F,q,Z){const J=Z.wireframe===!0;let X=o[F.id];X===void 0&&(X={},o[F.id]=X);let ne=X[q.id];ne===void 0&&(ne={},X[q.id]=ne);let te=ne[J];return te===void 0&&(te=p(h()),ne[J]=te),te}function p(F){const q=[],Z=[],J=[];for(let X=0;X<r;X++)q[X]=0,Z[X]=0,J[X]=0;return{geometry:null,program:null,wireframe:!1,newAttributes:q,enabledAttributes:Z,attributeDivisors:J,object:F,attributes:{},index:null}}function y(F,q,Z,J){const X=u.attributes,ne=q.attributes;let te=0;const he=Z.getAttributes();for(const G in he)if(he[G].location>=0){const re=X[G];let se=ne[G];if(se===void 0&&(G==="instanceMatrix"&&F.instanceMatrix&&(se=F.instanceMatrix),G==="instanceColor"&&F.instanceColor&&(se=F.instanceColor)),re===void 0||re.attribute!==se||se&&re.data!==se.data)return!0;te++}return u.attributesNum!==te||u.index!==J}function C(F,q,Z,J){const X={},ne=q.attributes;let te=0;const he=Z.getAttributes();for(const G in he)if(he[G].location>=0){let re=ne[G];re===void 0&&(G==="instanceMatrix"&&F.instanceMatrix&&(re=F.instanceMatrix),G==="instanceColor"&&F.instanceColor&&(re=F.instanceColor));const se={};se.attribute=re,re&&re.data&&(se.data=re.data),X[G]=se,te++}u.attributes=X,u.attributesNum=te,u.index=J}function w(){const F=u.newAttributes;for(let q=0,Z=F.length;q<Z;q++)F[q]=0}function A(F){M(F,0)}function M(F,q){const Z=u.newAttributes,J=u.enabledAttributes,X=u.attributeDivisors;Z[F]=1,J[F]===0&&(s.enableVertexAttribArray(F),J[F]=1),X[F]!==q&&((i.isWebGL2?s:e.get("ANGLE_instanced_arrays"))[i.isWebGL2?"vertexAttribDivisor":"vertexAttribDivisorANGLE"](F,q),X[F]=q)}function P(){const F=u.newAttributes,q=u.enabledAttributes;for(let Z=0,J=q.length;Z<J;Z++)q[Z]!==F[Z]&&(s.disableVertexAttribArray(Z),q[Z]=0)}function N(F,q,Z,J,X,ne){i.isWebGL2===!0&&(Z===5124||Z===5125)?s.vertexAttribIPointer(F,q,Z,X,ne):s.vertexAttribPointer(F,q,Z,J,X,ne)}function b(F,q,Z,J){if(i.isWebGL2===!1&&(F.isInstancedMesh||J.isInstancedBufferGeometry)&&e.get("ANGLE_instanced_arrays")===null)return;w();const X=J.attributes,ne=Z.getAttributes(),te=q.defaultAttributeValues;for(const he in ne){const G=ne[he];if(G.location>=0){let j=X[he];if(j===void 0&&(he==="instanceMatrix"&&F.instanceMatrix&&(j=F.instanceMatrix),he==="instanceColor"&&F.instanceColor&&(j=F.instanceColor)),j!==void 0){const re=j.normalized,se=j.itemSize,V=n.get(j);if(V===void 0)continue;const ye=V.buffer,_e=V.type,pe=V.bytesPerElement;if(j.isInterleavedBufferAttribute){const ce=j.data,Fe=ce.stride,Me=j.offset;if(ce.isInstancedInterleavedBuffer){for(let ve=0;ve<G.locationSize;ve++)M(G.location+ve,ce.meshPerAttribute);F.isInstancedMesh!==!0&&J._maxInstanceCount===void 0&&(J._maxInstanceCount=ce.meshPerAttribute*ce.count)}else for(let ve=0;ve<G.locationSize;ve++)A(G.location+ve);s.bindBuffer(34962,ye);for(let ve=0;ve<G.locationSize;ve++)N(G.location+ve,se/G.locationSize,_e,re,Fe*pe,(Me+se/G.locationSize*ve)*pe)}else{if(j.isInstancedBufferAttribute){for(let ce=0;ce<G.locationSize;ce++)M(G.location+ce,j.meshPerAttribute);F.isInstancedMesh!==!0&&J._maxInstanceCount===void 0&&(J._maxInstanceCount=j.meshPerAttribute*j.count)}else for(let ce=0;ce<G.locationSize;ce++)A(G.location+ce);s.bindBuffer(34962,ye);for(let ce=0;ce<G.locationSize;ce++)N(G.location+ce,se/G.locationSize,_e,re,se*pe,se/G.locationSize*ce*pe)}}else if(te!==void 0){const re=te[he];if(re!==void 0)switch(re.length){case 2:s.vertexAttrib2fv(G.location,re);break;case 3:s.vertexAttrib3fv(G.location,re);break;case 4:s.vertexAttrib4fv(G.location,re);break;default:s.vertexAttrib1fv(G.location,re)}}}}P()}function L(){Q();for(const F in o){const q=o[F];for(const Z in q){const J=q[Z];for(const X in J)v(J[X].object),delete J[X];delete q[Z]}delete o[F]}}function U(F){if(o[F.id]===void 0)return;const q=o[F.id];for(const Z in q){const J=q[Z];for(const X in J)v(J[X].object),delete J[X];delete q[Z]}delete o[F.id]}function Y(F){for(const q in o){const Z=o[q];if(Z[F.id]===void 0)continue;const J=Z[F.id];for(const X in J)v(J[X].object),delete J[X];delete Z[F.id]}}function Q(){O(),d=!0,u!==c&&(u=c,_(u.object))}function O(){c.geometry=null,c.program=null,c.wireframe=!1}return{setup:f,reset:Q,resetDefaultState:O,dispose:L,releaseStatesOfGeometry:U,releaseStatesOfProgram:Y,initAttributes:w,enableAttribute:A,disableUnusedAttributes:P}}function WebGLBufferRenderer(s,e,n,i){const r=i.isWebGL2;let a;function l(u){a=u}function o(u,d){s.drawArrays(a,u,d),n.update(d,a,1)}function c(u,d,f){if(f===0)return;let h,_;if(r)h=s,_="drawArraysInstanced";else if(h=e.get("ANGLE_instanced_arrays"),_="drawArraysInstancedANGLE",h===null){console.error("THREE.WebGLBufferRenderer: using THREE.InstancedBufferGeometry but hardware does not support extension ANGLE_instanced_arrays.");return}h[_](a,u,d,f),n.update(d,a,f)}this.setMode=l,this.render=o,this.renderInstances=c}function WebGLCapabilities(s,e,n){let i;function r(){if(i!==void 0)return i;if(e.has("EXT_texture_filter_anisotropic")===!0){const N=e.get("EXT_texture_filter_anisotropic");i=s.getParameter(N.MAX_TEXTURE_MAX_ANISOTROPY_EXT)}else i=0;return i}function a(N){if(N==="highp"){if(s.getShaderPrecisionFormat(35633,36338).precision>0&&s.getShaderPrecisionFormat(35632,36338).precision>0)return"highp";N="mediump"}return N==="mediump"&&s.getShaderPrecisionFormat(35633,36337).precision>0&&s.getShaderPrecisionFormat(35632,36337).precision>0?"mediump":"lowp"}const l=typeof WebGL2RenderingContext<"u"&&s instanceof WebGL2RenderingContext;let o=n.precision!==void 0?n.precision:"highp";const c=a(o);c!==o&&(console.warn("THREE.WebGLRenderer:",o,"not supported, using",c,"instead."),o=c);const u=l||e.has("WEBGL_draw_buffers"),d=n.logarithmicDepthBuffer===!0,f=s.getParameter(34930),h=s.getParameter(35660),_=s.getParameter(3379),v=s.getParameter(34076),m=s.getParameter(34921),p=s.getParameter(36347),y=s.getParameter(36348),C=s.getParameter(36349),w=h>0,A=l||e.has("OES_texture_float"),M=w&&A,P=l?s.getParameter(36183):0;return{isWebGL2:l,drawBuffers:u,getMaxAnisotropy:r,getMaxPrecision:a,precision:o,logarithmicDepthBuffer:d,maxTextures:f,maxVertexTextures:h,maxTextureSize:_,maxCubemapSize:v,maxAttributes:m,maxVertexUniforms:p,maxVaryings:y,maxFragmentUniforms:C,vertexTextures:w,floatFragmentTextures:A,floatVertexTextures:M,maxSamples:P}}function WebGLClipping(s){const e=this;let n=null,i=0,r=!1,a=!1;const l=new Plane,o=new Matrix3,c={value:null,needsUpdate:!1};this.uniform=c,this.numPlanes=0,this.numIntersection=0,this.init=function(f,h){const _=f.length!==0||h||i!==0||r;return r=h,i=f.length,_},this.beginShadows=function(){a=!0,d(null)},this.endShadows=function(){a=!1},this.setGlobalState=function(f,h){n=d(f,h,0)},this.setState=function(f,h,_){const v=f.clippingPlanes,m=f.clipIntersection,p=f.clipShadows,y=s.get(f);if(!r||v===null||v.length===0||a&&!p)a?d(null):u();else{const C=a?0:i,w=C*4;let A=y.clippingState||null;c.value=A,A=d(v,h,w,_);for(let M=0;M!==w;++M)A[M]=n[M];y.clippingState=A,this.numIntersection=m?this.numPlanes:0,this.numPlanes+=C}};function u(){c.value!==n&&(c.value=n,c.needsUpdate=i>0),e.numPlanes=i,e.numIntersection=0}function d(f,h,_,v){const m=f!==null?f.length:0;let p=null;if(m!==0){if(p=c.value,v!==!0||p===null){const y=_+m*4,C=h.matrixWorldInverse;o.getNormalMatrix(C),(p===null||p.length<y)&&(p=new Float32Array(y));for(let w=0,A=_;w!==m;++w,A+=4)l.copy(f[w]).applyMatrix4(C,o),l.normal.toArray(p,A),p[A+3]=l.constant}c.value=p,c.needsUpdate=!0}return e.numPlanes=m,e.numIntersection=0,p}}function WebGLCubeMaps(s){let e=new WeakMap;function n(l,o){return o===EquirectangularReflectionMapping?l.mapping=CubeReflectionMapping:o===EquirectangularRefractionMapping&&(l.mapping=CubeRefractionMapping),l}function i(l){if(l&&l.isTexture&&l.isRenderTargetTexture===!1){const o=l.mapping;if(o===EquirectangularReflectionMapping||o===EquirectangularRefractionMapping)if(e.has(l)){const c=e.get(l).texture;return n(c,l.mapping)}else{const c=l.image;if(c&&c.height>0){const u=new WebGLCubeRenderTarget(c.height/2);return u.fromEquirectangularTexture(s,l),e.set(l,u),l.addEventListener("dispose",r),n(u.texture,l.mapping)}else return null}}return l}function r(l){const o=l.target;o.removeEventListener("dispose",r);const c=e.get(o);c!==void 0&&(e.delete(o),c.dispose())}function a(){e=new WeakMap}return{get:i,dispose:a}}class OrthographicCamera extends Camera{constructor(e=-1,n=1,i=1,r=-1,a=.1,l=2e3){super(),this.isOrthographicCamera=!0,this.type="OrthographicCamera",this.zoom=1,this.view=null,this.left=e,this.right=n,this.top=i,this.bottom=r,this.near=a,this.far=l,this.updateProjectionMatrix()}copy(e,n){return super.copy(e,n),this.left=e.left,this.right=e.right,this.top=e.top,this.bottom=e.bottom,this.near=e.near,this.far=e.far,this.zoom=e.zoom,this.view=e.view===null?null:Object.assign({},e.view),this}setViewOffset(e,n,i,r,a,l){this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=n,this.view.offsetX=i,this.view.offsetY=r,this.view.width=a,this.view.height=l,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const e=(this.right-this.left)/(2*this.zoom),n=(this.top-this.bottom)/(2*this.zoom),i=(this.right+this.left)/2,r=(this.top+this.bottom)/2;let a=i-e,l=i+e,o=r+n,c=r-n;if(this.view!==null&&this.view.enabled){const u=(this.right-this.left)/this.view.fullWidth/this.zoom,d=(this.top-this.bottom)/this.view.fullHeight/this.zoom;a+=u*this.view.offsetX,l=a+u*this.view.width,o-=d*this.view.offsetY,c=o-d*this.view.height}this.projectionMatrix.makeOrthographic(a,l,o,c,this.near,this.far),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){const n=super.toJSON(e);return n.object.zoom=this.zoom,n.object.left=this.left,n.object.right=this.right,n.object.top=this.top,n.object.bottom=this.bottom,n.object.near=this.near,n.object.far=this.far,this.view!==null&&(n.object.view=Object.assign({},this.view)),n}}const LOD_MIN=4,EXTRA_LOD_SIGMA=[.125,.215,.35,.446,.526,.582],MAX_SAMPLES=20,_flatCamera=new OrthographicCamera,_clearColor=new Color$1;let _oldTarget=null;const PHI=(1+Math.sqrt(5))/2,INV_PHI=1/PHI,_axisDirections=[new Vector3(1,1,1),new Vector3(-1,1,1),new Vector3(1,1,-1),new Vector3(-1,1,-1),new Vector3(0,PHI,INV_PHI),new Vector3(0,PHI,-INV_PHI),new Vector3(INV_PHI,0,PHI),new Vector3(-INV_PHI,0,PHI),new Vector3(PHI,INV_PHI,0),new Vector3(-PHI,INV_PHI,0)];class PMREMGenerator{constructor(e){this._renderer=e,this._pingPongRenderTarget=null,this._lodMax=0,this._cubeSize=0,this._lodPlanes=[],this._sizeLods=[],this._sigmas=[],this._blurMaterial=null,this._cubemapMaterial=null,this._equirectMaterial=null,this._compileMaterial(this._blurMaterial)}fromScene(e,n=0,i=.1,r=100){_oldTarget=this._renderer.getRenderTarget(),this._setSize(256);const a=this._allocateTargets();return a.depthBuffer=!0,this._sceneToCubeUV(e,i,r,a),n>0&&this._blur(a,0,0,n),this._applyPMREM(a),this._cleanup(a),a}fromEquirectangular(e,n=null){return this._fromTexture(e,n)}fromCubemap(e,n=null){return this._fromTexture(e,n)}compileCubemapShader(){this._cubemapMaterial===null&&(this._cubemapMaterial=_getCubemapMaterial(),this._compileMaterial(this._cubemapMaterial))}compileEquirectangularShader(){this._equirectMaterial===null&&(this._equirectMaterial=_getEquirectMaterial(),this._compileMaterial(this._equirectMaterial))}dispose(){this._dispose(),this._cubemapMaterial!==null&&this._cubemapMaterial.dispose(),this._equirectMaterial!==null&&this._equirectMaterial.dispose()}_setSize(e){this._lodMax=Math.floor(Math.log2(e)),this._cubeSize=Math.pow(2,this._lodMax)}_dispose(){this._blurMaterial!==null&&this._blurMaterial.dispose(),this._pingPongRenderTarget!==null&&this._pingPongRenderTarget.dispose();for(let e=0;e<this._lodPlanes.length;e++)this._lodPlanes[e].dispose()}_cleanup(e){this._renderer.setRenderTarget(_oldTarget),e.scissorTest=!1,_setViewport(e,0,0,e.width,e.height)}_fromTexture(e,n){e.mapping===CubeReflectionMapping||e.mapping===CubeRefractionMapping?this._setSize(e.image.length===0?16:e.image[0].width||e.image[0].image.width):this._setSize(e.image.width/4),_oldTarget=this._renderer.getRenderTarget();const i=n||this._allocateTargets();return this._textureToCubeUV(e,i),this._applyPMREM(i),this._cleanup(i),i}_allocateTargets(){const e=3*Math.max(this._cubeSize,112),n=4*this._cubeSize,i={magFilter:LinearFilter,minFilter:LinearFilter,generateMipmaps:!1,type:HalfFloatType,format:RGBAFormat,encoding:LinearEncoding,depthBuffer:!1},r=_createRenderTarget(e,n,i);if(this._pingPongRenderTarget===null||this._pingPongRenderTarget.width!==e||this._pingPongRenderTarget.height!==n){this._pingPongRenderTarget!==null&&this._dispose(),this._pingPongRenderTarget=_createRenderTarget(e,n,i);const{_lodMax:a}=this;({sizeLods:this._sizeLods,lodPlanes:this._lodPlanes,sigmas:this._sigmas}=_createPlanes(a)),this._blurMaterial=_getBlurShader(a,e,n)}return r}_compileMaterial(e){const n=new Mesh(this._lodPlanes[0],e);this._renderer.compile(n,_flatCamera)}_sceneToCubeUV(e,n,i,r){const o=new PerspectiveCamera(90,1,n,i),c=[1,-1,1,1,1,1],u=[1,1,1,-1,-1,-1],d=this._renderer,f=d.autoClear,h=d.toneMapping;d.getClearColor(_clearColor),d.toneMapping=NoToneMapping,d.autoClear=!1;const _=new MeshBasicMaterial({name:"PMREM.Background",side:BackSide,depthWrite:!1,depthTest:!1}),v=new Mesh(new BoxGeometry,_);let m=!1;const p=e.background;p?p.isColor&&(_.color.copy(p),e.background=null,m=!0):(_.color.copy(_clearColor),m=!0);for(let y=0;y<6;y++){const C=y%3;C===0?(o.up.set(0,c[y],0),o.lookAt(u[y],0,0)):C===1?(o.up.set(0,0,c[y]),o.lookAt(0,u[y],0)):(o.up.set(0,c[y],0),o.lookAt(0,0,u[y]));const w=this._cubeSize;_setViewport(r,C*w,y>2?w:0,w,w),d.setRenderTarget(r),m&&d.render(v,o),d.render(e,o)}v.geometry.dispose(),v.material.dispose(),d.toneMapping=h,d.autoClear=f,e.background=p}_textureToCubeUV(e,n){const i=this._renderer,r=e.mapping===CubeReflectionMapping||e.mapping===CubeRefractionMapping;r?(this._cubemapMaterial===null&&(this._cubemapMaterial=_getCubemapMaterial()),this._cubemapMaterial.uniforms.flipEnvMap.value=e.isRenderTargetTexture===!1?-1:1):this._equirectMaterial===null&&(this._equirectMaterial=_getEquirectMaterial());const a=r?this._cubemapMaterial:this._equirectMaterial,l=new Mesh(this._lodPlanes[0],a),o=a.uniforms;o.envMap.value=e;const c=this._cubeSize;_setViewport(n,0,0,3*c,2*c),i.setRenderTarget(n),i.render(l,_flatCamera)}_applyPMREM(e){const n=this._renderer,i=n.autoClear;n.autoClear=!1;for(let r=1;r<this._lodPlanes.length;r++){const a=Math.sqrt(this._sigmas[r]*this._sigmas[r]-this._sigmas[r-1]*this._sigmas[r-1]),l=_axisDirections[(r-1)%_axisDirections.length];this._blur(e,r-1,r,a,l)}n.autoClear=i}_blur(e,n,i,r,a){const l=this._pingPongRenderTarget;this._halfBlur(e,l,n,i,r,"latitudinal",a),this._halfBlur(l,e,i,i,r,"longitudinal",a)}_halfBlur(e,n,i,r,a,l,o){const c=this._renderer,u=this._blurMaterial;l!=="latitudinal"&&l!=="longitudinal"&&console.error("blur direction must be either latitudinal or longitudinal!");const d=3,f=new Mesh(this._lodPlanes[r],u),h=u.uniforms,_=this._sizeLods[i]-1,v=isFinite(a)?Math.PI/(2*_):2*Math.PI/(2*MAX_SAMPLES-1),m=a/v,p=isFinite(a)?1+Math.floor(d*m):MAX_SAMPLES;p>MAX_SAMPLES&&console.warn(`sigmaRadians, ${a}, is too large and will clip, as it requested ${p} samples when the maximum is set to ${MAX_SAMPLES}`);const y=[];let C=0;for(let N=0;N<MAX_SAMPLES;++N){const b=N/m,L=Math.exp(-b*b/2);y.push(L),N===0?C+=L:N<p&&(C+=2*L)}for(let N=0;N<y.length;N++)y[N]=y[N]/C;h.envMap.value=e.texture,h.samples.value=p,h.weights.value=y,h.latitudinal.value=l==="latitudinal",o&&(h.poleAxis.value=o);const{_lodMax:w}=this;h.dTheta.value=v,h.mipInt.value=w-i;const A=this._sizeLods[r],M=3*A*(r>w-LOD_MIN?r-w+LOD_MIN:0),P=4*(this._cubeSize-A);_setViewport(n,M,P,3*A,2*A),c.setRenderTarget(n),c.render(f,_flatCamera)}}function _createPlanes(s){const e=[],n=[],i=[];let r=s;const a=s-LOD_MIN+1+EXTRA_LOD_SIGMA.length;for(let l=0;l<a;l++){const o=Math.pow(2,r);n.push(o);let c=1/o;l>s-LOD_MIN?c=EXTRA_LOD_SIGMA[l-s+LOD_MIN-1]:l===0&&(c=0),i.push(c);const u=1/(o-2),d=-u,f=1+u,h=[d,d,f,d,f,f,d,d,f,f,d,f],_=6,v=6,m=3,p=2,y=1,C=new Float32Array(m*v*_),w=new Float32Array(p*v*_),A=new Float32Array(y*v*_);for(let P=0;P<_;P++){const N=P%3*2/3-1,b=P>2?0:-1,L=[N,b,0,N+2/3,b,0,N+2/3,b+1,0,N,b,0,N+2/3,b+1,0,N,b+1,0];C.set(L,m*v*P),w.set(h,p*v*P);const U=[P,P,P,P,P,P];A.set(U,y*v*P)}const M=new BufferGeometry;M.setAttribute("position",new BufferAttribute(C,m)),M.setAttribute("uv",new BufferAttribute(w,p)),M.setAttribute("faceIndex",new BufferAttribute(A,y)),e.push(M),r>LOD_MIN&&r--}return{lodPlanes:e,sizeLods:n,sigmas:i}}function _createRenderTarget(s,e,n){const i=new WebGLRenderTarget(s,e,n);return i.texture.mapping=CubeUVReflectionMapping,i.texture.name="PMREM.cubeUv",i.scissorTest=!0,i}function _setViewport(s,e,n,i,r){s.viewport.set(e,n,i,r),s.scissor.set(e,n,i,r)}function _getBlurShader(s,e,n){const i=new Float32Array(MAX_SAMPLES),r=new Vector3(0,1,0);return new ShaderMaterial({name:"SphericalGaussianBlur",defines:{n:MAX_SAMPLES,CUBEUV_TEXEL_WIDTH:1/e,CUBEUV_TEXEL_HEIGHT:1/n,CUBEUV_MAX_MIP:`${s}.0`},uniforms:{envMap:{value:null},samples:{value:1},weights:{value:i},latitudinal:{value:!1},dTheta:{value:0},mipInt:{value:0},poleAxis:{value:r}},vertexShader:_getCommonVertexShader(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			varying vec3 vOutputDirection;

			uniform sampler2D envMap;
			uniform int samples;
			uniform float weights[ n ];
			uniform bool latitudinal;
			uniform float dTheta;
			uniform float mipInt;
			uniform vec3 poleAxis;

			#define ENVMAP_TYPE_CUBE_UV
			#include <cube_uv_reflection_fragment>

			vec3 getSample( float theta, vec3 axis ) {

				float cosTheta = cos( theta );
				// Rodrigues' axis-angle rotation
				vec3 sampleDirection = vOutputDirection * cosTheta
					+ cross( axis, vOutputDirection ) * sin( theta )
					+ axis * dot( axis, vOutputDirection ) * ( 1.0 - cosTheta );

				return bilinearCubeUV( envMap, sampleDirection, mipInt );

			}

			void main() {

				vec3 axis = latitudinal ? poleAxis : cross( poleAxis, vOutputDirection );

				if ( all( equal( axis, vec3( 0.0 ) ) ) ) {

					axis = vec3( vOutputDirection.z, 0.0, - vOutputDirection.x );

				}

				axis = normalize( axis );

				gl_FragColor = vec4( 0.0, 0.0, 0.0, 1.0 );
				gl_FragColor.rgb += weights[ 0 ] * getSample( 0.0, axis );

				for ( int i = 1; i < n; i++ ) {

					if ( i >= samples ) {

						break;

					}

					float theta = dTheta * float( i );
					gl_FragColor.rgb += weights[ i ] * getSample( -1.0 * theta, axis );
					gl_FragColor.rgb += weights[ i ] * getSample( theta, axis );

				}

			}
		`,blending:NoBlending,depthTest:!1,depthWrite:!1})}function _getEquirectMaterial(){return new ShaderMaterial({name:"EquirectangularToCubeUV",uniforms:{envMap:{value:null}},vertexShader:_getCommonVertexShader(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			varying vec3 vOutputDirection;

			uniform sampler2D envMap;

			#include <common>

			void main() {

				vec3 outputDirection = normalize( vOutputDirection );
				vec2 uv = equirectUv( outputDirection );

				gl_FragColor = vec4( texture2D ( envMap, uv ).rgb, 1.0 );

			}
		`,blending:NoBlending,depthTest:!1,depthWrite:!1})}function _getCubemapMaterial(){return new ShaderMaterial({name:"CubemapToCubeUV",uniforms:{envMap:{value:null},flipEnvMap:{value:-1}},vertexShader:_getCommonVertexShader(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			uniform float flipEnvMap;

			varying vec3 vOutputDirection;

			uniform samplerCube envMap;

			void main() {

				gl_FragColor = textureCube( envMap, vec3( flipEnvMap * vOutputDirection.x, vOutputDirection.yz ) );

			}
		`,blending:NoBlending,depthTest:!1,depthWrite:!1})}function _getCommonVertexShader(){return`

		precision mediump float;
		precision mediump int;

		attribute float faceIndex;

		varying vec3 vOutputDirection;

		// RH coordinate system; PMREM face-indexing convention
		vec3 getDirection( vec2 uv, float face ) {

			uv = 2.0 * uv - 1.0;

			vec3 direction = vec3( uv, 1.0 );

			if ( face == 0.0 ) {

				direction = direction.zyx; // ( 1, v, u ) pos x

			} else if ( face == 1.0 ) {

				direction = direction.xzy;
				direction.xz *= -1.0; // ( -u, 1, -v ) pos y

			} else if ( face == 2.0 ) {

				direction.x *= -1.0; // ( -u, v, 1 ) pos z

			} else if ( face == 3.0 ) {

				direction = direction.zyx;
				direction.xz *= -1.0; // ( -1, v, -u ) neg x

			} else if ( face == 4.0 ) {

				direction = direction.xzy;
				direction.xy *= -1.0; // ( -u, -1, v ) neg y

			} else if ( face == 5.0 ) {

				direction.z *= -1.0; // ( u, v, -1 ) neg z

			}

			return direction;

		}

		void main() {

			vOutputDirection = getDirection( uv, faceIndex );
			gl_Position = vec4( position, 1.0 );

		}
	`}function WebGLCubeUVMaps(s){let e=new WeakMap,n=null;function i(o){if(o&&o.isTexture){const c=o.mapping,u=c===EquirectangularReflectionMapping||c===EquirectangularRefractionMapping,d=c===CubeReflectionMapping||c===CubeRefractionMapping;if(u||d)if(o.isRenderTargetTexture&&o.needsPMREMUpdate===!0){o.needsPMREMUpdate=!1;let f=e.get(o);return n===null&&(n=new PMREMGenerator(s)),f=u?n.fromEquirectangular(o,f):n.fromCubemap(o,f),e.set(o,f),f.texture}else{if(e.has(o))return e.get(o).texture;{const f=o.image;if(u&&f&&f.height>0||d&&f&&r(f)){n===null&&(n=new PMREMGenerator(s));const h=u?n.fromEquirectangular(o):n.fromCubemap(o);return e.set(o,h),o.addEventListener("dispose",a),h.texture}else return null}}}return o}function r(o){let c=0;const u=6;for(let d=0;d<u;d++)o[d]!==void 0&&c++;return c===u}function a(o){const c=o.target;c.removeEventListener("dispose",a);const u=e.get(c);u!==void 0&&(e.delete(c),u.dispose())}function l(){e=new WeakMap,n!==null&&(n.dispose(),n=null)}return{get:i,dispose:l}}function WebGLExtensions(s){const e={};function n(i){if(e[i]!==void 0)return e[i];let r;switch(i){case"WEBGL_depth_texture":r=s.getExtension("WEBGL_depth_texture")||s.getExtension("MOZ_WEBGL_depth_texture")||s.getExtension("WEBKIT_WEBGL_depth_texture");break;case"EXT_texture_filter_anisotropic":r=s.getExtension("EXT_texture_filter_anisotropic")||s.getExtension("MOZ_EXT_texture_filter_anisotropic")||s.getExtension("WEBKIT_EXT_texture_filter_anisotropic");break;case"WEBGL_compressed_texture_s3tc":r=s.getExtension("WEBGL_compressed_texture_s3tc")||s.getExtension("MOZ_WEBGL_compressed_texture_s3tc")||s.getExtension("WEBKIT_WEBGL_compressed_texture_s3tc");break;case"WEBGL_compressed_texture_pvrtc":r=s.getExtension("WEBGL_compressed_texture_pvrtc")||s.getExtension("WEBKIT_WEBGL_compressed_texture_pvrtc");break;default:r=s.getExtension(i)}return e[i]=r,r}return{has:function(i){return n(i)!==null},init:function(i){i.isWebGL2?n("EXT_color_buffer_float"):(n("WEBGL_depth_texture"),n("OES_texture_float"),n("OES_texture_half_float"),n("OES_texture_half_float_linear"),n("OES_standard_derivatives"),n("OES_element_index_uint"),n("OES_vertex_array_object"),n("ANGLE_instanced_arrays")),n("OES_texture_float_linear"),n("EXT_color_buffer_half_float"),n("WEBGL_multisampled_render_to_texture")},get:function(i){const r=n(i);return r===null&&console.warn("THREE.WebGLRenderer: "+i+" extension not supported."),r}}}function WebGLGeometries(s,e,n,i){const r={},a=new WeakMap;function l(f){const h=f.target;h.index!==null&&e.remove(h.index);for(const v in h.attributes)e.remove(h.attributes[v]);h.removeEventListener("dispose",l),delete r[h.id];const _=a.get(h);_&&(e.remove(_),a.delete(h)),i.releaseStatesOfGeometry(h),h.isInstancedBufferGeometry===!0&&delete h._maxInstanceCount,n.memory.geometries--}function o(f,h){return r[h.id]===!0||(h.addEventListener("dispose",l),r[h.id]=!0,n.memory.geometries++),h}function c(f){const h=f.attributes;for(const v in h)e.update(h[v],34962);const _=f.morphAttributes;for(const v in _){const m=_[v];for(let p=0,y=m.length;p<y;p++)e.update(m[p],34962)}}function u(f){const h=[],_=f.index,v=f.attributes.position;let m=0;if(_!==null){const C=_.array;m=_.version;for(let w=0,A=C.length;w<A;w+=3){const M=C[w+0],P=C[w+1],N=C[w+2];h.push(M,P,P,N,N,M)}}else{const C=v.array;m=v.version;for(let w=0,A=C.length/3-1;w<A;w+=3){const M=w+0,P=w+1,N=w+2;h.push(M,P,P,N,N,M)}}const p=new(arrayNeedsUint32(h)?Uint32BufferAttribute:Uint16BufferAttribute)(h,1);p.version=m;const y=a.get(f);y&&e.remove(y),a.set(f,p)}function d(f){const h=a.get(f);if(h){const _=f.index;_!==null&&h.version<_.version&&u(f)}else u(f);return a.get(f)}return{get:o,update:c,getWireframeAttribute:d}}function WebGLIndexedBufferRenderer(s,e,n,i){const r=i.isWebGL2;let a;function l(h){a=h}let o,c;function u(h){o=h.type,c=h.bytesPerElement}function d(h,_){s.drawElements(a,_,o,h*c),n.update(_,a,1)}function f(h,_,v){if(v===0)return;let m,p;if(r)m=s,p="drawElementsInstanced";else if(m=e.get("ANGLE_instanced_arrays"),p="drawElementsInstancedANGLE",m===null){console.error("THREE.WebGLIndexedBufferRenderer: using THREE.InstancedBufferGeometry but hardware does not support extension ANGLE_instanced_arrays.");return}m[p](a,_,o,h*c,v),n.update(_,a,v)}this.setMode=l,this.setIndex=u,this.render=d,this.renderInstances=f}function WebGLInfo(s){const e={geometries:0,textures:0},n={frame:0,calls:0,triangles:0,points:0,lines:0};function i(a,l,o){switch(n.calls++,l){case 4:n.triangles+=o*(a/3);break;case 1:n.lines+=o*(a/2);break;case 3:n.lines+=o*(a-1);break;case 2:n.lines+=o*a;break;case 0:n.points+=o*a;break;default:console.error("THREE.WebGLInfo: Unknown draw mode:",l);break}}function r(){n.frame++,n.calls=0,n.triangles=0,n.points=0,n.lines=0}return{memory:e,render:n,programs:null,autoReset:!0,reset:r,update:i}}function numericalSort(s,e){return s[0]-e[0]}function absNumericalSort(s,e){return Math.abs(e[1])-Math.abs(s[1])}function WebGLMorphtargets(s,e,n){const i={},r=new Float32Array(8),a=new WeakMap,l=new Vector4,o=[];for(let u=0;u<8;u++)o[u]=[u,0];function c(u,d,f,h){const _=u.morphTargetInfluences;if(e.isWebGL2===!0){const m=d.morphAttributes.position||d.morphAttributes.normal||d.morphAttributes.color,p=m!==void 0?m.length:0;let y=a.get(d);if(y===void 0||y.count!==p){let Z=function(){F.dispose(),a.delete(d),d.removeEventListener("dispose",Z)};var v=Z;y!==void 0&&y.texture.dispose();const A=d.morphAttributes.position!==void 0,M=d.morphAttributes.normal!==void 0,P=d.morphAttributes.color!==void 0,N=d.morphAttributes.position||[],b=d.morphAttributes.normal||[],L=d.morphAttributes.color||[];let U=0;A===!0&&(U=1),M===!0&&(U=2),P===!0&&(U=3);let Y=d.attributes.position.count*U,Q=1;Y>e.maxTextureSize&&(Q=Math.ceil(Y/e.maxTextureSize),Y=e.maxTextureSize);const O=new Float32Array(Y*Q*4*p),F=new DataArrayTexture(O,Y,Q,p);F.type=FloatType,F.needsUpdate=!0;const q=U*4;for(let J=0;J<p;J++){const X=N[J],ne=b[J],te=L[J],he=Y*Q*4*J;for(let G=0;G<X.count;G++){const j=G*q;A===!0&&(l.fromBufferAttribute(X,G),O[he+j+0]=l.x,O[he+j+1]=l.y,O[he+j+2]=l.z,O[he+j+3]=0),M===!0&&(l.fromBufferAttribute(ne,G),O[he+j+4]=l.x,O[he+j+5]=l.y,O[he+j+6]=l.z,O[he+j+7]=0),P===!0&&(l.fromBufferAttribute(te,G),O[he+j+8]=l.x,O[he+j+9]=l.y,O[he+j+10]=l.z,O[he+j+11]=te.itemSize===4?l.w:1)}}y={count:p,texture:F,size:new Vector2(Y,Q)},a.set(d,y),d.addEventListener("dispose",Z)}let C=0;for(let A=0;A<_.length;A++)C+=_[A];const w=d.morphTargetsRelative?1:1-C;h.getUniforms().setValue(s,"morphTargetBaseInfluence",w),h.getUniforms().setValue(s,"morphTargetInfluences",_),h.getUniforms().setValue(s,"morphTargetsTexture",y.texture,n),h.getUniforms().setValue(s,"morphTargetsTextureSize",y.size)}else{const m=_===void 0?0:_.length;let p=i[d.id];if(p===void 0||p.length!==m){p=[];for(let M=0;M<m;M++)p[M]=[M,0];i[d.id]=p}for(let M=0;M<m;M++){const P=p[M];P[0]=M,P[1]=_[M]}p.sort(absNumericalSort);for(let M=0;M<8;M++)M<m&&p[M][1]?(o[M][0]=p[M][0],o[M][1]=p[M][1]):(o[M][0]=Number.MAX_SAFE_INTEGER,o[M][1]=0);o.sort(numericalSort);const y=d.morphAttributes.position,C=d.morphAttributes.normal;let w=0;for(let M=0;M<8;M++){const P=o[M],N=P[0],b=P[1];N!==Number.MAX_SAFE_INTEGER&&b?(y&&d.getAttribute("morphTarget"+M)!==y[N]&&d.setAttribute("morphTarget"+M,y[N]),C&&d.getAttribute("morphNormal"+M)!==C[N]&&d.setAttribute("morphNormal"+M,C[N]),r[M]=b,w+=b):(y&&d.hasAttribute("morphTarget"+M)===!0&&d.deleteAttribute("morphTarget"+M),C&&d.hasAttribute("morphNormal"+M)===!0&&d.deleteAttribute("morphNormal"+M),r[M]=0)}const A=d.morphTargetsRelative?1:1-w;h.getUniforms().setValue(s,"morphTargetBaseInfluence",A),h.getUniforms().setValue(s,"morphTargetInfluences",r)}}return{update:c}}function WebGLObjects(s,e,n,i){let r=new WeakMap;function a(c){const u=i.render.frame,d=c.geometry,f=e.get(c,d);return r.get(f)!==u&&(e.update(f),r.set(f,u)),c.isInstancedMesh&&(c.hasEventListener("dispose",o)===!1&&c.addEventListener("dispose",o),n.update(c.instanceMatrix,34962),c.instanceColor!==null&&n.update(c.instanceColor,34962)),f}function l(){r=new WeakMap}function o(c){const u=c.target;u.removeEventListener("dispose",o),n.remove(u.instanceMatrix),u.instanceColor!==null&&n.remove(u.instanceColor)}return{update:a,dispose:l}}const emptyTexture=new Texture,emptyArrayTexture=new DataArrayTexture,empty3dTexture=new Data3DTexture,emptyCubeTexture=new CubeTexture,arrayCacheF32=[],arrayCacheI32=[],mat4array=new Float32Array(16),mat3array=new Float32Array(9),mat2array=new Float32Array(4);function flatten(s,e,n){const i=s[0];if(i<=0||i>0)return s;const r=e*n;let a=arrayCacheF32[r];if(a===void 0&&(a=new Float32Array(r),arrayCacheF32[r]=a),e!==0){i.toArray(a,0);for(let l=1,o=0;l!==e;++l)o+=n,s[l].toArray(a,o)}return a}function arraysEqual(s,e){if(s.length!==e.length)return!1;for(let n=0,i=s.length;n<i;n++)if(s[n]!==e[n])return!1;return!0}function copyArray(s,e){for(let n=0,i=e.length;n<i;n++)s[n]=e[n]}function allocTexUnits(s,e){let n=arrayCacheI32[e];n===void 0&&(n=new Int32Array(e),arrayCacheI32[e]=n);for(let i=0;i!==e;++i)n[i]=s.allocateTextureUnit();return n}function setValueV1f(s,e){const n=this.cache;n[0]!==e&&(s.uniform1f(this.addr,e),n[0]=e)}function setValueV2f(s,e){const n=this.cache;if(e.x!==void 0)(n[0]!==e.x||n[1]!==e.y)&&(s.uniform2f(this.addr,e.x,e.y),n[0]=e.x,n[1]=e.y);else{if(arraysEqual(n,e))return;s.uniform2fv(this.addr,e),copyArray(n,e)}}function setValueV3f(s,e){const n=this.cache;if(e.x!==void 0)(n[0]!==e.x||n[1]!==e.y||n[2]!==e.z)&&(s.uniform3f(this.addr,e.x,e.y,e.z),n[0]=e.x,n[1]=e.y,n[2]=e.z);else if(e.r!==void 0)(n[0]!==e.r||n[1]!==e.g||n[2]!==e.b)&&(s.uniform3f(this.addr,e.r,e.g,e.b),n[0]=e.r,n[1]=e.g,n[2]=e.b);else{if(arraysEqual(n,e))return;s.uniform3fv(this.addr,e),copyArray(n,e)}}function setValueV4f(s,e){const n=this.cache;if(e.x!==void 0)(n[0]!==e.x||n[1]!==e.y||n[2]!==e.z||n[3]!==e.w)&&(s.uniform4f(this.addr,e.x,e.y,e.z,e.w),n[0]=e.x,n[1]=e.y,n[2]=e.z,n[3]=e.w);else{if(arraysEqual(n,e))return;s.uniform4fv(this.addr,e),copyArray(n,e)}}function setValueM2(s,e){const n=this.cache,i=e.elements;if(i===void 0){if(arraysEqual(n,e))return;s.uniformMatrix2fv(this.addr,!1,e),copyArray(n,e)}else{if(arraysEqual(n,i))return;mat2array.set(i),s.uniformMatrix2fv(this.addr,!1,mat2array),copyArray(n,i)}}function setValueM3(s,e){const n=this.cache,i=e.elements;if(i===void 0){if(arraysEqual(n,e))return;s.uniformMatrix3fv(this.addr,!1,e),copyArray(n,e)}else{if(arraysEqual(n,i))return;mat3array.set(i),s.uniformMatrix3fv(this.addr,!1,mat3array),copyArray(n,i)}}function setValueM4(s,e){const n=this.cache,i=e.elements;if(i===void 0){if(arraysEqual(n,e))return;s.uniformMatrix4fv(this.addr,!1,e),copyArray(n,e)}else{if(arraysEqual(n,i))return;mat4array.set(i),s.uniformMatrix4fv(this.addr,!1,mat4array),copyArray(n,i)}}function setValueV1i(s,e){const n=this.cache;n[0]!==e&&(s.uniform1i(this.addr,e),n[0]=e)}function setValueV2i(s,e){const n=this.cache;if(e.x!==void 0)(n[0]!==e.x||n[1]!==e.y)&&(s.uniform2i(this.addr,e.x,e.y),n[0]=e.x,n[1]=e.y);else{if(arraysEqual(n,e))return;s.uniform2iv(this.addr,e),copyArray(n,e)}}function setValueV3i(s,e){const n=this.cache;if(e.x!==void 0)(n[0]!==e.x||n[1]!==e.y||n[2]!==e.z)&&(s.uniform3i(this.addr,e.x,e.y,e.z),n[0]=e.x,n[1]=e.y,n[2]=e.z);else{if(arraysEqual(n,e))return;s.uniform3iv(this.addr,e),copyArray(n,e)}}function setValueV4i(s,e){const n=this.cache;if(e.x!==void 0)(n[0]!==e.x||n[1]!==e.y||n[2]!==e.z||n[3]!==e.w)&&(s.uniform4i(this.addr,e.x,e.y,e.z,e.w),n[0]=e.x,n[1]=e.y,n[2]=e.z,n[3]=e.w);else{if(arraysEqual(n,e))return;s.uniform4iv(this.addr,e),copyArray(n,e)}}function setValueV1ui(s,e){const n=this.cache;n[0]!==e&&(s.uniform1ui(this.addr,e),n[0]=e)}function setValueV2ui(s,e){const n=this.cache;if(e.x!==void 0)(n[0]!==e.x||n[1]!==e.y)&&(s.uniform2ui(this.addr,e.x,e.y),n[0]=e.x,n[1]=e.y);else{if(arraysEqual(n,e))return;s.uniform2uiv(this.addr,e),copyArray(n,e)}}function setValueV3ui(s,e){const n=this.cache;if(e.x!==void 0)(n[0]!==e.x||n[1]!==e.y||n[2]!==e.z)&&(s.uniform3ui(this.addr,e.x,e.y,e.z),n[0]=e.x,n[1]=e.y,n[2]=e.z);else{if(arraysEqual(n,e))return;s.uniform3uiv(this.addr,e),copyArray(n,e)}}function setValueV4ui(s,e){const n=this.cache;if(e.x!==void 0)(n[0]!==e.x||n[1]!==e.y||n[2]!==e.z||n[3]!==e.w)&&(s.uniform4ui(this.addr,e.x,e.y,e.z,e.w),n[0]=e.x,n[1]=e.y,n[2]=e.z,n[3]=e.w);else{if(arraysEqual(n,e))return;s.uniform4uiv(this.addr,e),copyArray(n,e)}}function setValueT1(s,e,n){const i=this.cache,r=n.allocateTextureUnit();i[0]!==r&&(s.uniform1i(this.addr,r),i[0]=r),n.setTexture2D(e||emptyTexture,r)}function setValueT3D1(s,e,n){const i=this.cache,r=n.allocateTextureUnit();i[0]!==r&&(s.uniform1i(this.addr,r),i[0]=r),n.setTexture3D(e||empty3dTexture,r)}function setValueT6(s,e,n){const i=this.cache,r=n.allocateTextureUnit();i[0]!==r&&(s.uniform1i(this.addr,r),i[0]=r),n.setTextureCube(e||emptyCubeTexture,r)}function setValueT2DArray1(s,e,n){const i=this.cache,r=n.allocateTextureUnit();i[0]!==r&&(s.uniform1i(this.addr,r),i[0]=r),n.setTexture2DArray(e||emptyArrayTexture,r)}function getSingularSetter(s){switch(s){case 5126:return setValueV1f;case 35664:return setValueV2f;case 35665:return setValueV3f;case 35666:return setValueV4f;case 35674:return setValueM2;case 35675:return setValueM3;case 35676:return setValueM4;case 5124:case 35670:return setValueV1i;case 35667:case 35671:return setValueV2i;case 35668:case 35672:return setValueV3i;case 35669:case 35673:return setValueV4i;case 5125:return setValueV1ui;case 36294:return setValueV2ui;case 36295:return setValueV3ui;case 36296:return setValueV4ui;case 35678:case 36198:case 36298:case 36306:case 35682:return setValueT1;case 35679:case 36299:case 36307:return setValueT3D1;case 35680:case 36300:case 36308:case 36293:return setValueT6;case 36289:case 36303:case 36311:case 36292:return setValueT2DArray1}}function setValueV1fArray(s,e){s.uniform1fv(this.addr,e)}function setValueV2fArray(s,e){const n=flatten(e,this.size,2);s.uniform2fv(this.addr,n)}function setValueV3fArray(s,e){const n=flatten(e,this.size,3);s.uniform3fv(this.addr,n)}function setValueV4fArray(s,e){const n=flatten(e,this.size,4);s.uniform4fv(this.addr,n)}function setValueM2Array(s,e){const n=flatten(e,this.size,4);s.uniformMatrix2fv(this.addr,!1,n)}function setValueM3Array(s,e){const n=flatten(e,this.size,9);s.uniformMatrix3fv(this.addr,!1,n)}function setValueM4Array(s,e){const n=flatten(e,this.size,16);s.uniformMatrix4fv(this.addr,!1,n)}function setValueV1iArray(s,e){s.uniform1iv(this.addr,e)}function setValueV2iArray(s,e){s.uniform2iv(this.addr,e)}function setValueV3iArray(s,e){s.uniform3iv(this.addr,e)}function setValueV4iArray(s,e){s.uniform4iv(this.addr,e)}function setValueV1uiArray(s,e){s.uniform1uiv(this.addr,e)}function setValueV2uiArray(s,e){s.uniform2uiv(this.addr,e)}function setValueV3uiArray(s,e){s.uniform3uiv(this.addr,e)}function setValueV4uiArray(s,e){s.uniform4uiv(this.addr,e)}function setValueT1Array(s,e,n){const i=this.cache,r=e.length,a=allocTexUnits(n,r);arraysEqual(i,a)||(s.uniform1iv(this.addr,a),copyArray(i,a));for(let l=0;l!==r;++l)n.setTexture2D(e[l]||emptyTexture,a[l])}function setValueT3DArray(s,e,n){const i=this.cache,r=e.length,a=allocTexUnits(n,r);arraysEqual(i,a)||(s.uniform1iv(this.addr,a),copyArray(i,a));for(let l=0;l!==r;++l)n.setTexture3D(e[l]||empty3dTexture,a[l])}function setValueT6Array(s,e,n){const i=this.cache,r=e.length,a=allocTexUnits(n,r);arraysEqual(i,a)||(s.uniform1iv(this.addr,a),copyArray(i,a));for(let l=0;l!==r;++l)n.setTextureCube(e[l]||emptyCubeTexture,a[l])}function setValueT2DArrayArray(s,e,n){const i=this.cache,r=e.length,a=allocTexUnits(n,r);arraysEqual(i,a)||(s.uniform1iv(this.addr,a),copyArray(i,a));for(let l=0;l!==r;++l)n.setTexture2DArray(e[l]||emptyArrayTexture,a[l])}function getPureArraySetter(s){switch(s){case 5126:return setValueV1fArray;case 35664:return setValueV2fArray;case 35665:return setValueV3fArray;case 35666:return setValueV4fArray;case 35674:return setValueM2Array;case 35675:return setValueM3Array;case 35676:return setValueM4Array;case 5124:case 35670:return setValueV1iArray;case 35667:case 35671:return setValueV2iArray;case 35668:case 35672:return setValueV3iArray;case 35669:case 35673:return setValueV4iArray;case 5125:return setValueV1uiArray;case 36294:return setValueV2uiArray;case 36295:return setValueV3uiArray;case 36296:return setValueV4uiArray;case 35678:case 36198:case 36298:case 36306:case 35682:return setValueT1Array;case 35679:case 36299:case 36307:return setValueT3DArray;case 35680:case 36300:case 36308:case 36293:return setValueT6Array;case 36289:case 36303:case 36311:case 36292:return setValueT2DArrayArray}}class SingleUniform{constructor(e,n,i){this.id=e,this.addr=i,this.cache=[],this.setValue=getSingularSetter(n.type)}}class PureArrayUniform{constructor(e,n,i){this.id=e,this.addr=i,this.cache=[],this.size=n.size,this.setValue=getPureArraySetter(n.type)}}class StructuredUniform{constructor(e){this.id=e,this.seq=[],this.map={}}setValue(e,n,i){const r=this.seq;for(let a=0,l=r.length;a!==l;++a){const o=r[a];o.setValue(e,n[o.id],i)}}}const RePathPart=/(\w+)(\])?(\[|\.)?/g;function addUniform(s,e){s.seq.push(e),s.map[e.id]=e}function parseUniform(s,e,n){const i=s.name,r=i.length;for(RePathPart.lastIndex=0;;){const a=RePathPart.exec(i),l=RePathPart.lastIndex;let o=a[1];const c=a[2]==="]",u=a[3];if(c&&(o=o|0),u===void 0||u==="["&&l+2===r){addUniform(n,u===void 0?new SingleUniform(o,s,e):new PureArrayUniform(o,s,e));break}else{let f=n.map[o];f===void 0&&(f=new StructuredUniform(o),addUniform(n,f)),n=f}}}class WebGLUniforms{constructor(e,n){this.seq=[],this.map={};const i=e.getProgramParameter(n,35718);for(let r=0;r<i;++r){const a=e.getActiveUniform(n,r),l=e.getUniformLocation(n,a.name);parseUniform(a,l,this)}}setValue(e,n,i,r){const a=this.map[n];a!==void 0&&a.setValue(e,i,r)}setOptional(e,n,i){const r=n[i];r!==void 0&&this.setValue(e,i,r)}static upload(e,n,i,r){for(let a=0,l=n.length;a!==l;++a){const o=n[a],c=i[o.id];c.needsUpdate!==!1&&o.setValue(e,c.value,r)}}static seqWithValue(e,n){const i=[];for(let r=0,a=e.length;r!==a;++r){const l=e[r];l.id in n&&i.push(l)}return i}}function WebGLShader(s,e,n){const i=s.createShader(e);return s.shaderSource(i,n),s.compileShader(i),i}let programIdCount=0;function handleSource(s,e){const n=s.split(`
`),i=[],r=Math.max(e-6,0),a=Math.min(e+6,n.length);for(let l=r;l<a;l++){const o=l+1;i.push(`${o===e?">":" "} ${o}: ${n[l]}`)}return i.join(`
`)}function getEncodingComponents(s){switch(s){case LinearEncoding:return["Linear","( value )"];case sRGBEncoding:return["sRGB","( value )"];default:return console.warn("THREE.WebGLProgram: Unsupported encoding:",s),["Linear","( value )"]}}function getShaderErrors(s,e,n){const i=s.getShaderParameter(e,35713),r=s.getShaderInfoLog(e).trim();if(i&&r==="")return"";const a=/ERROR: 0:(\d+)/.exec(r);if(a){const l=parseInt(a[1]);return n.toUpperCase()+`

`+r+`

`+handleSource(s.getShaderSource(e),l)}else return r}function getTexelEncodingFunction(s,e){const n=getEncodingComponents(e);return"vec4 "+s+"( vec4 value ) { return LinearTo"+n[0]+n[1]+"; }"}function getToneMappingFunction(s,e){let n;switch(e){case LinearToneMapping:n="Linear";break;case ReinhardToneMapping:n="Reinhard";break;case CineonToneMapping:n="OptimizedCineon";break;case ACESFilmicToneMapping:n="ACESFilmic";break;case CustomToneMapping:n="Custom";break;default:console.warn("THREE.WebGLProgram: Unsupported toneMapping:",e),n="Linear"}return"vec3 "+s+"( vec3 color ) { return "+n+"ToneMapping( color ); }"}function generateExtensions(s){return[s.extensionDerivatives||!!s.envMapCubeUVHeight||s.bumpMap||s.tangentSpaceNormalMap||s.clearcoatNormalMap||s.flatShading||s.shaderID==="physical"?"#extension GL_OES_standard_derivatives : enable":"",(s.extensionFragDepth||s.logarithmicDepthBuffer)&&s.rendererExtensionFragDepth?"#extension GL_EXT_frag_depth : enable":"",s.extensionDrawBuffers&&s.rendererExtensionDrawBuffers?"#extension GL_EXT_draw_buffers : require":"",(s.extensionShaderTextureLOD||s.envMap||s.transmission)&&s.rendererExtensionShaderTextureLod?"#extension GL_EXT_shader_texture_lod : enable":""].filter(filterEmptyLine).join(`
`)}function generateDefines(s){const e=[];for(const n in s){const i=s[n];i!==!1&&e.push("#define "+n+" "+i)}return e.join(`
`)}function fetchAttributeLocations(s,e){const n={},i=s.getProgramParameter(e,35721);for(let r=0;r<i;r++){const a=s.getActiveAttrib(e,r),l=a.name;let o=1;a.type===35674&&(o=2),a.type===35675&&(o=3),a.type===35676&&(o=4),n[l]={type:a.type,location:s.getAttribLocation(e,l),locationSize:o}}return n}function filterEmptyLine(s){return s!==""}function replaceLightNums(s,e){const n=e.numSpotLightShadows+e.numSpotLightMaps-e.numSpotLightShadowsWithMaps;return s.replace(/NUM_DIR_LIGHTS/g,e.numDirLights).replace(/NUM_SPOT_LIGHTS/g,e.numSpotLights).replace(/NUM_SPOT_LIGHT_MAPS/g,e.numSpotLightMaps).replace(/NUM_SPOT_LIGHT_COORDS/g,n).replace(/NUM_RECT_AREA_LIGHTS/g,e.numRectAreaLights).replace(/NUM_POINT_LIGHTS/g,e.numPointLights).replace(/NUM_HEMI_LIGHTS/g,e.numHemiLights).replace(/NUM_DIR_LIGHT_SHADOWS/g,e.numDirLightShadows).replace(/NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS/g,e.numSpotLightShadowsWithMaps).replace(/NUM_SPOT_LIGHT_SHADOWS/g,e.numSpotLightShadows).replace(/NUM_POINT_LIGHT_SHADOWS/g,e.numPointLightShadows)}function replaceClippingPlaneNums(s,e){return s.replace(/NUM_CLIPPING_PLANES/g,e.numClippingPlanes).replace(/UNION_CLIPPING_PLANES/g,e.numClippingPlanes-e.numClipIntersection)}const includePattern=/^[ \t]*#include +<([\w\d./]+)>/gm;function resolveIncludes(s){return s.replace(includePattern,includeReplacer)}function includeReplacer(s,e){const n=ShaderChunk[e];if(n===void 0)throw new Error("Can not resolve #include <"+e+">");return resolveIncludes(n)}const unrollLoopPattern=/#pragma unroll_loop_start\s+for\s*\(\s*int\s+i\s*=\s*(\d+)\s*;\s*i\s*<\s*(\d+)\s*;\s*i\s*\+\+\s*\)\s*{([\s\S]+?)}\s+#pragma unroll_loop_end/g;function unrollLoops(s){return s.replace(unrollLoopPattern,loopReplacer)}function loopReplacer(s,e,n,i){let r="";for(let a=parseInt(e);a<parseInt(n);a++)r+=i.replace(/\[\s*i\s*\]/g,"[ "+a+" ]").replace(/UNROLLED_LOOP_INDEX/g,a);return r}function generatePrecision(s){let e="precision "+s.precision+` float;
precision `+s.precision+" int;";return s.precision==="highp"?e+=`
#define HIGH_PRECISION`:s.precision==="mediump"?e+=`
#define MEDIUM_PRECISION`:s.precision==="lowp"&&(e+=`
#define LOW_PRECISION`),e}function generateShadowMapTypeDefine(s){let e="SHADOWMAP_TYPE_BASIC";return s.shadowMapType===PCFShadowMap?e="SHADOWMAP_TYPE_PCF":s.shadowMapType===PCFSoftShadowMap?e="SHADOWMAP_TYPE_PCF_SOFT":s.shadowMapType===VSMShadowMap&&(e="SHADOWMAP_TYPE_VSM"),e}function generateEnvMapTypeDefine(s){let e="ENVMAP_TYPE_CUBE";if(s.envMap)switch(s.envMapMode){case CubeReflectionMapping:case CubeRefractionMapping:e="ENVMAP_TYPE_CUBE";break;case CubeUVReflectionMapping:e="ENVMAP_TYPE_CUBE_UV";break}return e}function generateEnvMapModeDefine(s){let e="ENVMAP_MODE_REFLECTION";if(s.envMap)switch(s.envMapMode){case CubeRefractionMapping:e="ENVMAP_MODE_REFRACTION";break}return e}function generateEnvMapBlendingDefine(s){let e="ENVMAP_BLENDING_NONE";if(s.envMap)switch(s.combine){case MultiplyOperation:e="ENVMAP_BLENDING_MULTIPLY";break;case MixOperation:e="ENVMAP_BLENDING_MIX";break;case AddOperation:e="ENVMAP_BLENDING_ADD";break}return e}function generateCubeUVSize(s){const e=s.envMapCubeUVHeight;if(e===null)return null;const n=Math.log2(e)-2,i=1/e;return{texelWidth:1/(3*Math.max(Math.pow(2,n),7*16)),texelHeight:i,maxMip:n}}function WebGLProgram(s,e,n,i){const r=s.getContext(),a=n.defines;let l=n.vertexShader,o=n.fragmentShader;const c=generateShadowMapTypeDefine(n),u=generateEnvMapTypeDefine(n),d=generateEnvMapModeDefine(n),f=generateEnvMapBlendingDefine(n),h=generateCubeUVSize(n),_=n.isWebGL2?"":generateExtensions(n),v=generateDefines(a),m=r.createProgram();let p,y,C=n.glslVersion?"#version "+n.glslVersion+`
`:"";n.isRawShaderMaterial?(p=[v].filter(filterEmptyLine).join(`
`),p.length>0&&(p+=`
`),y=[_,v].filter(filterEmptyLine).join(`
`),y.length>0&&(y+=`
`)):(p=[generatePrecision(n),"#define SHADER_NAME "+n.shaderName,v,n.instancing?"#define USE_INSTANCING":"",n.instancingColor?"#define USE_INSTANCING_COLOR":"",n.supportsVertexTextures?"#define VERTEX_TEXTURES":"",n.useFog&&n.fog?"#define USE_FOG":"",n.useFog&&n.fogExp2?"#define FOG_EXP2":"",n.map?"#define USE_MAP":"",n.envMap?"#define USE_ENVMAP":"",n.envMap?"#define "+d:"",n.lightMap?"#define USE_LIGHTMAP":"",n.aoMap?"#define USE_AOMAP":"",n.emissiveMap?"#define USE_EMISSIVEMAP":"",n.bumpMap?"#define USE_BUMPMAP":"",n.normalMap?"#define USE_NORMALMAP":"",n.normalMap&&n.objectSpaceNormalMap?"#define OBJECTSPACE_NORMALMAP":"",n.normalMap&&n.tangentSpaceNormalMap?"#define TANGENTSPACE_NORMALMAP":"",n.clearcoatMap?"#define USE_CLEARCOATMAP":"",n.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",n.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",n.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",n.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",n.displacementMap&&n.supportsVertexTextures?"#define USE_DISPLACEMENTMAP":"",n.specularMap?"#define USE_SPECULARMAP":"",n.specularIntensityMap?"#define USE_SPECULARINTENSITYMAP":"",n.specularColorMap?"#define USE_SPECULARCOLORMAP":"",n.roughnessMap?"#define USE_ROUGHNESSMAP":"",n.metalnessMap?"#define USE_METALNESSMAP":"",n.alphaMap?"#define USE_ALPHAMAP":"",n.transmission?"#define USE_TRANSMISSION":"",n.transmissionMap?"#define USE_TRANSMISSIONMAP":"",n.thicknessMap?"#define USE_THICKNESSMAP":"",n.sheenColorMap?"#define USE_SHEENCOLORMAP":"",n.sheenRoughnessMap?"#define USE_SHEENROUGHNESSMAP":"",n.vertexTangents?"#define USE_TANGENT":"",n.vertexColors?"#define USE_COLOR":"",n.vertexAlphas?"#define USE_COLOR_ALPHA":"",n.vertexUvs?"#define USE_UV":"",n.uvsVertexOnly?"#define UVS_VERTEX_ONLY":"",n.flatShading?"#define FLAT_SHADED":"",n.skinning?"#define USE_SKINNING":"",n.morphTargets?"#define USE_MORPHTARGETS":"",n.morphNormals&&n.flatShading===!1?"#define USE_MORPHNORMALS":"",n.morphColors&&n.isWebGL2?"#define USE_MORPHCOLORS":"",n.morphTargetsCount>0&&n.isWebGL2?"#define MORPHTARGETS_TEXTURE":"",n.morphTargetsCount>0&&n.isWebGL2?"#define MORPHTARGETS_TEXTURE_STRIDE "+n.morphTextureStride:"",n.morphTargetsCount>0&&n.isWebGL2?"#define MORPHTARGETS_COUNT "+n.morphTargetsCount:"",n.doubleSided?"#define DOUBLE_SIDED":"",n.flipSided?"#define FLIP_SIDED":"",n.shadowMapEnabled?"#define USE_SHADOWMAP":"",n.shadowMapEnabled?"#define "+c:"",n.sizeAttenuation?"#define USE_SIZEATTENUATION":"",n.logarithmicDepthBuffer?"#define USE_LOGDEPTHBUF":"",n.logarithmicDepthBuffer&&n.rendererExtensionFragDepth?"#define USE_LOGDEPTHBUF_EXT":"","uniform mat4 modelMatrix;","uniform mat4 modelViewMatrix;","uniform mat4 projectionMatrix;","uniform mat4 viewMatrix;","uniform mat3 normalMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;","#ifdef USE_INSTANCING","	attribute mat4 instanceMatrix;","#endif","#ifdef USE_INSTANCING_COLOR","	attribute vec3 instanceColor;","#endif","attribute vec3 position;","attribute vec3 normal;","attribute vec2 uv;","#ifdef USE_TANGENT","	attribute vec4 tangent;","#endif","#if defined( USE_COLOR_ALPHA )","	attribute vec4 color;","#elif defined( USE_COLOR )","	attribute vec3 color;","#endif","#if ( defined( USE_MORPHTARGETS ) && ! defined( MORPHTARGETS_TEXTURE ) )","	attribute vec3 morphTarget0;","	attribute vec3 morphTarget1;","	attribute vec3 morphTarget2;","	attribute vec3 morphTarget3;","	#ifdef USE_MORPHNORMALS","		attribute vec3 morphNormal0;","		attribute vec3 morphNormal1;","		attribute vec3 morphNormal2;","		attribute vec3 morphNormal3;","	#else","		attribute vec3 morphTarget4;","		attribute vec3 morphTarget5;","		attribute vec3 morphTarget6;","		attribute vec3 morphTarget7;","	#endif","#endif","#ifdef USE_SKINNING","	attribute vec4 skinIndex;","	attribute vec4 skinWeight;","#endif",`
`].filter(filterEmptyLine).join(`
`),y=[_,generatePrecision(n),"#define SHADER_NAME "+n.shaderName,v,n.useFog&&n.fog?"#define USE_FOG":"",n.useFog&&n.fogExp2?"#define FOG_EXP2":"",n.map?"#define USE_MAP":"",n.matcap?"#define USE_MATCAP":"",n.envMap?"#define USE_ENVMAP":"",n.envMap?"#define "+u:"",n.envMap?"#define "+d:"",n.envMap?"#define "+f:"",h?"#define CUBEUV_TEXEL_WIDTH "+h.texelWidth:"",h?"#define CUBEUV_TEXEL_HEIGHT "+h.texelHeight:"",h?"#define CUBEUV_MAX_MIP "+h.maxMip+".0":"",n.lightMap?"#define USE_LIGHTMAP":"",n.aoMap?"#define USE_AOMAP":"",n.emissiveMap?"#define USE_EMISSIVEMAP":"",n.bumpMap?"#define USE_BUMPMAP":"",n.normalMap?"#define USE_NORMALMAP":"",n.normalMap&&n.objectSpaceNormalMap?"#define OBJECTSPACE_NORMALMAP":"",n.normalMap&&n.tangentSpaceNormalMap?"#define TANGENTSPACE_NORMALMAP":"",n.clearcoat?"#define USE_CLEARCOAT":"",n.clearcoatMap?"#define USE_CLEARCOATMAP":"",n.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",n.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",n.iridescence?"#define USE_IRIDESCENCE":"",n.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",n.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",n.specularMap?"#define USE_SPECULARMAP":"",n.specularIntensityMap?"#define USE_SPECULARINTENSITYMAP":"",n.specularColorMap?"#define USE_SPECULARCOLORMAP":"",n.roughnessMap?"#define USE_ROUGHNESSMAP":"",n.metalnessMap?"#define USE_METALNESSMAP":"",n.alphaMap?"#define USE_ALPHAMAP":"",n.alphaTest?"#define USE_ALPHATEST":"",n.sheen?"#define USE_SHEEN":"",n.sheenColorMap?"#define USE_SHEENCOLORMAP":"",n.sheenRoughnessMap?"#define USE_SHEENROUGHNESSMAP":"",n.transmission?"#define USE_TRANSMISSION":"",n.transmissionMap?"#define USE_TRANSMISSIONMAP":"",n.thicknessMap?"#define USE_THICKNESSMAP":"",n.decodeVideoTexture?"#define DECODE_VIDEO_TEXTURE":"",n.vertexTangents?"#define USE_TANGENT":"",n.vertexColors||n.instancingColor?"#define USE_COLOR":"",n.vertexAlphas?"#define USE_COLOR_ALPHA":"",n.vertexUvs?"#define USE_UV":"",n.uvsVertexOnly?"#define UVS_VERTEX_ONLY":"",n.gradientMap?"#define USE_GRADIENTMAP":"",n.flatShading?"#define FLAT_SHADED":"",n.doubleSided?"#define DOUBLE_SIDED":"",n.flipSided?"#define FLIP_SIDED":"",n.shadowMapEnabled?"#define USE_SHADOWMAP":"",n.shadowMapEnabled?"#define "+c:"",n.premultipliedAlpha?"#define PREMULTIPLIED_ALPHA":"",n.physicallyCorrectLights?"#define PHYSICALLY_CORRECT_LIGHTS":"",n.logarithmicDepthBuffer?"#define USE_LOGDEPTHBUF":"",n.logarithmicDepthBuffer&&n.rendererExtensionFragDepth?"#define USE_LOGDEPTHBUF_EXT":"","uniform mat4 viewMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;",n.toneMapping!==NoToneMapping?"#define TONE_MAPPING":"",n.toneMapping!==NoToneMapping?ShaderChunk.tonemapping_pars_fragment:"",n.toneMapping!==NoToneMapping?getToneMappingFunction("toneMapping",n.toneMapping):"",n.dithering?"#define DITHERING":"",n.opaque?"#define OPAQUE":"",ShaderChunk.encodings_pars_fragment,getTexelEncodingFunction("linearToOutputTexel",n.outputEncoding),n.useDepthPacking?"#define DEPTH_PACKING "+n.depthPacking:"",`
`].filter(filterEmptyLine).join(`
`)),l=resolveIncludes(l),l=replaceLightNums(l,n),l=replaceClippingPlaneNums(l,n),o=resolveIncludes(o),o=replaceLightNums(o,n),o=replaceClippingPlaneNums(o,n),l=unrollLoops(l),o=unrollLoops(o),n.isWebGL2&&n.isRawShaderMaterial!==!0&&(C=`#version 300 es
`,p=["precision mediump sampler2DArray;","#define attribute in","#define varying out","#define texture2D texture"].join(`
`)+`
`+p,y=["#define varying in",n.glslVersion===GLSL3?"":"layout(location = 0) out highp vec4 pc_fragColor;",n.glslVersion===GLSL3?"":"#define gl_FragColor pc_fragColor","#define gl_FragDepthEXT gl_FragDepth","#define texture2D texture","#define textureCube texture","#define texture2DProj textureProj","#define texture2DLodEXT textureLod","#define texture2DProjLodEXT textureProjLod","#define textureCubeLodEXT textureLod","#define texture2DGradEXT textureGrad","#define texture2DProjGradEXT textureProjGrad","#define textureCubeGradEXT textureGrad"].join(`
`)+`
`+y);const w=C+p+l,A=C+y+o,M=WebGLShader(r,35633,w),P=WebGLShader(r,35632,A);if(r.attachShader(m,M),r.attachShader(m,P),n.index0AttributeName!==void 0?r.bindAttribLocation(m,0,n.index0AttributeName):n.morphTargets===!0&&r.bindAttribLocation(m,0,"position"),r.linkProgram(m),s.debug.checkShaderErrors){const L=r.getProgramInfoLog(m).trim(),U=r.getShaderInfoLog(M).trim(),Y=r.getShaderInfoLog(P).trim();let Q=!0,O=!0;if(r.getProgramParameter(m,35714)===!1){Q=!1;const F=getShaderErrors(r,M,"vertex"),q=getShaderErrors(r,P,"fragment");console.error("THREE.WebGLProgram: Shader Error "+r.getError()+" - VALIDATE_STATUS "+r.getProgramParameter(m,35715)+`

Program Info Log: `+L+`
`+F+`
`+q)}else L!==""?console.warn("THREE.WebGLProgram: Program Info Log:",L):(U===""||Y==="")&&(O=!1);O&&(this.diagnostics={runnable:Q,programLog:L,vertexShader:{log:U,prefix:p},fragmentShader:{log:Y,prefix:y}})}r.deleteShader(M),r.deleteShader(P);let N;this.getUniforms=function(){return N===void 0&&(N=new WebGLUniforms(r,m)),N};let b;return this.getAttributes=function(){return b===void 0&&(b=fetchAttributeLocations(r,m)),b},this.destroy=function(){i.releaseStatesOfProgram(this),r.deleteProgram(m),this.program=void 0},this.name=n.shaderName,this.id=programIdCount++,this.cacheKey=e,this.usedTimes=1,this.program=m,this.vertexShader=M,this.fragmentShader=P,this}let _id=0;class WebGLShaderCache{constructor(){this.shaderCache=new Map,this.materialCache=new Map}update(e){const n=e.vertexShader,i=e.fragmentShader,r=this._getShaderStage(n),a=this._getShaderStage(i),l=this._getShaderCacheForMaterial(e);return l.has(r)===!1&&(l.add(r),r.usedTimes++),l.has(a)===!1&&(l.add(a),a.usedTimes++),this}remove(e){const n=this.materialCache.get(e);for(const i of n)i.usedTimes--,i.usedTimes===0&&this.shaderCache.delete(i.code);return this.materialCache.delete(e),this}getVertexShaderID(e){return this._getShaderStage(e.vertexShader).id}getFragmentShaderID(e){return this._getShaderStage(e.fragmentShader).id}dispose(){this.shaderCache.clear(),this.materialCache.clear()}_getShaderCacheForMaterial(e){const n=this.materialCache;let i=n.get(e);return i===void 0&&(i=new Set,n.set(e,i)),i}_getShaderStage(e){const n=this.shaderCache;let i=n.get(e);return i===void 0&&(i=new WebGLShaderStage(e),n.set(e,i)),i}}class WebGLShaderStage{constructor(e){this.id=_id++,this.code=e,this.usedTimes=0}}function WebGLPrograms(s,e,n,i,r,a,l){const o=new Layers,c=new WebGLShaderCache,u=[],d=r.isWebGL2,f=r.logarithmicDepthBuffer,h=r.vertexTextures;let _=r.precision;const v={MeshDepthMaterial:"depth",MeshDistanceMaterial:"distanceRGBA",MeshNormalMaterial:"normal",MeshBasicMaterial:"basic",MeshLambertMaterial:"lambert",MeshPhongMaterial:"phong",MeshToonMaterial:"toon",MeshStandardMaterial:"physical",MeshPhysicalMaterial:"physical",MeshMatcapMaterial:"matcap",LineBasicMaterial:"basic",LineDashedMaterial:"dashed",PointsMaterial:"points",ShadowMaterial:"shadow",SpriteMaterial:"sprite"};function m(b,L,U,Y,Q){const O=Y.fog,F=Q.geometry,q=b.isMeshStandardMaterial?Y.environment:null,Z=(b.isMeshStandardMaterial?n:e).get(b.envMap||q),J=!!Z&&Z.mapping===CubeUVReflectionMapping?Z.image.height:null,X=v[b.type];b.precision!==null&&(_=r.getMaxPrecision(b.precision),_!==b.precision&&console.warn("THREE.WebGLProgram.getParameters:",b.precision,"not supported, using",_,"instead."));const ne=F.morphAttributes.position||F.morphAttributes.normal||F.morphAttributes.color,te=ne!==void 0?ne.length:0;let he=0;F.morphAttributes.position!==void 0&&(he=1),F.morphAttributes.normal!==void 0&&(he=2),F.morphAttributes.color!==void 0&&(he=3);let G,j,re,se;if(X){const Fe=ShaderLib[X];G=Fe.vertexShader,j=Fe.fragmentShader}else G=b.vertexShader,j=b.fragmentShader,c.update(b),re=c.getVertexShaderID(b),se=c.getFragmentShaderID(b);const V=s.getRenderTarget(),ye=b.alphaTest>0,_e=b.clearcoat>0,pe=b.iridescence>0;return{isWebGL2:d,shaderID:X,shaderName:b.type,vertexShader:G,fragmentShader:j,defines:b.defines,customVertexShaderID:re,customFragmentShaderID:se,isRawShaderMaterial:b.isRawShaderMaterial===!0,glslVersion:b.glslVersion,precision:_,instancing:Q.isInstancedMesh===!0,instancingColor:Q.isInstancedMesh===!0&&Q.instanceColor!==null,supportsVertexTextures:h,outputEncoding:V===null?s.outputEncoding:V.isXRRenderTarget===!0?V.texture.encoding:LinearEncoding,map:!!b.map,matcap:!!b.matcap,envMap:!!Z,envMapMode:Z&&Z.mapping,envMapCubeUVHeight:J,lightMap:!!b.lightMap,aoMap:!!b.aoMap,emissiveMap:!!b.emissiveMap,bumpMap:!!b.bumpMap,normalMap:!!b.normalMap,objectSpaceNormalMap:b.normalMapType===ObjectSpaceNormalMap,tangentSpaceNormalMap:b.normalMapType===TangentSpaceNormalMap,decodeVideoTexture:!!b.map&&b.map.isVideoTexture===!0&&b.map.encoding===sRGBEncoding,clearcoat:_e,clearcoatMap:_e&&!!b.clearcoatMap,clearcoatRoughnessMap:_e&&!!b.clearcoatRoughnessMap,clearcoatNormalMap:_e&&!!b.clearcoatNormalMap,iridescence:pe,iridescenceMap:pe&&!!b.iridescenceMap,iridescenceThicknessMap:pe&&!!b.iridescenceThicknessMap,displacementMap:!!b.displacementMap,roughnessMap:!!b.roughnessMap,metalnessMap:!!b.metalnessMap,specularMap:!!b.specularMap,specularIntensityMap:!!b.specularIntensityMap,specularColorMap:!!b.specularColorMap,opaque:b.transparent===!1&&b.blending===NormalBlending,alphaMap:!!b.alphaMap,alphaTest:ye,gradientMap:!!b.gradientMap,sheen:b.sheen>0,sheenColorMap:!!b.sheenColorMap,sheenRoughnessMap:!!b.sheenRoughnessMap,transmission:b.transmission>0,transmissionMap:!!b.transmissionMap,thicknessMap:!!b.thicknessMap,combine:b.combine,vertexTangents:!!b.normalMap&&!!F.attributes.tangent,vertexColors:b.vertexColors,vertexAlphas:b.vertexColors===!0&&!!F.attributes.color&&F.attributes.color.itemSize===4,vertexUvs:!!b.map||!!b.bumpMap||!!b.normalMap||!!b.specularMap||!!b.alphaMap||!!b.emissiveMap||!!b.roughnessMap||!!b.metalnessMap||!!b.clearcoatMap||!!b.clearcoatRoughnessMap||!!b.clearcoatNormalMap||!!b.iridescenceMap||!!b.iridescenceThicknessMap||!!b.displacementMap||!!b.transmissionMap||!!b.thicknessMap||!!b.specularIntensityMap||!!b.specularColorMap||!!b.sheenColorMap||!!b.sheenRoughnessMap,uvsVertexOnly:!(!!b.map||!!b.bumpMap||!!b.normalMap||!!b.specularMap||!!b.alphaMap||!!b.emissiveMap||!!b.roughnessMap||!!b.metalnessMap||!!b.clearcoatNormalMap||!!b.iridescenceMap||!!b.iridescenceThicknessMap||b.transmission>0||!!b.transmissionMap||!!b.thicknessMap||!!b.specularIntensityMap||!!b.specularColorMap||b.sheen>0||!!b.sheenColorMap||!!b.sheenRoughnessMap)&&!!b.displacementMap,fog:!!O,useFog:b.fog===!0,fogExp2:O&&O.isFogExp2,flatShading:!!b.flatShading,sizeAttenuation:b.sizeAttenuation,logarithmicDepthBuffer:f,skinning:Q.isSkinnedMesh===!0,morphTargets:F.morphAttributes.position!==void 0,morphNormals:F.morphAttributes.normal!==void 0,morphColors:F.morphAttributes.color!==void 0,morphTargetsCount:te,morphTextureStride:he,numDirLights:L.directional.length,numPointLights:L.point.length,numSpotLights:L.spot.length,numSpotLightMaps:L.spotLightMap.length,numRectAreaLights:L.rectArea.length,numHemiLights:L.hemi.length,numDirLightShadows:L.directionalShadowMap.length,numPointLightShadows:L.pointShadowMap.length,numSpotLightShadows:L.spotShadowMap.length,numSpotLightShadowsWithMaps:L.numSpotLightShadowsWithMaps,numClippingPlanes:l.numPlanes,numClipIntersection:l.numIntersection,dithering:b.dithering,shadowMapEnabled:s.shadowMap.enabled&&U.length>0,shadowMapType:s.shadowMap.type,toneMapping:b.toneMapped?s.toneMapping:NoToneMapping,physicallyCorrectLights:s.physicallyCorrectLights,premultipliedAlpha:b.premultipliedAlpha,doubleSided:b.side===DoubleSide,flipSided:b.side===BackSide,useDepthPacking:!!b.depthPacking,depthPacking:b.depthPacking||0,index0AttributeName:b.index0AttributeName,extensionDerivatives:b.extensions&&b.extensions.derivatives,extensionFragDepth:b.extensions&&b.extensions.fragDepth,extensionDrawBuffers:b.extensions&&b.extensions.drawBuffers,extensionShaderTextureLOD:b.extensions&&b.extensions.shaderTextureLOD,rendererExtensionFragDepth:d||i.has("EXT_frag_depth"),rendererExtensionDrawBuffers:d||i.has("WEBGL_draw_buffers"),rendererExtensionShaderTextureLod:d||i.has("EXT_shader_texture_lod"),customProgramCacheKey:b.customProgramCacheKey()}}function p(b){const L=[];if(b.shaderID?L.push(b.shaderID):(L.push(b.customVertexShaderID),L.push(b.customFragmentShaderID)),b.defines!==void 0)for(const U in b.defines)L.push(U),L.push(b.defines[U]);return b.isRawShaderMaterial===!1&&(y(L,b),C(L,b),L.push(s.outputEncoding)),L.push(b.customProgramCacheKey),L.join()}function y(b,L){b.push(L.precision),b.push(L.outputEncoding),b.push(L.envMapMode),b.push(L.envMapCubeUVHeight),b.push(L.combine),b.push(L.vertexUvs),b.push(L.fogExp2),b.push(L.sizeAttenuation),b.push(L.morphTargetsCount),b.push(L.morphAttributeCount),b.push(L.numDirLights),b.push(L.numPointLights),b.push(L.numSpotLights),b.push(L.numSpotLightMaps),b.push(L.numHemiLights),b.push(L.numRectAreaLights),b.push(L.numDirLightShadows),b.push(L.numPointLightShadows),b.push(L.numSpotLightShadows),b.push(L.numSpotLightShadowsWithMaps),b.push(L.shadowMapType),b.push(L.toneMapping),b.push(L.numClippingPlanes),b.push(L.numClipIntersection),b.push(L.depthPacking)}function C(b,L){o.disableAll(),L.isWebGL2&&o.enable(0),L.supportsVertexTextures&&o.enable(1),L.instancing&&o.enable(2),L.instancingColor&&o.enable(3),L.map&&o.enable(4),L.matcap&&o.enable(5),L.envMap&&o.enable(6),L.lightMap&&o.enable(7),L.aoMap&&o.enable(8),L.emissiveMap&&o.enable(9),L.bumpMap&&o.enable(10),L.normalMap&&o.enable(11),L.objectSpaceNormalMap&&o.enable(12),L.tangentSpaceNormalMap&&o.enable(13),L.clearcoat&&o.enable(14),L.clearcoatMap&&o.enable(15),L.clearcoatRoughnessMap&&o.enable(16),L.clearcoatNormalMap&&o.enable(17),L.iridescence&&o.enable(18),L.iridescenceMap&&o.enable(19),L.iridescenceThicknessMap&&o.enable(20),L.displacementMap&&o.enable(21),L.specularMap&&o.enable(22),L.roughnessMap&&o.enable(23),L.metalnessMap&&o.enable(24),L.gradientMap&&o.enable(25),L.alphaMap&&o.enable(26),L.alphaTest&&o.enable(27),L.vertexColors&&o.enable(28),L.vertexAlphas&&o.enable(29),L.vertexUvs&&o.enable(30),L.vertexTangents&&o.enable(31),L.uvsVertexOnly&&o.enable(32),b.push(o.mask),o.disableAll(),L.fog&&o.enable(0),L.useFog&&o.enable(1),L.flatShading&&o.enable(2),L.logarithmicDepthBuffer&&o.enable(3),L.skinning&&o.enable(4),L.morphTargets&&o.enable(5),L.morphNormals&&o.enable(6),L.morphColors&&o.enable(7),L.premultipliedAlpha&&o.enable(8),L.shadowMapEnabled&&o.enable(9),L.physicallyCorrectLights&&o.enable(10),L.doubleSided&&o.enable(11),L.flipSided&&o.enable(12),L.useDepthPacking&&o.enable(13),L.dithering&&o.enable(14),L.specularIntensityMap&&o.enable(15),L.specularColorMap&&o.enable(16),L.transmission&&o.enable(17),L.transmissionMap&&o.enable(18),L.thicknessMap&&o.enable(19),L.sheen&&o.enable(20),L.sheenColorMap&&o.enable(21),L.sheenRoughnessMap&&o.enable(22),L.decodeVideoTexture&&o.enable(23),L.opaque&&o.enable(24),b.push(o.mask)}function w(b){const L=v[b.type];let U;if(L){const Y=ShaderLib[L];U=UniformsUtils.clone(Y.uniforms)}else U=b.uniforms;return U}function A(b,L){let U;for(let Y=0,Q=u.length;Y<Q;Y++){const O=u[Y];if(O.cacheKey===L){U=O,++U.usedTimes;break}}return U===void 0&&(U=new WebGLProgram(s,L,b,a),u.push(U)),U}function M(b){if(--b.usedTimes===0){const L=u.indexOf(b);u[L]=u[u.length-1],u.pop(),b.destroy()}}function P(b){c.remove(b)}function N(){c.dispose()}return{getParameters:m,getProgramCacheKey:p,getUniforms:w,acquireProgram:A,releaseProgram:M,releaseShaderCache:P,programs:u,dispose:N}}function WebGLProperties(){let s=new WeakMap;function e(a){let l=s.get(a);return l===void 0&&(l={},s.set(a,l)),l}function n(a){s.delete(a)}function i(a,l,o){s.get(a)[l]=o}function r(){s=new WeakMap}return{get:e,remove:n,update:i,dispose:r}}function painterSortStable(s,e){return s.groupOrder!==e.groupOrder?s.groupOrder-e.groupOrder:s.renderOrder!==e.renderOrder?s.renderOrder-e.renderOrder:s.material.id!==e.material.id?s.material.id-e.material.id:s.z!==e.z?s.z-e.z:s.id-e.id}function reversePainterSortStable(s,e){return s.groupOrder!==e.groupOrder?s.groupOrder-e.groupOrder:s.renderOrder!==e.renderOrder?s.renderOrder-e.renderOrder:s.z!==e.z?e.z-s.z:s.id-e.id}function WebGLRenderList(){const s=[];let e=0;const n=[],i=[],r=[];function a(){e=0,n.length=0,i.length=0,r.length=0}function l(f,h,_,v,m,p){let y=s[e];return y===void 0?(y={id:f.id,object:f,geometry:h,material:_,groupOrder:v,renderOrder:f.renderOrder,z:m,group:p},s[e]=y):(y.id=f.id,y.object=f,y.geometry=h,y.material=_,y.groupOrder=v,y.renderOrder=f.renderOrder,y.z=m,y.group=p),e++,y}function o(f,h,_,v,m,p){const y=l(f,h,_,v,m,p);_.transmission>0?i.push(y):_.transparent===!0?r.push(y):n.push(y)}function c(f,h,_,v,m,p){const y=l(f,h,_,v,m,p);_.transmission>0?i.unshift(y):_.transparent===!0?r.unshift(y):n.unshift(y)}function u(f,h){n.length>1&&n.sort(f||painterSortStable),i.length>1&&i.sort(h||reversePainterSortStable),r.length>1&&r.sort(h||reversePainterSortStable)}function d(){for(let f=e,h=s.length;f<h;f++){const _=s[f];if(_.id===null)break;_.id=null,_.object=null,_.geometry=null,_.material=null,_.group=null}}return{opaque:n,transmissive:i,transparent:r,init:a,push:o,unshift:c,finish:d,sort:u}}function WebGLRenderLists(){let s=new WeakMap;function e(i,r){const a=s.get(i);let l;return a===void 0?(l=new WebGLRenderList,s.set(i,[l])):r>=a.length?(l=new WebGLRenderList,a.push(l)):l=a[r],l}function n(){s=new WeakMap}return{get:e,dispose:n}}function UniformsCache(){const s={};return{get:function(e){if(s[e.id]!==void 0)return s[e.id];let n;switch(e.type){case"DirectionalLight":n={direction:new Vector3,color:new Color$1};break;case"SpotLight":n={position:new Vector3,direction:new Vector3,color:new Color$1,distance:0,coneCos:0,penumbraCos:0,decay:0};break;case"PointLight":n={position:new Vector3,color:new Color$1,distance:0,decay:0};break;case"HemisphereLight":n={direction:new Vector3,skyColor:new Color$1,groundColor:new Color$1};break;case"RectAreaLight":n={color:new Color$1,position:new Vector3,halfWidth:new Vector3,halfHeight:new Vector3};break}return s[e.id]=n,n}}}function ShadowUniformsCache(){const s={};return{get:function(e){if(s[e.id]!==void 0)return s[e.id];let n;switch(e.type){case"DirectionalLight":n={shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new Vector2};break;case"SpotLight":n={shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new Vector2};break;case"PointLight":n={shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new Vector2,shadowCameraNear:1,shadowCameraFar:1e3};break}return s[e.id]=n,n}}}let nextVersion=0;function shadowCastingAndTexturingLightsFirst(s,e){return(e.castShadow?2:0)-(s.castShadow?2:0)+(e.map?1:0)-(s.map?1:0)}function WebGLLights(s,e){const n=new UniformsCache,i=ShadowUniformsCache(),r={version:0,hash:{directionalLength:-1,pointLength:-1,spotLength:-1,rectAreaLength:-1,hemiLength:-1,numDirectionalShadows:-1,numPointShadows:-1,numSpotShadows:-1,numSpotMaps:-1},ambient:[0,0,0],probe:[],directional:[],directionalShadow:[],directionalShadowMap:[],directionalShadowMatrix:[],spot:[],spotLightMap:[],spotShadow:[],spotShadowMap:[],spotLightMatrix:[],rectArea:[],rectAreaLTC1:null,rectAreaLTC2:null,point:[],pointShadow:[],pointShadowMap:[],pointShadowMatrix:[],hemi:[],numSpotLightShadowsWithMaps:0};for(let d=0;d<9;d++)r.probe.push(new Vector3);const a=new Vector3,l=new Matrix4,o=new Matrix4;function c(d,f){let h=0,_=0,v=0;for(let Y=0;Y<9;Y++)r.probe[Y].set(0,0,0);let m=0,p=0,y=0,C=0,w=0,A=0,M=0,P=0,N=0,b=0;d.sort(shadowCastingAndTexturingLightsFirst);const L=f!==!0?Math.PI:1;for(let Y=0,Q=d.length;Y<Q;Y++){const O=d[Y],F=O.color,q=O.intensity,Z=O.distance,J=O.shadow&&O.shadow.map?O.shadow.map.texture:null;if(O.isAmbientLight)h+=F.r*q*L,_+=F.g*q*L,v+=F.b*q*L;else if(O.isLightProbe)for(let X=0;X<9;X++)r.probe[X].addScaledVector(O.sh.coefficients[X],q);else if(O.isDirectionalLight){const X=n.get(O);if(X.color.copy(O.color).multiplyScalar(O.intensity*L),O.castShadow){const ne=O.shadow,te=i.get(O);te.shadowBias=ne.bias,te.shadowNormalBias=ne.normalBias,te.shadowRadius=ne.radius,te.shadowMapSize=ne.mapSize,r.directionalShadow[m]=te,r.directionalShadowMap[m]=J,r.directionalShadowMatrix[m]=O.shadow.matrix,A++}r.directional[m]=X,m++}else if(O.isSpotLight){const X=n.get(O);X.position.setFromMatrixPosition(O.matrixWorld),X.color.copy(F).multiplyScalar(q*L),X.distance=Z,X.coneCos=Math.cos(O.angle),X.penumbraCos=Math.cos(O.angle*(1-O.penumbra)),X.decay=O.decay,r.spot[y]=X;const ne=O.shadow;if(O.map&&(r.spotLightMap[N]=O.map,N++,ne.updateMatrices(O),O.castShadow&&b++),r.spotLightMatrix[y]=ne.matrix,O.castShadow){const te=i.get(O);te.shadowBias=ne.bias,te.shadowNormalBias=ne.normalBias,te.shadowRadius=ne.radius,te.shadowMapSize=ne.mapSize,r.spotShadow[y]=te,r.spotShadowMap[y]=J,P++}y++}else if(O.isRectAreaLight){const X=n.get(O);X.color.copy(F).multiplyScalar(q),X.halfWidth.set(O.width*.5,0,0),X.halfHeight.set(0,O.height*.5,0),r.rectArea[C]=X,C++}else if(O.isPointLight){const X=n.get(O);if(X.color.copy(O.color).multiplyScalar(O.intensity*L),X.distance=O.distance,X.decay=O.decay,O.castShadow){const ne=O.shadow,te=i.get(O);te.shadowBias=ne.bias,te.shadowNormalBias=ne.normalBias,te.shadowRadius=ne.radius,te.shadowMapSize=ne.mapSize,te.shadowCameraNear=ne.camera.near,te.shadowCameraFar=ne.camera.far,r.pointShadow[p]=te,r.pointShadowMap[p]=J,r.pointShadowMatrix[p]=O.shadow.matrix,M++}r.point[p]=X,p++}else if(O.isHemisphereLight){const X=n.get(O);X.skyColor.copy(O.color).multiplyScalar(q*L),X.groundColor.copy(O.groundColor).multiplyScalar(q*L),r.hemi[w]=X,w++}}C>0&&(e.isWebGL2||s.has("OES_texture_float_linear")===!0?(r.rectAreaLTC1=UniformsLib.LTC_FLOAT_1,r.rectAreaLTC2=UniformsLib.LTC_FLOAT_2):s.has("OES_texture_half_float_linear")===!0?(r.rectAreaLTC1=UniformsLib.LTC_HALF_1,r.rectAreaLTC2=UniformsLib.LTC_HALF_2):console.error("THREE.WebGLRenderer: Unable to use RectAreaLight. Missing WebGL extensions.")),r.ambient[0]=h,r.ambient[1]=_,r.ambient[2]=v;const U=r.hash;(U.directionalLength!==m||U.pointLength!==p||U.spotLength!==y||U.rectAreaLength!==C||U.hemiLength!==w||U.numDirectionalShadows!==A||U.numPointShadows!==M||U.numSpotShadows!==P||U.numSpotMaps!==N)&&(r.directional.length=m,r.spot.length=y,r.rectArea.length=C,r.point.length=p,r.hemi.length=w,r.directionalShadow.length=A,r.directionalShadowMap.length=A,r.pointShadow.length=M,r.pointShadowMap.length=M,r.spotShadow.length=P,r.spotShadowMap.length=P,r.directionalShadowMatrix.length=A,r.pointShadowMatrix.length=M,r.spotLightMatrix.length=P+N-b,r.spotLightMap.length=N,r.numSpotLightShadowsWithMaps=b,U.directionalLength=m,U.pointLength=p,U.spotLength=y,U.rectAreaLength=C,U.hemiLength=w,U.numDirectionalShadows=A,U.numPointShadows=M,U.numSpotShadows=P,U.numSpotMaps=N,r.version=nextVersion++)}function u(d,f){let h=0,_=0,v=0,m=0,p=0;const y=f.matrixWorldInverse;for(let C=0,w=d.length;C<w;C++){const A=d[C];if(A.isDirectionalLight){const M=r.directional[h];M.direction.setFromMatrixPosition(A.matrixWorld),a.setFromMatrixPosition(A.target.matrixWorld),M.direction.sub(a),M.direction.transformDirection(y),h++}else if(A.isSpotLight){const M=r.spot[v];M.position.setFromMatrixPosition(A.matrixWorld),M.position.applyMatrix4(y),M.direction.setFromMatrixPosition(A.matrixWorld),a.setFromMatrixPosition(A.target.matrixWorld),M.direction.sub(a),M.direction.transformDirection(y),v++}else if(A.isRectAreaLight){const M=r.rectArea[m];M.position.setFromMatrixPosition(A.matrixWorld),M.position.applyMatrix4(y),o.identity(),l.copy(A.matrixWorld),l.premultiply(y),o.extractRotation(l),M.halfWidth.set(A.width*.5,0,0),M.halfHeight.set(0,A.height*.5,0),M.halfWidth.applyMatrix4(o),M.halfHeight.applyMatrix4(o),m++}else if(A.isPointLight){const M=r.point[_];M.position.setFromMatrixPosition(A.matrixWorld),M.position.applyMatrix4(y),_++}else if(A.isHemisphereLight){const M=r.hemi[p];M.direction.setFromMatrixPosition(A.matrixWorld),M.direction.transformDirection(y),p++}}}return{setup:c,setupView:u,state:r}}function WebGLRenderState(s,e){const n=new WebGLLights(s,e),i=[],r=[];function a(){i.length=0,r.length=0}function l(f){i.push(f)}function o(f){r.push(f)}function c(f){n.setup(i,f)}function u(f){n.setupView(i,f)}return{init:a,state:{lightsArray:i,shadowsArray:r,lights:n},setupLights:c,setupLightsView:u,pushLight:l,pushShadow:o}}function WebGLRenderStates(s,e){let n=new WeakMap;function i(a,l=0){const o=n.get(a);let c;return o===void 0?(c=new WebGLRenderState(s,e),n.set(a,[c])):l>=o.length?(c=new WebGLRenderState(s,e),o.push(c)):c=o[l],c}function r(){n=new WeakMap}return{get:i,dispose:r}}class MeshDepthMaterial extends Material{constructor(e){super(),this.isMeshDepthMaterial=!0,this.type="MeshDepthMaterial",this.depthPacking=BasicDepthPacking,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.wireframe=!1,this.wireframeLinewidth=1,this.setValues(e)}copy(e){return super.copy(e),this.depthPacking=e.depthPacking,this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this}}class MeshDistanceMaterial extends Material{constructor(e){super(),this.isMeshDistanceMaterial=!0,this.type="MeshDistanceMaterial",this.referencePosition=new Vector3,this.nearDistance=1,this.farDistance=1e3,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.setValues(e)}copy(e){return super.copy(e),this.referencePosition.copy(e.referencePosition),this.nearDistance=e.nearDistance,this.farDistance=e.farDistance,this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this}}const vertex=`void main() {
	gl_Position = vec4( position, 1.0 );
}`,fragment=`uniform sampler2D shadow_pass;
uniform vec2 resolution;
uniform float radius;
#include <packing>
void main() {
	const float samples = float( VSM_SAMPLES );
	float mean = 0.0;
	float squared_mean = 0.0;
	float uvStride = samples <= 1.0 ? 0.0 : 2.0 / ( samples - 1.0 );
	float uvStart = samples <= 1.0 ? 0.0 : - 1.0;
	for ( float i = 0.0; i < samples; i ++ ) {
		float uvOffset = uvStart + i * uvStride;
		#ifdef HORIZONTAL_PASS
			vec2 distribution = unpackRGBATo2Half( texture2D( shadow_pass, ( gl_FragCoord.xy + vec2( uvOffset, 0.0 ) * radius ) / resolution ) );
			mean += distribution.x;
			squared_mean += distribution.y * distribution.y + distribution.x * distribution.x;
		#else
			float depth = unpackRGBAToDepth( texture2D( shadow_pass, ( gl_FragCoord.xy + vec2( 0.0, uvOffset ) * radius ) / resolution ) );
			mean += depth;
			squared_mean += depth * depth;
		#endif
	}
	mean = mean / samples;
	squared_mean = squared_mean / samples;
	float std_dev = sqrt( squared_mean - mean * mean );
	gl_FragColor = pack2HalfToRGBA( vec2( mean, std_dev ) );
}`;function WebGLShadowMap(s,e,n){let i=new Frustum;const r=new Vector2,a=new Vector2,l=new Vector4,o=new MeshDepthMaterial({depthPacking:RGBADepthPacking}),c=new MeshDistanceMaterial,u={},d=n.maxTextureSize,f={[FrontSide]:BackSide,[BackSide]:FrontSide,[DoubleSide]:DoubleSide},h=new ShaderMaterial({defines:{VSM_SAMPLES:8},uniforms:{shadow_pass:{value:null},resolution:{value:new Vector2},radius:{value:4}},vertexShader:vertex,fragmentShader:fragment}),_=h.clone();_.defines.HORIZONTAL_PASS=1;const v=new BufferGeometry;v.setAttribute("position",new BufferAttribute(new Float32Array([-1,-1,.5,3,-1,.5,-1,3,.5]),3));const m=new Mesh(v,h),p=this;this.enabled=!1,this.autoUpdate=!0,this.needsUpdate=!1,this.type=PCFShadowMap,this.render=function(A,M,P){if(p.enabled===!1||p.autoUpdate===!1&&p.needsUpdate===!1||A.length===0)return;const N=s.getRenderTarget(),b=s.getActiveCubeFace(),L=s.getActiveMipmapLevel(),U=s.state;U.setBlending(NoBlending),U.buffers.color.setClear(1,1,1,1),U.buffers.depth.setTest(!0),U.setScissorTest(!1);for(let Y=0,Q=A.length;Y<Q;Y++){const O=A[Y],F=O.shadow;if(F===void 0){console.warn("THREE.WebGLShadowMap:",O,"has no shadow.");continue}if(F.autoUpdate===!1&&F.needsUpdate===!1)continue;r.copy(F.mapSize);const q=F.getFrameExtents();if(r.multiply(q),a.copy(F.mapSize),(r.x>d||r.y>d)&&(r.x>d&&(a.x=Math.floor(d/q.x),r.x=a.x*q.x,F.mapSize.x=a.x),r.y>d&&(a.y=Math.floor(d/q.y),r.y=a.y*q.y,F.mapSize.y=a.y)),F.map===null){const J=this.type!==VSMShadowMap?{minFilter:NearestFilter,magFilter:NearestFilter}:{};F.map=new WebGLRenderTarget(r.x,r.y,J),F.map.texture.name=O.name+".shadowMap",F.camera.updateProjectionMatrix()}s.setRenderTarget(F.map),s.clear();const Z=F.getViewportCount();for(let J=0;J<Z;J++){const X=F.getViewport(J);l.set(a.x*X.x,a.y*X.y,a.x*X.z,a.y*X.w),U.viewport(l),F.updateMatrices(O,J),i=F.getFrustum(),w(M,P,F.camera,O,this.type)}F.isPointLightShadow!==!0&&this.type===VSMShadowMap&&y(F,P),F.needsUpdate=!1}p.needsUpdate=!1,s.setRenderTarget(N,b,L)};function y(A,M){const P=e.update(m);h.defines.VSM_SAMPLES!==A.blurSamples&&(h.defines.VSM_SAMPLES=A.blurSamples,_.defines.VSM_SAMPLES=A.blurSamples,h.needsUpdate=!0,_.needsUpdate=!0),A.mapPass===null&&(A.mapPass=new WebGLRenderTarget(r.x,r.y)),h.uniforms.shadow_pass.value=A.map.texture,h.uniforms.resolution.value=A.mapSize,h.uniforms.radius.value=A.radius,s.setRenderTarget(A.mapPass),s.clear(),s.renderBufferDirect(M,null,P,h,m,null),_.uniforms.shadow_pass.value=A.mapPass.texture,_.uniforms.resolution.value=A.mapSize,_.uniforms.radius.value=A.radius,s.setRenderTarget(A.map),s.clear(),s.renderBufferDirect(M,null,P,_,m,null)}function C(A,M,P,N,b,L){let U=null;const Y=P.isPointLight===!0?A.customDistanceMaterial:A.customDepthMaterial;if(Y!==void 0)U=Y;else if(U=P.isPointLight===!0?c:o,s.localClippingEnabled&&M.clipShadows===!0&&Array.isArray(M.clippingPlanes)&&M.clippingPlanes.length!==0||M.displacementMap&&M.displacementScale!==0||M.alphaMap&&M.alphaTest>0||M.map&&M.alphaTest>0){const Q=U.uuid,O=M.uuid;let F=u[Q];F===void 0&&(F={},u[Q]=F);let q=F[O];q===void 0&&(q=U.clone(),F[O]=q),U=q}return U.visible=M.visible,U.wireframe=M.wireframe,L===VSMShadowMap?U.side=M.shadowSide!==null?M.shadowSide:M.side:U.side=M.shadowSide!==null?M.shadowSide:f[M.side],U.alphaMap=M.alphaMap,U.alphaTest=M.alphaTest,U.map=M.map,U.clipShadows=M.clipShadows,U.clippingPlanes=M.clippingPlanes,U.clipIntersection=M.clipIntersection,U.displacementMap=M.displacementMap,U.displacementScale=M.displacementScale,U.displacementBias=M.displacementBias,U.wireframeLinewidth=M.wireframeLinewidth,U.linewidth=M.linewidth,P.isPointLight===!0&&U.isMeshDistanceMaterial===!0&&(U.referencePosition.setFromMatrixPosition(P.matrixWorld),U.nearDistance=N,U.farDistance=b),U}function w(A,M,P,N,b){if(A.visible===!1)return;if(A.layers.test(M.layers)&&(A.isMesh||A.isLine||A.isPoints)&&(A.castShadow||A.receiveShadow&&b===VSMShadowMap)&&(!A.frustumCulled||i.intersectsObject(A))){A.modelViewMatrix.multiplyMatrices(P.matrixWorldInverse,A.matrixWorld);const Y=e.update(A),Q=A.material;if(Array.isArray(Q)){const O=Y.groups;for(let F=0,q=O.length;F<q;F++){const Z=O[F],J=Q[Z.materialIndex];if(J&&J.visible){const X=C(A,J,N,P.near,P.far,b);s.renderBufferDirect(P,null,Y,X,A,Z)}}}else if(Q.visible){const O=C(A,Q,N,P.near,P.far,b);s.renderBufferDirect(P,null,Y,O,A,null)}}const U=A.children;for(let Y=0,Q=U.length;Y<Q;Y++)w(U[Y],M,P,N,b)}}function WebGLState(s,e,n){const i=n.isWebGL2;function r(){let R=!1;const H=new Vector4;let K=null;const ue=new Vector4(0,0,0,0);return{setMask:function(ge){K!==ge&&!R&&(s.colorMask(ge,ge,ge,ge),K=ge)},setLocked:function(ge){R=ge},setClear:function(ge,Ie,ke,$e,tt){tt===!0&&(ge*=$e,Ie*=$e,ke*=$e),H.set(ge,Ie,ke,$e),ue.equals(H)===!1&&(s.clearColor(ge,Ie,ke,$e),ue.copy(H))},reset:function(){R=!1,K=null,ue.set(-1,0,0,0)}}}function a(){let R=!1,H=null,K=null,ue=null;return{setTest:function(ge){ge?ye(2929):_e(2929)},setMask:function(ge){H!==ge&&!R&&(s.depthMask(ge),H=ge)},setFunc:function(ge){if(K!==ge){switch(ge){case NeverDepth:s.depthFunc(512);break;case AlwaysDepth:s.depthFunc(519);break;case LessDepth:s.depthFunc(513);break;case LessEqualDepth:s.depthFunc(515);break;case EqualDepth:s.depthFunc(514);break;case GreaterEqualDepth:s.depthFunc(518);break;case GreaterDepth:s.depthFunc(516);break;case NotEqualDepth:s.depthFunc(517);break;default:s.depthFunc(515)}K=ge}},setLocked:function(ge){R=ge},setClear:function(ge){ue!==ge&&(s.clearDepth(ge),ue=ge)},reset:function(){R=!1,H=null,K=null,ue=null}}}function l(){let R=!1,H=null,K=null,ue=null,ge=null,Ie=null,ke=null,$e=null,tt=null;return{setTest:function(Ne){R||(Ne?ye(2960):_e(2960))},setMask:function(Ne){H!==Ne&&!R&&(s.stencilMask(Ne),H=Ne)},setFunc:function(Ne,Qe,Je){(K!==Ne||ue!==Qe||ge!==Je)&&(s.stencilFunc(Ne,Qe,Je),K=Ne,ue=Qe,ge=Je)},setOp:function(Ne,Qe,Je){(Ie!==Ne||ke!==Qe||$e!==Je)&&(s.stencilOp(Ne,Qe,Je),Ie=Ne,ke=Qe,$e=Je)},setLocked:function(Ne){R=Ne},setClear:function(Ne){tt!==Ne&&(s.clearStencil(Ne),tt=Ne)},reset:function(){R=!1,H=null,K=null,ue=null,ge=null,Ie=null,ke=null,$e=null,tt=null}}}const o=new r,c=new a,u=new l,d=new WeakMap,f=new WeakMap;let h={},_={},v=new WeakMap,m=[],p=null,y=!1,C=null,w=null,A=null,M=null,P=null,N=null,b=null,L=!1,U=null,Y=null,Q=null,O=null,F=null;const q=s.getParameter(35661);let Z=!1,J=0;const X=s.getParameter(7938);X.indexOf("WebGL")!==-1?(J=parseFloat(/^WebGL (\d)/.exec(X)[1]),Z=J>=1):X.indexOf("OpenGL ES")!==-1&&(J=parseFloat(/^OpenGL ES (\d)/.exec(X)[1]),Z=J>=2);let ne=null,te={};const he=s.getParameter(3088),G=s.getParameter(2978),j=new Vector4().fromArray(he),re=new Vector4().fromArray(G);function se(R,H,K){const ue=new Uint8Array(4),ge=s.createTexture();s.bindTexture(R,ge),s.texParameteri(R,10241,9728),s.texParameteri(R,10240,9728);for(let Ie=0;Ie<K;Ie++)s.texImage2D(H+Ie,0,6408,1,1,0,6408,5121,ue);return ge}const V={};V[3553]=se(3553,3553,1),V[34067]=se(34067,34069,6),o.setClear(0,0,0,1),c.setClear(1),u.setClear(0),ye(2929),c.setFunc(LessEqualDepth),Be(!1),Xe(CullFaceBack),ye(2884),ze(NoBlending);function ye(R){h[R]!==!0&&(s.enable(R),h[R]=!0)}function _e(R){h[R]!==!1&&(s.disable(R),h[R]=!1)}function pe(R,H){return _[R]!==H?(s.bindFramebuffer(R,H),_[R]=H,i&&(R===36009&&(_[36160]=H),R===36160&&(_[36009]=H)),!0):!1}function ce(R,H){let K=m,ue=!1;if(R)if(K=v.get(H),K===void 0&&(K=[],v.set(H,K)),R.isWebGLMultipleRenderTargets){const ge=R.texture;if(K.length!==ge.length||K[0]!==36064){for(let Ie=0,ke=ge.length;Ie<ke;Ie++)K[Ie]=36064+Ie;K.length=ge.length,ue=!0}}else K[0]!==36064&&(K[0]=36064,ue=!0);else K[0]!==1029&&(K[0]=1029,ue=!0);ue&&(n.isWebGL2?s.drawBuffers(K):e.get("WEBGL_draw_buffers").drawBuffersWEBGL(K))}function Fe(R){return p!==R?(s.useProgram(R),p=R,!0):!1}const Me={[AddEquation]:32774,[SubtractEquation]:32778,[ReverseSubtractEquation]:32779};if(i)Me[MinEquation]=32775,Me[MaxEquation]=32776;else{const R=e.get("EXT_blend_minmax");R!==null&&(Me[MinEquation]=R.MIN_EXT,Me[MaxEquation]=R.MAX_EXT)}const ve={[ZeroFactor]:0,[OneFactor]:1,[SrcColorFactor]:768,[SrcAlphaFactor]:770,[SrcAlphaSaturateFactor]:776,[DstColorFactor]:774,[DstAlphaFactor]:772,[OneMinusSrcColorFactor]:769,[OneMinusSrcAlphaFactor]:771,[OneMinusDstColorFactor]:775,[OneMinusDstAlphaFactor]:773};function ze(R,H,K,ue,ge,Ie,ke,$e){if(R===NoBlending){y===!0&&(_e(3042),y=!1);return}if(y===!1&&(ye(3042),y=!0),R!==CustomBlending){if(R!==C||$e!==L){if((w!==AddEquation||P!==AddEquation)&&(s.blendEquation(32774),w=AddEquation,P=AddEquation),$e)switch(R){case NormalBlending:s.blendFuncSeparate(1,771,1,771);break;case AdditiveBlending:s.blendFunc(1,1);break;case SubtractiveBlending:s.blendFuncSeparate(0,769,0,1);break;case MultiplyBlending:s.blendFuncSeparate(0,768,0,770);break;default:console.error("THREE.WebGLState: Invalid blending: ",R);break}else switch(R){case NormalBlending:s.blendFuncSeparate(770,771,1,771);break;case AdditiveBlending:s.blendFunc(770,1);break;case SubtractiveBlending:s.blendFuncSeparate(0,769,0,1);break;case MultiplyBlending:s.blendFunc(0,768);break;default:console.error("THREE.WebGLState: Invalid blending: ",R);break}A=null,M=null,N=null,b=null,C=R,L=$e}return}ge=ge||H,Ie=Ie||K,ke=ke||ue,(H!==w||ge!==P)&&(s.blendEquationSeparate(Me[H],Me[ge]),w=H,P=ge),(K!==A||ue!==M||Ie!==N||ke!==b)&&(s.blendFuncSeparate(ve[K],ve[ue],ve[Ie],ve[ke]),A=K,M=ue,N=Ie,b=ke),C=R,L=!1}function We(R,H){R.side===DoubleSide?_e(2884):ye(2884);let K=R.side===BackSide;H&&(K=!K),Be(K),R.blending===NormalBlending&&R.transparent===!1?ze(NoBlending):ze(R.blending,R.blendEquation,R.blendSrc,R.blendDst,R.blendEquationAlpha,R.blendSrcAlpha,R.blendDstAlpha,R.premultipliedAlpha),c.setFunc(R.depthFunc),c.setTest(R.depthTest),c.setMask(R.depthWrite),o.setMask(R.colorWrite);const ue=R.stencilWrite;u.setTest(ue),ue&&(u.setMask(R.stencilWriteMask),u.setFunc(R.stencilFunc,R.stencilRef,R.stencilFuncMask),u.setOp(R.stencilFail,R.stencilZFail,R.stencilZPass)),De(R.polygonOffset,R.polygonOffsetFactor,R.polygonOffsetUnits),R.alphaToCoverage===!0?ye(32926):_e(32926)}function Be(R){U!==R&&(R?s.frontFace(2304):s.frontFace(2305),U=R)}function Xe(R){R!==CullFaceNone?(ye(2884),R!==Y&&(R===CullFaceBack?s.cullFace(1029):R===CullFaceFront?s.cullFace(1028):s.cullFace(1032))):_e(2884),Y=R}function Oe(R){R!==Q&&(Z&&s.lineWidth(R),Q=R)}function De(R,H,K){R?(ye(32823),(O!==H||F!==K)&&(s.polygonOffset(H,K),O=H,F=K)):_e(32823)}function Ke(R){R?ye(3089):_e(3089)}function je(R){R===void 0&&(R=33984+q-1),ne!==R&&(s.activeTexture(R),ne=R)}function E(R,H,K){K===void 0&&(ne===null?K=33984+q-1:K=ne);let ue=te[K];ue===void 0&&(ue={type:void 0,texture:void 0},te[K]=ue),(ue.type!==R||ue.texture!==H)&&(ne!==K&&(s.activeTexture(K),ne=K),s.bindTexture(R,H||V[R]),ue.type=R,ue.texture=H)}function g(){const R=te[ne];R!==void 0&&R.type!==void 0&&(s.bindTexture(R.type,null),R.type=void 0,R.texture=void 0)}function k(){try{s.compressedTexImage2D.apply(s,arguments)}catch(R){console.error("THREE.WebGLState:",R)}}function ee(){try{s.compressedTexImage3D.apply(s,arguments)}catch(R){console.error("THREE.WebGLState:",R)}}function ie(){try{s.texSubImage2D.apply(s,arguments)}catch(R){console.error("THREE.WebGLState:",R)}}function ae(){try{s.texSubImage3D.apply(s,arguments)}catch(R){console.error("THREE.WebGLState:",R)}}function be(){try{s.compressedTexSubImage2D.apply(s,arguments)}catch(R){console.error("THREE.WebGLState:",R)}}function T(){try{s.compressedTexSubImage3D.apply(s,arguments)}catch(R){console.error("THREE.WebGLState:",R)}}function D(){try{s.texStorage2D.apply(s,arguments)}catch(R){console.error("THREE.WebGLState:",R)}}function le(){try{s.texStorage3D.apply(s,arguments)}catch(R){console.error("THREE.WebGLState:",R)}}function de(){try{s.texImage2D.apply(s,arguments)}catch(R){console.error("THREE.WebGLState:",R)}}function oe(){try{s.texImage3D.apply(s,arguments)}catch(R){console.error("THREE.WebGLState:",R)}}function me(R){j.equals(R)===!1&&(s.scissor(R.x,R.y,R.z,R.w),j.copy(R))}function fe(R){re.equals(R)===!1&&(s.viewport(R.x,R.y,R.z,R.w),re.copy(R))}function Ce(R,H){let K=f.get(H);K===void 0&&(K=new WeakMap,f.set(H,K));let ue=K.get(R);ue===void 0&&(ue=s.getUniformBlockIndex(H,R.name),K.set(R,ue))}function Te(R,H){const ue=f.get(H).get(R);d.get(H)!==ue&&(s.uniformBlockBinding(H,ue,R.__bindingPointIndex),d.set(H,ue))}function Ue(){s.disable(3042),s.disable(2884),s.disable(2929),s.disable(32823),s.disable(3089),s.disable(2960),s.disable(32926),s.blendEquation(32774),s.blendFunc(1,0),s.blendFuncSeparate(1,0,1,0),s.colorMask(!0,!0,!0,!0),s.clearColor(0,0,0,0),s.depthMask(!0),s.depthFunc(513),s.clearDepth(1),s.stencilMask(4294967295),s.stencilFunc(519,0,4294967295),s.stencilOp(7680,7680,7680),s.clearStencil(0),s.cullFace(1029),s.frontFace(2305),s.polygonOffset(0,0),s.activeTexture(33984),s.bindFramebuffer(36160,null),i===!0&&(s.bindFramebuffer(36009,null),s.bindFramebuffer(36008,null)),s.useProgram(null),s.lineWidth(1),s.scissor(0,0,s.canvas.width,s.canvas.height),s.viewport(0,0,s.canvas.width,s.canvas.height),h={},ne=null,te={},_={},v=new WeakMap,m=[],p=null,y=!1,C=null,w=null,A=null,M=null,P=null,N=null,b=null,L=!1,U=null,Y=null,Q=null,O=null,F=null,j.set(0,0,s.canvas.width,s.canvas.height),re.set(0,0,s.canvas.width,s.canvas.height),o.reset(),c.reset(),u.reset()}return{buffers:{color:o,depth:c,stencil:u},enable:ye,disable:_e,bindFramebuffer:pe,drawBuffers:ce,useProgram:Fe,setBlending:ze,setMaterial:We,setFlipSided:Be,setCullFace:Xe,setLineWidth:Oe,setPolygonOffset:De,setScissorTest:Ke,activeTexture:je,bindTexture:E,unbindTexture:g,compressedTexImage2D:k,compressedTexImage3D:ee,texImage2D:de,texImage3D:oe,updateUBOMapping:Ce,uniformBlockBinding:Te,texStorage2D:D,texStorage3D:le,texSubImage2D:ie,texSubImage3D:ae,compressedTexSubImage2D:be,compressedTexSubImage3D:T,scissor:me,viewport:fe,reset:Ue}}function WebGLTextures(s,e,n,i,r,a,l){const o=r.isWebGL2,c=r.maxTextures,u=r.maxCubemapSize,d=r.maxTextureSize,f=r.maxSamples,h=e.has("WEBGL_multisampled_render_to_texture")?e.get("WEBGL_multisampled_render_to_texture"):null,_=typeof navigator>"u"?!1:/OculusBrowser/g.test(navigator.userAgent),v=new WeakMap;let m;const p=new WeakMap;let y=!1;try{y=typeof OffscreenCanvas<"u"&&new OffscreenCanvas(1,1).getContext("2d")!==null}catch{}function C(E,g){return y?new OffscreenCanvas(E,g):createElementNS("canvas")}function w(E,g,k,ee){let ie=1;if((E.width>ee||E.height>ee)&&(ie=ee/Math.max(E.width,E.height)),ie<1||g===!0)if(typeof HTMLImageElement<"u"&&E instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&E instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&E instanceof ImageBitmap){const ae=g?floorPowerOfTwo:Math.floor,be=ae(ie*E.width),T=ae(ie*E.height);m===void 0&&(m=C(be,T));const D=k?C(be,T):m;return D.width=be,D.height=T,D.getContext("2d").drawImage(E,0,0,be,T),console.warn("THREE.WebGLRenderer: Texture has been resized from ("+E.width+"x"+E.height+") to ("+be+"x"+T+")."),D}else return"data"in E&&console.warn("THREE.WebGLRenderer: Image in DataTexture is too big ("+E.width+"x"+E.height+")."),E;return E}function A(E){return isPowerOfTwo(E.width)&&isPowerOfTwo(E.height)}function M(E){return o?!1:E.wrapS!==ClampToEdgeWrapping||E.wrapT!==ClampToEdgeWrapping||E.minFilter!==NearestFilter&&E.minFilter!==LinearFilter}function P(E,g){return E.generateMipmaps&&g&&E.minFilter!==NearestFilter&&E.minFilter!==LinearFilter}function N(E){s.generateMipmap(E)}function b(E,g,k,ee,ie=!1){if(o===!1)return g;if(E!==null){if(s[E]!==void 0)return s[E];console.warn("THREE.WebGLRenderer: Attempt to use non-existing WebGL internal format '"+E+"'")}let ae=g;return g===6403&&(k===5126&&(ae=33326),k===5131&&(ae=33325),k===5121&&(ae=33321)),g===33319&&(k===5126&&(ae=33328),k===5131&&(ae=33327),k===5121&&(ae=33323)),g===6408&&(k===5126&&(ae=34836),k===5131&&(ae=34842),k===5121&&(ae=ee===sRGBEncoding&&ie===!1?35907:32856),k===32819&&(ae=32854),k===32820&&(ae=32855)),(ae===33325||ae===33326||ae===33327||ae===33328||ae===34842||ae===34836)&&e.get("EXT_color_buffer_float"),ae}function L(E,g,k){return P(E,k)===!0||E.isFramebufferTexture&&E.minFilter!==NearestFilter&&E.minFilter!==LinearFilter?Math.log2(Math.max(g.width,g.height))+1:E.mipmaps!==void 0&&E.mipmaps.length>0?E.mipmaps.length:E.isCompressedTexture&&Array.isArray(E.image)?g.mipmaps.length:1}function U(E){return E===NearestFilter||E===NearestMipmapNearestFilter||E===NearestMipmapLinearFilter?9728:9729}function Y(E){const g=E.target;g.removeEventListener("dispose",Y),O(g),g.isVideoTexture&&v.delete(g)}function Q(E){const g=E.target;g.removeEventListener("dispose",Q),q(g)}function O(E){const g=i.get(E);if(g.__webglInit===void 0)return;const k=E.source,ee=p.get(k);if(ee){const ie=ee[g.__cacheKey];ie.usedTimes--,ie.usedTimes===0&&F(E),Object.keys(ee).length===0&&p.delete(k)}i.remove(E)}function F(E){const g=i.get(E);s.deleteTexture(g.__webglTexture);const k=E.source,ee=p.get(k);delete ee[g.__cacheKey],l.memory.textures--}function q(E){const g=E.texture,k=i.get(E),ee=i.get(g);if(ee.__webglTexture!==void 0&&(s.deleteTexture(ee.__webglTexture),l.memory.textures--),E.depthTexture&&E.depthTexture.dispose(),E.isWebGLCubeRenderTarget)for(let ie=0;ie<6;ie++)s.deleteFramebuffer(k.__webglFramebuffer[ie]),k.__webglDepthbuffer&&s.deleteRenderbuffer(k.__webglDepthbuffer[ie]);else{if(s.deleteFramebuffer(k.__webglFramebuffer),k.__webglDepthbuffer&&s.deleteRenderbuffer(k.__webglDepthbuffer),k.__webglMultisampledFramebuffer&&s.deleteFramebuffer(k.__webglMultisampledFramebuffer),k.__webglColorRenderbuffer)for(let ie=0;ie<k.__webglColorRenderbuffer.length;ie++)k.__webglColorRenderbuffer[ie]&&s.deleteRenderbuffer(k.__webglColorRenderbuffer[ie]);k.__webglDepthRenderbuffer&&s.deleteRenderbuffer(k.__webglDepthRenderbuffer)}if(E.isWebGLMultipleRenderTargets)for(let ie=0,ae=g.length;ie<ae;ie++){const be=i.get(g[ie]);be.__webglTexture&&(s.deleteTexture(be.__webglTexture),l.memory.textures--),i.remove(g[ie])}i.remove(g),i.remove(E)}let Z=0;function J(){Z=0}function X(){const E=Z;return E>=c&&console.warn("THREE.WebGLTextures: Trying to use "+E+" texture units while this GPU supports only "+c),Z+=1,E}function ne(E){const g=[];return g.push(E.wrapS),g.push(E.wrapT),g.push(E.wrapR||0),g.push(E.magFilter),g.push(E.minFilter),g.push(E.anisotropy),g.push(E.internalFormat),g.push(E.format),g.push(E.type),g.push(E.generateMipmaps),g.push(E.premultiplyAlpha),g.push(E.flipY),g.push(E.unpackAlignment),g.push(E.encoding),g.join()}function te(E,g){const k=i.get(E);if(E.isVideoTexture&&Ke(E),E.isRenderTargetTexture===!1&&E.version>0&&k.__version!==E.version){const ee=E.image;if(ee===null)console.warn("THREE.WebGLRenderer: Texture marked for update but no image data found.");else if(ee.complete===!1)console.warn("THREE.WebGLRenderer: Texture marked for update but image is incomplete");else{_e(k,E,g);return}}n.bindTexture(3553,k.__webglTexture,33984+g)}function he(E,g){const k=i.get(E);if(E.version>0&&k.__version!==E.version){_e(k,E,g);return}n.bindTexture(35866,k.__webglTexture,33984+g)}function G(E,g){const k=i.get(E);if(E.version>0&&k.__version!==E.version){_e(k,E,g);return}n.bindTexture(32879,k.__webglTexture,33984+g)}function j(E,g){const k=i.get(E);if(E.version>0&&k.__version!==E.version){pe(k,E,g);return}n.bindTexture(34067,k.__webglTexture,33984+g)}const re={[RepeatWrapping]:10497,[ClampToEdgeWrapping]:33071,[MirroredRepeatWrapping]:33648},se={[NearestFilter]:9728,[NearestMipmapNearestFilter]:9984,[NearestMipmapLinearFilter]:9986,[LinearFilter]:9729,[LinearMipmapNearestFilter]:9985,[LinearMipmapLinearFilter]:9987};function V(E,g,k){if(k?(s.texParameteri(E,10242,re[g.wrapS]),s.texParameteri(E,10243,re[g.wrapT]),(E===32879||E===35866)&&s.texParameteri(E,32882,re[g.wrapR]),s.texParameteri(E,10240,se[g.magFilter]),s.texParameteri(E,10241,se[g.minFilter])):(s.texParameteri(E,10242,33071),s.texParameteri(E,10243,33071),(E===32879||E===35866)&&s.texParameteri(E,32882,33071),(g.wrapS!==ClampToEdgeWrapping||g.wrapT!==ClampToEdgeWrapping)&&console.warn("THREE.WebGLRenderer: Texture is not power of two. Texture.wrapS and Texture.wrapT should be set to THREE.ClampToEdgeWrapping."),s.texParameteri(E,10240,U(g.magFilter)),s.texParameteri(E,10241,U(g.minFilter)),g.minFilter!==NearestFilter&&g.minFilter!==LinearFilter&&console.warn("THREE.WebGLRenderer: Texture is not power of two. Texture.minFilter should be set to THREE.NearestFilter or THREE.LinearFilter.")),e.has("EXT_texture_filter_anisotropic")===!0){const ee=e.get("EXT_texture_filter_anisotropic");if(g.magFilter===NearestFilter||g.minFilter!==NearestMipmapLinearFilter&&g.minFilter!==LinearMipmapLinearFilter||g.type===FloatType&&e.has("OES_texture_float_linear")===!1||o===!1&&g.type===HalfFloatType&&e.has("OES_texture_half_float_linear")===!1)return;(g.anisotropy>1||i.get(g).__currentAnisotropy)&&(s.texParameterf(E,ee.TEXTURE_MAX_ANISOTROPY_EXT,Math.min(g.anisotropy,r.getMaxAnisotropy())),i.get(g).__currentAnisotropy=g.anisotropy)}}function ye(E,g){let k=!1;E.__webglInit===void 0&&(E.__webglInit=!0,g.addEventListener("dispose",Y));const ee=g.source;let ie=p.get(ee);ie===void 0&&(ie={},p.set(ee,ie));const ae=ne(g);if(ae!==E.__cacheKey){ie[ae]===void 0&&(ie[ae]={texture:s.createTexture(),usedTimes:0},l.memory.textures++,k=!0),ie[ae].usedTimes++;const be=ie[E.__cacheKey];be!==void 0&&(ie[E.__cacheKey].usedTimes--,be.usedTimes===0&&F(g)),E.__cacheKey=ae,E.__webglTexture=ie[ae].texture}return k}function _e(E,g,k){let ee=3553;(g.isDataArrayTexture||g.isCompressedArrayTexture)&&(ee=35866),g.isData3DTexture&&(ee=32879);const ie=ye(E,g),ae=g.source;n.bindTexture(ee,E.__webglTexture,33984+k);const be=i.get(ae);if(ae.version!==be.__version||ie===!0){n.activeTexture(33984+k),s.pixelStorei(37440,g.flipY),s.pixelStorei(37441,g.premultiplyAlpha),s.pixelStorei(3317,g.unpackAlignment),s.pixelStorei(37443,0);const T=M(g)&&A(g.image)===!1;let D=w(g.image,T,!1,d);D=je(g,D);const le=A(D)||o,de=a.convert(g.format,g.encoding);let oe=a.convert(g.type),me=b(g.internalFormat,de,oe,g.encoding,g.isVideoTexture);V(ee,g,le);let fe;const Ce=g.mipmaps,Te=o&&g.isVideoTexture!==!0,Ue=be.__version===void 0||ie===!0,R=L(g,D,le);if(g.isDepthTexture)me=6402,o?g.type===FloatType?me=36012:g.type===UnsignedIntType?me=33190:g.type===UnsignedInt248Type?me=35056:me=33189:g.type===FloatType&&console.error("WebGLRenderer: Floating point depth texture requires WebGL2."),g.format===DepthFormat&&me===6402&&g.type!==UnsignedShortType&&g.type!==UnsignedIntType&&(console.warn("THREE.WebGLRenderer: Use UnsignedShortType or UnsignedIntType for DepthFormat DepthTexture."),g.type=UnsignedIntType,oe=a.convert(g.type)),g.format===DepthStencilFormat&&me===6402&&(me=34041,g.type!==UnsignedInt248Type&&(console.warn("THREE.WebGLRenderer: Use UnsignedInt248Type for DepthStencilFormat DepthTexture."),g.type=UnsignedInt248Type,oe=a.convert(g.type))),Ue&&(Te?n.texStorage2D(3553,1,me,D.width,D.height):n.texImage2D(3553,0,me,D.width,D.height,0,de,oe,null));else if(g.isDataTexture)if(Ce.length>0&&le){Te&&Ue&&n.texStorage2D(3553,R,me,Ce[0].width,Ce[0].height);for(let H=0,K=Ce.length;H<K;H++)fe=Ce[H],Te?n.texSubImage2D(3553,H,0,0,fe.width,fe.height,de,oe,fe.data):n.texImage2D(3553,H,me,fe.width,fe.height,0,de,oe,fe.data);g.generateMipmaps=!1}else Te?(Ue&&n.texStorage2D(3553,R,me,D.width,D.height),n.texSubImage2D(3553,0,0,0,D.width,D.height,de,oe,D.data)):n.texImage2D(3553,0,me,D.width,D.height,0,de,oe,D.data);else if(g.isCompressedTexture)if(g.isCompressedArrayTexture){Te&&Ue&&n.texStorage3D(35866,R,me,Ce[0].width,Ce[0].height,D.depth);for(let H=0,K=Ce.length;H<K;H++)fe=Ce[H],g.format!==RGBAFormat?de!==null?Te?n.compressedTexSubImage3D(35866,H,0,0,0,fe.width,fe.height,D.depth,de,fe.data,0,0):n.compressedTexImage3D(35866,H,me,fe.width,fe.height,D.depth,0,fe.data,0,0):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):Te?n.texSubImage3D(35866,H,0,0,0,fe.width,fe.height,D.depth,de,oe,fe.data):n.texImage3D(35866,H,me,fe.width,fe.height,D.depth,0,de,oe,fe.data)}else{Te&&Ue&&n.texStorage2D(3553,R,me,Ce[0].width,Ce[0].height);for(let H=0,K=Ce.length;H<K;H++)fe=Ce[H],g.format!==RGBAFormat?de!==null?Te?n.compressedTexSubImage2D(3553,H,0,0,fe.width,fe.height,de,fe.data):n.compressedTexImage2D(3553,H,me,fe.width,fe.height,0,fe.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):Te?n.texSubImage2D(3553,H,0,0,fe.width,fe.height,de,oe,fe.data):n.texImage2D(3553,H,me,fe.width,fe.height,0,de,oe,fe.data)}else if(g.isDataArrayTexture)Te?(Ue&&n.texStorage3D(35866,R,me,D.width,D.height,D.depth),n.texSubImage3D(35866,0,0,0,0,D.width,D.height,D.depth,de,oe,D.data)):n.texImage3D(35866,0,me,D.width,D.height,D.depth,0,de,oe,D.data);else if(g.isData3DTexture)Te?(Ue&&n.texStorage3D(32879,R,me,D.width,D.height,D.depth),n.texSubImage3D(32879,0,0,0,0,D.width,D.height,D.depth,de,oe,D.data)):n.texImage3D(32879,0,me,D.width,D.height,D.depth,0,de,oe,D.data);else if(g.isFramebufferTexture){if(Ue)if(Te)n.texStorage2D(3553,R,me,D.width,D.height);else{let H=D.width,K=D.height;for(let ue=0;ue<R;ue++)n.texImage2D(3553,ue,me,H,K,0,de,oe,null),H>>=1,K>>=1}}else if(Ce.length>0&&le){Te&&Ue&&n.texStorage2D(3553,R,me,Ce[0].width,Ce[0].height);for(let H=0,K=Ce.length;H<K;H++)fe=Ce[H],Te?n.texSubImage2D(3553,H,0,0,de,oe,fe):n.texImage2D(3553,H,me,de,oe,fe);g.generateMipmaps=!1}else Te?(Ue&&n.texStorage2D(3553,R,me,D.width,D.height),n.texSubImage2D(3553,0,0,0,de,oe,D)):n.texImage2D(3553,0,me,de,oe,D);P(g,le)&&N(ee),be.__version=ae.version,g.onUpdate&&g.onUpdate(g)}E.__version=g.version}function pe(E,g,k){if(g.image.length!==6)return;const ee=ye(E,g),ie=g.source;n.bindTexture(34067,E.__webglTexture,33984+k);const ae=i.get(ie);if(ie.version!==ae.__version||ee===!0){n.activeTexture(33984+k),s.pixelStorei(37440,g.flipY),s.pixelStorei(37441,g.premultiplyAlpha),s.pixelStorei(3317,g.unpackAlignment),s.pixelStorei(37443,0);const be=g.isCompressedTexture||g.image[0].isCompressedTexture,T=g.image[0]&&g.image[0].isDataTexture,D=[];for(let H=0;H<6;H++)!be&&!T?D[H]=w(g.image[H],!1,!0,u):D[H]=T?g.image[H].image:g.image[H],D[H]=je(g,D[H]);const le=D[0],de=A(le)||o,oe=a.convert(g.format,g.encoding),me=a.convert(g.type),fe=b(g.internalFormat,oe,me,g.encoding),Ce=o&&g.isVideoTexture!==!0,Te=ae.__version===void 0||ee===!0;let Ue=L(g,le,de);V(34067,g,de);let R;if(be){Ce&&Te&&n.texStorage2D(34067,Ue,fe,le.width,le.height);for(let H=0;H<6;H++){R=D[H].mipmaps;for(let K=0;K<R.length;K++){const ue=R[K];g.format!==RGBAFormat?oe!==null?Ce?n.compressedTexSubImage2D(34069+H,K,0,0,ue.width,ue.height,oe,ue.data):n.compressedTexImage2D(34069+H,K,fe,ue.width,ue.height,0,ue.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .setTextureCube()"):Ce?n.texSubImage2D(34069+H,K,0,0,ue.width,ue.height,oe,me,ue.data):n.texImage2D(34069+H,K,fe,ue.width,ue.height,0,oe,me,ue.data)}}}else{R=g.mipmaps,Ce&&Te&&(R.length>0&&Ue++,n.texStorage2D(34067,Ue,fe,D[0].width,D[0].height));for(let H=0;H<6;H++)if(T){Ce?n.texSubImage2D(34069+H,0,0,0,D[H].width,D[H].height,oe,me,D[H].data):n.texImage2D(34069+H,0,fe,D[H].width,D[H].height,0,oe,me,D[H].data);for(let K=0;K<R.length;K++){const ge=R[K].image[H].image;Ce?n.texSubImage2D(34069+H,K+1,0,0,ge.width,ge.height,oe,me,ge.data):n.texImage2D(34069+H,K+1,fe,ge.width,ge.height,0,oe,me,ge.data)}}else{Ce?n.texSubImage2D(34069+H,0,0,0,oe,me,D[H]):n.texImage2D(34069+H,0,fe,oe,me,D[H]);for(let K=0;K<R.length;K++){const ue=R[K];Ce?n.texSubImage2D(34069+H,K+1,0,0,oe,me,ue.image[H]):n.texImage2D(34069+H,K+1,fe,oe,me,ue.image[H])}}}P(g,de)&&N(34067),ae.__version=ie.version,g.onUpdate&&g.onUpdate(g)}E.__version=g.version}function ce(E,g,k,ee,ie){const ae=a.convert(k.format,k.encoding),be=a.convert(k.type),T=b(k.internalFormat,ae,be,k.encoding);i.get(g).__hasExternalTextures||(ie===32879||ie===35866?n.texImage3D(ie,0,T,g.width,g.height,g.depth,0,ae,be,null):n.texImage2D(ie,0,T,g.width,g.height,0,ae,be,null)),n.bindFramebuffer(36160,E),De(g)?h.framebufferTexture2DMultisampleEXT(36160,ee,ie,i.get(k).__webglTexture,0,Oe(g)):(ie===3553||ie>=34069&&ie<=34074)&&s.framebufferTexture2D(36160,ee,ie,i.get(k).__webglTexture,0),n.bindFramebuffer(36160,null)}function Fe(E,g,k){if(s.bindRenderbuffer(36161,E),g.depthBuffer&&!g.stencilBuffer){let ee=33189;if(k||De(g)){const ie=g.depthTexture;ie&&ie.isDepthTexture&&(ie.type===FloatType?ee=36012:ie.type===UnsignedIntType&&(ee=33190));const ae=Oe(g);De(g)?h.renderbufferStorageMultisampleEXT(36161,ae,ee,g.width,g.height):s.renderbufferStorageMultisample(36161,ae,ee,g.width,g.height)}else s.renderbufferStorage(36161,ee,g.width,g.height);s.framebufferRenderbuffer(36160,36096,36161,E)}else if(g.depthBuffer&&g.stencilBuffer){const ee=Oe(g);k&&De(g)===!1?s.renderbufferStorageMultisample(36161,ee,35056,g.width,g.height):De(g)?h.renderbufferStorageMultisampleEXT(36161,ee,35056,g.width,g.height):s.renderbufferStorage(36161,34041,g.width,g.height),s.framebufferRenderbuffer(36160,33306,36161,E)}else{const ee=g.isWebGLMultipleRenderTargets===!0?g.texture:[g.texture];for(let ie=0;ie<ee.length;ie++){const ae=ee[ie],be=a.convert(ae.format,ae.encoding),T=a.convert(ae.type),D=b(ae.internalFormat,be,T,ae.encoding),le=Oe(g);k&&De(g)===!1?s.renderbufferStorageMultisample(36161,le,D,g.width,g.height):De(g)?h.renderbufferStorageMultisampleEXT(36161,le,D,g.width,g.height):s.renderbufferStorage(36161,D,g.width,g.height)}}s.bindRenderbuffer(36161,null)}function Me(E,g){if(g&&g.isWebGLCubeRenderTarget)throw new Error("Depth Texture with cube render targets is not supported");if(n.bindFramebuffer(36160,E),!(g.depthTexture&&g.depthTexture.isDepthTexture))throw new Error("renderTarget.depthTexture must be an instance of THREE.DepthTexture");(!i.get(g.depthTexture).__webglTexture||g.depthTexture.image.width!==g.width||g.depthTexture.image.height!==g.height)&&(g.depthTexture.image.width=g.width,g.depthTexture.image.height=g.height,g.depthTexture.needsUpdate=!0),te(g.depthTexture,0);const ee=i.get(g.depthTexture).__webglTexture,ie=Oe(g);if(g.depthTexture.format===DepthFormat)De(g)?h.framebufferTexture2DMultisampleEXT(36160,36096,3553,ee,0,ie):s.framebufferTexture2D(36160,36096,3553,ee,0);else if(g.depthTexture.format===DepthStencilFormat)De(g)?h.framebufferTexture2DMultisampleEXT(36160,33306,3553,ee,0,ie):s.framebufferTexture2D(36160,33306,3553,ee,0);else throw new Error("Unknown depthTexture format")}function ve(E){const g=i.get(E),k=E.isWebGLCubeRenderTarget===!0;if(E.depthTexture&&!g.__autoAllocateDepthBuffer){if(k)throw new Error("target.depthTexture not supported in Cube render targets");Me(g.__webglFramebuffer,E)}else if(k){g.__webglDepthbuffer=[];for(let ee=0;ee<6;ee++)n.bindFramebuffer(36160,g.__webglFramebuffer[ee]),g.__webglDepthbuffer[ee]=s.createRenderbuffer(),Fe(g.__webglDepthbuffer[ee],E,!1)}else n.bindFramebuffer(36160,g.__webglFramebuffer),g.__webglDepthbuffer=s.createRenderbuffer(),Fe(g.__webglDepthbuffer,E,!1);n.bindFramebuffer(36160,null)}function ze(E,g,k){const ee=i.get(E);g!==void 0&&ce(ee.__webglFramebuffer,E,E.texture,36064,3553),k!==void 0&&ve(E)}function We(E){const g=E.texture,k=i.get(E),ee=i.get(g);E.addEventListener("dispose",Q),E.isWebGLMultipleRenderTargets!==!0&&(ee.__webglTexture===void 0&&(ee.__webglTexture=s.createTexture()),ee.__version=g.version,l.memory.textures++);const ie=E.isWebGLCubeRenderTarget===!0,ae=E.isWebGLMultipleRenderTargets===!0,be=A(E)||o;if(ie){k.__webglFramebuffer=[];for(let T=0;T<6;T++)k.__webglFramebuffer[T]=s.createFramebuffer()}else{if(k.__webglFramebuffer=s.createFramebuffer(),ae)if(r.drawBuffers){const T=E.texture;for(let D=0,le=T.length;D<le;D++){const de=i.get(T[D]);de.__webglTexture===void 0&&(de.__webglTexture=s.createTexture(),l.memory.textures++)}}else console.warn("THREE.WebGLRenderer: WebGLMultipleRenderTargets can only be used with WebGL2 or WEBGL_draw_buffers extension.");if(o&&E.samples>0&&De(E)===!1){const T=ae?g:[g];k.__webglMultisampledFramebuffer=s.createFramebuffer(),k.__webglColorRenderbuffer=[],n.bindFramebuffer(36160,k.__webglMultisampledFramebuffer);for(let D=0;D<T.length;D++){const le=T[D];k.__webglColorRenderbuffer[D]=s.createRenderbuffer(),s.bindRenderbuffer(36161,k.__webglColorRenderbuffer[D]);const de=a.convert(le.format,le.encoding),oe=a.convert(le.type),me=b(le.internalFormat,de,oe,le.encoding,E.isXRRenderTarget===!0),fe=Oe(E);s.renderbufferStorageMultisample(36161,fe,me,E.width,E.height),s.framebufferRenderbuffer(36160,36064+D,36161,k.__webglColorRenderbuffer[D])}s.bindRenderbuffer(36161,null),E.depthBuffer&&(k.__webglDepthRenderbuffer=s.createRenderbuffer(),Fe(k.__webglDepthRenderbuffer,E,!0)),n.bindFramebuffer(36160,null)}}if(ie){n.bindTexture(34067,ee.__webglTexture),V(34067,g,be);for(let T=0;T<6;T++)ce(k.__webglFramebuffer[T],E,g,36064,34069+T);P(g,be)&&N(34067),n.unbindTexture()}else if(ae){const T=E.texture;for(let D=0,le=T.length;D<le;D++){const de=T[D],oe=i.get(de);n.bindTexture(3553,oe.__webglTexture),V(3553,de,be),ce(k.__webglFramebuffer,E,de,36064+D,3553),P(de,be)&&N(3553)}n.unbindTexture()}else{let T=3553;(E.isWebGL3DRenderTarget||E.isWebGLArrayRenderTarget)&&(o?T=E.isWebGL3DRenderTarget?32879:35866:console.error("THREE.WebGLTextures: THREE.Data3DTexture and THREE.DataArrayTexture only supported with WebGL2.")),n.bindTexture(T,ee.__webglTexture),V(T,g,be),ce(k.__webglFramebuffer,E,g,36064,T),P(g,be)&&N(T),n.unbindTexture()}E.depthBuffer&&ve(E)}function Be(E){const g=A(E)||o,k=E.isWebGLMultipleRenderTargets===!0?E.texture:[E.texture];for(let ee=0,ie=k.length;ee<ie;ee++){const ae=k[ee];if(P(ae,g)){const be=E.isWebGLCubeRenderTarget?34067:3553,T=i.get(ae).__webglTexture;n.bindTexture(be,T),N(be),n.unbindTexture()}}}function Xe(E){if(o&&E.samples>0&&De(E)===!1){const g=E.isWebGLMultipleRenderTargets?E.texture:[E.texture],k=E.width,ee=E.height;let ie=16384;const ae=[],be=E.stencilBuffer?33306:36096,T=i.get(E),D=E.isWebGLMultipleRenderTargets===!0;if(D)for(let le=0;le<g.length;le++)n.bindFramebuffer(36160,T.__webglMultisampledFramebuffer),s.framebufferRenderbuffer(36160,36064+le,36161,null),n.bindFramebuffer(36160,T.__webglFramebuffer),s.framebufferTexture2D(36009,36064+le,3553,null,0);n.bindFramebuffer(36008,T.__webglMultisampledFramebuffer),n.bindFramebuffer(36009,T.__webglFramebuffer);for(let le=0;le<g.length;le++){ae.push(36064+le),E.depthBuffer&&ae.push(be);const de=T.__ignoreDepthValues!==void 0?T.__ignoreDepthValues:!1;if(de===!1&&(E.depthBuffer&&(ie|=256),E.stencilBuffer&&(ie|=1024)),D&&s.framebufferRenderbuffer(36008,36064,36161,T.__webglColorRenderbuffer[le]),de===!0&&(s.invalidateFramebuffer(36008,[be]),s.invalidateFramebuffer(36009,[be])),D){const oe=i.get(g[le]).__webglTexture;s.framebufferTexture2D(36009,36064,3553,oe,0)}s.blitFramebuffer(0,0,k,ee,0,0,k,ee,ie,9728),_&&s.invalidateFramebuffer(36008,ae)}if(n.bindFramebuffer(36008,null),n.bindFramebuffer(36009,null),D)for(let le=0;le<g.length;le++){n.bindFramebuffer(36160,T.__webglMultisampledFramebuffer),s.framebufferRenderbuffer(36160,36064+le,36161,T.__webglColorRenderbuffer[le]);const de=i.get(g[le]).__webglTexture;n.bindFramebuffer(36160,T.__webglFramebuffer),s.framebufferTexture2D(36009,36064+le,3553,de,0)}n.bindFramebuffer(36009,T.__webglMultisampledFramebuffer)}}function Oe(E){return Math.min(f,E.samples)}function De(E){const g=i.get(E);return o&&E.samples>0&&e.has("WEBGL_multisampled_render_to_texture")===!0&&g.__useRenderToTexture!==!1}function Ke(E){const g=l.render.frame;v.get(E)!==g&&(v.set(E,g),E.update())}function je(E,g){const k=E.encoding,ee=E.format,ie=E.type;return E.isCompressedTexture===!0||E.isVideoTexture===!0||E.format===_SRGBAFormat||k!==LinearEncoding&&(k===sRGBEncoding?o===!1?e.has("EXT_sRGB")===!0&&ee===RGBAFormat?(E.format=_SRGBAFormat,E.minFilter=LinearFilter,E.generateMipmaps=!1):g=ImageUtils.sRGBToLinear(g):(ee!==RGBAFormat||ie!==UnsignedByteType)&&console.warn("THREE.WebGLTextures: sRGB encoded textures have to use RGBAFormat and UnsignedByteType."):console.error("THREE.WebGLTextures: Unsupported texture encoding:",k)),g}this.allocateTextureUnit=X,this.resetTextureUnits=J,this.setTexture2D=te,this.setTexture2DArray=he,this.setTexture3D=G,this.setTextureCube=j,this.rebindTextures=ze,this.setupRenderTarget=We,this.updateRenderTargetMipmap=Be,this.updateMultisampleRenderTarget=Xe,this.setupDepthRenderbuffer=ve,this.setupFrameBufferTexture=ce,this.useMultisampledRTT=De}function WebGLUtils(s,e,n){const i=n.isWebGL2;function r(a,l=null){let o;if(a===UnsignedByteType)return 5121;if(a===UnsignedShort4444Type)return 32819;if(a===UnsignedShort5551Type)return 32820;if(a===ByteType)return 5120;if(a===ShortType)return 5122;if(a===UnsignedShortType)return 5123;if(a===IntType)return 5124;if(a===UnsignedIntType)return 5125;if(a===FloatType)return 5126;if(a===HalfFloatType)return i?5131:(o=e.get("OES_texture_half_float"),o!==null?o.HALF_FLOAT_OES:null);if(a===AlphaFormat)return 6406;if(a===RGBAFormat)return 6408;if(a===LuminanceFormat)return 6409;if(a===LuminanceAlphaFormat)return 6410;if(a===DepthFormat)return 6402;if(a===DepthStencilFormat)return 34041;if(a===_SRGBAFormat)return o=e.get("EXT_sRGB"),o!==null?o.SRGB_ALPHA_EXT:null;if(a===RedFormat)return 6403;if(a===RedIntegerFormat)return 36244;if(a===RGFormat)return 33319;if(a===RGIntegerFormat)return 33320;if(a===RGBAIntegerFormat)return 36249;if(a===RGB_S3TC_DXT1_Format||a===RGBA_S3TC_DXT1_Format||a===RGBA_S3TC_DXT3_Format||a===RGBA_S3TC_DXT5_Format)if(l===sRGBEncoding)if(o=e.get("WEBGL_compressed_texture_s3tc_srgb"),o!==null){if(a===RGB_S3TC_DXT1_Format)return o.COMPRESSED_SRGB_S3TC_DXT1_EXT;if(a===RGBA_S3TC_DXT1_Format)return o.COMPRESSED_SRGB_ALPHA_S3TC_DXT1_EXT;if(a===RGBA_S3TC_DXT3_Format)return o.COMPRESSED_SRGB_ALPHA_S3TC_DXT3_EXT;if(a===RGBA_S3TC_DXT5_Format)return o.COMPRESSED_SRGB_ALPHA_S3TC_DXT5_EXT}else return null;else if(o=e.get("WEBGL_compressed_texture_s3tc"),o!==null){if(a===RGB_S3TC_DXT1_Format)return o.COMPRESSED_RGB_S3TC_DXT1_EXT;if(a===RGBA_S3TC_DXT1_Format)return o.COMPRESSED_RGBA_S3TC_DXT1_EXT;if(a===RGBA_S3TC_DXT3_Format)return o.COMPRESSED_RGBA_S3TC_DXT3_EXT;if(a===RGBA_S3TC_DXT5_Format)return o.COMPRESSED_RGBA_S3TC_DXT5_EXT}else return null;if(a===RGB_PVRTC_4BPPV1_Format||a===RGB_PVRTC_2BPPV1_Format||a===RGBA_PVRTC_4BPPV1_Format||a===RGBA_PVRTC_2BPPV1_Format)if(o=e.get("WEBGL_compressed_texture_pvrtc"),o!==null){if(a===RGB_PVRTC_4BPPV1_Format)return o.COMPRESSED_RGB_PVRTC_4BPPV1_IMG;if(a===RGB_PVRTC_2BPPV1_Format)return o.COMPRESSED_RGB_PVRTC_2BPPV1_IMG;if(a===RGBA_PVRTC_4BPPV1_Format)return o.COMPRESSED_RGBA_PVRTC_4BPPV1_IMG;if(a===RGBA_PVRTC_2BPPV1_Format)return o.COMPRESSED_RGBA_PVRTC_2BPPV1_IMG}else return null;if(a===RGB_ETC1_Format)return o=e.get("WEBGL_compressed_texture_etc1"),o!==null?o.COMPRESSED_RGB_ETC1_WEBGL:null;if(a===RGB_ETC2_Format||a===RGBA_ETC2_EAC_Format)if(o=e.get("WEBGL_compressed_texture_etc"),o!==null){if(a===RGB_ETC2_Format)return l===sRGBEncoding?o.COMPRESSED_SRGB8_ETC2:o.COMPRESSED_RGB8_ETC2;if(a===RGBA_ETC2_EAC_Format)return l===sRGBEncoding?o.COMPRESSED_SRGB8_ALPHA8_ETC2_EAC:o.COMPRESSED_RGBA8_ETC2_EAC}else return null;if(a===RGBA_ASTC_4x4_Format||a===RGBA_ASTC_5x4_Format||a===RGBA_ASTC_5x5_Format||a===RGBA_ASTC_6x5_Format||a===RGBA_ASTC_6x6_Format||a===RGBA_ASTC_8x5_Format||a===RGBA_ASTC_8x6_Format||a===RGBA_ASTC_8x8_Format||a===RGBA_ASTC_10x5_Format||a===RGBA_ASTC_10x6_Format||a===RGBA_ASTC_10x8_Format||a===RGBA_ASTC_10x10_Format||a===RGBA_ASTC_12x10_Format||a===RGBA_ASTC_12x12_Format)if(o=e.get("WEBGL_compressed_texture_astc"),o!==null){if(a===RGBA_ASTC_4x4_Format)return l===sRGBEncoding?o.COMPRESSED_SRGB8_ALPHA8_ASTC_4x4_KHR:o.COMPRESSED_RGBA_ASTC_4x4_KHR;if(a===RGBA_ASTC_5x4_Format)return l===sRGBEncoding?o.COMPRESSED_SRGB8_ALPHA8_ASTC_5x4_KHR:o.COMPRESSED_RGBA_ASTC_5x4_KHR;if(a===RGBA_ASTC_5x5_Format)return l===sRGBEncoding?o.COMPRESSED_SRGB8_ALPHA8_ASTC_5x5_KHR:o.COMPRESSED_RGBA_ASTC_5x5_KHR;if(a===RGBA_ASTC_6x5_Format)return l===sRGBEncoding?o.COMPRESSED_SRGB8_ALPHA8_ASTC_6x5_KHR:o.COMPRESSED_RGBA_ASTC_6x5_KHR;if(a===RGBA_ASTC_6x6_Format)return l===sRGBEncoding?o.COMPRESSED_SRGB8_ALPHA8_ASTC_6x6_KHR:o.COMPRESSED_RGBA_ASTC_6x6_KHR;if(a===RGBA_ASTC_8x5_Format)return l===sRGBEncoding?o.COMPRESSED_SRGB8_ALPHA8_ASTC_8x5_KHR:o.COMPRESSED_RGBA_ASTC_8x5_KHR;if(a===RGBA_ASTC_8x6_Format)return l===sRGBEncoding?o.COMPRESSED_SRGB8_ALPHA8_ASTC_8x6_KHR:o.COMPRESSED_RGBA_ASTC_8x6_KHR;if(a===RGBA_ASTC_8x8_Format)return l===sRGBEncoding?o.COMPRESSED_SRGB8_ALPHA8_ASTC_8x8_KHR:o.COMPRESSED_RGBA_ASTC_8x8_KHR;if(a===RGBA_ASTC_10x5_Format)return l===sRGBEncoding?o.COMPRESSED_SRGB8_ALPHA8_ASTC_10x5_KHR:o.COMPRESSED_RGBA_ASTC_10x5_KHR;if(a===RGBA_ASTC_10x6_Format)return l===sRGBEncoding?o.COMPRESSED_SRGB8_ALPHA8_ASTC_10x6_KHR:o.COMPRESSED_RGBA_ASTC_10x6_KHR;if(a===RGBA_ASTC_10x8_Format)return l===sRGBEncoding?o.COMPRESSED_SRGB8_ALPHA8_ASTC_10x8_KHR:o.COMPRESSED_RGBA_ASTC_10x8_KHR;if(a===RGBA_ASTC_10x10_Format)return l===sRGBEncoding?o.COMPRESSED_SRGB8_ALPHA8_ASTC_10x10_KHR:o.COMPRESSED_RGBA_ASTC_10x10_KHR;if(a===RGBA_ASTC_12x10_Format)return l===sRGBEncoding?o.COMPRESSED_SRGB8_ALPHA8_ASTC_12x10_KHR:o.COMPRESSED_RGBA_ASTC_12x10_KHR;if(a===RGBA_ASTC_12x12_Format)return l===sRGBEncoding?o.COMPRESSED_SRGB8_ALPHA8_ASTC_12x12_KHR:o.COMPRESSED_RGBA_ASTC_12x12_KHR}else return null;if(a===RGBA_BPTC_Format)if(o=e.get("EXT_texture_compression_bptc"),o!==null){if(a===RGBA_BPTC_Format)return l===sRGBEncoding?o.COMPRESSED_SRGB_ALPHA_BPTC_UNORM_EXT:o.COMPRESSED_RGBA_BPTC_UNORM_EXT}else return null;if(a===RED_RGTC1_Format||a===SIGNED_RED_RGTC1_Format||a===RED_GREEN_RGTC2_Format||a===SIGNED_RED_GREEN_RGTC2_Format)if(o=e.get("EXT_texture_compression_rgtc"),o!==null){if(a===RGBA_BPTC_Format)return o.COMPRESSED_RED_RGTC1_EXT;if(a===SIGNED_RED_RGTC1_Format)return o.COMPRESSED_SIGNED_RED_RGTC1_EXT;if(a===RED_GREEN_RGTC2_Format)return o.COMPRESSED_RED_GREEN_RGTC2_EXT;if(a===SIGNED_RED_GREEN_RGTC2_Format)return o.COMPRESSED_SIGNED_RED_GREEN_RGTC2_EXT}else return null;return a===UnsignedInt248Type?i?34042:(o=e.get("WEBGL_depth_texture"),o!==null?o.UNSIGNED_INT_24_8_WEBGL:null):s[a]!==void 0?s[a]:null}return{convert:r}}class ArrayCamera extends PerspectiveCamera{constructor(e=[]){super(),this.isArrayCamera=!0,this.cameras=e}}class Group extends Object3D{constructor(){super(),this.isGroup=!0,this.type="Group"}}const _moveEvent={type:"move"};class WebXRController{constructor(){this._targetRay=null,this._grip=null,this._hand=null}getHandSpace(){return this._hand===null&&(this._hand=new Group,this._hand.matrixAutoUpdate=!1,this._hand.visible=!1,this._hand.joints={},this._hand.inputState={pinching:!1}),this._hand}getTargetRaySpace(){return this._targetRay===null&&(this._targetRay=new Group,this._targetRay.matrixAutoUpdate=!1,this._targetRay.visible=!1,this._targetRay.hasLinearVelocity=!1,this._targetRay.linearVelocity=new Vector3,this._targetRay.hasAngularVelocity=!1,this._targetRay.angularVelocity=new Vector3),this._targetRay}getGripSpace(){return this._grip===null&&(this._grip=new Group,this._grip.matrixAutoUpdate=!1,this._grip.visible=!1,this._grip.hasLinearVelocity=!1,this._grip.linearVelocity=new Vector3,this._grip.hasAngularVelocity=!1,this._grip.angularVelocity=new Vector3),this._grip}dispatchEvent(e){return this._targetRay!==null&&this._targetRay.dispatchEvent(e),this._grip!==null&&this._grip.dispatchEvent(e),this._hand!==null&&this._hand.dispatchEvent(e),this}connect(e){if(e&&e.hand){const n=this._hand;if(n)for(const i of e.hand.values())this._getHandJoint(n,i)}return this.dispatchEvent({type:"connected",data:e}),this}disconnect(e){return this.dispatchEvent({type:"disconnected",data:e}),this._targetRay!==null&&(this._targetRay.visible=!1),this._grip!==null&&(this._grip.visible=!1),this._hand!==null&&(this._hand.visible=!1),this}update(e,n,i){let r=null,a=null,l=null;const o=this._targetRay,c=this._grip,u=this._hand;if(e&&n.session.visibilityState!=="visible-blurred"){if(u&&e.hand){l=!0;for(const m of e.hand.values()){const p=n.getJointPose(m,i),y=this._getHandJoint(u,m);p!==null&&(y.matrix.fromArray(p.transform.matrix),y.matrix.decompose(y.position,y.rotation,y.scale),y.jointRadius=p.radius),y.visible=p!==null}const d=u.joints["index-finger-tip"],f=u.joints["thumb-tip"],h=d.position.distanceTo(f.position),_=.02,v=.005;u.inputState.pinching&&h>_+v?(u.inputState.pinching=!1,this.dispatchEvent({type:"pinchend",handedness:e.handedness,target:this})):!u.inputState.pinching&&h<=_-v&&(u.inputState.pinching=!0,this.dispatchEvent({type:"pinchstart",handedness:e.handedness,target:this}))}else c!==null&&e.gripSpace&&(a=n.getPose(e.gripSpace,i),a!==null&&(c.matrix.fromArray(a.transform.matrix),c.matrix.decompose(c.position,c.rotation,c.scale),a.linearVelocity?(c.hasLinearVelocity=!0,c.linearVelocity.copy(a.linearVelocity)):c.hasLinearVelocity=!1,a.angularVelocity?(c.hasAngularVelocity=!0,c.angularVelocity.copy(a.angularVelocity)):c.hasAngularVelocity=!1));o!==null&&(r=n.getPose(e.targetRaySpace,i),r===null&&a!==null&&(r=a),r!==null&&(o.matrix.fromArray(r.transform.matrix),o.matrix.decompose(o.position,o.rotation,o.scale),r.linearVelocity?(o.hasLinearVelocity=!0,o.linearVelocity.copy(r.linearVelocity)):o.hasLinearVelocity=!1,r.angularVelocity?(o.hasAngularVelocity=!0,o.angularVelocity.copy(r.angularVelocity)):o.hasAngularVelocity=!1,this.dispatchEvent(_moveEvent)))}return o!==null&&(o.visible=r!==null),c!==null&&(c.visible=a!==null),u!==null&&(u.visible=l!==null),this}_getHandJoint(e,n){if(e.joints[n.jointName]===void 0){const i=new Group;i.matrixAutoUpdate=!1,i.visible=!1,e.joints[n.jointName]=i,e.add(i)}return e.joints[n.jointName]}}class DepthTexture extends Texture{constructor(e,n,i,r,a,l,o,c,u,d){if(d=d!==void 0?d:DepthFormat,d!==DepthFormat&&d!==DepthStencilFormat)throw new Error("DepthTexture format must be either THREE.DepthFormat or THREE.DepthStencilFormat");i===void 0&&d===DepthFormat&&(i=UnsignedIntType),i===void 0&&d===DepthStencilFormat&&(i=UnsignedInt248Type),super(null,r,a,l,o,c,d,i,u),this.isDepthTexture=!0,this.image={width:e,height:n},this.magFilter=o!==void 0?o:NearestFilter,this.minFilter=c!==void 0?c:NearestFilter,this.flipY=!1,this.generateMipmaps=!1}}class WebXRManager extends EventDispatcher{constructor(e,n){super();const i=this;let r=null,a=1,l=null,o="local-floor",c=1,u=null,d=null,f=null,h=null,_=null,v=null;const m=n.getContextAttributes();let p=null,y=null;const C=[],w=[],A=new Set,M=new Map,P=new PerspectiveCamera;P.layers.enable(1),P.viewport=new Vector4;const N=new PerspectiveCamera;N.layers.enable(2),N.viewport=new Vector4;const b=[P,N],L=new ArrayCamera;L.layers.enable(1),L.layers.enable(2);let U=null,Y=null;this.cameraAutoUpdate=!0,this.enabled=!1,this.isPresenting=!1,this.getController=function(G){let j=C[G];return j===void 0&&(j=new WebXRController,C[G]=j),j.getTargetRaySpace()},this.getControllerGrip=function(G){let j=C[G];return j===void 0&&(j=new WebXRController,C[G]=j),j.getGripSpace()},this.getHand=function(G){let j=C[G];return j===void 0&&(j=new WebXRController,C[G]=j),j.getHandSpace()};function Q(G){const j=w.indexOf(G.inputSource);if(j===-1)return;const re=C[j];re!==void 0&&re.dispatchEvent({type:G.type,data:G.inputSource})}function O(){r.removeEventListener("select",Q),r.removeEventListener("selectstart",Q),r.removeEventListener("selectend",Q),r.removeEventListener("squeeze",Q),r.removeEventListener("squeezestart",Q),r.removeEventListener("squeezeend",Q),r.removeEventListener("end",O),r.removeEventListener("inputsourceschange",F);for(let G=0;G<C.length;G++){const j=w[G];j!==null&&(w[G]=null,C[G].disconnect(j))}U=null,Y=null,e.setRenderTarget(p),_=null,h=null,f=null,r=null,y=null,he.stop(),i.isPresenting=!1,i.dispatchEvent({type:"sessionend"})}this.setFramebufferScaleFactor=function(G){a=G,i.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change framebuffer scale while presenting.")},this.setReferenceSpaceType=function(G){o=G,i.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change reference space type while presenting.")},this.getReferenceSpace=function(){return u||l},this.setReferenceSpace=function(G){u=G},this.getBaseLayer=function(){return h!==null?h:_},this.getBinding=function(){return f},this.getFrame=function(){return v},this.getSession=function(){return r},this.setSession=async function(G){if(r=G,r!==null){if(p=e.getRenderTarget(),r.addEventListener("select",Q),r.addEventListener("selectstart",Q),r.addEventListener("selectend",Q),r.addEventListener("squeeze",Q),r.addEventListener("squeezestart",Q),r.addEventListener("squeezeend",Q),r.addEventListener("end",O),r.addEventListener("inputsourceschange",F),m.xrCompatible!==!0&&await n.makeXRCompatible(),r.renderState.layers===void 0||e.capabilities.isWebGL2===!1){const j={antialias:r.renderState.layers===void 0?m.antialias:!0,alpha:m.alpha,depth:m.depth,stencil:m.stencil,framebufferScaleFactor:a};_=new XRWebGLLayer(r,n,j),r.updateRenderState({baseLayer:_}),y=new WebGLRenderTarget(_.framebufferWidth,_.framebufferHeight,{format:RGBAFormat,type:UnsignedByteType,encoding:e.outputEncoding,stencilBuffer:m.stencil})}else{let j=null,re=null,se=null;m.depth&&(se=m.stencil?35056:33190,j=m.stencil?DepthStencilFormat:DepthFormat,re=m.stencil?UnsignedInt248Type:UnsignedIntType);const V={colorFormat:32856,depthFormat:se,scaleFactor:a};f=new XRWebGLBinding(r,n),h=f.createProjectionLayer(V),r.updateRenderState({layers:[h]}),y=new WebGLRenderTarget(h.textureWidth,h.textureHeight,{format:RGBAFormat,type:UnsignedByteType,depthTexture:new DepthTexture(h.textureWidth,h.textureHeight,re,void 0,void 0,void 0,void 0,void 0,void 0,j),stencilBuffer:m.stencil,encoding:e.outputEncoding,samples:m.antialias?4:0});const ye=e.properties.get(y);ye.__ignoreDepthValues=h.ignoreDepthValues}y.isXRRenderTarget=!0,this.setFoveation(c),u=null,l=await r.requestReferenceSpace(o),he.setContext(r),he.start(),i.isPresenting=!0,i.dispatchEvent({type:"sessionstart"})}};function F(G){for(let j=0;j<G.removed.length;j++){const re=G.removed[j],se=w.indexOf(re);se>=0&&(w[se]=null,C[se].disconnect(re))}for(let j=0;j<G.added.length;j++){const re=G.added[j];let se=w.indexOf(re);if(se===-1){for(let ye=0;ye<C.length;ye++)if(ye>=w.length){w.push(re),se=ye;break}else if(w[ye]===null){w[ye]=re,se=ye;break}if(se===-1)break}const V=C[se];V&&V.connect(re)}}const q=new Vector3,Z=new Vector3;function J(G,j,re){q.setFromMatrixPosition(j.matrixWorld),Z.setFromMatrixPosition(re.matrixWorld);const se=q.distanceTo(Z),V=j.projectionMatrix.elements,ye=re.projectionMatrix.elements,_e=V[14]/(V[10]-1),pe=V[14]/(V[10]+1),ce=(V[9]+1)/V[5],Fe=(V[9]-1)/V[5],Me=(V[8]-1)/V[0],ve=(ye[8]+1)/ye[0],ze=_e*Me,We=_e*ve,Be=se/(-Me+ve),Xe=Be*-Me;j.matrixWorld.decompose(G.position,G.quaternion,G.scale),G.translateX(Xe),G.translateZ(Be),G.matrixWorld.compose(G.position,G.quaternion,G.scale),G.matrixWorldInverse.copy(G.matrixWorld).invert();const Oe=_e+Be,De=pe+Be,Ke=ze-Xe,je=We+(se-Xe),E=ce*pe/De*Oe,g=Fe*pe/De*Oe;G.projectionMatrix.makePerspective(Ke,je,E,g,Oe,De)}function X(G,j){j===null?G.matrixWorld.copy(G.matrix):G.matrixWorld.multiplyMatrices(j.matrixWorld,G.matrix),G.matrixWorldInverse.copy(G.matrixWorld).invert()}this.updateCamera=function(G){if(r===null)return;L.near=N.near=P.near=G.near,L.far=N.far=P.far=G.far,(U!==L.near||Y!==L.far)&&(r.updateRenderState({depthNear:L.near,depthFar:L.far}),U=L.near,Y=L.far);const j=G.parent,re=L.cameras;X(L,j);for(let V=0;V<re.length;V++)X(re[V],j);L.matrixWorld.decompose(L.position,L.quaternion,L.scale),G.matrix.copy(L.matrix),G.matrix.decompose(G.position,G.quaternion,G.scale);const se=G.children;for(let V=0,ye=se.length;V<ye;V++)se[V].updateMatrixWorld(!0);re.length===2?J(L,P,N):L.projectionMatrix.copy(P.projectionMatrix)},this.getCamera=function(){return L},this.getFoveation=function(){if(!(h===null&&_===null))return c},this.setFoveation=function(G){c=G,h!==null&&(h.fixedFoveation=G),_!==null&&_.fixedFoveation!==void 0&&(_.fixedFoveation=G)},this.getPlanes=function(){return A};let ne=null;function te(G,j){if(d=j.getViewerPose(u||l),v=j,d!==null){const re=d.views;_!==null&&(e.setRenderTargetFramebuffer(y,_.framebuffer),e.setRenderTarget(y));let se=!1;re.length!==L.cameras.length&&(L.cameras.length=0,se=!0);for(let V=0;V<re.length;V++){const ye=re[V];let _e=null;if(_!==null)_e=_.getViewport(ye);else{const ce=f.getViewSubImage(h,ye);_e=ce.viewport,V===0&&(e.setRenderTargetTextures(y,ce.colorTexture,h.ignoreDepthValues?void 0:ce.depthStencilTexture),e.setRenderTarget(y))}let pe=b[V];pe===void 0&&(pe=new PerspectiveCamera,pe.layers.enable(V),pe.viewport=new Vector4,b[V]=pe),pe.matrix.fromArray(ye.transform.matrix),pe.projectionMatrix.fromArray(ye.projectionMatrix),pe.viewport.set(_e.x,_e.y,_e.width,_e.height),V===0&&L.matrix.copy(pe.matrix),se===!0&&L.cameras.push(pe)}}for(let re=0;re<C.length;re++){const se=w[re],V=C[re];se!==null&&V!==void 0&&V.update(se,j,u||l)}if(ne&&ne(G,j),j.detectedPlanes){i.dispatchEvent({type:"planesdetected",data:j.detectedPlanes});let re=null;for(const se of A)j.detectedPlanes.has(se)||(re===null&&(re=[]),re.push(se));if(re!==null)for(const se of re)A.delete(se),M.delete(se),i.dispatchEvent({type:"planeremoved",data:se});for(const se of j.detectedPlanes)if(!A.has(se))A.add(se),M.set(se,j.lastChangedTime),i.dispatchEvent({type:"planeadded",data:se});else{const V=M.get(se);se.lastChangedTime>V&&(M.set(se,se.lastChangedTime),i.dispatchEvent({type:"planechanged",data:se}))}}v=null}const he=new WebGLAnimation;he.setAnimationLoop(te),this.setAnimationLoop=function(G){ne=G},this.dispose=function(){}}}function WebGLMaterials(s,e){function n(m,p){p.color.getRGB(m.fogColor.value,getUnlitUniformColorSpace(s)),p.isFog?(m.fogNear.value=p.near,m.fogFar.value=p.far):p.isFogExp2&&(m.fogDensity.value=p.density)}function i(m,p,y,C,w){p.isMeshBasicMaterial||p.isMeshLambertMaterial?r(m,p):p.isMeshToonMaterial?(r(m,p),d(m,p)):p.isMeshPhongMaterial?(r(m,p),u(m,p)):p.isMeshStandardMaterial?(r(m,p),f(m,p),p.isMeshPhysicalMaterial&&h(m,p,w)):p.isMeshMatcapMaterial?(r(m,p),_(m,p)):p.isMeshDepthMaterial?r(m,p):p.isMeshDistanceMaterial?(r(m,p),v(m,p)):p.isMeshNormalMaterial?r(m,p):p.isLineBasicMaterial?(a(m,p),p.isLineDashedMaterial&&l(m,p)):p.isPointsMaterial?o(m,p,y,C):p.isSpriteMaterial?c(m,p):p.isShadowMaterial?(m.color.value.copy(p.color),m.opacity.value=p.opacity):p.isShaderMaterial&&(p.uniformsNeedUpdate=!1)}function r(m,p){m.opacity.value=p.opacity,p.color&&m.diffuse.value.copy(p.color),p.emissive&&m.emissive.value.copy(p.emissive).multiplyScalar(p.emissiveIntensity),p.map&&(m.map.value=p.map),p.alphaMap&&(m.alphaMap.value=p.alphaMap),p.bumpMap&&(m.bumpMap.value=p.bumpMap,m.bumpScale.value=p.bumpScale,p.side===BackSide&&(m.bumpScale.value*=-1)),p.displacementMap&&(m.displacementMap.value=p.displacementMap,m.displacementScale.value=p.displacementScale,m.displacementBias.value=p.displacementBias),p.emissiveMap&&(m.emissiveMap.value=p.emissiveMap),p.normalMap&&(m.normalMap.value=p.normalMap,m.normalScale.value.copy(p.normalScale),p.side===BackSide&&m.normalScale.value.negate()),p.specularMap&&(m.specularMap.value=p.specularMap),p.alphaTest>0&&(m.alphaTest.value=p.alphaTest);const y=e.get(p).envMap;if(y&&(m.envMap.value=y,m.flipEnvMap.value=y.isCubeTexture&&y.isRenderTargetTexture===!1?-1:1,m.reflectivity.value=p.reflectivity,m.ior.value=p.ior,m.refractionRatio.value=p.refractionRatio),p.lightMap){m.lightMap.value=p.lightMap;const A=s.physicallyCorrectLights!==!0?Math.PI:1;m.lightMapIntensity.value=p.lightMapIntensity*A}p.aoMap&&(m.aoMap.value=p.aoMap,m.aoMapIntensity.value=p.aoMapIntensity);let C;p.map?C=p.map:p.specularMap?C=p.specularMap:p.displacementMap?C=p.displacementMap:p.normalMap?C=p.normalMap:p.bumpMap?C=p.bumpMap:p.roughnessMap?C=p.roughnessMap:p.metalnessMap?C=p.metalnessMap:p.alphaMap?C=p.alphaMap:p.emissiveMap?C=p.emissiveMap:p.clearcoatMap?C=p.clearcoatMap:p.clearcoatNormalMap?C=p.clearcoatNormalMap:p.clearcoatRoughnessMap?C=p.clearcoatRoughnessMap:p.iridescenceMap?C=p.iridescenceMap:p.iridescenceThicknessMap?C=p.iridescenceThicknessMap:p.specularIntensityMap?C=p.specularIntensityMap:p.specularColorMap?C=p.specularColorMap:p.transmissionMap?C=p.transmissionMap:p.thicknessMap?C=p.thicknessMap:p.sheenColorMap?C=p.sheenColorMap:p.sheenRoughnessMap&&(C=p.sheenRoughnessMap),C!==void 0&&(C.isWebGLRenderTarget&&(C=C.texture),C.matrixAutoUpdate===!0&&C.updateMatrix(),m.uvTransform.value.copy(C.matrix));let w;p.aoMap?w=p.aoMap:p.lightMap&&(w=p.lightMap),w!==void 0&&(w.isWebGLRenderTarget&&(w=w.texture),w.matrixAutoUpdate===!0&&w.updateMatrix(),m.uv2Transform.value.copy(w.matrix))}function a(m,p){m.diffuse.value.copy(p.color),m.opacity.value=p.opacity}function l(m,p){m.dashSize.value=p.dashSize,m.totalSize.value=p.dashSize+p.gapSize,m.scale.value=p.scale}function o(m,p,y,C){m.diffuse.value.copy(p.color),m.opacity.value=p.opacity,m.size.value=p.size*y,m.scale.value=C*.5,p.map&&(m.map.value=p.map),p.alphaMap&&(m.alphaMap.value=p.alphaMap),p.alphaTest>0&&(m.alphaTest.value=p.alphaTest);let w;p.map?w=p.map:p.alphaMap&&(w=p.alphaMap),w!==void 0&&(w.matrixAutoUpdate===!0&&w.updateMatrix(),m.uvTransform.value.copy(w.matrix))}function c(m,p){m.diffuse.value.copy(p.color),m.opacity.value=p.opacity,m.rotation.value=p.rotation,p.map&&(m.map.value=p.map),p.alphaMap&&(m.alphaMap.value=p.alphaMap),p.alphaTest>0&&(m.alphaTest.value=p.alphaTest);let y;p.map?y=p.map:p.alphaMap&&(y=p.alphaMap),y!==void 0&&(y.matrixAutoUpdate===!0&&y.updateMatrix(),m.uvTransform.value.copy(y.matrix))}function u(m,p){m.specular.value.copy(p.specular),m.shininess.value=Math.max(p.shininess,1e-4)}function d(m,p){p.gradientMap&&(m.gradientMap.value=p.gradientMap)}function f(m,p){m.roughness.value=p.roughness,m.metalness.value=p.metalness,p.roughnessMap&&(m.roughnessMap.value=p.roughnessMap),p.metalnessMap&&(m.metalnessMap.value=p.metalnessMap),e.get(p).envMap&&(m.envMapIntensity.value=p.envMapIntensity)}function h(m,p,y){m.ior.value=p.ior,p.sheen>0&&(m.sheenColor.value.copy(p.sheenColor).multiplyScalar(p.sheen),m.sheenRoughness.value=p.sheenRoughness,p.sheenColorMap&&(m.sheenColorMap.value=p.sheenColorMap),p.sheenRoughnessMap&&(m.sheenRoughnessMap.value=p.sheenRoughnessMap)),p.clearcoat>0&&(m.clearcoat.value=p.clearcoat,m.clearcoatRoughness.value=p.clearcoatRoughness,p.clearcoatMap&&(m.clearcoatMap.value=p.clearcoatMap),p.clearcoatRoughnessMap&&(m.clearcoatRoughnessMap.value=p.clearcoatRoughnessMap),p.clearcoatNormalMap&&(m.clearcoatNormalScale.value.copy(p.clearcoatNormalScale),m.clearcoatNormalMap.value=p.clearcoatNormalMap,p.side===BackSide&&m.clearcoatNormalScale.value.negate())),p.iridescence>0&&(m.iridescence.value=p.iridescence,m.iridescenceIOR.value=p.iridescenceIOR,m.iridescenceThicknessMinimum.value=p.iridescenceThicknessRange[0],m.iridescenceThicknessMaximum.value=p.iridescenceThicknessRange[1],p.iridescenceMap&&(m.iridescenceMap.value=p.iridescenceMap),p.iridescenceThicknessMap&&(m.iridescenceThicknessMap.value=p.iridescenceThicknessMap)),p.transmission>0&&(m.transmission.value=p.transmission,m.transmissionSamplerMap.value=y.texture,m.transmissionSamplerSize.value.set(y.width,y.height),p.transmissionMap&&(m.transmissionMap.value=p.transmissionMap),m.thickness.value=p.thickness,p.thicknessMap&&(m.thicknessMap.value=p.thicknessMap),m.attenuationDistance.value=p.attenuationDistance,m.attenuationColor.value.copy(p.attenuationColor)),m.specularIntensity.value=p.specularIntensity,m.specularColor.value.copy(p.specularColor),p.specularIntensityMap&&(m.specularIntensityMap.value=p.specularIntensityMap),p.specularColorMap&&(m.specularColorMap.value=p.specularColorMap)}function _(m,p){p.matcap&&(m.matcap.value=p.matcap)}function v(m,p){m.referencePosition.value.copy(p.referencePosition),m.nearDistance.value=p.nearDistance,m.farDistance.value=p.farDistance}return{refreshFogUniforms:n,refreshMaterialUniforms:i}}function WebGLUniformsGroups(s,e,n,i){let r={},a={},l=[];const o=n.isWebGL2?s.getParameter(35375):0;function c(C,w){const A=w.program;i.uniformBlockBinding(C,A)}function u(C,w){let A=r[C.id];A===void 0&&(v(C),A=d(C),r[C.id]=A,C.addEventListener("dispose",p));const M=w.program;i.updateUBOMapping(C,M);const P=e.render.frame;a[C.id]!==P&&(h(C),a[C.id]=P)}function d(C){const w=f();C.__bindingPointIndex=w;const A=s.createBuffer(),M=C.__size,P=C.usage;return s.bindBuffer(35345,A),s.bufferData(35345,M,P),s.bindBuffer(35345,null),s.bindBufferBase(35345,w,A),A}function f(){for(let C=0;C<o;C++)if(l.indexOf(C)===-1)return l.push(C),C;return console.error("THREE.WebGLRenderer: Maximum number of simultaneously usable uniforms groups reached."),0}function h(C){const w=r[C.id],A=C.uniforms,M=C.__cache;s.bindBuffer(35345,w);for(let P=0,N=A.length;P<N;P++){const b=A[P];if(_(b,P,M)===!0){const L=b.__offset,U=Array.isArray(b.value)?b.value:[b.value];let Y=0;for(let Q=0;Q<U.length;Q++){const O=U[Q],F=m(O);typeof O=="number"?(b.__data[0]=O,s.bufferSubData(35345,L+Y,b.__data)):O.isMatrix3?(b.__data[0]=O.elements[0],b.__data[1]=O.elements[1],b.__data[2]=O.elements[2],b.__data[3]=O.elements[0],b.__data[4]=O.elements[3],b.__data[5]=O.elements[4],b.__data[6]=O.elements[5],b.__data[7]=O.elements[0],b.__data[8]=O.elements[6],b.__data[9]=O.elements[7],b.__data[10]=O.elements[8],b.__data[11]=O.elements[0]):(O.toArray(b.__data,Y),Y+=F.storage/Float32Array.BYTES_PER_ELEMENT)}s.bufferSubData(35345,L,b.__data)}}s.bindBuffer(35345,null)}function _(C,w,A){const M=C.value;if(A[w]===void 0){if(typeof M=="number")A[w]=M;else{const P=Array.isArray(M)?M:[M],N=[];for(let b=0;b<P.length;b++)N.push(P[b].clone());A[w]=N}return!0}else if(typeof M=="number"){if(A[w]!==M)return A[w]=M,!0}else{const P=Array.isArray(A[w])?A[w]:[A[w]],N=Array.isArray(M)?M:[M];for(let b=0;b<P.length;b++){const L=P[b];if(L.equals(N[b])===!1)return L.copy(N[b]),!0}}return!1}function v(C){const w=C.uniforms;let A=0;const M=16;let P=0;for(let N=0,b=w.length;N<b;N++){const L=w[N],U={boundary:0,storage:0},Y=Array.isArray(L.value)?L.value:[L.value];for(let Q=0,O=Y.length;Q<O;Q++){const F=Y[Q],q=m(F);U.boundary+=q.boundary,U.storage+=q.storage}if(L.__data=new Float32Array(U.storage/Float32Array.BYTES_PER_ELEMENT),L.__offset=A,N>0){P=A%M;const Q=M-P;P!==0&&Q-U.boundary<0&&(A+=M-P,L.__offset=A)}A+=U.storage}return P=A%M,P>0&&(A+=M-P),C.__size=A,C.__cache={},this}function m(C){const w={boundary:0,storage:0};return typeof C=="number"?(w.boundary=4,w.storage=4):C.isVector2?(w.boundary=8,w.storage=8):C.isVector3||C.isColor?(w.boundary=16,w.storage=12):C.isVector4?(w.boundary=16,w.storage=16):C.isMatrix3?(w.boundary=48,w.storage=48):C.isMatrix4?(w.boundary=64,w.storage=64):C.isTexture?console.warn("THREE.WebGLRenderer: Texture samplers can not be part of an uniforms group."):console.warn("THREE.WebGLRenderer: Unsupported uniform value type.",C),w}function p(C){const w=C.target;w.removeEventListener("dispose",p);const A=l.indexOf(w.__bindingPointIndex);l.splice(A,1),s.deleteBuffer(r[w.id]),delete r[w.id],delete a[w.id]}function y(){for(const C in r)s.deleteBuffer(r[C]);l=[],r={},a={}}return{bind:c,update:u,dispose:y}}function createCanvasElement(){const s=createElementNS("canvas");return s.style.display="block",s}function WebGLRenderer(s={}){this.isWebGLRenderer=!0;const e=s.canvas!==void 0?s.canvas:createCanvasElement(),n=s.context!==void 0?s.context:null,i=s.depth!==void 0?s.depth:!0,r=s.stencil!==void 0?s.stencil:!0,a=s.antialias!==void 0?s.antialias:!1,l=s.premultipliedAlpha!==void 0?s.premultipliedAlpha:!0,o=s.preserveDrawingBuffer!==void 0?s.preserveDrawingBuffer:!1,c=s.powerPreference!==void 0?s.powerPreference:"default",u=s.failIfMajorPerformanceCaveat!==void 0?s.failIfMajorPerformanceCaveat:!1;let d;n!==null?d=n.getContextAttributes().alpha:d=s.alpha!==void 0?s.alpha:!1;let f=null,h=null;const _=[],v=[];this.domElement=e,this.debug={checkShaderErrors:!0},this.autoClear=!0,this.autoClearColor=!0,this.autoClearDepth=!0,this.autoClearStencil=!0,this.sortObjects=!0,this.clippingPlanes=[],this.localClippingEnabled=!1,this.outputEncoding=LinearEncoding,this.physicallyCorrectLights=!1,this.toneMapping=NoToneMapping,this.toneMappingExposure=1;const m=this;let p=!1,y=0,C=0,w=null,A=-1,M=null;const P=new Vector4,N=new Vector4;let b=null,L=e.width,U=e.height,Y=1,Q=null,O=null;const F=new Vector4(0,0,L,U),q=new Vector4(0,0,L,U);let Z=!1;const J=new Frustum;let X=!1,ne=!1,te=null;const he=new Matrix4,G=new Vector2,j=new Vector3,re={background:null,fog:null,environment:null,overrideMaterial:null,isScene:!0};function se(){return w===null?Y:1}let V=n;function ye(S,B){for(let W=0;W<S.length;W++){const I=S[W],$=e.getContext(I,B);if($!==null)return $}return null}try{const S={alpha:!0,depth:i,stencil:r,antialias:a,premultipliedAlpha:l,preserveDrawingBuffer:o,powerPreference:c,failIfMajorPerformanceCaveat:u};if("setAttribute"in e&&e.setAttribute("data-engine",`three.js r${REVISION}`),e.addEventListener("webglcontextlost",me,!1),e.addEventListener("webglcontextrestored",fe,!1),e.addEventListener("webglcontextcreationerror",Ce,!1),V===null){const B=["webgl2","webgl","experimental-webgl"];if(m.isWebGL1Renderer===!0&&B.shift(),V=ye(B,S),V===null)throw ye(B)?new Error("Error creating WebGL context with your selected attributes."):new Error("Error creating WebGL context.")}V.getShaderPrecisionFormat===void 0&&(V.getShaderPrecisionFormat=function(){return{rangeMin:1,rangeMax:1,precision:1}})}catch(S){throw console.error("THREE.WebGLRenderer: "+S.message),S}let _e,pe,ce,Fe,Me,ve,ze,We,Be,Xe,Oe,De,Ke,je,E,g,k,ee,ie,ae,be,T,D,le;function de(){_e=new WebGLExtensions(V),pe=new WebGLCapabilities(V,_e,s),_e.init(pe),T=new WebGLUtils(V,_e,pe),ce=new WebGLState(V,_e,pe),Fe=new WebGLInfo,Me=new WebGLProperties,ve=new WebGLTextures(V,_e,ce,Me,pe,T,Fe),ze=new WebGLCubeMaps(m),We=new WebGLCubeUVMaps(m),Be=new WebGLAttributes(V,pe),D=new WebGLBindingStates(V,_e,Be,pe),Xe=new WebGLGeometries(V,Be,Fe,D),Oe=new WebGLObjects(V,Xe,Be,Fe),ie=new WebGLMorphtargets(V,pe,ve),g=new WebGLClipping(Me),De=new WebGLPrograms(m,ze,We,_e,pe,D,g),Ke=new WebGLMaterials(m,Me),je=new WebGLRenderLists,E=new WebGLRenderStates(_e,pe),ee=new WebGLBackground(m,ze,We,ce,Oe,d,l),k=new WebGLShadowMap(m,Oe,pe),le=new WebGLUniformsGroups(V,Fe,pe,ce),ae=new WebGLBufferRenderer(V,_e,Fe,pe),be=new WebGLIndexedBufferRenderer(V,_e,Fe,pe),Fe.programs=De.programs,m.capabilities=pe,m.extensions=_e,m.properties=Me,m.renderLists=je,m.shadowMap=k,m.state=ce,m.info=Fe}de();const oe=new WebXRManager(m,V);this.xr=oe,this.getContext=function(){return V},this.getContextAttributes=function(){return V.getContextAttributes()},this.forceContextLoss=function(){const S=_e.get("WEBGL_lose_context");S&&S.loseContext()},this.forceContextRestore=function(){const S=_e.get("WEBGL_lose_context");S&&S.restoreContext()},this.getPixelRatio=function(){return Y},this.setPixelRatio=function(S){S!==void 0&&(Y=S,this.setSize(L,U,!1))},this.getSize=function(S){return S.set(L,U)},this.setSize=function(S,B,W){if(oe.isPresenting){console.warn("THREE.WebGLRenderer: Can't change size while VR device is presenting.");return}L=S,U=B,e.width=Math.floor(S*Y),e.height=Math.floor(B*Y),W!==!1&&(e.style.width=S+"px",e.style.height=B+"px"),this.setViewport(0,0,S,B)},this.getDrawingBufferSize=function(S){return S.set(L*Y,U*Y).floor()},this.setDrawingBufferSize=function(S,B,W){L=S,U=B,Y=W,e.width=Math.floor(S*W),e.height=Math.floor(B*W),this.setViewport(0,0,S,B)},this.getCurrentViewport=function(S){return S.copy(P)},this.getViewport=function(S){return S.copy(F)},this.setViewport=function(S,B,W,I){S.isVector4?F.set(S.x,S.y,S.z,S.w):F.set(S,B,W,I),ce.viewport(P.copy(F).multiplyScalar(Y).floor())},this.getScissor=function(S){return S.copy(q)},this.setScissor=function(S,B,W,I){S.isVector4?q.set(S.x,S.y,S.z,S.w):q.set(S,B,W,I),ce.scissor(N.copy(q).multiplyScalar(Y).floor())},this.getScissorTest=function(){return Z},this.setScissorTest=function(S){ce.setScissorTest(Z=S)},this.setOpaqueSort=function(S){Q=S},this.setTransparentSort=function(S){O=S},this.getClearColor=function(S){return S.copy(ee.getClearColor())},this.setClearColor=function(){ee.setClearColor.apply(ee,arguments)},this.getClearAlpha=function(){return ee.getClearAlpha()},this.setClearAlpha=function(){ee.setClearAlpha.apply(ee,arguments)},this.clear=function(S=!0,B=!0,W=!0){let I=0;S&&(I|=16384),B&&(I|=256),W&&(I|=1024),V.clear(I)},this.clearColor=function(){this.clear(!0,!1,!1)},this.clearDepth=function(){this.clear(!1,!0,!1)},this.clearStencil=function(){this.clear(!1,!1,!0)},this.dispose=function(){e.removeEventListener("webglcontextlost",me,!1),e.removeEventListener("webglcontextrestored",fe,!1),e.removeEventListener("webglcontextcreationerror",Ce,!1),je.dispose(),E.dispose(),Me.dispose(),ze.dispose(),We.dispose(),Oe.dispose(),D.dispose(),le.dispose(),De.dispose(),oe.dispose(),oe.removeEventListener("sessionstart",ue),oe.removeEventListener("sessionend",ge),te&&(te.dispose(),te=null),Ie.stop()};function me(S){S.preventDefault(),console.log("THREE.WebGLRenderer: Context Lost."),p=!0}function fe(){console.log("THREE.WebGLRenderer: Context Restored."),p=!1;const S=Fe.autoReset,B=k.enabled,W=k.autoUpdate,I=k.needsUpdate,$=k.type;de(),Fe.autoReset=S,k.enabled=B,k.autoUpdate=W,k.needsUpdate=I,k.type=$}function Ce(S){console.error("THREE.WebGLRenderer: A WebGL context could not be created. Reason: ",S.statusMessage)}function Te(S){const B=S.target;B.removeEventListener("dispose",Te),Ue(B)}function Ue(S){R(S),Me.remove(S)}function R(S){const B=Me.get(S).programs;B!==void 0&&(B.forEach(function(W){De.releaseProgram(W)}),S.isShaderMaterial&&De.releaseShaderCache(S))}this.renderBufferDirect=function(S,B,W,I,$,xe){B===null&&(B=re);const Se=$.isMesh&&$.matrixWorld.determinant()<0,we=ft(S,B,W,I,$);ce.setMaterial(I,Se);let Ee=W.index,Pe=1;I.wireframe===!0&&(Ee=Xe.getWireframeAttribute(W),Pe=2);const Ae=W.drawRange,Le=W.attributes.position;let Ve=Ae.start*Pe,Ye=(Ae.start+Ae.count)*Pe;xe!==null&&(Ve=Math.max(Ve,xe.start*Pe),Ye=Math.min(Ye,(xe.start+xe.count)*Pe)),Ee!==null?(Ve=Math.max(Ve,0),Ye=Math.min(Ye,Ee.count)):Le!=null&&(Ve=Math.max(Ve,0),Ye=Math.min(Ye,Le.count));const et=Ye-Ve;if(et<0||et===1/0)return;D.setup($,I,we,W,Ee);let nt,Ge=ae;if(Ee!==null&&(nt=Be.get(Ee),Ge=be,Ge.setIndex(nt)),$.isMesh)I.wireframe===!0?(ce.setLineWidth(I.wireframeLinewidth*se()),Ge.setMode(1)):Ge.setMode(4);else if($.isLine){let Re=I.linewidth;Re===void 0&&(Re=1),ce.setLineWidth(Re*se()),$.isLineSegments?Ge.setMode(1):$.isLineLoop?Ge.setMode(2):Ge.setMode(3)}else $.isPoints?Ge.setMode(0):$.isSprite&&Ge.setMode(4);if($.isInstancedMesh)Ge.renderInstances(Ve,et,$.count);else if(W.isInstancedBufferGeometry){const Re=W._maxInstanceCount!==void 0?W._maxInstanceCount:1/0,at=Math.min(W.instanceCount,Re);Ge.renderInstances(Ve,et,at)}else Ge.render(Ve,et)},this.compile=function(S,B){function W(I,$,xe){I.transparent===!0&&I.side===DoubleSide&&I.forceSinglePass===!1?(I.side=BackSide,I.needsUpdate=!0,Je(I,$,xe),I.side=FrontSide,I.needsUpdate=!0,Je(I,$,xe),I.side=DoubleSide):Je(I,$,xe)}h=E.get(S),h.init(),v.push(h),S.traverseVisible(function(I){I.isLight&&I.layers.test(B.layers)&&(h.pushLight(I),I.castShadow&&h.pushShadow(I))}),h.setupLights(m.physicallyCorrectLights),S.traverse(function(I){const $=I.material;if($)if(Array.isArray($))for(let xe=0;xe<$.length;xe++){const Se=$[xe];W(Se,S,I)}else W($,S,I)}),v.pop(),h=null};let H=null;function K(S){H&&H(S)}function ue(){Ie.stop()}function ge(){Ie.start()}const Ie=new WebGLAnimation;Ie.setAnimationLoop(K),typeof self<"u"&&Ie.setContext(self),this.setAnimationLoop=function(S){H=S,oe.setAnimationLoop(S),S===null?Ie.stop():Ie.start()},oe.addEventListener("sessionstart",ue),oe.addEventListener("sessionend",ge),this.render=function(S,B){if(B!==void 0&&B.isCamera!==!0){console.error("THREE.WebGLRenderer.render: camera is not an instance of THREE.Camera.");return}if(p===!0)return;S.matrixWorldAutoUpdate===!0&&S.updateMatrixWorld(),B.parent===null&&B.matrixWorldAutoUpdate===!0&&B.updateMatrixWorld(),oe.enabled===!0&&oe.isPresenting===!0&&(oe.cameraAutoUpdate===!0&&oe.updateCamera(B),B=oe.getCamera()),S.isScene===!0&&S.onBeforeRender(m,S,B,w),h=E.get(S,v.length),h.init(),v.push(h),he.multiplyMatrices(B.projectionMatrix,B.matrixWorldInverse),J.setFromProjectionMatrix(he),ne=this.localClippingEnabled,X=g.init(this.clippingPlanes,ne),f=je.get(S,_.length),f.init(),_.push(f),ke(S,B,0,m.sortObjects),f.finish(),m.sortObjects===!0&&f.sort(Q,O),X===!0&&g.beginShadows();const W=h.state.shadowsArray;if(k.render(W,S,B),X===!0&&g.endShadows(),this.info.autoReset===!0&&this.info.reset(),ee.render(f,S),h.setupLights(m.physicallyCorrectLights),B.isArrayCamera){const I=B.cameras;for(let $=0,xe=I.length;$<xe;$++){const Se=I[$];$e(f,S,Se,Se.viewport)}}else $e(f,S,B);w!==null&&(ve.updateMultisampleRenderTarget(w),ve.updateRenderTargetMipmap(w)),S.isScene===!0&&S.onAfterRender(m,S,B),D.resetDefaultState(),A=-1,M=null,v.pop(),v.length>0?h=v[v.length-1]:h=null,_.pop(),_.length>0?f=_[_.length-1]:f=null};function ke(S,B,W,I){if(S.visible===!1)return;if(S.layers.test(B.layers)){if(S.isGroup)W=S.renderOrder;else if(S.isLOD)S.autoUpdate===!0&&S.update(B);else if(S.isLight)h.pushLight(S),S.castShadow&&h.pushShadow(S);else if(S.isSprite){if(!S.frustumCulled||J.intersectsSprite(S)){I&&j.setFromMatrixPosition(S.matrixWorld).applyMatrix4(he);const Se=Oe.update(S),we=S.material;we.visible&&f.push(S,Se,we,W,j.z,null)}}else if((S.isMesh||S.isLine||S.isPoints)&&(S.isSkinnedMesh&&S.skeleton.frame!==Fe.render.frame&&(S.skeleton.update(),S.skeleton.frame=Fe.render.frame),!S.frustumCulled||J.intersectsObject(S))){I&&j.setFromMatrixPosition(S.matrixWorld).applyMatrix4(he);const Se=Oe.update(S),we=S.material;if(Array.isArray(we)){const Ee=Se.groups;for(let Pe=0,Ae=Ee.length;Pe<Ae;Pe++){const Le=Ee[Pe],Ve=we[Le.materialIndex];Ve&&Ve.visible&&f.push(S,Se,Ve,W,j.z,Le)}}else we.visible&&f.push(S,Se,we,W,j.z,null)}}const xe=S.children;for(let Se=0,we=xe.length;Se<we;Se++)ke(xe[Se],B,W,I)}function $e(S,B,W,I){const $=S.opaque,xe=S.transmissive,Se=S.transparent;h.setupLightsView(W),X===!0&&g.setGlobalState(m.clippingPlanes,W),xe.length>0&&tt($,B,W),I&&ce.viewport(P.copy(I)),$.length>0&&Ne($,B,W),xe.length>0&&Ne(xe,B,W),Se.length>0&&Ne(Se,B,W),ce.buffers.depth.setTest(!0),ce.buffers.depth.setMask(!0),ce.buffers.color.setMask(!0),ce.setPolygonOffset(!1)}function tt(S,B,W){const I=pe.isWebGL2;te===null&&(te=new WebGLRenderTarget(1,1,{generateMipmaps:!0,type:_e.has("EXT_color_buffer_half_float")?HalfFloatType:UnsignedByteType,minFilter:LinearMipmapLinearFilter,samples:I&&a===!0?4:0})),m.getDrawingBufferSize(G),I?te.setSize(G.x,G.y):te.setSize(floorPowerOfTwo(G.x),floorPowerOfTwo(G.y));const $=m.getRenderTarget();m.setRenderTarget(te),m.clear();const xe=m.toneMapping;m.toneMapping=NoToneMapping,Ne(S,B,W),m.toneMapping=xe,ve.updateMultisampleRenderTarget(te),ve.updateRenderTargetMipmap(te),m.setRenderTarget($)}function Ne(S,B,W){const I=B.isScene===!0?B.overrideMaterial:null;for(let $=0,xe=S.length;$<xe;$++){const Se=S[$],we=Se.object,Ee=Se.geometry,Pe=I===null?Se.material:I,Ae=Se.group;we.layers.test(W.layers)&&Qe(we,B,W,Ee,Pe,Ae)}}function Qe(S,B,W,I,$,xe){S.onBeforeRender(m,B,W,I,$,xe),S.modelViewMatrix.multiplyMatrices(W.matrixWorldInverse,S.matrixWorld),S.normalMatrix.getNormalMatrix(S.modelViewMatrix),$.onBeforeRender(m,B,W,I,S,xe),$.transparent===!0&&$.side===DoubleSide&&$.forceSinglePass===!1?($.side=BackSide,$.needsUpdate=!0,m.renderBufferDirect(W,B,I,$,S,xe),$.side=FrontSide,$.needsUpdate=!0,m.renderBufferDirect(W,B,I,$,S,xe),$.side=DoubleSide):m.renderBufferDirect(W,B,I,$,S,xe),S.onAfterRender(m,B,W,I,$,xe)}function Je(S,B,W){B.isScene!==!0&&(B=re);const I=Me.get(S),$=h.state.lights,xe=h.state.shadowsArray,Se=$.state.version,we=De.getParameters(S,$.state,xe,B,W),Ee=De.getProgramCacheKey(we);let Pe=I.programs;I.environment=S.isMeshStandardMaterial?B.environment:null,I.fog=B.fog,I.envMap=(S.isMeshStandardMaterial?We:ze).get(S.envMap||I.environment),Pe===void 0&&(S.addEventListener("dispose",Te),Pe=new Map,I.programs=Pe);let Ae=Pe.get(Ee);if(Ae!==void 0){if(I.currentProgram===Ae&&I.lightsStateVersion===Se)return ut(S,we),Ae}else we.uniforms=De.getUniforms(S),S.onBuild(W,we,m),S.onBeforeCompile(we,m),Ae=De.acquireProgram(we,Ee),Pe.set(Ee,Ae),I.uniforms=we.uniforms;const Le=I.uniforms;(!S.isShaderMaterial&&!S.isRawShaderMaterial||S.clipping===!0)&&(Le.clippingPlanes=g.uniform),ut(S,we),I.needsLights=mt(S),I.lightsStateVersion=Se,I.needsLights&&(Le.ambientLightColor.value=$.state.ambient,Le.lightProbe.value=$.state.probe,Le.directionalLights.value=$.state.directional,Le.directionalLightShadows.value=$.state.directionalShadow,Le.spotLights.value=$.state.spot,Le.spotLightShadows.value=$.state.spotShadow,Le.rectAreaLights.value=$.state.rectArea,Le.ltc_1.value=$.state.rectAreaLTC1,Le.ltc_2.value=$.state.rectAreaLTC2,Le.pointLights.value=$.state.point,Le.pointLightShadows.value=$.state.pointShadow,Le.hemisphereLights.value=$.state.hemi,Le.directionalShadowMap.value=$.state.directionalShadowMap,Le.directionalShadowMatrix.value=$.state.directionalShadowMatrix,Le.spotShadowMap.value=$.state.spotShadowMap,Le.spotLightMatrix.value=$.state.spotLightMatrix,Le.spotLightMap.value=$.state.spotLightMap,Le.pointShadowMap.value=$.state.pointShadowMap,Le.pointShadowMatrix.value=$.state.pointShadowMatrix);const Ve=Ae.getUniforms(),Ye=WebGLUniforms.seqWithValue(Ve.seq,Le);return I.currentProgram=Ae,I.uniformsList=Ye,Ae}function ut(S,B){const W=Me.get(S);W.outputEncoding=B.outputEncoding,W.instancing=B.instancing,W.skinning=B.skinning,W.morphTargets=B.morphTargets,W.morphNormals=B.morphNormals,W.morphColors=B.morphColors,W.morphTargetsCount=B.morphTargetsCount,W.numClippingPlanes=B.numClippingPlanes,W.numIntersection=B.numClipIntersection,W.vertexAlphas=B.vertexAlphas,W.vertexTangents=B.vertexTangents,W.toneMapping=B.toneMapping}function ft(S,B,W,I,$){B.isScene!==!0&&(B=re),ve.resetTextureUnits();const xe=B.fog,Se=I.isMeshStandardMaterial?B.environment:null,we=w===null?m.outputEncoding:w.isXRRenderTarget===!0?w.texture.encoding:LinearEncoding,Ee=(I.isMeshStandardMaterial?We:ze).get(I.envMap||Se),Pe=I.vertexColors===!0&&!!W.attributes.color&&W.attributes.color.itemSize===4,Ae=!!I.normalMap&&!!W.attributes.tangent,Le=!!W.morphAttributes.position,Ve=!!W.morphAttributes.normal,Ye=!!W.morphAttributes.color,et=I.toneMapped?m.toneMapping:NoToneMapping,nt=W.morphAttributes.position||W.morphAttributes.normal||W.morphAttributes.color,Ge=nt!==void 0?nt.length:0,Re=Me.get(I),at=h.state.lights;if(X===!0&&(ne===!0||S!==M)){const Ze=S===M&&I.id===A;g.setState(I,S,Ze)}let He=!1;I.version===Re.__version?(Re.needsLights&&Re.lightsStateVersion!==at.state.version||Re.outputEncoding!==we||$.isInstancedMesh&&Re.instancing===!1||!$.isInstancedMesh&&Re.instancing===!0||$.isSkinnedMesh&&Re.skinning===!1||!$.isSkinnedMesh&&Re.skinning===!0||Re.envMap!==Ee||I.fog===!0&&Re.fog!==xe||Re.numClippingPlanes!==void 0&&(Re.numClippingPlanes!==g.numPlanes||Re.numIntersection!==g.numIntersection)||Re.vertexAlphas!==Pe||Re.vertexTangents!==Ae||Re.morphTargets!==Le||Re.morphNormals!==Ve||Re.morphColors!==Ye||Re.toneMapping!==et||pe.isWebGL2===!0&&Re.morphTargetsCount!==Ge)&&(He=!0):(He=!0,Re.__version=I.version);let it=Re.currentProgram;He===!0&&(it=Je(I,B,$));let dt=!1,st=!1,ot=!1;const qe=it.getUniforms(),rt=Re.uniforms;if(ce.useProgram(it.program)&&(dt=!0,st=!0,ot=!0),I.id!==A&&(A=I.id,st=!0),dt||M!==S){if(qe.setValue(V,"projectionMatrix",S.projectionMatrix),pe.logarithmicDepthBuffer&&qe.setValue(V,"logDepthBufFC",2/(Math.log(S.far+1)/Math.LN2)),M!==S&&(M=S,st=!0,ot=!0),I.isShaderMaterial||I.isMeshPhongMaterial||I.isMeshToonMaterial||I.isMeshStandardMaterial||I.envMap){const Ze=qe.map.cameraPosition;Ze!==void 0&&Ze.setValue(V,j.setFromMatrixPosition(S.matrixWorld))}(I.isMeshPhongMaterial||I.isMeshToonMaterial||I.isMeshLambertMaterial||I.isMeshBasicMaterial||I.isMeshStandardMaterial||I.isShaderMaterial)&&qe.setValue(V,"isOrthographic",S.isOrthographicCamera===!0),(I.isMeshPhongMaterial||I.isMeshToonMaterial||I.isMeshLambertMaterial||I.isMeshBasicMaterial||I.isMeshStandardMaterial||I.isShaderMaterial||I.isShadowMaterial||$.isSkinnedMesh)&&qe.setValue(V,"viewMatrix",S.matrixWorldInverse)}if($.isSkinnedMesh){qe.setOptional(V,$,"bindMatrix"),qe.setOptional(V,$,"bindMatrixInverse");const Ze=$.skeleton;Ze&&(pe.floatVertexTextures?(Ze.boneTexture===null&&Ze.computeBoneTexture(),qe.setValue(V,"boneTexture",Ze.boneTexture,ve),qe.setValue(V,"boneTextureSize",Ze.boneTextureSize)):console.warn("THREE.WebGLRenderer: SkinnedMesh can only be used with WebGL 2. With WebGL 1 OES_texture_float and vertex textures support is required."))}const lt=W.morphAttributes;if((lt.position!==void 0||lt.normal!==void 0||lt.color!==void 0&&pe.isWebGL2===!0)&&ie.update($,W,I,it),(st||Re.receiveShadow!==$.receiveShadow)&&(Re.receiveShadow=$.receiveShadow,qe.setValue(V,"receiveShadow",$.receiveShadow)),I.isMeshGouraudMaterial&&I.envMap!==null&&(rt.envMap.value=Ee,rt.flipEnvMap.value=Ee.isCubeTexture&&Ee.isRenderTargetTexture===!1?-1:1),st&&(qe.setValue(V,"toneMappingExposure",m.toneMappingExposure),Re.needsLights&&pt(rt,ot),xe&&I.fog===!0&&Ke.refreshFogUniforms(rt,xe),Ke.refreshMaterialUniforms(rt,I,Y,U,te),WebGLUniforms.upload(V,Re.uniformsList,rt,ve)),I.isShaderMaterial&&I.uniformsNeedUpdate===!0&&(WebGLUniforms.upload(V,Re.uniformsList,rt,ve),I.uniformsNeedUpdate=!1),I.isSpriteMaterial&&qe.setValue(V,"center",$.center),qe.setValue(V,"modelViewMatrix",$.modelViewMatrix),qe.setValue(V,"normalMatrix",$.normalMatrix),qe.setValue(V,"modelMatrix",$.matrixWorld),I.isShaderMaterial||I.isRawShaderMaterial){const Ze=I.uniformsGroups;for(let ct=0,_t=Ze.length;ct<_t;ct++)if(pe.isWebGL2){const ht=Ze[ct];le.update(ht,it),le.bind(ht,it)}else console.warn("THREE.WebGLRenderer: Uniform Buffer Objects can only be used with WebGL 2.")}return it}function pt(S,B){S.ambientLightColor.needsUpdate=B,S.lightProbe.needsUpdate=B,S.directionalLights.needsUpdate=B,S.directionalLightShadows.needsUpdate=B,S.pointLights.needsUpdate=B,S.pointLightShadows.needsUpdate=B,S.spotLights.needsUpdate=B,S.spotLightShadows.needsUpdate=B,S.rectAreaLights.needsUpdate=B,S.hemisphereLights.needsUpdate=B}function mt(S){return S.isMeshLambertMaterial||S.isMeshToonMaterial||S.isMeshPhongMaterial||S.isMeshStandardMaterial||S.isShadowMaterial||S.isShaderMaterial&&S.lights===!0}this.getActiveCubeFace=function(){return y},this.getActiveMipmapLevel=function(){return C},this.getRenderTarget=function(){return w},this.setRenderTargetTextures=function(S,B,W){Me.get(S.texture).__webglTexture=B,Me.get(S.depthTexture).__webglTexture=W;const I=Me.get(S);I.__hasExternalTextures=!0,I.__hasExternalTextures&&(I.__autoAllocateDepthBuffer=W===void 0,I.__autoAllocateDepthBuffer||_e.has("WEBGL_multisampled_render_to_texture")===!0&&(console.warn("THREE.WebGLRenderer: Render-to-texture extension was disabled because an external texture was provided"),I.__useRenderToTexture=!1))},this.setRenderTargetFramebuffer=function(S,B){const W=Me.get(S);W.__webglFramebuffer=B,W.__useDefaultFramebuffer=B===void 0},this.setRenderTarget=function(S,B=0,W=0){w=S,y=B,C=W;let I=!0,$=null,xe=!1,Se=!1;if(S){const Ee=Me.get(S);Ee.__useDefaultFramebuffer!==void 0?(ce.bindFramebuffer(36160,null),I=!1):Ee.__webglFramebuffer===void 0?ve.setupRenderTarget(S):Ee.__hasExternalTextures&&ve.rebindTextures(S,Me.get(S.texture).__webglTexture,Me.get(S.depthTexture).__webglTexture);const Pe=S.texture;(Pe.isData3DTexture||Pe.isDataArrayTexture||Pe.isCompressedArrayTexture)&&(Se=!0);const Ae=Me.get(S).__webglFramebuffer;S.isWebGLCubeRenderTarget?($=Ae[B],xe=!0):pe.isWebGL2&&S.samples>0&&ve.useMultisampledRTT(S)===!1?$=Me.get(S).__webglMultisampledFramebuffer:$=Ae,P.copy(S.viewport),N.copy(S.scissor),b=S.scissorTest}else P.copy(F).multiplyScalar(Y).floor(),N.copy(q).multiplyScalar(Y).floor(),b=Z;if(ce.bindFramebuffer(36160,$)&&pe.drawBuffers&&I&&ce.drawBuffers(S,$),ce.viewport(P),ce.scissor(N),ce.setScissorTest(b),xe){const Ee=Me.get(S.texture);V.framebufferTexture2D(36160,36064,34069+B,Ee.__webglTexture,W)}else if(Se){const Ee=Me.get(S.texture),Pe=B||0;V.framebufferTextureLayer(36160,36064,Ee.__webglTexture,W||0,Pe)}A=-1},this.readRenderTargetPixels=function(S,B,W,I,$,xe,Se){if(!(S&&S.isWebGLRenderTarget)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");return}let we=Me.get(S).__webglFramebuffer;if(S.isWebGLCubeRenderTarget&&Se!==void 0&&(we=we[Se]),we){ce.bindFramebuffer(36160,we);try{const Ee=S.texture,Pe=Ee.format,Ae=Ee.type;if(Pe!==RGBAFormat&&T.convert(Pe)!==V.getParameter(35739)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in RGBA or implementation defined format.");return}const Le=Ae===HalfFloatType&&(_e.has("EXT_color_buffer_half_float")||pe.isWebGL2&&_e.has("EXT_color_buffer_float"));if(Ae!==UnsignedByteType&&T.convert(Ae)!==V.getParameter(35738)&&!(Ae===FloatType&&(pe.isWebGL2||_e.has("OES_texture_float")||_e.has("WEBGL_color_buffer_float")))&&!Le){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in UnsignedByteType or implementation defined type.");return}B>=0&&B<=S.width-I&&W>=0&&W<=S.height-$&&V.readPixels(B,W,I,$,T.convert(Pe),T.convert(Ae),xe)}finally{const Ee=w!==null?Me.get(w).__webglFramebuffer:null;ce.bindFramebuffer(36160,Ee)}}},this.copyFramebufferToTexture=function(S,B,W=0){const I=Math.pow(2,-W),$=Math.floor(B.image.width*I),xe=Math.floor(B.image.height*I);ve.setTexture2D(B,0),V.copyTexSubImage2D(3553,W,0,0,S.x,S.y,$,xe),ce.unbindTexture()},this.copyTextureToTexture=function(S,B,W,I=0){const $=B.image.width,xe=B.image.height,Se=T.convert(W.format),we=T.convert(W.type);ve.setTexture2D(W,0),V.pixelStorei(37440,W.flipY),V.pixelStorei(37441,W.premultiplyAlpha),V.pixelStorei(3317,W.unpackAlignment),B.isDataTexture?V.texSubImage2D(3553,I,S.x,S.y,$,xe,Se,we,B.image.data):B.isCompressedTexture?V.compressedTexSubImage2D(3553,I,S.x,S.y,B.mipmaps[0].width,B.mipmaps[0].height,Se,B.mipmaps[0].data):V.texSubImage2D(3553,I,S.x,S.y,Se,we,B.image),I===0&&W.generateMipmaps&&V.generateMipmap(3553),ce.unbindTexture()},this.copyTextureToTexture3D=function(S,B,W,I,$=0){if(m.isWebGL1Renderer){console.warn("THREE.WebGLRenderer.copyTextureToTexture3D: can only be used with WebGL2.");return}const xe=S.max.x-S.min.x+1,Se=S.max.y-S.min.y+1,we=S.max.z-S.min.z+1,Ee=T.convert(I.format),Pe=T.convert(I.type);let Ae;if(I.isData3DTexture)ve.setTexture3D(I,0),Ae=32879;else if(I.isDataArrayTexture)ve.setTexture2DArray(I,0),Ae=35866;else{console.warn("THREE.WebGLRenderer.copyTextureToTexture3D: only supports THREE.DataTexture3D and THREE.DataTexture2DArray.");return}V.pixelStorei(37440,I.flipY),V.pixelStorei(37441,I.premultiplyAlpha),V.pixelStorei(3317,I.unpackAlignment);const Le=V.getParameter(3314),Ve=V.getParameter(32878),Ye=V.getParameter(3316),et=V.getParameter(3315),nt=V.getParameter(32877),Ge=W.isCompressedTexture?W.mipmaps[0]:W.image;V.pixelStorei(3314,Ge.width),V.pixelStorei(32878,Ge.height),V.pixelStorei(3316,S.min.x),V.pixelStorei(3315,S.min.y),V.pixelStorei(32877,S.min.z),W.isDataTexture||W.isData3DTexture?V.texSubImage3D(Ae,$,B.x,B.y,B.z,xe,Se,we,Ee,Pe,Ge.data):W.isCompressedArrayTexture?(console.warn("THREE.WebGLRenderer.copyTextureToTexture3D: untested support for compressed srcTexture."),V.compressedTexSubImage3D(Ae,$,B.x,B.y,B.z,xe,Se,we,Ee,Ge.data)):V.texSubImage3D(Ae,$,B.x,B.y,B.z,xe,Se,we,Ee,Pe,Ge),V.pixelStorei(3314,Le),V.pixelStorei(32878,Ve),V.pixelStorei(3316,Ye),V.pixelStorei(3315,et),V.pixelStorei(32877,nt),$===0&&I.generateMipmaps&&V.generateMipmap(Ae),ce.unbindTexture()},this.initTexture=function(S){S.isCubeTexture?ve.setTextureCube(S,0):S.isData3DTexture?ve.setTexture3D(S,0):S.isDataArrayTexture||S.isCompressedArrayTexture?ve.setTexture2DArray(S,0):ve.setTexture2D(S,0),ce.unbindTexture()},this.resetState=function(){y=0,C=0,w=null,ce.reset(),D.reset()},typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}class WebGL1Renderer extends WebGLRenderer{}WebGL1Renderer.prototype.isWebGL1Renderer=!0;class Scene extends Object3D{constructor(){super(),this.isScene=!0,this.type="Scene",this.background=null,this.environment=null,this.fog=null,this.backgroundBlurriness=0,this.backgroundIntensity=1,this.overrideMaterial=null,typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}copy(e,n){return super.copy(e,n),e.background!==null&&(this.background=e.background.clone()),e.environment!==null&&(this.environment=e.environment.clone()),e.fog!==null&&(this.fog=e.fog.clone()),this.backgroundBlurriness=e.backgroundBlurriness,this.backgroundIntensity=e.backgroundIntensity,e.overrideMaterial!==null&&(this.overrideMaterial=e.overrideMaterial.clone()),this.matrixAutoUpdate=e.matrixAutoUpdate,this}toJSON(e){const n=super.toJSON(e);return this.fog!==null&&(n.object.fog=this.fog.toJSON()),this.backgroundBlurriness>0&&(n.object.backgroundBlurriness=this.backgroundBlurriness),this.backgroundIntensity!==1&&(n.object.backgroundIntensity=this.backgroundIntensity),n}get autoUpdate(){return console.warn("THREE.Scene: autoUpdate was renamed to matrixWorldAutoUpdate in r144."),this.matrixWorldAutoUpdate}set autoUpdate(e){console.warn("THREE.Scene: autoUpdate was renamed to matrixWorldAutoUpdate in r144."),this.matrixWorldAutoUpdate=e}}class PointsMaterial extends Material{constructor(e){super(),this.isPointsMaterial=!0,this.type="PointsMaterial",this.color=new Color$1(16777215),this.map=null,this.alphaMap=null,this.size=1,this.sizeAttenuation=!0,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.alphaMap=e.alphaMap,this.size=e.size,this.sizeAttenuation=e.sizeAttenuation,this.fog=e.fog,this}}const _inverseMatrix=new Matrix4,_ray=new Ray,_sphere=new Sphere,_position$2=new Vector3;class Points extends Object3D{constructor(e=new BufferGeometry,n=new PointsMaterial){super(),this.isPoints=!0,this.type="Points",this.geometry=e,this.material=n,this.updateMorphTargets()}copy(e,n){return super.copy(e,n),this.material=e.material,this.geometry=e.geometry,this}raycast(e,n){const i=this.geometry,r=this.matrixWorld,a=e.params.Points.threshold,l=i.drawRange;if(i.boundingSphere===null&&i.computeBoundingSphere(),_sphere.copy(i.boundingSphere),_sphere.applyMatrix4(r),_sphere.radius+=a,e.ray.intersectsSphere(_sphere)===!1)return;_inverseMatrix.copy(r).invert(),_ray.copy(e.ray).applyMatrix4(_inverseMatrix);const o=a/((this.scale.x+this.scale.y+this.scale.z)/3),c=o*o,u=i.index,f=i.attributes.position;if(u!==null){const h=Math.max(0,l.start),_=Math.min(u.count,l.start+l.count);for(let v=h,m=_;v<m;v++){const p=u.getX(v);_position$2.fromBufferAttribute(f,p),testPoint(_position$2,p,c,r,e,n,this)}}else{const h=Math.max(0,l.start),_=Math.min(f.count,l.start+l.count);for(let v=h,m=_;v<m;v++)_position$2.fromBufferAttribute(f,v),testPoint(_position$2,v,c,r,e,n,this)}}updateMorphTargets(){const n=this.geometry.morphAttributes,i=Object.keys(n);if(i.length>0){const r=n[i[0]];if(r!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let a=0,l=r.length;a<l;a++){const o=r[a].name||String(a);this.morphTargetInfluences.push(0),this.morphTargetDictionary[o]=a}}}}}function testPoint(s,e,n,i,r,a,l){const o=_ray.distanceSqToPoint(s);if(o<n){const c=new Vector3;_ray.closestPointToPoint(s,c),c.applyMatrix4(i);const u=r.ray.origin.distanceTo(c);if(u<r.near||u>r.far)return;a.push({distance:u,distanceToRay:Math.sqrt(o),point:c,index:e,face:null,object:l})}}class Clock{constructor(e=!0){this.autoStart=e,this.startTime=0,this.oldTime=0,this.elapsedTime=0,this.running=!1}start(){this.startTime=now(),this.oldTime=this.startTime,this.elapsedTime=0,this.running=!0}stop(){this.getElapsedTime(),this.running=!1,this.autoStart=!1}getElapsedTime(){return this.getDelta(),this.elapsedTime}getDelta(){let e=0;if(this.autoStart&&!this.running)return this.start(),0;if(this.running){const n=now();e=(n-this.oldTime)/1e3,this.oldTime=n,this.elapsedTime+=e}return e}}function now(){return(typeof performance>"u"?Date:performance).now()}class Spherical{constructor(e=1,n=0,i=0){return this.radius=e,this.phi=n,this.theta=i,this}set(e,n,i){return this.radius=e,this.phi=n,this.theta=i,this}copy(e){return this.radius=e.radius,this.phi=e.phi,this.theta=e.theta,this}makeSafe(){return this.phi=Math.max(1e-6,Math.min(Math.PI-1e-6,this.phi)),this}setFromVector3(e){return this.setFromCartesianCoords(e.x,e.y,e.z)}setFromCartesianCoords(e,n,i){return this.radius=Math.sqrt(e*e+n*n+i*i),this.radius===0?(this.theta=0,this.phi=0):(this.theta=Math.atan2(e,i),this.phi=Math.acos(clamp(n/this.radius,-1,1))),this}clone(){return new this.constructor().copy(this)}}typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("register",{detail:{revision:REVISION}}));typeof window<"u"&&(window.__THREE__?console.warn("WARNING: Multiple instances of Three.js being imported."):window.__THREE__=REVISION);const _changeEvent={type:"change"},_startEvent={type:"start"},_endEvent={type:"end"};class OrbitControls extends EventDispatcher{constructor(e,n){super(),this.object=e,this.domElement=n,this.domElement.style.touchAction="none",this.enabled=!0,this.target=new Vector3,this.minDistance=0,this.maxDistance=1/0,this.minZoom=0,this.maxZoom=1/0,this.minPolarAngle=0,this.maxPolarAngle=Math.PI,this.minAzimuthAngle=-1/0,this.maxAzimuthAngle=1/0,this.enableDamping=!1,this.dampingFactor=.05,this.enableZoom=!0,this.zoomSpeed=1,this.enableRotate=!0,this.rotateSpeed=1,this.enablePan=!0,this.panSpeed=1,this.screenSpacePanning=!0,this.keyPanSpeed=7,this.autoRotate=!1,this.autoRotateSpeed=2,this.keys={LEFT:"ArrowLeft",UP:"ArrowUp",RIGHT:"ArrowRight",BOTTOM:"ArrowDown"},this.mouseButtons={LEFT:MOUSE.ROTATE,MIDDLE:MOUSE.DOLLY,RIGHT:MOUSE.PAN},this.touches={ONE:TOUCH.ROTATE,TWO:TOUCH.DOLLY_PAN},this.target0=this.target.clone(),this.position0=this.object.position.clone(),this.zoom0=this.object.zoom,this._domElementKeyEvents=null,this.getPolarAngle=function(){return o.phi},this.getAzimuthalAngle=function(){return o.theta},this.getDistance=function(){return this.object.position.distanceTo(this.target)},this.listenToKeyEvents=function(T){T.addEventListener("keydown",je),this._domElementKeyEvents=T},this.saveState=function(){i.target0.copy(i.target),i.position0.copy(i.object.position),i.zoom0=i.object.zoom},this.reset=function(){i.target.copy(i.target0),i.object.position.copy(i.position0),i.object.zoom=i.zoom0,i.object.updateProjectionMatrix(),i.dispatchEvent(_changeEvent),i.update(),a=r.NONE},this.update=function(){const T=new Vector3,D=new Quaternion().setFromUnitVectors(e.up,new Vector3(0,1,0)),le=D.clone().invert(),de=new Vector3,oe=new Quaternion,me=2*Math.PI;return function(){const Ce=i.object.position;T.copy(Ce).sub(i.target),T.applyQuaternion(D),o.setFromVector3(T),i.autoRotate&&a===r.NONE&&L(N()),i.enableDamping?(o.theta+=c.theta*i.dampingFactor,o.phi+=c.phi*i.dampingFactor):(o.theta+=c.theta,o.phi+=c.phi);let Te=i.minAzimuthAngle,Ue=i.maxAzimuthAngle;return isFinite(Te)&&isFinite(Ue)&&(Te<-Math.PI?Te+=me:Te>Math.PI&&(Te-=me),Ue<-Math.PI?Ue+=me:Ue>Math.PI&&(Ue-=me),Te<=Ue?o.theta=Math.max(Te,Math.min(Ue,o.theta)):o.theta=o.theta>(Te+Ue)/2?Math.max(Te,o.theta):Math.min(Ue,o.theta)),o.phi=Math.max(i.minPolarAngle,Math.min(i.maxPolarAngle,o.phi)),o.makeSafe(),o.radius*=u,o.radius=Math.max(i.minDistance,Math.min(i.maxDistance,o.radius)),i.enableDamping===!0?i.target.addScaledVector(d,i.dampingFactor):i.target.add(d),T.setFromSpherical(o),T.applyQuaternion(le),Ce.copy(i.target).add(T),i.object.lookAt(i.target),i.enableDamping===!0?(c.theta*=1-i.dampingFactor,c.phi*=1-i.dampingFactor,d.multiplyScalar(1-i.dampingFactor)):(c.set(0,0,0),d.set(0,0,0)),u=1,f||de.distanceToSquared(i.object.position)>l||8*(1-oe.dot(i.object.quaternion))>l?(i.dispatchEvent(_changeEvent),de.copy(i.object.position),oe.copy(i.object.quaternion),f=!1,!0):!1}}(),this.dispose=function(){i.domElement.removeEventListener("contextmenu",k),i.domElement.removeEventListener("pointerdown",ze),i.domElement.removeEventListener("pointercancel",Xe),i.domElement.removeEventListener("wheel",Ke),i.domElement.removeEventListener("pointermove",We),i.domElement.removeEventListener("pointerup",Be),i._domElementKeyEvents!==null&&i._domElementKeyEvents.removeEventListener("keydown",je)};const i=this,r={NONE:-1,ROTATE:0,DOLLY:1,PAN:2,TOUCH_ROTATE:3,TOUCH_PAN:4,TOUCH_DOLLY_PAN:5,TOUCH_DOLLY_ROTATE:6};let a=r.NONE;const l=1e-6,o=new Spherical,c=new Spherical;let u=1;const d=new Vector3;let f=!1;const h=new Vector2,_=new Vector2,v=new Vector2,m=new Vector2,p=new Vector2,y=new Vector2,C=new Vector2,w=new Vector2,A=new Vector2,M=[],P={};function N(){return 2*Math.PI/60/60*i.autoRotateSpeed}function b(){return Math.pow(.95,i.zoomSpeed)}function L(T){c.theta-=T}function U(T){c.phi-=T}const Y=function(){const T=new Vector3;return function(le,de){T.setFromMatrixColumn(de,0),T.multiplyScalar(-le),d.add(T)}}(),Q=function(){const T=new Vector3;return function(le,de){i.screenSpacePanning===!0?T.setFromMatrixColumn(de,1):(T.setFromMatrixColumn(de,0),T.crossVectors(i.object.up,T)),T.multiplyScalar(le),d.add(T)}}(),O=function(){const T=new Vector3;return function(le,de){const oe=i.domElement;if(i.object.isPerspectiveCamera){const me=i.object.position;T.copy(me).sub(i.target);let fe=T.length();fe*=Math.tan(i.object.fov/2*Math.PI/180),Y(2*le*fe/oe.clientHeight,i.object.matrix),Q(2*de*fe/oe.clientHeight,i.object.matrix)}else i.object.isOrthographicCamera?(Y(le*(i.object.right-i.object.left)/i.object.zoom/oe.clientWidth,i.object.matrix),Q(de*(i.object.top-i.object.bottom)/i.object.zoom/oe.clientHeight,i.object.matrix)):(console.warn("WARNING: OrbitControls.js encountered an unknown camera type - pan disabled."),i.enablePan=!1)}}();function F(T){i.object.isPerspectiveCamera?u/=T:i.object.isOrthographicCamera?(i.object.zoom=Math.max(i.minZoom,Math.min(i.maxZoom,i.object.zoom*T)),i.object.updateProjectionMatrix(),f=!0):(console.warn("WARNING: OrbitControls.js encountered an unknown camera type - dolly/zoom disabled."),i.enableZoom=!1)}function q(T){i.object.isPerspectiveCamera?u*=T:i.object.isOrthographicCamera?(i.object.zoom=Math.max(i.minZoom,Math.min(i.maxZoom,i.object.zoom/T)),i.object.updateProjectionMatrix(),f=!0):(console.warn("WARNING: OrbitControls.js encountered an unknown camera type - dolly/zoom disabled."),i.enableZoom=!1)}function Z(T){h.set(T.clientX,T.clientY)}function J(T){C.set(T.clientX,T.clientY)}function X(T){m.set(T.clientX,T.clientY)}function ne(T){_.set(T.clientX,T.clientY),v.subVectors(_,h).multiplyScalar(i.rotateSpeed);const D=i.domElement;L(2*Math.PI*v.x/D.clientHeight),U(2*Math.PI*v.y/D.clientHeight),h.copy(_),i.update()}function te(T){w.set(T.clientX,T.clientY),A.subVectors(w,C),A.y>0?F(b()):A.y<0&&q(b()),C.copy(w),i.update()}function he(T){p.set(T.clientX,T.clientY),y.subVectors(p,m).multiplyScalar(i.panSpeed),O(y.x,y.y),m.copy(p),i.update()}function G(T){T.deltaY<0?q(b()):T.deltaY>0&&F(b()),i.update()}function j(T){let D=!1;switch(T.code){case i.keys.UP:T.ctrlKey||T.metaKey||T.shiftKey?U(2*Math.PI*i.rotateSpeed/i.domElement.clientHeight):O(0,i.keyPanSpeed),D=!0;break;case i.keys.BOTTOM:T.ctrlKey||T.metaKey||T.shiftKey?U(-2*Math.PI*i.rotateSpeed/i.domElement.clientHeight):O(0,-i.keyPanSpeed),D=!0;break;case i.keys.LEFT:T.ctrlKey||T.metaKey||T.shiftKey?L(2*Math.PI*i.rotateSpeed/i.domElement.clientHeight):O(i.keyPanSpeed,0),D=!0;break;case i.keys.RIGHT:T.ctrlKey||T.metaKey||T.shiftKey?L(-2*Math.PI*i.rotateSpeed/i.domElement.clientHeight):O(-i.keyPanSpeed,0),D=!0;break}D&&(T.preventDefault(),i.update())}function re(){if(M.length===1)h.set(M[0].pageX,M[0].pageY);else{const T=.5*(M[0].pageX+M[1].pageX),D=.5*(M[0].pageY+M[1].pageY);h.set(T,D)}}function se(){if(M.length===1)m.set(M[0].pageX,M[0].pageY);else{const T=.5*(M[0].pageX+M[1].pageX),D=.5*(M[0].pageY+M[1].pageY);m.set(T,D)}}function V(){const T=M[0].pageX-M[1].pageX,D=M[0].pageY-M[1].pageY,le=Math.sqrt(T*T+D*D);C.set(0,le)}function ye(){i.enableZoom&&V(),i.enablePan&&se()}function _e(){i.enableZoom&&V(),i.enableRotate&&re()}function pe(T){if(M.length==1)_.set(T.pageX,T.pageY);else{const le=be(T),de=.5*(T.pageX+le.x),oe=.5*(T.pageY+le.y);_.set(de,oe)}v.subVectors(_,h).multiplyScalar(i.rotateSpeed);const D=i.domElement;L(2*Math.PI*v.x/D.clientHeight),U(2*Math.PI*v.y/D.clientHeight),h.copy(_)}function ce(T){if(M.length===1)p.set(T.pageX,T.pageY);else{const D=be(T),le=.5*(T.pageX+D.x),de=.5*(T.pageY+D.y);p.set(le,de)}y.subVectors(p,m).multiplyScalar(i.panSpeed),O(y.x,y.y),m.copy(p)}function Fe(T){const D=be(T),le=T.pageX-D.x,de=T.pageY-D.y,oe=Math.sqrt(le*le+de*de);w.set(0,oe),A.set(0,Math.pow(w.y/C.y,i.zoomSpeed)),F(A.y),C.copy(w)}function Me(T){i.enableZoom&&Fe(T),i.enablePan&&ce(T)}function ve(T){i.enableZoom&&Fe(T),i.enableRotate&&pe(T)}function ze(T){i.enabled!==!1&&(M.length===0&&(i.domElement.setPointerCapture(T.pointerId),i.domElement.addEventListener("pointermove",We),i.domElement.addEventListener("pointerup",Be)),ee(T),T.pointerType==="touch"?E(T):Oe(T))}function We(T){i.enabled!==!1&&(T.pointerType==="touch"?g(T):De(T))}function Be(T){ie(T),M.length===0&&(i.domElement.releasePointerCapture(T.pointerId),i.domElement.removeEventListener("pointermove",We),i.domElement.removeEventListener("pointerup",Be)),i.dispatchEvent(_endEvent),a=r.NONE}function Xe(T){ie(T)}function Oe(T){let D;switch(T.button){case 0:D=i.mouseButtons.LEFT;break;case 1:D=i.mouseButtons.MIDDLE;break;case 2:D=i.mouseButtons.RIGHT;break;default:D=-1}switch(D){case MOUSE.DOLLY:if(i.enableZoom===!1)return;J(T),a=r.DOLLY;break;case MOUSE.ROTATE:if(T.ctrlKey||T.metaKey||T.shiftKey){if(i.enablePan===!1)return;X(T),a=r.PAN}else{if(i.enableRotate===!1)return;Z(T),a=r.ROTATE}break;case MOUSE.PAN:if(T.ctrlKey||T.metaKey||T.shiftKey){if(i.enableRotate===!1)return;Z(T),a=r.ROTATE}else{if(i.enablePan===!1)return;X(T),a=r.PAN}break;default:a=r.NONE}a!==r.NONE&&i.dispatchEvent(_startEvent)}function De(T){switch(a){case r.ROTATE:if(i.enableRotate===!1)return;ne(T);break;case r.DOLLY:if(i.enableZoom===!1)return;te(T);break;case r.PAN:if(i.enablePan===!1)return;he(T);break}}function Ke(T){i.enabled===!1||i.enableZoom===!1||a!==r.NONE||(T.preventDefault(),i.dispatchEvent(_startEvent),G(T),i.dispatchEvent(_endEvent))}function je(T){i.enabled===!1||i.enablePan===!1||j(T)}function E(T){switch(ae(T),M.length){case 1:switch(i.touches.ONE){case TOUCH.ROTATE:if(i.enableRotate===!1)return;re(),a=r.TOUCH_ROTATE;break;case TOUCH.PAN:if(i.enablePan===!1)return;se(),a=r.TOUCH_PAN;break;default:a=r.NONE}break;case 2:switch(i.touches.TWO){case TOUCH.DOLLY_PAN:if(i.enableZoom===!1&&i.enablePan===!1)return;ye(),a=r.TOUCH_DOLLY_PAN;break;case TOUCH.DOLLY_ROTATE:if(i.enableZoom===!1&&i.enableRotate===!1)return;_e(),a=r.TOUCH_DOLLY_ROTATE;break;default:a=r.NONE}break;default:a=r.NONE}a!==r.NONE&&i.dispatchEvent(_startEvent)}function g(T){switch(ae(T),a){case r.TOUCH_ROTATE:if(i.enableRotate===!1)return;pe(T),i.update();break;case r.TOUCH_PAN:if(i.enablePan===!1)return;ce(T),i.update();break;case r.TOUCH_DOLLY_PAN:if(i.enableZoom===!1&&i.enablePan===!1)return;Me(T),i.update();break;case r.TOUCH_DOLLY_ROTATE:if(i.enableZoom===!1&&i.enableRotate===!1)return;ve(T),i.update();break;default:a=r.NONE}}function k(T){i.enabled!==!1&&T.preventDefault()}function ee(T){M.push(T)}function ie(T){delete P[T.pointerId];for(let D=0;D<M.length;D++)if(M[D].pointerId==T.pointerId){M.splice(D,1);return}}function ae(T){let D=P[T.pointerId];D===void 0&&(D=new Vector2,P[T.pointerId]=D),D.set(T.pageX,T.pageY)}function be(T){const D=T.pointerId===M[0].pointerId?M[1]:M[0];return P[D.pointerId]}i.domElement.addEventListener("contextmenu",k),i.domElement.addEventListener("pointerdown",ze),i.domElement.addEventListener("pointercancel",Xe),i.domElement.addEventListener("wheel",Ke,{passive:!1}),this.update()}}function ___$insertStyle(s){if(!!s&&!(typeof window>"u")){var e=document.createElement("style");return e.setAttribute("type","text/css"),e.innerHTML=s,document.head.appendChild(e),s}}function colorToString(s,e){var n=s.__state.conversionName.toString(),i=Math.round(s.r),r=Math.round(s.g),a=Math.round(s.b),l=s.a,o=Math.round(s.h),c=s.s.toFixed(1),u=s.v.toFixed(1);if(e||n==="THREE_CHAR_HEX"||n==="SIX_CHAR_HEX"){for(var d=s.hex.toString(16);d.length<6;)d="0"+d;return"#"+d}else{if(n==="CSS_RGB")return"rgb("+i+","+r+","+a+")";if(n==="CSS_RGBA")return"rgba("+i+","+r+","+a+","+l+")";if(n==="HEX")return"0x"+s.hex.toString(16);if(n==="RGB_ARRAY")return"["+i+","+r+","+a+"]";if(n==="RGBA_ARRAY")return"["+i+","+r+","+a+","+l+"]";if(n==="RGB_OBJ")return"{r:"+i+",g:"+r+",b:"+a+"}";if(n==="RGBA_OBJ")return"{r:"+i+",g:"+r+",b:"+a+",a:"+l+"}";if(n==="HSV_OBJ")return"{h:"+o+",s:"+c+",v:"+u+"}";if(n==="HSVA_OBJ")return"{h:"+o+",s:"+c+",v:"+u+",a:"+l+"}"}return"unknown format"}var ARR_EACH=Array.prototype.forEach,ARR_SLICE=Array.prototype.slice,Common={BREAK:{},extend:function(e){return this.each(ARR_SLICE.call(arguments,1),function(n){var i=this.isObject(n)?Object.keys(n):[];i.forEach(function(r){this.isUndefined(n[r])||(e[r]=n[r])}.bind(this))},this),e},defaults:function(e){return this.each(ARR_SLICE.call(arguments,1),function(n){var i=this.isObject(n)?Object.keys(n):[];i.forEach(function(r){this.isUndefined(e[r])&&(e[r]=n[r])}.bind(this))},this),e},compose:function(){var e=ARR_SLICE.call(arguments);return function(){for(var n=ARR_SLICE.call(arguments),i=e.length-1;i>=0;i--)n=[e[i].apply(this,n)];return n[0]}},each:function(e,n,i){if(!!e){if(ARR_EACH&&e.forEach&&e.forEach===ARR_EACH)e.forEach(n,i);else if(e.length===e.length+0){var r=void 0,a=void 0;for(r=0,a=e.length;r<a;r++)if(r in e&&n.call(i,e[r],r)===this.BREAK)return}else for(var l in e)if(n.call(i,e[l],l)===this.BREAK)return}},defer:function(e){setTimeout(e,0)},debounce:function(e,n,i){var r=void 0;return function(){var a=this,l=arguments;function o(){r=null,i||e.apply(a,l)}var c=i||!r;clearTimeout(r),r=setTimeout(o,n),c&&e.apply(a,l)}},toArray:function(e){return e.toArray?e.toArray():ARR_SLICE.call(e)},isUndefined:function(e){return e===void 0},isNull:function(e){return e===null},isNaN:function(s){function e(n){return s.apply(this,arguments)}return e.toString=function(){return s.toString()},e}(function(s){return isNaN(s)}),isArray:Array.isArray||function(s){return s.constructor===Array},isObject:function(e){return e===Object(e)},isNumber:function(e){return e===e+0},isString:function(e){return e===e+""},isBoolean:function(e){return e===!1||e===!0},isFunction:function(e){return e instanceof Function}},INTERPRETATIONS=[{litmus:Common.isString,conversions:{THREE_CHAR_HEX:{read:function(e){var n=e.match(/^#([A-F0-9])([A-F0-9])([A-F0-9])$/i);return n===null?!1:{space:"HEX",hex:parseInt("0x"+n[1].toString()+n[1].toString()+n[2].toString()+n[2].toString()+n[3].toString()+n[3].toString(),0)}},write:colorToString},SIX_CHAR_HEX:{read:function(e){var n=e.match(/^#([A-F0-9]{6})$/i);return n===null?!1:{space:"HEX",hex:parseInt("0x"+n[1].toString(),0)}},write:colorToString},CSS_RGB:{read:function(e){var n=e.match(/^rgb\(\s*(\S+)\s*,\s*(\S+)\s*,\s*(\S+)\s*\)/);return n===null?!1:{space:"RGB",r:parseFloat(n[1]),g:parseFloat(n[2]),b:parseFloat(n[3])}},write:colorToString},CSS_RGBA:{read:function(e){var n=e.match(/^rgba\(\s*(\S+)\s*,\s*(\S+)\s*,\s*(\S+)\s*,\s*(\S+)\s*\)/);return n===null?!1:{space:"RGB",r:parseFloat(n[1]),g:parseFloat(n[2]),b:parseFloat(n[3]),a:parseFloat(n[4])}},write:colorToString}}},{litmus:Common.isNumber,conversions:{HEX:{read:function(e){return{space:"HEX",hex:e,conversionName:"HEX"}},write:function(e){return e.hex}}}},{litmus:Common.isArray,conversions:{RGB_ARRAY:{read:function(e){return e.length!==3?!1:{space:"RGB",r:e[0],g:e[1],b:e[2]}},write:function(e){return[e.r,e.g,e.b]}},RGBA_ARRAY:{read:function(e){return e.length!==4?!1:{space:"RGB",r:e[0],g:e[1],b:e[2],a:e[3]}},write:function(e){return[e.r,e.g,e.b,e.a]}}}},{litmus:Common.isObject,conversions:{RGBA_OBJ:{read:function(e){return Common.isNumber(e.r)&&Common.isNumber(e.g)&&Common.isNumber(e.b)&&Common.isNumber(e.a)?{space:"RGB",r:e.r,g:e.g,b:e.b,a:e.a}:!1},write:function(e){return{r:e.r,g:e.g,b:e.b,a:e.a}}},RGB_OBJ:{read:function(e){return Common.isNumber(e.r)&&Common.isNumber(e.g)&&Common.isNumber(e.b)?{space:"RGB",r:e.r,g:e.g,b:e.b}:!1},write:function(e){return{r:e.r,g:e.g,b:e.b}}},HSVA_OBJ:{read:function(e){return Common.isNumber(e.h)&&Common.isNumber(e.s)&&Common.isNumber(e.v)&&Common.isNumber(e.a)?{space:"HSV",h:e.h,s:e.s,v:e.v,a:e.a}:!1},write:function(e){return{h:e.h,s:e.s,v:e.v,a:e.a}}},HSV_OBJ:{read:function(e){return Common.isNumber(e.h)&&Common.isNumber(e.s)&&Common.isNumber(e.v)?{space:"HSV",h:e.h,s:e.s,v:e.v}:!1},write:function(e){return{h:e.h,s:e.s,v:e.v}}}}}],result=void 0,toReturn=void 0,interpret=function(){toReturn=!1;var e=arguments.length>1?Common.toArray(arguments):arguments[0];return Common.each(INTERPRETATIONS,function(n){if(n.litmus(e))return Common.each(n.conversions,function(i,r){if(result=i.read(e),toReturn===!1&&result!==!1)return toReturn=result,result.conversionName=r,result.conversion=i,Common.BREAK}),Common.BREAK}),toReturn},tmpComponent=void 0,ColorMath={hsv_to_rgb:function(e,n,i){var r=Math.floor(e/60)%6,a=e/60-Math.floor(e/60),l=i*(1-n),o=i*(1-a*n),c=i*(1-(1-a)*n),u=[[i,c,l],[o,i,l],[l,i,c],[l,o,i],[c,l,i],[i,l,o]][r];return{r:u[0]*255,g:u[1]*255,b:u[2]*255}},rgb_to_hsv:function(e,n,i){var r=Math.min(e,n,i),a=Math.max(e,n,i),l=a-r,o=void 0,c=void 0;if(a!==0)c=l/a;else return{h:NaN,s:0,v:0};return e===a?o=(n-i)/l:n===a?o=2+(i-e)/l:o=4+(e-n)/l,o/=6,o<0&&(o+=1),{h:o*360,s:c,v:a/255}},rgb_to_hex:function(e,n,i){var r=this.hex_with_component(0,2,e);return r=this.hex_with_component(r,1,n),r=this.hex_with_component(r,0,i),r},component_from_hex:function(e,n){return e>>n*8&255},hex_with_component:function(e,n,i){return i<<(tmpComponent=n*8)|e&~(255<<tmpComponent)}},_typeof=typeof Symbol=="function"&&typeof Symbol.iterator=="symbol"?function(s){return typeof s}:function(s){return s&&typeof Symbol=="function"&&s.constructor===Symbol&&s!==Symbol.prototype?"symbol":typeof s},classCallCheck=function(s,e){if(!(s instanceof e))throw new TypeError("Cannot call a class as a function")},createClass=function(){function s(e,n){for(var i=0;i<n.length;i++){var r=n[i];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}return function(e,n,i){return n&&s(e.prototype,n),i&&s(e,i),e}}(),get=function s(e,n,i){e===null&&(e=Function.prototype);var r=Object.getOwnPropertyDescriptor(e,n);if(r===void 0){var a=Object.getPrototypeOf(e);return a===null?void 0:s(a,n,i)}else{if("value"in r)return r.value;var l=r.get;return l===void 0?void 0:l.call(i)}},inherits=function(s,e){if(typeof e!="function"&&e!==null)throw new TypeError("Super expression must either be null or a function, not "+typeof e);s.prototype=Object.create(e&&e.prototype,{constructor:{value:s,enumerable:!1,writable:!0,configurable:!0}}),e&&(Object.setPrototypeOf?Object.setPrototypeOf(s,e):s.__proto__=e)},possibleConstructorReturn=function(s,e){if(!s)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e&&(typeof e=="object"||typeof e=="function")?e:s},Color=function(){function s(){if(classCallCheck(this,s),this.__state=interpret.apply(this,arguments),this.__state===!1)throw new Error("Failed to interpret color arguments");this.__state.a=this.__state.a||1}return createClass(s,[{key:"toString",value:function(){return colorToString(this)}},{key:"toHexString",value:function(){return colorToString(this,!0)}},{key:"toOriginal",value:function(){return this.__state.conversion.write(this)}}]),s}();function defineRGBComponent(s,e,n){Object.defineProperty(s,e,{get:function(){return this.__state.space==="RGB"?this.__state[e]:(Color.recalculateRGB(this,e,n),this.__state[e])},set:function(r){this.__state.space!=="RGB"&&(Color.recalculateRGB(this,e,n),this.__state.space="RGB"),this.__state[e]=r}})}function defineHSVComponent(s,e){Object.defineProperty(s,e,{get:function(){return this.__state.space==="HSV"?this.__state[e]:(Color.recalculateHSV(this),this.__state[e])},set:function(i){this.__state.space!=="HSV"&&(Color.recalculateHSV(this),this.__state.space="HSV"),this.__state[e]=i}})}Color.recalculateRGB=function(s,e,n){if(s.__state.space==="HEX")s.__state[e]=ColorMath.component_from_hex(s.__state.hex,n);else if(s.__state.space==="HSV")Common.extend(s.__state,ColorMath.hsv_to_rgb(s.__state.h,s.__state.s,s.__state.v));else throw new Error("Corrupted color state")};Color.recalculateHSV=function(s){var e=ColorMath.rgb_to_hsv(s.r,s.g,s.b);Common.extend(s.__state,{s:e.s,v:e.v}),Common.isNaN(e.h)?Common.isUndefined(s.__state.h)&&(s.__state.h=0):s.__state.h=e.h};Color.COMPONENTS=["r","g","b","h","s","v","hex","a"];defineRGBComponent(Color.prototype,"r",2);defineRGBComponent(Color.prototype,"g",1);defineRGBComponent(Color.prototype,"b",0);defineHSVComponent(Color.prototype,"h");defineHSVComponent(Color.prototype,"s");defineHSVComponent(Color.prototype,"v");Object.defineProperty(Color.prototype,"a",{get:function(){return this.__state.a},set:function(e){this.__state.a=e}});Object.defineProperty(Color.prototype,"hex",{get:function(){return this.__state.space!=="HEX"&&(this.__state.hex=ColorMath.rgb_to_hex(this.r,this.g,this.b),this.__state.space="HEX"),this.__state.hex},set:function(e){this.__state.space="HEX",this.__state.hex=e}});var Controller=function(){function s(e,n){classCallCheck(this,s),this.initialValue=e[n],this.domElement=document.createElement("div"),this.object=e,this.property=n,this.__onChange=void 0,this.__onFinishChange=void 0}return createClass(s,[{key:"onChange",value:function(n){return this.__onChange=n,this}},{key:"onFinishChange",value:function(n){return this.__onFinishChange=n,this}},{key:"setValue",value:function(n){return this.object[this.property]=n,this.__onChange&&this.__onChange.call(this,n),this.updateDisplay(),this}},{key:"getValue",value:function(){return this.object[this.property]}},{key:"updateDisplay",value:function(){return this}},{key:"isModified",value:function(){return this.initialValue!==this.getValue()}}]),s}(),EVENT_MAP={HTMLEvents:["change"],MouseEvents:["click","mousemove","mousedown","mouseup","mouseover"],KeyboardEvents:["keydown"]},EVENT_MAP_INV={};Common.each(EVENT_MAP,function(s,e){Common.each(s,function(n){EVENT_MAP_INV[n]=e})});var CSS_VALUE_PIXELS=/(\d+(\.\d+)?)px/;function cssValueToPixels(s){if(s==="0"||Common.isUndefined(s))return 0;var e=s.match(CSS_VALUE_PIXELS);return Common.isNull(e)?0:parseFloat(e[1])}var dom={makeSelectable:function(e,n){e===void 0||e.style===void 0||(e.onselectstart=n?function(){return!1}:function(){},e.style.MozUserSelect=n?"auto":"none",e.style.KhtmlUserSelect=n?"auto":"none",e.unselectable=n?"on":"off")},makeFullscreen:function(e,n,i){var r=i,a=n;Common.isUndefined(a)&&(a=!0),Common.isUndefined(r)&&(r=!0),e.style.position="absolute",a&&(e.style.left=0,e.style.right=0),r&&(e.style.top=0,e.style.bottom=0)},fakeEvent:function(e,n,i,r){var a=i||{},l=EVENT_MAP_INV[n];if(!l)throw new Error("Event type "+n+" not supported.");var o=document.createEvent(l);switch(l){case"MouseEvents":{var c=a.x||a.clientX||0,u=a.y||a.clientY||0;o.initMouseEvent(n,a.bubbles||!1,a.cancelable||!0,window,a.clickCount||1,0,0,c,u,!1,!1,!1,!1,0,null);break}case"KeyboardEvents":{var d=o.initKeyboardEvent||o.initKeyEvent;Common.defaults(a,{cancelable:!0,ctrlKey:!1,altKey:!1,shiftKey:!1,metaKey:!1,keyCode:void 0,charCode:void 0}),d(n,a.bubbles||!1,a.cancelable,window,a.ctrlKey,a.altKey,a.shiftKey,a.metaKey,a.keyCode,a.charCode);break}default:{o.initEvent(n,a.bubbles||!1,a.cancelable||!0);break}}Common.defaults(o,r),e.dispatchEvent(o)},bind:function(e,n,i,r){var a=r||!1;return e.addEventListener?e.addEventListener(n,i,a):e.attachEvent&&e.attachEvent("on"+n,i),dom},unbind:function(e,n,i,r){var a=r||!1;return e.removeEventListener?e.removeEventListener(n,i,a):e.detachEvent&&e.detachEvent("on"+n,i),dom},addClass:function(e,n){if(e.className===void 0)e.className=n;else if(e.className!==n){var i=e.className.split(/ +/);i.indexOf(n)===-1&&(i.push(n),e.className=i.join(" ").replace(/^\s+/,"").replace(/\s+$/,""))}return dom},removeClass:function(e,n){if(n)if(e.className===n)e.removeAttribute("class");else{var i=e.className.split(/ +/),r=i.indexOf(n);r!==-1&&(i.splice(r,1),e.className=i.join(" "))}else e.className=void 0;return dom},hasClass:function(e,n){return new RegExp("(?:^|\\s+)"+n+"(?:\\s+|$)").test(e.className)||!1},getWidth:function(e){var n=getComputedStyle(e);return cssValueToPixels(n["border-left-width"])+cssValueToPixels(n["border-right-width"])+cssValueToPixels(n["padding-left"])+cssValueToPixels(n["padding-right"])+cssValueToPixels(n.width)},getHeight:function(e){var n=getComputedStyle(e);return cssValueToPixels(n["border-top-width"])+cssValueToPixels(n["border-bottom-width"])+cssValueToPixels(n["padding-top"])+cssValueToPixels(n["padding-bottom"])+cssValueToPixels(n.height)},getOffset:function(e){var n=e,i={left:0,top:0};if(n.offsetParent)do i.left+=n.offsetLeft,i.top+=n.offsetTop,n=n.offsetParent;while(n);return i},isActive:function(e){return e===document.activeElement&&(e.type||e.href)}},BooleanController=function(s){inherits(e,s);function e(n,i){classCallCheck(this,e);var r=possibleConstructorReturn(this,(e.__proto__||Object.getPrototypeOf(e)).call(this,n,i)),a=r;r.__prev=r.getValue(),r.__checkbox=document.createElement("input"),r.__checkbox.setAttribute("type","checkbox");function l(){a.setValue(!a.__prev)}return dom.bind(r.__checkbox,"change",l,!1),r.domElement.appendChild(r.__checkbox),r.updateDisplay(),r}return createClass(e,[{key:"setValue",value:function(i){var r=get(e.prototype.__proto__||Object.getPrototypeOf(e.prototype),"setValue",this).call(this,i);return this.__onFinishChange&&this.__onFinishChange.call(this,this.getValue()),this.__prev=this.getValue(),r}},{key:"updateDisplay",value:function(){return this.getValue()===!0?(this.__checkbox.setAttribute("checked","checked"),this.__checkbox.checked=!0,this.__prev=!0):(this.__checkbox.checked=!1,this.__prev=!1),get(e.prototype.__proto__||Object.getPrototypeOf(e.prototype),"updateDisplay",this).call(this)}}]),e}(Controller),OptionController=function(s){inherits(e,s);function e(n,i,r){classCallCheck(this,e);var a=possibleConstructorReturn(this,(e.__proto__||Object.getPrototypeOf(e)).call(this,n,i)),l=r,o=a;if(a.__select=document.createElement("select"),Common.isArray(l)){var c={};Common.each(l,function(u){c[u]=u}),l=c}return Common.each(l,function(u,d){var f=document.createElement("option");f.innerHTML=d,f.setAttribute("value",u),o.__select.appendChild(f)}),a.updateDisplay(),dom.bind(a.__select,"change",function(){var u=this.options[this.selectedIndex].value;o.setValue(u)}),a.domElement.appendChild(a.__select),a}return createClass(e,[{key:"setValue",value:function(i){var r=get(e.prototype.__proto__||Object.getPrototypeOf(e.prototype),"setValue",this).call(this,i);return this.__onFinishChange&&this.__onFinishChange.call(this,this.getValue()),r}},{key:"updateDisplay",value:function(){return dom.isActive(this.__select)?this:(this.__select.value=this.getValue(),get(e.prototype.__proto__||Object.getPrototypeOf(e.prototype),"updateDisplay",this).call(this))}}]),e}(Controller),StringController=function(s){inherits(e,s);function e(n,i){classCallCheck(this,e);var r=possibleConstructorReturn(this,(e.__proto__||Object.getPrototypeOf(e)).call(this,n,i)),a=r;function l(){a.setValue(a.__input.value)}function o(){a.__onFinishChange&&a.__onFinishChange.call(a,a.getValue())}return r.__input=document.createElement("input"),r.__input.setAttribute("type","text"),dom.bind(r.__input,"keyup",l),dom.bind(r.__input,"change",l),dom.bind(r.__input,"blur",o),dom.bind(r.__input,"keydown",function(c){c.keyCode===13&&this.blur()}),r.updateDisplay(),r.domElement.appendChild(r.__input),r}return createClass(e,[{key:"updateDisplay",value:function(){return dom.isActive(this.__input)||(this.__input.value=this.getValue()),get(e.prototype.__proto__||Object.getPrototypeOf(e.prototype),"updateDisplay",this).call(this)}}]),e}(Controller);function numDecimals(s){var e=s.toString();return e.indexOf(".")>-1?e.length-e.indexOf(".")-1:0}var NumberController=function(s){inherits(e,s);function e(n,i,r){classCallCheck(this,e);var a=possibleConstructorReturn(this,(e.__proto__||Object.getPrototypeOf(e)).call(this,n,i)),l=r||{};return a.__min=l.min,a.__max=l.max,a.__step=l.step,Common.isUndefined(a.__step)?a.initialValue===0?a.__impliedStep=1:a.__impliedStep=Math.pow(10,Math.floor(Math.log(Math.abs(a.initialValue))/Math.LN10))/10:a.__impliedStep=a.__step,a.__precision=numDecimals(a.__impliedStep),a}return createClass(e,[{key:"setValue",value:function(i){var r=i;return this.__min!==void 0&&r<this.__min?r=this.__min:this.__max!==void 0&&r>this.__max&&(r=this.__max),this.__step!==void 0&&r%this.__step!==0&&(r=Math.round(r/this.__step)*this.__step),get(e.prototype.__proto__||Object.getPrototypeOf(e.prototype),"setValue",this).call(this,r)}},{key:"min",value:function(i){return this.__min=i,this}},{key:"max",value:function(i){return this.__max=i,this}},{key:"step",value:function(i){return this.__step=i,this.__impliedStep=i,this.__precision=numDecimals(i),this}}]),e}(Controller);function roundToDecimal(s,e){var n=Math.pow(10,e);return Math.round(s*n)/n}var NumberControllerBox=function(s){inherits(e,s);function e(n,i,r){classCallCheck(this,e);var a=possibleConstructorReturn(this,(e.__proto__||Object.getPrototypeOf(e)).call(this,n,i,r));a.__truncationSuspended=!1;var l=a,o=void 0;function c(){var v=parseFloat(l.__input.value);Common.isNaN(v)||l.setValue(v)}function u(){l.__onFinishChange&&l.__onFinishChange.call(l,l.getValue())}function d(){u()}function f(v){var m=o-v.clientY;l.setValue(l.getValue()+m*l.__impliedStep),o=v.clientY}function h(){dom.unbind(window,"mousemove",f),dom.unbind(window,"mouseup",h),u()}function _(v){dom.bind(window,"mousemove",f),dom.bind(window,"mouseup",h),o=v.clientY}return a.__input=document.createElement("input"),a.__input.setAttribute("type","text"),dom.bind(a.__input,"change",c),dom.bind(a.__input,"blur",d),dom.bind(a.__input,"mousedown",_),dom.bind(a.__input,"keydown",function(v){v.keyCode===13&&(l.__truncationSuspended=!0,this.blur(),l.__truncationSuspended=!1,u())}),a.updateDisplay(),a.domElement.appendChild(a.__input),a}return createClass(e,[{key:"updateDisplay",value:function(){return this.__input.value=this.__truncationSuspended?this.getValue():roundToDecimal(this.getValue(),this.__precision),get(e.prototype.__proto__||Object.getPrototypeOf(e.prototype),"updateDisplay",this).call(this)}}]),e}(NumberController);function map(s,e,n,i,r){return i+(r-i)*((s-e)/(n-e))}var NumberControllerSlider=function(s){inherits(e,s);function e(n,i,r,a,l){classCallCheck(this,e);var o=possibleConstructorReturn(this,(e.__proto__||Object.getPrototypeOf(e)).call(this,n,i,{min:r,max:a,step:l})),c=o;o.__background=document.createElement("div"),o.__foreground=document.createElement("div"),dom.bind(o.__background,"mousedown",u),dom.bind(o.__background,"touchstart",h),dom.addClass(o.__background,"slider"),dom.addClass(o.__foreground,"slider-fg");function u(m){document.activeElement.blur(),dom.bind(window,"mousemove",d),dom.bind(window,"mouseup",f),d(m)}function d(m){m.preventDefault();var p=c.__background.getBoundingClientRect();return c.setValue(map(m.clientX,p.left,p.right,c.__min,c.__max)),!1}function f(){dom.unbind(window,"mousemove",d),dom.unbind(window,"mouseup",f),c.__onFinishChange&&c.__onFinishChange.call(c,c.getValue())}function h(m){m.touches.length===1&&(dom.bind(window,"touchmove",_),dom.bind(window,"touchend",v),_(m))}function _(m){var p=m.touches[0].clientX,y=c.__background.getBoundingClientRect();c.setValue(map(p,y.left,y.right,c.__min,c.__max))}function v(){dom.unbind(window,"touchmove",_),dom.unbind(window,"touchend",v),c.__onFinishChange&&c.__onFinishChange.call(c,c.getValue())}return o.updateDisplay(),o.__background.appendChild(o.__foreground),o.domElement.appendChild(o.__background),o}return createClass(e,[{key:"updateDisplay",value:function(){var i=(this.getValue()-this.__min)/(this.__max-this.__min);return this.__foreground.style.width=i*100+"%",get(e.prototype.__proto__||Object.getPrototypeOf(e.prototype),"updateDisplay",this).call(this)}}]),e}(NumberController),FunctionController=function(s){inherits(e,s);function e(n,i,r){classCallCheck(this,e);var a=possibleConstructorReturn(this,(e.__proto__||Object.getPrototypeOf(e)).call(this,n,i)),l=a;return a.__button=document.createElement("div"),a.__button.innerHTML=r===void 0?"Fire":r,dom.bind(a.__button,"click",function(o){return o.preventDefault(),l.fire(),!1}),dom.addClass(a.__button,"button"),a.domElement.appendChild(a.__button),a}return createClass(e,[{key:"fire",value:function(){this.__onChange&&this.__onChange.call(this),this.getValue().call(this.object),this.__onFinishChange&&this.__onFinishChange.call(this,this.getValue())}}]),e}(Controller),ColorController=function(s){inherits(e,s);function e(n,i){classCallCheck(this,e);var r=possibleConstructorReturn(this,(e.__proto__||Object.getPrototypeOf(e)).call(this,n,i));r.__color=new Color(r.getValue()),r.__temp=new Color(0);var a=r;r.domElement=document.createElement("div"),dom.makeSelectable(r.domElement,!1),r.__selector=document.createElement("div"),r.__selector.className="selector",r.__saturation_field=document.createElement("div"),r.__saturation_field.className="saturation-field",r.__field_knob=document.createElement("div"),r.__field_knob.className="field-knob",r.__field_knob_border="2px solid ",r.__hue_knob=document.createElement("div"),r.__hue_knob.className="hue-knob",r.__hue_field=document.createElement("div"),r.__hue_field.className="hue-field",r.__input=document.createElement("input"),r.__input.type="text",r.__input_textShadow="0 1px 1px ",dom.bind(r.__input,"keydown",function(m){m.keyCode===13&&f.call(this)}),dom.bind(r.__input,"blur",f),dom.bind(r.__selector,"mousedown",function(){dom.addClass(this,"drag").bind(window,"mouseup",function(){dom.removeClass(a.__selector,"drag")})}),dom.bind(r.__selector,"touchstart",function(){dom.addClass(this,"drag").bind(window,"touchend",function(){dom.removeClass(a.__selector,"drag")})});var l=document.createElement("div");Common.extend(r.__selector.style,{width:"122px",height:"102px",padding:"3px",backgroundColor:"#222",boxShadow:"0px 1px 3px rgba(0,0,0,0.3)"}),Common.extend(r.__field_knob.style,{position:"absolute",width:"12px",height:"12px",border:r.__field_knob_border+(r.__color.v<.5?"#fff":"#000"),boxShadow:"0px 1px 3px rgba(0,0,0,0.5)",borderRadius:"12px",zIndex:1}),Common.extend(r.__hue_knob.style,{position:"absolute",width:"15px",height:"2px",borderRight:"4px solid #fff",zIndex:1}),Common.extend(r.__saturation_field.style,{width:"100px",height:"100px",border:"1px solid #555",marginRight:"3px",display:"inline-block",cursor:"pointer"}),Common.extend(l.style,{width:"100%",height:"100%",background:"none"}),linearGradient(l,"top","rgba(0,0,0,0)","#000"),Common.extend(r.__hue_field.style,{width:"15px",height:"100px",border:"1px solid #555",cursor:"ns-resize",position:"absolute",top:"3px",right:"3px"}),hueGradient(r.__hue_field),Common.extend(r.__input.style,{outline:"none",textAlign:"center",color:"#fff",border:0,fontWeight:"bold",textShadow:r.__input_textShadow+"rgba(0,0,0,0.7)"}),dom.bind(r.__saturation_field,"mousedown",o),dom.bind(r.__saturation_field,"touchstart",o),dom.bind(r.__field_knob,"mousedown",o),dom.bind(r.__field_knob,"touchstart",o),dom.bind(r.__hue_field,"mousedown",c),dom.bind(r.__hue_field,"touchstart",c);function o(m){_(m),dom.bind(window,"mousemove",_),dom.bind(window,"touchmove",_),dom.bind(window,"mouseup",u),dom.bind(window,"touchend",u)}function c(m){v(m),dom.bind(window,"mousemove",v),dom.bind(window,"touchmove",v),dom.bind(window,"mouseup",d),dom.bind(window,"touchend",d)}function u(){dom.unbind(window,"mousemove",_),dom.unbind(window,"touchmove",_),dom.unbind(window,"mouseup",u),dom.unbind(window,"touchend",u),h()}function d(){dom.unbind(window,"mousemove",v),dom.unbind(window,"touchmove",v),dom.unbind(window,"mouseup",d),dom.unbind(window,"touchend",d),h()}function f(){var m=interpret(this.value);m!==!1?(a.__color.__state=m,a.setValue(a.__color.toOriginal())):this.value=a.__color.toString()}function h(){a.__onFinishChange&&a.__onFinishChange.call(a,a.__color.toOriginal())}r.__saturation_field.appendChild(l),r.__selector.appendChild(r.__field_knob),r.__selector.appendChild(r.__saturation_field),r.__selector.appendChild(r.__hue_field),r.__hue_field.appendChild(r.__hue_knob),r.domElement.appendChild(r.__input),r.domElement.appendChild(r.__selector),r.updateDisplay();function _(m){m.type.indexOf("touch")===-1&&m.preventDefault();var p=a.__saturation_field.getBoundingClientRect(),y=m.touches&&m.touches[0]||m,C=y.clientX,w=y.clientY,A=(C-p.left)/(p.right-p.left),M=1-(w-p.top)/(p.bottom-p.top);return M>1?M=1:M<0&&(M=0),A>1?A=1:A<0&&(A=0),a.__color.v=M,a.__color.s=A,a.setValue(a.__color.toOriginal()),!1}function v(m){m.type.indexOf("touch")===-1&&m.preventDefault();var p=a.__hue_field.getBoundingClientRect(),y=m.touches&&m.touches[0]||m,C=y.clientY,w=1-(C-p.top)/(p.bottom-p.top);return w>1?w=1:w<0&&(w=0),a.__color.h=w*360,a.setValue(a.__color.toOriginal()),!1}return r}return createClass(e,[{key:"updateDisplay",value:function(){var i=interpret(this.getValue());if(i!==!1){var r=!1;Common.each(Color.COMPONENTS,function(o){if(!Common.isUndefined(i[o])&&!Common.isUndefined(this.__color.__state[o])&&i[o]!==this.__color.__state[o])return r=!0,{}},this),r&&Common.extend(this.__color.__state,i)}Common.extend(this.__temp.__state,this.__color.__state),this.__temp.a=1;var a=this.__color.v<.5||this.__color.s>.5?255:0,l=255-a;Common.extend(this.__field_knob.style,{marginLeft:100*this.__color.s-7+"px",marginTop:100*(1-this.__color.v)-7+"px",backgroundColor:this.__temp.toHexString(),border:this.__field_knob_border+"rgb("+a+","+a+","+a+")"}),this.__hue_knob.style.marginTop=(1-this.__color.h/360)*100+"px",this.__temp.s=1,this.__temp.v=1,linearGradient(this.__saturation_field,"left","#fff",this.__temp.toHexString()),this.__input.value=this.__color.toString(),Common.extend(this.__input.style,{backgroundColor:this.__color.toHexString(),color:"rgb("+a+","+a+","+a+")",textShadow:this.__input_textShadow+"rgba("+l+","+l+","+l+",.7)"})}}]),e}(Controller),vendors=["-moz-","-o-","-webkit-","-ms-",""];function linearGradient(s,e,n,i){s.style.background="",Common.each(vendors,function(r){s.style.cssText+="background: "+r+"linear-gradient("+e+", "+n+" 0%, "+i+" 100%); "})}function hueGradient(s){s.style.background="",s.style.cssText+="background: -moz-linear-gradient(top,  #ff0000 0%, #ff00ff 17%, #0000ff 34%, #00ffff 50%, #00ff00 67%, #ffff00 84%, #ff0000 100%);",s.style.cssText+="background: -webkit-linear-gradient(top,  #ff0000 0%,#ff00ff 17%,#0000ff 34%,#00ffff 50%,#00ff00 67%,#ffff00 84%,#ff0000 100%);",s.style.cssText+="background: -o-linear-gradient(top,  #ff0000 0%,#ff00ff 17%,#0000ff 34%,#00ffff 50%,#00ff00 67%,#ffff00 84%,#ff0000 100%);",s.style.cssText+="background: -ms-linear-gradient(top,  #ff0000 0%,#ff00ff 17%,#0000ff 34%,#00ffff 50%,#00ff00 67%,#ffff00 84%,#ff0000 100%);",s.style.cssText+="background: linear-gradient(top,  #ff0000 0%,#ff00ff 17%,#0000ff 34%,#00ffff 50%,#00ff00 67%,#ffff00 84%,#ff0000 100%);"}var css={load:function(e,n){var i=n||document,r=i.createElement("link");r.type="text/css",r.rel="stylesheet",r.href=e,i.getElementsByTagName("head")[0].appendChild(r)},inject:function(e,n){var i=n||document,r=document.createElement("style");r.type="text/css",r.innerHTML=e;var a=i.getElementsByTagName("head")[0];try{a.appendChild(r)}catch{}}},saveDialogContents=`<div id="dg-save" class="dg dialogue">

  Here's the new load parameter for your <code>GUI</code>'s constructor:

  <textarea id="dg-new-constructor"></textarea>

  <div id="dg-save-locally">

    <input id="dg-local-storage" type="checkbox"/> Automatically save
    values to <code>localStorage</code> on exit.

    <div id="dg-local-explain">The values saved to <code>localStorage</code> will
      override those passed to <code>dat.GUI</code>'s constructor. This makes it
      easier to work incrementally, but <code>localStorage</code> is fragile,
      and your friends may not see the same values you do.

    </div>

  </div>

</div>`,ControllerFactory=function(e,n){var i=e[n];return Common.isArray(arguments[2])||Common.isObject(arguments[2])?new OptionController(e,n,arguments[2]):Common.isNumber(i)?Common.isNumber(arguments[2])&&Common.isNumber(arguments[3])?Common.isNumber(arguments[4])?new NumberControllerSlider(e,n,arguments[2],arguments[3],arguments[4]):new NumberControllerSlider(e,n,arguments[2],arguments[3]):Common.isNumber(arguments[4])?new NumberControllerBox(e,n,{min:arguments[2],max:arguments[3],step:arguments[4]}):new NumberControllerBox(e,n,{min:arguments[2],max:arguments[3]}):Common.isString(i)?new StringController(e,n):Common.isFunction(i)?new FunctionController(e,n,""):Common.isBoolean(i)?new BooleanController(e,n):null};function requestAnimationFrame$1(s){setTimeout(s,1e3/60)}var requestAnimationFrame$1$1=window.requestAnimationFrame||window.webkitRequestAnimationFrame||window.mozRequestAnimationFrame||window.oRequestAnimationFrame||window.msRequestAnimationFrame||requestAnimationFrame$1,CenteredDiv=function(){function s(){classCallCheck(this,s),this.backgroundElement=document.createElement("div"),Common.extend(this.backgroundElement.style,{backgroundColor:"rgba(0,0,0,0.8)",top:0,left:0,display:"none",zIndex:"1000",opacity:0,WebkitTransition:"opacity 0.2s linear",transition:"opacity 0.2s linear"}),dom.makeFullscreen(this.backgroundElement),this.backgroundElement.style.position="fixed",this.domElement=document.createElement("div"),Common.extend(this.domElement.style,{position:"fixed",display:"none",zIndex:"1001",opacity:0,WebkitTransition:"-webkit-transform 0.2s ease-out, opacity 0.2s linear",transition:"transform 0.2s ease-out, opacity 0.2s linear"}),document.body.appendChild(this.backgroundElement),document.body.appendChild(this.domElement);var e=this;dom.bind(this.backgroundElement,"click",function(){e.hide()})}return createClass(s,[{key:"show",value:function(){var n=this;this.backgroundElement.style.display="block",this.domElement.style.display="block",this.domElement.style.opacity=0,this.domElement.style.webkitTransform="scale(1.1)",this.layout(),Common.defer(function(){n.backgroundElement.style.opacity=1,n.domElement.style.opacity=1,n.domElement.style.webkitTransform="scale(1)"})}},{key:"hide",value:function(){var n=this,i=function r(){n.domElement.style.display="none",n.backgroundElement.style.display="none",dom.unbind(n.domElement,"webkitTransitionEnd",r),dom.unbind(n.domElement,"transitionend",r),dom.unbind(n.domElement,"oTransitionEnd",r)};dom.bind(this.domElement,"webkitTransitionEnd",i),dom.bind(this.domElement,"transitionend",i),dom.bind(this.domElement,"oTransitionEnd",i),this.backgroundElement.style.opacity=0,this.domElement.style.opacity=0,this.domElement.style.webkitTransform="scale(1.1)"}},{key:"layout",value:function(){this.domElement.style.left=window.innerWidth/2-dom.getWidth(this.domElement)/2+"px",this.domElement.style.top=window.innerHeight/2-dom.getHeight(this.domElement)/2+"px"}}]),s}(),styleSheet=___$insertStyle(`.dg ul{list-style:none;margin:0;padding:0;width:100%;clear:both}.dg.ac{position:fixed;top:0;left:0;right:0;height:0;z-index:0}.dg:not(.ac) .main{overflow:hidden}.dg.main{-webkit-transition:opacity .1s linear;-o-transition:opacity .1s linear;-moz-transition:opacity .1s linear;transition:opacity .1s linear}.dg.main.taller-than-window{overflow-y:auto}.dg.main.taller-than-window .close-button{opacity:1;margin-top:-1px;border-top:1px solid #2c2c2c}.dg.main ul.closed .close-button{opacity:1 !important}.dg.main:hover .close-button,.dg.main .close-button.drag{opacity:1}.dg.main .close-button{-webkit-transition:opacity .1s linear;-o-transition:opacity .1s linear;-moz-transition:opacity .1s linear;transition:opacity .1s linear;border:0;line-height:19px;height:20px;cursor:pointer;text-align:center;background-color:#000}.dg.main .close-button.close-top{position:relative}.dg.main .close-button.close-bottom{position:absolute}.dg.main .close-button:hover{background-color:#111}.dg.a{float:right;margin-right:15px;overflow-y:visible}.dg.a.has-save>ul.close-top{margin-top:0}.dg.a.has-save>ul.close-bottom{margin-top:27px}.dg.a.has-save>ul.closed{margin-top:0}.dg.a .save-row{top:0;z-index:1002}.dg.a .save-row.close-top{position:relative}.dg.a .save-row.close-bottom{position:fixed}.dg li{-webkit-transition:height .1s ease-out;-o-transition:height .1s ease-out;-moz-transition:height .1s ease-out;transition:height .1s ease-out;-webkit-transition:overflow .1s linear;-o-transition:overflow .1s linear;-moz-transition:overflow .1s linear;transition:overflow .1s linear}.dg li:not(.folder){cursor:auto;height:27px;line-height:27px;padding:0 4px 0 5px}.dg li.folder{padding:0;border-left:4px solid rgba(0,0,0,0)}.dg li.title{cursor:pointer;margin-left:-4px}.dg .closed li:not(.title),.dg .closed ul li,.dg .closed ul li>*{height:0;overflow:hidden;border:0}.dg .cr{clear:both;padding-left:3px;height:27px;overflow:hidden}.dg .property-name{cursor:default;float:left;clear:left;width:40%;overflow:hidden;text-overflow:ellipsis}.dg .cr.function .property-name{width:100%}.dg .c{float:left;width:60%;position:relative}.dg .c input[type=text]{border:0;margin-top:4px;padding:3px;width:100%;float:right}.dg .has-slider input[type=text]{width:30%;margin-left:0}.dg .slider{float:left;width:66%;margin-left:-5px;margin-right:0;height:19px;margin-top:4px}.dg .slider-fg{height:100%}.dg .c input[type=checkbox]{margin-top:7px}.dg .c select{margin-top:5px}.dg .cr.function,.dg .cr.function .property-name,.dg .cr.function *,.dg .cr.boolean,.dg .cr.boolean *{cursor:pointer}.dg .cr.color{overflow:visible}.dg .selector{display:none;position:absolute;margin-left:-9px;margin-top:23px;z-index:10}.dg .c:hover .selector,.dg .selector.drag{display:block}.dg li.save-row{padding:0}.dg li.save-row .button{display:inline-block;padding:0px 6px}.dg.dialogue{background-color:#222;width:460px;padding:15px;font-size:13px;line-height:15px}#dg-new-constructor{padding:10px;color:#222;font-family:Monaco, monospace;font-size:10px;border:0;resize:none;box-shadow:inset 1px 1px 1px #888;word-wrap:break-word;margin:12px 0;display:block;width:440px;overflow-y:scroll;height:100px;position:relative}#dg-local-explain{display:none;font-size:11px;line-height:17px;border-radius:3px;background-color:#333;padding:8px;margin-top:10px}#dg-local-explain code{font-size:10px}#dat-gui-save-locally{display:none}.dg{color:#eee;font:11px 'Lucida Grande', sans-serif;text-shadow:0 -1px 0 #111}.dg.main::-webkit-scrollbar{width:5px;background:#1a1a1a}.dg.main::-webkit-scrollbar-corner{height:0;display:none}.dg.main::-webkit-scrollbar-thumb{border-radius:5px;background:#676767}.dg li:not(.folder){background:#1a1a1a;border-bottom:1px solid #2c2c2c}.dg li.save-row{line-height:25px;background:#dad5cb;border:0}.dg li.save-row select{margin-left:5px;width:108px}.dg li.save-row .button{margin-left:5px;margin-top:1px;border-radius:2px;font-size:9px;line-height:7px;padding:4px 4px 5px 4px;background:#c5bdad;color:#fff;text-shadow:0 1px 0 #b0a58f;box-shadow:0 -1px 0 #b0a58f;cursor:pointer}.dg li.save-row .button.gears{background:#c5bdad url(data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAsAAAANCAYAAAB/9ZQ7AAAAGXRFWHRTb2Z0d2FyZQBBZG9iZSBJbWFnZVJlYWR5ccllPAAAAQJJREFUeNpiYKAU/P//PwGIC/ApCABiBSAW+I8AClAcgKxQ4T9hoMAEUrxx2QSGN6+egDX+/vWT4e7N82AMYoPAx/evwWoYoSYbACX2s7KxCxzcsezDh3evFoDEBYTEEqycggWAzA9AuUSQQgeYPa9fPv6/YWm/Acx5IPb7ty/fw+QZblw67vDs8R0YHyQhgObx+yAJkBqmG5dPPDh1aPOGR/eugW0G4vlIoTIfyFcA+QekhhHJhPdQxbiAIguMBTQZrPD7108M6roWYDFQiIAAv6Aow/1bFwXgis+f2LUAynwoIaNcz8XNx3Dl7MEJUDGQpx9gtQ8YCueB+D26OECAAQDadt7e46D42QAAAABJRU5ErkJggg==) 2px 1px no-repeat;height:7px;width:8px}.dg li.save-row .button:hover{background-color:#bab19e;box-shadow:0 -1px 0 #b0a58f}.dg li.folder{border-bottom:0}.dg li.title{padding-left:16px;background:#000 url(data:image/gif;base64,R0lGODlhBQAFAJEAAP////Pz8////////yH5BAEAAAIALAAAAAAFAAUAAAIIlI+hKgFxoCgAOw==) 6px 10px no-repeat;cursor:pointer;border-bottom:1px solid rgba(255,255,255,0.2)}.dg .closed li.title{background-image:url(data:image/gif;base64,R0lGODlhBQAFAJEAAP////Pz8////////yH5BAEAAAIALAAAAAAFAAUAAAIIlGIWqMCbWAEAOw==)}.dg .cr.boolean{border-left:3px solid #806787}.dg .cr.color{border-left:3px solid}.dg .cr.function{border-left:3px solid #e61d5f}.dg .cr.number{border-left:3px solid #2FA1D6}.dg .cr.number input[type=text]{color:#2FA1D6}.dg .cr.string{border-left:3px solid #1ed36f}.dg .cr.string input[type=text]{color:#1ed36f}.dg .cr.function:hover,.dg .cr.boolean:hover{background:#111}.dg .c input[type=text]{background:#303030;outline:none}.dg .c input[type=text]:hover{background:#3c3c3c}.dg .c input[type=text]:focus{background:#494949;color:#fff}.dg .c .slider{background:#303030;cursor:ew-resize}.dg .c .slider-fg{background:#2FA1D6;max-width:100%}.dg .c .slider:hover{background:#3c3c3c}.dg .c .slider:hover .slider-fg{background:#44abda}
`);css.inject(styleSheet);var CSS_NAMESPACE="dg",HIDE_KEY_CODE=72,CLOSE_BUTTON_HEIGHT=20,DEFAULT_DEFAULT_PRESET_NAME="Default",SUPPORTS_LOCAL_STORAGE=function(){try{return!!window.localStorage}catch{return!1}}(),SAVE_DIALOGUE=void 0,autoPlaceVirgin=!0,autoPlaceContainer=void 0,hide=!1,hideableGuis=[],GUI=function s(e){var n=this,i=e||{};this.domElement=document.createElement("div"),this.__ul=document.createElement("ul"),this.domElement.appendChild(this.__ul),dom.addClass(this.domElement,CSS_NAMESPACE),this.__folders={},this.__controllers=[],this.__rememberedObjects=[],this.__rememberedObjectIndecesToControllers=[],this.__listening=[],i=Common.defaults(i,{closeOnTop:!1,autoPlace:!0,width:s.DEFAULT_WIDTH}),i=Common.defaults(i,{resizable:i.autoPlace,hideable:i.autoPlace}),Common.isUndefined(i.load)?i.load={preset:DEFAULT_DEFAULT_PRESET_NAME}:i.preset&&(i.load.preset=i.preset),Common.isUndefined(i.parent)&&i.hideable&&hideableGuis.push(this),i.resizable=Common.isUndefined(i.parent)&&i.resizable,i.autoPlace&&Common.isUndefined(i.scrollable)&&(i.scrollable=!0);var r=SUPPORTS_LOCAL_STORAGE&&localStorage.getItem(getLocalStorageHash(this,"isLocal"))==="true",a=void 0,l=void 0;if(Object.defineProperties(this,{parent:{get:function(){return i.parent}},scrollable:{get:function(){return i.scrollable}},autoPlace:{get:function(){return i.autoPlace}},closeOnTop:{get:function(){return i.closeOnTop}},preset:{get:function(){return n.parent?n.getRoot().preset:i.load.preset},set:function(h){n.parent?n.getRoot().preset=h:i.load.preset=h,setPresetSelectIndex(this),n.revert()}},width:{get:function(){return i.width},set:function(h){i.width=h,setWidth(n,h)}},name:{get:function(){return i.name},set:function(h){i.name=h,l&&(l.innerHTML=i.name)}},closed:{get:function(){return i.closed},set:function(h){i.closed=h,i.closed?dom.addClass(n.__ul,s.CLASS_CLOSED):dom.removeClass(n.__ul,s.CLASS_CLOSED),this.onResize(),n.__closeButton&&(n.__closeButton.innerHTML=h?s.TEXT_OPEN:s.TEXT_CLOSED)}},load:{get:function(){return i.load}},useLocalStorage:{get:function(){return r},set:function(h){SUPPORTS_LOCAL_STORAGE&&(r=h,h?dom.bind(window,"unload",a):dom.unbind(window,"unload",a),localStorage.setItem(getLocalStorageHash(n,"isLocal"),h))}}}),Common.isUndefined(i.parent)){if(this.closed=i.closed||!1,dom.addClass(this.domElement,s.CLASS_MAIN),dom.makeSelectable(this.domElement,!1),SUPPORTS_LOCAL_STORAGE&&r){n.useLocalStorage=!0;var o=localStorage.getItem(getLocalStorageHash(this,"gui"));o&&(i.load=JSON.parse(o))}this.__closeButton=document.createElement("div"),this.__closeButton.innerHTML=s.TEXT_CLOSED,dom.addClass(this.__closeButton,s.CLASS_CLOSE_BUTTON),i.closeOnTop?(dom.addClass(this.__closeButton,s.CLASS_CLOSE_TOP),this.domElement.insertBefore(this.__closeButton,this.domElement.childNodes[0])):(dom.addClass(this.__closeButton,s.CLASS_CLOSE_BOTTOM),this.domElement.appendChild(this.__closeButton)),dom.bind(this.__closeButton,"click",function(){n.closed=!n.closed})}else{i.closed===void 0&&(i.closed=!0);var c=document.createTextNode(i.name);dom.addClass(c,"controller-name"),l=addRow(n,c);var u=function(h){return h.preventDefault(),n.closed=!n.closed,!1};dom.addClass(this.__ul,s.CLASS_CLOSED),dom.addClass(l,"title"),dom.bind(l,"click",u),i.closed||(this.closed=!1)}i.autoPlace&&(Common.isUndefined(i.parent)&&(autoPlaceVirgin&&(autoPlaceContainer=document.createElement("div"),dom.addClass(autoPlaceContainer,CSS_NAMESPACE),dom.addClass(autoPlaceContainer,s.CLASS_AUTO_PLACE_CONTAINER),document.body.appendChild(autoPlaceContainer),autoPlaceVirgin=!1),autoPlaceContainer.appendChild(this.domElement),dom.addClass(this.domElement,s.CLASS_AUTO_PLACE)),this.parent||setWidth(n,i.width)),this.__resizeHandler=function(){n.onResizeDebounced()},dom.bind(window,"resize",this.__resizeHandler),dom.bind(this.__ul,"webkitTransitionEnd",this.__resizeHandler),dom.bind(this.__ul,"transitionend",this.__resizeHandler),dom.bind(this.__ul,"oTransitionEnd",this.__resizeHandler),this.onResize(),i.resizable&&addResizeHandle(this),a=function(){SUPPORTS_LOCAL_STORAGE&&localStorage.getItem(getLocalStorageHash(n,"isLocal"))==="true"&&localStorage.setItem(getLocalStorageHash(n,"gui"),JSON.stringify(n.getSaveObject()))},this.saveToLocalStorageIfPossible=a;function d(){var f=n.getRoot();f.width+=1,Common.defer(function(){f.width-=1})}i.parent||d()};GUI.toggleHide=function(){hide=!hide,Common.each(hideableGuis,function(s){s.domElement.style.display=hide?"none":""})};GUI.CLASS_AUTO_PLACE="a";GUI.CLASS_AUTO_PLACE_CONTAINER="ac";GUI.CLASS_MAIN="main";GUI.CLASS_CONTROLLER_ROW="cr";GUI.CLASS_TOO_TALL="taller-than-window";GUI.CLASS_CLOSED="closed";GUI.CLASS_CLOSE_BUTTON="close-button";GUI.CLASS_CLOSE_TOP="close-top";GUI.CLASS_CLOSE_BOTTOM="close-bottom";GUI.CLASS_DRAG="drag";GUI.DEFAULT_WIDTH=245;GUI.TEXT_CLOSED="Close Controls";GUI.TEXT_OPEN="Open Controls";GUI._keydownHandler=function(s){document.activeElement.type!=="text"&&(s.which===HIDE_KEY_CODE||s.keyCode===HIDE_KEY_CODE)&&GUI.toggleHide()};dom.bind(window,"keydown",GUI._keydownHandler,!1);Common.extend(GUI.prototype,{add:function(e,n){return _add(this,e,n,{factoryArgs:Array.prototype.slice.call(arguments,2)})},addColor:function(e,n){return _add(this,e,n,{color:!0})},remove:function(e){this.__ul.removeChild(e.__li),this.__controllers.splice(this.__controllers.indexOf(e),1);var n=this;Common.defer(function(){n.onResize()})},destroy:function(){if(this.parent)throw new Error("Only the root GUI should be removed with .destroy(). For subfolders, use gui.removeFolder(folder) instead.");this.autoPlace&&autoPlaceContainer.removeChild(this.domElement);var e=this;Common.each(this.__folders,function(n){e.removeFolder(n)}),dom.unbind(window,"keydown",GUI._keydownHandler,!1),removeListeners(this)},addFolder:function(e){if(this.__folders[e]!==void 0)throw new Error('You already have a folder in this GUI by the name "'+e+'"');var n={name:e,parent:this};n.autoPlace=this.autoPlace,this.load&&this.load.folders&&this.load.folders[e]&&(n.closed=this.load.folders[e].closed,n.load=this.load.folders[e]);var i=new GUI(n);this.__folders[e]=i;var r=addRow(this,i.domElement);return dom.addClass(r,"folder"),i},removeFolder:function(e){this.__ul.removeChild(e.domElement.parentElement),delete this.__folders[e.name],this.load&&this.load.folders&&this.load.folders[e.name]&&delete this.load.folders[e.name],removeListeners(e);var n=this;Common.each(e.__folders,function(i){e.removeFolder(i)}),Common.defer(function(){n.onResize()})},open:function(){this.closed=!1},close:function(){this.closed=!0},hide:function(){this.domElement.style.display="none"},show:function(){this.domElement.style.display=""},onResize:function(){var e=this.getRoot();if(e.scrollable){var n=dom.getOffset(e.__ul).top,i=0;Common.each(e.__ul.childNodes,function(r){e.autoPlace&&r===e.__save_row||(i+=dom.getHeight(r))}),window.innerHeight-n-CLOSE_BUTTON_HEIGHT<i?(dom.addClass(e.domElement,GUI.CLASS_TOO_TALL),e.__ul.style.height=window.innerHeight-n-CLOSE_BUTTON_HEIGHT+"px"):(dom.removeClass(e.domElement,GUI.CLASS_TOO_TALL),e.__ul.style.height="auto")}e.__resize_handle&&Common.defer(function(){e.__resize_handle.style.height=e.__ul.offsetHeight+"px"}),e.__closeButton&&(e.__closeButton.style.width=e.width+"px")},onResizeDebounced:Common.debounce(function(){this.onResize()},50),remember:function(){if(Common.isUndefined(SAVE_DIALOGUE)&&(SAVE_DIALOGUE=new CenteredDiv,SAVE_DIALOGUE.domElement.innerHTML=saveDialogContents),this.parent)throw new Error("You can only call remember on a top level GUI.");var e=this;Common.each(Array.prototype.slice.call(arguments),function(n){e.__rememberedObjects.length===0&&addSaveMenu(e),e.__rememberedObjects.indexOf(n)===-1&&e.__rememberedObjects.push(n)}),this.autoPlace&&setWidth(this,this.width)},getRoot:function(){for(var e=this;e.parent;)e=e.parent;return e},getSaveObject:function(){var e=this.load;return e.closed=this.closed,this.__rememberedObjects.length>0&&(e.preset=this.preset,e.remembered||(e.remembered={}),e.remembered[this.preset]=getCurrentPreset(this)),e.folders={},Common.each(this.__folders,function(n,i){e.folders[i]=n.getSaveObject()}),e},save:function(){this.load.remembered||(this.load.remembered={}),this.load.remembered[this.preset]=getCurrentPreset(this),markPresetModified(this,!1),this.saveToLocalStorageIfPossible()},saveAs:function(e){this.load.remembered||(this.load.remembered={},this.load.remembered[DEFAULT_DEFAULT_PRESET_NAME]=getCurrentPreset(this,!0)),this.load.remembered[e]=getCurrentPreset(this),this.preset=e,addPresetOption(this,e,!0),this.saveToLocalStorageIfPossible()},revert:function(e){Common.each(this.__controllers,function(n){this.getRoot().load.remembered?recallSavedValue(e||this.getRoot(),n):n.setValue(n.initialValue),n.__onFinishChange&&n.__onFinishChange.call(n,n.getValue())},this),Common.each(this.__folders,function(n){n.revert(n)}),e||markPresetModified(this.getRoot(),!1)},listen:function(e){var n=this.__listening.length===0;this.__listening.push(e),n&&updateDisplays(this.__listening)},updateDisplay:function(){Common.each(this.__controllers,function(e){e.updateDisplay()}),Common.each(this.__folders,function(e){e.updateDisplay()})}});function addRow(s,e,n){var i=document.createElement("li");return e&&i.appendChild(e),n?s.__ul.insertBefore(i,n):s.__ul.appendChild(i),s.onResize(),i}function removeListeners(s){dom.unbind(window,"resize",s.__resizeHandler),s.saveToLocalStorageIfPossible&&dom.unbind(window,"unload",s.saveToLocalStorageIfPossible)}function markPresetModified(s,e){var n=s.__preset_select[s.__preset_select.selectedIndex];e?n.innerHTML=n.value+"*":n.innerHTML=n.value}function augmentController(s,e,n){if(n.__li=e,n.__gui=s,Common.extend(n,{options:function(l){if(arguments.length>1){var o=n.__li.nextElementSibling;return n.remove(),_add(s,n.object,n.property,{before:o,factoryArgs:[Common.toArray(arguments)]})}if(Common.isArray(l)||Common.isObject(l)){var c=n.__li.nextElementSibling;return n.remove(),_add(s,n.object,n.property,{before:c,factoryArgs:[l]})}},name:function(l){return n.__li.firstElementChild.firstElementChild.innerHTML=l,n},listen:function(){return n.__gui.listen(n),n},remove:function(){return n.__gui.remove(n),n}}),n instanceof NumberControllerSlider){var i=new NumberControllerBox(n.object,n.property,{min:n.__min,max:n.__max,step:n.__step});Common.each(["updateDisplay","onChange","onFinishChange","step","min","max"],function(a){var l=n[a],o=i[a];n[a]=i[a]=function(){var c=Array.prototype.slice.call(arguments);return o.apply(i,c),l.apply(n,c)}}),dom.addClass(e,"has-slider"),n.domElement.insertBefore(i.domElement,n.domElement.firstElementChild)}else if(n instanceof NumberControllerBox){var r=function(l){if(Common.isNumber(n.__min)&&Common.isNumber(n.__max)){var o=n.__li.firstElementChild.firstElementChild.innerHTML,c=n.__gui.__listening.indexOf(n)>-1;n.remove();var u=_add(s,n.object,n.property,{before:n.__li.nextElementSibling,factoryArgs:[n.__min,n.__max,n.__step]});return u.name(o),c&&u.listen(),u}return l};n.min=Common.compose(r,n.min),n.max=Common.compose(r,n.max)}else n instanceof BooleanController?(dom.bind(e,"click",function(){dom.fakeEvent(n.__checkbox,"click")}),dom.bind(n.__checkbox,"click",function(a){a.stopPropagation()})):n instanceof FunctionController?(dom.bind(e,"click",function(){dom.fakeEvent(n.__button,"click")}),dom.bind(e,"mouseover",function(){dom.addClass(n.__button,"hover")}),dom.bind(e,"mouseout",function(){dom.removeClass(n.__button,"hover")})):n instanceof ColorController&&(dom.addClass(e,"color"),n.updateDisplay=Common.compose(function(a){return e.style.borderLeftColor=n.__color.toString(),a},n.updateDisplay),n.updateDisplay());n.setValue=Common.compose(function(a){return s.getRoot().__preset_select&&n.isModified()&&markPresetModified(s.getRoot(),!0),a},n.setValue)}function recallSavedValue(s,e){var n=s.getRoot(),i=n.__rememberedObjects.indexOf(e.object);if(i!==-1){var r=n.__rememberedObjectIndecesToControllers[i];if(r===void 0&&(r={},n.__rememberedObjectIndecesToControllers[i]=r),r[e.property]=e,n.load&&n.load.remembered){var a=n.load.remembered,l=void 0;if(a[s.preset])l=a[s.preset];else if(a[DEFAULT_DEFAULT_PRESET_NAME])l=a[DEFAULT_DEFAULT_PRESET_NAME];else return;if(l[i]&&l[i][e.property]!==void 0){var o=l[i][e.property];e.initialValue=o,e.setValue(o)}}}}function _add(s,e,n,i){if(e[n]===void 0)throw new Error('Object "'+e+'" has no property "'+n+'"');var r=void 0;if(i.color)r=new ColorController(e,n);else{var a=[e,n].concat(i.factoryArgs);r=ControllerFactory.apply(s,a)}i.before instanceof Controller&&(i.before=i.before.__li),recallSavedValue(s,r),dom.addClass(r.domElement,"c");var l=document.createElement("span");dom.addClass(l,"property-name"),l.innerHTML=r.property;var o=document.createElement("div");o.appendChild(l),o.appendChild(r.domElement);var c=addRow(s,o,i.before);return dom.addClass(c,GUI.CLASS_CONTROLLER_ROW),r instanceof ColorController?dom.addClass(c,"color"):dom.addClass(c,_typeof(r.getValue())),augmentController(s,c,r),s.__controllers.push(r),r}function getLocalStorageHash(s,e){return document.location.href+"."+e}function addPresetOption(s,e,n){var i=document.createElement("option");i.innerHTML=e,i.value=e,s.__preset_select.appendChild(i),n&&(s.__preset_select.selectedIndex=s.__preset_select.length-1)}function showHideExplain(s,e){e.style.display=s.useLocalStorage?"block":"none"}function addSaveMenu(s){var e=s.__save_row=document.createElement("li");dom.addClass(s.domElement,"has-save"),s.__ul.insertBefore(e,s.__ul.firstChild),dom.addClass(e,"save-row");var n=document.createElement("span");n.innerHTML="&nbsp;",dom.addClass(n,"button gears");var i=document.createElement("span");i.innerHTML="Save",dom.addClass(i,"button"),dom.addClass(i,"save");var r=document.createElement("span");r.innerHTML="New",dom.addClass(r,"button"),dom.addClass(r,"save-as");var a=document.createElement("span");a.innerHTML="Revert",dom.addClass(a,"button"),dom.addClass(a,"revert");var l=s.__preset_select=document.createElement("select");if(s.load&&s.load.remembered?Common.each(s.load.remembered,function(f,h){addPresetOption(s,h,h===s.preset)}):addPresetOption(s,DEFAULT_DEFAULT_PRESET_NAME,!1),dom.bind(l,"change",function(){for(var f=0;f<s.__preset_select.length;f++)s.__preset_select[f].innerHTML=s.__preset_select[f].value;s.preset=this.value}),e.appendChild(l),e.appendChild(n),e.appendChild(i),e.appendChild(r),e.appendChild(a),SUPPORTS_LOCAL_STORAGE){var o=document.getElementById("dg-local-explain"),c=document.getElementById("dg-local-storage"),u=document.getElementById("dg-save-locally");u.style.display="block",localStorage.getItem(getLocalStorageHash(s,"isLocal"))==="true"&&c.setAttribute("checked","checked"),showHideExplain(s,o),dom.bind(c,"change",function(){s.useLocalStorage=!s.useLocalStorage,showHideExplain(s,o)})}var d=document.getElementById("dg-new-constructor");dom.bind(d,"keydown",function(f){f.metaKey&&(f.which===67||f.keyCode===67)&&SAVE_DIALOGUE.hide()}),dom.bind(n,"click",function(){d.innerHTML=JSON.stringify(s.getSaveObject(),void 0,2),SAVE_DIALOGUE.show(),d.focus(),d.select()}),dom.bind(i,"click",function(){s.save()}),dom.bind(r,"click",function(){var f=prompt("Enter a new preset name.");f&&s.saveAs(f)}),dom.bind(a,"click",function(){s.revert()})}function addResizeHandle(s){var e=void 0;s.__resize_handle=document.createElement("div"),Common.extend(s.__resize_handle.style,{width:"6px",marginLeft:"-3px",height:"200px",cursor:"ew-resize",position:"absolute"});function n(a){return a.preventDefault(),s.width+=e-a.clientX,s.onResize(),e=a.clientX,!1}function i(){dom.removeClass(s.__closeButton,GUI.CLASS_DRAG),dom.unbind(window,"mousemove",n),dom.unbind(window,"mouseup",i)}function r(a){return a.preventDefault(),e=a.clientX,dom.addClass(s.__closeButton,GUI.CLASS_DRAG),dom.bind(window,"mousemove",n),dom.bind(window,"mouseup",i),!1}dom.bind(s.__resize_handle,"mousedown",r),dom.bind(s.__closeButton,"mousedown",r),s.domElement.insertBefore(s.__resize_handle,s.domElement.firstElementChild)}function setWidth(s,e){s.domElement.style.width=e+"px",s.__save_row&&s.autoPlace&&(s.__save_row.style.width=e+"px"),s.__closeButton&&(s.__closeButton.style.width=e+"px")}function getCurrentPreset(s,e){var n={};return Common.each(s.__rememberedObjects,function(i,r){var a={},l=s.__rememberedObjectIndecesToControllers[r];Common.each(l,function(o,c){a[c]=e?o.initialValue:o.getValue()}),n[r]=a}),n}function setPresetSelectIndex(s){for(var e=0;e<s.__preset_select.length;e++)s.__preset_select[e].value===s.preset&&(s.__preset_select.selectedIndex=e)}function updateDisplays(s){s.length!==0&&requestAnimationFrame$1$1.call(window,function(){updateDisplays(s)}),Common.each(s,function(e){e.updateDisplay()})}var GUI$1=GUI;function translate(expression){let trig={cos:"Math.cos",sin:"Math.sin",tan:"Math.tan"};for(const[s,e]of Object.entries(trig))expression=expression.replace(s,e);let outputFunction=eval("(x, t) => {return "+expression+"}");return outputFunction}const scene=new Scene,camera=new PerspectiveCamera(70,window.innerWidth/window.innerHeight,.1,1e3),renderer=new WebGLRenderer({canvas:document.querySelector("#bg")});scene.background=new Color$1(0);renderer.setPixelRatio(window.devicePixelRatio);renderer.setSize(window.innerWidth,window.innerHeight);camera.position.setZ(150);const controls=new OrbitControls(camera,renderer.domElement);let planeGeometry=new PlaneGeometry(500,500,150,150),pointColor=new Color$1(16777215),pointMaterial=new PointsMaterial({size:.1,color:pointColor}),plane=new Points(planeGeometry,pointMaterial);plane.position.set(0,-100,-200);plane.rotateX(3*Math.PI/2);plane.rotateZ(Math.PI/2);const count=planeGeometry.attributes.position.count,clock=new Clock;scene.add(plane);let MAXHEIGHT=500;const gui=new GUI$1,controlValues={scale:10,speed:1,backgroundColor:0,pointClr:16777215,expression:"cos(x * 20 + t)"};let expression=controlValues.expression,mathFunction=translate(expression);gui.add(controlValues,"expression").onFinishChange(s=>{mathFunction=translate(s)}).name("Expression");let controlsGUI=gui.addFolder("Controls");controlsGUI.add(controlValues,"scale",5,250,5).name("Scale");controlsGUI.add(controlValues,"speed",1,50,.1).name("Speed");let rotationGUI=gui.addFolder("Rotation");rotationGUI.add(plane.rotation,"x",0,Math.PI*2,.01).name("X Axis");rotationGUI.add(plane.rotation,"y",0,Math.PI*2,.01).name("Y Axis");rotationGUI.add(plane.rotation,"z",0,Math.PI*2,.01).name("Z Axis");let colorsGUI=gui.addFolder("Colors");colorsGUI.addColor(controlValues,"backgroundColor").listen().onChange(s=>{scene.background=new Color$1(s)}).name("Background Color");colorsGUI.addColor(controlValues,"pointClr").listen().onChange(s=>{plane.material.color=new Color$1(s)}).name("Point Color");let x,t,z;function animate(){requestAnimationFrame(animate),t=clock.getElapsedTime(),t*=controlValues.speed;for(let s=0;s<count;s++)x=s/count,z=mathFunction(x,t),z*=controlValues.scale,z>MAXHEIGHT&&(z=MAXHEIGHT),plane.geometry.attributes.position.setZ(s,z);planeGeometry.computeVertexNormals(),planeGeometry.attributes.position.needsUpdate=!0,controls.update(),renderer.render(scene,camera)}animate();
