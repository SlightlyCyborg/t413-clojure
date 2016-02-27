// Compiled by ClojureScript 1.7.170 {}
goog.provide('face.control');
goog.require('cljs.core');
goog.require('taoensso.sente');
goog.require('taoensso.timbre');
goog.require('weasel.repl');
goog.require('cljs.core.async');
goog.require('cljs.test');
goog.require('jayq.core');
goog.require('taoensso.encore');
goog.require('clojure.string');
face.control.__GT_output_BANG_ = (function face$control$__GT_output_BANG_(var_args){
var args__26952__auto__ = [];
var len__26945__auto___29448 = arguments.length;
var i__26946__auto___29449 = (0);
while(true){
if((i__26946__auto___29449 < len__26945__auto___29448)){
args__26952__auto__.push((arguments[i__26946__auto___29449]));

var G__29450 = (i__26946__auto___29449 + (1));
i__26946__auto___29449 = G__29450;
continue;
} else {
}
break;
}

var argseq__26953__auto__ = ((((1) < args__26952__auto__.length))?(new cljs.core.IndexedSeq(args__26952__auto__.slice((1)),(0))):null);
return face.control.__GT_output_BANG_.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__26953__auto__);
});

face.control.__GT_output_BANG_.cljs$core$IFn$_invoke$arity$variadic = (function (fmt,args){
var msg = cljs.core.apply.call(null,taoensso.encore.format,fmt,args);
return console.log(msg);
});

face.control.__GT_output_BANG_.cljs$lang$maxFixedArity = (1);

