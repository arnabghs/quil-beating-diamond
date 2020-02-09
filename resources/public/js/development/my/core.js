// Compiled by ClojureScript 1.10.520 {}
goog.provide('my.core');
goog.require('cljs.core');
goog.require('quil.core');
goog.require('quil.middleware');
my.core.sum_of = cljs.core.partial.call(null,cljs.core.mapv,cljs.core._PLUS_);
my.core.top_right_diag = (function my$core$top_right_diag(x){
var iter__4523__auto__ = (function my$core$top_right_diag_$_iter__34562(s__34563){
return (new cljs.core.LazySeq(null,(function (){
var s__34563__$1 = s__34563;
while(true){
var temp__5735__auto__ = cljs.core.seq.call(null,s__34563__$1);
if(temp__5735__auto__){
var s__34563__$2 = temp__5735__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,s__34563__$2)){
var c__4521__auto__ = cljs.core.chunk_first.call(null,s__34563__$2);
var size__4522__auto__ = cljs.core.count.call(null,c__4521__auto__);
var b__34565 = cljs.core.chunk_buffer.call(null,size__4522__auto__);
if((function (){var i__34564 = (0);
while(true){
if((i__34564 < size__4522__auto__)){
var i = cljs.core._nth.call(null,c__4521__auto__,i__34564);
cljs.core.chunk_append.call(null,b__34565,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [i,(i - x)], null));

var G__34566 = (i__34564 + (1));
i__34564 = G__34566;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__34565),my$core$top_right_diag_$_iter__34562.call(null,cljs.core.chunk_rest.call(null,s__34563__$2)));
} else {
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__34565),null);
}
} else {
var i = cljs.core.first.call(null,s__34563__$2);
return cljs.core.cons.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [i,(i - x)], null),my$core$top_right_diag_$_iter__34562.call(null,cljs.core.rest.call(null,s__34563__$2)));
}
} else {
return null;
}
break;
}
}),null,null));
});
return iter__4523__auto__.call(null,cljs.core.range.call(null,(0),(x + (1))));
});
my.core.top_left_diag = (function my$core$top_left_diag(x){
var iter__4523__auto__ = (function my$core$top_left_diag_$_iter__34567(s__34568){
return (new cljs.core.LazySeq(null,(function (){
var s__34568__$1 = s__34568;
while(true){
var temp__5735__auto__ = cljs.core.seq.call(null,s__34568__$1);
if(temp__5735__auto__){
var s__34568__$2 = temp__5735__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,s__34568__$2)){
var c__4521__auto__ = cljs.core.chunk_first.call(null,s__34568__$2);
var size__4522__auto__ = cljs.core.count.call(null,c__4521__auto__);
var b__34570 = cljs.core.chunk_buffer.call(null,size__4522__auto__);
if((function (){var i__34569 = (0);
while(true){
if((i__34569 < size__4522__auto__)){
var i = cljs.core._nth.call(null,c__4521__auto__,i__34569);
cljs.core.chunk_append.call(null,b__34570,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(- i),(i - x)], null));

var G__34571 = (i__34569 + (1));
i__34569 = G__34571;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__34570),my$core$top_left_diag_$_iter__34567.call(null,cljs.core.chunk_rest.call(null,s__34568__$2)));
} else {
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__34570),null);
}
} else {
var i = cljs.core.first.call(null,s__34568__$2);
return cljs.core.cons.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(- i),(i - x)], null),my$core$top_left_diag_$_iter__34567.call(null,cljs.core.rest.call(null,s__34568__$2)));
}
} else {
return null;
}
break;
}
}),null,null));
});
return iter__4523__auto__.call(null,cljs.core.range.call(null,(0),(x + (1))));
});
my.core.bot_left_diag = (function my$core$bot_left_diag(x){
var iter__4523__auto__ = (function my$core$bot_left_diag_$_iter__34572(s__34573){
return (new cljs.core.LazySeq(null,(function (){
var s__34573__$1 = s__34573;
while(true){
var temp__5735__auto__ = cljs.core.seq.call(null,s__34573__$1);
if(temp__5735__auto__){
var s__34573__$2 = temp__5735__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,s__34573__$2)){
var c__4521__auto__ = cljs.core.chunk_first.call(null,s__34573__$2);
var size__4522__auto__ = cljs.core.count.call(null,c__4521__auto__);
var b__34575 = cljs.core.chunk_buffer.call(null,size__4522__auto__);
if((function (){var i__34574 = (0);
while(true){
if((i__34574 < size__4522__auto__)){
var i = cljs.core._nth.call(null,c__4521__auto__,i__34574);
cljs.core.chunk_append.call(null,b__34575,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(i - x),i], null));

var G__34576 = (i__34574 + (1));
i__34574 = G__34576;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__34575),my$core$bot_left_diag_$_iter__34572.call(null,cljs.core.chunk_rest.call(null,s__34573__$2)));
} else {
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__34575),null);
}
} else {
var i = cljs.core.first.call(null,s__34573__$2);
return cljs.core.cons.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(i - x),i], null),my$core$bot_left_diag_$_iter__34572.call(null,cljs.core.rest.call(null,s__34573__$2)));
}
} else {
return null;
}
break;
}
}),null,null));
});
return iter__4523__auto__.call(null,cljs.core.range.call(null,x,(-1),(-1)));
});
my.core.bot_right_diag = (function my$core$bot_right_diag(x){
var iter__4523__auto__ = (function my$core$bot_right_diag_$_iter__34577(s__34578){
return (new cljs.core.LazySeq(null,(function (){
var s__34578__$1 = s__34578;
while(true){
var temp__5735__auto__ = cljs.core.seq.call(null,s__34578__$1);
if(temp__5735__auto__){
var s__34578__$2 = temp__5735__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,s__34578__$2)){
var c__4521__auto__ = cljs.core.chunk_first.call(null,s__34578__$2);
var size__4522__auto__ = cljs.core.count.call(null,c__4521__auto__);
var b__34580 = cljs.core.chunk_buffer.call(null,size__4522__auto__);
if((function (){var i__34579 = (0);
while(true){
if((i__34579 < size__4522__auto__)){
var i = cljs.core._nth.call(null,c__4521__auto__,i__34579);
cljs.core.chunk_append.call(null,b__34580,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(x - i),i], null));

var G__34581 = (i__34579 + (1));
i__34579 = G__34581;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__34580),my$core$bot_right_diag_$_iter__34577.call(null,cljs.core.chunk_rest.call(null,s__34578__$2)));
} else {
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__34580),null);
}
} else {
var i = cljs.core.first.call(null,s__34578__$2);
return cljs.core.cons.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(x - i),i], null),my$core$bot_right_diag_$_iter__34577.call(null,cljs.core.rest.call(null,s__34578__$2)));
}
} else {
return null;
}
break;
}
}),null,null));
});
return iter__4523__auto__.call(null,cljs.core.range.call(null,x,(-1),(-1)));
});
my.core.all_diags = cljs.core.juxt.call(null,my.core.top_left_diag,my.core.top_right_diag,my.core.bot_left_diag,my.core.bot_right_diag);
my.core.diags_from_center = (function my$core$diags_from_center(center,x){
return cljs.core.mapv.call(null,cljs.core.partial.call(null,my.core.sum_of,center),cljs.core.into.call(null,cljs.core.PersistentHashSet.EMPTY,cljs.core.cat,my.core.all_diags.call(null,x)));
});
my.core.setup = (function my$core$setup(){
quil.core.frame_rate.call(null,(5));

quil.core.color_mode.call(null,new cljs.core.Keyword(null,"rgb","rgb",1432123467));

return new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"sizes","sizes",-273528126),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [(1)], null),new cljs.core.Keyword(null,"tile-size","tile-size",441420757),(10),new cljs.core.Keyword(null,"modifier","modifier",1634442788),(0),new cljs.core.Keyword(null,"modifiers","modifiers",50378834),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.inc,cljs.core.dec], null)], null);
});
my.core.update_state = (function my$core$update_state(state){
var first_size = cljs.core.first.call(null,state.call(null,new cljs.core.Keyword(null,"sizes","sizes",-273528126)));
var sec_mod = cljs.core.second.call(null,new cljs.core.Keyword(null,"modifiers","modifiers",50378834).cljs$core$IFn$_invoke$arity$1(state));
var first_mod = cljs.core.first.call(null,new cljs.core.Keyword(null,"modifiers","modifiers",50378834).cljs$core$IFn$_invoke$arity$1(state));
if((((first_size === (0))) || ((first_size >= (25))))){
return cljs.core.update.call(null,cljs.core.update.call(null,state,new cljs.core.Keyword(null,"modifiers","modifiers",50378834),cljs.core.reverse),new cljs.core.Keyword(null,"sizes","sizes",-273528126),cljs.core.partial.call(null,cljs.core.map,sec_mod));
} else {
return cljs.core.update.call(null,state,new cljs.core.Keyword(null,"sizes","sizes",-273528126),cljs.core.partial.call(null,cljs.core.map,first_mod));
}
});
my.core.draw_diamond = (function my$core$draw_diamond(size,tile_size){
var coords = my.core.diags_from_center.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [((quil.core.width.call(null) / tile_size) / (2)),((quil.core.height.call(null) / tile_size) / (2))], null),size);
var seq__34582 = cljs.core.seq.call(null,coords);
var chunk__34583 = null;
var count__34584 = (0);
var i__34585 = (0);
while(true){
if((i__34585 < count__34584)){
var vec__34592 = cljs.core._nth.call(null,chunk__34583,i__34585);
var x = cljs.core.nth.call(null,vec__34592,(0),null);
var y = cljs.core.nth.call(null,vec__34592,(1),null);
cljs.core.apply.call(null,quil.core.fill,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [(0),(0),(0)], null));

quil.core.no_stroke.call(null);

quil.core.rect.call(null,(y * tile_size),(x * tile_size),tile_size,tile_size);


var G__34598 = seq__34582;
var G__34599 = chunk__34583;
var G__34600 = count__34584;
var G__34601 = (i__34585 + (1));
seq__34582 = G__34598;
chunk__34583 = G__34599;
count__34584 = G__34600;
i__34585 = G__34601;
continue;
} else {
var temp__5735__auto__ = cljs.core.seq.call(null,seq__34582);
if(temp__5735__auto__){
var seq__34582__$1 = temp__5735__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__34582__$1)){
var c__4550__auto__ = cljs.core.chunk_first.call(null,seq__34582__$1);
var G__34602 = cljs.core.chunk_rest.call(null,seq__34582__$1);
var G__34603 = c__4550__auto__;
var G__34604 = cljs.core.count.call(null,c__4550__auto__);
var G__34605 = (0);
seq__34582 = G__34602;
chunk__34583 = G__34603;
count__34584 = G__34604;
i__34585 = G__34605;
continue;
} else {
var vec__34595 = cljs.core.first.call(null,seq__34582__$1);
var x = cljs.core.nth.call(null,vec__34595,(0),null);
var y = cljs.core.nth.call(null,vec__34595,(1),null);
cljs.core.apply.call(null,quil.core.fill,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [(0),(0),(0)], null));

