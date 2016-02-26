// Compiled by ClojureScript 1.7.170 {}
goog.provide('face.control');
goog.require('cljs.core');
goog.require('taoensso.sente');
goog.require('taoensso.timbre');
goog.require('weasel.repl');
goog.require('cljs.core.async');
goog.require('cljs.test');
goog.require('jayq.core');
goog.require('clojure.string');
if(cljs.core.truth_(weasel.repl.alive_QMARK_.call(null))){
} else {
weasel.repl.connect.call(null,"ws://localhost:9001");
}
face.control.emotions = new cljs.core.PersistentVector(null, 6, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"happy","happy",2026698856),new cljs.core.Keyword(null,"sad","sad",427137188),new cljs.core.Keyword(null,"exuberant","exuberant",457064105),new cljs.core.Keyword(null,"determined","determined",-1343565284),new cljs.core.Keyword(null,"normal","normal",-1519123858),new cljs.core.Keyword(null,"confused","confused",-425593592)], null);
face.control.emotion_names_to_transition_names = (function face$control$emotion_names_to_transition_names(emotion_list){

return cljs.core.filter.call(null,cljs.core.complement.call(null,cljs.core.nil_QMARK_),cljs.core.flatten.call(null,cljs.core.map.call(null,(function (emotion){
if(cljs.core.not_EQ_.call(null,new cljs.core.Keyword(null,"normal","normal",-1519123858),emotion)){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.keyword.call(null,[cljs.core.str(cljs.core.name.call(null,emotion)),cljs.core.str("-to-normal")].join('')),cljs.core.keyword.call(null,[cljs.core.str("normal-to-"),cljs.core.str(cljs.core.name.call(null,emotion))].join(''))], null);
} else {
return null;
}
}),emotion_list)));
});
face.control.emotion_names_to_transition_names.call(null,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"happy","happy",2026698856),new cljs.core.Keyword(null,"sad","sad",427137188),new cljs.core.Keyword(null,"normal","normal",-1519123858)], null));
face.control.gifs;
face.control.show_gif = (function face$control$show_gif(gif_keyword){
return jayq.core.show.call(null,jayq.core.$.call(null,face.control.gifs.call(null,gif_keyword).get_canvas()));
});
face.control.hide_gif = (function face$control$hide_gif(gif_keyword){
return jayq.core.hide.call(null,jayq.core.$.call(null,face.control.gifs.call(null,gif_keyword).get_canvas()));
});
face.control.play_gif = (function face$control$play_gif(gif_keyword){
return face.control.gifs.call(null,gif_keyword).play();
});
face.control.transition_queue = cljs.core.atom.call(null,cljs.core.into.call(null,cljs.core.PersistentQueue.EMPTY,cljs.core.PersistentVector.EMPTY));
face.control.cur_face = cljs.core.atom.call(null,new cljs.core.Keyword(null,"happy","happy",2026698856));
face.control.make_transition = (function face$control$make_transition(){
if((cljs.core.count.call(null,cljs.core.deref.call(null,face.control.transition_queue)) > (0))){
var old_face = cljs.core.deref.call(null,face.control.cur_face);
var new_face = cljs.core.peek.call(null,cljs.core.deref.call(null,face.control.transition_queue));
cljs.core.println.call(null,new_face);

cljs.core.swap_BANG_.call(null,face.control.transition_queue,cljs.core.pop);

cljs.core.println.call(null,cljs.core.swap_BANG_.call(null,face.control.cur_face,((function (old_face,new_face){
return (function (x,y){
return y;
});})(old_face,new_face))
,new_face));

face.control.hide_gif.call(null,old_face);

face.control.show_gif.call(null,new_face);

return face.control.play_gif.call(null,new_face);
} else {
return null;
}
});
face.control.make_transition_queue = (function face$control$make_transition_queue(from_face,to_face){

if(cljs.core.not_EQ_.call(null,from_face,new cljs.core.Keyword(null,"normal","normal",-1519123858))){
cljs.core.swap_BANG_.call(null,face.control.transition_queue,cljs.core.conj,cljs.core.keyword.call(null,[cljs.core.str(cljs.core.name.call(null,from_face)),cljs.core.str("-to-normal")].join('')));
} else {
}

cljs.core.swap_BANG_.call(null,face.control.transition_queue,cljs.core.conj,cljs.core.keyword.call(null,[cljs.core.str("normal-to-"),cljs.core.str(cljs.core.name.call(null,to_face))].join('')));

return cljs.core.swap_BANG_.call(null,face.control.transition_queue,cljs.core.conj,to_face);
});
face.control.make_super_gif_factory = (function face$control$make_super_gif_factory(loop,autoplay){
return (function (gif_keyword){

return cljs.core.PersistentArrayMap.fromArray([gif_keyword,SuperGif({"gif": document.getElementById(cljs.core.name.call(null,gif_keyword)), "loop_mode": loop, "auto_play": autoplay, "on_end": ((cljs.core._EQ_.call(null,false,loop))?face.control.make_transition:null)})], true, false);
});
});
face.control.make_transition_gifs = (function face$control$make_transition_gifs(){
var transition_names = face.control.emotion_names_to_transition_names.call(null,face.control.emotions);
return cljs.core.apply.call(null,cljs.core.merge,cljs.core.map.call(null,face.control.make_super_gif_factory.call(null,false,false),transition_names));
});
face.control.make_emotion_gifs = (function face$control$make_emotion_gifs(){
return cljs.core.apply.call(null,cljs.core.merge,cljs.core.map.call(null,face.control.make_super_gif_factory.call(null,true,true),face.control.emotions));
});
face.control.load_gifs = (function face$control$load_gifs(gifs){
var seq__39321 = cljs.core.seq.call(null,cljs.core.vals.call(null,gifs));
var chunk__39322 = null;
var count__39323 = (0);
var i__39324 = (0);
while(true){
if((i__39324 < count__39323)){
var gif = cljs.core._nth.call(null,chunk__39322,i__39324);
console.log(gif);

gif.load(((function (seq__39321,chunk__39322,count__39323,i__39324,gif){
return (function (){
return cljs.core.println.call(null,"loaded gif");
});})(seq__39321,chunk__39322,count__39323,i__39324,gif))
);

jayq.core.hide.call(null,jayq.core.$.call(null,gif.get_canvas()));

var G__39325 = seq__39321;
var G__39326 = chunk__39322;
var G__39327 = count__39323;
var G__39328 = (i__39324 + (1));
seq__39321 = G__39325;
chunk__39322 = G__39326;
count__39323 = G__39327;
i__39324 = G__39328;
continue;
} else {
var temp__4657__auto__ = cljs.core.seq.call(null,seq__39321);
if(temp__4657__auto__){
var seq__39321__$1 = temp__4657__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__39321__$1)){
var c__26068__auto__ = cljs.core.chunk_first.call(null,seq__39321__$1);
var G__39329 = cljs.core.chunk_rest.call(null,seq__39321__$1);
var G__39330 = c__26068__auto__;
var G__39331 = cljs.core.count.call(null,c__26068__auto__);
var G__39332 = (0);
seq__39321 = G__39329;
chunk__39322 = G__39330;
count__39323 = G__39331;
i__39324 = G__39332;
continue;
} else {
var gif = cljs.core.first.call(null,seq__39321__$1);
console.log(gif);

gif.load(((function (seq__39321,chunk__39322,count__39323,i__39324,gif,seq__39321__$1,temp__4657__auto__){
return (function (){
return cljs.core.println.call(null,"loaded gif");
});})(seq__39321,chunk__39322,count__39323,i__39324,gif,seq__39321__$1,temp__4657__auto__))
);

jayq.core.hide.call(null,jayq.core.$.call(null,gif.get_canvas()));

var G__39333 = cljs.core.next.call(null,seq__39321__$1);
var G__39334 = null;
var G__39335 = (0);
var G__39336 = (0);
seq__39321 = G__39333;
chunk__39322 = G__39334;
count__39323 = G__39335;
i__39324 = G__39336;
continue;
}
} else {
return null;
}
}
break;
}
});
face.control.get_and_load_gifs = (function face$control$get_and_load_gifs(){
var gifs = cljs.core.merge.call(null,face.control.make_emotion_gifs.call(null),face.control.make_transition_gifs.call(null));
face.control.load_gifs.call(null,gifs);

return gifs;
});
face.control.reset_gif_test = (function face$control$reset_gif_test(){
face.control.cur_face = cljs.core.atom.call(null,new cljs.core.Keyword(null,"normal","normal",-1519123858));

face.control.transition_queue = cljs.core.atom.call(null,cljs.core.into.call(null,cljs.core.PersistentQueue.EMPTY,cljs.core.PersistentVector.EMPTY));

face.control.show_gif.call(null,new cljs.core.Keyword(null,"normal","normal",-1519123858));

face.control.hide_gif.call(null,new cljs.core.Keyword(null,"normal-to-exuberant","normal-to-exuberant",1271218166));

return face.control.make_transition_queue.call(null,new cljs.core.Keyword(null,"normal","normal",-1519123858),new cljs.core.Keyword(null,"exuberant","exuberant",457064105));
});
face.control.change_emotion = (function face$control$change_emotion(emotion){

if(!(cljs.core.contains_QMARK_.call(null,face.control.gifs,emotion))){
throw Error([cljs.core.str(clojure.string.capitalize.call(null,cljs.core.name.call(null,emotion))),cljs.core.str(" is not an emotion")].join(''));
} else {
}

if(!(cljs.core._EQ_.call(null,emotion,cljs.core.deref.call(null,face.control.cur_face)))){
face.control.make_transition_queue.call(null,cljs.core.deref.call(null,face.control.cur_face),emotion);

return face.control.make_transition.call(null);
} else {
return null;
}
});
face.control.change_emotion.call(null,new cljs.core.Keyword(null,"confused","confused",-425593592));
face.control.init_face = (function face$control$init_face(){
face.control.gifs = face.control.get_and_load_gifs.call(null);

return face.control.show_gif.call(null,new cljs.core.Keyword(null,"exuberant","exuberant",457064105));
});
window.onload = (function (){
return face.control.init_face.call(null);
});

//# sourceMappingURL=control.js.map