face.control.__GT_output_BANG_.cljs$lang$applyTo = (function (seq29446){
var G__29447 = cljs.core.first.call(null,seq29446);
var seq29446__$1 = cljs.core.next.call(null,seq29446);
return face.control.__GT_output_BANG_.cljs$core$IFn$_invoke$arity$variadic(G__29447,seq29446__$1);
});
face.control.connect_to_repl = (function face$control$connect_to_repl(){
if(cljs.core.truth_(weasel.repl.alive_QMARK_.call(null))){
return null;
} else {
return weasel.repl.connect.call(null,"ws://localhost:9001");
}
});
face.control.connect_to_repl.call(null);
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
face.control.cur_face = cljs.core.atom.call(null,new cljs.core.Keyword(null,"exuberant","exuberant",457064105));
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
var seq__29455 = cljs.core.seq.call(null,cljs.core.vals.call(null,gifs));
var chunk__29456 = null;
var count__29457 = (0);
var i__29458 = (0);
while(true){
if((i__29458 < count__29457)){
var gif = cljs.core._nth.call(null,chunk__29456,i__29458);
console.log(gif);

gif.load(((function (seq__29455,chunk__29456,count__29457,i__29458,gif){
return (function (){
return cljs.core.println.call(null,"loaded gif");
});})(seq__29455,chunk__29456,count__29457,i__29458,gif))
);

jayq.core.hide.call(null,jayq.core.$.call(null,gif.get_canvas()));

var G__29459 = seq__29455;
var G__29460 = chunk__29456;
var G__29461 = count__29457;
var G__29462 = (i__29458 + (1));
seq__29455 = G__29459;
chunk__29456 = G__29460;
count__29457 = G__29461;
i__29458 = G__29462;
continue;
} else {
var temp__4657__auto__ = cljs.core.seq.call(null,seq__29455);
if(temp__4657__auto__){
var seq__29455__$1 = temp__4657__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__29455__$1)){
var c__26690__auto__ = cljs.core.chunk_first.call(null,seq__29455__$1);
var G__29463 = cljs.core.chunk_rest.call(null,seq__29455__$1);
var G__29464 = c__26690__auto__;
var G__29465 = cljs.core.count.call(null,c__26690__auto__);
var G__29466 = (0);
seq__29455 = G__29463;
chunk__29456 = G__29464;
count__29457 = G__29465;
i__29458 = G__29466;
continue;
} else {
var gif = cljs.core.first.call(null,seq__29455__$1);
console.log(gif);

gif.load(((function (seq__29455,chunk__29456,count__29457,i__29458,gif,seq__29455__$1,temp__4657__auto__){
return (function (){
return cljs.core.println.call(null,"loaded gif");
});})(seq__29455,chunk__29456,count__29457,i__29458,gif,seq__29455__$1,temp__4657__auto__))
);

jayq.core.hide.call(null,jayq.core.$.call(null,gif.get_canvas()));

var G__29467 = cljs.core.next.call(null,seq__29455__$1);
var G__29468 = null;
var G__29469 = (0);
var G__29470 = (0);
seq__29455 = G__29467;
chunk__29456 = G__29468;
count__29457 = G__29469;
i__29458 = G__29470;
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
face.control.change_emotion.call(null,new cljs.core.Keyword(null,"exuberant","exuberant",457064105));
face.control.init_ws = (function face$control$init_ws(){
var rand_chsk_type = (((cljs.core.rand.call(null) >= 0.5))?new cljs.core.Keyword(null,"ajax","ajax",814345549):new cljs.core.Keyword(null,"auto","auto",-566279492));
var _ = face.control.__GT_output_BANG_.call(null,"Randomly selected chsk type: %s",rand_chsk_type);
var packer = new cljs.core.Keyword(null,"edn","edn",1317840885);
var map__29473 = taoensso.sente.make_channel_socket_client_BANG_.call(null,"/chsk",new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"type","type",1174270348),rand_chsk_type,new cljs.core.Keyword(null,"packer","packer",66077544),packer], null));
var map__29473__$1 = ((((!((map__29473 == null)))?((((map__29473.cljs$lang$protocol_mask$partition0$ & (64))) || (map__29473.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__29473):map__29473);
var chsk = cljs.core.get.call(null,map__29473__$1,new cljs.core.Keyword(null,"chsk","chsk",-863703081));
var ch_recv = cljs.core.get.call(null,map__29473__$1,new cljs.core.Keyword(null,"ch-recv","ch-recv",-990916861));
var send_fn = cljs.core.get.call(null,map__29473__$1,new cljs.core.Keyword(null,"send-fn","send-fn",351002041));
var state = cljs.core.get.call(null,map__29473__$1,new cljs.core.Keyword(null,"state","state",-1988618099));
face.control.chsk = chsk;

face.control.ch_chsk = ch_recv;

face.control.chsk_send_BANG_ = send_fn;

face.control.chsk_state = state;
});
if(typeof face.control._event_msg_handler !== 'undefined'){
} else {
/**
 * Multimethod to handle Sente `event-msg`s
 */
face.control._event_msg_handler = (function (){var method_table__26800__auto__ = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
var prefer_table__26801__auto__ = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
var method_cache__26802__auto__ = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
var cached_hierarchy__26803__auto__ = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
var hierarchy__26804__auto__ = cljs.core.get.call(null,cljs.core.PersistentArrayMap.EMPTY,new cljs.core.Keyword(null,"hierarchy","hierarchy",-1053470341),cljs.core.get_global_hierarchy.call(null));
return (new cljs.core.MultiFn(cljs.core.symbol.call(null,"face.control","-event-msg-handler"),new cljs.core.Keyword(null,"id","id",-1388402092),new cljs.core.Keyword(null,"default","default",-1987822328),hierarchy__26804__auto__,method_table__26800__auto__,prefer_table__26801__auto__,method_cache__26802__auto__,cached_hierarchy__26803__auto__));
})();
}
/**
 * Wraps `-event-msg-handler` with logging, error catching, etc.
 */
face.control.event_msg_handler = (function face$control$event_msg_handler(p__29475){
var map__29478 = p__29475;
var map__29478__$1 = ((((!((map__29478 == null)))?((((map__29478.cljs$lang$protocol_mask$partition0$ & (64))) || (map__29478.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__29478):map__29478);
var ev_msg = map__29478__$1;
var id = cljs.core.get.call(null,map__29478__$1,new cljs.core.Keyword(null,"id","id",-1388402092));
var _QMARK_data = cljs.core.get.call(null,map__29478__$1,new cljs.core.Keyword(null,"?data","?data",-9471433));
var event = cljs.core.get.call(null,map__29478__$1,new cljs.core.Keyword(null,"event","event",301435442));
return face.control._event_msg_handler.call(null,ev_msg);
});
cljs.core._add_method.call(null,face.control._event_msg_handler,new cljs.core.Keyword(null,"default","default",-1987822328),(function (p__29480){
var map__29481 = p__29480;
var map__29481__$1 = ((((!((map__29481 == null)))?((((map__29481.cljs$lang$protocol_mask$partition0$ & (64))) || (map__29481.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__29481):map__29481);
var ev_msg = map__29481__$1;
var event = cljs.core.get.call(null,map__29481__$1,new cljs.core.Keyword(null,"event","event",301435442));
return face.control.__GT_output_BANG_.call(null,"Unhandled event: %s",event);
}));
cljs.core._add_method.call(null,face.control._event_msg_handler,new cljs.core.Keyword("chsk","state","chsk/state",-1991397620),(function (p__29483){
var map__29484 = p__29483;
var map__29484__$1 = ((((!((map__29484 == null)))?((((map__29484.cljs$lang$protocol_mask$partition0$ & (64))) || (map__29484.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__29484):map__29484);
var ev_msg = map__29484__$1;
var _QMARK_data = cljs.core.get.call(null,map__29484__$1,new cljs.core.Keyword(null,"?data","?data",-9471433));
if(cljs.core._EQ_.call(null,_QMARK_data,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"first-open?","first-open?",396686530),true], null))){
return face.control.__GT_output_BANG_.call(null,"Channel socket successfully established!");
} else {
return face.control.__GT_output_BANG_.call(null,"Channel socket state change: %s",_QMARK_data);
}
}));
cljs.core._add_method.call(null,face.control._event_msg_handler,new cljs.core.Keyword("chsk","recv","chsk/recv",561097091),(function (p__29486){
var map__29487 = p__29486;
var map__29487__$1 = ((((!((map__29487 == null)))?((((map__29487.cljs$lang$protocol_mask$partition0$ & (64))) || (map__29487.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__29487):map__29487);
var ev_msg = map__29487__$1;
var _QMARK_data = cljs.core.get.call(null,map__29487__$1,new cljs.core.Keyword(null,"?data","?data",-9471433));
var my_json_29489 = cljs.core.second.call(null,_QMARK_data);
face.control.__GT_output_BANG_.call(null,[cljs.core.str(my_json_29489)].join(''));

face.control.__GT_output_BANG_.call(null,"outputing json");

if(cljs.core._EQ_.call(null,my_json_29489.call(null,new cljs.core.Keyword(null,"type","type",1174270348)),"emotion")){
face.control.change_emotion.call(null,cljs.core.keyword.call(null,my_json_29489.call(null,new cljs.core.Keyword(null,"emotion","emotion",439404651))));
} else {
}

face.control.__GT_output_BANG_.call(null,"Push event from server: %s",_QMARK_data);

return face.control.__GT_output_BANG_.call(null,"Changed2");
}));
cljs.core._add_method.call(null,face.control._event_msg_handler,new cljs.core.Keyword("chsk","handshake","chsk/handshake",64910686),(function (p__29490){
var map__29491 = p__29490;
var map__29491__$1 = ((((!((map__29491 == null)))?((((map__29491.cljs$lang$protocol_mask$partition0$ & (64))) || (map__29491.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__29491):map__29491);
var ev_msg = map__29491__$1;
var _QMARK_data = cljs.core.get.call(null,map__29491__$1,new cljs.core.Keyword(null,"?data","?data",-9471433));
var vec__29493 = _QMARK_data;
var _QMARK_uid = cljs.core.nth.call(null,vec__29493,(0),null);
var _QMARK_csrf_token = cljs.core.nth.call(null,vec__29493,(1),null);
var _QMARK_handshake_data = cljs.core.nth.call(null,vec__29493,(2),null);
return face.control.__GT_output_BANG_.call(null,"Handshake: %s",_QMARK_data);
}));
if(typeof face.control.router_ !== 'undefined'){
} else {
face.control.router_ = cljs.core.atom.call(null,null);
}
face.control.stop_router_BANG_ = (function face$control$stop_router_BANG_(){
var temp__4657__auto__ = cljs.core.deref.call(null,face.control.router_);
if(cljs.core.truth_(temp__4657__auto__)){
var stop_f = temp__4657__auto__;
return stop_f.call(null);
} else {
return null;
}
});
face.control.start_router_BANG_ = (function face$control$start_router_BANG_(){
face.control.stop_router_BANG_.call(null);

return cljs.core.reset_BANG_.call(null,face.control.router_,taoensso.sente.start_client_chsk_router_BANG_.call(null,face.control.ch_chsk,face.control.event_msg_handler));
});
face.control.start_ws_BANG_ = (function face$control$start_ws_BANG_(){
return face.control.start_router_BANG_.call(null);
});
face.control.init_face = (function face$control$init_face(){
face.control.gifs = face.control.get_and_load_gifs.call(null);

face.control.show_gif.call(null,new cljs.core.Keyword(null,"exuberant","exuberant",457064105));

face.control.init_ws.call(null);

return face.control.start_ws_BANG_.call(null);
});
window.onload = (function (){
return face.control.init_face.call(null);
});

//# sourceMappingURL=control.js.map