quil.core.no_stroke.call(null);

quil.core.rect.call(null,(y * tile_size),(x * tile_size),tile_size,tile_size);


var G__34606 = cljs.core.next.call(null,seq__34582__$1);
var G__34607 = null;
var G__34608 = (0);
var G__34609 = (0);
seq__34582 = G__34606;
chunk__34583 = G__34607;
count__34584 = G__34608;
i__34585 = G__34609;
continue;
}
} else {
return null;
}
}
break;
}
});
my.core.draw_state = (function my$core$draw_state(p__34610){
var map__34611 = p__34610;
var map__34611__$1 = (((((!((map__34611 == null))))?(((((map__34611.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__34611.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__34611):map__34611);
var sizes = cljs.core.get.call(null,map__34611__$1,new cljs.core.Keyword(null,"sizes","sizes",-273528126));
var tile_size = cljs.core.get.call(null,map__34611__$1,new cljs.core.Keyword(null,"tile-size","tile-size",441420757));
quil.core.background.call(null,(240));

var seq__34613 = cljs.core.seq.call(null,sizes);
var chunk__34614 = null;
var count__34615 = (0);
var i__34616 = (0);
while(true){
if((i__34616 < count__34615)){
var size = cljs.core._nth.call(null,chunk__34614,i__34616);
my.core.draw_diamond.call(null,size,tile_size);


var G__34617 = seq__34613;
var G__34618 = chunk__34614;
var G__34619 = count__34615;
var G__34620 = (i__34616 + (1));
seq__34613 = G__34617;
chunk__34614 = G__34618;
count__34615 = G__34619;
i__34616 = G__34620;
continue;
} else {
var temp__5735__auto__ = cljs.core.seq.call(null,seq__34613);
if(temp__5735__auto__){
var seq__34613__$1 = temp__5735__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__34613__$1)){
var c__4550__auto__ = cljs.core.chunk_first.call(null,seq__34613__$1);
var G__34621 = cljs.core.chunk_rest.call(null,seq__34613__$1);
var G__34622 = c__4550__auto__;
var G__34623 = cljs.core.count.call(null,c__4550__auto__);
var G__34624 = (0);
seq__34613 = G__34621;
chunk__34614 = G__34622;
count__34615 = G__34623;
i__34616 = G__34624;
continue;
} else {
var size = cljs.core.first.call(null,seq__34613__$1);
my.core.draw_diamond.call(null,size,tile_size);


var G__34625 = cljs.core.next.call(null,seq__34613__$1);
var G__34626 = null;
var G__34627 = (0);
var G__34628 = (0);
seq__34613 = G__34625;
chunk__34614 = G__34626;
count__34615 = G__34627;
i__34616 = G__34628;
continue;
}
} else {
return null;
}
}
break;
}
});
my.core.my = (function my$core$my(){
return quil.sketch.sketch.call(null,new cljs.core.Keyword(null,"host","host",-1558485167),"host",new cljs.core.Keyword(null,"update","update",1045576396),((cljs.core.fn_QMARK_.call(null,my.core.update_state))?(function() { 
var G__34629__delegate = function (args){
return cljs.core.apply.call(null,my.core.update_state,args);
};
var G__34629 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__34630__i = 0, G__34630__a = new Array(arguments.length -  0);
while (G__34630__i < G__34630__a.length) {G__34630__a[G__34630__i] = arguments[G__34630__i + 0]; ++G__34630__i;}
  args = new cljs.core.IndexedSeq(G__34630__a,0,null);
} 
return G__34629__delegate.call(this,args);};
G__34629.cljs$lang$maxFixedArity = 0;
G__34629.cljs$lang$applyTo = (function (arglist__34631){
var args = cljs.core.seq(arglist__34631);
return G__34629__delegate(args);
});
G__34629.cljs$core$IFn$_invoke$arity$variadic = G__34629__delegate;
return G__34629;
})()
:my.core.update_state),new cljs.core.Keyword(null,"size","size",1098693007),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(500),(500)], null),new cljs.core.Keyword(null,"setup","setup",1987730512),((cljs.core.fn_QMARK_.call(null,my.core.setup))?(function() { 
var G__34632__delegate = function (args){
return cljs.core.apply.call(null,my.core.setup,args);
};
var G__34632 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__34633__i = 0, G__34633__a = new Array(arguments.length -  0);
while (G__34633__i < G__34633__a.length) {G__34633__a[G__34633__i] = arguments[G__34633__i + 0]; ++G__34633__i;}
  args = new cljs.core.IndexedSeq(G__34633__a,0,null);
} 
return G__34632__delegate.call(this,args);};
G__34632.cljs$lang$maxFixedArity = 0;
G__34632.cljs$lang$applyTo = (function (arglist__34634){
var args = cljs.core.seq(arglist__34634);
return G__34632__delegate(args);
});
G__34632.cljs$core$IFn$_invoke$arity$variadic = G__34632__delegate;
return G__34632;
})()
:my.core.setup),new cljs.core.Keyword(null,"middleware","middleware",1462115504),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [quil.middleware.fun_mode], null),new cljs.core.Keyword(null,"draw","draw",1358331674),((cljs.core.fn_QMARK_.call(null,my.core.draw_state))?(function() { 
var G__34635__delegate = function (args){
return cljs.core.apply.call(null,my.core.draw_state,args);
};
var G__34635 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__34636__i = 0, G__34636__a = new Array(arguments.length -  0);
while (G__34636__i < G__34636__a.length) {G__34636__a[G__34636__i] = arguments[G__34636__i + 0]; ++G__34636__i;}
  args = new cljs.core.IndexedSeq(G__34636__a,0,null);
} 
return G__34635__delegate.call(this,args);};
G__34635.cljs$lang$maxFixedArity = 0;
G__34635.cljs$lang$applyTo = (function (arglist__34637){
var args = cljs.core.seq(arglist__34637);
return G__34635__delegate(args);
});
G__34635.cljs$core$IFn$_invoke$arity$variadic = G__34635__delegate;
return G__34635;
})()
:my.core.draw_state));
});
goog.exportSymbol('my.core.my', my.core.my);

if(cljs.core.truth_(cljs.core.some.call(null,(function (p1__33955__33956__auto__){
return cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"no-start","no-start",1381488856),p1__33955__33956__auto__);
}),null))){
} else {
quil.sketch.add_sketch_to_init_list.call(null,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"fn","fn",-1175266204),my.core.my,new cljs.core.Keyword(null,"host-id","host-id",742376279),"host"], null));
}
my.core.run_sketch.call(null);

//# sourceMappingURL=core.js.map?rel=1581262288218
