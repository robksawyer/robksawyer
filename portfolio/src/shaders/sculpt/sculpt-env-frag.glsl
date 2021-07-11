uniform int type;
uniform float time;
uniform float repeat;
uniform float fill;
uniform float offset;
uniform float step;
uniform bool edge;
uniform sampler2D matcapTex;
uniform sampler2D matcap2Tex;
uniform samplerCube envMap;
uniform float opacity;

varying vec3 vPos;
varying vec3 vNormal;
varying vec2 vN;
varying vec3 vEye;
varying float vNoise;
varying vec3 vReflect;
varying float vAO;

void main() {

  float n = vNoise;
  float a = 0.0;
  float t = offset * fill;
  if(n < t && type != 6){
    discard;
  }

  vec4 envColor = textureCube( envMap, vec3( vReflect.x, vReflect.yz ) );
  vec3 color = envColor.rgb;
   
  if(type == 0 || type == 3 || type == 5){
    const int steps = 24;
    for(int i = 0; i < steps; i++){
      float j = float(i);
      float start = t + j * step;
      float end = t + (j + 0.75) * step;
      if(n > start && n < end){
        a = opacity;
      }
    }
  }
  else if(type == 4){
    float u = t + 15.0 * step;
    if(n > t && n < u){
        a = opacity;
    }
  }
  else if(type == 6){
    a = opacity;
  }
  else {
    if(n > t){
        a = opacity;
    }
  }

  gl_FragColor = vec4(color, a);

}