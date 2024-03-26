(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[8944],{34310:function(e,t,r){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var n=r(62140);function o(e,t,r){return void 0===t&&(t=new Uint8Array(2)),void 0===r&&(r=0),t[r+0]=e>>>8,t[r+1]=e>>>0,t}function i(e,t,r){return void 0===t&&(t=new Uint8Array(2)),void 0===r&&(r=0),t[r+0]=e>>>0,t[r+1]=e>>>8,t}function a(e,t){return void 0===t&&(t=0),e[t]<<24|e[t+1]<<16|e[t+2]<<8|e[t+3]}function s(e,t){return void 0===t&&(t=0),(e[t]<<24|e[t+1]<<16|e[t+2]<<8|e[t+3])>>>0}function u(e,t){return void 0===t&&(t=0),e[t+3]<<24|e[t+2]<<16|e[t+1]<<8|e[t]}function l(e,t){return void 0===t&&(t=0),(e[t+3]<<24|e[t+2]<<16|e[t+1]<<8|e[t])>>>0}function c(e,t,r){return void 0===t&&(t=new Uint8Array(4)),void 0===r&&(r=0),t[r+0]=e>>>24,t[r+1]=e>>>16,t[r+2]=e>>>8,t[r+3]=e>>>0,t}function h(e,t,r){return void 0===t&&(t=new Uint8Array(4)),void 0===r&&(r=0),t[r+0]=e>>>0,t[r+1]=e>>>8,t[r+2]=e>>>16,t[r+3]=e>>>24,t}function f(e,t,r){return void 0===t&&(t=new Uint8Array(8)),void 0===r&&(r=0),c(e/4294967296>>>0,t,r),c(e>>>0,t,r+4),t}function d(e,t,r){return void 0===t&&(t=new Uint8Array(8)),void 0===r&&(r=0),h(e>>>0,t,r),h(e/4294967296>>>0,t,r+4),t}t.readInt16BE=function(e,t){return void 0===t&&(t=0),(e[t+0]<<8|e[t+1])<<16>>16},t.readUint16BE=function(e,t){return void 0===t&&(t=0),(e[t+0]<<8|e[t+1])>>>0},t.readInt16LE=function(e,t){return void 0===t&&(t=0),(e[t+1]<<8|e[t])<<16>>16},t.readUint16LE=function(e,t){return void 0===t&&(t=0),(e[t+1]<<8|e[t])>>>0},t.writeUint16BE=o,t.writeInt16BE=o,t.writeUint16LE=i,t.writeInt16LE=i,t.readInt32BE=a,t.readUint32BE=s,t.readInt32LE=u,t.readUint32LE=l,t.writeUint32BE=c,t.writeInt32BE=c,t.writeUint32LE=h,t.writeInt32LE=h,t.readInt64BE=function(e,t){void 0===t&&(t=0);var r=a(e,t),n=a(e,t+4);return 4294967296*r+n-(n>>31)*4294967296},t.readUint64BE=function(e,t){return void 0===t&&(t=0),4294967296*s(e,t)+s(e,t+4)},t.readInt64LE=function(e,t){void 0===t&&(t=0);var r=u(e,t);return 4294967296*u(e,t+4)+r-(r>>31)*4294967296},t.readUint64LE=function(e,t){void 0===t&&(t=0);var r=l(e,t);return 4294967296*l(e,t+4)+r},t.writeUint64BE=f,t.writeInt64BE=f,t.writeUint64LE=d,t.writeInt64LE=d,t.readUintBE=function(e,t,r){if(void 0===r&&(r=0),e%8!=0)throw Error("readUintBE supports only bitLengths divisible by 8");if(e/8>t.length-r)throw Error("readUintBE: array is too short for the given bitLength");for(var n=0,o=1,i=e/8+r-1;i>=r;i--)n+=t[i]*o,o*=256;return n},t.readUintLE=function(e,t,r){if(void 0===r&&(r=0),e%8!=0)throw Error("readUintLE supports only bitLengths divisible by 8");if(e/8>t.length-r)throw Error("readUintLE: array is too short for the given bitLength");for(var n=0,o=1,i=r;i<r+e/8;i++)n+=t[i]*o,o*=256;return n},t.writeUintBE=function(e,t,r,o){if(void 0===r&&(r=new Uint8Array(e/8)),void 0===o&&(o=0),e%8!=0)throw Error("writeUintBE supports only bitLengths divisible by 8");if(!n.isSafeInteger(t))throw Error("writeUintBE value must be an integer");for(var i=1,a=e/8+o-1;a>=o;a--)r[a]=t/i&255,i*=256;return r},t.writeUintLE=function(e,t,r,o){if(void 0===r&&(r=new Uint8Array(e/8)),void 0===o&&(o=0),e%8!=0)throw Error("writeUintLE supports only bitLengths divisible by 8");if(!n.isSafeInteger(t))throw Error("writeUintLE value must be an integer");for(var i=1,a=o;a<o+e/8;a++)r[a]=t/i&255,i*=256;return r},t.readFloat32BE=function(e,t){return void 0===t&&(t=0),new DataView(e.buffer,e.byteOffset,e.byteLength).getFloat32(t)},t.readFloat32LE=function(e,t){return void 0===t&&(t=0),new DataView(e.buffer,e.byteOffset,e.byteLength).getFloat32(t,!0)},t.readFloat64BE=function(e,t){return void 0===t&&(t=0),new DataView(e.buffer,e.byteOffset,e.byteLength).getFloat64(t)},t.readFloat64LE=function(e,t){return void 0===t&&(t=0),new DataView(e.buffer,e.byteOffset,e.byteLength).getFloat64(t,!0)},t.writeFloat32BE=function(e,t,r){return void 0===t&&(t=new Uint8Array(4)),void 0===r&&(r=0),new DataView(t.buffer,t.byteOffset,t.byteLength).setFloat32(r,e),t},t.writeFloat32LE=function(e,t,r){return void 0===t&&(t=new Uint8Array(4)),void 0===r&&(r=0),new DataView(t.buffer,t.byteOffset,t.byteLength).setFloat32(r,e,!0),t},t.writeFloat64BE=function(e,t,r){return void 0===t&&(t=new Uint8Array(8)),void 0===r&&(r=0),new DataView(t.buffer,t.byteOffset,t.byteLength).setFloat64(r,e),t},t.writeFloat64LE=function(e,t,r){return void 0===t&&(t=new Uint8Array(8)),void 0===r&&(r=0),new DataView(t.buffer,t.byteOffset,t.byteLength).setFloat64(r,e,!0),t}},48733:function(e,t,r){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var n=r(34310),o=r(55277);function i(e,t,r,i,a){if(void 0===a&&(a=0),32!==e.length)throw Error("ChaCha: key size must be 32 bytes");if(i.length<r.length)throw Error("ChaCha: destination is shorter than source");if(0===a){if(8!==t.length&&12!==t.length)throw Error("ChaCha nonce must be 8 or 12 bytes");u=(s=new Uint8Array(16)).length-t.length,s.set(t,u)}else{if(16!==t.length)throw Error("ChaCha nonce with counter must be 16 bytes");s=t,u=a}for(var s,u,l=new Uint8Array(64),c=0;c<r.length;c+=64){!function(e,t,r){for(var o=r[3]<<24|r[2]<<16|r[1]<<8|r[0],i=r[7]<<24|r[6]<<16|r[5]<<8|r[4],a=r[11]<<24|r[10]<<16|r[9]<<8|r[8],s=r[15]<<24|r[14]<<16|r[13]<<8|r[12],u=r[19]<<24|r[18]<<16|r[17]<<8|r[16],l=r[23]<<24|r[22]<<16|r[21]<<8|r[20],c=r[27]<<24|r[26]<<16|r[25]<<8|r[24],h=r[31]<<24|r[30]<<16|r[29]<<8|r[28],f=t[3]<<24|t[2]<<16|t[1]<<8|t[0],d=t[7]<<24|t[6]<<16|t[5]<<8|t[4],p=t[11]<<24|t[10]<<16|t[9]<<8|t[8],b=t[15]<<24|t[14]<<16|t[13]<<8|t[12],g=1634760805,w=857760878,y=2036477234,m=1797285236,v=o,D=i,E=a,_=s,C=u,k=l,x=c,S=h,A=f,O=d,N=p,M=b,I=0;I<20;I+=2)A^=g=g+v|0,v^=C=C+(A=A>>>16|A<<16)|0,v=v>>>20|v<<12,O^=w=w+D|0,D^=k=k+(O=O>>>16|O<<16)|0,D=D>>>20|D<<12,N^=y=y+E|0,E^=x=x+(N=N>>>16|N<<16)|0,E=E>>>20|E<<12,M^=m=m+_|0,_^=S=S+(M=M>>>16|M<<16)|0,_=_>>>20|_<<12,N^=y=y+E|0,E^=x=x+(N=N>>>24|N<<8)|0,E=E>>>25|E<<7,M^=m=m+_|0,_^=S=S+(M=M>>>24|M<<8)|0,_=_>>>25|_<<7,O^=w=w+D|0,D^=k=k+(O=O>>>24|O<<8)|0,D=D>>>25|D<<7,A^=g=g+v|0,v^=C=C+(A=A>>>24|A<<8)|0,v=v>>>25|v<<7,M^=g=g+D|0,D^=x=x+(M=M>>>16|M<<16)|0,D=D>>>20|D<<12,A^=w=w+E|0,E^=S=S+(A=A>>>16|A<<16)|0,E=E>>>20|E<<12,O^=y=y+_|0,_^=C=C+(O=O>>>16|O<<16)|0,_=_>>>20|_<<12,N^=m=m+v|0,v^=k=k+(N=N>>>16|N<<16)|0,v=v>>>20|v<<12,O^=y=y+_|0,_^=C=C+(O=O>>>24|O<<8)|0,_=_>>>25|_<<7,N^=m=m+v|0,v^=k=k+(N=N>>>24|N<<8)|0,v=v>>>25|v<<7,A^=w=w+E|0,E^=S=S+(A=A>>>24|A<<8)|0,E=E>>>25|E<<7,M^=g=g+D|0,D^=x=x+(M=M>>>24|M<<8)|0,D=D>>>25|D<<7;n.writeUint32LE(g+1634760805|0,e,0),n.writeUint32LE(w+857760878|0,e,4),n.writeUint32LE(y+2036477234|0,e,8),n.writeUint32LE(m+1797285236|0,e,12),n.writeUint32LE(v+o|0,e,16),n.writeUint32LE(D+i|0,e,20),n.writeUint32LE(E+a|0,e,24),n.writeUint32LE(_+s|0,e,28),n.writeUint32LE(C+u|0,e,32),n.writeUint32LE(k+l|0,e,36),n.writeUint32LE(x+c|0,e,40),n.writeUint32LE(S+h|0,e,44),n.writeUint32LE(A+f|0,e,48),n.writeUint32LE(O+d|0,e,52),n.writeUint32LE(N+p|0,e,56),n.writeUint32LE(M+b|0,e,60)}(l,s,e);for(var h=c;h<c+64&&h<r.length;h++)i[h]=r[h]^l[h-c];!function(e,t,r){for(var n=1;r--;)n=n+(255&e[t])|0,e[t]=255&n,n>>>=8,t++;if(n>0)throw Error("ChaCha: counter overflow")}(s,0,u)}return o.wipe(l),0===a&&o.wipe(s),i}t.streamXOR=i,t.stream=function(e,t,r,n){return void 0===n&&(n=0),o.wipe(r),i(e,t,r,r,n)}},51040:function(e,t,r){"use strict";var n=r(48733),o=r(66508),i=r(55277),a=r(34310),s=r(51448);t.Cv=32,t.WH=12,t.pg=16;var u=new Uint8Array(16),l=function(){function e(e){if(this.nonceLength=t.WH,this.tagLength=t.pg,e.length!==t.Cv)throw Error("ChaCha20Poly1305 needs 32-byte key");this._key=new Uint8Array(e)}return e.prototype.seal=function(e,t,r,o){if(e.length>16)throw Error("ChaCha20Poly1305: incorrect nonce length");var a,s=new Uint8Array(16);s.set(e,s.length-e.length);var u=new Uint8Array(32);n.stream(this._key,s,u,4);var l=t.length+this.tagLength;if(o){if(o.length!==l)throw Error("ChaCha20Poly1305: incorrect destination length");a=o}else a=new Uint8Array(l);return n.streamXOR(this._key,s,t,a,4),this._authenticate(a.subarray(a.length-this.tagLength,a.length),u,a.subarray(0,a.length-this.tagLength),r),i.wipe(s),a},e.prototype.open=function(e,t,r,o){if(e.length>16)throw Error("ChaCha20Poly1305: incorrect nonce length");if(t.length<this.tagLength)return null;var a,u=new Uint8Array(16);u.set(e,u.length-e.length);var l=new Uint8Array(32);n.stream(this._key,u,l,4);var c=new Uint8Array(this.tagLength);if(this._authenticate(c,l,t.subarray(0,t.length-this.tagLength),r),!s.equal(c,t.subarray(t.length-this.tagLength,t.length)))return null;var h=t.length-this.tagLength;if(o){if(o.length!==h)throw Error("ChaCha20Poly1305: incorrect destination length");a=o}else a=new Uint8Array(h);return n.streamXOR(this._key,u,t.subarray(0,t.length-this.tagLength),a,4),i.wipe(u),a},e.prototype.clean=function(){return i.wipe(this._key),this},e.prototype._authenticate=function(e,t,r,n){var s=new o.Poly1305(t);n&&(s.update(n),n.length%16>0&&s.update(u.subarray(n.length%16))),s.update(r),r.length%16>0&&s.update(u.subarray(r.length%16));var l=new Uint8Array(8);n&&a.writeUint64LE(n.length,l),s.update(l),a.writeUint64LE(r.length,l),s.update(l);for(var c=s.digest(),h=0;h<c.length;h++)e[h]=c[h];s.clean(),i.wipe(c),i.wipe(l)},e}();t.OK=l},51448:function(e,t){"use strict";function r(e,t){if(e.length!==t.length)return 0;for(var r=0,n=0;n<e.length;n++)r|=e[n]^t[n];return 1&r-1>>>8}Object.defineProperty(t,"__esModule",{value:!0}),t.select=function(e,t,r){return~(e-1)&t|e-1&r},t.lessOrEqual=function(e,t){return(0|e)-(0|t)-1>>>31&1},t.compare=r,t.equal=function(e,t){return 0!==e.length&&0!==t.length&&0!==r(e,t)}},12621:function(e,t){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.isSerializableHash=function(e){return void 0!==e.saveState&&void 0!==e.restoreState&&void 0!==e.cleanSavedState}},20342:function(e,t,r){"use strict";var n=r(9922),o=r(55277),i=function(){function e(e,t,r,o){void 0===r&&(r=new Uint8Array(0)),this._counter=new Uint8Array(1),this._hash=e,this._info=o;var i=n.hmac(this._hash,r,t);this._hmac=new n.HMAC(e,i),this._buffer=new Uint8Array(this._hmac.digestLength),this._bufpos=this._buffer.length}return e.prototype._fillBuffer=function(){this._counter[0]++;var e=this._counter[0];if(0===e)throw Error("hkdf: cannot expand more");this._hmac.reset(),e>1&&this._hmac.update(this._buffer),this._info&&this._hmac.update(this._info),this._hmac.update(this._counter),this._hmac.finish(this._buffer),this._bufpos=0},e.prototype.expand=function(e){for(var t=new Uint8Array(e),r=0;r<t.length;r++)this._bufpos===this._buffer.length&&this._fillBuffer(),t[r]=this._buffer[this._bufpos++];return t},e.prototype.clean=function(){this._hmac.clean(),o.wipe(this._buffer),o.wipe(this._counter),this._bufpos=0},e}();t.t=i},9922:function(e,t,r){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var n=r(12621),o=r(51448),i=r(55277),a=function(){function e(e,t){this._finished=!1,this._inner=new e,this._outer=new e,this.blockSize=this._outer.blockSize,this.digestLength=this._outer.digestLength;var r=new Uint8Array(this.blockSize);t.length>this.blockSize?this._inner.update(t).finish(r).clean():r.set(t);for(var o=0;o<r.length;o++)r[o]^=54;this._inner.update(r);for(var o=0;o<r.length;o++)r[o]^=106;this._outer.update(r),n.isSerializableHash(this._inner)&&n.isSerializableHash(this._outer)&&(this._innerKeyedState=this._inner.saveState(),this._outerKeyedState=this._outer.saveState()),i.wipe(r)}return e.prototype.reset=function(){if(!n.isSerializableHash(this._inner)||!n.isSerializableHash(this._outer))throw Error("hmac: can't reset() because hash doesn't implement restoreState()");return this._inner.restoreState(this._innerKeyedState),this._outer.restoreState(this._outerKeyedState),this._finished=!1,this},e.prototype.clean=function(){n.isSerializableHash(this._inner)&&this._inner.cleanSavedState(this._innerKeyedState),n.isSerializableHash(this._outer)&&this._outer.cleanSavedState(this._outerKeyedState),this._inner.clean(),this._outer.clean()},e.prototype.update=function(e){return this._inner.update(e),this},e.prototype.finish=function(e){return this._finished?this._outer.finish(e):(this._inner.finish(e),this._outer.update(e.subarray(0,this.digestLength)).finish(e),this._finished=!0),this},e.prototype.digest=function(){var e=new Uint8Array(this.digestLength);return this.finish(e),e},e.prototype.saveState=function(){if(!n.isSerializableHash(this._inner))throw Error("hmac: can't saveState() because hash doesn't implement it");return this._inner.saveState()},e.prototype.restoreState=function(e){if(!n.isSerializableHash(this._inner)||!n.isSerializableHash(this._outer))throw Error("hmac: can't restoreState() because hash doesn't implement it");return this._inner.restoreState(e),this._outer.restoreState(this._outerKeyedState),this._finished=!1,this},e.prototype.cleanSavedState=function(e){if(!n.isSerializableHash(this._inner))throw Error("hmac: can't cleanSavedState() because hash doesn't implement it");this._inner.cleanSavedState(e)},e}();t.HMAC=a,t.hmac=function(e,t,r){var n=new a(e,t);n.update(r);var o=n.digest();return n.clean(),o},t.equal=o.equal},62140:function(e,t){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.mul=Math.imul||function(e,t){var r=65535&e,n=65535&t;return r*n+((e>>>16&65535)*n+r*(t>>>16&65535)<<16>>>0)|0},t.add=function(e,t){return e+t|0},t.sub=function(e,t){return e-t|0},t.rotl=function(e,t){return e<<t|e>>>32-t},t.rotr=function(e,t){return e<<32-t|e>>>t},t.isInteger=Number.isInteger||function(e){return"number"==typeof e&&isFinite(e)&&Math.floor(e)===e},t.MAX_SAFE_INTEGER=9007199254740991,t.isSafeInteger=function(e){return t.isInteger(e)&&e>=-t.MAX_SAFE_INTEGER&&e<=t.MAX_SAFE_INTEGER}},66508:function(e,t,r){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var n=r(51448),o=r(55277);t.DIGEST_LENGTH=16;var i=function(){function e(e){this.digestLength=t.DIGEST_LENGTH,this._buffer=new Uint8Array(16),this._r=new Uint16Array(10),this._h=new Uint16Array(10),this._pad=new Uint16Array(8),this._leftover=0,this._fin=0,this._finished=!1;var r=e[0]|e[1]<<8;this._r[0]=8191&r;var n=e[2]|e[3]<<8;this._r[1]=(r>>>13|n<<3)&8191;var o=e[4]|e[5]<<8;this._r[2]=(n>>>10|o<<6)&7939;var i=e[6]|e[7]<<8;this._r[3]=(o>>>7|i<<9)&8191;var a=e[8]|e[9]<<8;this._r[4]=(i>>>4|a<<12)&255,this._r[5]=a>>>1&8190;var s=e[10]|e[11]<<8;this._r[6]=(a>>>14|s<<2)&8191;var u=e[12]|e[13]<<8;this._r[7]=(s>>>11|u<<5)&8065;var l=e[14]|e[15]<<8;this._r[8]=(u>>>8|l<<8)&8191,this._r[9]=l>>>5&127,this._pad[0]=e[16]|e[17]<<8,this._pad[1]=e[18]|e[19]<<8,this._pad[2]=e[20]|e[21]<<8,this._pad[3]=e[22]|e[23]<<8,this._pad[4]=e[24]|e[25]<<8,this._pad[5]=e[26]|e[27]<<8,this._pad[6]=e[28]|e[29]<<8,this._pad[7]=e[30]|e[31]<<8}return e.prototype._blocks=function(e,t,r){for(var n=this._fin?0:2048,o=this._h[0],i=this._h[1],a=this._h[2],s=this._h[3],u=this._h[4],l=this._h[5],c=this._h[6],h=this._h[7],f=this._h[8],d=this._h[9],p=this._r[0],b=this._r[1],g=this._r[2],w=this._r[3],y=this._r[4],m=this._r[5],v=this._r[6],D=this._r[7],E=this._r[8],_=this._r[9];r>=16;){var C,k=e[t+0]|e[t+1]<<8;o+=8191&k;var x=e[t+2]|e[t+3]<<8;i+=(k>>>13|x<<3)&8191;var S=e[t+4]|e[t+5]<<8;a+=(x>>>10|S<<6)&8191;var A=e[t+6]|e[t+7]<<8;s+=(S>>>7|A<<9)&8191;var O=e[t+8]|e[t+9]<<8;u+=(A>>>4|O<<12)&8191,l+=O>>>1&8191;var N=e[t+10]|e[t+11]<<8;c+=(O>>>14|N<<2)&8191;var M=e[t+12]|e[t+13]<<8;h+=(N>>>11|M<<5)&8191;var I=e[t+14]|e[t+15]<<8;f+=(M>>>8|I<<8)&8191,d+=I>>>5|n;var T=0;T=(C=0+o*p+5*_*i+5*E*a+5*D*s+5*v*u)>>>13,C&=8191,C+=5*m*l+5*y*c+5*w*h+5*g*f+5*b*d,T+=C>>>13,C&=8191;var R=T;R+=o*b+i*p+5*_*a+5*E*s+5*D*u,T=R>>>13,R&=8191,R+=5*v*l+5*m*c+5*y*h+5*w*f+5*g*d,T+=R>>>13,R&=8191;var P=T;P+=o*g+i*b+a*p+5*_*s+5*E*u,T=P>>>13,P&=8191,P+=5*D*l+5*v*c+5*m*h+5*y*f+5*w*d,T+=P>>>13,P&=8191;var B=T;B+=o*w+i*g+a*b+s*p+5*_*u,T=B>>>13,B&=8191,B+=5*E*l+5*D*c+5*v*h+5*m*f+5*y*d,T+=B>>>13,B&=8191;var U=T;U+=o*y+i*w+a*g+s*b+u*p,T=U>>>13,U&=8191,U+=5*_*l+5*E*c+5*D*h+5*v*f+5*m*d,T+=U>>>13,U&=8191;var L=T;L+=o*m+i*y+a*w+s*g+u*b,T=L>>>13,L&=8191,L+=l*p+5*_*c+5*E*h+5*D*f+5*v*d,T+=L>>>13,L&=8191;var F=T;F+=o*v+i*m+a*y+s*w+u*g,T=F>>>13,F&=8191,F+=l*b+c*p+5*_*h+5*E*f+5*D*d,T+=F>>>13,F&=8191;var W=T;W+=o*D+i*v+a*m+s*y+u*w,T=W>>>13,W&=8191,W+=l*g+c*b+h*p+5*_*f+5*E*d,T+=W>>>13,W&=8191;var j=T;j+=o*E+i*D+a*v+s*m+u*y,T=j>>>13,j&=8191,j+=l*w+c*g+h*b+f*p+5*_*d,T+=j>>>13,j&=8191;var z=T;z+=o*_+i*E+a*D+s*v+u*m,T=z>>>13,z&=8191,z+=l*y+c*w+h*g+f*b+d*p,T+=z>>>13,z&=8191,C=8191&(T=(T=(T<<2)+T|0)+C|0),T>>>=13,R+=T,o=C,i=R,a=P,s=B,u=U,l=L,c=F,h=W,f=j,d=z,t+=16,r-=16}this._h[0]=o,this._h[1]=i,this._h[2]=a,this._h[3]=s,this._h[4]=u,this._h[5]=l,this._h[6]=c,this._h[7]=h,this._h[8]=f,this._h[9]=d},e.prototype.finish=function(e,t){void 0===t&&(t=0);var r,n,o,i,a=new Uint16Array(10);if(this._leftover){for(i=this._leftover,this._buffer[i++]=1;i<16;i++)this._buffer[i]=0;this._fin=1,this._blocks(this._buffer,0,16)}for(r=this._h[1]>>>13,this._h[1]&=8191,i=2;i<10;i++)this._h[i]+=r,r=this._h[i]>>>13,this._h[i]&=8191;for(this._h[0]+=5*r,r=this._h[0]>>>13,this._h[0]&=8191,this._h[1]+=r,r=this._h[1]>>>13,this._h[1]&=8191,this._h[2]+=r,a[0]=this._h[0]+5,r=a[0]>>>13,a[0]&=8191,i=1;i<10;i++)a[i]=this._h[i]+r,r=a[i]>>>13,a[i]&=8191;for(a[9]-=8192,n=(1^r)-1,i=0;i<10;i++)a[i]&=n;for(i=0,n=~n;i<10;i++)this._h[i]=this._h[i]&n|a[i];for(i=1,this._h[0]=(this._h[0]|this._h[1]<<13)&65535,this._h[1]=(this._h[1]>>>3|this._h[2]<<10)&65535,this._h[2]=(this._h[2]>>>6|this._h[3]<<7)&65535,this._h[3]=(this._h[3]>>>9|this._h[4]<<4)&65535,this._h[4]=(this._h[4]>>>12|this._h[5]<<1|this._h[6]<<14)&65535,this._h[5]=(this._h[6]>>>2|this._h[7]<<11)&65535,this._h[6]=(this._h[7]>>>5|this._h[8]<<8)&65535,this._h[7]=(this._h[8]>>>8|this._h[9]<<5)&65535,o=this._h[0]+this._pad[0],this._h[0]=65535&o;i<8;i++)o=(this._h[i]+this._pad[i]|0)+(o>>>16)|0,this._h[i]=65535&o;return e[t+0]=this._h[0]>>>0,e[t+1]=this._h[0]>>>8,e[t+2]=this._h[1]>>>0,e[t+3]=this._h[1]>>>8,e[t+4]=this._h[2]>>>0,e[t+5]=this._h[2]>>>8,e[t+6]=this._h[3]>>>0,e[t+7]=this._h[3]>>>8,e[t+8]=this._h[4]>>>0,e[t+9]=this._h[4]>>>8,e[t+10]=this._h[5]>>>0,e[t+11]=this._h[5]>>>8,e[t+12]=this._h[6]>>>0,e[t+13]=this._h[6]>>>8,e[t+14]=this._h[7]>>>0,e[t+15]=this._h[7]>>>8,this._finished=!0,this},e.prototype.update=function(e){var t,r=0,n=e.length;if(this._leftover){(t=16-this._leftover)>n&&(t=n);for(var o=0;o<t;o++)this._buffer[this._leftover+o]=e[r+o];if(n-=t,r+=t,this._leftover+=t,this._leftover<16)return this;this._blocks(this._buffer,0,16),this._leftover=0}if(n>=16&&(t=n-n%16,this._blocks(e,r,t),r+=t,n-=t),n){for(var o=0;o<n;o++)this._buffer[this._leftover+o]=e[r+o];this._leftover+=n}return this},e.prototype.digest=function(){if(this._finished)throw Error("Poly1305 was finished");var e=new Uint8Array(16);return this.finish(e),e},e.prototype.clean=function(){return o.wipe(this._buffer),o.wipe(this._r),o.wipe(this._h),o.wipe(this._pad),this._leftover=0,this._fin=0,this._finished=!0,this},e}();t.Poly1305=i,t.oneTimeAuth=function(e,t){var r=new i(e);r.update(t);var n=r.digest();return r.clean(),n},t.equal=function(e,r){return e.length===t.DIGEST_LENGTH&&r.length===t.DIGEST_LENGTH&&n.equal(e,r)}},35077:function(e,t,r){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.randomStringForEntropy=t.randomString=t.randomUint32=t.randomBytes=t.defaultRandomSource=void 0;let n=r(62739),o=r(34310),i=r(55277);function a(e,r=t.defaultRandomSource){return r.randomBytes(e)}t.defaultRandomSource=new n.SystemRandomSource,t.randomBytes=a,t.randomUint32=function(e=t.defaultRandomSource){let r=a(4,e),n=(0,o.readUint32LE)(r);return(0,i.wipe)(r),n};let s="0123456789ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz";function u(e,r=s,n=t.defaultRandomSource){if(r.length<2)throw Error("randomString charset is too short");if(r.length>256)throw Error("randomString charset is too long");let o="",u=r.length,l=256-256%u;for(;e>0;){let t=a(Math.ceil(256*e/l),n);for(let n=0;n<t.length&&e>0;n++){let i=t[n];i<l&&(o+=r.charAt(i%u),e--)}(0,i.wipe)(t)}return o}t.randomString=u,t.randomStringForEntropy=function(e,r=s,n=t.defaultRandomSource){return u(Math.ceil(e/(Math.log(r.length)/Math.LN2)),r,n)}},85183:function(e,t){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.BrowserRandomSource=void 0;class r{constructor(){this.isAvailable=!1,this.isInstantiated=!1;let e="undefined"!=typeof self?self.crypto||self.msCrypto:null;e&&void 0!==e.getRandomValues&&(this._crypto=e,this.isAvailable=!0,this.isInstantiated=!0)}randomBytes(e){if(!this.isAvailable||!this._crypto)throw Error("Browser random byte generator is not available.");let t=new Uint8Array(e);for(let e=0;e<t.length;e+=65536)this._crypto.getRandomValues(t.subarray(e,e+Math.min(t.length-e,65536)));return t}}t.BrowserRandomSource=r},32586:function(e,t,r){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.NodeRandomSource=void 0;let n=r(55277);class o{constructor(){this.isAvailable=!1,this.isInstantiated=!1;{let e=r(35883);e&&e.randomBytes&&(this._crypto=e,this.isAvailable=!0,this.isInstantiated=!0)}}randomBytes(e){if(!this.isAvailable||!this._crypto)throw Error("Node.js random byte generator is not available.");let t=this._crypto.randomBytes(e);if(t.length!==e)throw Error("NodeRandomSource: got fewer bytes than requested");let r=new Uint8Array(e);for(let e=0;e<r.length;e++)r[e]=t[e];return(0,n.wipe)(t),r}}t.NodeRandomSource=o},62739:function(e,t,r){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.SystemRandomSource=void 0;let n=r(85183),o=r(32586);class i{constructor(){if(this.isAvailable=!1,this.name="",this._source=new n.BrowserRandomSource,this._source.isAvailable){this.isAvailable=!0,this.name="Browser";return}if(this._source=new o.NodeRandomSource,this._source.isAvailable){this.isAvailable=!0,this.name="Node";return}}randomBytes(e){if(!this.isAvailable)throw Error("System random byte generator is not available.");return this._source.randomBytes(e)}}t.SystemRandomSource=i},87853:function(e,t,r){"use strict";var n=r(34310),o=r(55277);t.k=32,t.cn=64;var i=function(){function e(){this.digestLength=t.k,this.blockSize=t.cn,this._state=new Int32Array(8),this._temp=new Int32Array(64),this._buffer=new Uint8Array(128),this._bufferLength=0,this._bytesHashed=0,this._finished=!1,this.reset()}return e.prototype._initState=function(){this._state[0]=1779033703,this._state[1]=3144134277,this._state[2]=1013904242,this._state[3]=2773480762,this._state[4]=1359893119,this._state[5]=2600822924,this._state[6]=528734635,this._state[7]=1541459225},e.prototype.reset=function(){return this._initState(),this._bufferLength=0,this._bytesHashed=0,this._finished=!1,this},e.prototype.clean=function(){o.wipe(this._buffer),o.wipe(this._temp),this.reset()},e.prototype.update=function(e,t){if(void 0===t&&(t=e.length),this._finished)throw Error("SHA256: can't update because hash was finished.");var r=0;if(this._bytesHashed+=t,this._bufferLength>0){for(;this._bufferLength<this.blockSize&&t>0;)this._buffer[this._bufferLength++]=e[r++],t--;this._bufferLength===this.blockSize&&(s(this._temp,this._state,this._buffer,0,this.blockSize),this._bufferLength=0)}for(t>=this.blockSize&&(r=s(this._temp,this._state,e,r,t),t%=this.blockSize);t>0;)this._buffer[this._bufferLength++]=e[r++],t--;return this},e.prototype.finish=function(e){if(!this._finished){var t=this._bytesHashed,r=this._bufferLength,o=t%64<56?64:128;this._buffer[r]=128;for(var i=r+1;i<o-8;i++)this._buffer[i]=0;n.writeUint32BE(t/536870912|0,this._buffer,o-8),n.writeUint32BE(t<<3,this._buffer,o-4),s(this._temp,this._state,this._buffer,0,o),this._finished=!0}for(var i=0;i<this.digestLength/4;i++)n.writeUint32BE(this._state[i],e,4*i);return this},e.prototype.digest=function(){var e=new Uint8Array(this.digestLength);return this.finish(e),e},e.prototype.saveState=function(){if(this._finished)throw Error("SHA256: cannot save finished state");return{state:new Int32Array(this._state),buffer:this._bufferLength>0?new Uint8Array(this._buffer):void 0,bufferLength:this._bufferLength,bytesHashed:this._bytesHashed}},e.prototype.restoreState=function(e){return this._state.set(e.state),this._bufferLength=e.bufferLength,e.buffer&&this._buffer.set(e.buffer),this._bytesHashed=e.bytesHashed,this._finished=!1,this},e.prototype.cleanSavedState=function(e){o.wipe(e.state),e.buffer&&o.wipe(e.buffer),e.bufferLength=0,e.bytesHashed=0},e}();t.mE=i;var a=new Int32Array([1116352408,1899447441,3049323471,3921009573,961987163,1508970993,2453635748,2870763221,3624381080,310598401,607225278,1426881987,1925078388,2162078206,2614888103,3248222580,3835390401,4022224774,264347078,604807628,770255983,1249150122,1555081692,1996064986,2554220882,2821834349,2952996808,3210313671,3336571891,3584528711,113926993,338241895,666307205,773529912,1294757372,1396182291,1695183700,1986661051,2177026350,2456956037,2730485921,2820302411,3259730800,3345764771,3516065817,3600352804,4094571909,275423344,430227734,506948616,659060556,883997877,958139571,1322822218,1537002063,1747873779,1955562222,2024104815,2227730452,2361852424,2428436474,2756734187,3204031479,3329325298]);function s(e,t,r,o,i){for(;i>=64;){for(var s=t[0],u=t[1],l=t[2],c=t[3],h=t[4],f=t[5],d=t[6],p=t[7],b=0;b<16;b++){var g=o+4*b;e[b]=n.readUint32BE(r,g)}for(var b=16;b<64;b++){var w=e[b-2],y=(w>>>17|w<<15)^(w>>>19|w<<13)^w>>>10,m=((w=e[b-15])>>>7|w<<25)^(w>>>18|w<<14)^w>>>3;e[b]=(y+e[b-7]|0)+(m+e[b-16]|0)}for(var b=0;b<64;b++){var y=(((h>>>6|h<<26)^(h>>>11|h<<21)^(h>>>25|h<<7))+(h&f^~h&d)|0)+(p+(a[b]+e[b]|0)|0)|0,m=((s>>>2|s<<30)^(s>>>13|s<<19)^(s>>>22|s<<10))+(s&u^s&l^u&l)|0;p=d,d=f,f=h,h=c+y|0,c=l,l=u,u=s,s=y+m|0}t[0]+=s,t[1]+=u,t[2]+=l,t[3]+=c,t[4]+=h,t[5]+=f,t[6]+=d,t[7]+=p,o+=64,i-=64}return o}t.vp=function(e){var t=new i;t.update(e);var r=t.digest();return t.clean(),r}},55277:function(e,t){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.wipe=function(e){for(var t=0;t<e.length;t++)e[t]=0;return e}},38195:function(e,t,r){"use strict";t.gi=t.Au=t.KS=t.kz=void 0;let n=r(35077),o=r(55277);function i(e){let t=new Float64Array(16);if(e)for(let r=0;r<e.length;r++)t[r]=e[r];return t}t.kz=32,t.KS=32;let a=new Uint8Array(32);a[0]=9;let s=i([56129,1]);function u(e){let t=1;for(let r=0;r<16;r++){let n=e[r]+t+65535;t=Math.floor(n/65536),e[r]=n-65536*t}e[0]+=t-1+37*(t-1)}function l(e,t,r){let n=~(r-1);for(let r=0;r<16;r++){let o=n&(e[r]^t[r]);e[r]^=o,t[r]^=o}}function c(e,t,r){for(let n=0;n<16;n++)e[n]=t[n]+r[n]}function h(e,t,r){for(let n=0;n<16;n++)e[n]=t[n]-r[n]}function f(e,t,r){let n,o,i=0,a=0,s=0,u=0,l=0,c=0,h=0,f=0,d=0,p=0,b=0,g=0,w=0,y=0,m=0,v=0,D=0,E=0,_=0,C=0,k=0,x=0,S=0,A=0,O=0,N=0,M=0,I=0,T=0,R=0,P=0,B=r[0],U=r[1],L=r[2],F=r[3],W=r[4],j=r[5],z=r[6],H=r[7],q=r[8],V=r[9],Y=r[10],K=r[11],$=r[12],X=r[13],Q=r[14],G=r[15];i+=(n=t[0])*B,a+=n*U,s+=n*L,u+=n*F,l+=n*W,c+=n*j,h+=n*z,f+=n*H,d+=n*q,p+=n*V,b+=n*Y,g+=n*K,w+=n*$,y+=n*X,m+=n*Q,v+=n*G,a+=(n=t[1])*B,s+=n*U,u+=n*L,l+=n*F,c+=n*W,h+=n*j,f+=n*z,d+=n*H,p+=n*q,b+=n*V,g+=n*Y,w+=n*K,y+=n*$,m+=n*X,v+=n*Q,D+=n*G,s+=(n=t[2])*B,u+=n*U,l+=n*L,c+=n*F,h+=n*W,f+=n*j,d+=n*z,p+=n*H,b+=n*q,g+=n*V,w+=n*Y,y+=n*K,m+=n*$,v+=n*X,D+=n*Q,E+=n*G,u+=(n=t[3])*B,l+=n*U,c+=n*L,h+=n*F,f+=n*W,d+=n*j,p+=n*z,b+=n*H,g+=n*q,w+=n*V,y+=n*Y,m+=n*K,v+=n*$,D+=n*X,E+=n*Q,_+=n*G,l+=(n=t[4])*B,c+=n*U,h+=n*L,f+=n*F,d+=n*W,p+=n*j,b+=n*z,g+=n*H,w+=n*q,y+=n*V,m+=n*Y,v+=n*K,D+=n*$,E+=n*X,_+=n*Q,C+=n*G,c+=(n=t[5])*B,h+=n*U,f+=n*L,d+=n*F,p+=n*W,b+=n*j,g+=n*z,w+=n*H,y+=n*q,m+=n*V,v+=n*Y,D+=n*K,E+=n*$,_+=n*X,C+=n*Q,k+=n*G,h+=(n=t[6])*B,f+=n*U,d+=n*L,p+=n*F,b+=n*W,g+=n*j,w+=n*z,y+=n*H,m+=n*q,v+=n*V,D+=n*Y,E+=n*K,_+=n*$,C+=n*X,k+=n*Q,x+=n*G,f+=(n=t[7])*B,d+=n*U,p+=n*L,b+=n*F,g+=n*W,w+=n*j,y+=n*z,m+=n*H,v+=n*q,D+=n*V,E+=n*Y,_+=n*K,C+=n*$,k+=n*X,x+=n*Q,S+=n*G,d+=(n=t[8])*B,p+=n*U,b+=n*L,g+=n*F,w+=n*W,y+=n*j,m+=n*z,v+=n*H,D+=n*q,E+=n*V,_+=n*Y,C+=n*K,k+=n*$,x+=n*X,S+=n*Q,A+=n*G,p+=(n=t[9])*B,b+=n*U,g+=n*L,w+=n*F,y+=n*W,m+=n*j,v+=n*z,D+=n*H,E+=n*q,_+=n*V,C+=n*Y,k+=n*K,x+=n*$,S+=n*X,A+=n*Q,O+=n*G,b+=(n=t[10])*B,g+=n*U,w+=n*L,y+=n*F,m+=n*W,v+=n*j,D+=n*z,E+=n*H,_+=n*q,C+=n*V,k+=n*Y,x+=n*K,S+=n*$,A+=n*X,O+=n*Q,N+=n*G,g+=(n=t[11])*B,w+=n*U,y+=n*L,m+=n*F,v+=n*W,D+=n*j,E+=n*z,_+=n*H,C+=n*q,k+=n*V,x+=n*Y,S+=n*K,A+=n*$,O+=n*X,N+=n*Q,M+=n*G,w+=(n=t[12])*B,y+=n*U,m+=n*L,v+=n*F,D+=n*W,E+=n*j,_+=n*z,C+=n*H,k+=n*q,x+=n*V,S+=n*Y,A+=n*K,O+=n*$,N+=n*X,M+=n*Q,I+=n*G,y+=(n=t[13])*B,m+=n*U,v+=n*L,D+=n*F,E+=n*W,_+=n*j,C+=n*z,k+=n*H,x+=n*q,S+=n*V,A+=n*Y,O+=n*K,N+=n*$,M+=n*X,I+=n*Q,T+=n*G,m+=(n=t[14])*B,v+=n*U,D+=n*L,E+=n*F,_+=n*W,C+=n*j,k+=n*z,x+=n*H,S+=n*q,A+=n*V,O+=n*Y,N+=n*K,M+=n*$,I+=n*X,T+=n*Q,R+=n*G,v+=(n=t[15])*B,D+=n*U,E+=n*L,_+=n*F,C+=n*W,k+=n*j,x+=n*z,S+=n*H,A+=n*q,O+=n*V,N+=n*Y,M+=n*K,I+=n*$,T+=n*X,R+=n*Q,P+=n*G,i+=38*D,a+=38*E,s+=38*_,u+=38*C,l+=38*k,c+=38*x,h+=38*S,f+=38*A,d+=38*O,p+=38*N,b+=38*M,g+=38*I,w+=38*T,y+=38*R,m+=38*P,o=Math.floor((n=i+(o=1)+65535)/65536),i=n-65536*o,o=Math.floor((n=a+o+65535)/65536),a=n-65536*o,o=Math.floor((n=s+o+65535)/65536),s=n-65536*o,o=Math.floor((n=u+o+65535)/65536),u=n-65536*o,o=Math.floor((n=l+o+65535)/65536),l=n-65536*o,o=Math.floor((n=c+o+65535)/65536),c=n-65536*o,o=Math.floor((n=h+o+65535)/65536),h=n-65536*o,o=Math.floor((n=f+o+65535)/65536),f=n-65536*o,o=Math.floor((n=d+o+65535)/65536),d=n-65536*o,o=Math.floor((n=p+o+65535)/65536),p=n-65536*o,o=Math.floor((n=b+o+65535)/65536),b=n-65536*o,o=Math.floor((n=g+o+65535)/65536),g=n-65536*o,o=Math.floor((n=w+o+65535)/65536),w=n-65536*o,o=Math.floor((n=y+o+65535)/65536),y=n-65536*o,o=Math.floor((n=m+o+65535)/65536),m=n-65536*o,o=Math.floor((n=v+o+65535)/65536),v=n-65536*o,i+=o-1+37*(o-1),o=Math.floor((n=i+(o=1)+65535)/65536),i=n-65536*o,o=Math.floor((n=a+o+65535)/65536),a=n-65536*o,o=Math.floor((n=s+o+65535)/65536),s=n-65536*o,o=Math.floor((n=u+o+65535)/65536),u=n-65536*o,o=Math.floor((n=l+o+65535)/65536),l=n-65536*o,o=Math.floor((n=c+o+65535)/65536),c=n-65536*o,o=Math.floor((n=h+o+65535)/65536),h=n-65536*o,o=Math.floor((n=f+o+65535)/65536),f=n-65536*o,o=Math.floor((n=d+o+65535)/65536),d=n-65536*o,o=Math.floor((n=p+o+65535)/65536),p=n-65536*o,o=Math.floor((n=b+o+65535)/65536),b=n-65536*o,o=Math.floor((n=g+o+65535)/65536),g=n-65536*o,o=Math.floor((n=w+o+65535)/65536),w=n-65536*o,o=Math.floor((n=y+o+65535)/65536),y=n-65536*o,o=Math.floor((n=m+o+65535)/65536),m=n-65536*o,o=Math.floor((n=v+o+65535)/65536),v=n-65536*o,i+=o-1+37*(o-1),e[0]=i,e[1]=a,e[2]=s,e[3]=u,e[4]=l,e[5]=c,e[6]=h,e[7]=f,e[8]=d,e[9]=p,e[10]=b,e[11]=g,e[12]=w,e[13]=y,e[14]=m,e[15]=v}function d(e,t){let r=new Uint8Array(32),n=new Float64Array(80),o=i(),a=i(),d=i(),p=i(),b=i(),g=i();for(let t=0;t<31;t++)r[t]=e[t];r[31]=127&e[31]|64,r[0]&=248,function(e,t){for(let r=0;r<16;r++)e[r]=t[2*r]+(t[2*r+1]<<8);e[15]&=32767}(n,t);for(let e=0;e<16;e++)a[e]=n[e];o[0]=p[0]=1;for(let e=254;e>=0;--e){let t=r[e>>>3]>>>(7&e)&1;l(o,a,t),l(d,p,t),c(b,o,d),h(o,o,d),c(d,a,p),h(a,a,p),f(p,b,b),f(g,o,o),f(o,d,o),f(d,a,b),c(b,o,d),h(o,o,d),f(a,o,o),h(d,p,g),f(o,d,s),c(o,o,p),f(d,d,o),f(o,p,g),f(p,a,n),f(a,b,b),l(o,a,t),l(d,p,t)}for(let e=0;e<16;e++)n[e+16]=o[e],n[e+32]=d[e],n[e+48]=a[e],n[e+64]=p[e];let w=n.subarray(32),y=n.subarray(16);!function(e,t){let r=i();for(let e=0;e<16;e++)r[e]=t[e];for(let e=253;e>=0;e--)f(r,r,r),2!==e&&4!==e&&f(r,r,t);for(let t=0;t<16;t++)e[t]=r[t]}(w,w),f(y,y,w);let m=new Uint8Array(32);return!function(e,t){let r=i(),n=i();for(let e=0;e<16;e++)n[e]=t[e];u(n),u(n),u(n);for(let e=0;e<2;e++){r[0]=n[0]-65517;for(let e=1;e<15;e++)r[e]=n[e]-65535-(r[e-1]>>16&1),r[e-1]&=65535;r[15]=n[15]-32767-(r[14]>>16&1);let e=r[15]>>16&1;r[14]&=65535,l(n,r,1-e)}for(let t=0;t<16;t++)e[2*t]=255&n[t],e[2*t+1]=n[t]>>8}(m,y),m}t.Au=function(e){let r=(0,n.randomBytes)(32,e),i=function(e){if(e.length!==t.KS)throw Error(`x25519: seed must be ${t.KS} bytes`);let r=new Uint8Array(e);return{publicKey:d(r,a),secretKey:r}}(r);return(0,o.wipe)(r),i},t.gi=function(e,r,n=!1){if(e.length!==t.kz)throw Error("X25519: incorrect secret key length");if(r.length!==t.kz)throw Error("X25519: incorrect public key length");let o=d(e,r);if(n){let e=0;for(let t=0;t<o.length;t++)e|=o[t];if(0===e)throw Error("X25519: invalid shared key")}return o}},18821:function(e,t,r){"use strict";function n(e){var t=e.match(/^var\((.*)\)$/);return t?t[1]:e}function o(e,t){var r={};if("object"==typeof t)!function e(t,r){var n=arguments.length>2&&void 0!==arguments[2]?arguments[2]:[],o=t.constructor();for(var i in t){var a=t[i],s=[...n,i];"string"==typeof a||"number"==typeof a||null==a?o[i]=r(a,s):"object"!=typeof a||Array.isArray(a)?console.warn('Skipping invalid key "'.concat(s.join("."),'". Should be a string, number, null or object. Received: "').concat(Array.isArray(a)?"Array":typeof a,'"')):o[i]=e(a,r,s)}return o}(t,(t,o)=>{null!=t&&(r[n(function(e,t){var r=e;for(var n of t){if(!(n in r))throw Error("Path ".concat(t.join(" -> ")," does not exist in object"));r=r[n]}return r}(e,o))]=String(t))});else for(var o in e){var i=e[o];null!=i&&(r[n(o)]=i)}return Object.defineProperty(r,"toString",{value:function(){return Object.keys(this).map(e=>"".concat(e,":").concat(this[e])).join(";")},writable:!1}),r}r.d(t,{L:function(){return o}})},90751:function(e,t,r){"use strict";function n(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter(function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable})),r.push.apply(r,n)}return r}function o(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?n(Object(r),!0).forEach(function(t){!function(e,t,r){var n;(t="symbol"==typeof(n=function(e,t){if("object"!=typeof e||null===e)return e;var r=e[Symbol.toPrimitive];if(void 0!==r){var n=r.call(e,t||"default");if("object"!=typeof n)return n;throw TypeError("@@toPrimitive must return a primitive value.")}return("string"===t?String:Number)(e)}(t,"string"))?n:String(n))in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r}(e,t,r[t])}):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):n(Object(r)).forEach(function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))})}return e}r.d(t,{$:function(){return s}});var i=e=>function(){for(var t=arguments.length,r=Array(t),n=0;n<t;n++)r[n]=arguments[n];var i=Object.assign({},...r.map(e=>e.styles)),a=Object.keys(i),s=a.filter(e=>"mappings"in i[e]);return Object.assign(t=>{var r=[],n={},a=o({},t),u=!1;for(var l of s){var c=t[l];if(null!=c)for(var h of(u=!0,i[l].mappings))n[h]=c,null==a[h]&&delete a[h]}var f=u?o(o({},n),a):t;for(var d in f)if("continue"===function(){var e=f[d],t=i[d];try{if(t.mappings)return"continue";if("string"==typeof e||"number"==typeof e)r.push(t.values[e].defaultClass);else if(Array.isArray(e))for(var n=0;n<e.length;n++){var o=e[n];if(null!=o){var a=t.responsiveArray[n];r.push(t.values[o].conditions[a])}}else for(var s in e){var u=e[s];null!=u&&r.push(t.values[u].conditions[s])}}catch(e){throw e}}())continue;return e(r.join(" "))},{properties:new Set(a)})},a=e=>e,s=function(){return i(a)(...arguments)}},47714:function(e,t,r){"use strict";r.d(t,{d:function(){return i},M:function(){return o}});var n=function(e,t){return Object.defineProperty(e,"__recipe__",{value:t,writable:!1}),e};function o(e){var{conditions:t}=e;if(!t)throw Error("Styles have no conditions");return n(function(e){if("string"==typeof e||"number"==typeof e||"boolean"==typeof e){if(!t.defaultCondition)throw Error("No default condition");return{[t.defaultCondition]:e}}if(Array.isArray(e)){if(!("responsiveArray"in t))throw Error("Responsive arrays are not supported");var r={};for(var n in t.responsiveArray)null!=e[n]&&(r[t.responsiveArray[n]]=e[n]);return r}return e},{importPath:"@vanilla-extract/sprinkles/createUtils",importName:"createNormalizeValueFn",args:[{conditions:e.conditions}]})}function i(e){var{conditions:t}=e;if(!t)throw Error("Styles have no conditions");var r=o(e);return n(function(e,n){if("string"==typeof e||"number"==typeof e||"boolean"==typeof e){if(!t.defaultCondition)throw Error("No default condition");return n(e,t.defaultCondition)}var o=Array.isArray(e)?r(e):e,i={};for(var a in o)null!=o[a]&&(i[a]=n(o[a],a));return i},{importPath:"@vanilla-extract/sprinkles/createUtils",importName:"createMapValueFn",args:[{conditions:e.conditions}]})}},43869:function(e,t,r){"use strict";r.d(t,{RELAY_JSONRPC:function(){return n}}),r(24584);let n={waku:{publish:"waku_publish",batchPublish:"waku_batchPublish",subscribe:"waku_subscribe",batchSubscribe:"waku_batchSubscribe",subscription:"waku_subscription",unsubscribe:"waku_unsubscribe",batchUnsubscribe:"waku_batchUnsubscribe"},irn:{publish:"irn_publish",batchPublish:"irn_batchPublish",subscribe:"irn_subscribe",batchSubscribe:"irn_batchSubscribe",subscription:"irn_subscription",unsubscribe:"irn_unsubscribe",batchUnsubscribe:"irn_batchUnsubscribe"},iridium:{publish:"iridium_publish",batchPublish:"iridium_batchPublish",subscribe:"iridium_subscribe",batchSubscribe:"iridium_batchSubscribe",subscription:"iridium_subscription",unsubscribe:"iridium_unsubscribe",batchUnsubscribe:"iridium_batchUnsubscribe"}}},24584:function(){},72852:function(e,t,r){"use strict";Object.defineProperty(t,"__esModule",{value:!0});let n=r(88648);n.__exportStar(r(83343),t),n.__exportStar(r(38520),t)},83343:function(e,t){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.ONE_THOUSAND=t.ONE_HUNDRED=void 0,t.ONE_HUNDRED=100,t.ONE_THOUSAND=1e3},38520:function(e,t){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.ONE_YEAR=t.FOUR_WEEKS=t.THREE_WEEKS=t.TWO_WEEKS=t.ONE_WEEK=t.THIRTY_DAYS=t.SEVEN_DAYS=t.FIVE_DAYS=t.THREE_DAYS=t.ONE_DAY=t.TWENTY_FOUR_HOURS=t.TWELVE_HOURS=t.SIX_HOURS=t.THREE_HOURS=t.ONE_HOUR=t.SIXTY_MINUTES=t.THIRTY_MINUTES=t.TEN_MINUTES=t.FIVE_MINUTES=t.ONE_MINUTE=t.SIXTY_SECONDS=t.THIRTY_SECONDS=t.TEN_SECONDS=t.FIVE_SECONDS=t.ONE_SECOND=void 0,t.ONE_SECOND=1,t.FIVE_SECONDS=5,t.TEN_SECONDS=10,t.THIRTY_SECONDS=30,t.SIXTY_SECONDS=60,t.ONE_MINUTE=t.SIXTY_SECONDS,t.FIVE_MINUTES=5*t.ONE_MINUTE,t.TEN_MINUTES=10*t.ONE_MINUTE,t.THIRTY_MINUTES=30*t.ONE_MINUTE,t.SIXTY_MINUTES=60*t.ONE_MINUTE,t.ONE_HOUR=t.SIXTY_MINUTES,t.THREE_HOURS=3*t.ONE_HOUR,t.SIX_HOURS=6*t.ONE_HOUR,t.TWELVE_HOURS=12*t.ONE_HOUR,t.TWENTY_FOUR_HOURS=24*t.ONE_HOUR,t.ONE_DAY=t.TWENTY_FOUR_HOURS,t.THREE_DAYS=3*t.ONE_DAY,t.FIVE_DAYS=5*t.ONE_DAY,t.SEVEN_DAYS=7*t.ONE_DAY,t.THIRTY_DAYS=30*t.ONE_DAY,t.ONE_WEEK=t.SEVEN_DAYS,t.TWO_WEEKS=2*t.ONE_WEEK,t.THREE_WEEKS=3*t.ONE_WEEK,t.FOUR_WEEKS=4*t.ONE_WEEK,t.ONE_YEAR=365*t.ONE_DAY},58619:function(e,t,r){"use strict";Object.defineProperty(t,"__esModule",{value:!0});let n=r(88648);n.__exportStar(r(6954),t),n.__exportStar(r(91895),t),n.__exportStar(r(21087),t),n.__exportStar(r(72852),t)},21087:function(e,t,r){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),r(88648).__exportStar(r(36448),t)},36448:function(e,t){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.IWatch=void 0;class r{}t.IWatch=r},24810:function(e,t,r){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.fromMiliseconds=t.toMiliseconds=void 0;let n=r(72852);t.toMiliseconds=function(e){return e*n.ONE_THOUSAND},t.fromMiliseconds=function(e){return Math.floor(e/n.ONE_THOUSAND)}},18995:function(e,t){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.delay=void 0,t.delay=function(e){return new Promise(t=>{setTimeout(()=>{t(!0)},e)})}},6954:function(e,t,r){"use strict";Object.defineProperty(t,"__esModule",{value:!0});let n=r(88648);n.__exportStar(r(18995),t),n.__exportStar(r(24810),t)},91895:function(e,t){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.Watch=void 0;class r{constructor(){this.timestamps=new Map}start(e){if(this.timestamps.has(e))throw Error(`Watch already started for label: ${e}`);this.timestamps.set(e,{started:Date.now()})}stop(e){let t=this.get(e);if(void 0!==t.elapsed)throw Error(`Watch already stopped for label: ${e}`);let r=Date.now()-t.started;this.timestamps.set(e,{started:t.started,elapsed:r})}get(e){let t=this.timestamps.get(e);if(void 0===t)throw Error(`No timestamp found for label: ${e}`);return t}elapsed(e){let t=this.get(e);return t.elapsed||Date.now()-t.started}}t.Watch=r,t.default=r},849:function(e,t){"use strict";function r(e){let t;return"undefined"!=typeof window&&void 0!==window[e]&&(t=window[e]),t}function n(e){let t=r(e);if(!t)throw Error(`${e} is not defined in Window`);return t}Object.defineProperty(t,"__esModule",{value:!0}),t.getLocalStorage=t.getLocalStorageOrThrow=t.getCrypto=t.getCryptoOrThrow=t.getLocation=t.getLocationOrThrow=t.getNavigator=t.getNavigatorOrThrow=t.getDocument=t.getDocumentOrThrow=t.getFromWindowOrThrow=t.getFromWindow=void 0,t.getFromWindow=r,t.getFromWindowOrThrow=n,t.getDocumentOrThrow=function(){return n("document")},t.getDocument=function(){return r("document")},t.getNavigatorOrThrow=function(){return n("navigator")},t.getNavigator=function(){return r("navigator")},t.getLocationOrThrow=function(){return n("location")},t.getLocation=function(){return r("location")},t.getCryptoOrThrow=function(){return n("crypto")},t.getCrypto=function(){return r("crypto")},t.getLocalStorageOrThrow=function(){return n("localStorage")},t.getLocalStorage=function(){return r("localStorage")}},36073:function(e,t,r){"use strict";t.D=void 0;let n=r(849);t.D=function(){let e,t,r;try{e=n.getDocumentOrThrow(),t=n.getLocationOrThrow()}catch(e){return null}function o(...t){let r=e.getElementsByTagName("meta");for(let e=0;e<r.length;e++){let n=r[e],o=["itemprop","property","name"].map(e=>n.getAttribute(e)).filter(e=>!!e&&t.includes(e));if(o.length&&o){let e=n.getAttribute("content");if(e)return e}}return""}let i=((r=o("name","og:site_name","og:title","twitter:title"))||(r=e.title),r),a=o("description","og:description","twitter:description","keywords");return{description:a,url:t.origin,icons:function(){let r=e.getElementsByTagName("link"),n=[];for(let e=0;e<r.length;e++){let o=r[e],i=o.getAttribute("rel");if(i&&i.toLowerCase().indexOf("icon")>-1){let e=o.getAttribute("href");if(e){if(-1===e.toLowerCase().indexOf("https:")&&-1===e.toLowerCase().indexOf("http:")&&0!==e.indexOf("//")){let r=t.protocol+"//"+t.host;if(0===e.indexOf("/"))r+=e;else{let n=t.pathname.split("/");n.pop(),r+=n.join("/")+"/"+e}n.push(r)}else if(0===e.indexOf("//")){let r=t.protocol+e;n.push(r)}else n.push(e)}}}return n}(),name:i}}},2390:function(e,t,r){"use strict";var n=r(25809),o={"text/plain":"Text","text/html":"Url",default:"Text"};e.exports=function(e,t){var r,i,a,s,u,l,c,h,f=!1;t||(t={}),a=t.debug||!1;try{if(u=n(),l=document.createRange(),c=document.getSelection(),(h=document.createElement("span")).textContent=e,h.ariaHidden="true",h.style.all="unset",h.style.position="fixed",h.style.top=0,h.style.clip="rect(0, 0, 0, 0)",h.style.whiteSpace="pre",h.style.webkitUserSelect="text",h.style.MozUserSelect="text",h.style.msUserSelect="text",h.style.userSelect="text",h.addEventListener("copy",function(r){if(r.stopPropagation(),t.format){if(r.preventDefault(),void 0===r.clipboardData){a&&console.warn("unable to use e.clipboardData"),a&&console.warn("trying IE specific stuff"),window.clipboardData.clearData();var n=o[t.format]||o.default;window.clipboardData.setData(n,e)}else r.clipboardData.clearData(),r.clipboardData.setData(t.format,e)}t.onCopy&&(r.preventDefault(),t.onCopy(r.clipboardData))}),document.body.appendChild(h),l.selectNodeContents(h),c.addRange(l),!document.execCommand("copy"))throw Error("copy command was unsuccessful");f=!0}catch(n){a&&console.error("unable to copy using execCommand: ",n),a&&console.warn("trying IE specific stuff");try{window.clipboardData.setData(t.format||"text",e),t.onCopy&&t.onCopy(window.clipboardData),f=!0}catch(n){a&&console.error("unable to copy using clipboardData: ",n),a&&console.error("falling back to prompt"),r="message"in t?t.message:"Copy to clipboard: #{key}, Enter",i=(/mac os x/i.test(navigator.userAgent)?"⌘":"Ctrl")+"+C",s=r.replace(/#{\s*key\s*}/g,i),window.prompt(s,e)}}finally{c&&("function"==typeof c.removeRange?c.removeRange(l):c.removeAllRanges()),h&&document.body.removeChild(h),u()}return f}},58005:function(e){"use strict";var t="%[a-f0-9]{2}",r=RegExp("("+t+")|([^%]+?)","gi"),n=RegExp("("+t+")+","gi");e.exports=function(e){if("string"!=typeof e)throw TypeError("Expected `encodedURI` to be of type `string`, got `"+typeof e+"`");try{return e=e.replace(/\+/g," "),decodeURIComponent(e)}catch(t){return function(e){for(var t={"%FE%FF":"��","%FF%FE":"��"},o=n.exec(e);o;){try{t[o[0]]=decodeURIComponent(o[0])}catch(e){var i=function(e){try{return decodeURIComponent(e)}catch(o){for(var t=e.match(r)||[],n=1;n<t.length;n++)t=(e=(function e(t,r){try{return[decodeURIComponent(t.join(""))]}catch(e){}if(1===t.length)return t;r=r||1;var n=t.slice(0,r),o=t.slice(r);return Array.prototype.concat.call([],e(n),e(o))})(t,n).join("")).match(r)||[];return e}}(o[0]);i!==o[0]&&(t[o[0]]=i)}o=n.exec(e)}t["%C2"]="�";for(var a=Object.keys(t),s=0;s<a.length;s++){var u=a[s];e=e.replace(RegExp(u,"g"),t[u])}return e}(e)}}},78343:function(e){"use strict";var t={single_source_shortest_paths:function(e,r,n){var o,i,a,s,u,l,c,h={},f={};f[r]=0;var d=t.PriorityQueue.make();for(d.push(r,0);!d.empty();)for(a in i=(o=d.pop()).value,s=o.cost,u=e[i]||{})u.hasOwnProperty(a)&&(l=s+u[a],c=f[a],(void 0===f[a]||c>l)&&(f[a]=l,d.push(a,l),h[a]=i));if(void 0!==n&&void 0===f[n])throw Error(["Could not find a path from ",r," to ",n,"."].join(""));return h},extract_shortest_path_from_predecessor_list:function(e,t){for(var r=[],n=t;n;)r.push(n),e[n],n=e[n];return r.reverse(),r},find_path:function(e,r,n){var o=t.single_source_shortest_paths(e,r,n);return t.extract_shortest_path_from_predecessor_list(o,n)},PriorityQueue:{make:function(e){var r,n=t.PriorityQueue,o={};for(r in e=e||{},n)n.hasOwnProperty(r)&&(o[r]=n[r]);return o.queue=[],o.sorter=e.sorter||n.default_sorter,o},default_sorter:function(e,t){return e.cost-t.cost},push:function(e,t){this.queue.push({value:e,cost:t}),this.queue.sort(this.sorter)},pop:function(){return this.queue.shift()},empty:function(){return 0===this.queue.length}}};e.exports=t},53216:function(e){"use strict";e.exports=function(e){for(var t=[],r=e.length,n=0;n<r;n++){var o=e.charCodeAt(n);if(o>=55296&&o<=56319&&r>n+1){var i=e.charCodeAt(n+1);i>=56320&&i<=57343&&(o=(o-55296)*1024+i-56320+65536,n+=1)}if(o<128){t.push(o);continue}if(o<2048){t.push(o>>6|192),t.push(63&o|128);continue}if(o<55296||o>=57344&&o<65536){t.push(o>>12|224),t.push(o>>6&63|128),t.push(63&o|128);continue}if(o>=65536&&o<=1114111){t.push(o>>18|240),t.push(o>>12&63|128),t.push(o>>6&63|128),t.push(63&o|128);continue}t.push(239,191,189)}return new Uint8Array(t).buffer}},61820:function(e){"use strict";e.exports=function(e,t){for(var r={},n=Object.keys(e),o=Array.isArray(t),i=0;i<n.length;i++){var a=n[i],s=e[a];(o?-1!==t.indexOf(a):t(a,s,e))&&(r[a]=s)}return r}},92395:function(e,t,r){"use strict";r.d(t,{tv:function(){return g}});var n,o,i,a=r(2265),s=Object.defineProperty,u=Object.getOwnPropertySymbols,l=Object.prototype.hasOwnProperty,c=Object.prototype.propertyIsEnumerable,h=(e,t,r)=>t in e?s(e,t,{enumerable:!0,configurable:!0,writable:!0,value:r}):e[t]=r,f=(e,t)=>{for(var r in t||(t={}))l.call(t,r)&&h(e,r,t[r]);if(u)for(var r of u(t))c.call(t,r)&&h(e,r,t[r]);return e},d=(e,t)=>{var r={};for(var n in e)l.call(e,n)&&0>t.indexOf(n)&&(r[n]=e[n]);if(null!=e&&u)for(var n of u(e))0>t.indexOf(n)&&c.call(e,n)&&(r[n]=e[n]);return r};(e=>{let t=class{constructor(e,r,n,i){if(this.version=e,this.errorCorrectionLevel=r,this.modules=[],this.isFunction=[],e<t.MIN_VERSION||e>t.MAX_VERSION)throw RangeError("Version value out of range");if(i<-1||i>7)throw RangeError("Mask value out of range");this.size=4*e+17;let a=[];for(let e=0;e<this.size;e++)a.push(!1);for(let e=0;e<this.size;e++)this.modules.push(a.slice()),this.isFunction.push(a.slice());this.drawFunctionPatterns();let s=this.addEccAndInterleave(n);if(this.drawCodewords(s),-1==i){let e=1e9;for(let t=0;t<8;t++){this.applyMask(t),this.drawFormatBits(t);let r=this.getPenaltyScore();r<e&&(i=t,e=r),this.applyMask(t)}}o(0<=i&&i<=7),this.mask=i,this.applyMask(i),this.drawFormatBits(i),this.isFunction=[]}static encodeText(r,n){let o=e.QrSegment.makeSegments(r);return t.encodeSegments(o,n)}static encodeBinary(r,n){let o=e.QrSegment.makeBytes(r);return t.encodeSegments([o],n)}static encodeSegments(e,n,i=1,s=40,u=-1,l=!0){let c,h;if(!(t.MIN_VERSION<=i&&i<=s&&s<=t.MAX_VERSION)||u<-1||u>7)throw RangeError("Invalid value");for(c=i;;c++){let r=8*t.getNumDataCodewords(c,n),o=a.getTotalBits(e,c);if(o<=r){h=o;break}if(c>=s)throw RangeError("Data too long")}for(let e of[t.Ecc.MEDIUM,t.Ecc.QUARTILE,t.Ecc.HIGH])l&&h<=8*t.getNumDataCodewords(c,e)&&(n=e);let f=[];for(let t of e)for(let e of(r(t.mode.modeBits,4,f),r(t.numChars,t.mode.numCharCountBits(c),f),t.getData()))f.push(e);o(f.length==h);let d=8*t.getNumDataCodewords(c,n);o(f.length<=d),r(0,Math.min(4,d-f.length),f),r(0,(8-f.length%8)%8,f),o(f.length%8==0);for(let e=236;f.length<d;e^=253)r(e,8,f);let p=[];for(;8*p.length<f.length;)p.push(0);return f.forEach((e,t)=>p[t>>>3]|=e<<7-(7&t)),new t(c,n,p,u)}getModule(e,t){return 0<=e&&e<this.size&&0<=t&&t<this.size&&this.modules[t][e]}getModules(){return this.modules}drawFunctionPatterns(){for(let e=0;e<this.size;e++)this.setFunctionModule(6,e,e%2==0),this.setFunctionModule(e,6,e%2==0);this.drawFinderPattern(3,3),this.drawFinderPattern(this.size-4,3),this.drawFinderPattern(3,this.size-4);let e=this.getAlignmentPatternPositions(),t=e.length;for(let r=0;r<t;r++)for(let n=0;n<t;n++)0==r&&0==n||0==r&&n==t-1||r==t-1&&0==n||this.drawAlignmentPattern(e[r],e[n]);this.drawFormatBits(0),this.drawVersion()}drawFormatBits(e){let t=this.errorCorrectionLevel.formatBits<<3|e,r=t;for(let e=0;e<10;e++)r=r<<1^(r>>>9)*1335;let i=(t<<10|r)^21522;o(i>>>15==0);for(let e=0;e<=5;e++)this.setFunctionModule(8,e,n(i,e));this.setFunctionModule(8,7,n(i,6)),this.setFunctionModule(8,8,n(i,7)),this.setFunctionModule(7,8,n(i,8));for(let e=9;e<15;e++)this.setFunctionModule(14-e,8,n(i,e));for(let e=0;e<8;e++)this.setFunctionModule(this.size-1-e,8,n(i,e));for(let e=8;e<15;e++)this.setFunctionModule(8,this.size-15+e,n(i,e));this.setFunctionModule(8,this.size-8,!0)}drawVersion(){if(this.version<7)return;let e=this.version;for(let t=0;t<12;t++)e=e<<1^(e>>>11)*7973;let t=this.version<<12|e;o(t>>>18==0);for(let e=0;e<18;e++){let r=n(t,e),o=this.size-11+e%3,i=Math.floor(e/3);this.setFunctionModule(o,i,r),this.setFunctionModule(i,o,r)}}drawFinderPattern(e,t){for(let r=-4;r<=4;r++)for(let n=-4;n<=4;n++){let o=Math.max(Math.abs(n),Math.abs(r)),i=e+n,a=t+r;0<=i&&i<this.size&&0<=a&&a<this.size&&this.setFunctionModule(i,a,2!=o&&4!=o)}}drawAlignmentPattern(e,t){for(let r=-2;r<=2;r++)for(let n=-2;n<=2;n++)this.setFunctionModule(e+n,t+r,1!=Math.max(Math.abs(n),Math.abs(r)))}setFunctionModule(e,t,r){this.modules[t][e]=r,this.isFunction[t][e]=!0}addEccAndInterleave(e){let r=this.version,n=this.errorCorrectionLevel;if(e.length!=t.getNumDataCodewords(r,n))throw RangeError("Invalid argument");let i=t.NUM_ERROR_CORRECTION_BLOCKS[n.ordinal][r],a=t.ECC_CODEWORDS_PER_BLOCK[n.ordinal][r],s=Math.floor(t.getNumRawDataModules(r)/8),u=i-s%i,l=Math.floor(s/i),c=[],h=t.reedSolomonComputeDivisor(a);for(let r=0,n=0;r<i;r++){let o=e.slice(n,n+l-a+(r<u?0:1));n+=o.length;let i=t.reedSolomonComputeRemainder(o,h);r<u&&o.push(0),c.push(o.concat(i))}let f=[];for(let e=0;e<c[0].length;e++)c.forEach((t,r)=>{(e!=l-a||r>=u)&&f.push(t[e])});return o(f.length==s),f}drawCodewords(e){if(e.length!=Math.floor(t.getNumRawDataModules(this.version)/8))throw RangeError("Invalid argument");let r=0;for(let t=this.size-1;t>=1;t-=2){6==t&&(t=5);for(let o=0;o<this.size;o++)for(let i=0;i<2;i++){let a=t-i,s=(t+1&2)==0?this.size-1-o:o;!this.isFunction[s][a]&&r<8*e.length&&(this.modules[s][a]=n(e[r>>>3],7-(7&r)),r++)}}o(r==8*e.length)}applyMask(e){if(e<0||e>7)throw RangeError("Mask value out of range");for(let t=0;t<this.size;t++)for(let r=0;r<this.size;r++){let n;switch(e){case 0:n=(r+t)%2==0;break;case 1:n=t%2==0;break;case 2:n=r%3==0;break;case 3:n=(r+t)%3==0;break;case 4:n=(Math.floor(r/3)+Math.floor(t/2))%2==0;break;case 5:n=r*t%2+r*t%3==0;break;case 6:n=(r*t%2+r*t%3)%2==0;break;case 7:n=((r+t)%2+r*t%3)%2==0;break;default:throw Error("Unreachable")}!this.isFunction[t][r]&&n&&(this.modules[t][r]=!this.modules[t][r])}}getPenaltyScore(){let e=0;for(let r=0;r<this.size;r++){let n=!1,o=0,i=[0,0,0,0,0,0,0];for(let a=0;a<this.size;a++)this.modules[r][a]==n?5==++o?e+=t.PENALTY_N1:o>5&&e++:(this.finderPenaltyAddHistory(o,i),n||(e+=this.finderPenaltyCountPatterns(i)*t.PENALTY_N3),n=this.modules[r][a],o=1);e+=this.finderPenaltyTerminateAndCount(n,o,i)*t.PENALTY_N3}for(let r=0;r<this.size;r++){let n=!1,o=0,i=[0,0,0,0,0,0,0];for(let a=0;a<this.size;a++)this.modules[a][r]==n?5==++o?e+=t.PENALTY_N1:o>5&&e++:(this.finderPenaltyAddHistory(o,i),n||(e+=this.finderPenaltyCountPatterns(i)*t.PENALTY_N3),n=this.modules[a][r],o=1);e+=this.finderPenaltyTerminateAndCount(n,o,i)*t.PENALTY_N3}for(let r=0;r<this.size-1;r++)for(let n=0;n<this.size-1;n++){let o=this.modules[r][n];o==this.modules[r][n+1]&&o==this.modules[r+1][n]&&o==this.modules[r+1][n+1]&&(e+=t.PENALTY_N2)}let r=0;for(let e of this.modules)r=e.reduce((e,t)=>e+(t?1:0),r);let n=this.size*this.size,i=Math.ceil(Math.abs(20*r-10*n)/n)-1;return o(0<=i&&i<=9),o(0<=(e+=i*t.PENALTY_N4)&&e<=2568888),e}getAlignmentPatternPositions(){if(1==this.version)return[];{let e=Math.floor(this.version/7)+2,t=32==this.version?26:2*Math.ceil((4*this.version+4)/(2*e-2)),r=[6];for(let n=this.size-7;r.length<e;n-=t)r.splice(1,0,n);return r}}static getNumRawDataModules(e){if(e<t.MIN_VERSION||e>t.MAX_VERSION)throw RangeError("Version number out of range");let r=(16*e+128)*e+64;if(e>=2){let t=Math.floor(e/7)+2;r-=(25*t-10)*t-55,e>=7&&(r-=36)}return o(208<=r&&r<=29648),r}static getNumDataCodewords(e,r){return Math.floor(t.getNumRawDataModules(e)/8)-t.ECC_CODEWORDS_PER_BLOCK[r.ordinal][e]*t.NUM_ERROR_CORRECTION_BLOCKS[r.ordinal][e]}static reedSolomonComputeDivisor(e){if(e<1||e>255)throw RangeError("Degree out of range");let r=[];for(let t=0;t<e-1;t++)r.push(0);r.push(1);let n=1;for(let o=0;o<e;o++){for(let e=0;e<r.length;e++)r[e]=t.reedSolomonMultiply(r[e],n),e+1<r.length&&(r[e]^=r[e+1]);n=t.reedSolomonMultiply(n,2)}return r}static reedSolomonComputeRemainder(e,r){let n=r.map(e=>0);for(let o of e){let e=o^n.shift();n.push(0),r.forEach((r,o)=>n[o]^=t.reedSolomonMultiply(r,e))}return n}static reedSolomonMultiply(e,t){if(e>>>8!=0||t>>>8!=0)throw RangeError("Byte out of range");let r=0;for(let n=7;n>=0;n--)r=r<<1^(r>>>7)*285^(t>>>n&1)*e;return o(r>>>8==0),r}finderPenaltyCountPatterns(e){let t=e[1];o(t<=3*this.size);let r=t>0&&e[2]==t&&e[3]==3*t&&e[4]==t&&e[5]==t;return(r&&e[0]>=4*t&&e[6]>=t?1:0)+(r&&e[6]>=4*t&&e[0]>=t?1:0)}finderPenaltyTerminateAndCount(e,t,r){return e&&(this.finderPenaltyAddHistory(t,r),t=0),t+=this.size,this.finderPenaltyAddHistory(t,r),this.finderPenaltyCountPatterns(r)}finderPenaltyAddHistory(e,t){0==t[0]&&(e+=this.size),t.pop(),t.unshift(e)}};function r(e,t,r){if(t<0||t>31||e>>>t!=0)throw RangeError("Value out of range");for(let n=t-1;n>=0;n--)r.push(e>>>n&1)}function n(e,t){return(e>>>t&1)!=0}function o(e){if(!e)throw Error("Assertion error")}t.MIN_VERSION=1,t.MAX_VERSION=40,t.PENALTY_N1=3,t.PENALTY_N2=3,t.PENALTY_N3=40,t.PENALTY_N4=10,t.ECC_CODEWORDS_PER_BLOCK=[[-1,7,10,15,20,26,18,20,24,30,18,20,24,26,30,22,24,28,30,28,28,28,28,30,30,26,28,30,30,30,30,30,30,30,30,30,30,30,30,30,30],[-1,10,16,26,18,24,16,18,22,22,26,30,22,22,24,24,28,28,26,26,26,26,28,28,28,28,28,28,28,28,28,28,28,28,28,28,28,28,28,28,28],[-1,13,22,18,26,18,24,18,22,20,24,28,26,24,20,30,24,28,28,26,30,28,30,30,30,30,28,30,30,30,30,30,30,30,30,30,30,30,30,30,30],[-1,17,28,22,16,22,28,26,26,24,28,24,28,22,24,24,30,28,28,26,28,30,24,30,30,30,30,30,30,30,30,30,30,30,30,30,30,30,30,30,30]],t.NUM_ERROR_CORRECTION_BLOCKS=[[-1,1,1,1,1,1,2,2,2,2,4,4,4,4,4,6,6,6,6,7,8,8,9,9,10,12,12,12,13,14,15,16,17,18,19,19,20,21,22,24,25],[-1,1,1,1,2,2,4,4,4,5,5,5,8,9,9,10,10,11,13,14,16,17,17,18,20,21,23,25,26,28,29,31,33,35,37,38,40,43,45,47,49],[-1,1,1,2,2,4,4,6,6,8,8,8,10,12,16,12,17,16,18,21,20,23,23,25,27,29,34,34,35,38,40,43,45,48,51,53,56,59,62,65,68],[-1,1,1,2,4,4,4,5,6,8,8,11,11,16,16,18,16,19,21,25,25,25,34,30,32,35,37,40,42,45,48,51,54,57,60,63,66,70,74,77,81]],e.QrCode=t;let i=class{constructor(e,t,r){if(this.mode=e,this.numChars=t,this.bitData=r,t<0)throw RangeError("Invalid argument");this.bitData=r.slice()}static makeBytes(e){let t=[];for(let n of e)r(n,8,t);return new i(i.Mode.BYTE,e.length,t)}static makeNumeric(e){if(!i.isNumeric(e))throw RangeError("String contains non-numeric characters");let t=[];for(let n=0;n<e.length;){let o=Math.min(e.length-n,3);r(parseInt(e.substr(n,o),10),3*o+1,t),n+=o}return new i(i.Mode.NUMERIC,e.length,t)}static makeAlphanumeric(e){let t;if(!i.isAlphanumeric(e))throw RangeError("String contains unencodable characters in alphanumeric mode");let n=[];for(t=0;t+2<=e.length;t+=2){let o=45*i.ALPHANUMERIC_CHARSET.indexOf(e.charAt(t));r(o+=i.ALPHANUMERIC_CHARSET.indexOf(e.charAt(t+1)),11,n)}return t<e.length&&r(i.ALPHANUMERIC_CHARSET.indexOf(e.charAt(t)),6,n),new i(i.Mode.ALPHANUMERIC,e.length,n)}static makeSegments(e){return""==e?[]:i.isNumeric(e)?[i.makeNumeric(e)]:i.isAlphanumeric(e)?[i.makeAlphanumeric(e)]:[i.makeBytes(i.toUtf8ByteArray(e))]}static makeEci(e){let t=[];if(e<0)throw RangeError("ECI assignment value out of range");if(e<128)r(e,8,t);else if(e<16384)r(2,2,t),r(e,14,t);else if(e<1e6)r(6,3,t),r(e,21,t);else throw RangeError("ECI assignment value out of range");return new i(i.Mode.ECI,0,t)}static isNumeric(e){return i.NUMERIC_REGEX.test(e)}static isAlphanumeric(e){return i.ALPHANUMERIC_REGEX.test(e)}getData(){return this.bitData.slice()}static getTotalBits(e,t){let r=0;for(let n of e){let e=n.mode.numCharCountBits(t);if(n.numChars>=1<<e)return 1/0;r+=4+e+n.bitData.length}return r}static toUtf8ByteArray(e){e=encodeURI(e);let t=[];for(let r=0;r<e.length;r++)"%"!=e.charAt(r)?t.push(e.charCodeAt(r)):(t.push(parseInt(e.substr(r+1,2),16)),r+=2);return t}},a=i;a.NUMERIC_REGEX=/^[0-9]*$/,a.ALPHANUMERIC_REGEX=/^[A-Z0-9 $%*+.\/:-]*$/,a.ALPHANUMERIC_CHARSET="0123456789ABCDEFGHIJKLMNOPQRSTUVWXYZ $%*+-./:",e.QrSegment=a})(i||(i={})),(e=>{let t=class{constructor(e,t){this.ordinal=e,this.formatBits=t}};t.LOW=new t(0,1),t.MEDIUM=new t(1,0),t.QUARTILE=new t(2,3),t.HIGH=new t(3,2),e.Ecc=t})((n=i||(i={})).QrCode||(n.QrCode={})),(e=>{let t=class{constructor(e,t){this.modeBits=e,this.numBitsCharCount=t}numCharCountBits(e){return this.numBitsCharCount[Math.floor((e+7)/17)]}};t.NUMERIC=new t(1,[10,12,14]),t.ALPHANUMERIC=new t(2,[9,11,13]),t.BYTE=new t(4,[8,16,16]),t.KANJI=new t(8,[8,10,12]),t.ECI=new t(7,[0,0,0]),e.Mode=t})((o=i||(i={})).QrSegment||(o.QrSegment={}));var p=i,b={L:p.QrCode.Ecc.LOW,M:p.QrCode.Ecc.MEDIUM,Q:p.QrCode.Ecc.QUARTILE,H:p.QrCode.Ecc.HIGH};function g(e){let{value:t,size:r=128,level:n="L",bgColor:o="#FFFFFF",fgColor:i="#000000",includeMargin:s=!1,imageSettings:u}=e,l=d(e,["value","size","level","bgColor","fgColor","includeMargin","imageSettings"]),c=p.QrCode.encodeText(t,b[n]).getModules(),h=s?4:0,g=c.length+2*h,w=function(e,t,r,n){if(null==n)return null;let o=e.length+2*(r?4:0),i=Math.floor(.1*t),a=o/t,s=(n.width||i)*a,u=(n.height||i)*a,l=null==n.x?e.length/2-s/2:n.x*a,c=null==n.y?e.length/2-u/2:n.y*a,h=null;if(n.excavate){let e=Math.floor(l),t=Math.floor(c);h={x:e,y:t,w:Math.ceil(s+l-e),h:Math.ceil(u+c-t)}}return{x:l,y:c,h:u,w:s,excavation:h}}(c,r,s,u),y=null;if(null!=u&&null!=w){if(null!=w.excavation){var m,v;m=c,v=w.excavation,c=m.slice().map((e,t)=>t<v.y||t>=v.y+v.h?e:e.map((e,t)=>(t<v.x||t>=v.x+v.w)&&e))}y=a.createElement("image",{xlinkHref:u.src,height:w.h,width:w.w,x:w.x+h,y:w.y+h,preserveAspectRatio:"none"})}let D=function(e,t=0){let r=[];return e.forEach(function(e,n){let o=null;e.forEach(function(i,a){if(!i&&null!==o){r.push(`M${o+t} ${n+t}h${a-o}v1H${o+t}z`),o=null;return}if(a===e.length-1){if(!i)return;null===o?r.push(`M${a+t},${n+t} h1v1H${a+t}z`):r.push(`M${o+t},${n+t} h${a+1-o}v1H${o+t}z`);return}i&&null===o&&(o=a)})}),r.join("")}(c,h);return a.createElement("svg",f({height:r,width:r,viewBox:`0 0 ${g} ${g}`},l),a.createElement("path",{fill:o,d:`M0,0 h${g}v${g}H0z`,shapeRendering:"crispEdges"}),a.createElement("path",{fill:i,d:D,shapeRendering:"crispEdges"}),y)}!function(){try{new Path2D().addPath(new Path2D)}catch(e){return!1}}()},75298:function(e,t,r){let n=r(47363),o=r(37621),i=r(46028),a=r(12330);function s(e,t,r,i,a){let s=[].slice.call(arguments,1),u=s.length,l="function"==typeof s[u-1];if(!l&&!n())throw Error("Callback required as last argument");if(l){if(u<2)throw Error("Too few arguments provided");2===u?(a=r,r=t,t=i=void 0):3===u&&(t.getContext&&void 0===a?(a=i,i=void 0):(a=i,i=r,r=t,t=void 0))}else{if(u<1)throw Error("Too few arguments provided");return 1===u?(r=t,t=i=void 0):2!==u||t.getContext||(i=r,r=t,t=void 0),new Promise(function(n,a){try{let a=o.create(r,i);n(e(a,t,i))}catch(e){a(e)}})}try{let n=o.create(r,i);a(null,e(n,t,i))}catch(e){a(e)}}t.create=o.create,t.toCanvas=s.bind(null,i.render),t.toDataURL=s.bind(null,i.renderToDataURL),t.toString=s.bind(null,function(e,t,r){return a.render(e,r)})},47363:function(e){e.exports=function(){return"function"==typeof Promise&&Promise.prototype&&Promise.prototype.then}},8177:function(e,t,r){let n=r(13400).getSymbolSize;t.getRowColCoords=function(e){if(1===e)return[];let t=Math.floor(e/7)+2,r=n(e),o=145===r?26:2*Math.ceil((r-13)/(2*t-2)),i=[r-7];for(let e=1;e<t-1;e++)i[e]=i[e-1]-o;return i.push(6),i.reverse()},t.getPositions=function(e){let r=[],n=t.getRowColCoords(e),o=n.length;for(let e=0;e<o;e++)for(let t=0;t<o;t++)(0!==e||0!==t)&&(0!==e||t!==o-1)&&(e!==o-1||0!==t)&&r.push([n[e],n[t]]);return r}},77654:function(e,t,r){let n=r(37662),o=["0","1","2","3","4","5","6","7","8","9","A","B","C","D","E","F","G","H","I","J","K","L","M","N","O","P","Q","R","S","T","U","V","W","X","Y","Z"," ","$","%","*","+","-",".","/",":"];function i(e){this.mode=n.ALPHANUMERIC,this.data=e}i.getBitsLength=function(e){return 11*Math.floor(e/2)+e%2*6},i.prototype.getLength=function(){return this.data.length},i.prototype.getBitsLength=function(){return i.getBitsLength(this.data.length)},i.prototype.write=function(e){let t;for(t=0;t+2<=this.data.length;t+=2){let r=45*o.indexOf(this.data[t]);r+=o.indexOf(this.data[t+1]),e.put(r,11)}this.data.length%2&&e.put(o.indexOf(this.data[t]),6)},e.exports=i},41904:function(e){function t(){this.buffer=[],this.length=0}t.prototype={get:function(e){return(this.buffer[Math.floor(e/8)]>>>7-e%8&1)==1},put:function(e,t){for(let r=0;r<t;r++)this.putBit((e>>>t-r-1&1)==1)},getLengthInBits:function(){return this.length},putBit:function(e){let t=Math.floor(this.length/8);this.buffer.length<=t&&this.buffer.push(0),e&&(this.buffer[t]|=128>>>this.length%8),this.length++}},e.exports=t},21091:function(e){function t(e){if(!e||e<1)throw Error("BitMatrix size must be defined and greater than 0");this.size=e,this.data=new Uint8Array(e*e),this.reservedBit=new Uint8Array(e*e)}t.prototype.set=function(e,t,r,n){let o=e*this.size+t;this.data[o]=r,n&&(this.reservedBit[o]=!0)},t.prototype.get=function(e,t){return this.data[e*this.size+t]},t.prototype.xor=function(e,t,r){this.data[e*this.size+t]^=r},t.prototype.isReserved=function(e,t){return this.reservedBit[e*this.size+t]},e.exports=t},90690:function(e,t,r){let n=r(53216),o=r(37662);function i(e){this.mode=o.BYTE,"string"==typeof e&&(e=n(e)),this.data=new Uint8Array(e)}i.getBitsLength=function(e){return 8*e},i.prototype.getLength=function(){return this.data.length},i.prototype.getBitsLength=function(){return i.getBitsLength(this.data.length)},i.prototype.write=function(e){for(let t=0,r=this.data.length;t<r;t++)e.put(this.data[t],8)},e.exports=i},37039:function(e,t,r){let n=r(9406),o=[1,1,1,1,1,1,1,1,1,1,2,2,1,2,2,4,1,2,4,4,2,4,4,4,2,4,6,5,2,4,6,6,2,5,8,8,4,5,8,8,4,5,8,11,4,8,10,11,4,9,12,16,4,9,16,16,6,10,12,18,6,10,17,16,6,11,16,19,6,13,18,21,7,14,21,25,8,16,20,25,8,17,23,25,9,17,23,34,9,18,25,30,10,20,27,32,12,21,29,35,12,23,34,37,12,25,34,40,13,26,35,42,14,28,38,45,15,29,40,48,16,31,43,51,17,33,45,54,18,35,48,57,19,37,51,60,19,38,53,63,20,40,56,66,21,43,59,70,22,45,62,74,24,47,65,77,25,49,68,81],i=[7,10,13,17,10,16,22,28,15,26,36,44,20,36,52,64,26,48,72,88,36,64,96,112,40,72,108,130,48,88,132,156,60,110,160,192,72,130,192,224,80,150,224,264,96,176,260,308,104,198,288,352,120,216,320,384,132,240,360,432,144,280,408,480,168,308,448,532,180,338,504,588,196,364,546,650,224,416,600,700,224,442,644,750,252,476,690,816,270,504,750,900,300,560,810,960,312,588,870,1050,336,644,952,1110,360,700,1020,1200,390,728,1050,1260,420,784,1140,1350,450,812,1200,1440,480,868,1290,1530,510,924,1350,1620,540,980,1440,1710,570,1036,1530,1800,570,1064,1590,1890,600,1120,1680,1980,630,1204,1770,2100,660,1260,1860,2220,720,1316,1950,2310,750,1372,2040,2430];t.getBlocksCount=function(e,t){switch(t){case n.L:return o[(e-1)*4+0];case n.M:return o[(e-1)*4+1];case n.Q:return o[(e-1)*4+2];case n.H:return o[(e-1)*4+3];default:return}},t.getTotalCodewordsCount=function(e,t){switch(t){case n.L:return i[(e-1)*4+0];case n.M:return i[(e-1)*4+1];case n.Q:return i[(e-1)*4+2];case n.H:return i[(e-1)*4+3];default:return}}},9406:function(e,t){t.L={bit:1},t.M={bit:0},t.Q={bit:3},t.H={bit:2},t.isValid=function(e){return e&&void 0!==e.bit&&e.bit>=0&&e.bit<4},t.from=function(e,r){if(t.isValid(e))return e;try{return function(e){if("string"!=typeof e)throw Error("Param is not a string");switch(e.toLowerCase()){case"l":case"low":return t.L;case"m":case"medium":return t.M;case"q":case"quartile":return t.Q;case"h":case"high":return t.H;default:throw Error("Unknown EC Level: "+e)}}(e)}catch(e){return r}}},78241:function(e,t,r){let n=r(13400).getSymbolSize;t.getPositions=function(e){let t=n(e);return[[0,0],[t-7,0],[0,t-7]]}},50237:function(e,t,r){let n=r(13400),o=n.getBCHDigit(1335);t.getEncodedBits=function(e,t){let r=e.bit<<3|t,i=r<<10;for(;n.getBCHDigit(i)-o>=0;)i^=1335<<n.getBCHDigit(i)-o;return(r<<10|i)^21522}},51309:function(e,t){let r=new Uint8Array(512),n=new Uint8Array(256);!function(){let e=1;for(let t=0;t<255;t++)r[t]=e,n[e]=t,256&(e<<=1)&&(e^=285);for(let e=255;e<512;e++)r[e]=r[e-255]}(),t.log=function(e){if(e<1)throw Error("log("+e+")");return n[e]},t.exp=function(e){return r[e]},t.mul=function(e,t){return 0===e||0===t?0:r[n[e]+n[t]]}},69592:function(e,t,r){let n=r(37662),o=r(13400);function i(e){this.mode=n.KANJI,this.data=e}i.getBitsLength=function(e){return 13*e},i.prototype.getLength=function(){return this.data.length},i.prototype.getBitsLength=function(){return i.getBitsLength(this.data.length)},i.prototype.write=function(e){let t;for(t=0;t<this.data.length;t++){let r=o.toSJIS(this.data[t]);if(r>=33088&&r<=40956)r-=33088;else if(r>=57408&&r<=60351)r-=49472;else throw Error("Invalid SJIS character: "+this.data[t]+"\nMake sure your charset is UTF-8");r=(r>>>8&255)*192+(255&r),e.put(r,13)}},e.exports=i},68334:function(e,t){t.Patterns={PATTERN000:0,PATTERN001:1,PATTERN010:2,PATTERN011:3,PATTERN100:4,PATTERN101:5,PATTERN110:6,PATTERN111:7};let r={N1:3,N2:3,N3:40,N4:10};t.isValid=function(e){return null!=e&&""!==e&&!isNaN(e)&&e>=0&&e<=7},t.from=function(e){return t.isValid(e)?parseInt(e,10):void 0},t.getPenaltyN1=function(e){let t=e.size,n=0,o=0,i=0,a=null,s=null;for(let u=0;u<t;u++){o=i=0,a=s=null;for(let l=0;l<t;l++){let t=e.get(u,l);t===a?o++:(o>=5&&(n+=r.N1+(o-5)),a=t,o=1),(t=e.get(l,u))===s?i++:(i>=5&&(n+=r.N1+(i-5)),s=t,i=1)}o>=5&&(n+=r.N1+(o-5)),i>=5&&(n+=r.N1+(i-5))}return n},t.getPenaltyN2=function(e){let t=e.size,n=0;for(let r=0;r<t-1;r++)for(let o=0;o<t-1;o++){let t=e.get(r,o)+e.get(r,o+1)+e.get(r+1,o)+e.get(r+1,o+1);(4===t||0===t)&&n++}return n*r.N2},t.getPenaltyN3=function(e){let t=e.size,n=0,o=0,i=0;for(let r=0;r<t;r++){o=i=0;for(let a=0;a<t;a++)o=o<<1&2047|e.get(r,a),a>=10&&(1488===o||93===o)&&n++,i=i<<1&2047|e.get(a,r),a>=10&&(1488===i||93===i)&&n++}return n*r.N3},t.getPenaltyN4=function(e){let t=0,n=e.data.length;for(let r=0;r<n;r++)t+=e.data[r];return Math.abs(Math.ceil(100*t/n/5)-10)*r.N4},t.applyMask=function(e,r){let n=r.size;for(let o=0;o<n;o++)for(let i=0;i<n;i++)r.isReserved(i,o)||r.xor(i,o,function(e,r,n){switch(e){case t.Patterns.PATTERN000:return(r+n)%2==0;case t.Patterns.PATTERN001:return r%2==0;case t.Patterns.PATTERN010:return n%3==0;case t.Patterns.PATTERN011:return(r+n)%3==0;case t.Patterns.PATTERN100:return(Math.floor(r/2)+Math.floor(n/3))%2==0;case t.Patterns.PATTERN101:return r*n%2+r*n%3==0;case t.Patterns.PATTERN110:return(r*n%2+r*n%3)%2==0;case t.Patterns.PATTERN111:return(r*n%3+(r+n)%2)%2==0;default:throw Error("bad maskPattern:"+e)}}(e,i,o))},t.getBestMask=function(e,r){let n=Object.keys(t.Patterns).length,o=0,i=1/0;for(let a=0;a<n;a++){r(a),t.applyMask(a,e);let n=t.getPenaltyN1(e)+t.getPenaltyN2(e)+t.getPenaltyN3(e)+t.getPenaltyN4(e);t.applyMask(a,e),n<i&&(i=n,o=a)}return o}},37662:function(e,t,r){let n=r(64956),o=r(66579);t.NUMERIC={id:"Numeric",bit:1,ccBits:[10,12,14]},t.ALPHANUMERIC={id:"Alphanumeric",bit:2,ccBits:[9,11,13]},t.BYTE={id:"Byte",bit:4,ccBits:[8,16,16]},t.KANJI={id:"Kanji",bit:8,ccBits:[8,10,12]},t.MIXED={bit:-1},t.getCharCountIndicator=function(e,t){if(!e.ccBits)throw Error("Invalid mode: "+e);if(!n.isValid(t))throw Error("Invalid version: "+t);return t>=1&&t<10?e.ccBits[0]:t<27?e.ccBits[1]:e.ccBits[2]},t.getBestModeForData=function(e){return o.testNumeric(e)?t.NUMERIC:o.testAlphanumeric(e)?t.ALPHANUMERIC:o.testKanji(e)?t.KANJI:t.BYTE},t.toString=function(e){if(e&&e.id)return e.id;throw Error("Invalid mode")},t.isValid=function(e){return e&&e.bit&&e.ccBits},t.from=function(e,r){if(t.isValid(e))return e;try{return function(e){if("string"!=typeof e)throw Error("Param is not a string");switch(e.toLowerCase()){case"numeric":return t.NUMERIC;case"alphanumeric":return t.ALPHANUMERIC;case"kanji":return t.KANJI;case"byte":return t.BYTE;default:throw Error("Unknown mode: "+e)}}(e)}catch(e){return r}}},10894:function(e,t,r){let n=r(37662);function o(e){this.mode=n.NUMERIC,this.data=e.toString()}o.getBitsLength=function(e){return 10*Math.floor(e/3)+(e%3?e%3*3+1:0)},o.prototype.getLength=function(){return this.data.length},o.prototype.getBitsLength=function(){return o.getBitsLength(this.data.length)},o.prototype.write=function(e){let t,r;for(t=0;t+3<=this.data.length;t+=3)r=parseInt(this.data.substr(t,3),10),e.put(r,10);let n=this.data.length-t;n>0&&(r=parseInt(this.data.substr(t),10),e.put(r,3*n+1))},e.exports=o},25153:function(e,t,r){let n=r(51309);t.mul=function(e,t){let r=new Uint8Array(e.length+t.length-1);for(let o=0;o<e.length;o++)for(let i=0;i<t.length;i++)r[o+i]^=n.mul(e[o],t[i]);return r},t.mod=function(e,t){let r=new Uint8Array(e);for(;r.length-t.length>=0;){let e=r[0];for(let o=0;o<t.length;o++)r[o]^=n.mul(t[o],e);let o=0;for(;o<r.length&&0===r[o];)o++;r=r.slice(o)}return r},t.generateECPolynomial=function(e){let r=new Uint8Array([1]);for(let o=0;o<e;o++)r=t.mul(r,new Uint8Array([1,n.exp(o)]));return r}},37621:function(e,t,r){let n=r(13400),o=r(9406),i=r(41904),a=r(21091),s=r(8177),u=r(78241),l=r(68334),c=r(37039),h=r(9936),f=r(48670),d=r(50237),p=r(37662),b=r(25082);function g(e,t,r){let n,o;let i=e.size,a=d.getEncodedBits(t,r);for(n=0;n<15;n++)o=(a>>n&1)==1,n<6?e.set(n,8,o,!0):n<8?e.set(n+1,8,o,!0):e.set(i-15+n,8,o,!0),n<8?e.set(8,i-n-1,o,!0):n<9?e.set(8,15-n-1+1,o,!0):e.set(8,15-n-1,o,!0);e.set(i-8,8,1,!0)}t.create=function(e,t){let r,d;if(void 0===e||""===e)throw Error("No input text");let w=o.M;return void 0!==t&&(w=o.from(t.errorCorrectionLevel,o.M),r=f.from(t.version),d=l.from(t.maskPattern),t.toSJISFunc&&n.setToSJISFunction(t.toSJISFunc)),function(e,t,r,o){let d;if(Array.isArray(e))d=b.fromArray(e);else if("string"==typeof e){let n=t;if(!n){let t=b.rawSplit(e);n=f.getBestVersionForData(t,r)}d=b.fromString(e,n||40)}else throw Error("Invalid data");let w=f.getBestVersionForData(d,r);if(!w)throw Error("The amount of data is too big to be stored in a QR Code");if(t){if(t<w)throw Error("\nThe chosen QR Code version cannot contain this amount of data.\nMinimum version required to store current data is: "+w+".\n")}else t=w;let y=function(e,t,r){let o=new i;r.forEach(function(t){o.put(t.mode.bit,4),o.put(t.getLength(),p.getCharCountIndicator(t.mode,e)),t.write(o)});let a=(n.getSymbolTotalCodewords(e)-c.getTotalCodewordsCount(e,t))*8;for(o.getLengthInBits()+4<=a&&o.put(0,4);o.getLengthInBits()%8!=0;)o.putBit(0);let s=(a-o.getLengthInBits())/8;for(let e=0;e<s;e++)o.put(e%2?17:236,8);return function(e,t,r){let o,i;let a=n.getSymbolTotalCodewords(t),s=a-c.getTotalCodewordsCount(t,r),u=c.getBlocksCount(t,r),l=a%u,f=u-l,d=Math.floor(a/u),p=Math.floor(s/u),b=p+1,g=d-p,w=new h(g),y=0,m=Array(u),v=Array(u),D=0,E=new Uint8Array(e.buffer);for(let e=0;e<u;e++){let t=e<f?p:b;m[e]=E.slice(y,y+t),v[e]=w.encode(m[e]),y+=t,D=Math.max(D,t)}let _=new Uint8Array(a),C=0;for(o=0;o<D;o++)for(i=0;i<u;i++)o<m[i].length&&(_[C++]=m[i][o]);for(o=0;o<g;o++)for(i=0;i<u;i++)_[C++]=v[i][o];return _}(o,e,t)}(t,r,d),m=new a(n.getSymbolSize(t));return function(e,t){let r=e.size,n=u.getPositions(t);for(let t=0;t<n.length;t++){let o=n[t][0],i=n[t][1];for(let t=-1;t<=7;t++)if(!(o+t<=-1)&&!(r<=o+t))for(let n=-1;n<=7;n++)i+n<=-1||r<=i+n||(t>=0&&t<=6&&(0===n||6===n)||n>=0&&n<=6&&(0===t||6===t)||t>=2&&t<=4&&n>=2&&n<=4?e.set(o+t,i+n,!0,!0):e.set(o+t,i+n,!1,!0))}}(m,t),function(e){let t=e.size;for(let r=8;r<t-8;r++){let t=r%2==0;e.set(r,6,t,!0),e.set(6,r,t,!0)}}(m),function(e,t){let r=s.getPositions(t);for(let t=0;t<r.length;t++){let n=r[t][0],o=r[t][1];for(let t=-2;t<=2;t++)for(let r=-2;r<=2;r++)-2===t||2===t||-2===r||2===r||0===t&&0===r?e.set(n+t,o+r,!0,!0):e.set(n+t,o+r,!1,!0)}}(m,t),g(m,r,0),t>=7&&function(e,t){let r,n,o;let i=e.size,a=f.getEncodedBits(t);for(let t=0;t<18;t++)r=Math.floor(t/3),n=t%3+i-8-3,o=(a>>t&1)==1,e.set(r,n,o,!0),e.set(n,r,o,!0)}(m,t),function(e,t){let r=e.size,n=-1,o=r-1,i=7,a=0;for(let s=r-1;s>0;s-=2)for(6===s&&s--;;){for(let r=0;r<2;r++)if(!e.isReserved(o,s-r)){let n=!1;a<t.length&&(n=(t[a]>>>i&1)==1),e.set(o,s-r,n),-1==--i&&(a++,i=7)}if((o+=n)<0||r<=o){o-=n,n=-n;break}}}(m,y),isNaN(o)&&(o=l.getBestMask(m,g.bind(null,m,r))),l.applyMask(o,m),g(m,r,o),{modules:m,version:t,errorCorrectionLevel:r,maskPattern:o,segments:d}}(e,r,w,d)}},9936:function(e,t,r){let n=r(25153);function o(e){this.genPoly=void 0,this.degree=e,this.degree&&this.initialize(this.degree)}o.prototype.initialize=function(e){this.degree=e,this.genPoly=n.generateECPolynomial(this.degree)},o.prototype.encode=function(e){if(!this.genPoly)throw Error("Encoder not initialized");let t=new Uint8Array(e.length+this.degree);t.set(e);let r=n.mod(t,this.genPoly),o=this.degree-r.length;if(o>0){let e=new Uint8Array(this.degree);return e.set(r,o),e}return r},e.exports=o},66579:function(e,t){let r="[0-9]+",n="(?:[u3000-u303F]|[u3040-u309F]|[u30A0-u30FF]|[uFF00-uFFEF]|[u4E00-u9FAF]|[u2605-u2606]|[u2190-u2195]|u203B|[u2010u2015u2018u2019u2025u2026u201Cu201Du2225u2260]|[u0391-u0451]|[u00A7u00A8u00B1u00B4u00D7u00F7])+",o="(?:(?![A-Z0-9 $%*+\\-./:]|"+(n=n.replace(/u/g,"\\u"))+")(?:.|[\r\n]))+";t.KANJI=RegExp(n,"g"),t.BYTE_KANJI=RegExp("[^A-Z0-9 $%*+\\-./:]+","g"),t.BYTE=RegExp(o,"g"),t.NUMERIC=RegExp(r,"g"),t.ALPHANUMERIC=RegExp("[A-Z $%*+\\-./:]+","g");let i=RegExp("^"+n+"$"),a=RegExp("^"+r+"$"),s=RegExp("^[A-Z0-9 $%*+\\-./:]+$");t.testKanji=function(e){return i.test(e)},t.testNumeric=function(e){return a.test(e)},t.testAlphanumeric=function(e){return s.test(e)}},25082:function(e,t,r){let n=r(37662),o=r(10894),i=r(77654),a=r(90690),s=r(69592),u=r(66579),l=r(13400),c=r(78343);function h(e){return unescape(encodeURIComponent(e)).length}function f(e,t,r){let n;let o=[];for(;null!==(n=e.exec(r));)o.push({data:n[0],index:n.index,mode:t,length:n[0].length});return o}function d(e){let t,r;let o=f(u.NUMERIC,n.NUMERIC,e),i=f(u.ALPHANUMERIC,n.ALPHANUMERIC,e);return l.isKanjiModeEnabled()?(t=f(u.BYTE,n.BYTE,e),r=f(u.KANJI,n.KANJI,e)):(t=f(u.BYTE_KANJI,n.BYTE,e),r=[]),o.concat(i,t,r).sort(function(e,t){return e.index-t.index}).map(function(e){return{data:e.data,mode:e.mode,length:e.length}})}function p(e,t){switch(t){case n.NUMERIC:return o.getBitsLength(e);case n.ALPHANUMERIC:return i.getBitsLength(e);case n.KANJI:return s.getBitsLength(e);case n.BYTE:return a.getBitsLength(e)}}function b(e,t){let r;let u=n.getBestModeForData(e);if((r=n.from(t,u))!==n.BYTE&&r.bit<u.bit)throw Error('"'+e+'" cannot be encoded with mode '+n.toString(r)+".\n Suggested mode is: "+n.toString(u));switch(r!==n.KANJI||l.isKanjiModeEnabled()||(r=n.BYTE),r){case n.NUMERIC:return new o(e);case n.ALPHANUMERIC:return new i(e);case n.KANJI:return new s(e);case n.BYTE:return new a(e)}}t.fromArray=function(e){return e.reduce(function(e,t){return"string"==typeof t?e.push(b(t,null)):t.data&&e.push(b(t.data,t.mode)),e},[])},t.fromString=function(e,r){let o=function(e,t){let r={},o={start:{}},i=["start"];for(let a=0;a<e.length;a++){let s=e[a],u=[];for(let e=0;e<s.length;e++){let l=s[e],c=""+a+e;u.push(c),r[c]={node:l,lastCount:0},o[c]={};for(let e=0;e<i.length;e++){let a=i[e];r[a]&&r[a].node.mode===l.mode?(o[a][c]=p(r[a].lastCount+l.length,l.mode)-p(r[a].lastCount,l.mode),r[a].lastCount+=l.length):(r[a]&&(r[a].lastCount=l.length),o[a][c]=p(l.length,l.mode)+4+n.getCharCountIndicator(l.mode,t))}}i=u}for(let e=0;e<i.length;e++)o[i[e]].end=0;return{map:o,table:r}}(function(e){let t=[];for(let r=0;r<e.length;r++){let o=e[r];switch(o.mode){case n.NUMERIC:t.push([o,{data:o.data,mode:n.ALPHANUMERIC,length:o.length},{data:o.data,mode:n.BYTE,length:o.length}]);break;case n.ALPHANUMERIC:t.push([o,{data:o.data,mode:n.BYTE,length:o.length}]);break;case n.KANJI:t.push([o,{data:o.data,mode:n.BYTE,length:h(o.data)}]);break;case n.BYTE:t.push([{data:o.data,mode:n.BYTE,length:h(o.data)}])}}return t}(d(e,l.isKanjiModeEnabled())),r),i=c.find_path(o.map,"start","end"),a=[];for(let e=1;e<i.length-1;e++)a.push(o.table[i[e]].node);return t.fromArray(a.reduce(function(e,t){let r=e.length-1>=0?e[e.length-1]:null;return r&&r.mode===t.mode?e[e.length-1].data+=t.data:e.push(t),e},[]))},t.rawSplit=function(e){return t.fromArray(d(e,l.isKanjiModeEnabled()))}},13400:function(e,t){let r;let n=[0,26,44,70,100,134,172,196,242,292,346,404,466,532,581,655,733,815,901,991,1085,1156,1258,1364,1474,1588,1706,1828,1921,2051,2185,2323,2465,2611,2761,2876,3034,3196,3362,3532,3706];t.getSymbolSize=function(e){if(!e)throw Error('"version" cannot be null or undefined');if(e<1||e>40)throw Error('"version" should be in range from 1 to 40');return 4*e+17},t.getSymbolTotalCodewords=function(e){return n[e]},t.getBCHDigit=function(e){let t=0;for(;0!==e;)t++,e>>>=1;return t},t.setToSJISFunction=function(e){if("function"!=typeof e)throw Error('"toSJISFunc" is not a valid function.');r=e},t.isKanjiModeEnabled=function(){return void 0!==r},t.toSJIS=function(e){return r(e)}},64956:function(e,t){t.isValid=function(e){return!isNaN(e)&&e>=1&&e<=40}},48670:function(e,t,r){let n=r(13400),o=r(37039),i=r(9406),a=r(37662),s=r(64956),u=n.getBCHDigit(7973);function l(e,t){return a.getCharCountIndicator(e,t)+4}t.from=function(e,t){return s.isValid(e)?parseInt(e,10):t},t.getCapacity=function(e,t,r){if(!s.isValid(e))throw Error("Invalid QR Code version");void 0===r&&(r=a.BYTE);let i=(n.getSymbolTotalCodewords(e)-o.getTotalCodewordsCount(e,t))*8;if(r===a.MIXED)return i;let u=i-l(r,e);switch(r){case a.NUMERIC:return Math.floor(u/10*3);case a.ALPHANUMERIC:return Math.floor(u/11*2);case a.KANJI:return Math.floor(u/13);case a.BYTE:default:return Math.floor(u/8)}},t.getBestVersionForData=function(e,r){let n;let o=i.from(r,i.M);if(Array.isArray(e)){if(e.length>1)return function(e,r){for(let n=1;n<=40;n++)if(function(e,t){let r=0;return e.forEach(function(e){let n=l(e.mode,t);r+=n+e.getBitsLength()}),r}(e,n)<=t.getCapacity(n,r,a.MIXED))return n}(e,o);if(0===e.length)return 1;n=e[0]}else n=e;return function(e,r,n){for(let o=1;o<=40;o++)if(r<=t.getCapacity(o,n,e))return o}(n.mode,n.getLength(),o)},t.getEncodedBits=function(e){if(!s.isValid(e)||e<7)throw Error("Invalid QR Code version");let t=e<<12;for(;n.getBCHDigit(t)-u>=0;)t^=7973<<n.getBCHDigit(t)-u;return e<<12|t}},46028:function(e,t,r){let n=r(10544);t.render=function(e,t,r){var o;let i=r,a=t;void 0!==i||t&&t.getContext||(i=t,t=void 0),t||(a=function(){try{return document.createElement("canvas")}catch(e){throw Error("You need to specify a canvas element")}}()),i=n.getOptions(i);let s=n.getImageWidth(e.modules.size,i),u=a.getContext("2d"),l=u.createImageData(s,s);return n.qrToImageData(l.data,e,i),o=a,u.clearRect(0,0,o.width,o.height),o.style||(o.style={}),o.height=s,o.width=s,o.style.height=s+"px",o.style.width=s+"px",u.putImageData(l,0,0),a},t.renderToDataURL=function(e,r,n){let o=n;void 0!==o||r&&r.getContext||(o=r,r=void 0),o||(o={});let i=t.render(e,r,o),a=o.type||"image/png",s=o.rendererOpts||{};return i.toDataURL(a,s.quality)}},12330:function(e,t,r){let n=r(10544);function o(e,t){let r=e.a/255,n=t+'="'+e.hex+'"';return r<1?n+" "+t+'-opacity="'+r.toFixed(2).slice(1)+'"':n}function i(e,t,r){let n=e+t;return void 0!==r&&(n+=" "+r),n}t.render=function(e,t,r){let a=n.getOptions(t),s=e.modules.size,u=e.modules.data,l=s+2*a.margin,c=a.color.light.a?"<path "+o(a.color.light,"fill")+' d="M0 0h'+l+"v"+l+'H0z"/>':"",h="<path "+o(a.color.dark,"stroke")+' d="'+function(e,t,r){let n="",o=0,a=!1,s=0;for(let u=0;u<e.length;u++){let l=Math.floor(u%t),c=Math.floor(u/t);l||a||(a=!0),e[u]?(s++,u>0&&l>0&&e[u-1]||(n+=a?i("M",l+r,.5+c+r):i("m",o,0),o=0,a=!1),l+1<t&&e[u+1]||(n+=i("h",s),s=0)):o++}return n}(u,s,a.margin)+'"/>',f='<svg xmlns="http://www.w3.org/2000/svg" '+(a.width?'width="'+a.width+'" height="'+a.width+'" ':"")+('viewBox="0 0 '+l)+" "+l+'" shape-rendering="crispEdges">'+c+h+"</svg>\n";return"function"==typeof r&&r(null,f),f}},10544:function(e,t){function r(e){if("number"==typeof e&&(e=e.toString()),"string"!=typeof e)throw Error("Color should be defined as hex string");let t=e.slice().replace("#","").split("");if(t.length<3||5===t.length||t.length>8)throw Error("Invalid hex color: "+e);(3===t.length||4===t.length)&&(t=Array.prototype.concat.apply([],t.map(function(e){return[e,e]}))),6===t.length&&t.push("F","F");let r=parseInt(t.join(""),16);return{r:r>>24&255,g:r>>16&255,b:r>>8&255,a:255&r,hex:"#"+t.slice(0,6).join("")}}t.getOptions=function(e){e||(e={}),e.color||(e.color={});let t=void 0===e.margin||null===e.margin||e.margin<0?4:e.margin,n=e.width&&e.width>=21?e.width:void 0,o=e.scale||4;return{width:n,scale:n?4:o,margin:t,color:{dark:r(e.color.dark||"#000000ff"),light:r(e.color.light||"#ffffffff")},type:e.type,rendererOpts:e.rendererOpts||{}}},t.getScale=function(e,t){return t.width&&t.width>=e+2*t.margin?t.width/(e+2*t.margin):t.scale},t.getImageWidth=function(e,r){let n=t.getScale(e,r);return Math.floor((e+2*r.margin)*n)},t.qrToImageData=function(e,r,n){let o=r.modules.size,i=r.modules.data,a=t.getScale(o,n),s=Math.floor((o+2*n.margin)*a),u=n.margin*a,l=[n.color.light,n.color.dark];for(let t=0;t<s;t++)for(let r=0;r<s;r++){let c=(t*s+r)*4,h=n.color.light;t>=u&&r>=u&&t<s-u&&r<s-u&&(h=l[i[Math.floor((t-u)/a)*o+Math.floor((r-u)/a)]?1:0]),e[c++]=h.r,e[c++]=h.g,e[c++]=h.b,e[c]=h.a}}},89291:function(e,t,r){"use strict";let n=r(67116),o=r(58005),i=r(34470),a=r(61820),s=e=>null==e,u=Symbol("encodeFragmentIdentifier");function l(e){if("string"!=typeof e||1!==e.length)throw TypeError("arrayFormatSeparator must be single character string")}function c(e,t){return t.encode?t.strict?n(e):encodeURIComponent(e):e}function h(e,t){return t.decode?o(e):e}function f(e){let t=e.indexOf("#");return -1!==t&&(e=e.slice(0,t)),e}function d(e){let t=(e=f(e)).indexOf("?");return -1===t?"":e.slice(t+1)}function p(e,t){return t.parseNumbers&&!Number.isNaN(Number(e))&&"string"==typeof e&&""!==e.trim()?e=Number(e):t.parseBooleans&&null!==e&&("true"===e.toLowerCase()||"false"===e.toLowerCase())&&(e="true"===e.toLowerCase()),e}function b(e,t){l((t=Object.assign({decode:!0,sort:!0,arrayFormat:"none",arrayFormatSeparator:",",parseNumbers:!1,parseBooleans:!1},t)).arrayFormatSeparator);let r=function(e){let t;switch(e.arrayFormat){case"index":return(e,r,n)=>{if(t=/\[(\d*)\]$/.exec(e),e=e.replace(/\[\d*\]$/,""),!t){n[e]=r;return}void 0===n[e]&&(n[e]={}),n[e][t[1]]=r};case"bracket":return(e,r,n)=>{if(t=/(\[\])$/.exec(e),e=e.replace(/\[\]$/,""),!t){n[e]=r;return}if(void 0===n[e]){n[e]=[r];return}n[e]=[].concat(n[e],r)};case"colon-list-separator":return(e,r,n)=>{if(t=/(:list)$/.exec(e),e=e.replace(/:list$/,""),!t){n[e]=r;return}if(void 0===n[e]){n[e]=[r];return}n[e]=[].concat(n[e],r)};case"comma":case"separator":return(t,r,n)=>{let o="string"==typeof r&&r.includes(e.arrayFormatSeparator),i="string"==typeof r&&!o&&h(r,e).includes(e.arrayFormatSeparator);r=i?h(r,e):r;let a=o||i?r.split(e.arrayFormatSeparator).map(t=>h(t,e)):null===r?r:h(r,e);n[t]=a};case"bracket-separator":return(t,r,n)=>{let o=/(\[\])$/.test(t);if(t=t.replace(/\[\]$/,""),!o){n[t]=r?h(r,e):r;return}let i=null===r?[]:r.split(e.arrayFormatSeparator).map(t=>h(t,e));if(void 0===n[t]){n[t]=i;return}n[t]=[].concat(n[t],i)};default:return(e,t,r)=>{if(void 0===r[e]){r[e]=t;return}r[e]=[].concat(r[e],t)}}}(t),n=Object.create(null);if("string"!=typeof e||!(e=e.trim().replace(/^[?#&]/,"")))return n;for(let o of e.split("&")){if(""===o)continue;let[e,a]=i(t.decode?o.replace(/\+/g," "):o,"=");a=void 0===a?null:["comma","separator","bracket-separator"].includes(t.arrayFormat)?a:h(a,t),r(h(e,t),a,n)}for(let e of Object.keys(n)){let r=n[e];if("object"==typeof r&&null!==r)for(let e of Object.keys(r))r[e]=p(r[e],t);else n[e]=p(r,t)}return!1===t.sort?n:(!0===t.sort?Object.keys(n).sort():Object.keys(n).sort(t.sort)).reduce((e,t)=>{let r=n[t];return r&&"object"==typeof r&&!Array.isArray(r)?e[t]=function e(t){return Array.isArray(t)?t.sort():"object"==typeof t?e(Object.keys(t)).sort((e,t)=>Number(e)-Number(t)).map(e=>t[e]):t}(r):e[t]=r,e},Object.create(null))}t.extract=d,t.parse=b,t.stringify=(e,t)=>{if(!e)return"";l((t=Object.assign({encode:!0,strict:!0,arrayFormat:"none",arrayFormatSeparator:","},t)).arrayFormatSeparator);let r=r=>t.skipNull&&s(e[r])||t.skipEmptyString&&""===e[r],n=function(e){switch(e.arrayFormat){case"index":return t=>(r,n)=>{let o=r.length;return void 0===n||e.skipNull&&null===n||e.skipEmptyString&&""===n?r:null===n?[...r,[c(t,e),"[",o,"]"].join("")]:[...r,[c(t,e),"[",c(o,e),"]=",c(n,e)].join("")]};case"bracket":return t=>(r,n)=>void 0===n||e.skipNull&&null===n||e.skipEmptyString&&""===n?r:null===n?[...r,[c(t,e),"[]"].join("")]:[...r,[c(t,e),"[]=",c(n,e)].join("")];case"colon-list-separator":return t=>(r,n)=>void 0===n||e.skipNull&&null===n||e.skipEmptyString&&""===n?r:null===n?[...r,[c(t,e),":list="].join("")]:[...r,[c(t,e),":list=",c(n,e)].join("")];case"comma":case"separator":case"bracket-separator":{let t="bracket-separator"===e.arrayFormat?"[]=":"=";return r=>(n,o)=>void 0===o||e.skipNull&&null===o||e.skipEmptyString&&""===o?n:(o=null===o?"":o,0===n.length)?[[c(r,e),t,c(o,e)].join("")]:[[n,c(o,e)].join(e.arrayFormatSeparator)]}default:return t=>(r,n)=>void 0===n||e.skipNull&&null===n||e.skipEmptyString&&""===n?r:null===n?[...r,c(t,e)]:[...r,[c(t,e),"=",c(n,e)].join("")]}}(t),o={};for(let t of Object.keys(e))r(t)||(o[t]=e[t]);let i=Object.keys(o);return!1!==t.sort&&i.sort(t.sort),i.map(r=>{let o=e[r];return void 0===o?"":null===o?c(r,t):Array.isArray(o)?0===o.length&&"bracket-separator"===t.arrayFormat?c(r,t)+"[]":o.reduce(n(r),[]).join("&"):c(r,t)+"="+c(o,t)}).filter(e=>e.length>0).join("&")},t.parseUrl=(e,t)=>{t=Object.assign({decode:!0},t);let[r,n]=i(e,"#");return Object.assign({url:r.split("?")[0]||"",query:b(d(e),t)},t&&t.parseFragmentIdentifier&&n?{fragmentIdentifier:h(n,t)}:{})},t.stringifyUrl=(e,r)=>{r=Object.assign({encode:!0,strict:!0,[u]:!0},r);let n=f(e.url).split("?")[0]||"",o=t.extract(e.url),i=Object.assign(t.parse(o,{sort:!1}),e.query),a=t.stringify(i,r);a&&(a=`?${a}`);let s=function(e){let t="",r=e.indexOf("#");return -1!==r&&(t=e.slice(r)),t}(e.url);return e.fragmentIdentifier&&(s=`#${r[u]?c(e.fragmentIdentifier,r):e.fragmentIdentifier}`),`${n}${a}${s}`},t.pick=(e,r,n)=>{n=Object.assign({parseFragmentIdentifier:!0,[u]:!1},n);let{url:o,query:i,fragmentIdentifier:s}=t.parseUrl(e,n);return t.stringifyUrl({url:o,query:a(i,r),fragmentIdentifier:s},n)},t.exclude=(e,r,n)=>{let o=Array.isArray(r)?e=>!r.includes(e):(e,t)=>!r(e,t);return t.pick(e,o,n)}},22303:function(e,t,r){"use strict";function n(e){return(n="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e})(e)}Object.defineProperty(t,"__esModule",{value:!0}),t.CopyToClipboard=void 0;var o=s(r(2265)),i=s(r(2390)),a=["text","onCopy","options","children"];function s(e){return e&&e.__esModule?e:{default:e}}function u(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter(function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable})),r.push.apply(r,n)}return r}function l(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?u(Object(r),!0).forEach(function(t){p(e,t,r[t])}):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):u(Object(r)).forEach(function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))})}return e}function c(e,t){for(var r=0;r<t.length;r++){var n=t[r];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(e,n.key,n)}}function h(e,t){return(h=Object.setPrototypeOf||function(e,t){return e.__proto__=t,e})(e,t)}function f(e){if(void 0===e)throw ReferenceError("this hasn't been initialised - super() hasn't been called");return e}function d(e){return(d=Object.setPrototypeOf?Object.getPrototypeOf:function(e){return e.__proto__||Object.getPrototypeOf(e)})(e)}function p(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}var b=function(e){!function(e,t){if("function"!=typeof t&&null!==t)throw TypeError("Super expression must either be null or a function");e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),Object.defineProperty(e,"prototype",{writable:!1}),t&&h(e,t)}(b,e);var t,r,s,u=(t=function(){if("undefined"==typeof Reflect||!Reflect.construct||Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],function(){})),!0}catch(e){return!1}}(),function(){var e,r=d(b);if(t){var o=d(this).constructor;e=Reflect.construct(r,arguments,o)}else e=r.apply(this,arguments);return function(e,t){if(t&&("object"===n(t)||"function"==typeof t))return t;if(void 0!==t)throw TypeError("Derived constructors may only return object or undefined");return f(e)}(this,e)});function b(){var e;!function(e,t){if(!(e instanceof t))throw TypeError("Cannot call a class as a function")}(this,b);for(var t=arguments.length,r=Array(t),n=0;n<t;n++)r[n]=arguments[n];return p(f(e=u.call.apply(u,[this].concat(r))),"onClick",function(t){var r=e.props,n=r.text,a=r.onCopy,s=r.children,u=r.options,l=o.default.Children.only(s),c=(0,i.default)(n,u);a&&a(n,c),l&&l.props&&"function"==typeof l.props.onClick&&l.props.onClick(t)}),e}return r=[{key:"render",value:function(){var e=this.props,t=(e.text,e.onCopy,e.options,e.children),r=function(e,t){if(null==e)return{};var r,n,o=function(e,t){if(null==e)return{};var r,n,o={},i=Object.keys(e);for(n=0;n<i.length;n++)r=i[n],t.indexOf(r)>=0||(o[r]=e[r]);return o}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(n=0;n<i.length;n++)r=i[n],!(t.indexOf(r)>=0)&&Object.prototype.propertyIsEnumerable.call(e,r)&&(o[r]=e[r])}return o}(e,a),n=o.default.Children.only(t);return o.default.cloneElement(n,l(l({},r),{},{onClick:this.onClick}))}}],c(b.prototype,r),s&&c(b,s),Object.defineProperty(b,"prototype",{writable:!1}),b}(o.default.PureComponent);t.CopyToClipboard=b,p(b,"defaultProps",{onCopy:void 0,options:void 0})},86781:function(e,t,r){"use strict";var n=r(22303).CopyToClipboard;n.CopyToClipboard=n,e.exports=n},44489:function(e,t,r){"use strict";r.d(t,{Z:function(){return X}});var n,o,i,a,s,u,l=function(){return(l=Object.assign||function(e){for(var t,r=1,n=arguments.length;r<n;r++)for(var o in t=arguments[r])Object.prototype.hasOwnProperty.call(t,o)&&(e[o]=t[o]);return e}).apply(this,arguments)};"function"==typeof SuppressedError&&SuppressedError;var c=r(2265),h="right-scroll-bar-position",f="width-before-scroll-bar";function d(e,t){return"function"==typeof e?e(t):e&&(e.current=t),e}var p="undefined"!=typeof window?c.useLayoutEffect:c.useEffect,b=new WeakMap,g=function(){return(g=Object.assign||function(e){for(var t,r=1,n=arguments.length;r<n;r++)for(var o in t=arguments[r])Object.prototype.hasOwnProperty.call(t,o)&&(e[o]=t[o]);return e}).apply(this,arguments)};"function"==typeof SuppressedError&&SuppressedError;var w=(void 0===o&&(o={}),(void 0===i&&(i=function(e){return e}),a=[],s=!1,u={read:function(){if(s)throw Error("Sidecar: could not `read` from an `assigned` medium. `read` could be used only with `useMedium`.");return a.length?a[a.length-1]:null},useMedium:function(e){var t=i(e,s);return a.push(t),function(){a=a.filter(function(e){return e!==t})}},assignSyncMedium:function(e){for(s=!0;a.length;){var t=a;a=[],t.forEach(e)}a={push:function(t){return e(t)},filter:function(){return a}}},assignMedium:function(e){s=!0;var t=[];if(a.length){var r=a;a=[],r.forEach(e),t=a}var n=function(){var r=t;t=[],r.forEach(e)},o=function(){return Promise.resolve().then(n)};o(),a={push:function(e){t.push(e),o()},filter:function(e){return t=t.filter(e),a}}}}).options=g({async:!0,ssr:!1},o),u),y=function(){},m=c.forwardRef(function(e,t){var r,n,o,i,a=c.useRef(null),s=c.useState({onScrollCapture:y,onWheelCapture:y,onTouchMoveCapture:y}),u=s[0],h=s[1],f=e.forwardProps,g=e.children,m=e.className,v=e.removeScrollBar,D=e.enabled,E=e.shards,_=e.sideCar,C=e.noIsolation,k=e.inert,x=e.allowPinchZoom,S=e.as,A=e.gapMode,O=function(e,t){var r={};for(var n in e)Object.prototype.hasOwnProperty.call(e,n)&&0>t.indexOf(n)&&(r[n]=e[n]);if(null!=e&&"function"==typeof Object.getOwnPropertySymbols)for(var o=0,n=Object.getOwnPropertySymbols(e);o<n.length;o++)0>t.indexOf(n[o])&&Object.prototype.propertyIsEnumerable.call(e,n[o])&&(r[n[o]]=e[n[o]]);return r}(e,["forwardProps","children","className","removeScrollBar","enabled","shards","sideCar","noIsolation","inert","allowPinchZoom","as","gapMode"]),N=(r=[a,t],n=function(e){return r.forEach(function(t){return d(t,e)})},(o=(0,c.useState)(function(){return{value:null,callback:n,facade:{get current(){return o.value},set current(value){var e=o.value;e!==value&&(o.value=value,o.callback(value,e))}}}})[0]).callback=n,i=o.facade,p(function(){var e=b.get(i);if(e){var t=new Set(e),n=new Set(r),o=i.current;t.forEach(function(e){n.has(e)||d(e,null)}),n.forEach(function(e){t.has(e)||d(e,o)})}b.set(i,r)},[r]),i),M=l(l({},O),u);return c.createElement(c.Fragment,null,D&&c.createElement(_,{sideCar:w,removeScrollBar:v,shards:E,noIsolation:C,inert:k,setCallbacks:h,allowPinchZoom:!!x,lockRef:a,gapMode:A}),f?c.cloneElement(c.Children.only(g),l(l({},M),{ref:N})):c.createElement(void 0===S?"div":S,l({},M,{className:m,ref:N}),g))});m.defaultProps={enabled:!0,removeScrollBar:!0,inert:!1},m.classNames={fullWidth:f,zeroRight:h};var v=function(e){var t=e.sideCar,r=function(e,t){var r={};for(var n in e)Object.prototype.hasOwnProperty.call(e,n)&&0>t.indexOf(n)&&(r[n]=e[n]);if(null!=e&&"function"==typeof Object.getOwnPropertySymbols)for(var o=0,n=Object.getOwnPropertySymbols(e);o<n.length;o++)0>t.indexOf(n[o])&&Object.prototype.propertyIsEnumerable.call(e,n[o])&&(r[n[o]]=e[n[o]]);return r}(e,["sideCar"]);if(!t)throw Error("Sidecar: please provide `sideCar` property to import the right car");var n=t.read();if(!n)throw Error("Sidecar medium not found");return c.createElement(n,g({},r))};v.isSideCarExport=!0;var D=function(){var e=0,t=null;return{add:function(o){if(0==e&&(t=function(){if(!document)return null;var e=document.createElement("style");e.type="text/css";var t=n||r.nc;return t&&e.setAttribute("nonce",t),e}())){var i,a;(i=t).styleSheet?i.styleSheet.cssText=o:i.appendChild(document.createTextNode(o)),a=t,(document.head||document.getElementsByTagName("head")[0]).appendChild(a)}e++},remove:function(){--e||!t||(t.parentNode&&t.parentNode.removeChild(t),t=null)}}},E=function(){var e=D();return function(t,r){c.useEffect(function(){return e.add(t),function(){e.remove()}},[t&&r])}},_=function(){var e=E();return function(t){return e(t.styles,t.dynamic),null}},C={left:0,top:0,right:0,gap:0},k=function(e){return parseInt(e||"",10)||0},x=function(e){var t=window.getComputedStyle(document.body),r=t["padding"===e?"paddingLeft":"marginLeft"],n=t["padding"===e?"paddingTop":"marginTop"],o=t["padding"===e?"paddingRight":"marginRight"];return[k(r),k(n),k(o)]},S=function(e){if(void 0===e&&(e="margin"),"undefined"==typeof window)return C;var t=x(e),r=document.documentElement.clientWidth,n=window.innerWidth;return{left:t[0],top:t[1],right:t[2],gap:Math.max(0,n-r+t[2]-t[0])}},A=_(),O="data-scroll-locked",N=function(e,t,r,n){var o=e.left,i=e.top,a=e.right,s=e.gap;return void 0===r&&(r="margin"),"\n  .".concat("with-scroll-bars-hidden"," {\n   overflow: hidden ").concat(n,";\n   padding-right: ").concat(s,"px ").concat(n,";\n  }\n  body[").concat(O,"] {\n    overflow: hidden ").concat(n,";\n    overscroll-behavior: contain;\n    ").concat([t&&"position: relative ".concat(n,";"),"margin"===r&&"\n    padding-left: ".concat(o,"px;\n    padding-top: ").concat(i,"px;\n    padding-right: ").concat(a,"px;\n    margin-left:0;\n    margin-top:0;\n    margin-right: ").concat(s,"px ").concat(n,";\n    "),"padding"===r&&"padding-right: ".concat(s,"px ").concat(n,";")].filter(Boolean).join(""),"\n  }\n  \n  .").concat(h," {\n    right: ").concat(s,"px ").concat(n,";\n  }\n  \n  .").concat(f," {\n    margin-right: ").concat(s,"px ").concat(n,";\n  }\n  \n  .").concat(h," .").concat(h," {\n    right: 0 ").concat(n,";\n  }\n  \n  .").concat(f," .").concat(f," {\n    margin-right: 0 ").concat(n,";\n  }\n  \n  body[").concat(O,"] {\n    ").concat("--removed-body-scroll-bar-size",": ").concat(s,"px;\n  }\n")},M=function(){var e=parseInt(document.body.getAttribute(O)||"0",10);return isFinite(e)?e:0},I=function(){c.useEffect(function(){return document.body.setAttribute(O,(M()+1).toString()),function(){var e=M()-1;e<=0?document.body.removeAttribute(O):document.body.setAttribute(O,e.toString())}},[])},T=function(e){var t=e.noRelative,r=e.noImportant,n=e.gapMode,o=void 0===n?"margin":n;I();var i=c.useMemo(function(){return S(o)},[o]);return c.createElement(A,{styles:N(i,!t,o,r?"":"!important")})},R=!1;if("undefined"!=typeof window)try{var P=Object.defineProperty({},"passive",{get:function(){return R=!0,!0}});window.addEventListener("test",P,P),window.removeEventListener("test",P,P)}catch(e){R=!1}var B=!!R&&{passive:!1},U=function(e,t){var r=window.getComputedStyle(e);return"hidden"!==r[t]&&!(r.overflowY===r.overflowX&&"TEXTAREA"!==e.tagName&&"visible"===r[t])},L=function(e,t){var r=t.ownerDocument,n=t;do{if("undefined"!=typeof ShadowRoot&&n instanceof ShadowRoot&&(n=n.host),F(e,n)){var o=W(e,n);if(o[1]>o[2])return!0}n=n.parentNode}while(n&&n!==r.body);return!1},F=function(e,t){return"v"===e?U(t,"overflowY"):U(t,"overflowX")},W=function(e,t){return"v"===e?[t.scrollTop,t.scrollHeight,t.clientHeight]:[t.scrollLeft,t.scrollWidth,t.clientWidth]},j=function(e,t,r,n,o){var i,a=(i=window.getComputedStyle(t).direction,"h"===e&&"rtl"===i?-1:1),s=a*n,u=r.target,l=t.contains(u),c=!1,h=s>0,f=0,d=0;do{var p=W(e,u),b=p[0],g=p[1]-p[2]-a*b;(b||g)&&F(e,u)&&(f+=g,d+=b),u=u instanceof ShadowRoot?u.host:u.parentNode}while(!l&&u!==document.body||l&&(t.contains(u)||t===u));return h&&(o&&1>Math.abs(f)||!o&&s>f)?c=!0:!h&&(o&&1>Math.abs(d)||!o&&-s>d)&&(c=!0),c},z=function(e){return"changedTouches"in e?[e.changedTouches[0].clientX,e.changedTouches[0].clientY]:[0,0]},H=function(e){return[e.deltaX,e.deltaY]},q=function(e){return e&&"current"in e?e.current:e},V=0,Y=[],K=(w.useMedium(function(e){var t=c.useRef([]),r=c.useRef([0,0]),n=c.useRef(),o=c.useState(V++)[0],i=c.useState(_)[0],a=c.useRef(e);c.useEffect(function(){a.current=e},[e]),c.useEffect(function(){if(e.inert){document.body.classList.add("block-interactivity-".concat(o));var t=(function(e,t,r){if(r||2==arguments.length)for(var n,o=0,i=t.length;o<i;o++)!n&&o in t||(n||(n=Array.prototype.slice.call(t,0,o)),n[o]=t[o]);return e.concat(n||Array.prototype.slice.call(t))})([e.lockRef.current],(e.shards||[]).map(q),!0).filter(Boolean);return t.forEach(function(e){return e.classList.add("allow-interactivity-".concat(o))}),function(){document.body.classList.remove("block-interactivity-".concat(o)),t.forEach(function(e){return e.classList.remove("allow-interactivity-".concat(o))})}}},[e.inert,e.lockRef.current,e.shards]);var s=c.useCallback(function(e,t){if("touches"in e&&2===e.touches.length)return!a.current.allowPinchZoom;var o,i=z(e),s=r.current,u="deltaX"in e?e.deltaX:s[0]-i[0],l="deltaY"in e?e.deltaY:s[1]-i[1],c=e.target,h=Math.abs(u)>Math.abs(l)?"h":"v";if("touches"in e&&"h"===h&&"range"===c.type)return!1;var f=L(h,c);if(!f)return!0;if(f?o=h:(o="v"===h?"h":"v",f=L(h,c)),!f)return!1;if(!n.current&&"changedTouches"in e&&(u||l)&&(n.current=o),!o)return!0;var d=n.current||o;return j(d,t,e,"h"===d?u:l,!0)},[]),u=c.useCallback(function(e){if(Y.length&&Y[Y.length-1]===i){var r="deltaY"in e?H(e):z(e),n=t.current.filter(function(t){var n;return t.name===e.type&&(t.target===e.target||e.target===t.shadowParent)&&(n=t.delta)[0]===r[0]&&n[1]===r[1]})[0];if(n&&n.should){e.cancelable&&e.preventDefault();return}if(!n){var o=(a.current.shards||[]).map(q).filter(Boolean).filter(function(t){return t.contains(e.target)});(o.length>0?s(e,o[0]):!a.current.noIsolation)&&e.cancelable&&e.preventDefault()}}},[]),l=c.useCallback(function(e,r,n,o){var i={name:e,delta:r,target:n,should:o,shadowParent:function(e){for(var t=null;null!==e;)e instanceof ShadowRoot&&(t=e.host,e=e.host),e=e.parentNode;return t}(n)};t.current.push(i),setTimeout(function(){t.current=t.current.filter(function(e){return e!==i})},1)},[]),h=c.useCallback(function(e){r.current=z(e),n.current=void 0},[]),f=c.useCallback(function(t){l(t.type,H(t),t.target,s(t,e.lockRef.current))},[]),d=c.useCallback(function(t){l(t.type,z(t),t.target,s(t,e.lockRef.current))},[]);c.useEffect(function(){return Y.push(i),e.setCallbacks({onScrollCapture:f,onWheelCapture:f,onTouchMoveCapture:d}),document.addEventListener("wheel",u,B),document.addEventListener("touchmove",u,B),document.addEventListener("touchstart",h,B),function(){Y=Y.filter(function(e){return e!==i}),document.removeEventListener("wheel",u,B),document.removeEventListener("touchmove",u,B),document.removeEventListener("touchstart",h,B)}},[]);var p=e.removeScrollBar,b=e.inert;return c.createElement(c.Fragment,null,b?c.createElement(i,{styles:"\n  .block-interactivity-".concat(o," {pointer-events: none;}\n  .allow-interactivity-").concat(o," {pointer-events: all;}\n")}):null,p?c.createElement(T,{gapMode:e.gapMode}):null)}),v),$=c.forwardRef(function(e,t){return c.createElement(m,l({},e,{ref:t,sideCar:K}))});$.classNames=m.classNames;var X=$},34470:function(e){"use strict";e.exports=(e,t)=>{if(!("string"==typeof e&&"string"==typeof t))throw TypeError("Expected the arguments to be of type `string`");if(""===t)return[e];let r=e.indexOf(t);return -1===r?[e]:[e.slice(0,r),e.slice(r+t.length)]}},67116:function(e){"use strict";e.exports=e=>encodeURIComponent(e).replace(/[!'()*]/g,e=>`%${e.charCodeAt(0).toString(16).toUpperCase()}`)},25809:function(e){e.exports=function(){var e=document.getSelection();if(!e.rangeCount)return function(){};for(var t=document.activeElement,r=[],n=0;n<e.rangeCount;n++)r.push(e.getRangeAt(n));switch(t.tagName.toUpperCase()){case"INPUT":case"TEXTAREA":t.blur();break;default:t=null}return e.removeAllRanges(),function(){"Caret"===e.type&&e.removeAllRanges(),e.rangeCount||r.forEach(function(t){e.addRange(t)}),t&&t.focus()}}},88648:function(e,t,r){"use strict";r.r(t),r.d(t,{__assign:function(){return i},__asyncDelegator:function(){return v},__asyncGenerator:function(){return m},__asyncValues:function(){return D},__await:function(){return y},__awaiter:function(){return c},__classPrivateFieldGet:function(){return k},__classPrivateFieldSet:function(){return x},__createBinding:function(){return f},__decorate:function(){return s},__exportStar:function(){return d},__extends:function(){return o},__generator:function(){return h},__importDefault:function(){return C},__importStar:function(){return _},__makeTemplateObject:function(){return E},__metadata:function(){return l},__param:function(){return u},__read:function(){return b},__rest:function(){return a},__spread:function(){return g},__spreadArrays:function(){return w},__values:function(){return p}});/*! *****************************************************************************
Copyright (c) Microsoft Corporation.

Permission to use, copy, modify, and/or distribute this software for any
purpose with or without fee is hereby granted.

THE SOFTWARE IS PROVIDED "AS IS" AND THE AUTHOR DISCLAIMS ALL WARRANTIES WITH
REGARD TO THIS SOFTWARE INCLUDING ALL IMPLIED WARRANTIES OF MERCHANTABILITY
AND FITNESS. IN NO EVENT SHALL THE AUTHOR BE LIABLE FOR ANY SPECIAL, DIRECT,
INDIRECT, OR CONSEQUENTIAL DAMAGES OR ANY DAMAGES WHATSOEVER RESULTING FROM
LOSS OF USE, DATA OR PROFITS, WHETHER IN AN ACTION OF CONTRACT, NEGLIGENCE OR
OTHER TORTIOUS ACTION, ARISING OUT OF OR IN CONNECTION WITH THE USE OR
PERFORMANCE OF THIS SOFTWARE.
***************************************************************************** */var n=function(e,t){return(n=Object.setPrototypeOf||({__proto__:[]})instanceof Array&&function(e,t){e.__proto__=t}||function(e,t){for(var r in t)t.hasOwnProperty(r)&&(e[r]=t[r])})(e,t)};function o(e,t){function r(){this.constructor=e}n(e,t),e.prototype=null===t?Object.create(t):(r.prototype=t.prototype,new r)}var i=function(){return(i=Object.assign||function(e){for(var t,r=1,n=arguments.length;r<n;r++)for(var o in t=arguments[r])Object.prototype.hasOwnProperty.call(t,o)&&(e[o]=t[o]);return e}).apply(this,arguments)};function a(e,t){var r={};for(var n in e)Object.prototype.hasOwnProperty.call(e,n)&&0>t.indexOf(n)&&(r[n]=e[n]);if(null!=e&&"function"==typeof Object.getOwnPropertySymbols)for(var o=0,n=Object.getOwnPropertySymbols(e);o<n.length;o++)0>t.indexOf(n[o])&&Object.prototype.propertyIsEnumerable.call(e,n[o])&&(r[n[o]]=e[n[o]]);return r}function s(e,t,r,n){var o,i=arguments.length,a=i<3?t:null===n?n=Object.getOwnPropertyDescriptor(t,r):n;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)a=Reflect.decorate(e,t,r,n);else for(var s=e.length-1;s>=0;s--)(o=e[s])&&(a=(i<3?o(a):i>3?o(t,r,a):o(t,r))||a);return i>3&&a&&Object.defineProperty(t,r,a),a}function u(e,t){return function(r,n){t(r,n,e)}}function l(e,t){if("object"==typeof Reflect&&"function"==typeof Reflect.metadata)return Reflect.metadata(e,t)}function c(e,t,r,n){return new(r||(r=Promise))(function(o,i){function a(e){try{u(n.next(e))}catch(e){i(e)}}function s(e){try{u(n.throw(e))}catch(e){i(e)}}function u(e){var t;e.done?o(e.value):((t=e.value)instanceof r?t:new r(function(e){e(t)})).then(a,s)}u((n=n.apply(e,t||[])).next())})}function h(e,t){var r,n,o,i,a={label:0,sent:function(){if(1&o[0])throw o[1];return o[1]},trys:[],ops:[]};return i={next:s(0),throw:s(1),return:s(2)},"function"==typeof Symbol&&(i[Symbol.iterator]=function(){return this}),i;function s(i){return function(s){return function(i){if(r)throw TypeError("Generator is already executing.");for(;a;)try{if(r=1,n&&(o=2&i[0]?n.return:i[0]?n.throw||((o=n.return)&&o.call(n),0):n.next)&&!(o=o.call(n,i[1])).done)return o;switch(n=0,o&&(i=[2&i[0],o.value]),i[0]){case 0:case 1:o=i;break;case 4:return a.label++,{value:i[1],done:!1};case 5:a.label++,n=i[1],i=[0];continue;case 7:i=a.ops.pop(),a.trys.pop();continue;default:if(!(o=(o=a.trys).length>0&&o[o.length-1])&&(6===i[0]||2===i[0])){a=0;continue}if(3===i[0]&&(!o||i[1]>o[0]&&i[1]<o[3])){a.label=i[1];break}if(6===i[0]&&a.label<o[1]){a.label=o[1],o=i;break}if(o&&a.label<o[2]){a.label=o[2],a.ops.push(i);break}o[2]&&a.ops.pop(),a.trys.pop();continue}i=t.call(e,a)}catch(e){i=[6,e],n=0}finally{r=o=0}if(5&i[0])throw i[1];return{value:i[0]?i[1]:void 0,done:!0}}([i,s])}}}function f(e,t,r,n){void 0===n&&(n=r),e[n]=t[r]}function d(e,t){for(var r in e)"default"===r||t.hasOwnProperty(r)||(t[r]=e[r])}function p(e){var t="function"==typeof Symbol&&Symbol.iterator,r=t&&e[t],n=0;if(r)return r.call(e);if(e&&"number"==typeof e.length)return{next:function(){return e&&n>=e.length&&(e=void 0),{value:e&&e[n++],done:!e}}};throw TypeError(t?"Object is not iterable.":"Symbol.iterator is not defined.")}function b(e,t){var r="function"==typeof Symbol&&e[Symbol.iterator];if(!r)return e;var n,o,i=r.call(e),a=[];try{for(;(void 0===t||t-- >0)&&!(n=i.next()).done;)a.push(n.value)}catch(e){o={error:e}}finally{try{n&&!n.done&&(r=i.return)&&r.call(i)}finally{if(o)throw o.error}}return a}function g(){for(var e=[],t=0;t<arguments.length;t++)e=e.concat(b(arguments[t]));return e}function w(){for(var e=0,t=0,r=arguments.length;t<r;t++)e+=arguments[t].length;for(var n=Array(e),o=0,t=0;t<r;t++)for(var i=arguments[t],a=0,s=i.length;a<s;a++,o++)n[o]=i[a];return n}function y(e){return this instanceof y?(this.v=e,this):new y(e)}function m(e,t,r){if(!Symbol.asyncIterator)throw TypeError("Symbol.asyncIterator is not defined.");var n,o=r.apply(e,t||[]),i=[];return n={},a("next"),a("throw"),a("return"),n[Symbol.asyncIterator]=function(){return this},n;function a(e){o[e]&&(n[e]=function(t){return new Promise(function(r,n){i.push([e,t,r,n])>1||s(e,t)})})}function s(e,t){try{var r;(r=o[e](t)).value instanceof y?Promise.resolve(r.value.v).then(u,l):c(i[0][2],r)}catch(e){c(i[0][3],e)}}function u(e){s("next",e)}function l(e){s("throw",e)}function c(e,t){e(t),i.shift(),i.length&&s(i[0][0],i[0][1])}}function v(e){var t,r;return t={},n("next"),n("throw",function(e){throw e}),n("return"),t[Symbol.iterator]=function(){return this},t;function n(n,o){t[n]=e[n]?function(t){return(r=!r)?{value:y(e[n](t)),done:"return"===n}:o?o(t):t}:o}}function D(e){if(!Symbol.asyncIterator)throw TypeError("Symbol.asyncIterator is not defined.");var t,r=e[Symbol.asyncIterator];return r?r.call(e):(e=p(e),t={},n("next"),n("throw"),n("return"),t[Symbol.asyncIterator]=function(){return this},t);function n(r){t[r]=e[r]&&function(t){return new Promise(function(n,o){!function(e,t,r,n){Promise.resolve(n).then(function(t){e({value:t,done:r})},t)}(n,o,(t=e[r](t)).done,t.value)})}}}function E(e,t){return Object.defineProperty?Object.defineProperty(e,"raw",{value:t}):e.raw=t,e}function _(e){if(e&&e.__esModule)return e;var t={};if(null!=e)for(var r in e)Object.hasOwnProperty.call(e,r)&&(t[r]=e[r]);return t.default=e,t}function C(e){return e&&e.__esModule?e:{default:e}}function k(e,t){if(!t.has(e))throw TypeError("attempted to get private field on non-instance");return t.get(e)}function x(e,t,r){if(!t.has(e))throw TypeError("attempted to set private field on non-instance");return t.set(e,r),r}},45936:function(e,t,r){var n;!function(o,i){"use strict";var a="function",s="undefined",u="object",l="string",c="major",h="model",f="name",d="type",p="vendor",b="version",g="architecture",w="console",y="mobile",m="tablet",v="smarttv",D="wearable",E="embedded",_="Amazon",C="Apple",k="ASUS",x="BlackBerry",S="Browser",A="Chrome",O="Firefox",N="Google",M="Huawei",I="Microsoft",T="Motorola",R="Opera",P="Samsung",B="Sharp",U="Sony",L="Xiaomi",F="Zebra",W="Facebook",j="Chromium OS",z="Mac OS",H=function(e,t){var r={};for(var n in e)t[n]&&t[n].length%2==0?r[n]=t[n].concat(e[n]):r[n]=e[n];return r},q=function(e){for(var t={},r=0;r<e.length;r++)t[e[r].toUpperCase()]=e[r];return t},V=function(e,t){return typeof e===l&&-1!==Y(t).indexOf(Y(e))},Y=function(e){return e.toLowerCase()},K=function(e,t){if(typeof e===l)return e=e.replace(/^\s\s*/,""),typeof t===s?e:e.substring(0,500)},$=function(e,t){for(var r,n,o,s,l,c,h=0;h<t.length&&!l;){var f=t[h],d=t[h+1];for(r=n=0;r<f.length&&!l&&f[r];)if(l=f[r++].exec(e))for(o=0;o<d.length;o++)c=l[++n],typeof(s=d[o])===u&&s.length>0?2===s.length?typeof s[1]==a?this[s[0]]=s[1].call(this,c):this[s[0]]=s[1]:3===s.length?typeof s[1]!==a||s[1].exec&&s[1].test?this[s[0]]=c?c.replace(s[1],s[2]):i:this[s[0]]=c?s[1].call(this,c,s[2]):i:4===s.length&&(this[s[0]]=c?s[3].call(this,c.replace(s[1],s[2])):i):this[s]=c||i;h+=2}},X=function(e,t){for(var r in t)if(typeof t[r]===u&&t[r].length>0){for(var n=0;n<t[r].length;n++)if(V(t[r][n],e))return"?"===r?i:r}else if(V(t[r],e))return"?"===r?i:r;return e},Q={ME:"4.90","NT 3.11":"NT3.51","NT 4.0":"NT4.0",2e3:"NT 5.0",XP:["NT 5.1","NT 5.2"],Vista:"NT 6.0",7:"NT 6.1",8:"NT 6.2","8.1":"NT 6.3",10:["NT 6.4","NT 10.0"],RT:"ARM"},G={browser:[[/\b(?:crmo|crios)\/([\w\.]+)/i],[b,[f,"Chrome"]],[/edg(?:e|ios|a)?\/([\w\.]+)/i],[b,[f,"Edge"]],[/(opera mini)\/([-\w\.]+)/i,/(opera [mobiletab]{3,6})\b.+version\/([-\w\.]+)/i,/(opera)(?:.+version\/|[\/ ]+)([\w\.]+)/i],[f,b],[/opios[\/ ]+([\w\.]+)/i],[b,[f,R+" Mini"]],[/\bopr\/([\w\.]+)/i],[b,[f,R]],[/\bb[ai]*d(?:uhd|[ub]*[aekoprswx]{5,6})[\/ ]?([\w\.]+)/i],[b,[f,"Baidu"]],[/(kindle)\/([\w\.]+)/i,/(lunascape|maxthon|netfront|jasmine|blazer)[\/ ]?([\w\.]*)/i,/(avant|iemobile|slim)\s?(?:browser)?[\/ ]?([\w\.]*)/i,/(?:ms|\()(ie) ([\w\.]+)/i,/(flock|rockmelt|midori|epiphany|silk|skyfire|bolt|iron|vivaldi|iridium|phantomjs|bowser|quark|qupzilla|falkon|rekonq|puffin|brave|whale(?!.+naver)|qqbrowserlite|qq|duckduckgo)\/([-\w\.]+)/i,/(heytap|ovi)browser\/([\d\.]+)/i,/(weibo)__([\d\.]+)/i],[f,b],[/(?:\buc? ?browser|(?:juc.+)ucweb)[\/ ]?([\w\.]+)/i],[b,[f,"UC"+S]],[/microm.+\bqbcore\/([\w\.]+)/i,/\bqbcore\/([\w\.]+).+microm/i,/micromessenger\/([\w\.]+)/i],[b,[f,"WeChat"]],[/konqueror\/([\w\.]+)/i],[b,[f,"Konqueror"]],[/trident.+rv[: ]([\w\.]{1,9})\b.+like gecko/i],[b,[f,"IE"]],[/ya(?:search)?browser\/([\w\.]+)/i],[b,[f,"Yandex"]],[/slbrowser\/([\w\.]+)/i],[b,[f,"Smart Lenovo "+S]],[/(avast|avg)\/([\w\.]+)/i],[[f,/(.+)/,"$1 Secure "+S],b],[/\bfocus\/([\w\.]+)/i],[b,[f,O+" Focus"]],[/\bopt\/([\w\.]+)/i],[b,[f,R+" Touch"]],[/coc_coc\w+\/([\w\.]+)/i],[b,[f,"Coc Coc"]],[/dolfin\/([\w\.]+)/i],[b,[f,"Dolphin"]],[/coast\/([\w\.]+)/i],[b,[f,R+" Coast"]],[/miuibrowser\/([\w\.]+)/i],[b,[f,"MIUI "+S]],[/fxios\/([-\w\.]+)/i],[b,[f,O]],[/\bqihu|(qi?ho?o?|360)browser/i],[[f,"360 "+S]],[/(oculus|sailfish|huawei|vivo)browser\/([\w\.]+)/i],[[f,/(.+)/,"$1 "+S],b],[/samsungbrowser\/([\w\.]+)/i],[b,[f,P+" Internet"]],[/(comodo_dragon)\/([\w\.]+)/i],[[f,/_/g," "],b],[/metasr[\/ ]?([\d\.]+)/i],[b,[f,"Sogou Explorer"]],[/(sogou)mo\w+\/([\d\.]+)/i],[[f,"Sogou Mobile"],b],[/(electron)\/([\w\.]+) safari/i,/(tesla)(?: qtcarbrowser|\/(20\d\d\.[-\w\.]+))/i,/m?(qqbrowser|2345Explorer)[\/ ]?([\w\.]+)/i],[f,b],[/(lbbrowser)/i,/\[(linkedin)app\]/i],[f],[/((?:fban\/fbios|fb_iab\/fb4a)(?!.+fbav)|;fbav\/([\w\.]+);)/i],[[f,W],b],[/(Klarna)\/([\w\.]+)/i,/(kakao(?:talk|story))[\/ ]([\w\.]+)/i,/(naver)\(.*?(\d+\.[\w\.]+).*\)/i,/safari (line)\/([\w\.]+)/i,/\b(line)\/([\w\.]+)\/iab/i,/(alipay)client\/([\w\.]+)/i,/(chromium|instagram|snapchat)[\/ ]([-\w\.]+)/i],[f,b],[/\bgsa\/([\w\.]+) .*safari\//i],[b,[f,"GSA"]],[/musical_ly(?:.+app_?version\/|_)([\w\.]+)/i],[b,[f,"TikTok"]],[/headlesschrome(?:\/([\w\.]+)| )/i],[b,[f,A+" Headless"]],[/ wv\).+(chrome)\/([\w\.]+)/i],[[f,A+" WebView"],b],[/droid.+ version\/([\w\.]+)\b.+(?:mobile safari|safari)/i],[b,[f,"Android "+S]],[/(chrome|omniweb|arora|[tizenoka]{5} ?browser)\/v?([\w\.]+)/i],[f,b],[/version\/([\w\.\,]+) .*mobile\/\w+ (safari)/i],[b,[f,"Mobile Safari"]],[/version\/([\w(\.|\,)]+) .*(mobile ?safari|safari)/i],[b,f],[/webkit.+?(mobile ?safari|safari)(\/[\w\.]+)/i],[f,[b,X,{"1.0":"/8","1.2":"/1","1.3":"/3","2.0":"/412","2.0.2":"/416","2.0.3":"/417","2.0.4":"/419","?":"/"}]],[/(webkit|khtml)\/([\w\.]+)/i],[f,b],[/(navigator|netscape\d?)\/([-\w\.]+)/i],[[f,"Netscape"],b],[/mobile vr; rv:([\w\.]+)\).+firefox/i],[b,[f,O+" Reality"]],[/ekiohf.+(flow)\/([\w\.]+)/i,/(swiftfox)/i,/(icedragon|iceweasel|camino|chimera|fennec|maemo browser|minimo|conkeror|klar)[\/ ]?([\w\.\+]+)/i,/(seamonkey|k-meleon|icecat|iceape|firebird|phoenix|palemoon|basilisk|waterfox)\/([-\w\.]+)$/i,/(firefox)\/([\w\.]+)/i,/(mozilla)\/([\w\.]+) .+rv\:.+gecko\/\d+/i,/(polaris|lynx|dillo|icab|doris|amaya|w3m|netsurf|sleipnir|obigo|mosaic|(?:go|ice|up)[\. ]?browser)[-\/ ]?v?([\w\.]+)/i,/(links) \(([\w\.]+)/i,/panasonic;(viera)/i],[f,b],[/(cobalt)\/([\w\.]+)/i],[f,[b,/master.|lts./,""]]],cpu:[[/(?:(amd|x(?:(?:86|64)[-_])?|wow|win)64)[;\)]/i],[[g,"amd64"]],[/(ia32(?=;))/i],[[g,Y]],[/((?:i[346]|x)86)[;\)]/i],[[g,"ia32"]],[/\b(aarch64|arm(v?8e?l?|_?64))\b/i],[[g,"arm64"]],[/\b(arm(?:v[67])?ht?n?[fl]p?)\b/i],[[g,"armhf"]],[/windows (ce|mobile); ppc;/i],[[g,"arm"]],[/((?:ppc|powerpc)(?:64)?)(?: mac|;|\))/i],[[g,/ower/,"",Y]],[/(sun4\w)[;\)]/i],[[g,"sparc"]],[/((?:avr32|ia64(?=;))|68k(?=\))|\barm(?=v(?:[1-7]|[5-7]1)l?|;|eabi)|(?=atmel )avr|(?:irix|mips|sparc)(?:64)?\b|pa-risc)/i],[[g,Y]]],device:[[/\b(sch-i[89]0\d|shw-m380s|sm-[ptx]\w{2,4}|gt-[pn]\d{2,4}|sgh-t8[56]9|nexus 10)/i],[h,[p,P],[d,m]],[/\b((?:s[cgp]h|gt|sm)-\w+|sc[g-]?[\d]+a?|galaxy nexus)/i,/samsung[- ]([-\w]+)/i,/sec-(sgh\w+)/i],[h,[p,P],[d,y]],[/(?:\/|\()(ip(?:hone|od)[\w, ]*)(?:\/|;)/i],[h,[p,C],[d,y]],[/\((ipad);[-\w\),; ]+apple/i,/applecoremedia\/[\w\.]+ \((ipad)/i,/\b(ipad)\d\d?,\d\d?[;\]].+ios/i],[h,[p,C],[d,m]],[/(macintosh);/i],[h,[p,C]],[/\b(sh-?[altvz]?\d\d[a-ekm]?)/i],[h,[p,B],[d,y]],[/\b((?:ag[rs][23]?|bah2?|sht?|btv)-a?[lw]\d{2})\b(?!.+d\/s)/i],[h,[p,M],[d,m]],[/(?:huawei|honor)([-\w ]+)[;\)]/i,/\b(nexus 6p|\w{2,4}e?-[atu]?[ln][\dx][012359c][adn]?)\b(?!.+d\/s)/i],[h,[p,M],[d,y]],[/\b(poco[\w ]+|m2\d{3}j\d\d[a-z]{2})(?: bui|\))/i,/\b; (\w+) build\/hm\1/i,/\b(hm[-_ ]?note?[_ ]?(?:\d\w)?) bui/i,/\b(redmi[\-_ ]?(?:note|k)?[\w_ ]+)(?: bui|\))/i,/oid[^\)]+; (m?[12][0-389][01]\w{3,6}[c-y])( bui|; wv|\))/i,/\b(mi[-_ ]?(?:a\d|one|one[_ ]plus|note lte|max|cc)?[_ ]?(?:\d?\w?)[_ ]?(?:plus|se|lite)?)(?: bui|\))/i],[[h,/_/g," "],[p,L],[d,y]],[/oid[^\)]+; (2\d{4}(283|rpbf)[cgl])( bui|\))/i,/\b(mi[-_ ]?(?:pad)(?:[\w_ ]+))(?: bui|\))/i],[[h,/_/g," "],[p,L],[d,m]],[/; (\w+) bui.+ oppo/i,/\b(cph[12]\d{3}|p(?:af|c[al]|d\w|e[ar])[mt]\d0|x9007|a101op)\b/i],[h,[p,"OPPO"],[d,y]],[/vivo (\w+)(?: bui|\))/i,/\b(v[12]\d{3}\w?[at])(?: bui|;)/i],[h,[p,"Vivo"],[d,y]],[/\b(rmx[1-3]\d{3})(?: bui|;|\))/i],[h,[p,"Realme"],[d,y]],[/\b(milestone|droid(?:[2-4x]| (?:bionic|x2|pro|razr))?:?( 4g)?)\b[\w ]+build\//i,/\bmot(?:orola)?[- ](\w*)/i,/((?:moto[\w\(\) ]+|xt\d{3,4}|nexus 6)(?= bui|\)))/i],[h,[p,T],[d,y]],[/\b(mz60\d|xoom[2 ]{0,2}) build\//i],[h,[p,T],[d,m]],[/((?=lg)?[vl]k\-?\d{3}) bui| 3\.[-\w; ]{10}lg?-([06cv9]{3,4})/i],[h,[p,"LG"],[d,m]],[/(lm(?:-?f100[nv]?|-[\w\.]+)(?= bui|\))|nexus [45])/i,/\blg[-e;\/ ]+((?!browser|netcast|android tv)\w+)/i,/\blg-?([\d\w]+) bui/i],[h,[p,"LG"],[d,y]],[/(ideatab[-\w ]+)/i,/lenovo ?(s[56]000[-\w]+|tab(?:[\w ]+)|yt[-\d\w]{6}|tb[-\d\w]{6})/i],[h,[p,"Lenovo"],[d,m]],[/(?:maemo|nokia).*(n900|lumia \d+)/i,/nokia[-_ ]?([-\w\.]*)/i],[[h,/_/g," "],[p,"Nokia"],[d,y]],[/(pixel c)\b/i],[h,[p,N],[d,m]],[/droid.+; (pixel[\daxl ]{0,6})(?: bui|\))/i],[h,[p,N],[d,y]],[/droid.+ (a?\d[0-2]{2}so|[c-g]\d{4}|so[-gl]\w+|xq-a\w[4-7][12])(?= bui|\).+chrome\/(?![1-6]{0,1}\d\.))/i],[h,[p,U],[d,y]],[/sony tablet [ps]/i,/\b(?:sony)?sgp\w+(?: bui|\))/i],[[h,"Xperia Tablet"],[p,U],[d,m]],[/ (kb2005|in20[12]5|be20[12][59])\b/i,/(?:one)?(?:plus)? (a\d0\d\d)(?: b|\))/i],[h,[p,"OnePlus"],[d,y]],[/(alexa)webm/i,/(kf[a-z]{2}wi|aeo[c-r]{2})( bui|\))/i,/(kf[a-z]+)( bui|\)).+silk\//i],[h,[p,_],[d,m]],[/((?:sd|kf)[0349hijorstuw]+)( bui|\)).+silk\//i],[[h,/(.+)/g,"Fire Phone $1"],[p,_],[d,y]],[/(playbook);[-\w\),; ]+(rim)/i],[h,p,[d,m]],[/\b((?:bb[a-f]|st[hv])100-\d)/i,/\(bb10; (\w+)/i],[h,[p,x],[d,y]],[/(?:\b|asus_)(transfo[prime ]{4,10} \w+|eeepc|slider \w+|nexus 7|padfone|p00[cj])/i],[h,[p,k],[d,m]],[/ (z[bes]6[027][012][km][ls]|zenfone \d\w?)\b/i],[h,[p,k],[d,y]],[/(nexus 9)/i],[h,[p,"HTC"],[d,m]],[/(htc)[-;_ ]{1,2}([\w ]+(?=\)| bui)|\w+)/i,/(zte)[- ]([\w ]+?)(?: bui|\/|\))/i,/(alcatel|geeksphone|nexian|panasonic(?!(?:;|\.))|sony(?!-bra))[-_ ]?([-\w]*)/i],[p,[h,/_/g," "],[d,y]],[/droid.+; ([ab][1-7]-?[0178a]\d\d?)/i],[h,[p,"Acer"],[d,m]],[/droid.+; (m[1-5] note) bui/i,/\bmz-([-\w]{2,})/i],[h,[p,"Meizu"],[d,y]],[/; ((?:power )?armor(?:[\w ]{0,8}))(?: bui|\))/i],[h,[p,"Ulefone"],[d,y]],[/(blackberry|benq|palm(?=\-)|sonyericsson|acer|asus|dell|meizu|motorola|polytron|infinix|tecno)[-_ ]?([-\w]*)/i,/(hp) ([\w ]+\w)/i,/(asus)-?(\w+)/i,/(microsoft); (lumia[\w ]+)/i,/(lenovo)[-_ ]?([-\w]+)/i,/(jolla)/i,/(oppo) ?([\w ]+) bui/i],[p,h,[d,y]],[/(kobo)\s(ereader|touch)/i,/(archos) (gamepad2?)/i,/(hp).+(touchpad(?!.+tablet)|tablet)/i,/(kindle)\/([\w\.]+)/i,/(nook)[\w ]+build\/(\w+)/i,/(dell) (strea[kpr\d ]*[\dko])/i,/(le[- ]+pan)[- ]+(\w{1,9}) bui/i,/(trinity)[- ]*(t\d{3}) bui/i,/(gigaset)[- ]+(q\w{1,9}) bui/i,/(vodafone) ([\w ]+)(?:\)| bui)/i],[p,h,[d,m]],[/(surface duo)/i],[h,[p,I],[d,m]],[/droid [\d\.]+; (fp\du?)(?: b|\))/i],[h,[p,"Fairphone"],[d,y]],[/(u304aa)/i],[h,[p,"AT&T"],[d,y]],[/\bsie-(\w*)/i],[h,[p,"Siemens"],[d,y]],[/\b(rct\w+) b/i],[h,[p,"RCA"],[d,m]],[/\b(venue[\d ]{2,7}) b/i],[h,[p,"Dell"],[d,m]],[/\b(q(?:mv|ta)\w+) b/i],[h,[p,"Verizon"],[d,m]],[/\b(?:barnes[& ]+noble |bn[rt])([\w\+ ]*) b/i],[h,[p,"Barnes & Noble"],[d,m]],[/\b(tm\d{3}\w+) b/i],[h,[p,"NuVision"],[d,m]],[/\b(k88) b/i],[h,[p,"ZTE"],[d,m]],[/\b(nx\d{3}j) b/i],[h,[p,"ZTE"],[d,y]],[/\b(gen\d{3}) b.+49h/i],[h,[p,"Swiss"],[d,y]],[/\b(zur\d{3}) b/i],[h,[p,"Swiss"],[d,m]],[/\b((zeki)?tb.*\b) b/i],[h,[p,"Zeki"],[d,m]],[/\b([yr]\d{2}) b/i,/\b(dragon[- ]+touch |dt)(\w{5}) b/i],[[p,"Dragon Touch"],h,[d,m]],[/\b(ns-?\w{0,9}) b/i],[h,[p,"Insignia"],[d,m]],[/\b((nxa|next)-?\w{0,9}) b/i],[h,[p,"NextBook"],[d,m]],[/\b(xtreme\_)?(v(1[045]|2[015]|[3469]0|7[05])) b/i],[[p,"Voice"],h,[d,y]],[/\b(lvtel\-)?(v1[12]) b/i],[[p,"LvTel"],h,[d,y]],[/\b(ph-1) /i],[h,[p,"Essential"],[d,y]],[/\b(v(100md|700na|7011|917g).*\b) b/i],[h,[p,"Envizen"],[d,m]],[/\b(trio[-\w\. ]+) b/i],[h,[p,"MachSpeed"],[d,m]],[/\btu_(1491) b/i],[h,[p,"Rotor"],[d,m]],[/(shield[\w ]+) b/i],[h,[p,"Nvidia"],[d,m]],[/(sprint) (\w+)/i],[p,h,[d,y]],[/(kin\.[onetw]{3})/i],[[h,/\./g," "],[p,I],[d,y]],[/droid.+; (cc6666?|et5[16]|mc[239][23]x?|vc8[03]x?)\)/i],[h,[p,F],[d,m]],[/droid.+; (ec30|ps20|tc[2-8]\d[kx])\)/i],[h,[p,F],[d,y]],[/smart-tv.+(samsung)/i],[p,[d,v]],[/hbbtv.+maple;(\d+)/i],[[h,/^/,"SmartTV"],[p,P],[d,v]],[/(nux; netcast.+smarttv|lg (netcast\.tv-201\d|android tv))/i],[[p,"LG"],[d,v]],[/(apple) ?tv/i],[p,[h,C+" TV"],[d,v]],[/crkey/i],[[h,A+"cast"],[p,N],[d,v]],[/droid.+aft(\w+)( bui|\))/i],[h,[p,_],[d,v]],[/\(dtv[\);].+(aquos)/i,/(aquos-tv[\w ]+)\)/i],[h,[p,B],[d,v]],[/(bravia[\w ]+)( bui|\))/i],[h,[p,U],[d,v]],[/(mitv-\w{5}) bui/i],[h,[p,L],[d,v]],[/Hbbtv.*(technisat) (.*);/i],[p,h,[d,v]],[/\b(roku)[\dx]*[\)\/]((?:dvp-)?[\d\.]*)/i,/hbbtv\/\d+\.\d+\.\d+ +\([\w\+ ]*; *([\w\d][^;]*);([^;]*)/i],[[p,K],[h,K],[d,v]],[/\b(android tv|smart[- ]?tv|opera tv|tv; rv:)\b/i],[[d,v]],[/(ouya)/i,/(nintendo) ([wids3utch]+)/i],[p,h,[d,w]],[/droid.+; (shield) bui/i],[h,[p,"Nvidia"],[d,w]],[/(playstation [345portablevi]+)/i],[h,[p,U],[d,w]],[/\b(xbox(?: one)?(?!; xbox))[\); ]/i],[h,[p,I],[d,w]],[/((pebble))app/i],[p,h,[d,D]],[/(watch)(?: ?os[,\/]|\d,\d\/)[\d\.]+/i],[h,[p,C],[d,D]],[/droid.+; (glass) \d/i],[h,[p,N],[d,D]],[/droid.+; (wt63?0{2,3})\)/i],[h,[p,F],[d,D]],[/(quest( 2| pro)?)/i],[h,[p,W],[d,D]],[/(tesla)(?: qtcarbrowser|\/[-\w\.]+)/i],[p,[d,E]],[/(aeobc)\b/i],[h,[p,_],[d,E]],[/droid .+?; ([^;]+?)(?: bui|; wv\)|\) applew).+? mobile safari/i],[h,[d,y]],[/droid .+?; ([^;]+?)(?: bui|\) applew).+?(?! mobile) safari/i],[h,[d,m]],[/\b((tablet|tab)[;\/]|focus\/\d(?!.+mobile))/i],[[d,m]],[/(phone|mobile(?:[;\/]| [ \w\/\.]*safari)|pda(?=.+windows ce))/i],[[d,y]],[/(android[-\w\. ]{0,9});.+buil/i],[h,[p,"Generic"]]],engine:[[/windows.+ edge\/([\w\.]+)/i],[b,[f,"EdgeHTML"]],[/webkit\/537\.36.+chrome\/(?!27)([\w\.]+)/i],[b,[f,"Blink"]],[/(presto)\/([\w\.]+)/i,/(webkit|trident|netfront|netsurf|amaya|lynx|w3m|goanna)\/([\w\.]+)/i,/ekioh(flow)\/([\w\.]+)/i,/(khtml|tasman|links)[\/ ]\(?([\w\.]+)/i,/(icab)[\/ ]([23]\.[\d\.]+)/i,/\b(libweb)/i],[f,b],[/rv\:([\w\.]{1,9})\b.+(gecko)/i],[b,f]],os:[[/microsoft (windows) (vista|xp)/i],[f,b],[/(windows (?:phone(?: os)?|mobile))[\/ ]?([\d\.\w ]*)/i],[f,[b,X,Q]],[/windows nt 6\.2; (arm)/i,/windows[\/ ]?([ntce\d\. ]+\w)(?!.+xbox)/i,/(?:win(?=3|9|n)|win 9x )([nt\d\.]+)/i],[[b,X,Q],[f,"Windows"]],[/ip[honead]{2,4}\b(?:.*os ([\w]+) like mac|; opera)/i,/(?:ios;fbsv\/|iphone.+ios[\/ ])([\d\.]+)/i,/cfnetwork\/.+darwin/i],[[b,/_/g,"."],[f,"iOS"]],[/(mac os x) ?([\w\. ]*)/i,/(macintosh|mac_powerpc\b)(?!.+haiku)/i],[[f,z],[b,/_/g,"."]],[/droid ([\w\.]+)\b.+(android[- ]x86|harmonyos)/i],[b,f],[/(android|webos|qnx|bada|rim tablet os|maemo|meego|sailfish)[-\/ ]?([\w\.]*)/i,/(blackberry)\w*\/([\w\.]*)/i,/(tizen|kaios)[\/ ]([\w\.]+)/i,/\((series40);/i],[f,b],[/\(bb(10);/i],[b,[f,x]],[/(?:symbian ?os|symbos|s60(?=;)|series60)[-\/ ]?([\w\.]*)/i],[b,[f,"Symbian"]],[/mozilla\/[\d\.]+ \((?:mobile|tablet|tv|mobile; [\w ]+); rv:.+ gecko\/([\w\.]+)/i],[b,[f,O+" OS"]],[/web0s;.+rt(tv)/i,/\b(?:hp)?wos(?:browser)?\/([\w\.]+)/i],[b,[f,"webOS"]],[/watch(?: ?os[,\/]|\d,\d\/)([\d\.]+)/i],[b,[f,"watchOS"]],[/crkey\/([\d\.]+)/i],[b,[f,A+"cast"]],[/(cros) [\w]+(?:\)| ([\w\.]+)\b)/i],[[f,j],b],[/panasonic;(viera)/i,/(netrange)mmh/i,/(nettv)\/(\d+\.[\w\.]+)/i,/(nintendo|playstation) ([wids345portablevuch]+)/i,/(xbox); +xbox ([^\);]+)/i,/\b(joli|palm)\b ?(?:os)?\/?([\w\.]*)/i,/(mint)[\/\(\) ]?(\w*)/i,/(mageia|vectorlinux)[; ]/i,/([kxln]?ubuntu|debian|suse|opensuse|gentoo|arch(?= linux)|slackware|fedora|mandriva|centos|pclinuxos|red ?hat|zenwalk|linpus|raspbian|plan 9|minix|risc os|contiki|deepin|manjaro|elementary os|sabayon|linspire)(?: gnu\/linux)?(?: enterprise)?(?:[- ]linux)?(?:-gnu)?[-\/ ]?(?!chrom|package)([-\w\.]*)/i,/(hurd|linux) ?([\w\.]*)/i,/(gnu) ?([\w\.]*)/i,/\b([-frentopcghs]{0,5}bsd|dragonfly)[\/ ]?(?!amd|[ix346]{1,2}86)([\w\.]*)/i,/(haiku) (\w+)/i],[f,b],[/(sunos) ?([\w\.\d]*)/i],[[f,"Solaris"],b],[/((?:open)?solaris)[-\/ ]?([\w\.]*)/i,/(aix) ((\d)(?=\.|\)| )[\w\.])*/i,/\b(beos|os\/2|amigaos|morphos|openvms|fuchsia|hp-ux|serenityos)/i,/(unix) ?([\w\.]*)/i],[f,b]]},Z=function(e,t){if(typeof e===u&&(t=e,e=i),!(this instanceof Z))return new Z(e,t).getResult();var r=typeof o!==s&&o.navigator?o.navigator:i,n=e||(r&&r.userAgent?r.userAgent:""),w=r&&r.userAgentData?r.userAgentData:i,v=t?H(G,t):G,D=r&&r.userAgent==n;return this.getBrowser=function(){var e,t={};return t[f]=i,t[b]=i,$.call(t,n,v.browser),t[c]=typeof(e=t[b])===l?e.replace(/[^\d\.]/g,"").split(".")[0]:i,D&&r&&r.brave&&typeof r.brave.isBrave==a&&(t[f]="Brave"),t},this.getCPU=function(){var e={};return e[g]=i,$.call(e,n,v.cpu),e},this.getDevice=function(){var e={};return e[p]=i,e[h]=i,e[d]=i,$.call(e,n,v.device),D&&!e[d]&&w&&w.mobile&&(e[d]=y),D&&"Macintosh"==e[h]&&r&&typeof r.standalone!==s&&r.maxTouchPoints&&r.maxTouchPoints>2&&(e[h]="iPad",e[d]=m),e},this.getEngine=function(){var e={};return e[f]=i,e[b]=i,$.call(e,n,v.engine),e},this.getOS=function(){var e={};return e[f]=i,e[b]=i,$.call(e,n,v.os),D&&!e[f]&&w&&"Unknown"!=w.platform&&(e[f]=w.platform.replace(/chrome os/i,j).replace(/macos/i,z)),e},this.getResult=function(){return{ua:this.getUA(),browser:this.getBrowser(),engine:this.getEngine(),os:this.getOS(),device:this.getDevice(),cpu:this.getCPU()}},this.getUA=function(){return n},this.setUA=function(e){return n=typeof e===l&&e.length>500?K(e,500):e,this},this.setUA(n),this};Z.VERSION="1.0.37",Z.BROWSER=q([f,b,c]),Z.CPU=q([g]),Z.DEVICE=q([h,p,d,w,y,v,m,D,E]),Z.ENGINE=Z.OS=q([f,b]),typeof t!==s?(e.exports&&(t=e.exports=Z),t.UAParser=Z):r.amdO?i!==(n=(function(){return Z}).call(t,r,t,e))&&(e.exports=n):typeof o!==s&&(o.UAParser=Z);var J=typeof o!==s&&(o.jQuery||o.Zepto);if(J&&!J.ua){var ee=new Z;J.ua=ee.getResult(),J.ua.get=function(){return ee.getUA()},J.ua.set=function(e){ee.setUA(e);var t=ee.getResult();for(var r in t)J.ua[r]=t[r]}}}("object"==typeof window?window:this)},98356:function(e,t,r){"use strict";var n=r(2265);let o=n.forwardRef(function({title:e,titleId:t,...r},o){return n.createElement("svg",Object.assign({xmlns:"http://www.w3.org/2000/svg",fill:"none",viewBox:"0 0 24 24",strokeWidth:1.5,stroke:"currentColor","aria-hidden":"true",ref:o,"aria-labelledby":t},r),e?n.createElement("title",{id:t},e):null,n.createElement("path",{strokeLinecap:"round",strokeLinejoin:"round",d:"M15.75 9V5.25A2.25 2.25 0 0013.5 3h-6a2.25 2.25 0 00-2.25 2.25v13.5A2.25 2.25 0 007.5 21h6a2.25 2.25 0 002.25-2.25V15M12 9l-3 3m0 0l3 3m-3-3h12.75"}))});t.Z=o},3042:function(e,t,r){"use strict";var n=r(2265);let o=n.forwardRef(function({title:e,titleId:t,...r},o){return n.createElement("svg",Object.assign({xmlns:"http://www.w3.org/2000/svg",fill:"none",viewBox:"0 0 24 24",strokeWidth:1.5,stroke:"currentColor","aria-hidden":"true",ref:o,"aria-labelledby":t},r),e?n.createElement("title",{id:t},e):null,n.createElement("path",{strokeLinecap:"round",strokeLinejoin:"round",d:"M13.5 6H5.25A2.25 2.25 0 003 8.25v10.5A2.25 2.25 0 005.25 21h10.5A2.25 2.25 0 0018 18.75V10.5m-10.5 6L21 3m0 0h-5.25M21 3v5.25"}))});t.Z=o},11566:function(e,t,r){"use strict";var n=r(2265);let o=n.forwardRef(function({title:e,titleId:t,...r},o){return n.createElement("svg",Object.assign({xmlns:"http://www.w3.org/2000/svg",fill:"none",viewBox:"0 0 24 24",strokeWidth:1.5,stroke:"currentColor","aria-hidden":"true",ref:o,"aria-labelledby":t},r),e?n.createElement("title",{id:t},e):null,n.createElement("path",{strokeLinecap:"round",strokeLinejoin:"round",d:"M7.5 21L3 16.5m0 0L7.5 12M3 16.5h13.5m0-13.5L21 7.5m0 0L16.5 12M21 7.5H7.5"}))});t.Z=o},49186:function(e,t,r){"use strict";var n=r(2265);let o=n.forwardRef(function({title:e,titleId:t,...r},o){return n.createElement("svg",Object.assign({xmlns:"http://www.w3.org/2000/svg",fill:"none",viewBox:"0 0 24 24",strokeWidth:1.5,stroke:"currentColor","aria-hidden":"true",ref:o,"aria-labelledby":t},r),e?n.createElement("title",{id:t},e):null,n.createElement("path",{strokeLinecap:"round",strokeLinejoin:"round",d:"M9 12.75L11.25 15 15 9.75M21 12a9 9 0 11-18 0 9 9 0 0118 0z"}))});t.Z=o},84164:function(e,t,r){"use strict";var n=r(2265);let o=n.forwardRef(function({title:e,titleId:t,...r},o){return n.createElement("svg",Object.assign({xmlns:"http://www.w3.org/2000/svg",fill:"none",viewBox:"0 0 24 24",strokeWidth:1.5,stroke:"currentColor","aria-hidden":"true",ref:o,"aria-labelledby":t},r),e?n.createElement("title",{id:t},e):null,n.createElement("path",{strokeLinecap:"round",strokeLinejoin:"round",d:"M19.5 8.25l-7.5 7.5-7.5-7.5"}))});t.Z=o},36108:function(e,t,r){"use strict";var n=r(2265);let o=n.forwardRef(function({title:e,titleId:t,...r},o){return n.createElement("svg",Object.assign({xmlns:"http://www.w3.org/2000/svg",fill:"none",viewBox:"0 0 24 24",strokeWidth:1.5,stroke:"currentColor","aria-hidden":"true",ref:o,"aria-labelledby":t},r),e?n.createElement("title",{id:t},e):null,n.createElement("path",{strokeLinecap:"round",strokeLinejoin:"round",d:"M15.75 17.25v3.375c0 .621-.504 1.125-1.125 1.125h-9.75a1.125 1.125 0 01-1.125-1.125V7.875c0-.621.504-1.125 1.125-1.125H6.75a9.06 9.06 0 011.5.124m7.5 10.376h3.375c.621 0 1.125-.504 1.125-1.125V11.25c0-4.46-3.243-8.161-7.5-8.876a9.06 9.06 0 00-1.5-.124H9.375c-.621 0-1.125.504-1.125 1.125v3.5m7.5 10.375H9.375a1.125 1.125 0 01-1.125-1.125v-9.25m12 6.625v-1.875a3.375 3.375 0 00-3.375-3.375h-1.5a1.125 1.125 0 01-1.125-1.125v-1.5a3.375 3.375 0 00-3.375-3.375H9.75"}))});t.Z=o},84753:function(e,t,r){"use strict";var n=r(2265);let o=n.forwardRef(function({title:e,titleId:t,...r},o){return n.createElement("svg",Object.assign({xmlns:"http://www.w3.org/2000/svg",fill:"none",viewBox:"0 0 24 24",strokeWidth:1.5,stroke:"currentColor","aria-hidden":"true",ref:o,"aria-labelledby":t},r),e?n.createElement("title",{id:t},e):null,n.createElement("path",{strokeLinecap:"round",strokeLinejoin:"round",d:"M3.75 4.875c0-.621.504-1.125 1.125-1.125h4.5c.621 0 1.125.504 1.125 1.125v4.5c0 .621-.504 1.125-1.125 1.125h-4.5A1.125 1.125 0 013.75 9.375v-4.5zM3.75 14.625c0-.621.504-1.125 1.125-1.125h4.5c.621 0 1.125.504 1.125 1.125v4.5c0 .621-.504 1.125-1.125 1.125h-4.5a1.125 1.125 0 01-1.125-1.125v-4.5zM13.5 4.875c0-.621.504-1.125 1.125-1.125h4.5c.621 0 1.125.504 1.125 1.125v4.5c0 .621-.504 1.125-1.125 1.125h-4.5A1.125 1.125 0 0113.5 9.375v-4.5z"}),n.createElement("path",{strokeLinecap:"round",strokeLinejoin:"round",d:"M6.75 6.75h.75v.75h-.75v-.75zM6.75 16.5h.75v.75h-.75v-.75zM16.5 6.75h.75v.75h-.75v-.75zM13.5 13.5h.75v.75h-.75v-.75zM13.5 19.5h.75v.75h-.75v-.75zM19.5 13.5h.75v.75h-.75v-.75zM19.5 19.5h.75v.75h-.75v-.75zM16.5 16.5h.75v.75h-.75v-.75z"}))});t.Z=o},20387:function(e,t,r){"use strict";var n=r(2265);let o=n.forwardRef(function({title:e,titleId:t,...r},o){return n.createElement("svg",Object.assign({xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 24 24",fill:"currentColor","aria-hidden":"true",ref:o,"aria-labelledby":t},r),e?n.createElement("title",{id:t},e):null,n.createElement("path",{fillRule:"evenodd",d:"M15.97 2.47a.75.75 0 011.06 0l4.5 4.5a.75.75 0 010 1.06l-4.5 4.5a.75.75 0 11-1.06-1.06l3.22-3.22H7.5a.75.75 0 010-1.5h11.69l-3.22-3.22a.75.75 0 010-1.06zm-7.94 9a.75.75 0 010 1.06l-3.22 3.22H16.5a.75.75 0 010 1.5H4.81l3.22 3.22a.75.75 0 11-1.06 1.06l-4.5-4.5a.75.75 0 010-1.06l4.5-4.5a.75.75 0 011.06 0z",clipRule:"evenodd"}))});t.Z=o},21004:function(e,t,r){"use strict";r.d(t,{I:function(){return n}});var n=`{
  "connect_wallet": {
    "label": "Connect Wallet",
    "wrong_network": {
      "label": "Wrong network"
    }
  },

  "intro": {
    "title": "What is a Wallet?",
    "description": "A wallet is used to send, receive, store, and display digital assets. It's also a new way to log in, without needing to create new accounts and passwords on every website.",
    "digital_asset": {
      "title": "A Home for your Digital Assets",
      "description": "Wallets are used to send, receive, store, and display digital assets like Ethereum and NFTs."
    },
    "login": {
      "title": "A New Way to Log In",
      "description": "Instead of creating new accounts and passwords on every website, just connect your wallet."
    },
    "get": {
      "label": "Get a Wallet"
    },
    "learn_more": {
      "label": "Learn More"
    }
  },

  "sign_in": {
    "label": "Verify your account",
    "description": "To finish connecting, you must sign a message in your wallet to verify that you are the owner of this account.",
    "message": {
      "send": "Sign message",
      "preparing": "Preparing message...",
      "cancel": "Cancel",
      "preparing_error": "Error preparing message, please retry!"
    },
    "signature": {
      "waiting": "Waiting for signature...",
      "verifying": "Verifying signature...",
      "signing_error": "Error signing message, please retry!",
      "verifying_error": "Error verifying signature, please retry!",
      "oops_error": "Oops, something went wrong!"
    }
  },

  "connect": {
    "label": "Connect",
    "title": "Connect a Wallet",
    "new_to_ethereum": {
      "description": "New to Ethereum wallets?",
      "learn_more": {
        "label": "Learn More"
      }
    },
    "learn_more": {
      "label": "Learn more"
    },
    "recent": "Recent",
    "status": {
      "opening": "Opening %{wallet}...",
      "connecting": "Connecting",
      "connect_mobile": "Continue in %{wallet}",
      "not_installed": "%{wallet} is not installed",
      "not_available": "%{wallet} is not available",
      "confirm": "Confirm connection in the extension",
      "confirm_mobile": "Accept connection request in the wallet"
    },
    "secondary_action": {
      "get": {
        "description": "Don't have %{wallet}?",
        "label": "GET"
      },
      "install": {
        "label": "INSTALL"
      },
      "retry": {
        "label": "RETRY"
      }
    },
    "walletconnect": {
      "description": {
        "full": "Need the official WalletConnect modal?",
        "compact": "Need the WalletConnect modal?"
      },
      "open": {
        "label": "OPEN"
      }
    }
  },

  "connect_scan": {
    "title": "Scan with %{wallet}",
    "fallback_title": "Scan with your phone"
  },

  "connector_group": {
    "recommended": "Recommended",
    "other": "Other",
    "popular": "Popular",
    "more": "More",
    "others": "Others"
  },

  "get": {
    "title": "Get a Wallet",
    "action": {
      "label": "GET"
    },
    "mobile": {
      "description": "Mobile Wallet"
    },
    "extension": {
      "description": "Browser Extension"
    },
    "mobile_and_extension": {
      "description": "Mobile Wallet and Extension"
    },
    "mobile_and_desktop": {
      "description": "Mobile and Desktop Wallet"
    },
    "looking_for": {
      "title": "Not what you're looking for?",
      "mobile": {
        "description": "Select a wallet on the main screen to get started with a different wallet provider."
      },
      "desktop": {
        "compact_description": "Select a wallet on the main screen to get started with a different wallet provider.",
        "wide_description": "Select a wallet on the left to get started with a different wallet provider."
      }
    }
  },

  "get_options": {
    "title": "Get started with %{wallet}",
    "short_title": "Get %{wallet}",
    "mobile": {
      "title": "%{wallet} for Mobile",
      "description": "Use the mobile wallet to explore the world of Ethereum.",
      "download": {
        "label": "Get the app"
      }
    },
    "extension": {
      "title": "%{wallet} for %{browser}",
      "description": "Access your wallet right from your favorite web browser.",
      "download": {
        "label": "Add to %{browser}"
      }
    },
    "desktop": {
      "title": "%{wallet} for %{platform}",
      "description": "Access your wallet natively from your powerful desktop.",
      "download": {
        "label": "Add to %{platform}"
      }
    }
  },

  "get_mobile": {
    "title": "Install %{wallet}",
    "description": "Scan with your phone to download on iOS or Android",
    "continue": {
      "label": "Continue"
    }
  },

  "get_instructions": {
    "mobile": {
      "connect": {
        "label": "Connect"
      },
      "learn_more": {
        "label": "Learn More"
      }
    },
    "extension": {
      "refresh": {
        "label": "Refresh"
      },
      "learn_more": {
        "label": "Learn More"
      }
    },
    "desktop": {
      "connect": {
        "label": "Connect"
      },
      "learn_more": {
        "label": "Learn More"
      }
    }
  },

  "chains": {
    "title": "Switch Networks",
    "wrong_network": "Wrong network detected, switch or disconnect to continue.",
    "confirm": "Confirm in Wallet",
    "switching_not_supported": "Your wallet does not support switching networks from %{appName}. Try switching networks from within your wallet instead.",
    "switching_not_supported_fallback": "Your wallet does not support switching networks from this app. Try switching networks from within your wallet instead.",
    "disconnect": "Disconnect",
    "connected": "Connected"
  },

  "profile": {
    "disconnect": {
      "label": "Disconnect"
    },
    "copy_address": {
      "label": "Copy Address",
      "copied": "Copied!"
    },
    "explorer": {
      "label": "View more on explorer"
    },
    "transactions": {
      "description": "%{appName} transactions will appear here...",
      "description_fallback": "Your transactions will appear here...",
      "recent": {
        "title": "Recent Transactions"
      },
      "clear": {
        "label": "Clear All"
      }
    }
  },

  "wallet_connectors": {
    "argent": {
      "qr_code": {
        "step1": {
          "description": "Put Argent on your home screen for faster access to your wallet.",
          "title": "Open the Argent app"
        },
        "step2": {
          "description": "Create a wallet and username, or import an existing wallet.",
          "title": "Create or Import a Wallet"
        },
        "step3": {
          "description": "After you scan, a connection prompt will appear for you to connect your wallet.",
          "title": "Tap the Scan QR button"
        }
      }
    },

    "bifrost": {
      "qr_code": {
        "step1": {
          "description": "We recommend putting Bifrost Wallet on your home screen for quicker access.",
          "title": "Open the Bifrost Wallet app"
        },
        "step2": {
          "description": "Create or import a wallet using your recovery phrase.",
          "title": "Create or Import a Wallet"
        },
        "step3": {
          "description": "After you scan, a connection prompt will appear for you to connect your wallet.",
          "title": "Tap the scan button"
        }
      }
    },

    "bitget": {
      "qr_code": {
        "step1": {
          "description": "We recommend putting Bitget Wallet on your home screen for quicker access.",
          "title": "Open the Bitget Wallet app"
        },
        "step2": {
          "description": "Be sure to back up your wallet using a secure method. Never share your secret phrase with anyone.",
          "title": "Create or Import a Wallet"
        },
        "step3": {
          "description": "After you scan, a connection prompt will appear for you to connect your wallet.",
          "title": "Tap the scan button"
        }
      },

      "extension": {
        "step1": {
          "description": "We recommend pinning Bitget Wallet to your taskbar for quicker access to your wallet.",
          "title": "Install the Bitget Wallet extension"
        },
        "step2": {
          "description": "Be sure to back up your wallet using a secure method. Never share your secret phrase with anyone.",
          "title": "Create or Import a Wallet"
        },
        "step3": {
          "description": "Once you set up your wallet, click below to refresh the browser and load up the extension.",
          "title": "Refresh your browser"
        }
      }
    },

    "bitski": {
      "extension": {
        "step1": {
          "description": "We recommend pinning Bitski to your taskbar for quicker access to your wallet.",
          "title": "Install the Bitski extension"
        },
        "step2": {
          "description": "Be sure to back up your wallet using a secure method. Never share your secret phrase with anyone.",
          "title": "Create or Import a Wallet"
        },
        "step3": {
          "description": "Once you set up your wallet, click below to refresh the browser and load up the extension.",
          "title": "Refresh your browser"
        }
      }
    },

    "coin98": {
      "qr_code": {
        "step1": {
          "description": "We recommend putting Coin98 Wallet on your home screen for faster access to your wallet.",
          "title": "Open the Coin98 Wallet app"
        },
        "step2": {
          "description": "You can easily backup your wallet using our backup feature on your phone.",
          "title": "Create or Import a Wallet"
        },
        "step3": {
          "description": "After you scan, a connection prompt will appear for you to connect your wallet.",
          "title": "Tap the WalletConnect button"
        }
      },

      "extension": {
        "step1": {
          "description": "Click at the top right of your browser and pin Coin98 Wallet for easy access.",
          "title": "Install the Coin98 Wallet extension"
        },
        "step2": {
          "description": "Create a new wallet or import an existing one.",
          "title": "Create or Import a wallet"
        },
        "step3": {
          "description": "Once you set up Coin98 Wallet, click below to refresh the browser and load up the extension.",
          "title": "Refresh your browser"
        }
      }
    },

    "coinbase": {
      "qr_code": {
        "step1": {
          "description": "We recommend putting Coinbase Wallet on your home screen for quicker access.",
          "title": "Open the Coinbase Wallet app"
        },
        "step2": {
          "description": "You can easily backup your wallet using the cloud backup feature.",
          "title": "Create or Import a Wallet"
        },
        "step3": {
          "description": "After you scan, a connection prompt will appear for you to connect your wallet.",
          "title": "Tap the scan button"
        }
      },

      "extension": {
        "step1": {
          "description": "We recommend pinning Coinbase Wallet to your taskbar for quicker access to your wallet.",
          "title": "Install the Coinbase Wallet extension"
        },
        "step2": {
          "description": "Be sure to back up your wallet using a secure method. Never share your secret phrase with anyone.",
          "title": "Create or Import a Wallet"
        },
        "step3": {
          "description": "Once you set up your wallet, click below to refresh the browser and load up the extension.",
          "title": "Refresh your browser"
        }
      }
    },

    "core": {
      "qr_code": {
        "step1": {
          "description": "We recommend putting Core on your home screen for faster access to your wallet.",
          "title": "Open the Core app"
        },
        "step2": {
          "description": "You can easily backup your wallet using our backup feature on your phone.",
          "title": "Create or Import a Wallet"
        },
        "step3": {
          "description": "After you scan, a connection prompt will appear for you to connect your wallet.",
          "title": "Tap the WalletConnect button"
        }
      },

      "extension": {
        "step1": {
          "description": "We recommend pinning Core to your taskbar for quicker access to your wallet.",
          "title": "Install the Core extension"
        },
        "step2": {
          "description": "Be sure to back up your wallet using a secure method. Never share your secret phrase with anyone.",
          "title": "Create or Import a Wallet"
        },
        "step3": {
          "description": "Once you set up your wallet, click below to refresh the browser and load up the extension.",
          "title": "Refresh your browser"
        }
      }
    },

    "fox": {
      "qr_code": {
        "step1": {
          "description": "We recommend putting FoxWallet on your home screen for quicker access.",
          "title": "Open the FoxWallet app"
        },
        "step2": {
          "description": "Be sure to back up your wallet using a secure method. Never share your secret phrase with anyone.",
          "title": "Create or Import a Wallet"
        },
        "step3": {
          "description": "After you scan, a connection prompt will appear for you to connect your wallet.",
          "title": "Tap the scan button"
        }
      }
    },

    "frontier": {
      "qr_code": {
        "step1": {
          "description": "We recommend putting Frontier Wallet on your home screen for quicker access.",
          "title": "Open the Frontier Wallet app"
        },
        "step2": {
          "description": "Be sure to back up your wallet using a secure method. Never share your secret phrase with anyone.",
          "title": "Create or Import a Wallet"
        },
        "step3": {
          "description": "After you scan, a connection prompt will appear for you to connect your wallet.",
          "title": "Tap the scan button"
        }
      },

      "extension": {
        "step1": {
          "description": "We recommend pinning Frontier Wallet to your taskbar for quicker access to your wallet.",
          "title": "Install the Frontier Wallet extension"
        },
        "step2": {
          "description": "Be sure to back up your wallet using a secure method. Never share your secret phrase with anyone.",
          "title": "Create or Import a Wallet"
        },
        "step3": {
          "description": "Once you set up your wallet, click below to refresh the browser and load up the extension.",
          "title": "Refresh your browser"
        }
      }
    },

    "im_token": {
      "qr_code": {
        "step1": {
          "title": "Open the imToken app",
          "description": "Put imToken app on your home screen for faster access to your wallet."
        },
        "step2": {
          "title": "Create or Import a Wallet",
          "description": "Create a new wallet or import an existing one."
        },
        "step3": {
          "title": "Tap Scanner Icon in top right corner",
          "description": "Choose New Connection, then scan the QR code and confirm the prompt to connect."
        }
      }
    },

    "metamask": {
      "qr_code": {
        "step1": {
          "title": "Open the MetaMask app",
          "description": "We recommend putting MetaMask on your home screen for quicker access."
        },
        "step2": {
          "title": "Create or Import a Wallet",
          "description": "Be sure to back up your wallet using a secure method. Never share your secret phrase with anyone."
        },
        "step3": {
          "title": "Tap the scan button",
          "description": "After you scan, a connection prompt will appear for you to connect your wallet."
        }
      },

      "extension": {
        "step1": {
          "title": "Install the MetaMask extension",
          "description": "We recommend pinning MetaMask to your taskbar for quicker access to your wallet."
        },
        "step2": {
          "title": "Create or Import a Wallet",
          "description": "Be sure to back up your wallet using a secure method. Never share your secret phrase with anyone."
        },
        "step3": {
          "title": "Refresh your browser",
          "description": "Once you set up your wallet, click below to refresh the browser and load up the extension."
        }
      }
    },

    "okx": {
      "qr_code": {
        "step1": {
          "title": "Open the OKX Wallet app",
          "description": "We recommend putting OKX Wallet on your home screen for quicker access."
        },
        "step2": {
          "title": "Create or Import a Wallet",
          "description": "Be sure to back up your wallet using a secure method. Never share your secret phrase with anyone."
        },
        "step3": {
          "title": "Tap the scan button",
          "description": "After you scan, a connection prompt will appear for you to connect your wallet."
        }
      },

      "extension": {
        "step1": {
          "title": "Install the OKX Wallet extension",
          "description": "We recommend pinning OKX Wallet to your taskbar for quicker access to your wallet."
        },
        "step2": {
          "title": "Create or Import a Wallet",
          "description": "Be sure to back up your wallet using a secure method. Never share your secret phrase with anyone."
        },
        "step3": {
          "title": "Refresh your browser",
          "description": "Once you set up your wallet, click below to refresh the browser and load up the extension."
        }
      }
    },

    "omni": {
      "qr_code": {
        "step1": {
          "title": "Open the Omni app",
          "description": "Add Omni to your home screen for faster access to your wallet."
        },
        "step2": {
          "title": "Create or Import a Wallet",
          "description": "Create a new wallet or import an existing one."
        },
        "step3": {
          "title": "Tap the QR icon and scan",
          "description": "Tap the QR icon on your home screen, scan the code and confirm the prompt to connect."
        }
      }
    },

    "token_pocket": {
      "qr_code": {
        "step1": {
          "title": "Open the TokenPocket app",
          "description": "We recommend putting TokenPocket on your home screen for quicker access."
        },
        "step2": {
          "title": "Create or Import a Wallet",
          "description": "Be sure to back up your wallet using a secure method. Never share your secret phrase with anyone."
        },
        "step3": {
          "title": "Tap the scan button",
          "description": "After you scan, a connection prompt will appear for you to connect your wallet."
        }
      },

      "extension": {
        "step1": {
          "title": "Install the TokenPocket extension",
          "description": "We recommend pinning TokenPocket to your taskbar for quicker access to your wallet."
        },
        "step2": {
          "title": "Create or Import a Wallet",
          "description": "Be sure to back up your wallet using a secure method. Never share your secret phrase with anyone."
        },
        "step3": {
          "title": "Refresh your browser",
          "description": "Once you set up your wallet, click below to refresh the browser and load up the extension."
        }
      }
    },

    "trust": {
      "qr_code": {
        "step1": {
          "title": "Open the Trust Wallet app",
          "description": "Put Trust Wallet on your home screen for faster access to your wallet."
        },
        "step2": {
          "title": "Create or Import a Wallet",
          "description": "Create a new wallet or import an existing one."
        },
        "step3": {
          "title": "Tap WalletConnect in Settings",
          "description": "Choose New Connection, then scan the QR code and confirm the prompt to connect."
        }
      },

      "extension": {
        "step1": {
          "title": "Install the Trust Wallet extension",
          "description": "Click at the top right of your browser and pin Trust Wallet for easy access."
        },
        "step2": {
          "title": "Create or Import a wallet",
          "description": "Create a new wallet or import an existing one."
        },
        "step3": {
          "title": "Refresh your browser",
          "description": "Once you set up Trust Wallet, click below to refresh the browser and load up the extension."
        }
      }
    },

    "uniswap": {
      "qr_code": {
        "step1": {
          "title": "Open the Uniswap app",
          "description": "Add Uniswap Wallet to your home screen for faster access to your wallet."
        },
        "step2": {
          "title": "Create or Import a Wallet",
          "description": "Create a new wallet or import an existing one."
        },
        "step3": {
          "title": "Tap the QR icon and scan",
          "description": "Tap the QR icon on your homescreen, scan the code and confirm the prompt to connect."
        }
      }
    },

    "zerion": {
      "qr_code": {
        "step1": {
          "title": "Open the Zerion app",
          "description": "We recommend putting Zerion on your home screen for quicker access."
        },
        "step2": {
          "title": "Create or Import a Wallet",
          "description": "Be sure to back up your wallet using a secure method. Never share your secret phrase with anyone."
        },
        "step3": {
          "title": "Tap the scan button",
          "description": "After you scan, a connection prompt will appear for you to connect your wallet."
        }
      },

      "extension": {
        "step1": {
          "title": "Install the Zerion extension",
          "description": "We recommend pinning Zerion to your taskbar for quicker access to your wallet."
        },
        "step2": {
          "title": "Create or Import a Wallet",
          "description": "Be sure to back up your wallet using a secure method. Never share your secret phrase with anyone."
        },
        "step3": {
          "title": "Refresh your browser",
          "description": "Once you set up your wallet, click below to refresh the browser and load up the extension."
        }
      }
    },

    "rainbow": {
      "qr_code": {
        "step1": {
          "title": "Open the Rainbow app",
          "description": "We recommend putting Rainbow on your home screen for faster access to your wallet."
        },
        "step2": {
          "title": "Create or Import a Wallet",
          "description": "You can easily backup your wallet using our backup feature on your phone."
        },
        "step3": {
          "title": "Tap the scan button",
          "description": "After you scan, a connection prompt will appear for you to connect your wallet."
        }
      }
    },

    "enkrypt": {
      "extension": {
        "step1": {
          "description": "We recommend pinning Enkrypt Wallet to your taskbar for quicker access to your wallet.",
          "title": "Install the Enkrypt Wallet extension"
        },
        "step2": {
          "description": "Be sure to back up your wallet using a secure method. Never share your secret phrase with anyone.",
          "title": "Create or Import a Wallet"
        },
        "step3": {
          "description": "Once you set up your wallet, click below to refresh the browser and load up the extension.",
          "title": "Refresh your browser"
        }
      }
    },

    "frame": {
      "extension": {
        "step1": {
          "description": "We recommend pinning Frame to your taskbar for quicker access to your wallet.",
          "title": "Install Frame & the companion extension"
        },
        "step2": {
          "description": "Be sure to back up your wallet using a secure method. Never share your secret phrase with anyone.",
          "title": "Create or Import a Wallet"
        },
        "step3": {
          "description": "Once you set up your wallet, click below to refresh the browser and load up the extension.",
          "title": "Refresh your browser"
        }
      }
    },

    "one_key": {
      "extension": {
        "step1": {
          "title": "Install the OneKey Wallet extension",
          "description": "We recommend pinning OneKey Wallet to your taskbar for quicker access to your wallet."
        },
        "step2": {
          "title": "Create or Import a Wallet",
          "description": "Be sure to back up your wallet using a secure method. Never share your secret phrase with anyone."
        },
        "step3": {
          "title": "Refresh your browser",
          "description": "Once you set up your wallet, click below to refresh the browser and load up the extension."
        }
      }
    },

    "phantom": {
      "extension": {
        "step1": {
          "title": "Install the Phantom extension",
          "description": "We recommend pinning Phantom to your taskbar for easier access to your wallet."
        },
        "step2": {
          "title": "Create or Import a Wallet",
          "description": "Be sure to back up your wallet using a secure method. Never share your secret recovery phrase with anyone."
        },
        "step3": {
          "title": "Refresh your browser",
          "description": "Once you set up your wallet, click below to refresh the browser and load up the extension."
        }
      }
    },

    "rabby": {
      "extension": {
        "step1": {
          "title": "Install the Rabby extension",
          "description": "We recommend pinning Rabby to your taskbar for quicker access to your wallet."
        },
        "step2": {
          "title": "Create or Import a Wallet",
          "description": "Be sure to back up your wallet using a secure method. Never share your secret phrase with anyone."
        },
        "step3": {
          "title": "Refresh your browser",
          "description": "Once you set up your wallet, click below to refresh the browser and load up the extension."
        }
      }
    },

    "safeheron": {
      "extension": {
        "step1": {
          "title": "Install the Core extension",
          "description": "We recommend pinning Safeheron to your taskbar for quicker access to your wallet."
        },
        "step2": {
          "title": "Create or Import a Wallet",
          "description": "Be sure to back up your wallet using a secure method. Never share your secret phrase with anyone."
        },
        "step3": {
          "title": "Refresh your browser",
          "description": "Once you set up your wallet, click below to refresh the browser and load up the extension."
        }
      }
    },

    "taho": {
      "extension": {
        "step1": {
          "title": "Install the Taho extension",
          "description": "We recommend pinning Taho to your taskbar for quicker access to your wallet."
        },
        "step2": {
          "title": "Create or Import a Wallet",
          "description": "Be sure to back up your wallet using a secure method. Never share your secret phrase with anyone."
        },
        "step3": {
          "title": "Refresh your browser",
          "description": "Once you set up your wallet, click below to refresh the browser and load up the extension."
        }
      }
    },

    "talisman": {
      "extension": {
        "step1": {
          "title": "Install the Talisman extension",
          "description": "We recommend pinning Talisman to your taskbar for quicker access to your wallet."
        },
        "step2": {
          "title": "Create or Import an Ethereum Wallet",
          "description": "Be sure to back up your wallet using a secure method. Never share your recovery phrase with anyone."
        },
        "step3": {
          "title": "Refresh your browser",
          "description": "Once you set up your wallet, click below to refresh the browser and load up the extension."
        }
      }
    },

    "xdefi": {
      "extension": {
        "step1": {
          "title": "Install the XDEFI Wallet extension",
          "description": "We recommend pinning XDEFI Wallet to your taskbar for quicker access to your wallet."
        },
        "step2": {
          "title": "Create or Import a Wallet",
          "description": "Be sure to back up your wallet using a secure method. Never share your secret phrase with anyone."
        },
        "step3": {
          "title": "Refresh your browser",
          "description": "Once you set up your wallet, click below to refresh the browser and load up the extension."
        }
      }
    },

    "zeal": {
      "extension": {
        "step1": {
          "title": "Install the Zeal extension",
          "description": "We recommend pinning Zeal to your taskbar for quicker access to your wallet."
        },
        "step2": {
          "title": "Create or Import a Wallet",
          "description": "Be sure to back up your wallet using a secure method. Never share your secret phrase with anyone."
        },
        "step3": {
          "title": "Refresh your browser",
          "description": "Once you set up your wallet, click below to refresh the browser and load up the extension."
        }
      }
    },

    "safepal": {
      "extension": {
        "step1": {
          "title": "Install the SafePal Wallet extension",
          "description": "Click at the top right of your browser and pin SafePal Wallet for easy access."
        },
        "step2": {
          "title": "Create or Import a wallet",
          "description": "Create a new wallet or import an existing one."
        },
        "step3": {
          "title": "Refresh your browser",
          "description": "Once you set up SafePal Wallet, click below to refresh the browser and load up the extension."
        }
      },
      "qr_code": {
        "step1": {
          "title": "Open the SafePal Wallet app",
          "description": "Put SafePal Wallet on your home screen for faster access to your wallet."
        },
        "step2": {
          "title": "Create or Import a Wallet",
          "description": "Create a new wallet or import an existing one."
        },
        "step3": {
          "title": "Tap WalletConnect in Settings",
          "description": "Choose New Connection, then scan the QR code and confirm the prompt to connect."
        }
      }
    },

    "desig": {
      "extension": {
        "step1": {
          "title": "Install the Desig extension",
          "description": "We recommend pinning Desig to your taskbar for easier access to your wallet."
        },
        "step2": {
          "title": "Create a Wallet",
          "description": "Be sure to back up your wallet using a secure method. Never share your secret phrase with anyone."
        },
        "step3": {
          "title": "Refresh your browser",
          "description": "Once you set up your wallet, click below to refresh the browser and load up the extension."
        }
      }
    },

    "subwallet": {
      "extension": {
        "step1": {
          "title": "Install the SubWallet extension",
          "description": "We recommend pinning SubWallet to your taskbar for quicker access to your wallet."
        },
        "step2": {
          "title": "Create or Import a Wallet",
          "description": "Be sure to back up your wallet using a secure method. Never share your recovery phrase with anyone."
        },
        "step3": {
          "title": "Refresh your browser",
          "description": "Once you set up your wallet, click below to refresh the browser and load up the extension."
        }
      },
      "qr_code": {
        "step1": {
          "title": "Open the SubWallet app",
          "description": "We recommend putting SubWallet on your home screen for quicker access."
        },
        "step2": {
          "title": "Create or Import a Wallet",
          "description": "Be sure to back up your wallet using a secure method. Never share your secret phrase with anyone."
        },
        "step3": {
          "title": "Tap the scan button",
          "description": "After you scan, a connection prompt will appear for you to connect your wallet."
        }
      }
    },

    "clv": {
      "extension": {
        "step1": {
          "title": "Install the CLV Wallet extension",
          "description": "We recommend pinning CLV Wallet to your taskbar for quicker access to your wallet."
        },
        "step2": {
          "title": "Create or Import a Wallet",
          "description": "Be sure to back up your wallet using a secure method. Never share your secret phrase with anyone."
        },
        "step3": {
          "title": "Refresh your browser",
          "description": "Once you set up your wallet, click below to refresh the browser and load up the extension."
        }
      },
      "qr_code": {
        "step1": {
          "title": "Open the CLV Wallet app",
          "description": "We recommend putting CLV Wallet on your home screen for quicker access."
        },
        "step2": {
          "title": "Create or Import a Wallet",
          "description": "Be sure to back up your wallet using a secure method. Never share your secret phrase with anyone."
        },
        "step3": {
          "title": "Tap the scan button",
          "description": "After you scan, a connection prompt will appear for you to connect your wallet."
        }
      }
    },

    "okto": {
      "qr_code": {
        "step1": {
          "title": "Open the Okto app",
          "description": "Add Okto to your home screen for quick access"
        },
        "step2": {
          "title": "Create an MPC Wallet",
          "description": "Create an account and generate a wallet"
        },
        "step3": {
          "title": "Tap WalletConnect in Settings",
          "description": "Tap the Scan QR icon at the top right and confirm the prompt to connect."
        }
      }
    },

    "ledger": {
      "desktop": {
        "step1": {
          "title": "Open the Ledger Live app",
          "description": "We recommend putting Ledger Live on your home screen for quicker access."
        },
        "step2": {
          "title": "Set up your Ledger",
          "description": "Set up a new Ledger or connect to an existing one."
        },
        "step3": {
          "title": "Connect",
          "description": "A connection prompt will appear for you to connect your wallet."
        }
      },
      "qr_code": {
        "step1": {
          "title": "Open the Ledger Live app",
          "description": "We recommend putting Ledger Live on your home screen for quicker access."
        },
        "step2": {
          "title": "Set up your Ledger",
          "description": "You can either sync with the desktop app or connect your Ledger."
        },
        "step3": {
          "title": "Scan the code",
          "description": "Tap WalletConnect then Switch to Scanner. After you scan, a connection prompt will appear for you to connect your wallet."
        }
      }
    }
  }
}
`},86032:function(e,t,r){"use strict";r.d(t,{W:function(){return a}});var n=r(23826),o={blue:{accentColor:"#0E76FD",accentColorForeground:"#FFF"},green:{accentColor:"#1DB847",accentColorForeground:"#FFF"},orange:{accentColor:"#FF801F",accentColorForeground:"#FFF"},pink:{accentColor:"#FF5CA0",accentColorForeground:"#FFF"},purple:{accentColor:"#5F5AFA",accentColorForeground:"#FFF"},red:{accentColor:"#FA423C",accentColorForeground:"#FFF"}},i=o.blue,a=({accentColor:e=i.accentColor,accentColorForeground:t=i.accentColorForeground,...r}={})=>({...(0,n.w)(r),colors:{accentColor:e,accentColorForeground:t,actionButtonBorder:"rgba(0, 0, 0, 0.04)",actionButtonBorderMobile:"rgba(0, 0, 0, 0.06)",actionButtonSecondaryBackground:"rgba(0, 0, 0, 0.06)",closeButton:"rgba(60, 66, 66, 0.8)",closeButtonBackground:"rgba(0, 0, 0, 0.06)",connectButtonBackground:"#FFF",connectButtonBackgroundError:"#FF494A",connectButtonInnerBackground:"linear-gradient(0deg, rgba(0, 0, 0, 0.03), rgba(0, 0, 0, 0.06))",connectButtonText:"#25292E",connectButtonTextError:"#FFF",connectionIndicator:"#30E000",downloadBottomCardBackground:"linear-gradient(126deg, rgba(255, 255, 255, 0) 9.49%, rgba(171, 171, 171, 0.04) 71.04%), #FFFFFF",downloadTopCardBackground:"linear-gradient(126deg, rgba(171, 171, 171, 0.2) 9.49%, rgba(255, 255, 255, 0) 71.04%), #FFFFFF",error:"#FF494A",generalBorder:"rgba(0, 0, 0, 0.06)",generalBorderDim:"rgba(0, 0, 0, 0.03)",menuItemBackground:"rgba(60, 66, 66, 0.1)",modalBackdrop:"rgba(0, 0, 0, 0.3)",modalBackground:"#FFF",modalBorder:"transparent",modalText:"#25292E",modalTextDim:"rgba(60, 66, 66, 0.3)",modalTextSecondary:"rgba(60, 66, 66, 0.6)",profileAction:"#FFF",profileActionHover:"rgba(255, 255, 255, 0.5)",profileForeground:"rgba(60, 66, 66, 0.06)",selectedOptionBorder:"rgba(60, 66, 66, 0.1)",standby:"#FFD641"},shadows:{connectButton:"0px 4px 12px rgba(0, 0, 0, 0.1)",dialog:"0px 8px 32px rgba(0, 0, 0, 0.32)",profileDetailsAction:"0px 2px 6px rgba(37, 41, 46, 0.04)",selectedOption:"0px 2px 6px rgba(0, 0, 0, 0.24)",selectedWallet:"0px 2px 6px rgba(0, 0, 0, 0.12)",walletLogo:"0px 2px 16px rgba(0, 0, 0, 0.16)"}});a.accentColors=o},23826:function(e,t,r){"use strict";r.d(t,{w:function(){return s}});var n='-apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Helvetica, Arial, sans-serif, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol"',o={rounded:`SFRounded, ui-rounded, "SF Pro Rounded", ${n}`,system:n},i={large:{actionButton:"9999px",connectButton:"12px",modal:"24px",modalMobile:"28px"},medium:{actionButton:"10px",connectButton:"8px",modal:"16px",modalMobile:"18px"},none:{actionButton:"0px",connectButton:"0px",modal:"0px",modalMobile:"0px"},small:{actionButton:"4px",connectButton:"4px",modal:"8px",modalMobile:"8px"}},a={large:{modalOverlay:"blur(20px)"},none:{modalOverlay:"blur(0px)"},small:{modalOverlay:"blur(4px)"}},s=({borderRadius:e="large",fontStack:t="rounded",overlayBlur:r="none"})=>({blurs:{modalOverlay:a[r].modalOverlay},fonts:{body:o[t]},radii:{actionButton:i[e].actionButton,connectButton:i[e].connectButton,menuButton:i[e].connectButton,modal:i[e].modal,modalMobile:i[e].modalMobile}})},74849:function(e,t,r){"use strict";r.d(t,{z:function(){return q}});var n,o,i,a,s,u,l,c,h,f,d,p,b,g,w,y,m,v,D,E,_=r(46750);function C(e=[],t=[]){return[...new Set([...e,...t])]}r(51040),r(20342),r(35077),r(87853),r(38195),r(71188),r(58619),r(849),r(36073),r(89291),r(43869),r(62601),Object.prototype.hasOwnProperty,Object.prototype.propertyIsEnumerable,Object.prototype.hasOwnProperty,Object.prototype.propertyIsEnumerable;var k=Object.defineProperty,x=Object.defineProperties,S=Object.getOwnPropertyDescriptors,A=Object.getOwnPropertySymbols,O=Object.prototype.hasOwnProperty,N=Object.prototype.propertyIsEnumerable,M=(e,t,r)=>t in e?k(e,t,{enumerable:!0,configurable:!0,writable:!0,value:r}):e[t]=r,I=(e,t)=>{for(var r in t||(t={}))O.call(t,r)&&M(e,r,t[r]);if(A)for(var r of A(t))N.call(t,r)&&M(e,r,t[r]);return e},T=(e,t)=>x(e,S(t));function R(e){return e.includes(":")}function P(e){var t,r,n;let o={};if(!(Object.getPrototypeOf(e)===Object.prototype&&Object.keys(e).length))return o;for(let[i,a]of Object.entries(e)){let e=R(i)?[i]:a.chains,s=a.methods||[],u=a.events||[],l=R(i)?i.split(":")[0]:i;o[l]=T(I({},o[l]),{chains:C(e,null==(t=o[l])?void 0:t.chains),methods:C(s,null==(r=o[l])?void 0:r.methods),events:C(u,null==(n=o[l])?void 0:n.events)})}return o}var B=r(39803),U=r(48519),L=r(18311),F=r(39730),W=r(21693),j="eip155",z="requestedChains",H="wallet_addEthereumChain",q=class extends _.wR{constructor(e){super({...e,options:{isNewChainsStale:!0,...e.options}}),(0,_.Ko)(this,i),(0,_.Ko)(this,s),(0,_.Ko)(this,l),(0,_.Ko)(this,h),(0,_.Ko)(this,d),(0,_.Ko)(this,b),(0,_.Ko)(this,w),(0,_.Ko)(this,m),(0,_.Ko)(this,D),this.id="walletConnect",this.name="WalletConnect",this.ready=!0,(0,_.Ko)(this,n,void 0),(0,_.Ko)(this,o,void 0),this.onAccountsChanged=e=>{0===e.length?this.emit("disconnect"):this.emit("change",{account:(0,B.K)(e[0])})},this.onChainChanged=e=>{let t=Number(e),r=this.isChainUnsupported(t);this.emit("change",{chain:{id:t,unsupported:r}})},this.onDisconnect=()=>{(0,_.U9)(this,b,g).call(this,[]),this.emit("disconnect")},this.onDisplayUri=e=>{this.emit("message",{type:"display_uri",data:e})},this.onConnect=()=>{this.emit("connect",{})},(0,_.U9)(this,i,a).call(this)}async connect({chainId:e,pairingTopic:t}={}){try{let r=e;if(!r){let e=this.storage?.getItem("store"),t=e?.state?.data?.chain?.id;r=t&&!this.isChainUnsupported(t)?t:this.chains[0]?.id}if(!r)throw Error("No chains found on connector.");let n=await this.getProvider();(0,_.U9)(this,h,f).call(this);let o=(0,_.U9)(this,l,c).call(this);if(n.session&&o&&await n.disconnect(),!n.session||o){let e=this.chains.filter(e=>e.id!==r).map(e=>e.id);this.emit("message",{type:"connecting"}),await n.connect({pairingTopic:t,optionalChains:[r,...e]}),(0,_.U9)(this,b,g).call(this,this.chains.map(({id:e})=>e))}let i=await n.enable(),a=(0,B.K)(i[0]),s=await this.getChainId(),u=this.isChainUnsupported(s);return{account:a,chain:{id:s,unsupported:u}}}catch(e){if(/user rejected/i.test(e?.message))throw new U.ab(e);throw e}}async disconnect(){let e=await this.getProvider();try{await e.disconnect()}catch(e){if(!/No matching key/i.test(e.message))throw e}finally{(0,_.U9)(this,d,p).call(this),(0,_.U9)(this,b,g).call(this,[])}}async getAccount(){let{accounts:e}=await this.getProvider();return(0,B.K)(e[0])}async getChainId(){let{chainId:e}=await this.getProvider();return e}async getProvider({chainId:e}={}){return(0,_.ac)(this,n)||await (0,_.U9)(this,i,a).call(this),e&&await this.switchChain(e),(0,_.ac)(this,n)}async getWalletClient({chainId:e}={}){let[t,r]=await Promise.all([this.getProvider({chainId:e}),this.getAccount()]),n=this.chains.find(t=>t.id===e);if(!t)throw Error("provider is required.");return(0,L.K)({account:r,chain:n,transport:(0,F.P)(t)})}async isAuthorized(){try{let[e,t]=await Promise.all([this.getAccount(),this.getProvider()]),r=(0,_.U9)(this,l,c).call(this);if(!e)return!1;if(r&&t.session){try{await t.disconnect()}catch{}return!1}return!0}catch{return!1}}async switchChain(e){let t=this.chains.find(t=>t.id===e);if(!t)throw new U.x3(Error("chain not found on connector."));try{let r=await this.getProvider(),n=(0,_.U9)(this,m,v).call(this),o=(0,_.U9)(this,D,E).call(this);if(!n.includes(e)&&o.includes(H)){await r.request({method:H,params:[{chainId:(0,W.eC)(t.id),blockExplorerUrls:[t.blockExplorers?.default?.url],chainName:t.name,nativeCurrency:t.nativeCurrency,rpcUrls:[...t.rpcUrls.default.http]}]});let n=(0,_.U9)(this,w,y).call(this);n.push(e),(0,_.U9)(this,b,g).call(this,n)}return await r.request({method:"wallet_switchEthereumChain",params:[{chainId:(0,W.eC)(e)}]}),t}catch(t){let e="string"==typeof t?t:t?.message;if(/user rejected request/i.test(e))throw new U.ab(t);throw new U.x3(t)}}};n=new WeakMap,o=new WeakMap,i=new WeakSet,a=async function(){return(0,_.ac)(this,o)||"undefined"==typeof window||(0,_.qx)(this,o,(0,_.U9)(this,s,u).call(this)),(0,_.ac)(this,o)},s=new WeakSet,u=async function(){let{EthereumProvider:e}=await Promise.all([r.e(7133),r.e(1720),r.e(4817)]).then(r.bind(r,84817)),t=this.chains.map(({id:e})=>e);if(t.length){let{projectId:r,showQrModal:o=!0,qrModalOptions:i,metadata:a,relayUrl:s}=this.options;(0,_.qx)(this,n,await e.init({showQrModal:o,qrModalOptions:i,projectId:r,optionalChains:t,rpcMap:Object.fromEntries(this.chains.map(e=>[e.id,e.rpcUrls.default.http[0]])),metadata:a,relayUrl:s}))}},l=new WeakSet,c=function(){if((0,_.U9)(this,D,E).call(this).includes(H)||!this.options.isNewChainsStale)return!1;let e=(0,_.U9)(this,w,y).call(this),t=this.chains.map(({id:e})=>e),r=(0,_.U9)(this,m,v).call(this);return(!r.length||!!r.some(e=>t.includes(e)))&&!t.every(t=>e.includes(t))},h=new WeakSet,f=function(){(0,_.ac)(this,n)&&((0,_.U9)(this,d,p).call(this),(0,_.ac)(this,n).on("accountsChanged",this.onAccountsChanged),(0,_.ac)(this,n).on("chainChanged",this.onChainChanged),(0,_.ac)(this,n).on("disconnect",this.onDisconnect),(0,_.ac)(this,n).on("session_delete",this.onDisconnect),(0,_.ac)(this,n).on("display_uri",this.onDisplayUri),(0,_.ac)(this,n).on("connect",this.onConnect))},d=new WeakSet,p=function(){(0,_.ac)(this,n)&&((0,_.ac)(this,n).removeListener("accountsChanged",this.onAccountsChanged),(0,_.ac)(this,n).removeListener("chainChanged",this.onChainChanged),(0,_.ac)(this,n).removeListener("disconnect",this.onDisconnect),(0,_.ac)(this,n).removeListener("session_delete",this.onDisconnect),(0,_.ac)(this,n).removeListener("display_uri",this.onDisplayUri),(0,_.ac)(this,n).removeListener("connect",this.onConnect))},b=new WeakSet,g=function(e){this.storage?.setItem(z,e)},w=new WeakSet,y=function(){return this.storage?.getItem(z)??[]},m=new WeakSet,v=function(){if(!(0,_.ac)(this,n))return[];let e=_.ac(this,n).session?.namespaces;if(!e)return[];let t=P(e);return t[j]?.chains?.map(e=>parseInt(e.split(":")[1]||""))??[]},D=new WeakSet,E=function(){if(!(0,_.ac)(this,n))return[];let e=_.ac(this,n).session?.namespaces;if(!e)return[];let t=P(e);return t[j]?.methods??[]}},26894:function(e,t,r){"use strict";function n(e){return new Uint16Array([360*e(),40+60*e(),(e()+e()+e()+e())*25])}function o(e,t=64){return"data:image/svg+xml;base64,"+btoa(function(e,t=64){return function(e,t){let r=function(e){let t=function(e){let t=new Uint32Array([0,0,0,0]);for(let r=0;r<e.length;r++)t[r%4]=(t[r%4]<<5)-t[r%4]+e.charCodeAt(r);return t}(e);return function(){let e=t[0]^t[0]<<11;return t[0]=t[1],t[1]=t[2],t[2]=t[3],t[3]=t[3]^t[3]>>19^e^e>>8,(t[3]>>>0)/2147483648}}(e.toLowerCase()),[o,i,a]=function(e){let t=n(e);return[n(e),t,n(e)]}(r),s=["M0,0H8V8H0z","",""];for(let e=0,t,n;e<32;e++){t=e%4,n=Math.floor(e/4);let o=Math.floor(2.3*r());o>0&&(s[o]+=`M${t},${n}h1v1h-1zM${7-t},${n}h1v1h-1z`)}return`<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 8 8" shape-rendering="optimizeSpeed" width="${t}" height="${t}"><path fill="hsl(${o[0]} ${o[1]}% ${o[2]}%)" d="${s[0]}"/><path fill="hsl(${i[0]} ${i[1]}% ${i[2]}%)" d="${s[1]}"/><path fill="hsl(${a[0]} ${a[1]}% ${a[2]}%)" d="${s[2]}"/></svg>`}(e,t)}(e,t))}r.d(t,{Ld:function(){return o}})},50741:function(e,t,r){"use strict";r.d(t,{E:function(){return o}});var n=r(7541);function o(e=0){return null!=globalThis.Buffer&&null!=globalThis.Buffer.allocUnsafe?(0,n.P)(globalThis.Buffer.allocUnsafe(e)):new Uint8Array(e)}},72281:function(e,t,r){"use strict";r.d(t,{z:function(){return i}});var n=r(50741),o=r(7541);function i(e,t){t||(t=e.reduce((e,t)=>e+t.length,0));let r=(0,n.E)(t),i=0;for(let t of e)r.set(t,i),i+=t.length;return(0,o.P)(r)}},34901:function(e,t,r){"use strict";r.d(t,{m:function(){return i}});var n=r(85418),o=r(7541);function i(e,t="utf8"){let r=n.Z[t];if(!r)throw Error(`Unsupported encoding "${t}"`);return("utf8"===t||"utf-8"===t)&&null!=globalThis.Buffer&&null!=globalThis.Buffer.from?(0,o.P)(globalThis.Buffer.from(e,"utf-8")):r.decoder.decode(`${r.prefix}${e}`)}},71188:function(e,t,r){"use strict";r.d(t,{BB:function(){return i.B},mL:function(){return o.m},zo:function(){return n.z}});var n=r(72281),o=r(34901),i=r(21361)},21361:function(e,t,r){"use strict";r.d(t,{B:function(){return o}});var n=r(85418);function o(e,t="utf8"){let r=n.Z[t];if(!r)throw Error(`Unsupported encoding "${t}"`);return("utf8"===t||"utf-8"===t)&&null!=globalThis.Buffer&&null!=globalThis.Buffer.from?globalThis.Buffer.from(e.buffer,e.byteOffset,e.byteLength).toString("utf8"):r.encoder.encode(e).substring(1)}},7541:function(e,t,r){"use strict";function n(e){return null!=globalThis.Buffer?new Uint8Array(e.buffer,e.byteOffset,e.byteLength):e}r.d(t,{P:function(){return n}})},85418:function(e,t,r){"use strict";r.d(t,{Z:function(){return eY}});var n={};r.r(n),r.d(n,{identity:function(){return I}});var o={};r.r(o),r.d(o,{base2:function(){return T}});var i={};r.r(i),r.d(i,{base8:function(){return R}});var a={};r.r(a),r.d(a,{base10:function(){return P}});var s={};r.r(s),r.d(s,{base16:function(){return B},base16upper:function(){return U}});var u={};r.r(u),r.d(u,{base32:function(){return L},base32hex:function(){return z},base32hexpad:function(){return q},base32hexpadupper:function(){return V},base32hexupper:function(){return H},base32pad:function(){return W},base32padupper:function(){return j},base32upper:function(){return F},base32z:function(){return Y}});var l={};r.r(l),r.d(l,{base36:function(){return K},base36upper:function(){return $}});var c={};r.r(c),r.d(c,{base58btc:function(){return X},base58flickr:function(){return Q}});var h={};r.r(h),r.d(h,{base64:function(){return G},base64pad:function(){return Z},base64url:function(){return J},base64urlpad:function(){return ee}});var f={};r.r(f),r.d(f,{base256emoji:function(){return eo}});var d={};r.r(d),r.d(d,{sha256:function(){return eg},sha512:function(){return ew}});var p={};r.r(p),r.d(p,{identity:function(){return ey}});var b={};r.r(b),r.d(b,{code:function(){return ev},decode:function(){return eE},encode:function(){return eD},name:function(){return em}});var g={};r.r(g),r.d(g,{code:function(){return ex},decode:function(){return eA},encode:function(){return eS},name:function(){return ek}});var w=function(e,t){if(e.length>=255)throw TypeError("Alphabet too long");for(var r=new Uint8Array(256),n=0;n<r.length;n++)r[n]=255;for(var o=0;o<e.length;o++){var i=e.charAt(o),a=i.charCodeAt(0);if(255!==r[a])throw TypeError(i+" is ambiguous");r[a]=o}var s=e.length,u=e.charAt(0),l=Math.log(s)/Math.log(256),c=Math.log(256)/Math.log(s);function h(e){if("string"!=typeof e)throw TypeError("Expected String");if(0===e.length)return new Uint8Array;var t=0;if(" "!==e[0]){for(var n=0,o=0;e[t]===u;)n++,t++;for(var i=(e.length-t)*l+1>>>0,a=new Uint8Array(i);e[t];){var c=r[e.charCodeAt(t)];if(255===c)return;for(var h=0,f=i-1;(0!==c||h<o)&&-1!==f;f--,h++)c+=s*a[f]>>>0,a[f]=c%256>>>0,c=c/256>>>0;if(0!==c)throw Error("Non-zero carry");o=h,t++}if(" "!==e[t]){for(var d=i-o;d!==i&&0===a[d];)d++;for(var p=new Uint8Array(n+(i-d)),b=n;d!==i;)p[b++]=a[d++];return p}}}return{encode:function(t){if(t instanceof Uint8Array||(ArrayBuffer.isView(t)?t=new Uint8Array(t.buffer,t.byteOffset,t.byteLength):Array.isArray(t)&&(t=Uint8Array.from(t))),!(t instanceof Uint8Array))throw TypeError("Expected Uint8Array");if(0===t.length)return"";for(var r=0,n=0,o=0,i=t.length;o!==i&&0===t[o];)o++,r++;for(var a=(i-o)*c+1>>>0,l=new Uint8Array(a);o!==i;){for(var h=t[o],f=0,d=a-1;(0!==h||f<n)&&-1!==d;d--,f++)h+=256*l[d]>>>0,l[d]=h%s>>>0,h=h/s>>>0;if(0!==h)throw Error("Non-zero carry");n=f,o++}for(var p=a-n;p!==a&&0===l[p];)p++;for(var b=u.repeat(r);p<a;++p)b+=e.charAt(l[p]);return b},decodeUnsafe:h,decode:function(e){var r=h(e);if(r)return r;throw Error(`Non-${t} character`)}}};new Uint8Array(0);let y=(e,t)=>{if(e===t)return!0;if(e.byteLength!==t.byteLength)return!1;for(let r=0;r<e.byteLength;r++)if(e[r]!==t[r])return!1;return!0},m=e=>{if(e instanceof Uint8Array&&"Uint8Array"===e.constructor.name)return e;if(e instanceof ArrayBuffer)return new Uint8Array(e);if(ArrayBuffer.isView(e))return new Uint8Array(e.buffer,e.byteOffset,e.byteLength);throw Error("Unknown type, must be binary type")},v=e=>new TextEncoder().encode(e),D=e=>new TextDecoder().decode(e);class E{constructor(e,t,r){this.name=e,this.prefix=t,this.baseEncode=r}encode(e){if(e instanceof Uint8Array)return`${this.prefix}${this.baseEncode(e)}`;throw Error("Unknown type, must be binary type")}}class _{constructor(e,t,r){if(this.name=e,this.prefix=t,void 0===t.codePointAt(0))throw Error("Invalid prefix character");this.prefixCodePoint=t.codePointAt(0),this.baseDecode=r}decode(e){if("string"==typeof e){if(e.codePointAt(0)!==this.prefixCodePoint)throw Error(`Unable to decode multibase string ${JSON.stringify(e)}, ${this.name} decoder only supports inputs prefixed with ${this.prefix}`);return this.baseDecode(e.slice(this.prefix.length))}throw Error("Can only multibase decode strings")}or(e){return k(this,e)}}class C{constructor(e){this.decoders=e}or(e){return k(this,e)}decode(e){let t=e[0],r=this.decoders[t];if(r)return r.decode(e);throw RangeError(`Unable to decode multibase string ${JSON.stringify(e)}, only inputs prefixed with ${Object.keys(this.decoders)} are supported`)}}let k=(e,t)=>new C({...e.decoders||{[e.prefix]:e},...t.decoders||{[t.prefix]:t}});class x{constructor(e,t,r,n){this.name=e,this.prefix=t,this.baseEncode=r,this.baseDecode=n,this.encoder=new E(e,t,r),this.decoder=new _(e,t,n)}encode(e){return this.encoder.encode(e)}decode(e){return this.decoder.decode(e)}}let S=({name:e,prefix:t,encode:r,decode:n})=>new x(e,t,r,n),A=({prefix:e,name:t,alphabet:r})=>{let{encode:n,decode:o}=w(r,t);return S({prefix:e,name:t,encode:n,decode:e=>m(o(e))})},O=(e,t,r,n)=>{let o={};for(let e=0;e<t.length;++e)o[t[e]]=e;let i=e.length;for(;"="===e[i-1];)--i;let a=new Uint8Array(i*r/8|0),s=0,u=0,l=0;for(let t=0;t<i;++t){let i=o[e[t]];if(void 0===i)throw SyntaxError(`Non-${n} character`);u=u<<r|i,(s+=r)>=8&&(s-=8,a[l++]=255&u>>s)}if(s>=r||255&u<<8-s)throw SyntaxError("Unexpected end of data");return a},N=(e,t,r)=>{let n="="===t[t.length-1],o=(1<<r)-1,i="",a=0,s=0;for(let n=0;n<e.length;++n)for(s=s<<8|e[n],a+=8;a>r;)a-=r,i+=t[o&s>>a];if(a&&(i+=t[o&s<<r-a]),n)for(;i.length*r&7;)i+="=";return i},M=({name:e,prefix:t,bitsPerChar:r,alphabet:n})=>S({prefix:t,name:e,encode:e=>N(e,n,r),decode:t=>O(t,n,r,e)}),I=S({prefix:"\x00",name:"identity",encode:e=>D(e),decode:e=>v(e)}),T=M({prefix:"0",name:"base2",alphabet:"01",bitsPerChar:1}),R=M({prefix:"7",name:"base8",alphabet:"01234567",bitsPerChar:3}),P=A({prefix:"9",name:"base10",alphabet:"0123456789"}),B=M({prefix:"f",name:"base16",alphabet:"0123456789abcdef",bitsPerChar:4}),U=M({prefix:"F",name:"base16upper",alphabet:"0123456789ABCDEF",bitsPerChar:4}),L=M({prefix:"b",name:"base32",alphabet:"abcdefghijklmnopqrstuvwxyz234567",bitsPerChar:5}),F=M({prefix:"B",name:"base32upper",alphabet:"ABCDEFGHIJKLMNOPQRSTUVWXYZ234567",bitsPerChar:5}),W=M({prefix:"c",name:"base32pad",alphabet:"abcdefghijklmnopqrstuvwxyz234567=",bitsPerChar:5}),j=M({prefix:"C",name:"base32padupper",alphabet:"ABCDEFGHIJKLMNOPQRSTUVWXYZ234567=",bitsPerChar:5}),z=M({prefix:"v",name:"base32hex",alphabet:"0123456789abcdefghijklmnopqrstuv",bitsPerChar:5}),H=M({prefix:"V",name:"base32hexupper",alphabet:"0123456789ABCDEFGHIJKLMNOPQRSTUV",bitsPerChar:5}),q=M({prefix:"t",name:"base32hexpad",alphabet:"0123456789abcdefghijklmnopqrstuv=",bitsPerChar:5}),V=M({prefix:"T",name:"base32hexpadupper",alphabet:"0123456789ABCDEFGHIJKLMNOPQRSTUV=",bitsPerChar:5}),Y=M({prefix:"h",name:"base32z",alphabet:"ybndrfg8ejkmcpqxot1uwisza345h769",bitsPerChar:5}),K=A({prefix:"k",name:"base36",alphabet:"0123456789abcdefghijklmnopqrstuvwxyz"}),$=A({prefix:"K",name:"base36upper",alphabet:"0123456789ABCDEFGHIJKLMNOPQRSTUVWXYZ"}),X=A({name:"base58btc",prefix:"z",alphabet:"123456789ABCDEFGHJKLMNPQRSTUVWXYZabcdefghijkmnopqrstuvwxyz"}),Q=A({name:"base58flickr",prefix:"Z",alphabet:"123456789abcdefghijkmnopqrstuvwxyzABCDEFGHJKLMNPQRSTUVWXYZ"}),G=M({prefix:"m",name:"base64",alphabet:"ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/",bitsPerChar:6}),Z=M({prefix:"M",name:"base64pad",alphabet:"ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/=",bitsPerChar:6}),J=M({prefix:"u",name:"base64url",alphabet:"ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789-_",bitsPerChar:6}),ee=M({prefix:"U",name:"base64urlpad",alphabet:"ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789-_=",bitsPerChar:6}),et=Array.from("\uD83D\uDE80\uD83E\uDE90☄\uD83D\uDEF0\uD83C\uDF0C\uD83C\uDF11\uD83C\uDF12\uD83C\uDF13\uD83C\uDF14\uD83C\uDF15\uD83C\uDF16\uD83C\uDF17\uD83C\uDF18\uD83C\uDF0D\uD83C\uDF0F\uD83C\uDF0E\uD83D\uDC09☀\uD83D\uDCBB\uD83D\uDDA5\uD83D\uDCBE\uD83D\uDCBF\uD83D\uDE02❤\uD83D\uDE0D\uD83E\uDD23\uD83D\uDE0A\uD83D\uDE4F\uD83D\uDC95\uD83D\uDE2D\uD83D\uDE18\uD83D\uDC4D\uD83D\uDE05\uD83D\uDC4F\uD83D\uDE01\uD83D\uDD25\uD83E\uDD70\uD83D\uDC94\uD83D\uDC96\uD83D\uDC99\uD83D\uDE22\uD83E\uDD14\uD83D\uDE06\uD83D\uDE44\uD83D\uDCAA\uD83D\uDE09☺\uD83D\uDC4C\uD83E\uDD17\uD83D\uDC9C\uD83D\uDE14\uD83D\uDE0E\uD83D\uDE07\uD83C\uDF39\uD83E\uDD26\uD83C\uDF89\uD83D\uDC9E✌✨\uD83E\uDD37\uD83D\uDE31\uD83D\uDE0C\uD83C\uDF38\uD83D\uDE4C\uD83D\uDE0B\uD83D\uDC97\uD83D\uDC9A\uD83D\uDE0F\uD83D\uDC9B\uD83D\uDE42\uD83D\uDC93\uD83E\uDD29\uD83D\uDE04\uD83D\uDE00\uD83D\uDDA4\uD83D\uDE03\uD83D\uDCAF\uD83D\uDE48\uD83D\uDC47\uD83C\uDFB6\uD83D\uDE12\uD83E\uDD2D❣\uD83D\uDE1C\uD83D\uDC8B\uD83D\uDC40\uD83D\uDE2A\uD83D\uDE11\uD83D\uDCA5\uD83D\uDE4B\uD83D\uDE1E\uD83D\uDE29\uD83D\uDE21\uD83E\uDD2A\uD83D\uDC4A\uD83E\uDD73\uD83D\uDE25\uD83E\uDD24\uD83D\uDC49\uD83D\uDC83\uD83D\uDE33✋\uD83D\uDE1A\uD83D\uDE1D\uD83D\uDE34\uD83C\uDF1F\uD83D\uDE2C\uD83D\uDE43\uD83C\uDF40\uD83C\uDF37\uD83D\uDE3B\uD83D\uDE13⭐✅\uD83E\uDD7A\uD83C\uDF08\uD83D\uDE08\uD83E\uDD18\uD83D\uDCA6✔\uD83D\uDE23\uD83C\uDFC3\uD83D\uDC90☹\uD83C\uDF8A\uD83D\uDC98\uD83D\uDE20☝\uD83D\uDE15\uD83C\uDF3A\uD83C\uDF82\uD83C\uDF3B\uD83D\uDE10\uD83D\uDD95\uD83D\uDC9D\uD83D\uDE4A\uD83D\uDE39\uD83D\uDDE3\uD83D\uDCAB\uD83D\uDC80\uD83D\uDC51\uD83C\uDFB5\uD83E\uDD1E\uD83D\uDE1B\uD83D\uDD34\uD83D\uDE24\uD83C\uDF3C\uD83D\uDE2B⚽\uD83E\uDD19☕\uD83C\uDFC6\uD83E\uDD2B\uD83D\uDC48\uD83D\uDE2E\uD83D\uDE46\uD83C\uDF7B\uD83C\uDF43\uD83D\uDC36\uD83D\uDC81\uD83D\uDE32\uD83C\uDF3F\uD83E\uDDE1\uD83C\uDF81⚡\uD83C\uDF1E\uD83C\uDF88❌✊\uD83D\uDC4B\uD83D\uDE30\uD83E\uDD28\uD83D\uDE36\uD83E\uDD1D\uD83D\uDEB6\uD83D\uDCB0\uD83C\uDF53\uD83D\uDCA2\uD83E\uDD1F\uD83D\uDE41\uD83D\uDEA8\uD83D\uDCA8\uD83E\uDD2C✈\uD83C\uDF80\uD83C\uDF7A\uD83E\uDD13\uD83D\uDE19\uD83D\uDC9F\uD83C\uDF31\uD83D\uDE16\uD83D\uDC76\uD83E\uDD74▶➡❓\uD83D\uDC8E\uD83D\uDCB8⬇\uD83D\uDE28\uD83C\uDF1A\uD83E\uDD8B\uD83D\uDE37\uD83D\uDD7A⚠\uD83D\uDE45\uD83D\uDE1F\uD83D\uDE35\uD83D\uDC4E\uD83E\uDD32\uD83E\uDD20\uD83E\uDD27\uD83D\uDCCC\uD83D\uDD35\uD83D\uDC85\uD83E\uDDD0\uD83D\uDC3E\uD83C\uDF52\uD83D\uDE17\uD83E\uDD11\uD83C\uDF0A\uD83E\uDD2F\uD83D\uDC37☎\uD83D\uDCA7\uD83D\uDE2F\uD83D\uDC86\uD83D\uDC46\uD83C\uDFA4\uD83D\uDE47\uD83C\uDF51❄\uD83C\uDF34\uD83D\uDCA3\uD83D\uDC38\uD83D\uDC8C\uD83D\uDCCD\uD83E\uDD40\uD83E\uDD22\uD83D\uDC45\uD83D\uDCA1\uD83D\uDCA9\uD83D\uDC50\uD83D\uDCF8\uD83D\uDC7B\uD83E\uDD10\uD83E\uDD2E\uD83C\uDFBC\uD83E\uDD75\uD83D\uDEA9\uD83C\uDF4E\uD83C\uDF4A\uD83D\uDC7C\uD83D\uDC8D\uD83D\uDCE3\uD83E\uDD42"),er=et.reduce((e,t,r)=>(e[r]=t,e),[]),en=et.reduce((e,t,r)=>(e[t.codePointAt(0)]=r,e),[]),eo=S({prefix:"\uD83D\uDE80",name:"base256emoji",encode:function(e){return e.reduce((e,t)=>e+=er[t],"")},decode:function(e){let t=[];for(let r of e){let e=en[r.codePointAt(0)];if(void 0===e)throw Error(`Non-base256emoji character: ${r}`);t.push(e)}return new Uint8Array(t)}});var ei={encode:function e(t,r,n){r=r||[];for(var o=n=n||0;t>=2147483648;)r[n++]=255&t|128,t/=128;for(;-128&t;)r[n++]=255&t|128,t>>>=7;return r[n]=0|t,e.bytes=n-o+1,r},decode:function e(t,r){var n,o=0,r=r||0,i=0,a=r,s=t.length;do{if(a>=s)throw e.bytes=0,RangeError("Could not decode varint");n=t[a++],o+=i<28?(127&n)<<i:(127&n)*Math.pow(2,i),i+=7}while(n>=128);return e.bytes=a-r,o},encodingLength:function(e){return e<128?1:e<16384?2:e<2097152?3:e<268435456?4:e<34359738368?5:e<4398046511104?6:e<562949953421312?7:e<72057594037927940?8:e<0x7fffffffffffffff?9:10}};let ea=(e,t=0)=>[ei.decode(e,t),ei.decode.bytes],es=(e,t,r=0)=>(ei.encode(e,t,r),t),eu=e=>ei.encodingLength(e),el=(e,t)=>{let r=t.byteLength,n=eu(e),o=n+eu(r),i=new Uint8Array(o+r);return es(e,i,0),es(r,i,n),i.set(t,o),new ef(e,r,t,i)},ec=e=>{let t=m(e),[r,n]=ea(t),[o,i]=ea(t.subarray(n)),a=t.subarray(n+i);if(a.byteLength!==o)throw Error("Incorrect length");return new ef(r,o,a,t)},eh=(e,t)=>e===t||e.code===t.code&&e.size===t.size&&y(e.bytes,t.bytes);class ef{constructor(e,t,r,n){this.code=e,this.size=t,this.digest=r,this.bytes=n}}let ed=({name:e,code:t,encode:r})=>new ep(e,t,r);class ep{constructor(e,t,r){this.name=e,this.code=t,this.encode=r}digest(e){if(e instanceof Uint8Array){let t=this.encode(e);return t instanceof Uint8Array?el(this.code,t):t.then(e=>el(this.code,e))}throw Error("Unknown type, must be binary type")}}let eb=e=>async t=>new Uint8Array(await crypto.subtle.digest(e,t)),eg=ed({name:"sha2-256",code:18,encode:eb("SHA-256")}),ew=ed({name:"sha2-512",code:19,encode:eb("SHA-512")}),ey={code:0,name:"identity",encode:m,digest:e=>el(0,m(e))},em="raw",ev=85,eD=e=>m(e),eE=e=>m(e),e_=new TextEncoder,eC=new TextDecoder,ek="json",ex=512,eS=e=>e_.encode(JSON.stringify(e)),eA=e=>JSON.parse(eC.decode(e));class eO{constructor(e,t,r,n){this.code=t,this.version=e,this.multihash=r,this.bytes=n,this.byteOffset=n.byteOffset,this.byteLength=n.byteLength,this.asCID=this,this._baseCache=new Map,Object.defineProperties(this,{byteOffset:eL,byteLength:eL,code:eU,version:eU,multihash:eU,bytes:eU,_baseCache:eL,asCID:eL})}toV0(){if(0===this.version)return this;{let{code:e,multihash:t}=this;if(e!==eT)throw Error("Cannot convert a non dag-pb CID to CIDv0");if(t.code!==eR)throw Error("Cannot convert non sha2-256 multihash CID to CIDv0");return eO.createV0(t)}}toV1(){switch(this.version){case 0:{let{code:e,digest:t}=this.multihash,r=el(e,t);return eO.createV1(this.code,r)}case 1:return this;default:throw Error(`Can not convert CID version ${this.version} to version 0. This is a bug please report`)}}equals(e){return e&&this.code===e.code&&this.version===e.version&&eh(this.multihash,e.multihash)}toString(e){let{bytes:t,version:r,_baseCache:n}=this;return 0===r?eM(t,n,e||X.encoder):eI(t,n,e||L.encoder)}toJSON(){return{code:this.code,version:this.version,hash:this.multihash.bytes}}get[Symbol.toStringTag](){return"CID"}[Symbol.for("nodejs.util.inspect.custom")](){return"CID("+this.toString()+")"}static isCID(e){return eF(/^0\.0/,eW),!!(e&&(e[eB]||e.asCID===e))}get toBaseEncodedString(){throw Error("Deprecated, use .toString()")}get codec(){throw Error('"codec" property is deprecated, use integer "code" property instead')}get buffer(){throw Error("Deprecated .buffer property, use .bytes to get Uint8Array instead")}get multibaseName(){throw Error('"multibaseName" property is deprecated')}get prefix(){throw Error('"prefix" property is deprecated')}static asCID(e){if(e instanceof eO)return e;if(null!=e&&e.asCID===e){let{version:t,code:r,multihash:n,bytes:o}=e;return new eO(t,r,n,o||eP(t,r,n.bytes))}if(null==e||!0!==e[eB])return null;{let{version:t,multihash:r,code:n}=e,o=ec(r);return eO.create(t,n,o)}}static create(e,t,r){if("number"!=typeof t)throw Error("String codecs are no longer supported");switch(e){case 0:if(t===eT)return new eO(e,t,r,r.bytes);throw Error(`Version 0 CID must use dag-pb (code: ${eT}) block encoding`);case 1:{let n=eP(e,t,r.bytes);return new eO(e,t,r,n)}default:throw Error("Invalid version")}}static createV0(e){return eO.create(0,eT,e)}static createV1(e,t){return eO.create(1,e,t)}static decode(e){let[t,r]=eO.decodeFirst(e);if(r.length)throw Error("Incorrect length");return t}static decodeFirst(e){let t=eO.inspectBytes(e),r=t.size-t.multihashSize,n=m(e.subarray(r,r+t.multihashSize));if(n.byteLength!==t.multihashSize)throw Error("Incorrect length");let o=n.subarray(t.multihashSize-t.digestSize),i=new ef(t.multihashCode,t.digestSize,o,n);return[0===t.version?eO.createV0(i):eO.createV1(t.codec,i),e.subarray(t.size)]}static inspectBytes(e){let t=0,r=()=>{let[r,n]=ea(e.subarray(t));return t+=n,r},n=r(),o=eT;if(18===n?(n=0,t=0):1===n&&(o=r()),0!==n&&1!==n)throw RangeError(`Invalid CID version ${n}`);let i=t,a=r(),s=r(),u=t+s;return{version:n,codec:o,multihashCode:a,digestSize:s,multihashSize:u-i,size:u}}static parse(e,t){let[r,n]=eN(e,t),o=eO.decode(n);return o._baseCache.set(r,e),o}}let eN=(e,t)=>{switch(e[0]){case"Q":return[X.prefix,(t||X).decode(`${X.prefix}${e}`)];case X.prefix:return[X.prefix,(t||X).decode(e)];case L.prefix:return[L.prefix,(t||L).decode(e)];default:if(null==t)throw Error("To parse non base32 or base58btc encoded CID multibase decoder must be provided");return[e[0],t.decode(e)]}},eM=(e,t,r)=>{let{prefix:n}=r;if(n!==X.prefix)throw Error(`Cannot string encode V0 in ${r.name} encoding`);let o=t.get(n);if(null!=o)return o;{let o=r.encode(e).slice(1);return t.set(n,o),o}},eI=(e,t,r)=>{let{prefix:n}=r,o=t.get(n);if(null!=o)return o;{let o=r.encode(e);return t.set(n,o),o}},eT=112,eR=18,eP=(e,t,r)=>{let n=eu(e),o=n+eu(t),i=new Uint8Array(o+r.byteLength);return es(e,i,0),es(t,i,n),i.set(r,o),i},eB=Symbol.for("@ipld/js-cid/CID"),eU={writable:!1,configurable:!1,enumerable:!0},eL={writable:!1,enumerable:!1,configurable:!1},eF=(e,t)=>{if(e.test("0.0.0-dev"))console.warn(t);else throw Error(t)},eW=`CID.isCID(v) is deprecated and will be removed in the next major release.
Following code pattern:

if (CID.isCID(value)) {
  doSomethingWithCID(value)
}

Is replaced with:

const cid = CID.asCID(value)
if (cid) {
  // Make sure to use cid instead of value
  doSomethingWithCID(cid)
}
`,ej={...n,...o,...i,...a,...s,...u,...l,...c,...h,...f};({...d,...p});var ez=r(50741);function eH(e,t,r,n){return{name:e,prefix:t,encoder:{name:e,prefix:t,encode:r},decoder:{decode:n}}}let eq=eH("utf8","u",e=>"u"+new TextDecoder("utf8").decode(e),e=>new TextEncoder().encode(e.substring(1))),eV=eH("ascii","a",e=>{let t="a";for(let r=0;r<e.length;r++)t+=String.fromCharCode(e[r]);return t},e=>{e=e.substring(1);let t=(0,ez.E)(e.length);for(let r=0;r<e.length;r++)t[r]=e.charCodeAt(r);return t});var eY={utf8:eq,"utf-8":eq,hex:ej.base16,latin1:eV,ascii:eV,binary:eV,...ej}},6146:function(e,t,r){"use strict";r.d(t,{d3:function(){return i}});var n=r(94973),o=r(30838);function i(e,t={}){let r=e;return void 0!==t.size&&((0,o.Yf)(r,{size:t.size}),r=(0,n.f)(r,{dir:"right"})),new TextDecoder().decode(r)}}}]);