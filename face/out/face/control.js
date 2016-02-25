// Compiled by ClojureScript 0.0-3308 {}
goog.provide('face.control');
goog.require('cljs.core');
goog.require('weasel.repl');
goog.require('cljs.test');
goog.require('jayq.core');
if(cljs.core.truth_(weasel.repl.alive_QMARK_.call(null))){
} else {
weasel.repl.connect.call(null,"ws://localhost:9001");
}
face.control.emotions = new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"happy","happy",2026698856),new cljs.core.Keyword(null,"sad","sad",427137188),new cljs.core.Keyword(null,"exuberant","exuberant",457064105),new cljs.core.Keyword(null,"determined","determined",-1343565284),new cljs.core.Keyword(null,"normal","normal",-1519123858)], null);
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
face.control.make_super_gif_factory = (function face$control$make_super_gif_factory(loop,autoplay){
return (function (gif_keyword){

return new cljs.core.PersistentArrayMap.fromArray([gif_keyword,SuperGif({"gif": document.getElementById(cljs.core.name.call(null,gif_keyword)), "loop_mode": loop, "auto_play": autoplay, "on_end": ((cljs.core._EQ_.call(null,false,loop))?face.control.transition_ended:null)})], true, false);
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
var seq__16751 = cljs.core.seq.call(null,cljs.core.vals.call(null,gifs));
var chunk__16752 = null;
var count__16753 = (0);
var i__16754 = (0);
while(true){
if((i__16754 < count__16753)){
var gif = cljs.core._nth.call(null,chunk__16752,i__16754);
console.log(gif);

gif.load(((function (seq__16751,chunk__16752,count__16753,i__16754,gif){
return (function (){
return cljs.core.println.call(null,"loaded gif");
});})(seq__16751,chunk__16752,count__16753,i__16754,gif))
);

jayq.core.hide.call(null,jayq.core.$.call(null,gif.get_canvas()));

var G__16755 = seq__16751;
var G__16756 = chunk__16752;
var G__16757 = count__16753;
var G__16758 = (i__16754 + (1));
seq__16751 = G__16755;
chunk__16752 = G__16756;
count__16753 = G__16757;
i__16754 = G__16758;
continue;
} else {
var temp__4423__auto__ = cljs.core.seq.call(null,seq__16751);
if(temp__4423__auto__){
var seq__16751__$1 = temp__4423__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__16751__$1)){
var c__15440__auto__ = cljs.core.chunk_first.call(null,seq__16751__$1);
var G__16759 = cljs.core.chunk_rest.call(null,seq__16751__$1);
var G__16760 = c__15440__auto__;
var G__16761 = cljs.core.count.call(null,c__15440__auto__);
var G__16762 = (0);
seq__16751 = G__16759;
chunk__16752 = G__16760;
count__16753 = G__16761;
i__16754 = G__16762;
continue;
} else {
var gif = cljs.core.first.call(null,seq__16751__$1);
console.log(gif);

gif.load(((function (seq__16751,chunk__16752,count__16753,i__16754,gif,seq__16751__$1,temp__4423__auto__){
return (function (){
return cljs.core.println.call(null,"loaded gif");
});})(seq__16751,chunk__16752,count__16753,i__16754,gif,seq__16751__$1,temp__4423__auto__))
);

jayq.core.hide.call(null,jayq.core.$.call(null,gif.get_canvas()));

var G__16763 = cljs.core.next.call(null,seq__16751__$1);
var G__16764 = null;
var G__16765 = (0);
var G__16766 = (0);
seq__16751 = G__16763;
chunk__16752 = G__16764;
count__16753 = G__16765;
i__16754 = G__16766;
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
face.control.gifs = face.control.get_and_load_gifs.call(null);
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
face.control.reset_gif_test = (function face$control$reset_gif_test(){
face.control.cur_face = cljs.core.atom.call(null,new cljs.core.Keyword(null,"happy","happy",2026698856));

face.control.transition_queue = cljs.core.atom.call(null,cljs.core.into.call(null,cljs.core.PersistentQueue.EMPTY,cljs.core.PersistentVector.EMPTY));

face.control.show_gif.call(null,new cljs.core.Keyword(null,"happy","happy",2026698856));

face.control.hide_gif.call(null,new cljs.core.Keyword(null,"normal-to-exuberant","normal-to-exuberant",1271218166));

face.control.hide_gif.call(null,new cljs.core.Keyword(null,"happy-to-normal","happy-to-normal",-1541435348));

return face.control.make_transition_queue.call(null,new cljs.core.Keyword(null,"happy","happy",2026698856),new cljs.core.Keyword(null,"exuberant","exuberant",457064105));
});
face.control.make_transition_queue = (function face$control$make_transition_queue(from_face,to_face){

if(cljs.core.not_EQ_.call(null,from_face,new cljs.core.Keyword(null,"normal","normal",-1519123858))){
cljs.core.swap_BANG_.call(null,face.control.transition_queue,cljs.core.conj,cljs.core.keyword.call(null,[cljs.core.str(cljs.core.name.call(null,from_face)),cljs.core.str("-to-normal")].join('')));
} else {
}

return cljs.core.swap_BANG_.call(null,face.control.transition_queue,cljs.core.conj,cljs.core.keyword.call(null,[cljs.core.str("normal-to-"),cljs.core.str(cljs.core.name.call(null,to_face))].join('')));
});
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

//# sourceMappingURL=control.js.map