/*  todo: check all rgx patterns to see how many steps they take, see if lookahead for ]] is better than matching ]]/ double click and points given on cubes / after explTag on mc, cubes overflow, saved scrolling.js file
July 7 (1:00 am) issue was: pic in qtext not disappearing on mouseleave. soln: eventlisteners created from qText don't call handlevocableave
July 4 (12:40 pm) updated CSS .light/litUpSentence, .litUpManually, .litUpJustify: less css animation for efficiency, coordinated to have suitable colors, manually hili and unhili sentences and synced with other functions
July 3 (12:50 pm) working on sentence staying hili on longpress
July 3 (3:50am) added ing words that should not be caught by regex, code for continuous() works, and linked to its corresponding button.
July 3 (12:40am) made green lights, continuous regex need to exclude morning, evening, something, everything, something, nothing, training, clothing, etc.
July 2 (12:50pm) refining regex for inf and cont
July 2  (4:00 am)  using hiliInf rgx as a template for continuous. took out auxiliary catch and its span of kword since continous and 'have to' never coincide.
July 2  (12:40 am) update  hvbv and inf(w/ detailed notes) regex. ready to make continuous regex
July 1  (12:30 pm) refined hiliInf regex on specific scenario with a comma. I [[have to - must]], 끔without a doubt, 일finish today.
July 1  (12:50 am) float-tag-circle created, mouse can hover anywhere in kUserInput including progressBar and scroll pElement and notes 
June 30 (12:40 pm) scrolling of pElement and notes happen from kUserInput, meaning mouse can hover anywhere including progressbar and scrolling will happen.
June 30 (12:50 am)  notes and pElement which are synced can be scrolled from notes or pElements. notes can be saved and auto recalled from the browswer.
June 29 (12:40 pm)  fixed generateCube() being called twice, moved listeners out of start(); new function to adjust damping(smooth scrolling speed) depending on number of spans in text
June 29 (1:20 am)  notes and pElement scroll smoothly and are synchronized with no delay
June 28 (1:10 pm)  notes scroll is synchronized but there is a delay
June 28 (12:10 am) fixed alignment issues on all floatTags with voc wrapping to the next line, cursor disappears to emphasize floatTag. activateVocabManipulate(); gone
June 27 (12:40 pm) mc under event delegation. all vocabs toggle, display pic, syn, ant, and explanation
June 27 (3:40 am) with event delegation, right click on qText vocab lets pic appear and disappear multiple times.
June 27 (12:40 am) process of making activateVocabManipulate obsolete. FloatTags on mc and qText are from event delegation.
June 26 (12:30 pm) message-content height form 3em to 100% so that defaultQAmsg font adjusts properly with color and new lines. curved lines height extended 
June 26 (12:30 am) adjustFont function merged and optimized, latestActionHiLiBtn replaced with more general lastActionSentRelated, cube pts unavailable if user looked at MC Qs first
June 25 (12:50 am) optimized adjustClientHeight, latestAction needed to traverse, autoscroll, lightup, magnify, click text, and toggling those to be synchronized, floatTag in pElement appears below when there's no space
June 24 (12:50 pm) msg box displays pic and floatTags after toggline and sentence slide animation 
June 24 (1:10 am)  msg box displays pic and floatTags.
June 23 (12:20 pm) use different adjustFont functions
June 23 (1:20 am) debugged scrolling issue with requestAnimationFrame
June 22 (12:40 am) took out lastActionSentRelated boolean
June 21 (12:40 am) tQA vocab toggles while be synchronized with everything else.
June 20 (12:30 am) tQA vocab toggles but not properly integrated into the orToggle function
June 19 (12:30 pm) debugged 'undefined' appearing on QA. curved lines don't intersect points-box
June 19 (5:00 am)  QA can go on and off, and slides smoothly with or without colors
June 18 (1:00 pm)  QA slides with colors, need to debug clicking on and off and current sentence that's sliding should not change but changes to next sentence.
June 18 (1:00 am)  QA slides up and down well and font adjusts but not when colored
June 17 (12:50 pm) slots animation can light up and adjust fontsize but needs dubugging.
June 17 (12:50 am) debugged floatTag not aligned properly in magSent bc it's container was pElement, not magSent, working on slots animation
June 16 (12:30 am) curved lines on msgBox, debugged sync issues: blue sent disappearing after displayAll, need currentSentWithVocPIC only on right click
June 15 (12:30 am) listener not attached on qText bc each .vocab needs a listener for mouse enter and leave. debugged a lot.
June 14 (12:40 am) listeners attached to qText, magSent, and kUser-input p and they all use attachFloatTagDOWN()
June 13 (12:20 pm) left click on pElement eventListener works on sentence traverse and vocab toggle and synchronizes with magSent.
June 13 (12:40 am) listeners on pElement and magSent are synchronized to: attach/detach floatTags, show pics, toggle .vocab, lightUp, and traverse sentences by clicking
June 12 (4:10 pm)  listener on pElement to catch kVocab. upon click event: sentence gets hili but not on vocab, presshold attaches floatTag but doesn't disappear.
June 12 (12:50 pm) eventListener on kUserInput can display vocab's wordType and antonym.
June 12 (12:30 am) process of putting event delegation on kvocab
June 11 (11:40 am) Prevents stacking event listeners for cube, event delegation used for displayMCs(), need to debug
June 11 (2:50 am) scroll in msgBox can traverse through teacherQAarr and display sentences.
June 11 (12:25 am) clicking on msgBox displays fimagSentContrst index of teacherQA
June 10 (4:10 pm) simplified buttons color change in css and js
June 9 (12:40 am)  Fixed issue of last question not giving points, short mult-choices fill up parent's whole space. Working on extracting text from teacherQA
June 9 (12:40 am)  gm btns text remain colored when clicked indicating it's ON. hiliend more robust with negative lookahead not accepting colon and hyphen as well.
June 8 (12:40 pm) simplified cqavocablist with a function, more robust algorithm that colors and crosses out words properly as .vocab toggles
June 7 (10:50 am)  toggled vocab has array that is aligned with the default vocab, now del tags at meaning, korean, antonym will mirror the default vocab's del tags 
June 7 (12:50 am)  algorithm to toggle vocab and keep del tags, and .color works but only when word is shorter than meaning and antonym
June 6 (12:10 pm) working on algorithm to toggle vocab and keep del tags, and .color
June 5 (11:20 pm) colors work with .vocab and del tags toggling, attempting to remove ++
June 5 (12:20 pm)  del tags work but with Cyan Pink and .vocab, but not in all scenarios, still debugging that and vocab toggle
June 5 (12:50 am)  ansBtns have borders lighting up when activated, del tags work but not Cyan with .vocab, and vocab toggle
June 4 (12:40 am) qVocab, kVocab, engExpl can lightUp, default expl msg added
June 3 (12:10 pm)  .vocab in qText, MCs, generateCubes, left and right click on qArrowLandR, floats disappearing all synchronized but needs testing.
June 3 (1:00 am) rocket's boosters ignite on mousemove. brining back algorithm that adds del tags which is needed when text is AVM
June 2 (1:10 pm)  floats are in span, not div. prob: qtext voc not toggling, vocab with cyan cause face color change and ant and wordtype showing
June 1 (12:40 am) cubes issues fixed, had to delete perspectives, backface-visibility: hidden on .cube-face, translateZ cannot be exactly half of 72
May 31 (12:50 pm) working on adding del tags without an algorithm. vocab toggles with del tags.
May 31 (12:30 am) del tags remain red as they cross out colored text, cyan is crossed out as it turns off and on. each MC on every question gets dmg once.
May 29 (3:10 am)  tags work on MCs
May 29 (12:20 am) qVocab updates qText or a single mc, b4 it updated qText and all 4 MCs, stopped vocab span getting caught in hiliPrep bc it wasn't matching parenthesis inside vocab span, fixed mc qvocab not toggling when it was colored
May 28 (12:40 am) cqaList hold Eng/Kor explanations
May 27 (12:40 am) points on cube can only be given once
May 26 (12:10 pm) working on cubes points being available only once.
May 26 (12:10 pm) working on cubes points being available only once.
May 25 (12:30 pm) fixed lighting inconsistencies, unhilijustifysent when compQ is off, sentStats can always turn off and on
May 24 (1:10 am)  del tags appear and disappear while lightupAll are intact.
May 23 (12:30 pm)  arrayGettingDelTags adds del tags to nested spans so that endings can be highlighted, faces get colored but no pts. default: cross out whole text of wrong ans.
May 22 (11:50 pm) cubes only refresh on qArrowLR. cards remain colored until question changes. cqa hold mc sentences so no need to recalculate sentence from arrays, crosses out targeted mc but need refinement
May 22 (12:10 pm) Rearragned pts box so traiangle is to the left of pt number and label which are vertically stacked
May 21 (11:50 pm) Debugged. with mc cards, target will always be mult-choices, if p, then bubble up to parent mult-choices. changed vocab regex so defn can include ()
May 21 (4:30 pm) replaced tempDiv with tempate, it's safer and faster. anywhere in mult-choice can change color with mousedown hold. working on algorithm to insert del tags
May 21 (12:30 am)  added abcdBox. red and green scores add up with color and animations but not when click hold on .vocab 
May 20 (12:10 am)  function updateQtext(source) replaced with toInnerHTML. Don't need .innerHTML() toggling is faster
May 20 (1235 am)  qArrowL for MC Qs and qArrowR for displayMCs. optimizing LRC
May 19 (1145 am)  clickhold on MC card and answer is colored green with dmg points
May 19 (326 am)  clickhold on MC card and answer is shown
May 18 (1156 pm)  MC toggling and floatTag work
May 18 (1240 am)  created MC cards, MC lighting works but not toggling
May 17 (310 pm) adjustClientHeight properly works on all scenarios
May 17 (110 pm) Took out clientheightadjustment happening when a sentence was hili and qContainer appeared. Trying to get adjustClientHeight to properly work on all scenarios
May 17 (1220 pm) innerHTML in qText replaced
May 14 (120 pm) prevented diamondAR[0] from lighting up, autoscroll on justified sentence
May 12 (12:10 pm) Simplified triangle css code, adding animations to triangle
May 12 (1250 am) Fixed sun gif from blinking. prevSentence simplified, min sentNow is 2, not 0. Added triangle plus and minus pt boxes 
May 11 (12:55 pm) debugged face not changing color when it was clicked and not scrolled
May 11 (3:55 am) single and all cube dmg text use a recyclable function
May 10 (12:20 am) Simplified further and process of having single and all cube dmg text use a recyclable function
May 9 (6:50 pm) dmg text appear only once randomly within all cubes if answer is correct.
May 9 (11:50 am) dmg text appear randomly within all cubes if answer is correct. 
May 6 (11:40 pm) refined code for dmg txt to appear in a single cube. Working on having it appear on all cubes.
May 6 (1:00 am) dmg tag only appears once on clickhold on face. clickhold accepts multiple answers of multiple words on face.
May 5 (5:40 am) clickhold on cube accepts multiple correct answers from a cube face. 
May 5 (1:20 am) Answer Check accepts multiple correct answers from a cube face. 
May 4 (12:50 pm) multiple cubes can be checked for correct and incorrect answers and individual face's color changes.
May 3 (12:40 am)  dmg pts float from cubes, points given depends on number of incorrect guesses.  
May 2 (12:10 pm)  Added notification display with incrementing Attempt Counter. Answer Check button has click and long click. 
Aril 30 (11:43 am) Further simplified floatTag and fixed alignment issues. wordID replaced wordType, wordType in different regex pattern.
Aril 30 (12:33 am) floatTag right above .vocab in all scenarios. Code simplified and put into functions.
Aril 29 (11:43 am) FloatTag in mag appears above .vocab in all scenarios. Used magPadding for adjustments. FloatTag is pegged to magSent-box
Aril 29 (1213 am) floatTag goes to far right if text wraps even if there is Sun, doesn't overlap pic. FloatTag can display newlines. FloatTag in mag needs to be readjusted
Aril 28 (1223 am) floatTag is centered, moves to the bottom if no space at top, goes to far right/left if it overflows, and far right if text wraps, in magSent, qText, and pre
Aril 27 (1223 pm) floatTag stays centered in magSent too
Aril 26 (323 pm) floatTag stays to the right if text wraps and its height doesn't get doubled
Aril 26 (1210 pm) floatTag adjusts to the top, bottom, left, or right to be viewable
Aril 26 (1210 am) qText displays antn and wordType and pic properly. Working on antn/wordType adjusting to the left or right
Aril 25 (1210 pm) refining qText showing antn and wordType
Aril 25 (1220 am) cqaVocabList accepts antn. and ignores unnecessary whitespace
Aril 24 (10:00 pm) antn/wordtype displays/disappears properly, pics in text and magSentL displayed at correct mousehold timings, will do the same for qText
Aril 24 (12:30 am) Wordtype fontsize adjusts, moves down if top has no space. kArray ignore double brackets of vocabList so that wordType can have periods
Aril 22 (11:50 am) Toggle word done without a loop. WordType shows but needs to be refined.
Aril 22 (1:30 am) Q arrow dissappears and appears depending on necessity. ansCheck cubes after right and left clicks as well as scrolling
Aril 21 (3:30 pm) Q arrow dissappears and appears depending on necessity
Aril 20 (2:30 pm) SIMPLIFY synchronized with traversing Qs. defaultPic added for qVocabs
Aril 20 (12:30 pm) Can traverse through questions, debugged long text in cube not moving to next line, improved Q-Left/Right click animation.
Aril 20 (12:30 am) text on cube shrink to fit in one line, if at min font it will go to next line. Prism responds better. user answer stored in array. specified cube can change color
Aril 19 (12:10 pm) cube-face can hold pneumonoultra-|microscopicsilico-|volcanoconiosis
Aril 18 (11:50 am) optimized .src loading and displaying process
Aril 17 (11:50 pm) qVocList property sentIndex-> questionNum. all img not wrapped in span. optimizing .src (led to prob, all img wrapped in span)
April 17 (12:15 am)  it's diamondAR is built while extracting vocab and wrapping text nodes into span. qPic can go on/off. 1697 no leftPic error
April 16 (11:30 am) Resolved issue of q-text shrinking too much, using buttons for qCheck and qJustify.
April 16 (12:30 am) Decided on colors for qWall's answer and justify, added arrows and colorful words to question-container
April 15 (6:10 am) Process of adding qpic with click. April 15 (6:10 am). On line 2810, currentSentWithVocPIC most likely is irrelevant
April 14 (11:57 pm) fixed css layout, qContainter has arrows and pic.
April 14 (11:50 am) Child dynamically made in qContainer, main-container's elements more centered.
 April 14 (12:30 am) Fixed regex in arrayK(/s+-=/s+ to distinguish hyphened words of SIMPLIFY applies to math i.e. [[x = -3]]) so indices follow text, blank, text, blank pattern. Single block of code can toggle multiple vocabs in qContainer
April 13 (12:05 pm) qContainer respond properly to left clicks. qContainer doesn't need insertAdjacentHTML bc there is no svg. innerHTML automaticaly deletes contents and then adds new content
April 13 (12:45 am) questions respond to all functions in lightupAll including sipmlify, doesn't respond properly to clicks however. adjustFontsize() accepts magSent and qContainer
April 12 (12:01 pm) cqaVocabList only extracts vocab brackets from within the brackets of CQA
April 11 (11:56 am) vocabDefnRgx refined to capture vocab and question number in qContainer
Apr 11. (12:40 am) prism rotates on X and Y axis, CompQ and Magnify synchronized, questions appear in question-container
Apr 9. (12:30 am) Fixed prob. of magSent font continually decreasing when putting magSentStats to the very bottom
Apr 8. (12:50 am) debugged compQbtn running with magSent. Process of overlapping magSentStats over magSent. 


*/
// Dec 13 11pm  DO + haveETC + to BV1,2,3,4,5 works! must have others inclue ,' and u200 B, E, D, but double check, might need other punctuation/zwc


// list of 원장s: 1) Rayna, 2) Allen, 3) 지세, 4) Poker buddy Justin  5) Danny and his uni. prof.  6) Allen's cousin in Irvine,  7) Chris' friend  8) Yoon's friend  9) Paul's/Roddy's employer  10) Min - CDI   11) John, Hun's brother
              // others: 1) Ella쌤 2) Susan누나   3) Jason and his wife   4) Churches   5) 종로 Pagoda 

// (?:\s+)|(?:(?:“[^”]+”,?\s(?:[a-z]|[^.!?”\n]+(?:said|say|replied|asked|exclaimed|shouted|stated|whispered|cried|screamed|muttered|sighed|laughed|groaned|noted|wrote)\b))|(<span[\w\W]+?(<span[^<]+(<span[^<]+<\/span>[\w\W]*?)*<\/span>[\w\W]*?)*<\/span>[\w\W]*?)+|\b\d{1,3}\.\s?|[.!?’”)\]\s]+‍[\n\s]*|\.,?\s?[a-z]|(?:[A-Z]\w{0,2}\.|<span)*[^.!?”\n])+[.!?’”)\]]+\n?
/*   toArray must ignore span tags                                                                                                                                                                                                                                                                   hvbv is \w(?:\S+)                                                                     

정의는 문장의 일부가 됩니다. 정의는 스토리의 맥락에 내재되어 있습니다. The definition becomes a part of the sentence. The definition is embedded into the context of the story.
The definition becomes a part of the story, it is embedded into the context of the story. 정의는 문장의 일부가 되어 이야기의 맥락에 자연스럽게 녹아든다.  
정의는 이야기의 일부가 되어 이야기의 맥락에 자연스럽게 녹아든다.




P1hasP1 P2to sleepP2  P1hasP1 P2toP2 happily (and peaceully) P2sleepP2
P1should sleepP1      P1shouldP1 happily (and peaceully) P1sleepP1

>사진2<I'm going to [어휘pry - 뜻use a lot of force to] open this >일이<window.
You need to [어휘>일이<knock it off - 뜻stop that] and get to work.
They will [어휘oppose - 뜻disagree and go against] our decision to accept [어휘refugees - 뜻people running away to another country because they're in danger].>사진<




__________
(?<!^‎|\s‎)((?:<span[^>]+>(?:(?!have)(?:[\w+\s‍]))*)*(?:<\/span>)?\s?)?((?:ha(?:s|ve|d)|need(?:s|ed)?|ought)(?:<\/span>)?\s?)?(?<!^‎|\s‎)(\b[Tt]o,?)\s(?!(?:self|that|them?|an?|my|you|his|its|our|their|(?:him|my|her|your|it)(?:self)?|(?:them|our)selves|me|us|each|which|some|any|\d+|\w+hood|\w+ism|\w+ty|\w+ier|\w+ful|\w+ion|[A-Z]\w*|\w*(?:ing|(?<!s|sometime|oftentime|alway)(?:<\/span>)?s))\b)(?:(?!(?:\w+ly|first|not|never|just|even|still|(?:often|some)(?:times)?|always)\b)(<span[^>]+>)?(\w(?:[\w‍]+))|(\w+)\s(<span[^>]+>)?((?!\band|but\b)\w(?:[\w‍]+))|(\w+ly)\s(\w+)\s(\w+ly)\s(<span[^>]+>)?(\w(?:[\w‍]+))|(?:))


You <span class="vocab" data-kword="<span class="color lightPurple">do</span> have to kn‍‍ow better"><span class="color 
lightPurple">do</span> have to kn‍‍ow better</span>.






You <span class="vocab" data-kword="have to kn‍ow better"><span class="color litPurple">had</span> to kn‍ow better</span>.

You <span class="vocab" data-kword="have to kn‍ow better"><span class="color litPurple">have</span> to kn‍ow better</span>.      INF and HVBV

You <span class="vocab" data-kword="have to really ‎for Pete’s sake ‎​kn‍ow better">have to really ‎for Pete’s sake ‎​kn‍ow better</span>.


_____________





Q: Why is it being caught when there's \s and not \u00A0     A: JS recognizes \u00A0 to be \s but not the regex engine website
Q. Why is KT the only function not going to LRC2? Does it conflict with simplfyWord()?
Q. Why  \u200B\u200B\u200B\u200E is in a lot of INF/HvBv regex? I know it's for 켬 but it should automatically be turned on, why manually turn it on? Partial answer: example: He >이<needs >일이<to always >일이<dance.
Q. difference? click', () => {     vs   click', function() {
Q. difference event handler and even listener?
To do:
test (?<!\s\u200B)(?<!^\u200B) with ending articles and hvbv
Nov 27 test 끔 and if u200Bu200C(일이) is needed to be caught by inf and hvbv regex  
all (\w+) -> ([\w\u200D]+)
why need this? ${hvBvInf} in: ((?:\u200E|${hvBvInf})?to)
Pictures uploaded after toggling
organize css elements

They needed to >끔<at the last minute [어휘>일이<tak♪e >일이<of♪f - 뜻leave].      Not a prob.
They needed to >끔<at the last minute [어휘tak♪♪e >일이<of♪f - 뜻leave].            Prob

They needed <span class="color litPink2">to</span> ‎at the last minute <span class="vocab" data-kword="‎​tak‍e ‎​of‍f"><span class="color litPink2">‎​tak</span>‍e <span class="color litPink2">‎​of</span>‍f</span>.

They needed <span class="color litPink2">to</span> ‎at the last minute <span class="vocab" data-kword="tak‍‍e <span class="color litPink2">‎​of</span>‍f">tak‍‍e <span class="color litPink2">‎​of</span>‍f</span>.

(?<!\s​)\b\w+(ied|(?<![ei])ed)\b(?!">|<\/span>)|(?:(?<![^\s]​\w)\w+|\b[aiMu]|\b(?:wa|hi|Mr)|\b(?:doe|thi)|s)(s)(?!​​|">|<\/span>)\b


potential problems: 
  \u00A0 space (nbsp) after 'aux verbs' and 'have to' might be inconsistent and cause problems
  prev/next functions must account for new <img> elements that get added. currently there are circle and circle2 which should be ignored if they're at the very front or end of text
  inf and hvbv have slightly different ways of catching span. if one has an error, check the other for sol'n.
  hiliEnd has neg. lookahead to igore if ending is in a span. (?![\u200B\u200D\u200E\s\w,’?]*">|\u200D). but should it be more all encompassing and use \w\W isntead of \s\w,??
  kT = kT.replace(/♪/g, '\u200D');  // note: might need to use \u202D to avoid conflicts with u200D added to hili ENDINGS s 's ed ied

For proper text input, don't have music notes between ied and ed. It can be before ed or ied, better yet put it before that. If not there could be an issue where SIMPLIFY is on a word with ENDING hili.
every SIMPLIFY meaning, syn, korean has to be unique with music notes.

Common Zero-Width Characters
\u200B - Zero Width Space (ZWSP) Used to indicate word boundaries without adding a visible space. Suggest a break point
\u200C - Zero Width Non-Joiner (ZWNJ) Prevents two characters from forming a ligature.
\u200D - Zero Width Joiner (ZWJ) Encourages two characters to form a ligature or combined glyph.
\u200E - Left-to-Right Mark (LRM) Used to set the text direction as left-to-right.
\u200F - Right-to-Left Mark (RLM) Used to set the text direction as right-to-left.

Less Common Zero-Width Characters
\u2060 - Word Joiner (WJ) Similar to ZWSP but prevents line breaks.
\uFEFF - Zero Width No-Break Space (ZWNBSP) Historically used as a Byte Order Mark (BOM); now used to prevent line breaks.  avoid it in text formatting to prevent unintended side effects
\u2061 - Function Application (invisible operator) Used in mathematical notations.
\u2062 - Invisible Times (multiplication operator) Used to indicate an implicit multiplication.
\u2063 - Invisible Separator Used in certain contexts to separate elements without visible spacing.
\u2064 - Invisible Plus Used for implicit addition in mathematics.

Unicode Control Characters with Similar Effects
\u202A - Left-to-Right Embedding (LRE)
\u202B - Right-to-Left Embedding (RLE)
\u202C - Pop Directional Formatting (PDF)
\u202D - Left-to-Right Override (LRO)
\u202E - Right-to-Left Override (RLO)

*/
"use strict";
/** @type {any} */
const Scrollbar = window.Scrollbar;
let scrollbar, pElementContainer, scrollbarL, notesLcontainer, scrollbarR, notesRcontainer;
//import DOMPurify from '../node_modules/dompurify/dist/purify.min.js';
const whitespaceOrEmpty = /^\s*$/;  
const hvBvInf = "\u200E\u200B";
const hiliEndOn = 3, hiliArtOn = 4, hiliHvBvOn = 6, hiliInfOn = 1, hiliContOn = 0; //simplifyOn = 8; 
                                                                                     //  let singleSentence = document.getElementById('single-sentence'); 
let sentNow = 2, sentB4 = 0, sentWithVoc = 0, diamondAR = [], diamondArLength, userAns = [], manuallyHiLiSentArr = [];
let previousSentWithVocPIC = null, currentSentWithVocPIC = null, previousVoc = null, currentVoc = null;
let fileNameNow = null, qFileNameNow = null, leftPic = null, rightPic = null, qPic = null;

let serverSummary = document.getElementById('clientSummary');
let icon = document.getElementById("icon");
//let allParagraphs = Array.from(document.querySelectorAll('#kUser-input p')).slice(0); 

let kUserInput = document.getElementById('kUser-input');
let displayCounter = 0;  // check how many time activateVocabManipulate was called
let sentenceCounter = null, sentenceCounterB4 = null;
                                                                                           //const circleElement = document.getElementById('circle');
                                                                                          // const circleElement2 = document.getElementById('circle2');
let sentenceHiLiBoo = false, endHiLiBoo = false,  artHiLiBoo = false, HvBvBoo = false, infBoo = false,  contBoo = false;
let magnifyBoo = false, compQboo = false, textBoo = false, wholeTextBoo = false;
let simplifyBoo = false, isKeyDown = false, inf1st = false, hvBv1st = false, sentenceTraversed = false, lastActionSentRelated = false, magSentFlexboxON = false, magSentStatsBoo = false;
let kT;                                                                       // lastActionSentRelated will always be true unless - lights, justify, CompQ ON are the latest action
let G = false, buttonContainerHorizontal = true, animationDone = true, onNewQ = false, justifySentHiLi = false, multChoiceQon = false, ptsAvailable = true;
let justifyAnsRC = false;//                                                             justifySentHiLi oscillates betten T/F for hili and uhHiLi justified sentences
let mcSurfaceColor = [{  choiceA: 'none', choiceB: 'none', choiceC: 'none', choiceD: 'none' }];

const click = { text:false,db:false};
const Origin = { msgBox: 0, pElement: 1, magSent: 2, qText: 3 };
const engExplBooAndChoice = {inEnglish:false,choice:null}
const leftPicDefault = 'white black hole.gif', rightPicDefault = 'neutral.png', qVocabDefault = 'moon.gif'; //BB
const defaultQAmsg = '<span class="color litOrange">Charlotte’s Ross’s Childrens’ Web.<br>Chapter 3.<br>Who will Let Wilbur Out!</span>';
//const defaultQAmsg = 'Charlotte’s Ross’s Childrens’ Web.<br>Chapter 3.<br>Who will Let Wilbur Out!';
let msgBoxBoo = false;

let leftButton    =  document.getElementById('left-button');
let rightButton   =  document.getElementById('right-button');
let hiLiBTN       =  document.getElementById('highlight-BTN');//DOM doesn’t change, single element:  getElementById is best. It's fast and optimized for single ID-based selection.
let magBTN        =  document.getElementById('magnify-BTN');  //DOM changes, but no updates needed:  querySelector is best if you want a flexible, one-time selection. It's static, so no live updates are needed.
let hvbvBTN       =  document.getElementById('HBv-BTN');     //DOM changes, and updates are needed: getElementsByClassName, getElementsByTagName (live collections) are best for live updates.
let infBTN        =  document.getElementById('Infinitives-BTN');      //                                     querySelectorAll can be used, but it’s static, so you'll need to re-query the DOM if updates are needed.
let contBTN       =  document.getElementById('Continuous-BTN');
let endingsBTN    =  document.getElementById('Word-Endings-BTN');
let articlesBTN   =  document.getElementById('Prepositions-BTN');
let simplifyBTN   =  document.getElementById('Simplify-BTN');
let qBTN          =  document.getElementById('Q-BTN');
let textBTN       =  document.getElementById('text-BTN');
//let ntfDisplayCont  = document.getElementById('notification-display-container');
let msgBox      = document.getElementById('message-box');
let msgBoxContent = document.getElementById('message-content');
const glowContainer = document.querySelector('.glow-container');


let minusPtsBox      = document.getElementById('minus-pts');
let plusPtsBox      = document.getElementById('plus-pts');
let qAnsCheck, qJustifyAns;





let kStart         = document.getElementById('start-BTN');
kStart.addEventListener("click", start);
const magSent      = document.getElementById('magSent');
const magSentBox   = document.getElementById('magSent-box');
const magSentStats = document.getElementById('magSent-stats');
const magSentL     = document.getElementById('magSentL-box');
const magSentR     = document.getElementById('magSentR-box');
const magSentCont  = document.querySelector('.magSent-container');
let cqaDisplay     = document.getElementById('cqa-box');


//let paraVocNodeList    = document.getElementById('kUser-input').getElementsByClassName('vocab');
const vocabList = [], cqaList = [], cqaVocabList = [], tQAvocabList = [];
let rightPics = [], leftPics = [];
let teacherQA, index = 0;
let teacherQAarr = {};

//const kWordObj = { '\u200EIsrael': 'a dog that lives in Kangnam', '‌p‌ried': 'used a lot of power and force to', '‌c‌autiously': 'carefully','‌a‌nxious': '걱정스러운','‌t‌hermals': 'warm clothes', '‌H‌EARTS': 'the shape or suit of a heart in poker cards'}; 
//const kWordObj2 = { '‌K​ooni': 'an astro dog', '‌p​ried': 'forced open'}; 
//Object.keys(kWordObj);
const kQuestion = document.getElementById('Q-BTN');
    const notes = document.querySelectorAll('.notes');    
    if (notes.length > 0) {
        const notesL = "notess-content-1";
        const notesR = "notess-content-2";

        function setupEditable(notes, savedNotes) {
            const savedContent = localStorage.getItem(savedNotes);
            if (savedContent) {
                notes.innerHTML = savedContent;
            }
            notes.addEventListener("input", () => {
                localStorage.setItem(savedNotes, notes.innerHTML);
            });
                if (!notes.innerHTML.trim()) {
                    notes.innerHTML = "<p><br></p>";
                } else {
                    const firstChild = notes.firstChild;
                    if (firstChild && firstChild.nodeType === Node.TEXT_NODE) {
                        const newParagraph = document.createElement("p");
                        newParagraph.textContent = firstChild.textContent;
                        notes.innerHTML = "";
                        notes.appendChild(newParagraph); 
                    }
                }
        }
        //if (notes[0]) setupEditable(notes[0], notesL);
        //if (notes[1]) setupEditable(notes[1], notesR);
    }



let magSentTxt, recentState;
let xDeg = -12, yDeg = 0; 
let magSentLclick = 0, magSentRclick = 0;

let pElement;            
let mcQuserAnsStorage = [null];  // index 0 is null. This is needed to properly align with questions. i.e. if there are 11 questions, [0] must be null for mcQuserAnsStorage[1-11] to get assigned. w/o null, mcQuserAnsStorage[0-10] will get assigned and leaving out 11 and causing an error
let cubeQuserAnsStorage = [null];
let pointableCubeAns = [null];

let qContainer, qText, mcContainer, qPicWall, nowQ = 1;
let cqaListLength;
const textContainer = document.getElementById('text-container');  //used when qText appears for reading questions

let multChoices;
//                                           Mega Super Ultrastar:  Superstar:      Top Star:       Rockstar:       All-Star:          Megastar:  North Star:  Guiding Star:  Bright Star:Starlet  Main Star
//let kTxt = document.getElementById('myParagraph').textContent;    Shining Star: : Sparkling Star, Twinkling Star, Stellar Star       Rising Star, Future Star,  New star,   Shooting Star  
// Define the animation range and duration
let baseFrequencyX = 0.1;
let baseFrequencyY = 0.1;
const frequencyDelta = 0.01;
const duration = 100; // in milliseconds

let userPlusPts = 0, userMinusPts = 0, red = 0;


/*      works with html: class="fire"
function animateFlames() {
  baseFrequencyX += frequencyDelta * (Math.random() > 0.5 ? 1 : -1);// Alternate frequency values for a "flickering" effect
  baseFrequencyY += frequencyDelta * (Math.random() > 0.5 ? 1 : -1);
 
  baseFrequencyX = Math.max(0.08, Math.min(0.12, baseFrequencyX)); // Clamp values to avoid extremes
  baseFrequencyY = Math.max(0.08, Math.min(0.12, baseFrequencyY));
  
  turbulence.setAttribute('baseFrequency', `${baseFrequencyX} ${baseFrequencyY}`);// Update the baseFrequency attribute
  
  setTimeout(animateFlames, duration);// Repeat the animation

}

animateFlames();
*/


const totalStars = 270;

const layers = [
  { size: 1.6, percent: 0.36, twinkle: 1.2 },
  { size: 1, percent: 0.45, twinkle: 1.2 },
  { size: 2, percent: 0.17, twinkle: 1.2 },
  { size: 2.4, percent: 0.2, twinkle: 1.2 }
];

layers.forEach(layer => {
  const count = Math.round(totalStars * layer.percent);
  const stars = document.createElement("div");

  stars.style.position = "absolute";
  stars.style.inset = "0";
  stars.style.background = "transparent";

  if (layer.size === 1.6) stars.style.filter = "blur(0.3px)";
  else if (layer.size === 2) stars.style.filter = "blur(0.4px)";
  else if (layer.size === 2.4) stars.style.filter = "blur(0.72px)";

  stars.style.width = `${layer.size}px`;
  stars.style.height = `${layer.size}px`;

  let baseOpacity = 1;
  if (layer.size === 1) baseOpacity = 0.6;
  else if (layer.size === 2.4) baseOpacity = 0.9;

  stars.style.opacity = baseOpacity;
  stars.style.setProperty("--base-opacity", baseOpacity);

  // ✨ twinkle
  stars.style.animation = `twinkle ${layer.twinkle}s ease-in-out infinite`;
  stars.style.animationDelay = `${Math.random() * layer.twinkle}s`;

  let shadows = [];
  for (let i = 0; i < count; i++) {
    const x = Math.random() * window.innerWidth;
    const y = Math.random() * window.innerHeight;
    shadows.push(`${x}px ${y}px white`);
  }

  stars.style.boxShadow = shadows.join(", ");
  stars.style.pointerEvents = "none";
  stars.style.willChange = "opacity";

  document.body.appendChild(stars);
});

function getWeekNumberByMonday(date) { //This prevents negative or zero weeks, calculates the week number of the year
  const year = date.getFullYear();
  const firstMonday = new Date(year, 0, 1);

  while (firstMonday.getDay() !== 1) {
    firstMonday.setDate(firstMonday.getDate() + 1);
  }

  const diff = date - firstMonday;
  const week = Math.floor(diff / (7 * 24 * 60 * 60 * 1000)) + 1;

  return Math.max(1, week); 
}

function getWeeksInMonth(year, monthIndex) {
  const weeks = [];
  const d = new Date(year, monthIndex, 1); //A Date object set to: the first day of a specific month in a specific year
  console.log(d);
  while (d.getMonth() === monthIndex) { //d.getMonth() returns the month number of the date stored in d. i.e. January = 0  December = 11
    if (d.getDay() === 1) { // Monday            returns the day of the week 0 = Sunday, 6 = Saturday
      weeks.push(getWeekNumberByMonday(d));
    }
    d.setDate(d.getDate() + 1); //Add 1 day, When you hit the next month → getMonth() changes, loop stops
  }

  return weeks;
}



const months = ["January","February","March","April","May","June","July","August","September","October","November","December"];

let gemstoneMonths = `<div id="k-Container">
  <div class="go-back-container">
    <button class="thumbnail go-back-btn" aria-label="Go back">
      <img src="go back.png" alt="">
    </button>
  </div>
  <div class="months-container"> `;
 
months.forEach((month, index) => {
  gemstoneMonths += `
    <div class="thumbnail">
      <img src="${month}-transparent.png" alt="Birthstone ${index + 1}">
      <span class="label">${month}</span>
    </div>
  `;
});
gemstoneMonths += `</div></div>`;
const form = document.querySelector("#myForm");
toInnerHTML(form, gemstoneMonths);



const attachColorScroll = (container) => {
  container.onscroll = () => { // onscroll instad of addeventListener because it Automatically replaces the previous one
    updateProgressBar(container, progressBarL, progressBarR);
  };
  updateProgressBar(container, progressBarL, progressBarR);// initial sync
};
const progressBarL = document.getElementById('left');
const progressBarR = document.getElementById('right')
const kContainer = document.getElementById('k-Container'); 
attachColorScroll(kContainer); // manually triggers it




form.addEventListener('click', (e) => {  
  const thumb = e.target.closest('.thumbnail');
    if (thumb) hideCursor(thumb);


  if (thumb?.classList.contains('go-back-btn')) {
    toInnerHTML(form, gemstoneMonths);
    const kContainer = document.getElementById('k-Container'); 
    kContainer.style.display = 'grid'; 
    attachColorScroll(kContainer); // manually triggers it
    return;
  }
  const label = thumb?.querySelector('.label')?.textContent?.trim(); //If thumb exists, look inside it for an element with class .label
  if (!label) return;


  // 📅 Individual Month clicked
  const monthIndex = months.indexOf(label);
  if (monthIndex === -1) return;  //can be -1 any time the string you extracted does not exactly match one of the strings in months

  const year = new Date().getFullYear(); //returns the current year as a number
  const weeks = getWeeksInMonth(year, monthIndex);
  thumb.classList.add('pressed');
  setTimeout(() => {
    thumb.classList.remove('pressed');
    //const gridTemplate = weeks.length === 4 ? 'repeat(auto-fill, minmax(180px, 1fr))' : 'repeat(auto-fill, minmax(144px, 1fr))'; //makes sure 4 or 5 weeks are in one row
    const gridTemplate = 'repeat(auto-fill, minmax(270px, 1fr))'; 
    toInnerHTML(form, `
      <div id="k-Container">
        <div class="month-header">
          <img src="${months[monthIndex]}-transparent.png" alt="${months[monthIndex]}" class="month-header-img">
          <h2>${months[monthIndex]} ${year}</h2>
        </div>
          
        <div class="eachMonth-buttons-container">
          <div>
            <button class="thumbnail go-back-btn" aria-label="Go back">
              <img src="go back.png" alt="">
            </button>
          </div>
          <div class="weeks-container">
            ${weeks.map(wk => `<button id="HBv-BTN">Week ${wk}</button>`).join("")}
          </div>              
        </div>
        <div class="months-container" style="display: grid; grid-template-columns: ${gridTemplate}; gap: 16px;">
          <!--
          <div class="kT-container">Nodfsdfsdfsddddddddddddddddddddddddddddddd1vel <br>Charlotte's Web on Pop's Bridge</div><div class="kT-container">Grammar<br>Articles</div>
          <div class="kT-container" >Into Reading 3.3<br>Pop's Bridge</div><div class="kT-container">Debate<br>Winning an argument</div>
          <div class="kT-container">No1vel <br>Charlotte's Web on Pop's Bridge</div><div class="kT-container">Grammar<br>Articles</div>
          <div class="kT-container" >Into Reading 3.3<br>Pop's Bridge</div><div class="kT-container">Debate<br>Winning an argument</div>
          <div class="kT-container">No23vel <br>Charlotte's Web on Pop's Bridge</div><div class="kT-container">Grammar<br>Articles</div>
          <div class="kT-container" >Into Reading 3.3<br>Pop's Bridge</div><div class="kT-container">Debate<br>Winning an argument</div>
          <div class="kT-container">Nov3213el <br>Charlotte's Web on Pop's Bridge</div><div class="kT-container">Grammar<br>Articles</div>
          <div class="kT-container" >Into Reading 3.3<br>Pop's Bridge</div><div class="kT-container">Debate<br>Winning an argument</div>
          <div class="kT-container">No213vel <br>Charlotte's Web on Pop's Bridge</div><div class="kT-container">Grammar<br>Articles</div>
          <div class="kT-container" >Into Reading 3.3<br>Pop's Bridge</div><div class="kT-container">Debate<br>Winning an argument</div>
          <div class="kT-container">Novasdfel <br>Charlotte's Web on Pop's Bridge</div><div class="kT-container">Grammar<br>Articles</div>
          <div class="kT-container" >Into Reading 3.3<br>Pop's Bridge</div><div class="kT-container">Debate<br>Winning an argument</div>
          <div class="kT-container">Nosdfasdvel <br>Charlotte's Web on Pop's Bridge</div><div class="kT-container">Grammar<br>Articles</div>
          <div class="kT-container" >Into Reading 3.3<br>Pop's Bridge</div><div class="kT-container">Debate<br>Winning an argument</div>
          <div class="kT-container">Nodfsvel <br>Charlotte's Web on Pop's Bridge</div><div class="kT-container">Grammar<br>Articles</div>
          <div class="kT-container" >Into Reading 3.3<br>Pop's Bridge</div><div class="kT-container">Debate<br>Winning an argument</div>
        </div>
        -->
      </div>

    `);
    const kContainer = document.getElementById('k-Container'); 
    attachColorScroll(kContainer); // manually triggers it
    kContainer.style.display = 'block'; 

    const monthsContainer = document.querySelector(".months-container");
    monthsContainer.style.marginTop = "72px"; // on this page it's a container for the lesson links


    document.querySelectorAll("#HBv-BTN").forEach(element => {
      element.addEventListener("click", async () => {
        const value = parseInt(element.textContent.replace(/\D+/g, ''), 10);        
        console.log(value);
        if (!Number.isInteger(value)) return;

        try {
          const response = await fetch('/weekClicked', {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            credentials: 'include',
            body: JSON.stringify({ week: value })
          });

          if (!response.ok) {
            throw new Error(`Server error: ${response.status}`);
          }

          const data = await response.json();
          console.log('Server OK:', data);

        } catch (err) {
          console.error(err);
          toInnerHTML(magSent, `<p>📡 Network Error. 🔌<br>Please check your connection.</p>`);
          adjustFontsize(magSent);
        }
      });
    });
  }, 720);






});


/* The resize event can fire frequently, which can cause performance issues if not handled carefully. You can debounce the resize event so that updateProgressBar is called only once after a resize event completes, instead of being called repeatedly during resizing. */
let resizeTimeout;// Debounced resize event listener

function onResize() {  // prior to start-BTN (Separate into Sentences)
  clearTimeout(resizeTimeout); // Clear the previous timeout
  resizeTimeout = setTimeout(() => { updateProgressBar(kContainer, progressBarL, progressBarR); }, 200);// Delay the update to avoid multiple calls during resizing
  setGlowEffectRx(); // readjusts the line going around magSentCont/msgBox



}
window.addEventListener('resize', onResize);

 /*                 
allParagraphs.forEach(function(kParagraph){
  var text = kParagraph.textContent.trim();
  if (text) {
    kUserTxtAR(obsolete).push(kDent);
      let everyMatch = toArrayK(text);
      //everyMatch = text.match(/(((?:[.,!?”)]*\s?[‘’“”]?\s?([a-z]|\u200C[A-Z])|[‘’“”][A-Z]|’\s?<|([”,]*\s?<\/?span>?\s?[<\w])|(\b|\.)[A-Z]\.|[0-9]\.|\bMr?s\.|\b[DSJM]r?\.?’?)*(\s)*[^.!?’”\u200D]*?)*([.!?’”\u200D]+(<\/span>\s?)?))/g);
      //(would ((?:@\w*\s)(would|may|might)(\s\w+)))
    if (everyMatch) {     
      everyMatch.forEach(function(sentence) {
        kUserTxtAR(obsolete).push(sentence);});}}});
  */ 
function toArrayK(text){ //(?:(?:(?<!,\s)“[^”]+”)?(?:(?:“[^”]+|\.[\w+]|\b\d{1,3}\.\s|(?:[A-Z]\w{0,2}\.)*)[^.!?”\n])+)[.!?’”\s]+
  // text = text.replace(/:<br>/g, '\u200D<br>');  //OF HEARTS.&#x200D; That’s right,
  // text = text.replace(/((?<=<br>)\W?\d+\.)(?<!<br>)/g, '$1\u200C');
  // diamondAR = text.match(/(?:(?:<br><br>(?:\s\u200B){6})|(?:(?:(?:[.,!?)]*\s?[’”]+\s?(?:[a-z]|(?:\w*\.?\s)+(?:says|said|exclaims|exclaimed|replies|replied|responds|responded|adds|added|mutters|muttered|declares|declared|asserts|asserted|suggests|suggested|notes|noted|whispers|whispered|yells|yelled|laughs|laughed|told|tells|thought|thinks)|”\s?(?:고)|\u200C\s\u200C?\u200B?<?[A-Za-z])|[.!?’”]\u200C|[‘’“”][A-Z]|\u200C?\s?<|(?:[”,]*\s?<\/?span>?\s?[<\w])|\.[A-Z]|\.\s?[a-z]|\.,|(?:\b[A-Z]?[b-df-hj-np-tv-z]+\.\s)+|Maj\.|Col\.|Prof\.|No\.|approx\.|\b\d{1,3}\.\d|\.[a-z]{2,4})*\s*(?:[^\.!?\u200D])*?)*(?:[\.!?’”\u200D]+[\)\]]*(?:<\/span>\s?)?)))/g);  
    //  simplified: (?:(?:(?:[.,!?)]*\s?[’”]+\s?(?:[a-z]|(?:\w*\.?\s)+(?:said)))*\s*(?:[^.!?])*?)*(?:[.!?’”]+)) 
    //                                                                                                                                                                                                                                                                                                                                                                                                connects                \u200C[A-Z])       \.\u200C|                 N.B.A|a.m., the 5 a.m. show   Mr.   txt.                                             1. asdf 3.14      ignor ddd.d             
    //text = text.replace(/<br>/g, '\n');
  // original let array = kT.match(/(?:(?:\s+\u200D?)|(?:(?:“[^”]+”\s[a-z]|\b\d{1,3}\.\s?|[.!?”]\u200C|\u200C\s\u200C?\u200B?<?[A-Za-z]|\u200C?\s?<|(?:[”,]*\s?<\/?span>?\s?[<\w])|\.,|\.\s?[a-z]|(?:[A-Z]\w{0,2}(?:<\/span>)*\.)*)*[^.!?”\u200D])*[.!?’”\u200D]+[\)\]]*(?:<\/span>)?)/g);       
  
  //Oct 13: let array = kT.match(/(?:(?:\s+\u200D?)|(?:(?:“[^”]+”\s[a-z]|\b\d{1,3}\.\s?|\u200C\s\u200C?\u200B?<?[A-Za-z]|[.!?”]\u200C|\u200C?\s?<|(?:[”,]*\s?<\/?span>?\s?[<\w])|\.,|\.\s?[a-z]|(?:[A-Z]\w{0,2}(?:<\/span>)*\.)*)*[^.!?”\u200D])*[.!?’”\u200D]+[\)\]]*(?:<\/span>)?)/g);       
                                                                          //           (               ?                )            (    ?     ) (              ?              )                                                                                                 
  //Oct 23: let array = kT.match(/(?:(?:\s+\u200D?)|(?:(?:“[^”]+”,?\s(?:<spa)?[a-z]|\b\d{1,3}\.\s?|[.!?’”)\]\s]+\u200C|\.,?\s?[a-z]|(?:[A-Z](?:<\/span>)?\w{0,2}\.)*)*[^.!?”\u200D])*[.!?’”)\]\u200C\u200D]+(?:<\/span>)?)/g);       

  // Jan 6: (?:\s+‌?)|(?:(?:“[^”]+”,?\s(?:[a-z]|[^.!?”\n‌]+(?:said|say|replied|asked|exclaimed|shouted|stated|whispered|cried|screamed|muttered|sighed|laughed|groaned|noted|wrote)\b))|(?:<span[\w\W]+?<\/span>)|\b\d{1,3}\.\s?|[.!?’”)\]\s]+‍[\n\s]*|\.,?\s?[a-z]|(?:[A-Z]\w{0,2}\.|<span)*[^.!?”\n‌])*[.!?’”)\]‍‌]*\n?
  // Mar 13: (?:\s+‌?)|(?:-\s)?\[\[\?=-?\d+\]\]|\[\[(?:.)+?=-?\d+\]\]|(?:(?:“[^”]+”,?\s(?:[a-z]|[^.!?”\n‌]+(?:said|say|replied|asked|exclaimed|shouted|stated|whispered|cried|screamed|muttered|sighed|laughed|groaned|noted|wrote)\b))|(?:<span[\w\W]+?<\/span>)|\b\d{1,3}\.\s?|[.!?’”)\]\s]+‍[\n\s]*|\.,?\s?[a-z]|\?\s?[=-]\s?|(?:[A-Z]\w{0,2}\.)*[^.!?”\n‌])*[.!?’”)\]‍‌]*\n?
  // Mar 27: (?:\s+‌?)|(?:-\s)?\[\[\?=-?\d+\]\]|\[\[(?:.)+?=-?\d+\]\]|(?:(?:“[^”]+”,?\s(?:[a-z]|[^.!?”\n‌]+(?:said|say|replied|asked|exclaimed|shouted|stated|whispered|cried|screamed|muttered|sighed|laughed|groaned|noted|wrote)\b))|(?:<span[\w\W]+?<\/span>)|\b\d{1,3}\.[^\S\r\n\t]?|[.!?’”)\]\s]‍\s*|\.,?[^\S\r\n\t]?[a-z]|\?\s?[=-]\s?|(?:[A-Z]\w{0,2}\.)*[^.!?”\n‌])*[.!?’”)\]‍‌]*      
  // April 13: (?:\s+‌?)|(?:-\s)?\[\[\?\s+=\s+-?\d+\]\]|\[\[.‌?\s+=\s+-?\d+\]\]|(?:(?:“[^”]+”,?[^\S\r\n\t](?:[a-z]|[^.!?”\n‌]+(?:said|say|replied|asked|exclaimed|shouted|stated|whispered|cried|screamed|muttered|sighed|laughed|groaned|noted|wrote)\b))|\b\d{1,3}\.[^\S\r\n\t]?|[.!?’”)\]\s]‍\s*|\.,?[^\S\r\n\t]?[a-z]|\?\s?[=-]\s?|(?:[A-Z]\w{0,2}\.)*[^.!?”\n‌])*[.!?’”)\]‍]*           
  // April 23: (?:\s+‌?)|(?:-\s)?\[\[\?\s+=\s+-?\d+\]\]|\[\[.‌?\s+=\s+-?\d+\]\]|(?:(?:“[^”]+”,?[^\S\r\n\t](?:[a-z]|[^.!?”\n‌]+(?:said|say|replied|asked|exclaimed|shouted|stated|whispered|cried|screamed|muttered|sighed|laughed|groaned|noted|wrote)\b))|\b\d{1,3}\.[^\S\r\n\t]?|[.!?’”)\]\s]‍\s*|\.,?[^\S\r\n\t]?[a-z]|\?\s?[=-]\s?|(?:\[\[[\s\S]+?]])|([A-Z]\w{0,2}\.)*[^.!?”\n‌])*[.!?’”)\]‍]*
  // May 11: (?:\s+‌?)|(?:-\s)?\[\[\?\s+=\s+-?\d+\]\]|\[\[.‌?\s+=\s+-?\d+\]\]|(?:(?:“[^”]+”,?[^\S\r\n\t](?:[a-z]|[^.!?”\n‌]+(?:said|say|replied|asked|exclaimed|shouted|stated|whispered|cried|screamed|muttered|sighed|laughed|groaned|noted|wrote)\b))|\b\d{1,3}\.[^\S\r\n\t]?|[.!?’”)\]\s]‍\s*|\.,?[^\S\r\n\t]?[a-z\/]|\?\s?[=-]\s?|(?:\[\[[\s\S]+?]])|(?:[A-Z]\w{0,2}\.)*[^.!?”\n‌])*[.!?’”)\]‍]*
  /* 
  [.!?’”)\]\s]+‍[\s]*      - ignores if there is docking after a punctuation
  \b\d{1,3}\.[^\S\r\n\t]? - ignores 1. text  2. text  3.text
  \.,?[^\S\r\n\t]?[a-z]   - ignores file names pic.jpg and e.g., There are many programming languages, e.g., python, JavaScript, and Ruby. 
  (?:[A-Z]\w{0,2}\.)*     - ignores -  He., N.B.A.  the U.S., U.K., E.U., and A.U.  or data files
  “[^”]+”,?[^\S\r\n\t]    - quotes must be followed by a space, if it's \s then the following list would be connected
  (?:\[\[[\s\S]+?]])      - brackets for vocabList still exists at this point so it ignores everything in opening and closing double brackets 
  \/ in [a-z\/]           - ./ needs to get ignored so that sun_transparent.gif will be added to the DOM. At first it was src=". in \?\s?[=-]\s?|src=".|(?:\[\[[\s\S]+?]])

  (?:-\s)?\[\[\?\s+=\s+-?\d+\]\]|\[\[.?\s+=\s+-?\d+\]\] - captures [[x=-42]]
  instead of /s which accepts all whitespace, [^\S\r\n\t] only accepts a space
    -\s) : capture the minus sign in long division
  |[.!?’”)\]\s]+\u200D\s*| - connects punctuation followed by text (no whitespace)  i.e. La la la la...something and noodles with string 

  */
  console.log("ARRAYK");
  let array = text.match(/(?:\s+\u200C?)|(?:-\s)?\[\[\?\s+=\s+-?\d+\]\]|\[\[.\u200C?\s+=\s+-?\d+\]\]|(?:(?:“[^”]+”,?[^\S\r\n\t](?:[a-z]|[^.!?”\n\u200C]+(?:said|say|replied|asked|exclaimed|shouted|stated|whispered|cried|screamed|muttered|sighed|laughed|groaned|noted|wrote)\b))|\b\d{1,3}\.[^\S\r\n\t]?|[.!?’”)\]\s]+\u200D\s*|\.,?[^\S\r\n\t]?[a-z\/]|\?\s?[=-]\s?|(?:\[\[[\s\S]+?]])|(?:[A-Z]\w{0,2}\.)*[^.!?”\n\u200C])*[.!?’”)\]\u200D\u200C]*/g);        
  //                                                                                 connects multiple \n  i.e  I run./u200C\n\n                                  * If >연결< was put at end of text \u200C will prevent hili from flowing out of the text                                                              
    // ideal:               (?:(?:\s+#?)|(?:(?:“[^”]+|\b\d{1,3}\.\s|@\s@?%?<?[A-Za-z]|[.!?”]@|@?\s?<|(?:[”,]*\s?<\/?span>?\s?[<\w])|\.,|\.\s?[a-z]|(?:[A-Z]\w{0,2}(?:<\/span>)*\.)*)*[^.!?#])*[.!?’#]+[\)\]]*(?:<\/span>)?)
    // older version with look ahead and look behind when there are quotes:                  (?:(?:\n*\s+)|(?:(?:(?<!,\s)\s*“[^”]+”(?!\s*“))?(?:(?:“[^”]+|\b\d{1,3}\.\s|200C\s200C?200B?<?[A-Za-z])|[.!?”]200C|200C?\s?<|(?:[”,]*\s?<\/?span>?\s?[<\w])|\.,|\.\s?[a-z]|(?:[A-Z]\w{0,2}\.)*)+[^.!?”])+[.!?”]+[\)\]]*(?:<\/span>\s?)?)
  //diamondAR = diamondAR.map(item => item.replace(/\n/g, "<br>"));                                                                       w{0,2}\.))*[^.!?’”\n])*[.!?’”)\]]*\n?        
    // kT = kT.replace(/span class="/g, '<span class="');
  /*   

  let array = kT.match(/(?:\s+\u200C?)|(?:(?:“[^”]+”,?\s(?:[a-z]|[^.!?”\n\u200C]+(?:said|say|replied|asked|exclaimed|shouted|stated|whispered|cried|screamed|muttered|sighed|laughed|groaned|noted|wrote)\b))|\b\d{1,3}\.\s?|[.!?’”)\]\s]+\u200D[\n\s]*|\.,?\s?[a-z]
  |\?\s?[=-]\s? ========= ignores '?' for embedded Q&A in simplify so the A is captured with the Q, everything including the double brackets will be captured as long as it ends in '.]]' which should always happen when answering a question.
  |(?:[A-Z]\w{0,2}\.)* == ignores Mr. Mrs. etc.
  [^.!?”\n\u200C])*[.!?’”)\]\u200D\u200C]*\n?/g);        
  */
  return array;        
                    //(?:(?:<br><br>(?:\s){6})|(?:(?:(?:[.,!?)]*\s?[’”]+\s?(?:[a-z]|(?:\w*\.?\s)+(?:says|said|exclaims|exclaimed|replies|replied|responds|responded|adds|added|mutters|muttered|declares|declared|asserts|asserted|suggests|suggested|notes|noted|whispers|whispered|yells|yelled|laughs|laughed|told|tells|thought|thinks)|”\s?(?:고)|u200C\s<?[A-Za-z])|[‘’“”][A-Z]|\s?<|(?:[”,]*\s?<\/?span>?\s?[<\w])|\.[\w]|\.\s?[a-z]|\.,|(?:\b[A-Z]?[b-df-hj-np-tv-z]+\.\s)+|Maj.|Col.|Prof.|No.|\b.\d{1,2}\.?|approx.|.[a-z]{2,4})*\s*(?:[^.!?])*?)*(?:[.!?’”]+[\)\]]*(?:<\/span>\s?)?)))                // (.*?[.!?\u200D])<\/span>[.!?’”\u200D]                                                                                   
}    
                   // [^rb<>]                                                                                                                                                                                                                                                                                                                                                                                              // disconnects: diamondAR = text.match(/(?:(<br><br>( \u200B){6})|(((?:[.,!?”)]*( )?[‘’“”]?( )?([a-z]|\u200C[A-Z])|[‘’“”][A-Z]|’( )?<|([”,]*( )?<\/?span>?( )?[<\w])|(\b|\.)[A-Z]\.|[0-9]\.|\bMr?s\.|\b[DSJM]r?\.?’?)*( )*[^.!?’”\u200D]*?)*([.!?’”\u200D]+(<\/span>( )?)?)))/g);                                                                                                                                                                            
// optimizing in progress: (?:(<br><br>( u200B){6})|(((?:[.,!?)]*\s?[’”]*\s?([a-z]|\s[A-Za-z]+\s(?:says|said|exclaims|exclaimed|replies|replied|responds|responded|adds|added|mutters|muttered|declares|declared|asserts|asserted|suggests|suggested|notes|noted|whispers|whispered|yells|yelled|laughs|laughed)|”\s?(?:고)|u200C\su200C?u200B?<?[A-Za-z])|[‘’“”][A-Z]|u200C?\s?<|([”,]*\s?<\/?span>?\s?[<\w])|(\b|\.)[A-Z]\.|\b[0-9]{1,2}\.|\bMr?s\.|\b[DSJM]r?\.?’?)*\s*[^.!?’”u200D]*?)*([.!?’”u200D]+(<\/span>\s?)?)))

//start();

/*
        The typical appeals process for a convicted defendant in New York state can take almost a year or more. Donald Trump’s lawyers could try to delay the process further after the former president was convicted on 34 felonies on Thursday.

The New York law, any appeal of the verdict​ comes after sentencing. Trump’s sentence date is currently scheduled for July​ 11 100 A.D. As a defendant, Trump then has 30 days to file a notice of appeal. 

Once that notice is filed Trump’s legal team would typically have six months to complete procedural requirements like filing their appellate argument as well as filing other relevant documents like the trial transcripts.

Once the appeal is fully submitted, attorneys for the Manhattan District Attorney’s office would likely be given approximately 30 days to file a response.

Website needs: novel idea, working code, customers, commitment 

Current facts: need more time to learn coding          vs.    already knows how to make app, accept credit cards, place ads on Google(+2)
                                12 hrs a day (+2)      vs.    4 hrs a day (+1)
                          made code that works (+2?)
      already know how to get teaching content (+2)
      willing to do this for the rest of my life(+1)   vs.    a few years?
            not willing to invest at this moment       vs.    might have capital (+1)
                    my title brings credibility (+2)
                    have over 500 phone numbers (+1)

      both have no experience launching a business, running a website/app, finding and managing customers
Value: Can only be done by one party
       My idea derived from my first hand experience teaching Korean students, knows students' shortcomings, know what works and what don't, more ideas to come, intimate knowledge of the code, have over 500 phone numbers

potential: Think of successful marketing techniques
unexpected events: Can get more code written than me, might need more partners(friend has thousands of phone numbers), one party gives up and later the website becomes a huge success

part-time:   under 1 million         
min.wage           1 million                  4 - 10 million
levels: average salary 2.5 million           10 - 20 million
middle class 5 million                       20 - 40 million
upper middle class: 10 million               40 - 100 million
upper class: 25 million 
millionaire: 1 billion ($1 million)


maybe start a business to get experience while I keep researching and developing the website?
*/
//document.body.style.cursor = `url(/Images/rocket0.cur) 2 2, auto`;
//const frames = ['/Images/rocket1.cur', '/Images/rocket2.cur', '/Images/rocket3.cur', '/Images/rocket4.cur', '/Images/rocket5.cur'];
//document.body.style.cursor = `url(Images/rocket0.cur) 2 2, auto`;
document.body.style.cursor = `url(https://local.app/rocket0.cur) 2 2, auto`;

//const frames = ['Images/rocket1.cur', 'Images/rocket2.cur', 'Images/rocket3.cur', 'Images/rocket4.cur', 'Images/rocket5.cur'];
const frames = [
  'https://local.app/rocket1.cur',
  'https://local.app/rocket2.cur',
  'https://local.app/rocket3.cur',
  'https://local.app/rocket4.cur',
  'https://local.app/rocket5.cur'
];


let i = 0;
let animationInterval = null;
let idleTimeout = null;
function startCursorAnimation() {
  if (animationInterval) return; // Already animating 
  i = 0;// Reset frame index to restart from frame 0
  animationInterval = setInterval(() => { //setInterval(fn, delay) runs a function repeatedly at a fixed interval
    document.body.style.cursor = `url(${frames[i]}) 2 2, auto`; //2 2 is the hotspot
    i = (i + 1) % 5; //5 is frames.length;
  }, 96);
}

function stopCursorAnimation() {
  clearInterval(animationInterval);  //stops the repeated execution of animationInterval
  animationInterval = null;
  //document.body.style.cursor = `url(/Images/rocket0.cur) 2 2, auto`;
  //document.body.style.cursor = `url("https://local.app/rocket0.cur") 2 2, auto`;
  document.body.style.cursor = `url(https://local.app/rocket0.cur) 2 2, auto`;

}


document.addEventListener('mousemove', () => {// Mouse movement resets the timer and starts the animation
  startCursorAnimation();     //clearTimeout(idleTimeout) is canceling the previous timeout, not the one you're about to set.
  clearTimeout(idleTimeout); //clearTimeout(idleTimeout) cancels that one-time function(idleTimeout) before it runs, if it hasn’t already.  A new 360ms countdown is scheduled
  idleTimeout = setTimeout(stopCursorAnimation, 360); // Stop if idle for 360ms // setTimeout(fn, delay) runs a function once after a delay of 360 ms).
});                                   //If the mouse keeps moving, the countdown is reset over and over, and stopCursorAnimation() never runs.

document.addEventListener('contextmenu', e => e.preventDefault());
document.addEventListener('dblclick',    e => e.preventDefault());
document.addEventListener('dragstart',   e =>  { if (e.target.tagName === 'IMG')  { e.preventDefault(); }}); // prevents user from dragging an image.

magSentStats.addEventListener('mouseup', () => {
  magSentStatsBoo = !magSentStatsBoo;
  if (magSentStatsBoo) styleMagSentStats(sentNow);
  else magSentStats.textContent = '';
  
  //else magSentStats.replaceChildren();
  /* const p = magSent.querySelector('p');
      if (p) magSent.removeChild(p); */
  /*     const span = document.querySelector(`span[data-index="${sentNow}"]`);
  magSentL.innerHTML = span.getAttribute('data-sentence');


  const spans = document.querySelectorAll('span[data-index]');

  const lastSpan = spans[spans.length - 1];

  const lastDataIndex = lastSpan.getAttribute('data-index');
  magSentL.innerHTML = lastDataIndex; */
});

magSentL.addEventListener('mouseup', (e) => {
  if (e.button === 0){
    if (magSentLclick === 0){
      magSentLclick++;
      const leftPicCopy = leftPic !== null ? leftPic:leftPics[sentNow/2];
      leftPic = null; // displayLeftpic() will set leftPic back to what's stored in leftPicCopy. This is done to bypass the check(if (receivedFileToDisplay === leftPic) return;) of skipping the function if the current file(leftPic) is the same as the parameter.
      displayLeftPic(leftPicCopy);
    }
    else if (magSentLclick === 1){
      magSentLclick--;  
      leftPic = null;  // without this, if magSentL had a vocab pic, was turned off, traversed sentence, turned on magSentL, the same vocab pic would show up
      magSentL.replaceChildren();
    }   
  }
});

magSentR.addEventListener('click', (event) => {
  if (event.button !== 0 || !kT) return; //  !kT means text is not loaded so it's at library/home
  if (magSentRclick === 0){
    magSentRclick++;
    //displayRightPic(rightPics[sentNow/2]);  
    /*                const fileNameNow2 = 'surprise.png';
                  const imgElmMagR = Object.assign(document.createElement('img'), { id: 'magSentR-img', alt: 'picture'});
                  magSentR.appendChild(imgElmMagR);
                  displayImage(fileNameNow2, imgElmMagR.id);  */
    displayRightPic(rightPics[sentNow/2]);
  }
  else if (magSentRclick === 1){
  magSentRclick--;  
  rightPic = null;
  magSentR.replaceChildren();
  }   
});

magSent.addEventListener('mousedown', (event) => { 
  if (event.target.closest('.vocab'))  { 
    attachFloatTagDOWN(event, Origin.magSent); 
  }
});

magSent.addEventListener('mouseup', (event) => { 
  if (event.target.closest('.vocab'))  { 
    traverseOrToggleUP(event, Origin.magSent); 
  }
});

kUserInput.addEventListener('mousedown', (event) => { 
  if (event.target.closest('.vocab') || event.target.closest('.color') || event.target.hasAttribute('data-index'))  { /* .color so if it was clicked, sentence gets hili */
    attachFloatTagDOWN(event, Origin.pElement); 
  }
});

kUserInput.addEventListener('mouseup', (event) => { 
  if (event.target.closest('.vocab') || event.target.closest('.color') || event.target.hasAttribute('data-index'))  { 
    traverseOrToggleUP(event, Origin.pElement); 
  }
  //if (event.button === 2 && !event.target.closest('.vocab')) magButton();// right click will turn on magButton unless it is a .vocab
  //magBTN.click();   -> qBTN.clik() -> magBTN.clik()    doesn't wait for other cliks to finish
});

const current = document.getElementById('current');
const next = document.getElementById('next');
msgBox.addEventListener('mouseleave', () => { 
  /* const glow = msgBox.querySelector('.glow-container');
  glow?.style.setProperty('--animation-speed', '1200ms'); */
  msgBox.querySelector('.glow-container')?.style.setProperty('--animation-speed', '1440ms');
  }); 

  let isScrolling = false;
  msgBox.addEventListener('wheel', (event) => {
    if (floatTagKt) floatTagKt.remove();
    if (isScrolling || !msgBoxBoo) return;
    isScrolling = true;
    
    const sentences = teacherQAarr[sentNow/2];
    const numberOfsentences = sentences.length;
    //let index = 0;
    if (event.deltaY < 0){
      index++;
      animateToNextSentence('up');
    }
    else if (event.deltaY > 0){
      index--;  
      animateToNextSentence('down');
    }  
    
    function animateToNextSentence(directionScrolled) {
      current.className = '';
      next.className = '';
      index = (index + numberOfsentences) % numberOfsentences; //wrap around    '+ numberOfsentences' prevents index from being negative

      toInnerHTML(next, `<p>${lightUpAll(sentences[index], sentNow/2, null)}</p>`);
      adjustFontsize(next);  // Adjust while still hidden
      next.style.opacity = '1'; /* if set to 0, colored sentence won't slide after a while */

      //void next.offsetWidth; // Force reflow
      requestAnimationFrame(() => {   //needed for sliding animation of sentences
        current.className = '';
        next.className = '';
        if (directionScrolled === 'up') {
          current.classList.add('slide-up-current');
          next.classList.add('slide-up-next');
        } else {
          current.classList.add('slide-down-current');
          next.classList.add('slide-down-next');
        }
      });
      current.addEventListener('animationend', () => {
        toInnerHTML(current, `<p>${lightUpAll(sentences[index], sentNow/2, null)}</p>`);
        adjustFontsize(current);
        current.style.opacity = '1';
        next.style.opacity = '0';
        // Clear any previous animation classes, if not the previous sentence won't disappear and the current sentence will be on top of it
        current.className = '';
        next.className = '';
      }, { once: true });  // prevents attaching multiple listeners. It's automatically removed after it has been called once
    }

    setTimeout(() => {
      isScrolling = false;
    }, 720);
  }, { passive: true });  //{ passive: false } needed to use preventDefault() on a wheel event, which prevents document form shifting. Otherwise, the browser ignores the preventDefault() silently.
      /*passive: true  You're telling the browser: “I will not call event.preventDefault() in this listener.”
      This allows the browser to optimize performance, especially for scrolling, because it doesn't need to wait to see if you're going to cancel the event. */

  msgBox.addEventListener('mousedown', event => attachFloatTagDOWN(event, Origin.msgBox));
  msgBox.addEventListener('mouseup', (event) => { //toggle vocab or let teaxt appear/disappear
    if (!kT) return; // kT is undefined which means user is in library/home and not reading the text

    if (event.target.closest('.vocab'))  { 
      traverseOrToggleUP(event, Origin.msgBox); 
      return;
    }
    const current = document.getElementById('current');
    msgBoxBoo = !msgBoxBoo;
    if (msgBoxBoo){
      msgBox.querySelector('.glow-container')?.remove();
      displayAll(); 
      // toInnerHTML(current, `<p>${lightUpAll(sentences[newIndex], newIndex, false)}</p>`);
      // index = 0;
    }
    else { //rx="19.2px curves corners
      msgBox.insertAdjacentHTML('afterbegin', `
      <svg class="glow-container" style="--animation-speed: 0ms;">
        <rect pathLength="100" class="glow-blur" rx="19.2px"></rect> 
        <rect pathLength="100" class="glow-line" rx="19.2px"></rect>
      </svg>
      `);
      current.textContent = '\u00A0';  // using '' would not let text with color disappear
      next.textContent = '\u00A0';
      displayAll(); 
    }
  });


function start(){ 
  if (!kContainer) {
    toInnerHTML(magSent, `<p>Please check out a reading material</p>`);
    adjustFontsize(magSent);
    return;
  }
  kContainer.removeEventListener('scroll', attachColorScroll); /* no longer needed, needed it to scroll during admin inputting text */
  window.removeEventListener('resize', onResize);
  toInnerHTML(magSent, '');
  magSentR.replaceChildren(); //kT loaded so take out search <input> and <button>
  magSentStatsBoo = false; //It could be set to true it magSentStats was clicked before text was displayed, so default should always be false as soon as text gets displayed.
  magSent.appendChild(magSentStats);
  //kT = document.getElementById("k-ContainerNoGrid").value;
  kT = `[[ ㅁ farm.png - 1-6, 7, 8, 12-15, 58-69]] [[ㅁplowing fields.png = 9]] [[ㅁStone Fox.png - 15-18 ]] [[ㅁdetermined.png - 19-23 ]] [[ㅁstrongbox.png - 10-14]]
[[neutral.png     -   2ㅁ]]                                                                
[[sad.png          -   4-6, 22, 25-28ㅁ]]
[[proud.png      -  3, 21, 41-43 ㅁ]]
[[sad.png           -  9-13, 38-40ㅁ  ]]
[[worried.png        - 14-19ㅁ]]
[[surprised.png       -   23-24, 29-35 ㅁ  ]]
[[skeptical.png     - 36, 37ㅁ]]
[[determined.png      -  7-8ㅁ]]
[[happy.png        -  23-26ㅁ]]

  [[S1. Testing. S3. How is Willy's N.B.A. [[relationship.png - (noun)connection with others where you know them personally}enemyenemyenemyenemyenemyenemyenemyenemyenemyenemyenemyenemyenemyenemyenemy{]] with his [[grandfather on his father's side - (noun)a person's parent's father}ancestorancestorancestorancestorancestorancestor_a_b_c_d_e{]]?연결 How do you know?       He has a good relationship because it says that they always took care of each other.
  S4. Why didn't 끔Grandfather 이get out of bed? He was very worried about something.     Is it something serious?연결 How do you know? Yes, because Grandfather lost the will to live.
  S5.  Her [[drived(#1#).jpg - (noun)strong feeling that pushes her]motivation, determination[>한글<}antonym{]] to succeed will [[drived(#2#) - (verb)powerfully move]한글[>take, catapult<}한글{]] her team to victory. 
  S9. Why does Willy do farm [[chores - (noun)work}errands{]] when his grandfather is sick?연결 Shouldn't he be [[taking care of - (present continuous)nursing}neglecting, not caring about{]] his grandfather? There is a lot of work to do on the farm such as plowing, picking, cleaning, packaging, planting, ordering, especially during harvest and it has to be done quickly before the cold weather freezes the harvest, so Willy was doing Grandfather's work. Did you know that 200 years ago 90% of the people were farmers?
  ]]



[[ㅁtownspeople laughing.jpg - 22]]                   [[pried.gif - (verbverbverbverbverbverb3) used a metal stick to force}?{]] open the [[latch.png - (noun - something used to keep something closed)lock}opening, gap, to keep closed{]].

                  I [[have to - must]], 끔without a doubt, 일finish today. I [[have to - must]](testing) finish today. Willy had [[things: loads and tons of issues - lots of problems]] was a [[determined.png - (adj.)never-giving-up}weak-minded{]] young boy who lived with his grandfather on a quiet farm in the [[rugged plains(toon).jpg - (rugged: adjective_plains: noun) flat parts of land with small rough hills}smooth valleys or flat meadows{  ]] of Wyoming. The two of them had always taken care of each other, but one morning, something changed. Willy [[rugged plains.jpg - (adjective, noun adjective, noun adjective, noun adjective, noun)flat parts of land with small rough hills}-lush valleys_-fertile fields -rolling hills{]] his grandfather lying in bed, his eyes open but his spirit seemingly far away. He wouldn’t speak, wouldn’t eat, wouldn’t even move. The doctor came to visit and shook his head [[solemnly - (solemnly: adverb They solemnly came back from church._solemn: adjective_It was a solemn day what the people returned to their flooded neighborhood.)seriously}Playfully

                    Jokingly
                    
                    Lightly
                    
                    Cheerfully
                    
                    Flippantly
                    
                    Carelessly {]]—there was no sickness to be cured, no fever to break. The old man had simply lost the 끔will to live. Her [[drived(#1#).jpg - (noun)strong feeling that pushes her]motivation, determination[>한글<}antonym{]] to succeed will [[drived(#2#) - (verb)powerfully move]한글[>take, catapult<}한글{]] her team to victory. 

                  Willy didn't want to and didn't have to so he refused to let [[that - his grandfather not wanting to live]] happen. He took over the farm chores, feeding the chickens, tending the potatoes, and harnessing his faithful dog, Searchlight, to help him plow the fields. But as he sorted through his grandfather’s papers, he made a terrible discovery. They owed five hundred dollars in taxes, and if they couldn’t pay, they would lose the farm. Desperate to save the only home they had ever known, Willy searched for a way to earn the money—until he heard about the great dogsled race. The prize? Exactly five hundred dollars.
                  
                  It was a fool’s hope. The race was dominated by seasoned competitors, men who had trained their dogs for years. And among them was Stone Fox, the legendary Native American racer who had never lost. Stone Fox raced not for glory, but for something far greater—he was using his winnings to buy back the land that had been taken from his people. He was a man of few words and many victories, and Willy knew that beating him was all but impossible.
                  
                  But Willy had something stronger than experience—he had heart. He and Searchlight trained tirelessly, racing across the snow-covered fields, preparing for the greatest challenge of their lives. When the day of the race arrived, the townspeople chuckled at the sight of a mere boy among the powerful men and their mighty sled dogs. Yet as the race began, Willy and Searchlight surprised everyone. They ran faster and faster, keeping up with racers who should have left them far behind.
                  
                  The race was neck and neck, with Stone Fox leading and Willy close behind. As the finish line came into view, Searchlight gave everything she had, her paws pounding the snow, her breath coming in short, determined bursts. She was going to do it—she was going to win. But just as she took her final stride, she collapsed. Willy fell to his knees beside her, but there was no saving her—his beloved Searchlight was gone.
                  
                  A hush fell over the crowd. Stone Fox, who had fought and won countless races, looked at the small boy kneeling beside his fallen friend. And then, without a word, he did something no one expected. He stopped. He turned to face the other racers and raised a hand. "Anyone who moves," he said, "I shoot."
                  
                  No one dared to cross him. Stone Fox bent down, gently lifted Searchlight’s body, and placed her on the sled. He looked at Willy, his eyes filled with something deep and unspoken, and then he stepped aside. With tears in his eyes, Willy took the sled’s reins and walked across the finish line, claiming the prize—not in triumph, but in sorrow.
                  
                  The farm was saved, but the victory felt hollow. Yet as Willy returned home, his grandfather—who had spent weeks locked in silence—finally spoke. He reached out, pulled Willy close, and for the first time in what felt like forever, he smiled.
                  
                  It was a bittersweet ending, but one that would never be forgotten. Willy had lost his best friend, but he had gained something even greater—a reminder that love, sacrifice, and kindness could change the world.
                  
                  
                  He [[relaxed(verb).png - (adjective)felt calm and comfortable]] when he saw his [[r♪elaxed(adj).png - (adjective)without-any-worries and comfortable looking]] dog.
                  He [[pried.gif - (verb) used a metal stick to force]] open the [[latch.png - (noun)lock]].
                  They will [[collaborate - work together]] soon.

                  I met Dr. Smith. He is a cardiologist. He said, "Wait!연결 Are you serious?" She paused...연결 then continued speaking.  The price is $3.50.끊김 Visit www.example.com.  Wow!!연결 😲 That’s amazing!
 
                  Winter has arrived, and Charlie Bucket's family is struggling more than ever. The cold weather makes their situation worse, as they cannot afford to heat their small house properly. The entire family—Charlie, his parents, and his four grandparents—endures freezing temperatures and extreme hunger.

Charlie’s father, Mr. Bucket, works at a toothpaste factory, screwing caps onto tubes of toothpaste. However, his meager salary is barely enough to buy food for the family. The price of food has risen, making their limited budget stretch even less. Their meals are mostly bread and margarine, with boiled potatoes and cabbage making occasional appearances. Despite this, Charlie’s parents try to give him as much food as possible, often going hungry themselves.

As Charlie grows weaker from hunger, his body begins to thin, and his energy diminishes. The one thing that keeps his spirits up is his daily walk to school, where he passes Wonka’s famous chocolate factory. The sight of the factory and the smell of melting chocolate torment him, making his hunger even more unbearable.

One day, as he walks home from school, Charlie finds a silver coin (a fifty-pence piece) buried in the snow. The sight of it fills him with excitement, as he realizes he can finally buy something to eat. This moment sets up the events of the next chapter, where he will enter a shop and buy a chocolate bar—leading to the discovery of the Golden Ticket that will change his life.
[[enhance - (verb)have better]improve[}Diminish, Reduce, Weaken, Lower, Impair, Decrease, Undermine, Degrade{]] 
One of the main advantages of [[  
                                  urban agriculture.webp  
                                  - (noun,_adj_ective)city farming
                                  ]vertical or indoor farming[
                                  >도시 농업<
                                  }rural_agriculture,_traditional_farming{ 

                              ]] is its ability to [[provide - (verb)give>제공하다<}withold, deprive, densely 
                                                                                   거부하다, 차단하다, 박탈하다{]] fresh produce to city dwellers.
                  
                  As the [[global population.webp - (adjective, noun)number of people in the world]world community or inhabitants[ }local minoritylocal minoritylocal minoritylocal minoritylocal minoritylocal minoritylocal minoritylocal minoritylocal minoritylocal minority or regional subsetlocal minority or regional subsetlocal minority or regional subsetlocal minority or regional subset_local minority or regional subsetlocal minority or regional subsetlocal minority or regional subsetlocal minority or regional subsetlocal minority or regional subset_local minority or regional subsetlocal minority or regional subsetlocal minority or regional subsetlocal minority or regional subsetlocal minority or regional subset_local minority or regional subsetlocal minority or regional subsetlocal minority or regional subsetlocal minority or regional subset{]] continues to grow, [[urban areas.webp - (adj., n.)places with many people and buildings]cities, large towns[>도시 지역<}countryside, farmland{]] face increasing challenges in food production and [[distribution - (noun)sending things like food to people}collection, accumulation{]]. One innovative solution to this problem is urban agriculture, a practice that involves growing food within city environments. This method of farming can take many forms, including rooftop gardens, hydroponic systems, and vertical farming. By utilizing available urban space, proponents argue that urban agriculture can improve food security, reduce environmental impact, and [[enhance - (verb)have better]improve[}test to see what happens when there is no space to the right{]] community well-being.

      One of the main advantages of [[urban agriculture.webp - city farming]vertical or indoor farming[>도시 농업<}rural agriculture, traditional farming{]] is its ability to provide fresh produce to city dwellers. Traditional agriculture often requires transporting food over long distances, which leads to nutrient loss and higher carbon emissions. By contrast, food grown in urban environments can be harvested and consumed within the same day, ensuring better nutritional value while reducing transportation costs and pollution. Additionally, locally grown food can be more affordable because it eliminates the expenses associated with long-distance supply chains.

      Another benefit of urban agriculture is its potential to mitigate environmental problems associated with modern farming. Large-scale agriculture is a major contributor to deforestation, water pollution, and soil degradation. In contrast, to urban farming methods like hydroponics and aquaponics use significantly less water and do not require large areas of land. Furthermore, green spaces created by urban gardens can help absorb carbon dioxide, reduce urban heat islands, and improve air quality, leading to healthier living conditions in densely populated areas.

      Despite these advantages, [[urban agriculture.webp - (-urban: adjective    
                                                                -agriculture: noun) city farming]vertical or indoor farming[>도시 농업<]] also faces several challenges. Limited space is a primary concern, as most urban environments lack the vast tracts of land necessary for large-scale farming. Additionally, urban soil may be contaminated with pollutants, requiring extra precautions before planting. There are also regulatory barriers in many cities, where [[zoning laws - (zoning: adj._laws: noun)rules that control how land can be used}land use freedom, unrestricted land use{]] and building codes may restrict farming activities. Finally, the initial investment for high-tech farming solutions such as vertical farms can be substantial, making it difficult for small-scale farmers to participate.

      In conclusion, urban agriculture presents a promising approach 끔to [[address.webp - (verb)understanding and doing something about]] food security and environmental concerns in cities. While there are obstacles to its widespread adoption, technological advancements and supportive policies may help overcome these barriers. As cities continue to expand, the integration of agriculture into urban planning may become an essential strategy for sustainable development.
      He [[relaxed - (adjective)felt calm and comfortable]] when he saw his [[r♪elaxed - (adjective)without-any-worries and comfortable looking]] dog.

      [[Q1. [[pried.gif - (v.)used a metal stick to force]syn.[>갈취하다<}ant.{]] What is challenges the main purpose of the [[
          challenges.png
          - (noun)things that is hard to do which is
          ]difficulties, obstacles, hardships, issues[
          > 문제점들, 도전 과제들, 어려움들 <
    }Q1 qtext advantages, benefitsqtext advantages, benefitsqtext advantages, benefitsqtext advantages, benefitsqtext advantages, benefits{]] passage?  Answer: The main purpose of the argument is...
    a)sdfsdf                  e)<span style="color:blue;">sdfsdf</span>
    b)sf d                      f)sdfsdf
    <!-- c)  afsd af df          g)sdfsdf
    d)  sfsdfsdfsdfsd    h)sdfsdf -->A}  To|argue     that    urban       agriculture is          more              effective    than          traditional farming ]explained in English for Q1 multiple choice A. The cows like to sleep because they have to live[   >질문 일의 멀티플 초이스에이를 한글로 설명하는 문장입니다.<
    B} To|discuss   the|>>>benefits    and         challenges  of                urban<<<        agriculture
    C} To|explain   how     hydroponic  farming     is          >>>revolutionizing<<<   agriculture
    D} @To   criticize zoning  laws        that        limit       urban             farming
    @} To|discuss//To|explain//To|argue   the|benefits    and         challenges  of                urban agriculture
    #} 68,72,76 ]]

    
    [[Q2. The [[pried.gif - (v. to use force)used a metal stick to force]syn.[>그는 먼저  <}having to gently open{]] box is the main purpose of which [[
                                                                          challenges.png
                                                                          - (noun)things that is hard to do which is
                                                                          ]difficulties, (obstacles: (hardships,; issues-[
                                                                          > 문제점들, 도전 과제들, 어려움들 <
                                                                          }advantages, benefits{]] in the passage?  Answer: The main purpose of the argument is...
        a)sdfsdf                  e)sdfsdf
        b)sf d                      f)sdfsdf
        <!-- c)  afsd af df          g)sdfsdf
        d)  sfsdfsdfsdfsd    h)sdfsdf -->
        A} He has >>>to|argue     that    [[u♪rban       agriculture(1).webp - farming in cities]] is          more              effective<<<    than           >>>traditional<<< farming ]syn.[>장점에 대해 이야기하다가 나중에 단점을 언급합니다. _그는 장점 두 개와 단점 하나를 언급했습니다그는 먼저 장점에 대해 이야기하다가 나중에 단점을 언급합니다_. 그는 장점 두 개와<
        B} @He|tries|to quickly >>>discuss   the|[[practical benefits - (noun testing..)good or having to possess positive things to relax}antonym testing{]]<<<    and         >>>challenges<<<  of                urban<<<        agriculture . 
           ]He first starts of talking about the benefits and then later mentions disadvantages. He mentioned 2 advantages and 1 disadvantage.
            He first starts of talking about the benefits and then later mentions disadvantages. He mentioned 2 advantages and 1 disadvantage.[
           >그는 먼저 장점에 대해 이야기하다가 나중에 단점을 언급합니다. _그는 장점 두 개와 단점 하나를 언급했습니다그는 먼저 장점에 대해 이야기하다가 나중에 단점을 언급합니다_. 그는 장점 두 개와 단점 하나를 언급했습니다_. 그는 장점 두 개와 단점 하나를 언급했습니다_. 그는 장점 두 개와 단점 하나를 언급했습니다.<
        C} He has to >>>[[explain  h  ow he has to check extreme hydroponics farming and might want to proceed or succeed - (n)끔growing plants in sand, gravel, or liquid}antonym testing how wide it can be{]]<<<       is          >>>checkingStests<<<   agriculture  ]syn.[>한글<
        D}>>>He has to   [[criticize - (express opinions which can hurt feelings)show how he feels (usually in an unhappy way) about}words with opposite meaning{]]<<< zoning  >>>laws         that   has<<< to really and significantly >>>limit       urban farming .<<<
        @} To//In|orders|to discuss//has   the|benefits    and         challenges  of                urban agriculture//farming .
        #} 8-10]]

        [[Question 3. According to the passage, why is [[urban agriculture.webp - (urban:_adjective_agriculture:_noun_urbanization:_noun_urbanized:_(adjective)) 
                                                                                       growing food and raising animals near cities or towns
                                                                                       ]city farming[   >도시 농업<    
                                                                                      }-rural_agriculture_-tr_aditi_onal_farming_-commercial_farming{  ]] [[considered.jpg - (verb(past participle))thought to be]seen as[>여겨진다<}antonyms: blahblah{]] environmentally friendly?A} Itf eliminates the need for all fertilizers and pesticides
        B} Its increases deforestation rates by expanding farming areas
        C} @It uses less water and helps absorb carbon dioxide
        D} Iat completely replaces traditional farming methods
        @} It uses less water and helps absorb carbon dioxide]]


        [[4. The word "mitigate" in paragraph 3 is closest in meaning to:
        A} RE D 
        B} @lonooogword R
        C} reallyloooooongword M O N
        D} extremelyverylongword E L I M
        @} RE D ]]
        [[5. The word "mitigate" in paragraph 3 is closest in meaning to:
        A} word E X 끔A G G E R A T E
        B} lonooogword R E D U C E
        C} @reallyloooooongword M O N I T O R
        D} extremelyverylongword E L I M I N A T E pneumonoultra|microscopicsilico|volcanoconiosis
        @} R E D U C E]]
        [[
        Q6.What are some [[
        challenges.png
        - (noun)things that is hard to do which is
        ]difficulties, (obstacles), (hardships,) issues[
        > 문제점들, 도전 과제들, 어려움들 <
        }advantages, benefits, convenience, comfort{]] mentioned in the passage [[in regards to.jpg - (verb)related or connected to]regarding, concerning[}anytonym check{]] urban agriculture?
        [[One of the challenges is - (paraphrase)In regards to urban agriculture, one of the challenges is ]A challenging aspect of urban agriculture is[   >도전 과제 중 하나는< }anytonym check 2anytonym check 3anytonym check 4anytonym check 5anytonym {]]
        A} 4communication Farmers must receive government approval before selling produce
        B} 4understanding The cost of transporting food from urban farms is extremely high
        C} 4antidisestablishmentarianism Urban soil is sometimes polluted and requires extra precautions
        D} 4Reestablishment Urban agriculture requires larger amounts of land than traditional farming pneumonoultra|microscopicsilico|volcanoconiosis
        @} 4antidisestablishmentarianism Urban soil is sometimes polluted and requires extra precautions]]

        [[7. Why does the author mention “nutrient loss” in paragraph 2?
        A} 5To highlight a disadvantage of traditional food transportation
        B} 5To explain why urban soil lacks important nutrients
        C} 5To argue that traditional farming is more efficient than urban farming
        D} 5To describe a common challenge in hydroponic farming
        @} 5To highlight a disadvantage of traditional food transportation]]

        [[8. Which of the following can be inferred from the passage?
        A} 66Urban|agriculture is|expected|to completely replace traditional farming in|the|future
        B} Cities with|strict zoning|laws may struggle to implement urban agriculture
        C} 6The|cost|of urban-grown food is|always higher than that of traditionally farmed food
        D} 6The       majority       of       urban       |farms rely|on government funding for their survival pneumonoultra|microscopicsilico|volcanoconiosis
        @} Cities with|strict zoning|laws may struggle to implement urban agriculture ]]

        [[9. What can be concluded about the future of urban agriculture based on the passage?
        A} 7It is   likely  to      decline       due    to     the      challenges it         faces
        B} 7It may  expand  if      technological and    policy barriers are        addressed
        C} 7It will only    succeed in            cities that   have     large      amounts    of     unused       land
        D} 7It will replace rural   farming       as     the    primary  source     of         food   production
        @} 7It may  expand  if      technological and    policy barriers are        addressed]]

        [[Question 10. [[According to - From]] the passage, why is urban agriculture [[considered(IDconsidered).jpg - thought to be]seen as[>여겨진다<]] environmentally friendly?A} It eliminates the need for all fertilizers and pesticides
                                                                                                                                                                B} 2It increases deforestation rates by expanding farming areas
                                                                                                                                                                C} 2It uses less water and helps absorb carbon dioxide
                                                                                                                                                                D} 2It completely replaces traditional farming methods
                                                                                                                                                                @} 2To highlight a disadvantage of traditional food transportation]]
                                                                                        [[Question 11. [[According to - From]] what the passage is describing, why is urban agriculture [[considered(idQ11).jpg - thought to be]seen as[>
            여겨진다<]] environmentally friendly?A} It eliminates the need for all fertilizers and pesticides
                    B} 2It increases deforestation rates by expanding farming areas
                    C} 2It uses less water and helps absorb carbon dioxide
                    D} @2It completely replaces traditional farming methods
                    @} 2To highlight a disadvantage of traditional food transportation]]
                    [[ʔ끊김=2 ]] [[ʔ끊김=3]] [[ʔ끊김=8]] R [[?=2]]끊김 Error if there is no space. Math version should not have img spans being added and deleted in syncListeners
                    10 - 14=[[? =-4]] ♪♪♪
                    1) 3(x−4) + 5=2x + 7=>
                    3⋅x − 3⋅4 + 5 = 2x + 7
                    =>    3x  −  12 + 5  = 2x + 7
                    =>    3x        −  7   = 2x + 7
                    =>    3x  − 2x − 7  =        7
                    =>           x    − 7   = 7
                    =>        x  − 7+7  = 7+7
                    =>        x         = 14


                    [[X끊김 = 2]] [[Y끊김 = 3]] [[? = 8]] R [[? = 2]]
                    4 ) 9 5 4
                    - [[? = 8]]  |  |
                    [[? = 1]] [[? = 5]]  |
                    - [[? = 1]] [[? = 2]]  |
                    - [[? = 3]] [[? = 4]]
                    - [[? = 3]] [[? = 2]]
                    -    [[? = 2]]


                    4([[X = 3]]) + 3([[y = 2]]) = 18

                    [[Earthworm.jpg - globe]]       (n)    지구
                    [[Earth.jpg - globe(지구)]]     (n)
                    [[Earth(n).jpg - globe]]       지구

I like to [[slumber(idSlumber) - sleep very deeply[verb](snooze, doze, nap)>자다<]]. There once lived a This poor [[tailor.webp - person who made clothes for men(dressmaker, outfitter, designer)(옷만드는사람)]] on [[Earth(n).jpg - globe(지구)]], who had a son called Aladdin, This a careless, idle boy who would do nothing but play all day long in the streets with little idle boys like himself. [[This - Aladdin always playing]] so grieved the father that he died; yet, in spite of his mother’s tears and prayers, Aladdin did not mend his ways. [[How did Aladdin's father feel when he worked and why? - The father felt sad because his son only played all day.]] One day, when he was playing in the streets as usual, a stranger asked him his age, and if he was not the son of Mustapha the tailor. “I am, sir,” replied Aladdin; “but he died a long while ago.” On [[this - learning that Aladdin didn't have a father,]] the stranger, who was a [[famous(n).gif=well-known(유명한)]] African magician, fell on his neck and kissed him saying: “I am your uncle, and knew you from your likeness to my brother. Go to your mother and tell her I am coming.” Aladdin ran home and told his mother of his newly found uncle. “Indeed, child,” she said, “your father had a brother...”
, but I always thought he was dead.” However, she prepared supper, and bade Aladdin seek his uncle, who came laden with wine and fruit. He fell down and kissed the place where Mustapha used to sit, bidding Aladdin’s mother not to be surprised at not having seen him before, as he had been forty years out of the country. He then turned to Aladdin, and asked him his trade, at which the boy hung his head, while his mother burst into tears. On learning that Aladdin was idle and would learn no trade, he offered to take a shop for him and stock it with merchandise. Next day he bought Aladdin a fine suit of clothes and took him all over the city, showing him the sights, and brought him home at nightfall to his mother, who was overjoyed to see her son so fine. [[How should 끔Aladdin's father 이feel and why? - He should feel sad because his son only played all day.]]
[[1 What were they doing?A} They were still playing catch located at|the abandoned park .B} They were eating lunch ! C} They were listening to music.D} They were sleeping.@}They were listening to music.]]
[[23 What did take with them?
a} Thesy took a box of shoes.
b} Thsey took their pets .
c} Thdey took a jar of butter .
d} Thedy took a can of juice .
@} Thedy took a jar of butter .]]
[[3 What word means to pay and use something for some time?
A}R E N T                            .
B} R 끔A K E
C} P U C H 끔A S E
D} B U Y
@} R E N T]]
[[4 What does 'purchase' mean?
A} to buy
B} a bag                           
C} to chase a purse
D} to not fight
@}  to buy]]
Irshansk, Ukraine
CNN
—
The extractor’s part-rusting mechanical arm winds out over the frozen ground, over a sprawling lunar landscape of unnatural colors. [[Earth.jpg - globe]]The mining of titanium has a greater urgency than ever, here in Irshansk.
The electricity that powers the vast machines is only sometimes on for three hours a day. But resources like titanium are potentially key to the moonshot rare earth minerals deal that is suddenly the focus of talking peace in Ukraine. The deal’s signatories, the United States and Ukraine, appear to have opposing interpretations of its terms, which leave many thorny details for a later discussion.
Some current and former US officials have cast doubt on President Donald Trump’s claim that the potential deal he is on the verge of signing with Ukrainian counterpart Volodymyr Zelensky would offer the US easy access to a plethora of rare earth minerals.
Much of what does exist will be difficult to exploit, particularly at a time of war.
And from this beleaguered mine in the northwestern town of Irshansk, it is hard to see how Ukraine could, in this lifetime, get to the half a trillion dollars Trump has suggested they might repay.
“Now we don’t know what and how our work will go on even tomorrow”, said Dmytro Holik, director of mining and concentrating plant at Ukrainian conglomerate Group DF.
A drone view shows the open pit mine of Zavallievsky Graphite, amid Russia’s attack on Ukraine, in Zavallia, Ukraine, February 10, 2025.[[Earth.jpg - globe]]
Related article
What we do and don’t know about Trump’s ‘very big deal’ on Ukraine’s mineral resources
“Every day we see how Ukraine’s energy system is being destroyed. Every day, entire regions are cut off in an emergency,” he added, a reference to the waves of drones and missiles Russia pounds Ukrainian homes and energy infrastructure with each night.
The plant’s staff are mostly men, kept away from conscription as titanium is considered a critical industry. Profits are low, prospects dim. “Our enterprise is now very unstable, and this leads to a very high cost of our products,” Holik said.
The proposed minerals bonanza now at the heart of continued US aid to Ukraine in the largest war in Europe since the 1940s, seems to speak to a fantastical future world of prosperity.
Trump on Thursday held out the possibility of American personnel in Ukraine working to extract minerals once a mineral resources deal - and peace - was in effect.
“When you talk about economic development, we’re going to have a lot of people over there,” he said. “So we’ll be working in the country. So I just don’t think you’re going to have a problem.”
Opaque deal
The nature of the framework deal - which, according to a text seen by CNN Wednesday morning to be signed by US Treasury Secretary Scott Bessent and Ukranian Foreign Minister Andrii Sybiha‎ - is as opaque as elements of the industry they seek to harness.
It refers to half the value of “relevant Ukrainian Government-owned natural resource assets,” but says the specific details will be “agreed by both Participants, as may be further described in the Fund Agreement.” The deal goes on to say these won’t include “current sources of revenues… already part of the budget revenues of Ukraine.”
The extent of Ukraine’s mineral wealth is unclear.[[Earth.jpg - globe]]
Ukrainian officials accept they sometimes rely on Soviet-era geological dating. Yet in a recent presentation by the Ministry of Ecology and Natural Resources, Kyiv claimed 7% of the world’s titanium production, and to have 3% of the lithium reserves – which have not been mined yet. It also said Ukraine was in the top five nations of graphite reserves, and had deposits of the rare earth minerals tantalum, niobium and beryllium.
A drag-line excavator mines rare earth materials Ukraine's Zhytomyr region on February 25, 2025.
A drag-line excavator mines rare earth materials Ukraine's Zhytomyr region on February 25, 2025. Kostiantyn Liberov /Libkos/Getty Images
The numbers resemble those in the Ukraine chapter of the US Geological Survey’s 2020-2021 Minerals Yearbook, written before Russia’s full-scale invasion disrupted production. The USGS said at the time that Ukraine was the fifth-ranked producer of titanium sponge, and the sixth largest producer of graphite.
A USGS mineral commodity summary for 2025 had no figure for graphite reserves, and said, among other observations, that Ukraine was a source of the rare earth metal scandium and had shuttered a 1.7 million-ton a year alumina refinery since 2022.
Natalia Bariatska, a doctor of geology and member of the Australian Institute of Geoscientists, said critical raw materials were all at different stages of research and exploration.
“It is very difficult to talk about the actual value of these deposits,” Bariatska said. “We can speak about the value of the elements in the subsoil, but we have to understand it takes a lot of investment to extract, process and sell them.”
Workers at a granite mine in the Zhytomyr region of Ukraine on on February 26, 2025.[[Earth.jpg - globe]]
Workers at a granite mine in the Zhytomyr region of Ukraine on on February 26, 2025. Kostiantyn Liberov /Libkos/Getty Images
While the framework deal leaves it unclear what assets will be impacted by any future fund, US National Security Adviser Mike Waltz made an explicit reference during a White House briefing on February 20 to one Ukrainian “aluminum foundry.”
“It’s been damaged, it is not at its current capacity, if restored it would account for America’s entire imports of aluminum for an entire year,” Waltz said.
Waltz did not name the foundry, and the White House did not respond to a request for clarification at the time of publication. But the most likely facility he was referring to is the Zaporizhzhia industrial aluminum integrated plant.
Mothballed a decade ago, a video of the plant released by Ukrainian investigators in 2015 shows it in significant disrepair. It is since running on a much-reduced staff, and has been hit by a missile, according to a filing with the State Property Fund of Ukraine.
[[?=2]] [[?=3]] [[?=8]] R [[?=2]]
4 ) 9 5 4
- [[?=8]] | |
[[?=1]] [[?=5]] |
- [[?=1]] [[?=2]] |
- [[?=3]] [[?=4]]
- [[?=3]] [[?=2]]
- [[?=2]]
Sample format for SIMPLIFY:
[[slumber(verb).jpg - sleep very deeply(snooze, doze, nap)(자다)]]
- WORD and DEFINITION are necessary. PARTS OF SPEECH, SYNONYMS, KOREAN, FILE EXTENSION such as .jpg are optional.
Sample format for COMPREHENSION QUESTIONS:
[[2 What did they take with them?
a} They took a box of shoes .
b} @They took their pets .
c} They took a jar of butter .
d} They took a can of juice .
@} They took their pets .]]
[[2 What did they take with them?
a} They took a box of shoes .
b} @They took their pets .
c} They took a jar of butter .
d} They took a can of juice .
@} They took their pets .]]
[[2 What did they take with them?
a} They took a box of shoes .
b} @They took their pets .
c} They took a jar of butter .
d} They took a can of juice .
@} They took their pets .]]
[[2 What did they take with them?
a} They took a box of shoes .
b} @They took their pets .
c} They took a jar of butter .
d} They took a can of juice .
@} They took their pets .]]

You can add spaces for convenience :)
samples: He had to go to the [[bathroom - restroom]].연결 It was cold. vs. He had to go to the [[bathroom.연결 - restroom.]] It was cold.
He is an [[N.B.A. - basketball]] star.
I like to [[slumber(verb) - sleep(snooze, doze, nap)(자다)]].
Math: working examples but must be isolated:
4([[X=3]]) + 3([[Y=2]]) =18
[[X끊김=-2]] [[Y끊김=-3]] [[Z끊김=8]] R [[?=2]]
4 ) 9 5 4
- [[?=8]] | |
[[?=1]] [[?=5]] |
- [[?=1]] [[?=2]] |
- [[?=3]] [[?=4]]
- [[?=3]] [[?=2]]
- [[?=2]]
[[Earthed.jpg - globe]] (n) 지구
[[Earth.jpg - globe(지구)]] (n)
[[Earth(n).jpg - globe]] 지구
[[Earth(n) - globe]] .jpg 지구
[[Earth(n) - globe(지구)]] .jpg
[[Earth(noun).jpg - globe]] 지구
[[Earth's - glob'e(지구)]] .jpg (n)
[[Earth(n) - globe(지구)]] .jpg
[[Earth.jpg - globe(지구)]] (n)
I like to [[slumber(verb) - sleep(snooze, doze, nap)(자다)]].
I like to [[slumber(verb) - sleep(snooze, doze, nap)(자다)]].Donald Trump isn’t the only president who knows a bad deal when he sees one.
Volodymyr Zelensky’s refusal to sign away nearly half of his country’s rare earth minerals for very few future guarantees is one of many reasons why Trump has been driven into a rage at his counterpart in Kyiv.
The Ukrainian president has made clear that exploiting his country’s precious geographical and energy resources will be one way to rebuild its economy and cities after the eventual end of the war. But the offer tendered by Treasury Secretary Scott Bessent, while being lauded by US officials as a generous ladder to prosperity for Ukraine, is not really a “deal” at all.
However, it provides insights into Trump’s view of foreign policy and his perception of the war after he reversed, rhetorically at least, the Biden administration’s support for the invaded party and threw his weight behind the invader.
As with his plan to relocate all Palestinians out of Gaza so the US can build a “riviera” of beach resorts, the president’s motives appear to be rooted more in extracting the best potential monetary return for the United States than in equitably solving a murderous conflict that endangers the world. Trump is reflecting skepticism among his base voters toward the tens of billions of dollars of military and financial aid that the Biden administration sent to Ukraine after it was illegally invaded by Russian President Vladimir Putin’s forces three years ago. But Trump’s transactional approach represents a shattering of foreign policy values pursued by the United States for decades, including the principle that mighty nations should not invade smaller ones, which Washington enshrined in the United Nations charter.
His pressure on Ukraine, the victim in the conflict, is also a hardline effort to take advantage of a nation in its darkest hour. While Putin has carved off large chunks of its territory, Trump seeks a large slice of its mineral wealth at a knockdown price. The “deal” looks rather like a form of extortion that Trump tried on Zelensky once before — floating military aid as an incentive for him to announce an investigation into Joe Biden, which led to Trump’s first impeachment.
Still, the White House says Zelensky has no choice but to sign the pact to pay back US taxpayers for Kyiv’s lifeline — even though it contains no assurances that Washington will keep the aid coming in the future.
“President Trump is obviously very frustrated right now with President Zelensky,” White House national security adviser Mike Waltz said on Thursday. “The fact that he hasn’t come to the table, that he hasn’t been willing to take this opportunity that we have offered – I think he eventually will get to that point, and I hope so very quickly.”
A staggering US reversal
The clash over the rare earth minerals agreement comes amid a serious deterioration of US relations with Zelensky, driven by Trump’s adoption of Russian propaganda on the war, including the false charges that the Ukrainian leader started the conflict and that he is a dictator. The autocrat in this situation is Putin, who has run Russia for 25 years, imprisoned his opponents, crushed the free press and held sham elections. And he started the war.
The staggering US reversal on the war deepened Thursday as the Trump administration haggled with G7 members over a joint statement marking the invasion’s third anniversary, with US diplomats resisting a mention of “Russian aggression” in the document. Officials told CNN that other G7 members fear handing Russia yet another win, following the US siding with Putin over some of his demands on an eventual peace before this week’s talks in Saudi Arabia.
While Trump says he is convinced that Putin wants to stop the war and is serious about talking peace, US and allied intelligence agencies are less bullish. Three sources familiar with Western intelligence told CNN’s Katie Bo Lillis and Natasha Bertrand that Putin remains fixated on either subsuming Ukraine into Russia or ensuring a small, weak state that is dependent on Moscow. “If you were to get a ceasefire, then a ceasefire is just time for Putin to take a rest and rearm and come back and get the rest of what he wants,” said one of the sources. “We’ve seen no indications whatsoever that his ambitions have changed.”
The events of the last few days, which have left Ukrainians feeling betrayed, US allies alarmed, and even some Republican senators outraged, have renewed debate about Trump’s motives and how they will influence the chances of a fair peace deal.
Is the president being driven by personal animosity toward Zelensky? Or contempt for a smaller nation in need, as he seeks to reorient US foreign policy to promote a spheres of influence system controlled at superpower summits by strongmen like himself, Putin and Chinese President Xi Jinping?
Or is Trump, as he often has before, choosing a hardline position simply to create negotiating room for himself? Could his adoption of many of Putin’s talking points and leaning hard on Zelensky be designed to lure the Russian president to the table for a tough bargaining session? Certainly, Trump’s good relationship with Putin could position him, more than any other Western leader, to influence Russia’s conduct and potentially extract concessions.
A peace that endures; permits Ukraine to continue existing as independent, sovereign state; avoids rewarding Putin’s expansionism; and saves millions of lives would be a huge legacy achievement for Trump. The current war of words between Washington and Kyiv does not preclude an eventual and serious negotiation — and will soon be forgotten if a peace can be brokered. Still, Trump is yet to show evidence that he’s drafting a clever plan to call the Kremlin’s bluff. Trump’s wild words often cause his critics to overreact, but words are important in this case — since the president is obscuring the basic facts about what caused the war, which is a fundamental flaw in a leader who is positioning himself to lead peace negotiations.
Trump’s parroting of many of Putin’s positions has also renewed debate about his fascination with the Russian leader, which, in his first term, saw him publicly repudiate his own intelligence agencies’ assessments that Russia meddled in the 2016 election.
Trump’s latest favoritism toward Putin drew a raw public and emotional rebuke from a key Republican senator facing reelection in 2026. North Carolina’s Thom Tillis said he agreed with most of the president’s instincts on national security but added: “Whoever believes that there is any space for Vladimir Putin and the future of a stable globe, better go to Ukraine, they better go to Europe.” Tillis went on about Putin: “They better invest the time to understand that this man is a cancer and the greatest threat to democracy in my lifetime. And it will be a cancer that spreads into the South China Sea, into Taiwan and metastasized across the globe.”
Why Zelensky couldn’t accept the ‘deal’
The proposed minerals deal raises questions not just about its terms but also the White House’s understanding of the political dynamics in Ukraine.
How to Make a Jjajangmyeon Alternative with Your Ingredients
Ingredients (from what you have)
삼겹살 (Pork belly) – for the meaty base
양파 (Onion) – a must-have for sweetness
당근 (Carrot) – adds texture
간장 (Soy sauce) – for umami and saltiness
된장 (Doenjang) – to add fermented depth (substitute for 춘장)
설탕 (Sugar) – balances flavors
Olive oil / Corn oil – for frying
Black pepper – seasoning
Flour – to thicken the sauce
Spaghetti pasta – substitute for noodles
Steps
Prepare the sauce base:
Dice 삼겹살 and cook it in corn oil until crispy.
Add chopped 양파 and 당근, then stir-fry until soft.
Add 1 tbsp 된장 + 1 tbsp 간장 and stir well.
Add ½ tbsp sugar and a little black pepper for balance.
Thicken the sauce:
Make a flour slurry (mix 1 tbsp flour + 3 tbsp water) and add it to the pan. Stir until it thickens.
Cook the noodles:
Boil spaghetti until al dente, drain, and rinse with cold water.
Combine:
Pour the sauce over the noodles and mix well.
What to Expect?
It won’t be exactly 짜장면, but the 된장 + 간장 + sugar + flour combo will create a similar savory, slightly sweet, thick sauce.
The 삼겹살, onions, and carrots will give it a familiar texture.
The spaghetti will work as a noodle replacement.
Optional Enhancements
If you have potatoes or cabbage, they would be great additions.
A fried egg on top would be delicious.
Would you like help adjusting the recipe further? 😊
There’s no way that Zelensky or any other Ukrainian president could have accepted the “deal” to hand over much of his country’s geological inheritance and a key to its future economic viability. If he had, his approval rating probably would tumble near to the 4% level that Trump falsely claims it’s already at as he demands that Zelensky hold an election, which has been delayed because of martial law amid Russian attacks. Appreciating Zelensky’s political situation is crucial, because any peace is going to be a painful pill that the Ukrainian leader will have to convince his country to swallow since it is almost certain to enshrine Russia’s hold on stolen territory.
Zelensky said at the Munich Security Conference last weekend that he’d not allowed one of his ministers to sign the first draft of the minerals deal with the United States. “The agreement is not ready to protect us or our interests,” he told reporters, noting that he did not see how the draft provided security guarantees for Ukraine.
But it’s still possible that the first US attempt at a deal could provide the framework for a future agreement. Zelensky hasn’t, for example, ruled out an agreement. But he is seeking to use the leverage of his country’s resources to obtain the security guarantees that Ukraine needs to survive after any peace deal.
The original rare earth mineral deal focused on compensating the United States for past aid to Kyiv, and specified the natural resources that would form part of the deal on over a dozen pages, two sources familiar with the document told CNN. Zelensky said Wednesday the contract asked for the US to own, or receive revenue from, 50% of Ukraine rare earth mineral mining and other natural resource sectors. The sources said the document said it asked for compensation not for future US assistance to Ukraine, but for previous aid.
Speaking on Fox News on Thursday morning, Waltz said it was time to for Ukraine to stop “bad-mouthing” Trump because of all the good he and the United States had done for the country. “It’s unacceptable. They need to tone it down and take a hard look and sign that deal,” he said.
While Ukraine’s language has been spicy in recent days — Zelensky accused the US president of dwelling in a “disinformation space” — most of the heightened rhetoric followed Trump’s own false claims and accusations.
In the United States and Europe, the furor provoked by Trump’s turn against Ukraine is a political issue. But for Ukrainians it’s a matter of life and death.
“Ukrainians feel like they are the only adults left in the room,” Sasha Dovzhyk, director of the Institute for Documentation and Exchange, told Paula Newton on CNN International. “What we have currently in the news is tantrums from someone we considered a world leader, and Ukrainians are basically left to face up to the deconstruction of the world order.”
[[Eaaharth - globe]]She added: “We are not new to this fight; the only addition is that currently we are facing aggression and misinformation from another side — which is the side of our great ally the United States of America.”
[[Easdfsdfaharth - globe]]`;


  kT = kT.trimEnd();
  kT = kT.replace(/"([\w])/g, '“$1').replace(/(.)"/g, '$1”').replace(/([\w.!?])'/g, '$1’').replace(/\s'(\w)/g, ' ‘$1'); 
  kT = kT.replace(/([a-z0-9)\]}]{2}\s*[.!?’”]+)((?:\[\[)?[A-Z])/g, '$1 $2');  // adds a space if sentence ends with a punctuation and there is no space right after
  //kT = '<img id="circle" src="/Images/sun_transparent.gif" alt="galaxy_transparent.gif">\n\n\n\n\n' + kT;  // 5 \n puts text at center height of sun.gif 
  kT = '<img class="circle" src="https://local.app/sun_transparent.gif" alt="galaxy_transparent.gif">\n\n\n\n\n' + kT; // 5 \n puts text at center height of sun.gif 


  //updatePic('sun_transparent.gif');
  
  setGlowEffectRx();


  //kT = '<span data-index="0"><img id="circle" src="./images/sun_transparent.gif" alt="galaxy_transparent.gif"></span>\n\n\n\n\n' + kT;
  //kT = `<span data-index="0"><img id="circle" src="./images/sun_transparent.gif" alt="galaxy_transparent.gif"></span><br><br><br><br><br>` + kT;
 console.log(kT)
  
  /*   let infoFromNotesL = document.getElementsByName('notesL')[0].innerHTML;  
  let infoFromNotesR = document.getElementsByName('notesR')[0].innerHTML; */
  //kT = DOMPurify.sanitize(kT); // Use the sanitized input for output

  //kT = kUserTxtAR(obsolete).join('');           <img src="sun_transparent.gif" alt="A transparent sun image">       <img id="circle-image" src="example.png" alt="Example Image">

  //kT = kT.replace(/(\w+\u200B\u200C\w\b)/g, '<span style="white-space: nowrap;">$1</span>');  // glues ea&#x200B;&#x200C;t
  //kT = kT.replace(/(\w+\u200B\w\b)/g, '<span style="white-space: nowrap;">$1</span>');  // glues kno&#x200B;w
  //kT = kT.replace(/(사진)/g, ' <img id="circles"></img>'); // must execute after replacement of curly quotes.  space added so every other index will be whitespace. Without the added space, Sentence will be at index x and x+1, not x+2
  //kT = kT.replace(/(사진2)/g, ' <img id="circle"></img>'); // must execute after replacement of curly quotes.
  //kT = kT.replace(/(\.)(\w)/g, '$1\u200C$2');  // regex makes 2 catches p. and m. This will connect it to be a single catch p.m. Seems to work without it.
  //kT = kT + u200D;   // to prevent crashes if user inputs text w/o an ending symbol

  
  //updatePic('sun_transparent.gif');

  kT = kT.replace(/(끊김|연결|끔|일이|이|일|삼)/g, (match, p1) => {  //match returns the entire pattern it matched (e.g., ">끊김<"), while p1 captures just the part inside the angle brackets (like '끊김').
    switch (p1) {
        case '끊김': return '\u200C';   // Replace >끊김< with zero-width joiner                                      (BE not used)
        case '연결': return '\u200D';  // Replace >연결< with zero-width non-joiner                            off    B    : 끔  E
        case '끔': return '\u200E';   // Replace >끔< with zero-width space                                 EE   only inf   (?:^|\s)   
        case '일이': return hvBvInf; // Replace >일이< with zero-width non-joiner                           BB   only hvbv  (?:^|\s)   
        case '이': return '\u200B\u200B';  // Replace >이< with zero-width non-joiner                       EB   hvbv and inf (hvbv2)   (?:^|\s)    
        case '일': return '\u200E\u200E';                                                            //    BB E  manually hili prpl then matches vocab
        case '삼': return '\u200B\u200E';
        default: return match;     // Default case (not needed but good practice)              //          EB E  manually hili prpl2 then matches vocab
  }});
    
  //kT = kT.replace(/(\w+)(?:♪+)(\w)/g, '$1\u200C$2');
  kT = kT.replace(/♪/g, '\u200D');  // note: might need to use \u202D to avoid conflicts with u200D added to hili ENDINGS s 's ed ied
  //const vocabDefnRgx = /\[\[([\W\w]+?(\(\w*.?\))*.\w+)\s*-\s*([\W\w]+?(\(\W*\))*)]]/g;  // regex to capture the vocabulary word and its meaning

                                                                                                                                                                                                                                                                                                                    
  const tQAvocabRgx = /([sS]\d+)(?:(?<!\[)\[(?!\[)|(?<!\])\](?!\])|[^\[\]](?![sS]\d))+\[\[\s*(([\w\W]+?(?:(\(#[\w\W]+?#\))?)?)(?:\.(?:jpg|png|gif|bmp|webp|svg|tiff?))?)\s+[-=]\s+(?:\(([\w\W]+?\)?)\))?\s*([\w\W]*?)\s*(?:]([^\]]*?)?\[)?\s*(?:>([\w\W]*?)?<)?\s*(?:}([\w\W]*?)?\{)?\s*]]/gi; 
  let found = false;// variable 'found' used again for cqaVocabRgx                                                                                                                                                                                                                                                                            
    do {  // If there are multiple vocabs in the same Q, the first loop will capture the 1st vocab and the next loop will capture the next vocab and so on.                                             \w)/g, ' ‘$1');                                 
      if (found === true) kT = kT.replace(/((?:[sS]\d+)(?:(?<!\[)\[(?!\[)|(?<!\])\](?!\])|[^\[\]])+)(?:\[\[\s*([\w\W]+?(?:\(#[^#]#\))?)(?:\((?:[\w\W]+?)?\))?(?:\.(?:jpg|png|gif|bmp|webp|svg|tiff?))?\s+[-=]\s+(?:[\w\W]*?)]])/g, '$1$2');  // '(?<!\[)\[(?!\[)|(?<!\])\](?!\])' allows an individual bracket to be captured but not double brackets
                           //     function(_, priorToVocab, vocab) { // _ is match[0]        //cqaVocabRgx will first extrapolate all of the vocab info. and then just keep $1([[Q1. pried What is challenges the main purpose of the) and $2(challenges)
                           //       const joinedVocab = vocab.replace(/\s+/g, '++');// Replace all whitespace characters in joinedVocab with '++'. Does nothing if there is no whitespace
                           //       return priorToVocab + vocab;});          //replace the regex match which in this case is priorToVocab (everything prior to the vocab) and joinedVocab (the vocab itself)
      found = false;
      for (const match of kT.matchAll(tQAvocabRgx)){ //[^\[\]]+     closing bracket included to prevent matches from previous questions with bracket structure
        found = true
        const sentenceNum = +match[1].replace(/[sS]/, ''); //converted to a number                  
        const fileName    = /\.(jpg|png|gif|bmp|webp|svg|tif|tiff)$/i.test(match[2] || '') ? match[2].replace(/\s+/g, ' ').trim() : qVocabDefault;  //fall back on qVocabDefault = 'moon.gif' when match[2] doesn't have a file extension  //[^\d\]]*     closing bracket needed to not capture previous vocab matching structure
        const word        = match[3].replace(/\s+/g, ' ').trim();  //word and fileName only has one space between words   // match[0] is the full matched string
        const wordID      = match[4]         //Gives it a unique id such as toon here: [[rugged plains(#toon#).jpg - (rugged: adjective_plains: noun) flat parts of land with small rough hills}smooth valleys or flat meadows{  ]]
        const wordType    = match[5]?.split('_').join('\n');   // match[1], match[2], etc., correspond to the capturing groups 
        const meaning     = match[6];                          // this loop will only run if there is a match of opening and closing double brackets
        const syn         = match[7];
        const korean      = match[8];  
        const antn        = match[9]?.split('_').join('\n');
        tQAvocabList.push({ sentenceNum:sentenceNum, fileName:fileName, word:word, wordID:wordID, wordType:wordType, meaning:meaning, syn:syn, korean:korean, antn:antn, meaningON:false, synON:false, koreanON:false, rClicked:false}); 
      }
    } while (found);
  console.log(tQAvocabList);
  teacherQA = kT.match(/\[\[\s*([sS]\d+[^}]*?)(?=\]\])/);  // took out global match because there is only one match, however this will return a full match and all the capturing groups. That's just the way the system is designed.
  //console.log(toArrayK(teacherQA[1]));
  kT = kT.replace(/\[\[\s*([sS]\d+[^}]*?)(?=\]\])\]\]\s*/g,'');  //erase teacher's Q and A  

  if (teacherQA)  { numberQASentences(toArrayK(teacherQA[1])); } // [1] is the only match (without double brackets), [0] would include double brackets
  function numberQASentences(teacherQAnotFiltered) {  // 0: 3. How is Willy’s relationship with his grandfather?‍ How  }
    let currentKey = null;                            // 1: "       "                                                 } \ 
    let tempArray = [];                               // 2: He has a good relationship because it says that they      }   >teacherQAnotFiltered ex) 
                                                      // 3: "\n  "                                                    } /
    const sentenceNumRgx = /^\s*[sS](\d+)[.)\s]?/;  // Matches "3.", "4)", or "9 "

    for (let wholeString of teacherQAnotFiltered) {     //wholeString is already a trimmed string (w/ or w/o a number) or empty space
      const sentenceNum = wholeString.match(sentenceNumRgx);
      if (sentenceNum) { //extracts the number and pushes the sentence
        // Save previous key
        if (currentKey !== null) {
          putValueInKey();
          tempArray = [];
        }
        currentKey = sentenceNum[1]; // Start new key // The number part
        const teacherQAnumGone = wholeString.replace(sentenceNumRgx, ''); // digit is gone
        if (teacherQAnumGone) tempArray.push(teacherQAnumGone);
      } 
      else if (currentKey !== null && wholeString) {
        tempArray.push(wholeString.trim());
      }
    }
    if (currentKey !== null && tempArray.length)  { putValueInKey(); } // Save last entry

    function putValueInKey(){
      const sentences = toArrayK(tempArray.join(' ')).filter(eachMatch => eachMatch.trim()); // if a string is "       ", trim() removes all whitespace, so it becomes empty which is falsy. .filter() only accepts truthy values, in here that's strings with text
      //.filter expects a callback function, in this case, eachMatch => eachMatch.trim(). js passes each array element as an argument(eachMatch).
      teacherQAarr[currentKey] = sentences; //teacherQAarr[currentKey] = sentences.filter(Boolean);  //  only accept truthy values. 
    }
  }
  for (const match of kT.matchAll(/\[\[([^\].]+\.(?:jpg|png|gif|bmp|webp|svg|tiff?))\s+[-=]\s+([\d\-,\s]+)\s*ㅁ\s*\]\]/gi)){
    rightPics.push(expandRanges(match[2].replaceAll(' ', '')) + ":" + match[1]);  //match[2] are the numbers and match[1] are the filenames
  }
  kT = kT.replace(/\[\[(?:[^\].]+\.(?:jpg|png|gif|bmp|webp|svg|tiff?))\s+[-=]\s+[\d\-,\s]+\s*ㅁ\s*\]\]\s*/g,'');  //erase emotions

  for (const match of kT.matchAll(/\[\[\s*ㅁ\s*([^.]+\.(?:jpg|png|gif|bmp|webp|svg|tiff?))\s+[-=]\s+([\d\-,\s]+)\]\]/gi)){
    leftPics.push(expandRanges(match[2].replaceAll(' ', '')) + ":" + match[1]);
  }
  kT = kT.replace(/\[\[\s*ㅁ\s*[^.]+\.(?:jpg|png|gif|bmp|webp|svg|tiff?)\s+[-=]\s+[\d\-,\s]+\]\]\s*/g,'');  //erase pictures

  function expandRanges(userObj) {  // String to array i.e. "1-3, 7, 8, 11-15" -> [1, 2, 3, 7, 8, 11, 12, 13, 14, 15]
    return userObj.split(',').flatMap(eachSplitPart => {
      if (eachSplitPart.includes('-')) {
        let [firstNum, lastNum] = eachSplitPart.split('-').map(Number);  //Number() function is called individually for each element of the array(implicitly applied to each element), not directly receiving the entire array as a parameter
        return Array.from({length: lastNum - firstNum +1}, (_, i) => firstNum + i);  //Array.from has 3 arguments, 1st(arrayLike element) is options. 2nd: function   3rd: this
      }    //  return Array.from({length: lastNum - firstNum + 1 }, (_, i) => firstNum + i); 
      return +(eachSplitPart);
    });
  }






  /*
  const tagHAVEetc = new RegExp(`(?<!\u200E)(ha(?:s|ve|d)|need(?:s|ed)?|ought) ((?:\u200E|${hvBvInf})?to)\\s`, 'gi');  // temperate literals need 2 backslashes instead of 1.
  kT = kT.replace(tagHAVEetc, (match, haveETC, toINF) => {
    toINF = toINF.trimEnd(); // Remove trailing whitespace from toINF  
    if (haveETC) return `${haveETC}\u200D ${toINF} `;  // Add zero-width space only if haveETC is matched. In other words, add the zero-width character to $1 if it is matched
    return match;}); // Default case, return the original match if conditions are not met
  */
    //You MAY/MIGHT have to take the test again. I SHALL have to let you know later. You WILL have to submit your report soon. I WOULD have to think about it.
  // I have to >끔<for about half of my remaining time here not only >켬<dance but also >켬<run.
  kT += '\n'.repeat(8); //+ '\u200C';
  
  //⊗∆❖☯♜⚓
  //ღ ი რ ს ე უ ლ ი   ป ร ะ เ ส ริ ฐ  ག ཡ ས་ ལོ ག   ከ በ ር  दु र् ल भ    貴 重 な    风 景 如 画            opp♩♪ose  opp♪ose
  /*    
    if (kStart.requestFullscreen) {
      kStart.requestFullscreen();
  } else if (kStart.mozRequestFullScreen) { // Firefox
    kStart.mozRequestFullScreen();
  } else if (kStart.webkitRequestFullscreen) { // Chrome, Safari, and Opera
    kStart.webkitRequestFullscreen();
  } else if (kStart.msRequestFullscreen) { // IE/Edge
    kStart.msRequestFullscreen();
  }
  */
  document.querySelectorAll('.progressBar-Container')[0].remove();
  document.getElementById('myForm').remove();
  document.querySelectorAll('.progressBar-Container')[0].remove();  // not index 1, because when index 0 got removed, index 1 becamse index 0
  //document.querySelectorAll('.progressBar-Container').forEach(el => el.remove()); Slightly more overhead

  pElement                          = document.createElement('p');

  const progressBarContainerL       = document.createElement('div');
  const progressBarContainerR       = document.createElement('div');
  const scrollPathL                 = document.createElement('div');
  const scrollPathR                 = document.createElement('div');
  const progressBarL                = document.createElement('div');
  const progressBarR                = document.createElement('div');
  pElementContainer                 = document.createElement('div');
  const notesLcontainer             = document.createElement('div');
  const notesRcontainer             = document.createElement('div');


  const notesL =        kUserInput.querySelector('[name="notesL"]');
  const notesR =        kUserInput.querySelector('[name="notesR"]');


  progressBarContainerL.className = 'progressBar-Container';
  progressBarContainerR.className = 'progressBar-Container';
  scrollPathL.className           = 'scrollPath';
  scrollPathR.className           = 'scrollPath';
  progressBarL.className          = 'progressbar'; 
  progressBarR.className          = 'progressbar';
  notesLcontainer.className       = 'notes-container'; 
  notesRcontainer.className       = 'notes-container'; 
  pElementContainer.id            = 'p-container';
  
  pElementContainer.appendChild(pElement);


  // Wrap notesL
  kUserInput.insertBefore(notesLcontainer, notesL); // they're siblings
  notesLcontainer.appendChild(notesL); // pElementContainerL becomes the parent
  

  // Wrap notesR
  kUserInput.insertBefore(notesRcontainer, notesR);
  notesRcontainer.appendChild(notesR);


  kUserInput.insertBefore(progressBarContainerL, notesRcontainer);
  progressBarContainerL.appendChild(progressBarL);
  progressBarContainerL.appendChild(scrollPathL);

  kUserInput.insertBefore(pElementContainer, notesRcontainer);

  kUserInput.insertBefore(progressBarContainerR, notesRcontainer);
  progressBarContainerR.appendChild(progressBarR);
  progressBarContainerR.appendChild(scrollPathR);


  /* scrollbar = Scrollbar.init(pElementContainer, {  //the 2nd argument(an object) is the settings for pElementContainer
     damping: 0.08,   
     renderByPixels: true,
     alwaysShowTracks: false,
     continuousScrolling: false, 
  }); */

  const scrollbarOptions = {     // Scrollbar declared at the top but not needed because it's auto done by new scrolling mechanism which overrides the native browswer scroll  
    damping: 0.08,               //Lower values mean smoother but slower scrolling
    renderByPixels: true,
    alwaysShowTracks: false,
    continuousScrolling: false,  //Prevents scroll chaining when you reach the top or bottom of the container (i.e., it won’t pass the scroll to the parent or body).

  };

  const initScrollbar = (container) => Scrollbar.init(container, {//scrollbarOptions(an object) is the settings for container
    ...scrollbarOptions,
    plugins: {
      hoverScroll: {
        enable: false
      }
    }
  });

  scrollbar  = initScrollbar(pElementContainer);  
  scrollbarL = initScrollbar(notesLcontainer);
  scrollbarR = initScrollbar(notesRcontainer);


  kUserInput.addEventListener("wheel", (e) => { /* this will scroll the children but they are not synchronized without syncScroll */
    const newY = scrollbar.offset.y + e.deltaY;
    scrollbar.scrollTo(0, newY, 480); // 480ms smooth scroll
    scrollbarL.scrollTo(0, newY, 480);
    scrollbarR.scrollTo(0, newY, 480);
    e.preventDefault();
  }, { passive: false });
  
  let isSyncingScroll = false;
  function syncScroll(source, targets) {
    source.addListener(({ offset }) => {
      if (isSyncingScroll) return;
      isSyncingScroll = true;
      targets.forEach(target => {
        target.scrollTo(0, offset.y, 0);  // 0 = instant, or use 100 for smooth
      });
      isSyncingScroll = false;
    });
  }

  // Sync all 3 scroll bars with each other
  syncScroll(scrollbar, [scrollbarL, scrollbarR]);
  syncScroll(scrollbarL, [scrollbar, scrollbarR]);
  syncScroll(scrollbarR, [scrollbar, scrollbarL]);
  


  // Sync progress bars with scrolling
  scrollbar.addListener(({ offset, limit }) => {
    const scrollTop = offset.y;
    const scrollHeight = limit.y + scrollbar.size.container.height;
    const clientHeight = scrollbar.size.container.height;

    const progressHeight = ((scrollTop + clientHeight) / scrollHeight) * 100;

    progressBarL.style.height = progressHeight + "%";
    progressBarR.style.height = progressHeight + "%";
  });




  /*const notesL =        kUserInput.querySelector('[name="notesL"]');
  const notesR =        kUserInput.querySelector('[name="notesR"]'); */
  const savedNotesL = "notess-content-1";  //stored in application -> local storage -> file://
  const savedNotesR = "notess-content-2";

  function setupEditable(noteLR, savedNotes) {
    const savedContent = localStorage.getItem(savedNotes); 
    if (savedContent) {
        toInnerHTML(noteLR, savedContent);
    }
    noteLR.addEventListener('input', () => {//updates content to localStorage every time the user types
      const cleanText = getCleanTextWithLineBreaks(noteLR);
      localStorage.setItem(savedNotes, cleanText);
    });
    //console.log("innerHTML:", noteLR.innerHTML);
    if (!noteLR.innerHTML.trim()) {
        noteLR.innerHTML = "<p><br></p>";
    } 
    else {
      const firstChild = noteLR.firstChild;
      if (firstChild && firstChild.nodeType === Node.TEXT_NODE) {
        const newParagraph = document.createElement("p");
        newParagraph.textContent = firstChild.textContent;
        //console.log(firstChild.textContent);
        noteLR.innerHTML = "";
        noteLR.appendChild(newParagraph);
      }
    }
  }
  if (notesL) setupEditable(notesL, savedNotesL);
  if (notesR) setupEditable(notesR, savedNotesR);

  function getCleanTextWithLineBreaks(element) {
    const clone = element.cloneNode(true);

    // Replace <br> with \n
    clone.querySelectorAll('br').forEach(br => br.replaceWith('\n'));
    // Add \n after each block-level element
    clone.querySelectorAll('p, div').forEach(block => {
      if (!block.textContent.endsWith('\n')) {
        block.textContent += '\n';
      }
    });
    return clone.textContent;
  }



  // pElement.innerHTML = kT;  
  
  //updatePic2('galaxy_transparent.gif');
 
  //updatePic('galaxy_transparent.gif');
  /*           
         
  .? before /d accepts any characters before the number such as Q1  #1
  the rest of the structure: (word)(part of speech)(filename) - (meaning)(syn)(Korean)
  group 1: Q number / group 2: filename / group 3: word /group 4: part of speech /group 5 meaning / group 6: syn / group 7: Korean/   
  */
  const cqaVocabRgx = /(?:\[\[[^\d\]]*(\d+)(?:(?<!\[)\[(?!\[)|(?<!\])\](?!\])|[^\[\]])+)\[\[\s*(([\w\W]+?)(?:\(([\w\W]+?)?\))?(?:\.(?:jpg|png|gif|bmp|webp|svg|tiff?))?)\s+[-=]\s+(?:\(([\w\W]+?\)?)\))?\s*([\w\W]*?)\s*(?:]([^\]]*?)?\[)?\s*(?:>([\w\W]*?)?<)?\s*(?:}([\w\W]*?)?{)?\s*]]/gi; 
  found = false;      
    do {  // If there are multiple vocabs in the same Q, the first loop will capture the 1st vocab and the next loop will capture the next vocab and so on.                                             \w)/g, ' ‘$1'); 
      if (found === true) kT = kT.replace(/(\[\[[^\d\]]*(?:\d+)(?:(?<!\[)\[(?!\[)|(?<!\])\](?!\])|[^\[\]])+)(?:\[\[\s*([\w\W]+?)(?:\((?:[\w\W]+?)?\))?(?:\.(?:jpg|png|gif|bmp|webp|svg|tiff?))?\s+[-=]\s+(?:[\w\W]*?)]])/g, '$1$2');
                           //     function(_, priorToVocab, vocab) { // _ is match[0]        //cqaVocabRgx will first extrapolate all of the vocab info. and then just keep $1([[Q1. pried What is challenges the main purpose of the) and $2(challenges)
                           //       const joinedVocab = vocab.replace(/\s+/g, '++');// Replace all whitespace characters in joinedVocab with '++'. Does nothing if there is no whitespace
                           //       return priorToVocab + vocab;});          //replace the regex match which in this case is priorToVocab (everything prior to the vocab) and joinedVocab (the vocab itself)
      found = false;
      for (const match of kT.matchAll(cqaVocabRgx)){ //[^\[\]]+     closing bracket included to prevent matches from previous questions with bracket structure
        found = true
        const questionNum = +match[1]; //converted to a number                  
        const fileName    = /\.(jpg|png|gif|bmp|webp|svg|tif|tiff)$/i.test(match[2] || '') ? match[2].replace(/\s+/g, ' ').trim() : qVocabDefault;  //fall back on qVocabDefault = 'moon.gif' when match[2] doesn't have a file extension  //[^\d\]]*     closing bracket needed to not capture previous vocab matching structure
        const word        = match[3].replace(/\s+/g, ' ').trim();  //word and fileName only has one space between words   // match[0] is the full matched string
        const wordID      = match[4]
        const wordType    = match[5]?.split('_').join('\n');   // match[1], match[2], etc., correspond to the capturing groups 
        const meaning     = match[6];                          // this loop will only run if there is a match of opening and closing double brackets
        const syn         = match[7];
        const korean      = match[8];  
        const antn        = match[9]?.split('_').join('\n');
        const wordCount  = (word.match(/\s/g) || []).length + 1;  // need to know the number of words in fileName so that the last word will be in the index in which meaning and antonym must adhere to, they all have to be aligned in the correct indices so that del tags can be placed in the correct index
        cqaVocabList.push({ questionNum:questionNum, fileName:fileName, word:word, wordID:wordID, wordType:wordType, meaning:meaning, syn:syn, korean:korean, meaningON:false, synON:false, koreanON:false, antn:antn, rClicked:false, wordCount:wordCount}); 
      }
    } while (found);

  // at this point, kT has ++ such as urban++agriculture OR He tries to >>>explain  how  he++has++to++check++extreme++hydroponics++farming++and++might++want++to++proceed++or++succeed<<<  is    >>>checkingStests<<<   agriculture

  cqaList[0] = null;   //to make it consistent with actual Q numbers which start at #1
  const cqaRgx = /\[\[\s*([#question\s]*?\d[\w\W]*?[?:][\w\W]*?)\s*A}\s*([\w\W]*?)\s*(?:]([^\]]*?)?\[)?\s*(?:(?<!>)>(?!>)([\w\W]*?)?<)?\s*B}\s*([\w\W]*?)\s*(?:]([^\]]*?)?\[)?\s*(?:(?<!>)>(?!>)([\w\W]*?)?<)?\s*C}\s*([\w\W]*?)\s*(?:]([^\]]*?)?\[)?\s*(?:(?<!>)>(?!>)([\w\W]*?)?<)?\s*D}\s*([\w\W]*?)\s*(?:]([^\]]*?)?\[)?\s*(?:(?<!>)>(?!>)([\w\W]*?)?<)?\s*@}\s*([\w\W]*?)\s*(?:#}\s*([\w\W]*?))?\]\]/gi; 
  const extractEachWord = str => str.split(' ');  // splits the string into an array of words,  extractEachWord() gets choice which already has replace(/\s+/g, ' ').trim() done to it
 
  function addChoiceAttributes(choice,  explEng, explKor) {
    let crossedOut = (!choice.includes('@') && !choice.includes('>>>')) ? '>>>' + choice + '<<<' : choice;  // if user didn't include del tags, then as default, the entire answer is crossed out except the correct answer
    crossedOut = crossedOut.replaceAll('|', ' ').replaceAll('@', '').replace(/\s+/g, ' ').replaceAll('>>>', '<del>').replaceAll('<<<', '</del>').trim();
    choice = choice.replaceAll('<<<', '').replaceAll('>>>', '').replace(/\s+/g, ' ').trim();

    const openingTags = [];
    const closingTags = [];   
    
    const tokens = crossedOut.match(/\S+|\s+/g);
    const tokensLength  = tokens.length
    for (let i = 0; i < tokensLength; i++) {
      const token = tokens[i];
      if (token.includes('>>>')) openingTags.push(i);
      if (token.includes('<<<')) closingTags.push(i);
    }

    return {
      words: [null, ...extractEachWord(choice)], // If | is replaced with ' ' here generateCube can't have multiple words in a face
      crossedOut: crossedOut,
      mcSentence: choice.replaceAll('|', ' ').replaceAll('@', ''),  //word does not get these replaced here, bar must get replaced during generateCube() and @ gets replaced after mcAnswer is determined.
      explEng: explEng ? explEng.split('_').join('\n') : "Explanation is not provided.",
      explKor: explKor ? explKor.split('_').join('\n') : '설명이 제공되지 않았습니다.',
      openingTags: openingTags,  //tags are obsolete, remove if there have been no problems after some time
      closingTags: closingTags
    };
  }   
  function addOrRemoveDel(choice) {  //obsolete
    const crossedOut = (choice.includes('<<<') || choice.includes('>>>')) ? choice.replaceAll('>>>', '<del>').replaceAll('<<<', '</del>') : (!choice.includes('@')) ? '<del>' + choice + '</del>' : choice;
      //  const delRemoved = choice.replaceAll('<<<', '').replaceAll('>>>', '');
    // Process tag indices
    const openingTags = [];
    const closingTags = [];
    const barGone = crossedOut.replaceAll('|', ' ');
    const tokens = barGone.match(/\S+|\s+/g);
    const tokensLength  = tokens.length
    for (let i = 0; i < tokensLength; i++) {
      const token = tokens[i];
      if (token.includes('<del>')) openingTags.push(i);
      if (token.includes('</del>')) closingTags.push(i);
    }
    return { crossedOut, tagIndices: { openingTags, closingTags } };
  }       

  for (const match of kT.matchAll(cqaRgx)) {
    let [_, compQ, choiceA, explEngA, explKorA, choiceB, explEngB, explKorB, choiceC, explEngC, explKorC, choiceD, explEngD, explKorD, answer, justify] = match;  // destructuring - unpack values from arrays or properties from objects into distinct variables
    /*choiceA = choiceA.replace(/\s+/g, ' ').trim();
     const crossedOutA = (choiceA.includes('<<<') || choiceA.includes('>>>')) ? choiceA.replaceAll('>>>', '<del>').replaceAll('<<<', '</del>') : (!choiceA.includes('@')) ? '<del>' + choiceA + '</del>' : choiceA; 
    choiceA = choiceA.replaceAll('<<<', '').replaceAll('>>>', '');

    choiceB = choiceB.replace(/\s+/g, ' ').trim();
    const crossedOutB = (choiceB.includes('<<<') || choiceB.includes('>>>')) ? choiceB.replaceAll('>>>', '<del>').replaceAll('<<<', '</del>') : (!choiceB.includes('@')) ? '<del>' + choiceB + '</del>' : choiceB;
    choiceB = choiceB.replaceAll('<<<', '').replaceAll('>>>', '');

    choiceC = choiceC.replace(/\s+/g, ' ').trim();
    const crossedOutC = (choiceC.includes('<<<') || choiceC.includes('>>>')) ? choiceC.replaceAll('>>>', '<del>').replaceAll('<<<', '</del>') : (!choiceC.includes('@')) ? '<del>' + choiceC + '</del>' : choiceC;
    choiceC = choiceC.replaceAll('<<<', '').replaceAll('>>>', '');

    choiceD = choiceD.replace(/\s+/g, ' ').trim();
    const crossedOutD = (choiceD.includes('<<<') || choiceD.includes('>>>')) ? choiceD.replaceAll('>>>', '<del>').replaceAll('<<<', '</del>') : (!choiceD.includes('@')) ? '<del>' + choiceD + '</del>' : choiceD;
    choiceD = choiceD.replaceAll('<<<', '').replaceAll('>>>', ''); */

    /*     const { crossedOut: delAddedA, tagIndices: tagIndicesA } = addOrRemoveDel(choiceA); // addOrRemoveDel()  returns { crossedOut and delRemoved }
    const { crossedOut: delAddedB, tagIndices: tagIndicesB } = addOrRemoveDel(choiceB); // destructure: extract properties from an object(in this example, the object is the returned value of addOrRemoveDel()). 
    const { crossedOut: delAddedC, tagIndices: tagIndicesC } = addOrRemoveDel(choiceC); // 8 const variables declared
    const { crossedOut: delAddedD, tagIndices: tagIndicesD } = addOrRemoveDel(choiceD); */
    /*    choiceA = delRemovedA;
    choiceB = delRemovedB;
    choiceC = delRemovedC;
    choiceD = delRemovedD; */

    /*    const tagIndicesA = getTagIndices(delAddedA);  // <-- gets tags for A
    const tagIndicesB = getTagIndices(delAddedB);  // returns 2 arrays: openingTags, closingTags
    const tagIndicesC = getTagIndices(delAddedC); 
    const tagIndicesD = getTagIndices(delAddedD);  */

    const objInfo = { 
      compQ: compQ/* .replaceAll('++', ' ') */,  //needed or else .vocab that are multiple words will become urban++agriculture
      choiceA: addChoiceAttributes(choiceA, explEngA, explKorA ),
      choiceB: addChoiceAttributes(choiceB, explEngB, explKorB ),
      choiceC: addChoiceAttributes(choiceC, explEngC, explKorC ),
      choiceD: addChoiceAttributes(choiceD, explEngD, explKorD ),
        /* choiceA: { 
        words: [null, ...extractEachWord(choiceA.replaceAll('++', ' '))],
        crossedOut: crossedOutA.replaceAll('|', ' ').replaceAll('@', ''),
        mcSentence: choiceA.replaceAll('|', ' ').replaceAll('@', '').replaceAll('++', ' '),
        explEng: explEngA ? explEngA.split('_').join('\n') : "Explanation is not provided.",
        explKor: explKorA ? explKorA.split('_').join('\n') : '설명이 제공되지 않았습니다.',
        openingTags: tagIndicesA.openingTags,
        closingTags: tagIndicesA.closingTags        
      },
      choiceB: { 
        words: [null, ...extractEachWord(choiceB.replaceAll('++', ' '))],
        crossedOut: crossedOutB.replaceAll('|', ' ').replaceAll('@', ''),
        mcSentence: choiceB.replaceAll('|', ' ').replaceAll('@', '').replaceAll('++', ' '),
        explEng: explEngB ? explEngB.split('_').join('\n') : "Explanation is not provided.",
        explKor: explKorB ? explKorB.split('_').join('\n') : '설명이 제공되지 않았습니다.',
        openingTags: tagIndicesB.openingTags,
        closingTags: tagIndicesB.closingTags
      },
      choiceC: { 
        words: [null, ...extractEachWord(choiceC.replaceAll('++', ' '))],
        crossedOut: crossedOutC.replaceAll('|', ' ').replaceAll('@', ''),
        mcSentence: choiceC.replaceAll('|', ' ').replaceAll('@', '').replaceAll('++', ' '),
        explEng: explEngC ? explEngC.split('_').join('\n') : "Explanation is not provided.",
        explKor: explKorC ? explKorC.split('_').join('\n') : '설명이 제공되지 않았습니다.',
        openingTags: tagIndicesC.openingTags,
        closingTags: tagIndicesC.closingTags
      },
      choiceD: { 
        words: [null, ...extractEachWord(choiceD.replaceAll('++', ' '))],
        crossedOut: crossedOutD.replaceAll('|', ' ').replaceAll('@', ''),
        mcSentence: choiceD.replaceAll('|', ' ').replaceAll('@', '').replaceAll('++', ' '),
        explEng: explEngD ? explEngD.split('_').join('\n') : "Explanation is not provided.",
        explKor: explKorD ? explKorD.split('_').join('\n') : '설명이 제공되지 않았습니다.',
        openingTags: tagIndicesD.openingTags,
        closingTags: tagIndicesD.closingTags
      }, */
      answer: [null, ...extractEachWord(answer.replaceAll(/\s+/g, ' ').trim())],
      justify: match[15] ? expandRanges(justify) : [],  //sentences to be hili in blue
      mcAnswer: []
    };


    /*const objInfo = {
    compQ:   compQ,
    choiceA: [null, ...extractEachWord(choiceA)],   Array
    choiceB: [null, ...extractEachWord(choiceB)],
    choiceC: [null, ...extractEachWord(choiceC)],
    choiceD: [null, ...extractEachWord(choiceD)],
    answer:  [null, ...extractEachWord(answer)],
    justify: match[7] ? expandRanges(justify) : [],
    mcAnswer: []
    }; */

    for (const choice of ['choiceA', 'choiceB', 'choiceC', 'choiceD']) {
      const words = objInfo[choice].words;  //each index has a single word
      if (words[1]?.includes('@')) {   // [0] is null, user must put @ at the beginning of the answer so @ has to be at [1]
        words[1] = words[1].replaceAll('@', '');
        objInfo.mcAnswer.push(choice); // Add the correct choice to the array
      }
    }
    cqaList.push(objInfo);
  } 

  //console.log(cqaList[2].choiceB.openingTags);   //6 >>>discuss     14 >>>challenges      6         16
  //console.log(cqaList[2].choiceB.closingTags);   //10 benefits<<<    18 urban<<<         12         20
  /* console.log(cqaList[2].choiceC.mcSentence);  
    console.log(cqaList[2].choiceC.crossedOut);  // check to see if ++ is properly getting added */
  kT = kT.replace(/\[\[(?:[\s*([#question\s]*?\d[\w\W]*?[?:][\w\W}]*?)\s*A}\s*(?:[\w\W]*?)\s*B}\s*(?:[\w\W]*?)\s*C}\s*(?:[\w\W]*?)\s*D}\s*(?:[\w\W]*?)\s*@}\s*(?:[\w\W]*?)\]\]/gi, ''); //all Qs in brackets are gone
    

               //  cqaList[nowQ][choice].mcSentence
  cqaListLength = cqaList.length
  for (let i = 1; i < cqaListLength; i++) { //[0] is null
    //    mcQuserAnsStorage.push({ pointableRed: true, pointableGreen: true, red: 0 });
    mcQuserAnsStorage.push({  pointableA: true, pointableB: true, pointableC: true, pointableD: true, red: 0  });  //let mcQuserAnsStorage = [null];   [0] was made null at the top



    let sixteenCubes = [null]; // index 0 is null // [0] will never be used
    for (let j = 0 ; j <= 15; j++) {  
      sixteenCubes.push({
        faceText: [null, null, null, null],
        red: 0
      });
    }
    cubeQuserAnsStorage.push({  
      maxNumOfCubes: sixteenCubes,  
      pointable: true 
    });
  }

  console.log(cubeQuserAnsStorage);
  console.log(mcQuserAnsStorage);
  console.log(cqaList);

  // cubeQuserAnsStorage, mcQuserAnsStorage and cqaList must have identical lengths with [0] being null

  console.log(cqaVocabList);
  

  //  console.log(vocabList);
  //  console.log(cqaVocabList);
  //  console.log(toArrayK())
    //console.time("appendSpans"); // Start the timer
    //pElement.replaceChildren();
   //   works but double check              (?:\[\[)?(\d)?.*\[\[((?:(.*?))(?:\(([\w\s\.:]*)?\))?(?:\.\w+)?)\s+[-=]\s+([\w\W]*?)(?:\((\w[\w\W]*?)?\))?(?:\((\W*)?\))?]]
   sentenceCounter = 0;  //(?:\[\[)?(\d)?.*((?:(?:\[\[)(.*?))(?:\(([\w\s\.:]*)?\))?(?:\.\w+)?)\s+[-=]\s+([\w\W]*?)(?:\((\w[\w\W]*?)?\))?(?:\((\W*)?\))?]]
   const vocabDefnRgx = /\[\[\s*(([\s\S]+?(?:(\(#[\s\S]+?#\)))?)(?:\.(?:jpg|png|gif|bmp|webp|svg|tiff?))?)\s+[-=]\s+(?:\(([\w\W]+?\)?)\))?\s*([\w\W]+?)\s*(?:]([^\[]+?)\[)?\s*(?:>([\w\W]+?)<)?\s*(?:}([\w\W]+?){)?\s*]]/g;    //obsolete (?!\[\[|]]) means: Make sure the next characters are not [[ and not ]].  included [[ to ignore words that can be SIMPLIFY
                         //obsolete [^\[\]\d=-] : prior to '1. How did...' for instance, there could be Q, #, Question, etc. but not brackets, digits, or - and = signs
                        
  const fragment = document.createDocumentFragment(); 
  // At this point kT only has vocabDefnRgx to filter out
  toArrayK(kT).forEach((text, i) => { //text is a sentence       i.e.  [[X = 2]] [[Y‌ = 3]] -> 2 matches. After brackets are filtered -> XY a single match. That's why 끊김 is needed [[X끊김 = 2]] [[Y끊김‌ = 3]] ->  X끊김 Y끊김 -> 2 matches not 1
    const template = document.createElement("template");// Create a temporary div to safely parse and manipulate the HTML content
    template.innerHTML = text;  //originally tempDiv.innerHTML = text; <img> will pass this check 'childNode.nodeType === Node.TEXT_NODE && childNode.textContent.trim() !== ""' but doesn't matter because regex won't match it
    Array.from(template.content.childNodes).forEach(childNode => {  //childNodes: For all child nodes (elements, text, comments).
      if (childNode.nodeType === Node.TEXT_NODE && childNode.textContent.trim() !== ""){ 
        sentenceCounter++;     // counts every sentence
        for (const match of childNode.textContent.matchAll(vocabDefnRgx)) {  // Find matches for each string
          const fileName    = match[1];                         // match[0] is the full matched string
          const word        = match[2];                         // match[1], match[2], etc., correspond to the capturing groups 
          const wordID      = match[3];  
          const wordType    = match[4]?.split('_').join('\n');  // this loop will only run if there is a match of opening and closing double brackets
                                         
          const meaning     = match[5];
          const syn         = match[6]; // NOTE: purposefully merged appending each node while extracting vocab info to make sure sentIndex is the index in diamondArray where the vocab resides
          const korean      = match[7];
          const antn        = match[8]?.split('_').join('\n');  // to have antn appear on multiple lines

          //console.log (`match.index: ${match.index}   sentenceCounter: ${sentenceCounter} `);          
          //console.log(`sentIndex: ${sentIndex}, Match:`, match);  // Log the index and the match for debugging
          vocabList.push({ fileName:fileName, word:word, wordID:wordID, wordType:wordType, meaning:meaning, syn:syn, korean:korean, meaningON:false, synON:false, koreanON:false, sentIndex:i, perceivedIndex:sentenceCounter, antn:antn });  // an array of objects
          //Use this if the bottom doesn't work. This does not capture (1) as in drive(1) childNode.textContent = childNode.textContent.replace(/\[\[\s*(?:([\s\S]+?)(?:\((?:[\s\S]+?)\))?(?:\.(?:jpg|png|gif|bmp|webp|svg|tiff?))?)\s+[-=]\s+(?:[\w\W]+?)\s*(?:\((?:[\w\W]+?)\))?\s*(?:>(?:[\w\W]+?)<)?\s*(?:{(?:[\w\W]+?)})?\s*]]/g, '$1');
          childNode.textContent = childNode.textContent.replace(/\[\[\s*(?:([\s\S]+?(?:\((?:[\s\S]+?)\))?)(?:\.(?:jpg|png|gif|bmp|webp|svg|tiff?))?)\s+[-=]\s+(?:[\w\W]+?)\s*(?:\((?:[\w\W]+?)\))?\s*(?:>(?:[\w\W]+?)<)?\s*(?:{(?:[\w\W]+?)})?\s*]]/g, '$1');
          // Add the word with zero-width characters and meaning to kWordObj
          //const wordWithZeroWidth = '\u200E' + word; // Add Zero Width Non-Joiner (ZWNJ) before the word
          //kWordObj[word] = meaning; OBSOLETE possibly.   key: kWordObj[word] value: meaning   Store in the format { word: meaning } bracket notation to assign a value (meaning) to a property of an object (kWordObj).
        }  
        const span = document.createElement("span");// If it's a text node, wrap it in a <span> and process it
        span.innerHTML = childNode.textContent.replace(/\s*\(#[^)]*#\)/g, '');     //lightUpAll(childNode.textContent);  nothing should be lit up at start

        span.dataset.index = i;

        //span.dataset.sentence = sentenceCounter;
        fragment.appendChild(span);  // this allows each sentence to be hili with a click
        diamondAR.push(childNode.textContent);
      }
      else {
        //fragment.appendChild(childNode);
        const wrappedNode = childNode.nodeName === 'IMG' ? (() => {
            const span = document.createElement('span');
            span.setAttribute('data-index', '0');  
            span.appendChild(childNode);
            return span;})() //The parentheses at the end (): makes the function immediately invoked. Without these parentheses, you would just define the function, but it wouldn't run until explicitly called. The parentheses () after the function declaration immediately call the function as soon as it's defined.
        : childNode;
      
      fragment.appendChild(wrappedNode);        
        /* if (childNode.nodeType === Node.TEXT_NODE)          diamondAR.push(childNode.textContent);                // Whitespace still keep it
        else if (childNode.nodeType === Node.ELEMENT_NODE)  diamondAR.push(childNode.outerHTML);          // Element like <img> — get its outerHTML as a string */
        if (childNode.nodeType === Node.ELEMENT_NODE)  diamondAR.push(childNode.outerHTML);
        else diamondAR.push(childNode.textContent);
      }
    });
  });

  pElement.appendChild(fragment); // Batch update in one go
console.log(vocabList);



  // obsolete if diamondAR.push works in toArrayK().forEach.   kT = kT.replace(/\[\[(.*?)(?:\([\w\W]+?\))?(?:\.\w+)?\s+[-=].+?]]/g, '$1');  // need this line, only the nodes' brackets were replaced, must do it to kt too for diamondArray later. 
  diamondAR = Object.freeze(diamondAR);
  diamondArLength = diamondAR.length;
  console.log(diamondAR);

  for (let i = 1; i <= sentenceCounter; i++) { //each key in teacherQAarr corresponds to each sentence of kT. If there are no QA, it's given a default message
    if (!teacherQAarr.hasOwnProperty(i)) {
      teacherQAarr[i] = [defaultQAmsg];
    }
  }
  function filenameToEachIdx(matchedImages, side) {
    let imgArray = [];
    matchedImages.forEach(imgIndex => {
        let [sentNum, filename] = imgIndex.split(":");
        sentNum.split(",").forEach(num => { imgArray[+(num)] = filename; });
    });
    for (let i = 1; i <= sentenceCounter; i++) 
      if (!imgArray[i]) imgArray[i] = side === 'L' ? leftPicDefault:rightPicDefault;    //default magLpic
    return imgArray;
  }
  rightPics = filenameToEachIdx(rightPics, 'R');
  leftPics = filenameToEachIdx(leftPics, 'L');

  rightPics = Object.freeze(rightPics);
  leftPics = Object.freeze(leftPics);

  /* console.log(rightPics);
  console.log(leftPics); */

  //diamondAR = toArrayK();
  //diamondAR[diamondAR.length - 1] += '\n'.repeat(8) + '\u200C';
  //diamondAR = Object.freeze(toArrayK()); // without brackets
  //obsolete kUserTxtAR(obsolete) = [...diamondAR];  essentially kUserTxtAR(obsolete) = [Str1, Str2, Str3, Str4..];  //each element is being "assigned" to the corresponding index in kUserTxtAR(obsolete) one by one
  while (isEmptyOrImage(diamondAR[sentNow])) sentNow++; 
  
  //appendSpans();
  //kUserSent = diamondAR[sentNow];  // without this, magSent is undefined if sent is not hili
      /*     for (const childNode of tempDiv.childNodes) {
       if (childNode.nodeType === Node.TEXT_NODE && childNode.textContent.trim() === "" || childNode.nodeType === Node.ELEMENT_NODE && childNode.tagName === "IMG") {
         fragment.appendChild(childNode);
       }
       else if (childNode.nodeType === Node.TEXT_NODE)
       {
         const span = document.createElement("span");
         span.innerHTML = lightUpAll(childNode.textContent);
         span.setAttribute("data-index", index);
         fragment.appendChild(span);
       } 
     } */
     //kT = kT.replace(/\[\[([\W\w]+?)\s*-\s*([\W\w]+?)]]/g, '$1');

   //console.timeEnd("appendSpans"); // End the timer and log the elapsed time



  /*
 // Select all span elements with the data-index attribute inside pElement
  const sentences = pElement.querySelectorAll('span[data-index]');
  sentences[2].classList.add('lightUpSentence');
  sentences[2].classList.toggle('lightupSentence');

  // Get the value of the data-index for the 3rd span (index 2)
  const thirdSpanDataIndex = sentences[2].getAttribute('data-index');

  console.log(thirdSpanDataIndex);  // Logs the data-index value of the 3rd span
  console.log(sentences[2].textContent);  // Logs the text content of the 3rd span 

 */

 /*  pElement.addEventListener("click", (event) => {
      const clickedElement = event.target;
      if (clickedElement && clickedElement.hasAttribute("data-index")) {
          sentNow = Number(clickedElement.getAttribute("data-index"));
          updateKT();
      }
  }); */




    //magSent.addEventListener('click', (event) => {  ** obsolete bc it's handled in mouseup of kVocab._handleMouseUp = function(event)
  //    const vocabElement = event.target.closest('.vocab');
  //  if (compQboo || !vocabElement) return;
  //  sentWithVoc = parseInt(vocabElement.getAttribute('data-kword'));
    
    
  //  ///////if (compQboo || (!event.target.closest('.vocab'))) return; // If qbtn is true, do nothing and exit
  //  //const index = event.target.dataset.kword.match(/^(\d+):/)[1]; //extracts the first match which is the number. '^': anchor, start of the string '[1]': the first capturing group
  //  //let vocabElement = event.target.closest(".vocab"); // Find the nearest element with class "vocab"
  //  //////sentWithVoc = parseInt(event.target.closest('.vocab').getAttribute('data-kword'), 10);
    
    
    
    
    
  //  //<p>
  //  //   &gt;사진사진2&lt; I like <span class="color litPink">to</span> 
  //  //                           <span class="vocab" data-kword="67: slumber">
  //  //                                 <span class="color litPink">slumber</span>  
  //  //                           </span>.
  //  // </p>
  //  //sentWithVoc = parseInt(event.getAttribute('data-kword'), 10);
  //  //sentWithVoc = parseInt(event.currentTarget.getAttribute('data-kword'), 10);// uses base 10 for conversion
  //  //sentWithVoc = parseInt(event.target.dataset.kword, 10);  
  //  //console.log(event.target.dataset.kword);
  //  //adjustClientHeight(0.48);
  //}, true); // Without true, the first click won't show img because  is 0





// this makes it do capturing phase(going from parent to children) default is bubbling phase(children to parent). This must go before 'click' from function toggle so sentNow is determined which is needed to toggle only the word in the span[index] that the user clicked.
          /* Capture phase:
          Event travels from the top (document) down to the target element         
          → only listeners with true get called here                                 

          Target phase:
          The event reaches the element that was actually clicked                 
          → both capture and bubble listeners on that element can run             

          Bubble phase:
          Event bubbles up from the target back to the document                  
          → listeners with false (or default) get called here                  
          
          document.addEventListener('click', () => console.log('Document (capture)'), true);
          document.addEventListener('click', () => console.log('Document (bubble)'));
          parent.addEventListener('click',   () => console.log(' Parent  (capture)'), true);
          parent.addEventListener('click',   () => console.log(' Parent  (bubble)'));
          child.addEventListener('click',   () =>  console.log( 'Child   (capture)'), true);
          child.addEventListener('click',   () =>  console.log(' Child   (bubble)')); 

          Order of what will be logged:
          Document (capture)
          Parent (capture)
          Child (capture)
          Child (bubble)
          Parent (bubble)
          Document (bubble)
          without 'true' for the 3rd argument, the event listener will ONLY run during the bubbling phase
          
          */

            //        false        true        null
  //const Origin = { pElement: 0, magSent: 1, msgBox: 2, qText: 3 };

  
  
               
    /* let magSentVocNodeList = magSent.getElementsByClassName('vocab');
    if (magSentVocNodeList.length > 0) syncListeners(magSentVocNodeList, false, true);
    if (   paraVocNodeList.length > 0) syncListeners(paraVocNodeList,    false, false);  */
    




 // pElement.addEventListener('mousedown', event => attachFloatTagDOWN(event, false));




  





  /*     pElement.addEventListener('mousedown', (event) => {
  mouseDownTime= Date.now();

  }); */
  





  setTimeout(() => {  //force an update and wait a tick. initializes scrollbar at the beginning
    updateSmoothProgressBar(scrollbar, progressBarL, progressBarR); 
  }, 0);


  window.addEventListener('resize', () => {// after to start-BTN (Separate into Sentences)
    //updateProgressBar(scrollContent, progressBarL, progressBarR);
    setTimeout(() => {
      updateSmoothProgressBar(scrollbar, progressBarL, progressBarR);
    }, 0);

    magSent.style.overflow = 'hidden'; //to again hide mc if it overflows out of its container when the container gets narrower
    if (magnifyBoo || multChoiceQon) adjustFontsize(magSent);
    if (        compQboo           ) adjustFontsize(qText);
    if (msgBoxBoo ) adjustFontsize(current);
    if (msgBoxBoo ) adjustFontsize(next);

    setGlowEffectRx(); // readjusts the line going around magSentCont/msgBox

  });




  //  kT = kT.replace(/p\.m\.(,?\s[a-z])/g, 'pm$1').replace(/p\.m/g, 'pm').replace(/pm\.([!?])/g, 'pm$1').replace(/P\.M\.(,?\s[a-z])/g, 'PM$1').replace(/P\.M/g, 'PM').replace(/PM\.([!?])/g, 'PM$1');
  // am tv ad bc PM TV AD BC
  //.replace(/"(\w)/g, '“$1').replace(/(.)"/g, '$1”').replace(/([\w.!?])'/g, '$1’').replace(/\s'(\w)/g, ' ‘$1'); 
  /*
  kT = kT.replace(/\b(p|P)\.m\.(,?\s[a-z])?/g, function(match, p1, p2) {
    return (p1 === 'p' ? 'pm' : 'PM') + (p2 || '');
  }).replace(/\b(p|P)m\.\b([!?])/g, '$1m$2');
  */
  //kT = kT.replace(/\"/g, '″');
  //kT = kT.replace(/\'/g, '′');


}


/*
document.getElementById("myForm").addEventListener("submit", function(event) {
  event.preventDefault(); // Prevent the default form submission
  
  // Get the form data
  let formData = new FormData(this);
  
  // Manipulate the form data as needed
  let kT = formData.get("message");
  // You can perform manipulations on the message here
  
  // Example: Log the message to the console
  console.log("Message:", kT);
  kT = kT.replace(/(\w+\u200B\u200C\w\b)/g, '<span style="white-space: nowrap;">$1</span>');  // glues ea&#x200B;&#x200C;t
  kT = kT.replace(/(\w+\u200B\w\b)/g, '<span style="white-space: nowrap;">$1</span>');  // glues kno&#x200B;w

  
  // Example: Send the form data to another JavaScript function for further processing
  processData(formData);
  
  // You can also send the form data to a server using AJAX if needed
  // Example: sendFormDataToServer(formData);
  console.log(diamondAR);
});


function processData(formData) {
  // Do something with the form data
}


/*
start();
function start(){
  kT = kUserTxtAR(obsolete).join('');
  kT = kT.replace(/(\w+\u200B\u200C\w\b)/g, '<span style="white-space: nowrap;">$1</span>');  // glues ea&#x200B;&#x200C;t
  kT = kT.replace(/(\w+\u200B\w\b)/g, '<span style="white-space: nowrap;">$1</span>');  // glues kno&#x200B;w
  kT = kT.replace(/(Ron Mas)/g, '<span id="circle"></span>$1');
  toArrayK(kT);
  kUserInput.innerHTML = kT;
  updatePic('galaxy.gif'); 
}
 */ 


 
  
/*   while ((container.scrollHeight > container.clientHeight || container.scrollWidth > container.clientWidth) && fontSize > 18) {
    container.style.fontSize = (fontSize -= 2) + 'px';
  }
  
  while (container.scrollHeight <= container.clientHeight && container.scrollWidth <= container.clientWidth && fontSize <= 45) {
    container.style.fontSize = (fontSize += 2) + 'px';// increase font size if there’s space
    if (container.scrollHeight > container.clientHeight || container.scrollWidth > container.clientWidth) {
      container.style.fontSize = (fontSize -= 2) + 'px';// Stop increasing if it overflows
        break; */

        
function adjustFontsize(container, cFont = 45) { // cFont becomes 45 only when nothing was passed as the 3rd argument
  const fromCubes = (cFont === 24);              
  const tolerance = cFont === 45 ? 1 : 0;  // if given tolerance to cube face, then words that can fit can stick out of its container
  const minFont = 13; // obsolete: tolerance changed from 5 to 3 because 'g' was being cutoff in tQA
  let min = minFont;
  let max = cFont;


  requestAnimationFrame(() => { // ABSOLUTE MUST: // Let the DOM paint first before measuring
    const testEl = container.cloneNode(true);// Create off-screen clone
    testEl.style.position = 'absolute';
    testEl.style.visibility = 'hidden';
    testEl.style.pointerEvents = 'none';
    testEl.style.height = container.clientHeight + 'px';
    testEl.style.width = container.clientWidth + 'px';
    testEl.style.overflow = 'auto';
    testEl.style.whiteSpace = container.style.whiteSpace;
    testEl.style.wordBreak = container.style.wordBreak;
    testEl.style.top = '-9999px';
    testEl.style.left = '-9999px';
    document.body.appendChild(testEl);     // Append to body temporarily

    // Binary search on test element
    while (min <= max) {
      const mid = Math.floor((min + max) / 2);  //must set the font size first, then measure overflow
      testEl.style.fontSize = mid + 'px';
      
      const overflowing = // Can't be >= or else font sometimes shrinks to 13 (i.e. revolutionizing)even when there is space
        testEl.scrollHeight - testEl.clientHeight > tolerance ||
        testEl.scrollWidth - testEl.clientWidth > tolerance;

      if (overflowing)  { max = mid - 1; }
      else {cFont = mid;
            min = mid + 1;
      }
    }

    let overflowing;  //true ensures loop condition evaluates without error (even on the first pass, the variable is defined and truthy on first check)
    while ((overflowing = testEl.scrollHeight - testEl.clientHeight > tolerance || //   Shrink further if still overflowing
            testEl.scrollWidth - testEl.clientWidth > tolerance) && cFont > minFont) {
      cFont--;
      testEl.style.fontSize = cFont + 'px'; // must be called any time cFont changes
      //console.log(`⬇ shrink: cFont=${cFont} : ${tolerance}`);
    }

    cFont = Math.max(cFont, minFont); // 5️⃣ Enforce minimum font size, if (cFont <= 13)  { cFont = 13; }
    container.style.fontSize = cFont + 'px';// Apply final size to real container
    
    if (fromCubes && cFont === minFont && overflowing) { // only for cubes, because once the whiteSpace wordBreak are set they won't change
      //console.log('📦 Font is at minimum but still overflowing — enable wrapping');
      container.style.whiteSpace = 'normal'; // white-space: normal: line breaks at spaces or hyphens only
      container.style.wordBreak = 'break-word'; //Long words break instead of overflowing
    }
    document.body.removeChild(testEl);// Clean up
   }); 
}
        


/*    Tried this but toggling wasn't smooth, it flickered but toggling was faster
Technique	Use When...	Pro	Con
debounce()	Handling bursts (resize, input)	Prevents repeated work	Delay adds latency
cancelAnimationFrame()	Avoiding redundant DOM updates	Precise per-element control	More logic to manage
setTimeout stagger	Batch of elements running same logic	Simple to stagger load	Slightly harder to coordinate
requestIdleCallback	Non-urgent work (like adjusting fonts)	No jank, runs in idle time	Might delay execution

const rafMap = new WeakMap();
function scheduleFontAdjustment(container, cFont = 45) {
  if (rafMap.has(container)) {
    cancelAnimationFrame(rafMap.get(container));
  }

  const rafId = requestAnimationFrame(() => {
    adjustFontsize(container, cFont);
    rafMap.delete(container);
  });

  rafMap.set(container, rafId);
}

requestIdleCallback(() => scheduleFontAdjustment(face, 24));  “When you're idle, please run this function that calls scheduleFontAdjustment with these arguments.”

 */




/* function updateMagSent(targetElement, imageSrc) {
  targetElement.replaceChildren();  
  const imgElement = Object.assign(document.createElement('img'), { id: `${targetElement.id}-img`,  alt: 'picture' 
  });
  targetElement.appendChild(imgElement);
  console.log(imageSrc);
  displayImage(imageSrc, `${targetElement.id}-img`);

}updateMagSent(magSentL, 'leftImage.png');  
updateMagSent(magSentR, 'rightImage.png')
 */




function styleMagSentStats(sentNow){
 // magSentStats.innerHTML = `<p>${Math.round(sentNow / 2)}/${sentenceCounter}</p>`;
  //toInnerHTML(magSentStats, `<p>${Math.round(sentNow / 2)}/${sentenceCounter}</p>`);
  if (sentenceCounter !== null) magSentStats.textContent = `${Math.round(sentNow / 2)}/${sentenceCounter}`;// at the start when no text has been selected, magSentStats will be 1/null without if (sentenceCounter !== null)
}





function highlightSubjectAndVerb(paragraphId) {
  var paragraph = document.getElementById(paragraphId);
  var text = paragraph.textContent;   
  var subject = "cage";
  var verb = "was";
  var highlightedText = text.replace(new RegExp('\\b' + subject + '\\b', 'gi'), '<span class="highlight-subject">$&</span>');
  paragraph.innerHTML = highlightedText;
}


function hiLiEnd(tempKt){  
  ///// temp console.log('1 hiliEnd function')                           // u200D]+?)(i\u200D?e\u200D   added u200D to accept music notes                                                                                                                     \u200B\u200D\u200E\s\w,’?]*">   prevents matching words in kword span                                                                                                                                                                                                                                                                                                                                  
  //original regex: kT = kT.replace(/(?<!\u200B\w+|e)(i?ed)\b(?!">|<\/span>)|(?<!\u200B\w+|\bwa|\ba|\bhi|\bi|\bthi|\bM|\bMr|\bu|s)(s)(?!\u200B\u200D|">|<\/spasdfn>)\b/gi, function(match, group1, group2) {  // removed(?=\W|$)  The negative lookahead ensures that "s" is not immediately followed by \u200D.
  // June 15: tempKt = tempKt.replace(/\b(?:(\w[\w\u200D]+?)(?<!\u200E)(i\u200D*e\u200D*d|(?<!e)e\u200D*d)\b|\b(\w[\w\u200D]+?)(?<!\b[aiMu]|\b(?:[hwHW]a|[hH]i|Mr|PB|IR|GP|lb)|\b(?:[dD]oe|[tT]hi)|s)(?<!\s|\.|\u200E)(s’|’?s\b))(?![\u200B\u200D\u200E\s\w,.!?’”\-:;()]*">|\u200D)/gi, function(match, preIED, iED, preS, justS) {    //           (?<!⊗\w|e)(i?ed)\b(?!">|<\/span>)|(?<!\b[⊗aiMu]|\b(?:wa|hi|Mr)|\bthi|s)(s)(?!⊗⊗|">|<\/span>)\b

  tempKt = tempKt.replace(/\b(?:(\w[\w\u200D]+?)(?<!\u200E)(i\u200D*e\u200D*d|(?<!e)e\u200D*d)\b|\b(\w[\w\u200D’]+?)(?<!\b[aiMu]|\b(?:[hwHW]a|[hH]i|Mr|PB|IR|GP|lb)|\b(?:[dD]oe|[tT]hi)|s)(?<!\s|\.|\u200E)(s\b))(?![\u200B\u200D\u200E\s\w,.!?’”\-:;()]*(?:\(#[^\)]+\))?\">|\u200D)/gi, function(match, preIED, iED, preS, justS) {    //           (?<!⊗\w|e)(i?ed)\b(?!">|<\/span>)|(?<!\b[⊗aiMu]|\b(?:wa|hi|Mr)|\bthi|s)(s)(?!⊗⊗|">|<\/span>)\b
  if (justS) {    //          |<\/span>)    to not capture endings when simplify vocabs are hili; ris&#x200B;&#x200C;e   \u200B\u200D stop s in ris being hili           excluding the banned words like was and as, any 'tagged words' which are words ending in s\u200B will be caught obsolete   he needs\200B to go
    return `${preS}<span style="white-space: nowrap;">\u200D<span class="color lightCyan">${justS}</span></span>`; 
  }else if (iED){
      return `${preIED}<span style="white-space: nowrap;">\u200D<span class="color lightCyan">${iED}</span></span>`;}
  });
  return tempKt;
}
//else if (tagS) {   
 // return `${preS}<span style="white-space: nowrap;">\u200D<span class="color lightCyan">${tagS}</span></span>`; }


// works on regex         (?<!%|e)(i?ed)\b(?!">|<\/span>)|(?<!%|\bwa|\ba|\bhi|\bi|\bthi|\bM|\bMr|\bu|s)([sS])(?!%@|">|<\/span>)\b

function hiLiArticle(tempKt){ // 1/25: (?<!\s‎)(?<!^‎)(?![​‎\s\w]*">)(?=\b)(a|an|the)(?=\s)           
///// temp  console.log('2 hiliArt function')           //(?![\u200E\s\w]*">) skips simplify  checks multiple look aheads and look behinds and if all those conditions are met, the article is caught
                                     // (?<!^‎) - At the current position, make sure that we're not immediately after the start of the string followed by a U200E character
  tempKt = tempKt.replace(/(?<!\s\u200E)(?<!^\u200E)(?![\u200B\u200D\u200E\s\w,.!?’”()]*">)(?=\b)(of|for)(?=\b)/gi, '<span class="color lightOrange">$1</span>'); 
  tempKt = tempKt.replace(/(?<!\s\u200E)(?<!^\u200E)(?![\u200B\u200D\u200E\s\w,.!?’”()]*">)(?=\b)(a|an|the)(?=\s)/gi, '<span class="color lightOrange">$1</span>'); //(?=\s) and not \b because \b would match a. in a.m.
                    //look ahead makes sure u200B\u200D\u200E\s\w,.!?’”() are not present. i.e. 'an' in span is not caught here: To <span class="vocab" data-kword="2:14 show how he feels (usually in an unhappy way) about">show how he feels (usually in an unhappy way) about</span> zoning laws that has to really and significantly limit  urban farming .
  return tempKt;//B: 일/이 could be part of simplify  D:music note   E:끔
}                                 
//⊗
// (?<!\u200E)(ha(?:s|ve|d)|need(?:s|ed)?|ought)
function hiLiHvBv(tempKt){ //((?:do(?:es)?|did)(?:n’t)?)    <span class="color litPurple">
  ///// temp console.log('3 hiliHvBv function')             ////////////              \u200D\u200E catches music notes and )끔(
  if (infBoo) tempKt = tempKt.replace(/<span class="color litPink2">([^<]+)<\/span>/g, '$1');  // deletes Pink2 so it can be colored Purple2 which then can turn into INF. if there's '(wouldETC)have to'
  tempKt = tempKt.replace(/(<span class="vocab" data-kword="[^"]*">)?([\w\s\u200D\u200E,’]*?)(\u200E\u200B[\w\u200D]+)(?![\w\s\u200D]*")/g,'$1$2<span class="color lightPurple2">$3</span>'); // neg lookahead seems to make sure not to catch text inside a span
  
  //Feb. 26: manual hili                             (<span class="vocab" data-kword="[^"]*">)?([\w\s‍‎,’]*?)(​​[’\w‍]+)(?![\w\s‍]*")
  tempKt = tempKt.replace(/(<span class="vocab" data-kword="[^"]*">)?([\w\s\u200D\u200E,’]*?)(\u200B\u200B[’\w\u200D]+)(?![\w\s\u200D]*")/g,'$1$2<span class="color lightPurple">$3</span>');
    //tempKt = tempKt.replace(/(\u200B\u200B\w\S+)|(\u200E\u200B\w\S+)/gi, (match, onlyHVBV, hvbvANDinf) => {//manually hili hvbv
    //  if (onlyHVBV) return `${colr(onlyHVBV, 'Purple')}`;  
    //  else if (hvbvANDinf) return `${colr(hvbvANDinf, 'Purple2')}`;});
     ///////////////// // (?![\u200B\u200D\u200E\s\w,’]*">) prevents matching words in kword span.   /////////////////////////////////////////////////////////////////////////////////////////          \u200E? captures >끔<to         
  tempKt = tempKt.replace(/(?![\u200B\u200D\u200E\s\w,’]*">)((?:do(?:es)?|did|should|wo(?:uld)?)(?:n’t)?|may|might|will|shall)\s(not\s)?(?<!\u200E)((?:ha(?:s|ve|d|ving)|need(?:s|ed)?|ought)\s\u200E?to)/gi, //When there is have/has to, the previous aux. (in this case 'do' verbs) verb becomes highlighted & isolated and doesn't get recognized in the later code because of \u00A0.Need to do the same for the following: You MAY/MIGHT have to take the test again. I SHALL have to let you know later. You WILL have to submit your report soon. I WOULD have to think about it. //these aux verbs don't need to be marked.
    (match, doETC, not, haveETC) => `${colr(doETC, 'Purple')} ${not || ''}${haveETC}`);
  
  // kT = kT.replace(/(do|does|did)(?:n’t)?(?: not)?\u200B)/gi, '<span class="color lightPurple">$1</span>'); // at start, if there is have/has to then do/does/did gets 200B attached to it (do(?:es)?(?:n’t)?(?: not)?) have to/g, '$1\u200B have to') Also all Hv (except have/has to) and next word are joined with u00A0
  //kT = kT.replace(/(?<!\u200B)\b(have to|has to|would|wouldn’t|could|couldn’t|should|shouldn’t|must|mustn’t|will|won’t|can|cannot|can’t|do|don’t|does|doesn’t|did|didn’t|shall|may|might)\s(?:(?!(?:\w*ly|first|not|you|always|never|sometimes|often|better)\b)(\w+)|(?:(\w+)\s(\w+))|(?:))/gi, function(match, group1, group2, group3, group4) {
  //               (?<!\s​)\b\w+
  //Feb 25: (?<!\s‎|‎)((?:<span[^>]+>(?:(?!(?:ha(?:s|ve|d)|need(?:s|ed)?|ought))(?:[\w+\s’‍]))*?)*(?:<\/span>(?:\snot)?)?\s?)?\b(?:(?![​‍‎\s\w]*">)(ha(?:s|ve|d)|need(?:s|ed)?|ought)\s((?:‎​|‎)?to,?)|(?<![\s^">]‎)\b((?:(?:(?:[wcs]h?ould|did|does|(?<!to\s)[dw]o|must|can)(?:n?’t)?)|(?:cannot|may|will|shall|might))\b\S?)) (?:(?!(?:\b(?!(?:sup|re|im|ap|multi)ply|bully|rely|[fp]ly|[dt]?ally)\b\w*ly|first|not|never|(?:often|some)(?:times)?|just|even|still|always|you|also|I|you|s?he|it|we|they)\b)(<span[^>]+>)?(\w(?:\S+))|(\w+)\s(<span[^>]+>)?((?!\band|but\b)\w(?:\S+))|(\w+ly)\s(\w+)\s(\w+ly)\s(<span[^>]+>)?(\w(?:\S+))|(?:))
  //July 2: (?<!\s\u200E|^\u200E)((?:<span[^>]+>(?:(?!(?:ha(?:s|ve|d|ving)|need(?:s|ed)?|ought))(?:[\w+\s’\u200D]))*?)*(?:<\/span>(?:\snot)?)?\s?)?\b(?:(?![\u200B\u200D\u200E\s\w]*\">)(ha(?:s|ve|d|ving)|need(?:s|ed)?|ought)\s((?:\u200E\u200B|\u200E)?to,?)|(?<![\s^\">]\u200E)\b((?:(?:(?:[wcs]h?ould|did|does|(?<!to\s)[dw]o|must|can)(?:n?’t)?)|(?:cannot|may|will|shall|might))\b\S?)) (?:(?!(?:\b(?!(?:sup|re|im|ap|multi)ply|bully|rely|[fp]ly|[dt]?ally)\b\w*ly|first|not|never|seldom|(?:often|some)(?:times)?|just|even|still|always|you|also|I|you|s?he|it|we|they)\b)(<span[^>]+>)?(\w(?:\S+))|(\w+(?:\sever)?)\s(<span[^>]+>)?((?!\band|but\b)\w(?:\S+))|(\w+ly)\s(\w+)\s(\w+ly)\s(<span[^>]+>)?(\w(?:\S+))|(?:))
  tempKt = tempKt.replace(          //////////////////////////////////////////////////////////////////                       (?![\u200E\u200B\u200E\s\w]*">) don't so \s\S only characters in [] must get caught. It prevents data in kword span from getting caught                           
    /(?<!\s\u200E|^\u200E)((?:<span[^>]+>(?:(?!(?:ha(?:s|ve|d|ving)|need(?:s|ed)?|ought))(?:[\w+\s’\u200D]))*?)*(?:<\/span>(?:\snot)?)?\s?)?\b(?:(?![\u200B\u200D\u200E\s\w]*\">)(ha(?:s|ve|d|ving)|need(?:s|ed)?|ought)\s((?:\u200E\u200B|\u200E)?to,?)|(?<![\s^\">]\u200E)\b((?:(?:(?:[wcs]h?ould|did|does|(?<!to\s)[dw]o|must|can)(?:n?’t)?)|(?:cannot|may|will|shall|might))\b\S?)) (?:(?!(?:\b(?!(?:sup|re|im|ap|multi)ply|bully|rely|[fp]ly|[dt]?ally)\b\w*ly|first|not|never|seldom|(?:often|some)(?:times)?|just|even|still|always|you|also|I|you|s?he|it|we|they)\b)(<span[^>]+>)?(\w(?:\S+))|\b((?:(?!(?:sup|re|im|ap|multi)ply|bully|rely|[fp]ly|[dt]?ally)(?:hardly ever|\w*ly|first|not|never|just|even|still|(?:often|some)(?:times)?|always|seldom|also)\s?){1,3})\b\s(<span[^>]+>)?((?!\band|but|or\b)\w(?:\S+))|(\w+ly)\s(\w+)\s(\w+ly)\s(<span[^>]+>)?(\w(?:\S+))|(?:))/gi, 
    function(match, spnAux, have, kTo, auxV, spnB1, baseV, notBV, spnB2, baseV2, adv1, kAnd, adv2, spnB3, baseV3) {    //////////////////////////////////////////////////////////////////////////////////////\S? to accept punctuation/////"> to not catch doETC+have if it's off///////////////////////////////////////////////////////////////////////////                                             (\w(?:[\w\200D]+))(?![\s\w\200D]*">|\u200D)                                                          D: not only 연결, but ♪  E: 끔 in endings                                                                                                                                                                                                                       
     // (?<!\s\u200E|^\u200E) obsolete for auxVto but not just auxV       =>          \w+\s\u200D]                   (?:\snot)? to catch i.e. You [[would not have to >끔<for the sake of god >일이<kn♪♪o♪♪w better-know that was wrong]]. B4                                                                                                                                                                                                                                      
     //console.log(spnAux, have, kTo, auxV, spnB1, baseV, notBV, spnB2, baseV2, adv1, kAnd, adv2, spnB3, baseV3)
     //console.log(tempKt);
     if       (kTo === undefined)        return colorHvBvOrINF(have, spnAux, auxV,spnB1, baseV, notBV, spnB2, baseV2, adv1, kAnd, adv2, spnB3, baseV3, 'Purple');  // If no base value is found, return just the auxV and \u00A0       spnB1: to ignore SIMPLIFY vocab
    else if (!kTo.startsWith('\u200E'))  return colorHvBvOrINF(have, spnAux, kTo, spnB1, baseV, notBV, spnB2, baseV2, adv1, kAnd, adv2, spnB3, baseV3, 'Purple2'); // Purple2 means it can be turned off so that INF can make it pink
    else if  (kTo.startsWith('\u200E'))  return colorHvBvOrINF(have, spnAux, kTo, spnB1, baseV, notBV, spnB2, baseV2, adv1, kAnd, adv2, spnB3, baseV3, 'Purple');  // to is off which means manual INF is off. so to+bv can't be prpl2 and turn off, bc it won't be hili Pink2
    
    return match;});  // returns as default                                    '',   bc hvbv does not have spnTo
    return tempKt;}                                          
  /* Test subjects
  I have to not reply. I                            have to really not go   
  I have to never sing.  He wants                        have to not bring a cup. 
  He have to not pass the test. 
  HE have to sometimes not pass the test
  He have to not bully them.
  He have to hardly ever bully them.
  I    have to, without a doubt, finish
  I have to happily still multiply those numbers. I want to never supply them with water
  I have to happily just give them water. I want         to just happily give them water. 

  He  wants to not oftentimes calmly talk. He wants to always calmly talk.
  He  have to give
  They have to calmly still talk. They want to still just calmly talk.
  They have to never quickly not just calmly talk.
  They have to slowly talk. 
  They have to first talk
  They have to also talk
  They have to not talk day.                               
  They have to not slowly talk.                       
  They have to not first talk                                                  
  They have to not also talk                  
  They have to not not talk

  They have to not hardly ever just talk
  They have to not sometimes just talk. 
  They have to not just first talk
  They have to not just also talk
  They have to not just not talk

  He have to not oftentimes calmly talk.
  He have to not oftentimes calmly [[talk - walk]] */



    
    
function colr(HvBvINFwords, hiliColor) {
  return `<span class="color light${hiliColor}">${HvBvINFwords}</span>`;}

function hiLiInf(tempKt){ //11/26: (?<!\s‎|^‎)\b((?:ha(?:s|ve|d)|need(?:s|ed)?|ought)​?)\s(?:(‎to )|((?:‎​)?to ))(?:(?!(?:\w*ly|first|not|you|always|never|sometimes|just|even|still)\b)((?:​​)?(?:‎​)?\w+)|(​?\w+)\s((?!\band\b)(?:‎​)?\w+)|(\w+ly)\s(\w+)\s(\w+ly)\s(?:‎​)?(\w+)|(?:))
  console.log('4 hiliInf function')
  // <span class="color litPurple2">([\w\W]+?(?:<\/span>)*)<\/span>
  //(?<!​​​‎)\b([Tt]o[\s ])(?!(?:that|them?|an?|my|your?|his|its|our|their|(?:him|my|her|your|it)(?:self)?|(?:them|our)selves?|me|us|each|which|happen|some|just|even|\d+|\w+hood|\w+ism|\w+ty|\w+ier|\w+ful|\w+ion|[A-Z]\w*|\w*(?:ing|(?<!s)(?:<\/span>)?s))\b)(?:(?!(?:\w+ly|first|not|never|often|just|even|still)\b)(\w+)|(\w+)\s((?!\band\b)\w+)|(\w+ly)\s(\w+)\s(\w+ly)\s(\w+)|(?:))
  if (HvBvBoo){tempKt = tempKt.replace(/<span class="color litPurple2">(?<!\u200E)([\w\W]+?)<\/span>/g, '$1'); }//only unhili litPurple2.  can't call unhili function, because it will go into an infinite loop. (?!\u200E) accounts for 끔. Since INF will be 끔, there's no need to turn off prpl.                                                                                                                                                                                                                                                                                                                                                                                                                                                              
  ///////////////////////////////   ([\w\s\u200E\u200D,’]*?) catches after kword spn and before manually hili bv.///// (?![\w\s\u200D]*") prevents catches of hidden elements in kword 
  //if (simplifyBoo) {   ////////////////////////////////////////////////////     \u200D to catch music notes////   (\w+\s)* catches 'hard to quickly and happily' in: <span class="vocab" data-kword="hard to quickly and happily ‎not ‎​swallow">hard to quickly and happily ‎​swallow</span>
  tempKt = tempKt.replace(/(<span class=\"vocab\" data-kword=\"[^\"]*\">)?([\w\s\u200E\u200D,’</>]*?)(\u200E\u200B[\w\u200D]+)(?![\w\s\u200D]*\")/g,'$1$2<span class="color lightPink2">$3</span>'); // 알이 can be hvbv or inf
  tempKt = tempKt.replace(/(<span class=\"vocab\" data-kword=\"[^\"]*\">)?([\w\s\u200E\u200D,’</>]*?)(\u200E\u200E[\w\u200D]+)(?![\w\s\u200D]*\")/g,'$1$2<span class="color lightPink">$3</span>');//}  이   manually selected to turn pink
   /* He wants to, [[끔without a doubt - with 100 percent certainty]], 일devour
      He wants to, <span class="vocab" data-kword="2:0 without a doubt">without a doubt</span>, ‎‎eat
      He wants to, [[끔without a doubt - 끔with 100 percent certainty]], [[일devour - 일eat quickly]]
      He wants to, <span class="vocab" data-kword="2:0 ‎without a doubt">‎without a doubt</span>, <span class="vocab" data-kword="2:1 ‎‎devour">fsdffaf‎‎devour</span>
   */


  //  tempKt = tempKt.replace(/(<span[\w\W]+?">)?(\u200E\u200E\w\S+)/gi,'$1<span class="color lightPink">$2</span>');  //manually hili marked words             (\u200B\u200B\u200B\u200E\w+[\u00A0|\s]?)  took out [\u00A0|\s]? because don't need to catch 'to\u00A0'                                                                                                                                                                                                                                                                                                                                                                                              
  //  tempKt = tempKt.replace(/(<span[\w\W]+?">)?(\u200E\u200B\w\S+)/gi,'$1<span class="color lightPink2">$2</span>');                                                                                                                                                                                                                                                                                                                                                                                                         
                             // (<span[\s\S]*?)(\u200E\u200B\w+)<\/span>         (<span[^>]+>)?((?:‎​(?:[^.!?’”)\]<\s]+)\s?)+)
  
  ///////////////////////////////////////////////////////////////////////////    (?<![\s>] added '>' to catch litPurple2">\u200Bto eat</span> which is >끔< on inf but now on hvbv
  // Nov 26: ((?:ha(?:s|ve|d)|need(?:s|ed)?|ought)​(?:<\/span>)?\s)?(?<![\s>]‎)(?<!^‎)\b([Tt]o)[\s ](?!(?:that|them?|an?|my|you|his|its|our|their|(?:him|my|her|your|it)(?:self)?|(?:them|our)selves|me|us|each|which|some|any|\d+|\w+hood|\w+ism|\w+ty|\w+ier|\w+ful|\w+ion|[A-Z]\w*|\w*(?:ing|(?<!s)(?:<\/span>)?s))\b)(?:(?!(?:\w+ly|first|not|never|often|just|even|still)\b)(?:[‎​]​)?(\w+)|(\w+)\s((?!\band\b)\w+)|(\w+ly)\s(\w+)\s(\w+ly)\s(\w+)|(?:))
  // Nov 27: (?<!‎)((?:ha(?:s|ve|d)|need(?:s|ed)?|ought)(?:<\/span>)?\s)?(?<![\s>]‎)(?<!^‎)\b([Tt]o)[\s ](?!(?:that|them?|an?|my|you|his|its|our|their|(?:him|my|her|your|it)(?:self)?|(?:them|our)selves|me|us|each|which|some|any|\d+|\w+hood|\w+ism|\w+ty|\w+ier|\w+ful|\w+ion|[A-Z]\w*|\w*(?:ing|(?<!s)(?:<\/span>)?s))\b)(?:(?!(?:\w+ly|first|not|never|often|just|even|still)\b)(?:[‎​]​)?(\w+)|(\w+)\s((?!\band\b)\w+)|(\w+ly)\s(\w+)\s(\w+ly)\s(\w+)|(?:))
  /*
  tempKt = tempKt.replace(
    /(?<!\u200E)((?:ha(?:s|ve|d)|need(?:s|ed)?|ought)(?:<\/span>)?\s)?(?<![\s>]\u200E)(?<!^\u200E)\b([Tt]o)[\s\u00A0](?!(?:that|them?|an?|my|you|his|its|our|their|(?:him|my|her|your|it)(?:self)?|(?:them|our)selves|me|us|each|which|some|any|\d+|\w+hood|\w+ism|\w+ty|\w+ier|\w+ful|\w+ion|[A-Z]\w*|\w*(?:ing|(?<!s)(?:<\/span>)?s))\b)(?:(?!(?:\w+ly|first|not|never|often|just|even|still)\b)(?:[\u200E\u200B]\u200B)?(\w+)|(\w+)\s((?!\band\b)\w+)|(\w+ly)\s(\w+)\s(\w+ly)\s(\w+)|(?:))/g, 
    function(match, auxV, toInf, baseV, notBV, baseV2, adv1, kAnd, adv2, baseV3) {  //(\w+)\s(\w+(\u200B)?)|(?:))\b/g  Nov. 5th update: \u200B taken out, might be obsolete| \u200B(which is used to mark a word) will never be caught bc of \b so \b was taken out. \u200B is a non-word so after the last letter is matched, it will see \u200B as a word boundary and stop.
    if (!auxV){                                             //   (?:<\/span>) to connect 'have' i.e. <span class="color litPurple">have​</span> to eat.
      if (baseV) {           // didn't do (?:^|\s) bc there might be an error on some engines because look behind need a fixed length ^ is 0 length and \s is length 1                                                                       i.e.  to safety to heavier    bc ending span may get in the way, added (?:<\/span>)  ie   Let’s go <span class="color litPink">to house</span>s        she doesn't want to even eat. she wants to still eat.           ([Tt]o\u00A0) will be caught if the first set of words exist. i.e.  I have to always/just study.                                                                                          
        return `<span class="color lightPink">${toInf}\u00A0${baseV}</span>`;}                                                                                                                                                                                                                                                                                                                                                                                                                                                                 
      else if (baseV2){return `<span class="color lightPink">${toInf}\u00A0</span>${notBV} <span class="color lightPink">${baseV2}</span>`;}                                                                                                                                                                                                                                                                                                                                                                                                                                                               
      else if (baseV3){return `<span class="color lightPink">${toInf}\u00A0</span>${adv1} ${kAnd} ${adv2} <span class="color lightPink">${baseV3}</span>`;}
      else if (baseV === undefined && baseV2 === undefined && baseV3 === undefined){return `<span class="color lightPink">${toInf}\u00A0</span>`;}} 
      
  else if (auxV){
    if (baseV) {return `${auxV}<span class="color lightPink2">${toInf}\u00A0${baseV}</span>`;}                                                                                                                                                                                                                                                                                                                                                                                                                                                                 
    else if (baseV2){return `${auxV}<span class="color lightPink2">${toInf}\u00A0</span>${notBV} <span class="color lightPink2">${baseV2}</span>`;}                                                                                                                                                                                                                                                                                                                                                                                                                                                          
    else if (baseV3){return `${auxV}<span class="color lightPink2">${toInf}\u00A0</span>${adv1} ${kAnd} ${adv2} <span class="color lightPink2">${baseV3}</span>`;}
    else if (baseV === undefined && baseV2 === undefined && baseV3 === undefined){return `${auxV}<span class="color lightPink2">${toInf}\u00A0</span>`;}}                                                                                                                                                                                                                                                                                                                                                                                                                                                              
    return match;});  // (has to)   (often)   (exercise)  
    return tempKt;                                                                                                // (?:[’\w+\s\u200D\u200E]))*?) must have lazy catch *? everything including INF gets caught except for the last INF
  */ //DEC 12 back up (?<!^\u200E|\s\u200E)((?:<span[^>]+>[\w+\s\u200D]*)*)(\b(?:ha(?:s|ve|d)|need(?:s|ed)?|ought)(?:<\/span>)?\s)?(?<!^\u200E|\s\u200E)(\b[Tt]o,?)\s(?!(?:self|that|them?|an?|my|you|his|its|our|their|(?:him|my|her|your|it)(?:self)?|(?:them|our)selves|me|us|each|which|some|any|\d+|\w+hood|\w+ism|\w+ty|\w+ier|\w+ful|\w+ion|[A-Z]\w*|\w*(?:ing|(?<!s|sometime|oftentime|alway)(?:<\/span>)?s))\b)(?:(?!(?:\w+ly|first|not|never|just|even|still|(?:often|some)(?:times)?|always)\b)(<span[^>]+>)?(\w(?:[\w\u200D]+))|(\w+)\s(<span[^>]+>)?((?!\band|but\b)\w(?:[\w\u200D]+))|(\w+ly)\s(\w+)\s(\w+ly)\s(<span[^>]+>)?(\w(?:[\w\u200D]+))|(?:))
            ///////////////////////////////Purple1 haveETC</span///must be \s so 'have to' & 'To be' are caught//\b([ or else haveto will be caught //(?![\s\w,\u200B\u200E]*">)  ensures hidden elements aren't caught   
            // FEB 9: (?<!^‎|\s‎)((?:<\/?span[^>]*>(?:(?!‎?(?:ha(?:s|ve|d)|need(?:s|ed)?|ought))(?:[’\w+\s‎]))*?)*(?:<\/span>\s?)?)?(‎?(?:ha(?:s|ve|d)|need(?:s|ed)?|ought)(?:<\/span>)?\s?)?(?<!^‎|\s‎)(\b[Tt]o,?)\s(?!(?:self|that|them?|an?|my|you|his|its|our|their|(?:him|my|her|your|it)(?:self)?|(?:them|our)selves|me|us|each|which|some|any|\d+|\w+hood|\w+ism|\w+ty|\w+ier|\w+ful|\w+ion|[A-Z]\w*|\w*(?:ing|(?<!s|sometime|oftentime|alway)(?:<\/span>)?s))\b)(?:(?!(?:\b(?!(?:sup|re|im|ap|multi)ply|bully|rely|[fp]ly|[dt]?ally)\b\w*ly|first|not|never|just|even|still|(?:often|some)(?:times)?|always|also)\b)(<span[^>]+>)?(\w(?:[\w‍]+))|(\w+)\s(<span[^>]+>)?((?!\band|but\b)\w(?:[\w‍]+))|(\w+ly)\s(\w+)\s(\w+ly)\s(<span[^>]+>)?(\w(?:[\w‍]+))|(?:))
  //=======>> u00A0:     u200B:  ​​​​ ​​​​      u200D and u200C in here:    u200D k‍n‍o‍o‍o‍w‍  u200C  ‌ ‌ ‌ ‌ ‌ ‌ ‌  ‌  ‌  ‌   ‌ ‌ ‌  ‌////////////////////////////  ///////////////    ?\s)? must be within haveETC's and optional span's capture for proper formatting
  //May 21: (?<!^‎|\s‎)((?:<\/?span[^>]*>(?:(?!‎?(?:ha(?:s|ve|d)|need(?:s|ed)?|ought))(?:[’\w+\s‌‎]))*?)*(?:<\/span>\s?)?)?(‎?(?:ha(?:s|ve|d)|need(?:s|ed)?|ought)(?:<\/span>)?\s?)?(?<!^‎E|\s‎E)(\b[Tt]o,?)\s(?:<\/?del>?)?(?!(?:self|that|them?|an?|my|you|his|its|our|their|(?:him|my|her|your|it)(?:self)?|(?:them|our)selves|me|us|each|which|some|any|\d+|\w+hood|\w+ism|\w+ty|\w+ier|\w+ful|\w+ion|[A-Z]\w*|\w*(?:ing|(?<!s|sometime|oftentime|alway)(?:<\/span>)?s))\b)(?:(?!(?:\b(?!(?:sup|re|im|ap|multi)ply|bully|rely|[fp]ly|[dt]?ally)\b\w*ly|first|not|never|just|even|still|(?:often|some)(?:times)?|always|also)\b)(<span[^>]+>)?(\w(?:[\w‌]+))|(\w+)\s(<span[^>]+>)?((?!\band|but\b)\w(?:[\w‌]+))|(\w+ly)\s(\w+)\s(\w+ly)\s(<span[^>]+>)?(\w(?:[\w\w‌]+))|(?:))
  //July 1: (?<!^\u200E|\s\u200E)((?:<\/?span[^>]*>(?:(?!\u200E?(?:ha(?:s|ve|d|ving)|need(?:s|ed)?|ought))(?:[’\w+\s\u200D\u200E]))*?)*(?:<\/span>\s?)?)?(\u200E?(?:ha(?:s|ve|d|ving)|need(?:s|ed)?|ought)(?:<\/span>)?\s?)?(?<!^\u200E|\s\u200E)(\b[Tt]o,?)\s(?!(?:self|that|them?|an?|my|you|his|its|our|their|(?:him|my|her|your|it)(?:self)?|(?:them|our)selves|me|us|each|which|some|any|\d+|\w+hood|\w+ism|\w+ty|\w+ier|\w+ful|\w+ion|[A-Z]\w*|\w*(?:ing|(?<!s|sometime|oftentime|alway)(?:<\/span>)?s))\b)(?:(?!(?:\b(?!(?:sup|re|im|ap|multi)ply|bully|rely|[fp]ly|[dt]?ally)\b\w*ly|first|not|never|just|even|still|(?:often|some)(?:times)?|always|also)\b)(<span[^>]+>)?(\w(?:[\w\u200D]+))|(\w+)\s(<span[^>]+>)?((?!\band|but\b)\w(?:[\w\u200D]+))|(\w+ly)\s(\w+)\s(\w+ly)\s(<span[^>]+>)?(\w(?:[\w\u200D]+))|(?:))
  //July 1: (?<!^\u200E|\s\u200E)((?:<\/?span[^>]*>(?:(?!\u200E?(?:ha(?:s|ve|d|ving)|need(?:s|ed)?|ought))(?:[’\w+\s\u200D\u200E]))*?)*(?:<\/span>\s?)?)?(\u200E?(?:ha(?:s|ve|d|ving)|need(?:s|ed)?|ought)(?:<\/span>)?\s?)?(?<!^\u200E|\s\u200E)(\b[Tt]o,?(?:<\/span>,?)?)\s(?!(?:self|that|them?|an?|my|you|his|its|our|their|and|(?:him|my|her|your|it|one)(?:self)?|(?:them|our)selves|me|us|each|which|some|any|gas|(?:[dg]o|[dl]y|ag|be|us)ing|d+|\w+hood|\w+ism|\w+ty|\w+ier|\w+ful|\w+ion|[A-Z]\w*|\w{3,}(?:ing|(?<!s|sometime|oftentime|alway)(?:<\/span>)?s))\b)(?:(?!(?:\b(?!(?:sup|re|im|ap|multi)ply|bully|rely|[fp]ly|[dt]?ally)\b\w*ly|first|not|never|just|even|still|(?:often|some)(?:times)?|always|also)\b)(<span[^>]+>)?(\w(?:[\w\u200D]+))|(\w+(?:\s\w+ly)?)\s(<span[^>]+>)?((?!\b(?:and|but)\b)\w(?:[\w\u200D]+))|(\w+ly)\s(\w+)\s(\w+ly)\s(<span[^>]+>)?(\w(?:[\w\u200D]+))|(?:))
  //July 2: (?<!^\u200E|\s\u200E)((?:<\/?span[^>]*>(?:(?!\u200E?(?:ha(?:s|ve|d|ving)|need(?:s|ed)?|ought))(?:[’\w+\s\u200D\u200E]))*?)*(?:<\/span>\s?)?)?(\u200E?(?:ha(?:s|ve|d|ving)|need(?:s|ed)?|ought)(?:<\/span>)?\s?)?(?<!^\u200E|\s\u200E)(\b[Tt]o,?(?:<\/span>,?)?)\s(?!(?:self|that|them?|an?|my|you|his|its|our|their|and|(?:him|my|her|your|it|one)(?:self)?|(?:them|our)selves|me|us|each|which|some|any|gas|(?:[dg]o|[dl]y|ag|be|us)ing|d+|\w+hood|\w+ism|\w+ty|\w+ier|\w+ful|\w+ion|[A-Z]\w*|\w{3,}(?:ing|(?<!s|sometime|oftentime|alway)(?:<\/span>)?s))\b)(?:(?!(?:\b(?!(?:sup|re|im|ap|multi)ply|bully|rely|[fp]ly|[dt]?ally)\b\w*ly|first|not|never|just|even|still|(?:often|some)(?:times)?|always|seldom|hardly ever|also)\b)(<span[^>]+>)?(\w(?:[\w\u200D]+))|((?:not|never)?\s?\w+\s?(?:not|never)?(?:\s(?:not|never|just|still|ever|\w+ly))?)\s(<span[^>]+>)?((?!\b(?:and|but|or)\b)\w(?:[\w\u200D]+))|(\w+ly)\s(\w+)\s(\w+ly)\s(<span[^>]+>)?(\w(?:[\w\u200D]+))|(?:))
  tempKt = tempKt.replace(   /////////////////////////////////     when manual OFF, must catch:      \u200E]))*)  (?:<\/span>)? have to capture end of span if haveETC is hili prpl         , i.e. That's a little hard to, now that I think about it, swallow                                                                                                                                                                                                                                                                 group4: (<span[^>]+>)?  capture kword i.e.       I have to (<span class="vocab" data-kword="put my foot down">)put my foot down</span>.                                                                                          
    /(?<!^\u200E|\s\u200E)((?:<\/?span[^>]*>(?:(?!\u200E?(?:ha(?:s|ve|d|ving)|need(?:s|ed)?|ought))(?:[’\w+\s\u200D\u200E]))*?)*(?:<\/span>\s?)?)?(\u200E?(?:ha(?:s|ve|d|ving)|need(?:s|ed)?|ought)(?:<\/span>)?\s?)?(?<!^\u200E|\s\u200E)(\b[Tt]o,?(?:<\/span>,?)?)\s(?!(?:self|that|them?|an?|my|you|his|its|our|their|and|(?:him|my|her|your|it|one)(?:self)?|(?:them|our)selves|me|us|each|which|some|any|gas|(?:[dg]o|[dl]y|ag|be|us)ing|d+|\w+hood|\w+ism|\w+ty|\w+ier|\w+ful|\w+ion|[A-Z]\w*|\w{3,}(?:ing|(?<!s|sometime|oftentime|alway)(?:<\/span>)?s))\b)(?:(?!(?:\b(?!(?:sup|re|im|ap|multi)ply|bully|rely|[fp]ly|[dt]?ally)\b\w*ly|first|not|never|just|even|still|(?:often|some)(?:times)?|always|seldom|hardly ever|also)\b)(<span[^>]+>)?(\w(?:[\w\u200D]+))|\b((?:(?!(?:sup|re|im|ap|multi)ply|bully|rely|[fp]ly|[dt]?ally)(?:hardly ever|\w*ly|first|not|never|just|even|still|(?:often|some)(?:times)?|always|seldom|also)\s?){1,3})\b\s(<span[^>]+>)?((?!\b(?:and|but|or)\b)\w(?:[\w\u200D]+))|(\w+ly)\s(\w+)\s(\w+ly)\s(<span[^>]+>)?(\w(?:[\w\u200D]+))|(?:))/g, 
    function (match, spnAuxTo, have, toInf, spnB1, baseV, notBV, spnB2, baseV2, adv1, kAnd, adv2, spnB3, baseV3) {            // need \s because to might not have a bv right after it but still need to catch it. i.e. I like to >끔<for the first time in my entire like >일<eat.                                                                                                                                                                               (<span class="vocab"[^>]+>)?(\w(?:\S+))                                            \w\u200D]
      /////////////     <span[^>]+>[\w+\s\u200D]*)? captures kword up  to '(haveETC) to'  i.e.(<span class="vocab" data-kword="ha‍rd to swallow">ha‍rd) to swallow                                                                                                                                                                                                                                                                                                                                                                                                                                                  
      /////////////                                  haveETC can't be caught in kword spn.  --------------------------->      haveETC caught here w/ (?:<\/span>)? for cases prpl is on   pseudo regex: kwordspn (have)? (to)                                                                                                                                                                                                                                                                                                                                                                                                                                                                  
      ///////////////////////////////////12/16/24:must have both \u200E? before (?:ha(.. It won't get caught by group1 so that it can be caught by group2(haveETC). If haveETC is undefined or has OFF then Pink will be passed so that it won't turn off bc purple can't turn it on. 
      /* Sample inputes that all gets caught by: /(?<!^\u200E|\s\u200E)((?:<span[^>]+>(?:(?!(?:ha(?:s|ve|d)|need(?:s|ed)?|ought))(?:[\w+\s\u200D]))*)*(?:<\/span>)?\s?)?((?:ha(?:s|ve|d)|need(?:s|ed)?|ought)(?:<\/span>)?\s?)?(?<!^\u200E|\s\u200E)(\b[Tt]o,?)\s(?!(?:self|that|them?|an?|my|you|his|its|our|their|(?:him|my|her|your|it)(?:self)?|(?:them|our)selves|me|us|each|which|some|any|\d+|\w+hood|\w+ism|\w+ty|\w+ier|\w+ful|\w+ion|[A-Z]\w*|\w*(?:ing|(?<!s|sometime|oftentime|alway)(?:<\/span>)?s))\b)(?:(?!(?:\w+ly|first|not|never|just|even|still|(?:often|some)(?:times)?|always)\b)(<span[^>]+>)?(\w(?:[\w\u200D]+))|(\w+)\s(<span[^>]+>)?((?!\band|but\b)\w(?:[\w\u200D]+))|(\w+ly)\s(\w+)\s(\w+ly)\s(<span[^>]+>)?(\w(?:[\w\u200D]+))|(?:))/g, 
      That’s a little <span class="vocab" data-kword="ha‍rd to swallow">ha‍rd to swallow</span>       INF B1
      That’s a little <span class="vocab" data-kword="har‍d to not swallow">har‍d to not swallow</span>    INF B2
      That’s a little <span class="vocab" data-kword="h‍ard to quickly and happily swallow">h‍ard to quickly and happily swallow</span>   INF B3
      That’s a little <span class="vocab" data-kword="ha‍‍rd to quickly and happily ‎not ‎‎swallow">ha‍‍rd to quickly and happily ‎not ‎‎swallow</span>       INF B4
      That’s a little <span class="vocab" data-kword="har‍d to, ‎now that I think about it, ‎not ‎‎swallow">har‍d to, ‎now that I think about it, ‎not ‎‎swallow</span>   INF B4 WITH A COMMA
      You <span class="vocab" data-kword="have to kn‍ow better">have to kn‍ow better</span>.      INF and HVBV

      You <span class="vocab" data-kword="have to kn‍ow better"><span class="color litPurple">had</span> to kn‍ow better</span>.

      You <span class="vocab" data-kword="have to kn‍ow better"><span class="color litPurple">have</span> to kn‍ow better</span>.      INF and HVBV

      You <span class="vocab" data-kword="have to really ‎for Pete’s sake ‎​kn‍ow better">have to really ‎for Pete’s sake ‎​kn‍ow better</span>.

      after 'to' is caught capture the next word as long as the next word is not self, that,..7 gerunds, , digits, suffix nouns, uppercase, words ending in -ing or -s (but capture it if that word ending in -s is sometimes, oftentimes, always, or -ss like pass.         
      when capturing, don't capture words ending in -ly except [supply - ally], and [first - also] as base verbs. Instead, they will be captured but ignored and the next captured words will be the base verb as long as it's not 'or', 'and' or 'but'.                       

      Group6 captures this up to 3 times excluding base verbs ending in -ly:
      \w*ly|first|not|never|just|even|still|(?:often|some)(?:times)?|always|seldom|ever|also

      DESIGNED TO GET CAPTURED:
      He didn't want to and didn't have to.
      From tigers to zebras
      From owning a mall to planning a party
      from communism to socialism
      He talks to himself. It is good if one talks to oneself.
      from games to self-programming robots
      from puppies to cats. from enterprises to self-owned businesses
      from liquid to gas. HE didn't want to and didn't have to. 
      to doing to going to dying to lying to aging to being born to using cans of

      MEANT TO BE CAUGHT:
      He likes to sometimes read
        He likes to read. He likes to always read. I want to reply 
      He wants to really go   
      He wants to also read. He wants to also happily read.
      I want to sing.  He wants to bring a cup. 
      I want to reply. I have to really go   
      I want to sing.  He wants to bring a cup. 
      He wants to pass the test. 
      HE wants to sometimes pass the test
      He likes to bully them.
      I have to, 끔without a doubt, 일이finish
      I want to happily multiply those numbers. I want to supply them with water.
      I want to happily supply them with water. 
      I want to happily give them water.

      I want to not reply. I have to really not go   
      I want to never sing.  He wants to not bring a cup. 
      He wants to not pass the test. 
      HE wants to sometimes not pass the test
      He likes to not bully them.
      He likes to hardly ever bully them.
      I have to, without a doubt, finish
      I want to happily still multiply those numbers. I want to never supply them with water
      I want to happily just give them water. 

      He wants to not always calmly talk. He wants to always calmly talk.
      They want to calmly still talk. They want to still not calmly talk.


      I want    to not reply. I                            have to really not go   
      I want    to never sing.  He wants                        to not bring a cup. 
      He wants  to not pass the test. 
      HE wants  to sometimes not pass the test
      He likes  to not bully them.
      He likes  to hardly ever bully them.
      I    have to, without a doubt, finish
      I want    to happily still multiply those numbers. I want to never supply them with water
      I want    to happily just give them water. I want         to just happily give them water. 

      He  wants to not oftentimes calmly talk. He wants to always calmly talk.
      He  wants to not give
      They want to calmly still talk. They want to still just calmly talk.
      They want to never quickly just talk.
      They want to slowly talk. 
      They want to first talk
      They want to also talk
      They want to not talk day.                               
      They want to not slowly talk.                       
      They want to not first talk                                                  
      They want to not also talk                  
      They want to not not talk

      They want to not hardly ever just talk
      They want to not sometimes just talk. 
      They want to not just first talk
      They want to not just also talk
      They want to not just not talk

          */


      return colorHvBvOrINF(have,spnAuxTo,toInf,spnB1,baseV,notBV,spnB2,baseV2,adv1,kAnd,adv2,spnB3,baseV3,(have===undefined||have.startsWith('\u200E'))?'Pink':'Pink2');
    }   
  );  
  

  return tempKt
}

function hiliContinuous(tempKt){


  tempKt = tempKt.replace(/(<span class=\"vocab\" data-kword=\"[^\"]*\">)?([\w\s\u200E\u200D,’</>]*?)(\u200B\u200E[\w\u200D]+)(?![\w\s\u200D]*\")/g,'$1$2<span class="color lightGreen">$3</span>');//}  이   manually selected to turn green
  //July 3: (?<!^\u200E|\s\u200E)(’(?:re|s|m)|\b(?:is|am|are|was|were|be|being|been))\s(?!\b(?:(?:(?:every|no|some|clo)th|(?:mor|eve|trai)n|lightn?|belong|spend|understand)ing)\b)(?:(<span[^>]+>)?(\w(?:[\w\u200D]+)ing)\b|\b((?:(?:hardly ever|\w*ly|first|not|never|just|even|still|(?:often|some)(?:times)?|always|seldom|also)\s?){1,3})\b\s(<span[^>]+>)?((?!\b(?:and|but|or)\b)\w(?:[\w\u200D]+)ing)|(\w+ly)\s(\w+)\s(\w+ly)\s(<span[^>]+>)?(\w(?:[\w\u200D]+)))
  tempKt = tempKt.replace(   /////////////////////////////////     when manual OFF, must catch:      \u200E]))*)  (?:<\/span>)? have to capture end of span if haveETC is hili prpl         , i.e. That's a little hard to, now that I think about it, swallow                                                                                                                                                                                                                                                                 group4: (<span[^>]+>)?  capture kword i.e.       I have to (<span class="vocab" data-kword="put my foot down">)put my foot down</span>.                                                                                          
    /(?<!^\u200E|\s\u200E)\b((?:(?:is|am|are|was|were|be|being|been)(?:n’t)?)|(?<=\b(?:[Hh]e|[Ss]he|[Tt]hey|I|[Yy]ou|[Ii]t|[Ww]e))\b(?:’(?:re|s|m)))\s(?!\b(?:(?:(?:every|no|some|clo)th|(?:mor|eve|trai)n|lightn?|belong|spend|understand)ing)\b)(?:(<span[^>]+>)?(\w(?:[\w\u200D]+)ing)\b|\b((?:(?:hardly ever|\w*ly|first|not|never|just|even|still|(?:often|some)(?:times)?|always|seldom|also)\s?){1,3})\b\s(<span[^>]+>)?((?!\b(?:and|but|or)\b)\w(?:[\w\u200D]+)ing)|(\w+ly)\s(\w+)\s(\w+ly)\s(<span[^>]+>)?(\w(?:[\w\u200D]+)))/g, 
    function (match, toInf, spnB1, baseV, notBV, spnB2, baseV2, adv1, kAnd, adv2, spnB3, baseV3) { 
    return colorHvBvOrINF(undefined,undefined,toInf,spnB1,baseV,notBV,spnB2,baseV2,adv1,kAnd,adv2,spnB3,baseV3,'Green');
  });
  return tempKt

    /* (?<!^\u200E|\s\u200E)(['’](?:re|s|m)|\b(?:is|am|are|was|were|be|being|been))\s(?:(<span[^>]+>)?(\w(?:[\w\u200D]+)ing)\b|\b((?:(?:hardly ever|\w*ly|first|not|never|just|even|still|(?:often|some)(?:times)?|always|seldom|also)\s?){1,3})\b\s(<span[^>]+>)?((?!\b(?:and|but|or)\b)\w(?:[\w\u200D]+)ing)|(\w+ly)\s(\w+)\s(\w+ly)\s(<span[^>]+>)?(\w(?:[\w\u200D]+))|(?:))
    



                              
    function (match, spnAuxTo, toInf, spnB1, baseV, notBV, spnB2, baseV2, adv1, kAnd, adv2, spnB3, baseV3)
        return colorHvBvOrINF(undefined,spnAuxTo,toInf,spnB1,baseV,notBV,spnB2,baseV2,adv1,kAnd,adv2,spnB3,baseV3,(have===undefined||have.startsWith('\u200E'))?'Pink':'Pink2');

      after 'be verb' is caught capture the next word ending in -ing         
      when capturing, don't capture words ending in -ly except [supply - ally], digits, and [first - also] as base verbs. Instead, they will be captured but ignored and the next captured words will be the base verb as long as it's not 'or', 'and' or 'but'.                       

      (?:sup|re|im|ap|multi)ply|bully|rely|[fp]ly|[dt]?ally)\b\w*ly|first|not|never|just|even|still|(?:often|some)(?:times)?|always|also)
      They are -ly first|not|never|just|even|still|(?:often|some)(?:times)?|always|also   Often Sometimes  Seldom  Hardly ever  Never   running
                                                        
   Continous test subjects 
    There is something growling 
  I'm / He's / It's / They're running
  They're happily running.
  It is morning. We are king 
  I am an offspring 
  It is a good meaning 
  They're slowly and happily jumping

  building (as in a structure)  I have a building

  ceiling     

  offspring    Those are offspring/siblings/

  sibling

  morning      It isn't morning

  evening      It will be evening soon

  king                 I am a king

  ring                 That is a ring

  thing                         It's that thing again

  spring (season)           It's not spring yet. It won't be spring for another month

  string                              

  painting (can also refer to the artwork, not the act)       That is a painting

  setting (as in a scene or location)          That is a good setting

  clothing                                  That is some fine clothing

  feeling (as in an emotion)             It was a good feeling

  meaning (as in significance)          It is a good meaning




  They are always just sleeping  He's 14 years old. She's pretty today. She's prettier than him. She's wonderful today. She's untyrannical today. She is upset today.  I'm Batman from Gotham.
  They're sleeping I'm watching  He's drifting   I am running.
  I want are <span class="vocab" data-kword="2:0 sleeping">sleeping</span>.
  I have are <span class="vocab" data-kword="2:0 sleep">sleeping</span>.


  That is nothing.	"Nothing" = a pronoun-like noun, often used bare
  It was clothing.	"Clothing" = uncountable
  The goal is understanding.	"Understanding" = abstract noun
  This is lighting.	"Lighting" = uncountable noun
  That was spending.	"Spending" = uncountable noun (money use)
  The result was belonging.	"Belonging" = abstract noun  
  is everything 
  is something 
  is morning 
  is evening
  is lightning
  is training


  He's not always calmly talking. 
  He's always calmly talking.
  They're calmly still talking. They're still not calmly talking. 
  I want are quickly resting.
    I am not replying. I                            
  I am really not going   
  I am never singing.  He wants                        
  They are not bringing a cup. 
  He is not passing the test. 
  HE is sometimes not passing the test
  He is not bullying them.
  He is hardly ever bullying them.
  I  am, without a doubt, finishing
  I am happily still multiplying those numbers. I want to never supply them with water
  I am happily just giving them water. I want         to just happily give them water. 

  He  is not oftentimes calmly talking. He is always calmly talking.
  They are calmly still talking. They want to still just calmly talk.
  They are never quickly just talking.
  They are slowly talking. 
  They are first talking
  They are also talking
  They are not talking day.                               
  They are not slowly talking.                       
  They are not first talking                                                  
  They are not also talking                  
  They are not not talking

  They are not hardly ever just talking
  They are not sometimes just talking. 
  They are not just first talking
  They are not just also talking
  They are not just not talking

  He are not oftentimes calmly talking.
  He are not oftentimes calmly [[talking - walking]] */






/* 
This is understanding, not judgment   That is lighting from above.   This is belonging — a sense of being accepted

This is training.	"Training" = an activity or process (uncountable)
That is nothing.	"Nothing" = a pronoun-like noun, often used bare
It was clothing.	"Clothing" = uncountable
The goal is understanding.	"Understanding" = abstract noun
This is lighting.	"Lighting" = uncountable noun
That was spending.	"Spending" = uncountable noun (money use)
The result was belonging.	"Belonging" = abstract noun */






}
  //(?<!^\u200E|\s\u200E)(\b(?:ha(?:s|ve|d)|need(?:s|ed)?|ought)(?:<\/span>)?\s)?((?:<span[^>]+>[\w+\s\u200D]*)?(?<!^\u200E|\s\u200E)(\b[Tt]o,?))\s(?!(?:self|that|them?|an?|my|you|his|its|our|their|(?:him|my|her|your|it)(?:self)?|(?:them|our)selves|me|us|each|which|some|any|\d+|\w+hood|\w+ism|\w+ty|\w+ier|\w+ful|\w+ion|[A-Z]\w*|\w*(?:ing|(?<!s|sometime|oftentime|alway)(?:<\/span>)?s))\b)(?:(?!(?:\w+ly|first|not|never|just|even|still|(?:often|some)(?:times)?|always)\b)(<span[^>]+>)?(\w(?:[\w\u200D]+))|(\w+)\s(<span[^>]+>)?((?!\band|but\b)\w(?:[\w\u200D]+))|(\w+ly)\s(\w+)\s(\w+ly)\s(<span[^>]+>)?(\w(?:[\w\u200D]+))|(?:))



  //(?<!^\u200E|\s\u200E)(?:\b(ha(?:s|ve|d)|need(?:s|ed)?|ought)(?:<\/span>)?\s)?(<span[^>]+>[\w+\s\u200D]*)?(?<!^\u200E|\s\u200E)(\b[Tt]o,?)\s(?!(?:self|that|them?|an?|my|you|his|its|our|their|(?:him|my|her|your|it)(?:self)?|(?:them|our)selves|me|us|each|which|some|any|\d+|\w+hood|\w+ism|\w+ty|\w+ier|\w+ful|\w+ion|[A-Z]\w*|\w*(?:ing|(?<!s|sometime|oftentime|alway)(?:<\/span>)?s))\b)(?:(?!(?:\w+ly|first|not|never|just|even|still|(?:often|some)(?:times)?|always)\b)(<span[^>]+>)?(\w(?:[\w\u200D]+))|(\w+)\s(<span[^>]+>)?((?!\band|but\b)\w(?:[\w\u200D]+))|(\w+ly)\s(\w+)\s(\w+ly)\s(<span[^>]+>)?(\w(?:[\w\u200D]+))|(?:))

  const colorHvBvOrINF = (     have,     spnKwordToAux,       ToAux,     spnB1,      bV,        nonB,     spnB2,       bV2,       adv1,       kAnd,       adv2,      spnB3,        bV3,      hue) => {
    //console.log('1 '+have, '2 '+spnKwordToAux, '3 '+ToAux, '4 '+spnB1, '5 '+bV, ' 6 '+nonB, '7 '+spnB2,  '8'+bV2,  '9 '+adv1, '10 '+kAnd, '11 '+adv2, '12 '+spnB3,  '13'+bV3, '14 '+hue )
    const color = hue.startsWith('Pink') ? 'Pink' : 'Purple'; //if (/^Pink\d*$/.test(hue))  use this if it gets scaled up Pink3,4, etc
    //const prefix = `${spnKwordToAux || ''}${color === 'Purple' ? colr(have, hue) + ' ' : color === 'Pink' ? have : ''}${colr(ToAux, hue)}`;
    const prefix = `${spnKwordToAux ||''}${color === 'Purple' && have ? colr(have, 'Purple') + ' ' : color === 'Pink' ? (have || '') : ''}${colr(ToAux, hue)}`; // if have is undefined, ternary operator will see "color === 'Pink' ? have : ''" and return undefined. 
    if (bV)  return `${prefix} ${                        spnB1 || ''}${colr(bV, hue)}`;//obsolete -> the space ' ' will always return true, so 'have' controls its truthy/falsy
    if (bV2) return `${prefix} ${nonB} ${                spnB2 || ''}${colr(bV2, hue)}`;
    if (bV3) return `${prefix} ${adv1} ${kAnd} ${adv2} ${spnB3 || ''}${colr(bV3, hue)}`;
    return `${prefix} `;};  // baseV baseV2 baseV3 === undefined   //'spnKwordToAux' will cover everything up to (auxV) haveETC + to  
//''  spnAux''      baseV


            
/* 

 ************ ORIGINAL VERSION, REVERT TO THIS IF THE ABOVE CODE IS PROBLEMATIC **************************** with: do have to + BV -> both 'do' and 'have' must be Purple, not Purple2
const colorHvBvOrINF = (     have,     spnKwordToAux,       ToAux,     spnB1,      bV,        nonB,     spnB2,       bV2,       adv1,       kAnd,       adv2,      spnB3,        bV3,      hue) => {
  console.log('1 '+have, '2 '+spnKwordToAux, '3 '+ToAux, '4 '+spnB1, '5 '+bV, ' 6 '+nonB, '7 '+spnB2,  '8'+bV2,  '9 '+adv1, '10 '+kAnd, '11 '+adv2, '12 '+spnB3,  '13'+bV3, '14 '+hue )
if (hue === 'Pink2' || hue === 'Pink'){  //if (/^Pink\d*$/.test(hue))  use this if it gets scaled up Pink3,4, etc
if (bV)  return `${spnKwordToAux ||''}${have                            ||''}${colr(ToAux,hue)} ${                        spnB1||''}${colr(bV, hue)}`;
if (bV2) return `${spnKwordToAux ||''}${have                            ||''}${colr(ToAux,hue)} ${nonB} ${                spnB2||''}${colr(bV2,hue)}`;
if (bV3) return `${spnKwordToAux ||''}${have                            ||''}${colr(ToAux,hue)} ${adv1} ${kAnd} ${adv2} ${spnB3||''}${colr(bV3,hue)}`;
   return `${spnKwordToAux ||''}${have                            ||''}${colr(ToAux,hue)} `;
}else if (hue === 'Purple2' || hue === 'Purple'){
if (bV)  return `${spnKwordToAux ||''}${have && colr(have, 'Purple')+' '||''}${colr(ToAux,hue)} ${                        spnB1||''}${colr(bV, hue)}`;
if (bV2) return `${spnKwordToAux ||''}${have && colr(have, 'Purple')+' '||''}${colr(ToAux,hue)} ${nonB} ${                spnB2||''}${colr(bV2,hue)}`;
if (bV3) return `${spnKwordToAux ||''}${have && colr(have, 'Purple')+' '||''}${colr(ToAux,hue)} ${adv1} ${kAnd} ${adv2} ${spnB3||''}${colr(bV3,hue)}`;
   return `${spnKwordToAux ||''}${have && colr(have, 'Purple')+' '||''}${colr(ToAux,hue)} `;}};  // baseV baseV2 baseV3 === undefined
                                                            // ' ' will always return true, so 'have' controls its truthy/falsy        */  



     /*       
  const colorHvBvOrINF = (     have,     spnKwordToAux,       ToAux,     spnB1,      bV,        nonB,     spnB2,       bV2,       adv1,       kAnd,       adv2,      spnB3,        bV3,      hue) => {
              //console.log('1 '+have, '2 '+spnKwordToAux, '3 '+ToAux, '4 '+spnB1, '5 '+bV, ' 6 '+nonB, '7 '+spnB2,  '8'+bV2,  '9 '+adv1, '10 '+kAnd, '11 '+adv2, '12 '+spnB3,  '13'+bV3, '14 '+hue )
    if (hue === 'Pink2' || hue === 'Pink'){  //if (/^Pink\d*$/.test(hue))  use this if it gets scaled up Pink3,4, etc
      if (bV)  return `${spnKwordToAux ||''}${have                            ||''}${colr(ToAux,hue)} ${                        spnB1||''}${colr(bV, hue)}`;
      if (bV2) return `${spnKwordToAux ||''}${have                            ||''}${colr(ToAux,hue)} ${nonB} ${                spnB2||''}${colr(bV2,hue)}`;
      if (bV3) return `${spnKwordToAux ||''}${have                            ||''}${colr(ToAux,hue)} ${adv1} ${kAnd} ${adv2} ${spnB3||''}${colr(bV3,hue)}`;
               return `${spnKwordToAux ||''}${have                            ||''}${colr(ToAux,hue)} `;
    }else if (hue === 'Purple2' || hue === 'Purple'){
      if (bV)  return `${spnKwordToAux ||''}${have && colr(have, 'Purple')+' '||''}${colr(ToAux,hue)} ${                        spnB1||''}${colr(bV, hue)}`;
      if (bV2) return `${spnKwordToAux ||''}${have && colr(have, 'Purple')+' '||''}${colr(ToAux,hue)} ${nonB} ${                spnB2||''}${colr(bV2,hue)}`;
      if (bV3) return `${spnKwordToAux ||''}${have && colr(have, 'Purple')+' '||''}${colr(ToAux,hue)} ${adv1} ${kAnd} ${adv2} ${spnB3||''}${colr(bV3,hue)}`;
               return `${spnKwordToAux ||''}${have && colr(have, 'Purple')+' '||''}${colr(ToAux,hue)} `;}};  // baseV baseV2 baseV3 === undefined
                                                                        // ' ' will always return true, so 'have' controls its truthy/falsy

    */


                                                                        
function updateKT() { 
  /* function updatePreContent(newContent) {
    const pElement = document.querySelector("#kUser-input pre");
    if (!pElement) return;
    // Save the current scroll position
    const scrollTop = pElement.scrollTop;
    // Update content
    pElement.textContent = newContent;
    // Restore the scroll position
    pElement.scrollTop = scrollTop;
  }
 */
  //textClicked = false;
    //console.time("appendSpans"); // Start the timer
    //pElement.replaceChildren();function
     console.log('updateKT')

  let appendingIndexWithoutImg = 0;
  if (currentSentWithVocPIC){   // null when SIMPLIFY is off. gets value when vocab word is right clicked 
    //const sunGif = pElement.querySelector('span[data-index="0"]');
    const savedSpanPic = pElement.querySelector(`span[data-index='${currentSentWithVocPIC-1}']`);  //This selects a <span> element with a data-index attribute that has a specific value
    pElement.replaceChildren(savedSpanPic);   //removes all existing children of pElement except these two parameters 

    pElement.insertBefore(makeFragment(       0          , currentSentWithVocPIC), savedSpanPic); // Batch update in one go.   0, currentSentWithVocPIC = 2 will loop 0,1, not 2 in function makeFragment
    pElement.insertBefore(makeFragment(currentSentWithVocPIC, diamondArLength), savedSpanPic.nextSibling);
  } 
  else {
    pElement.replaceChildren();
    pElement.appendChild(makeFragment(0, diamondArLength)); // Batch update in one go
    //console.timeEnd("appendSpans"); // End the timer and log the elapsed time
  }


  /*   pElement.addEventListener("click", (event) => {
    const clickedElement = event.target;
    console.log(clickedElement);
    if (clickedElement && clickedElement.hasAttribute("data-index")) {
        sentNow = clickedElement.getAttribute("data-index");
    }
  }); */
  ///// temp console.log('0 updateKT function');
  // obsolete kUserTxtAR(obsolete) = [...diamondAR]; 
  //if (sentenceHiLiBoo) kUserTxtAR(obsolete)[sentNow] = `<span class="lightUpSentence">${kUserTxtAR(obsolete)[sentNow]}</span>`;
  //let tempKt = lightUpAll(kUserTxtAR(obsolete).join(''));  
 // if (!sentenceTraversed) tempKt = tempKt.replace(/<span class="lightUpSentence">/g, '<span class="litUpSentence">');// Adjust highlighting if the sentence isn't traversed
  //kT = tempKt;  // Assign final value to global `kT` and display the result
  //nonTextClicked = false;
                                                     //classList.toggle("litUpSentence", sentenceHiLiBoo);

  displayAll();
  function makeFragment(start, end) {
    const fragment = document.createDocumentFragment(); 
    for (let index = start; index < end; index++) {
      const template = document.createElement("template");// Create a temporary div to safely parse and manipulate the HTML content
      template.content.textContent = diamondAR[index];  // originally used .innerHTML, go back to it if there's a problem. .content is safeer and faster. diamondAR doesn't have nodes, it's just plain text, and the text will get wrapped in span later.
        /*     Array.from(tempDiv.childNodes).forEach(childNode => { //childNodes: For all child nodes (elements, text, comments).
        if (childNode.nodeType === Node.ELEMENT_NODE && childNode.tagName === "IMG") {
          fragment.appendChild(childNode); // If it's an <img>, append it as is
        } else if (childNode.nodeType === Node.TEXT_NODE && childNode.textContent.trim() === "") { // Case 1: If the node is a <span>(took out this check bc the only span is circle2, textContent doesn't exist), or it's just whitespace, append as-is. whitespace nodes are made to be considered emptry string here which is a text node and will get wrapped in span later unless it is appended here as is. They do get appended but they're invisible, they don't appear in the DOM. span circle will appear in the DOM because it's wrapped in span already but has no textContent
            fragment.appendChild(childNode);  //Plain empty string ("") in a text node: Won't show anything in the DOM but will be part of the DOM as an empty node, in other words, there will be a space between sentences. Empty string wrapped in <span>: The empty span might still visually appear with a single space between the opening and closing tags, due to the nature of how inline elements and whitespace are rendered in HTML.
        } else{ 
          const span = document.createElement("span");// If it's a text node, wrap it in a <span> and process it
          span.innerHTML = lightUpAll(childNode.textContent); 
          span.setAttribute("data-index", index);
          fragment.appendChild(span);
          const indexx = span.getAttribute("data-index");
  
          //console.log(`span ${span.innerHTML} index:  ${index}  indexx:  ${indexx}`);
        }
      }); */
      Array.from(template.content.childNodes).forEach(childNode => { //childNodes: For all child nodes (elements, text, comments).
        //    if (childNode.nodeType === Node.ELEMENT_NODE && childNode.tagName === "IMG") {
        //      fragment.appendChild(childNode); // If it's an <img>, append it as is
        //    } else if (childNode.nodeType === Node.TEXT_NODE && childNode.textContent.trim() === "") { // Case 1: If the node is a <span>(took out this check bc the only span is circle2, textContent doesn't exist), or it's just whitespace, append as-is. whitespace nodes are made to be considered emptry string here which is a text node and will get wrapped in span later unless it is appended here as is. They do get appended but they're invisible, they don't appear in the DOM. span circle will appear in the DOM because it's wrapped in span already but has no textContent
        //        fragment.appendChild(childNode);  //Plain empty string ("") in a text node: Won't show anything in the DOM but will be part of the DOM as an empty node, in other words, there will be a space between sentences. Empty string wrapped in <span>: The empty span might still visually appear with a single space between the opening and closing tags, due to the nature of how inline elements and whitespace are rendered in HTML.
        
        if (childNode.nodeType === Node.TEXT_NODE && childNode.textContent.trim() !== ""){ 
          const span = document.createElement("span");// If it's a text node, wrap it in a <span> and process it
          const wordIDfiltered = !simplifyBoo ? childNode.textContent.replace(/\s*\(#[^)]*#\)/g, '') : childNode.textContent;
            
          if (index !==0)  span.innerHTML = lightUpAll(wordIDfiltered, appendingIndexWithoutImg, false);
          else  span.innerHTML = wordIDfiltered;  //only happens on index 0 which is sun_transparent.gif
        //  console.log(span);
          span.dataset.index = index;   // more efficient than:    span.setAttribute("data-index", index);
          fragment.appendChild(span);        
        }
        else {
          //if (childNode.nodeType === Node.ELEMENT_NODE && childNode.tagName === "IMG") appendNoImg--;  // this doesn't have to always happen, appendNoImg doesn't ++ if it's img
          fragment.appendChild(childNode);  // this must always happen if it is else, empty string and img gets appended
        }  //💡fragment.appendChild(childNode); -> <img id="circle" src="..."> is reused as-is — not re-parsed, not recreated from a string — so the browser keeps playing the GIF from wherever it was.
        //if (!(childNode.nodeType === Node.ELEMENT_NODE && childNode.tagName === "IMG")) appendingIndexWithoutImg++;  //don't increment if it's an img node. This is an outdated case where img and text could be in the same index
        appendingIndexWithoutImg++;  // always ++ because only one either img, text, or whitespace gets appended. multiple nodes in the from diamonArray[index] don't get appended
      });
            /*     for (const childNode of tempDiv.childNodes) {
            if (childNode.nodeType === Node.TEXT_NODE && childNode.textContent.trim() === "" || childNode.nodeType === Node.ELEMENT_NODE && childNode.tagName === "IMG") {
              fragment.appendChild(childNode);
            }
            else if (childNode.nodeType === Node.TEXT_NODE)
            {
              const span = document.createElement("span");
              span.innerHTML = lightUpAll(childNode.textContent);
              span.setAttribute("data-index", index);
              fragment.appendChild(span);
              } 
              } */
    } 
   // console.log(fragment);
    return fragment;
  }
}

/*
const updateKT = () => {
  console.log('0 updateKT function');
  kUserTxtAR(obsolete) = [...diamondAR];
  kUserSent = kUserTxtAR(obsolete)[sentNow];
  if (sentenceHiLiBoo) kUserTxtAR(obsolete)[sentNow] = `<span class="lightUpSentence">${kUserTxtAR(obsolete)[sentNow]}</span>`;
  kT = lightUpAll(kUserTxtAR(obsolete).join(''));
  if (!sentenceTraversed) kT = kT.replace(/<span class="lightUpSentence">/g, '<span class="litUpSentence">');
  displayAll();
};
*/





function lightUpAll(tempKt, appendingIndexWithoutImg, compQ){ 
 ///// temp console.log('0.5 lightUpAll function')

  if (simplifyBoo) tempKt = simplify(tempKt, appendingIndexWithoutImg, compQ); 
  if (infBoo && HvBvBoo){
    if (recentState === hiliInfOn || inf1st){  //inf1st could be true while hiliInfOn is false because although the most recent action wasn't INF such as hiliArt, INF could be active
      tempKt = hiLiHvBv(tempKt).replace(/<span class="color light(Purple2?)">/g, '<span class="color lit$1">');
      tempKt = hiLiInf(tempKt); 
      if (inf1st && recentState !== hiliInfOn) tempKt = tempKt.replace(/<span class="color lightPink/g, '<span class="color litPink');} // should be litPink even though inf1st is true in cases where another button like hiliArt was pressed
    else if (recentState === hiliHvBvOn || hvBv1st){ 
      tempKt = hiLiInf(tempKt).replace(/<span class="color lightPink/g, '<span class="color litPink');
      tempKt = hiLiHvBv(tempKt);
      if (hvBv1st && recentState !== hiliHvBvOn) tempKt = tempKt.replace(/<span class="color light(Purple2?)">/g, '<span class="color lit$1">');}
  }
  else if (!infBoo && HvBvBoo){ 
    tempKt = hiLiHvBv(tempKt);
    if (recentState !== hiliHvBvOn) tempKt = tempKt.replace(/<span class="color lightPurple/g, '<span class="color litPurple');
  }                           ////////////////////////////////   intentionally left out '">' to include lightPurple2
  else if (infBoo && !HvBvBoo){ 
    tempKt = hiLiInf(tempKt);
    if (recentState !== hiliInfOn) tempKt = tempKt.replace(/<span class="color lightPink/g, '<span class="color litPink');
  }                           //////////////////////////////   intentionally left out '">' to include lightPink2
  
  if (artHiLiBoo){ 
    tempKt = hiLiArticle(tempKt);                                             
    if (recentState !== hiliArtOn) tempKt = tempKt.replace(/<span class="color lightOrange">/g, '<span class="color litOrange">');}

  if (endHiLiBoo){ 
    tempKt = hiLiEnd(tempKt);
    if (recentState !== hiliEndOn) tempKt = tempKt.replace(/<span class="color lightCyan">/g, '<span class="color litCyan">');}

  if (contBoo){ 
    tempKt = hiliContinuous(tempKt);
    if (recentState !== hiliContOn) tempKt = tempKt.replace(/<span class="color lightGreen">/g, '<span class="color litGreen">');}
    tempKt = tempKt.replace(/<\/span>,<\/span>/g, '<\/span><\/span>,'); // highly surgical procedure for a very specific case:  I [[have to - must]], without a doubt, finish today. 'have to' and 'must' toggles and 'to' gets colored pink
  return tempKt;
}


 // function simplify(text, threeStates) {  
 //   console.log('5 Simplify Function');
    //vocabList.forEach(({ word }) => { // destructuring syntax need parenthesis and curly braces: ({ word }) which pulls out the 'word' property from each object in the array. Explicitly looks for a property named 'word' in the object. Destructuring with { word } to directly extract the word property from each object instead of accessing element.word
    //                syntax: new RegExp(pattern, flags);   //$& is the entire regex match, not just a partial match. simplified it [.*+?^${}()|[\]\\]/g, '\\$&' -> [?]/g, '\\?'
    //##global catch of 'word'  tempKt = tempKt.replace(new RegExp(word.replace(/[?]/g, '\\?' ), 'gi'), //.replace syntax: string.replace(pattern, replacement: string, function, or object);      '\\?' can be: match => `\\${match}`
///*match:replacement for tempKt*/(match) => `<span class="vocab" data-kword="${match}">${match}</span>`); //match is a parameter in the function provided to the replace() method. It represents the matched substring for each occurrence of the pattern that the regular expression (regex) finds in the string (tempKt).      
    // ##first catch only that js sees of 'word'  
    //tempKt = tempKt.replace(categ, `<span class="vocab" data-kword="${categ}">${categ}</span>`); 
  //});
   /* console.log(text)
    
    vocabList.forEach(({ word, meaning, syn }) => {
      const knownState = threeStates === 'word' ? word : threeStates === 'meaning' ? meaning : syn;
            // knownState is vocabList.meaning
    console.log("KNOWN: " + knownState, '3 STATES: ' + threeStates)
    text = text.replace(knownState, `<span class="vocab" data-kword="${knownState}">${knownState}</span>`);// => //match is a parameter in the function provided to the replace() method. It represents the matched substring for each occurrence of the pattern that the regular expression (regex) finds in the string (tempKt).
    console.log(text)
  });
  console.log(text)
    return text;}
 */
 
/*     const fragment = document.createDocumentFragment(); 
    let img = document.createElement('img');
    img.id = 'circles';
    fragment.appendChild(img);
    pElement.appendChild(fragment);  */

function simplify(text, index, compQ) {   //simplify(tempKt, index);     
      /* if (compQ) {
        cqaVocabList.forEach((_, i) => { 
          if (cqaVocabList[i].sentIndex === index){
            const spanText = cqaVocabList[i].meaningON ? cqaVocabList[i].meaning
                          : cqaVocabList[i].synON     ? cqaVocabList[i].syn 
                          : cqaVocabList[i].koreanON  ? cqaVocabList[i].korean 
                                                    : cqaVocabList[i].word;
            text = text.replace(cqaVocabList[i].word, `<span class="vocab" data-kword="${index}:${i} ${spanText}">${spanText}</span>`);

          }

        });
      }
      else{ */
      //console.log('function simplify');
  const list     = compQ === true ? cqaVocabList  : compQ === false ? vocabList   : tQAvocabList;      
  const property = compQ === true ? 'questionNum' : compQ === false ? 'sentIndex' : 'sentenceNum';   

  for (let i = 0; i < list.length; i++) {
    if (list[i][property] === index) {  // Accessing the dynamic property  cqaVocabList[i][]
      const item = list[i];

      const spanText = item.meaningON ? item.meaning
                      : item.synON     ? item.syn 
                      : item.koreanON  ? item.korean 
                                       : item.word;
      
      let wordIDfiltered = spanText; // if spanText and item.word aren't equal, wordIDfiltered will remain spanText
      if (spanText === item.word) wordIDfiltered = item.wordID ? item.word.replace(item.wordID, "") : item.word;
           console.log(item.word);                       
      text = text.replaceAll(item.word, `<span class="vocab" data-kword="${index}:${i} ${spanText}">${wordIDfiltered}</span>`);
      //text = item.wordID ? text.replace(`">${item.word}</span>`, `">${item.word.replace(item.wordID, "")}</span>`) : text;// takes out "(#..)" from the word

    }
  }             
            
                // text = text.replace(vocabList[i].word, `<span class="vocab" data-kword="${spanText}" index="${index}">${spanText}</span>`);
                /*     if (vocabList[i].sentIndex === sentWithVoc && endHiLiBoo && !text.includes('<img id="circle"></img>')) {
                    text = '<img id="circle"></img>' + text;  //endHiLiBoo is a quickfix, need a new button to turn on/off vocab picture
                    console.log(text);
                  }  */
                      //console.log(text);
         
                /*if (magnifyBoo){
                const spanText = vocabList[i].meaningON ? vocabList[i].meaning
                  : vocabList[i].synON     ? vocabList[i].syn 
                  : vocabList[i].koreanON  ? vocabList[i].korean 
                                          : vocabList[i].word;
                  text = text.replace(vocabList[i].word, `<span class="vocab" data-kword="${spanText}">${spanText}</span>`);
                } */
        
      //}
      return text; 
     // magSent.innerHTML = `<p>${lightUpAll(kUserSent)}</p>`;

    } // Return the modified text
   
    
    
  /* 
  function simplify(tempKt) {
    console.log('5 Simplify Function');
    vocabList.forEach(({ word }) => { // destructuring syntax need parenthesis and curly braces: ({ word }) which pulls out the word property from each object in the array. Explicitly looks for a property named 'word' in the object. Destructuring with { word } to directly extract the word property from each object instead of accessing vocabList.word
      tempKt = tempKt.replace(word, `<span class="vocab" data-kword="${word}">${word}</span>`); // => //match is a parameter in the function provided to the replace() method. It represents the matched substring for each occurrence of the pattern that the regular expression (regex) finds in the string (tempKt).
    });
    return tempKt;
  }
*/
  
/*
  function simplify(tempKt) {
  console.log('5 Simplify Function');
  vocabList.forEach(function(item) {
    console.log(item.word);

    // Use a global regex to find all occurrences of the word and make replacements
    var regex = new RegExp(item.word, 'gi'); // Global and case-insensitive match
    
    // Wrap each match with a span element
    tempKt = tempKt.replace(regex, function(match) {
      // Add the matched word to a span with the necessary data attribute
      return '<span class="vocab" data-kword="' + match + '">' + match + '</span>';  //class="vocab" - CSS class
    });
  });
  return tempKt;
  }
*/
 /*
    
 tempKt = tempKt.replace(regex, (match) => {
  // Remove zero-width characters from the match for the data-kword attribute
  const cleanedMatch = match.replace(/[\u200B\u200C\u200D]/g, '');
  // Return the span with cleaned data-kword and original match
  return `<span class="vocab" data-kword="${cleanedMatch}">${match}</span>`;
});
*/

  //kT = kT.replace(/(\u200C\w\u200B\w*)/gi, '<span class="vocab2" data-kword2="$1">$1</span>');
  //if (endHiLiBoo){
    //////////////////updateKT();
    //kT = hiLiEnd(kT);
    //kT = kT.replace(/<span class="color lightCyan">/g, '<span class="color litCyan">');
 // }
 // kUserTxtAR(obsolete) = toArrayK(); 


function unSimplify(tempKt){
  tempKt = tempKt.replace(/<span class="vocab" data-kword="([^"]+)(?:[^<]+)<\/span>/g, '$1');
  //tempKt = tempKt.replace(/<span class="vocab2" data-kword2="([^"]+)">([^<]*(?:(?!<\/span>).)*)(<\/span>)+/g, '$1');
  kUserTxtAR(obsolete)[sentNow] = kUserTxtAR(obsolete)[sentNow].replace(/<span class="vocab" data-kword="([^"]+)">([^<]*(?:(?!<\/span>).)*)(<\/span>)+/g, '$1');
  kUserTxtAR(obsolete)[sentNow] = kUserTxtAR(obsolete)[sentNow].replace(/<span class="vocab2" data-kword2="([^"]+)">([^<]*(?:(?!<\/span>).)*)(<\/span>)+/g, '$1');
  //if (endHiLiBoo){  
 //   tempKt = hiLiEnd(tempKt);
  //  tempKt = tempKt.replace(/<span class="color lightCyan">/g, '<span class="color litCyan">');}
  return tempKt;}


/* updated/outdated
function updatePic2(imageSrc) {
  requestAnimationFrame(() => {
      const circleElement = document.getElementById('circle2'); //finds id="circle" in the DOM
      circleElement.innerHTML = '';
      const kImg = document.createElement('img');  //create a new HTML <img> element dynamically. allows you to generate an image tag, then manipulate/add to DOM 
      kImg.src = imageSrc; // Set the image source dynamically
      kImg.alt = 'galaxy_transparent.gif'; // Set the alternative text
      circleElement.appendChild(kImg);


  });
} */

function updatePic2(imageSrc) {
  requestAnimationFrame(() => {
    const circleElement = document.getElementById('circles'); // Finds <img id="circle2">
    if (circleElement) {
      circleElement.src = imageSrc; // Update the image source directly
      circleElement.alt = '/Images/galaxy_transparent.gif'; // Update alt text
    }
  });
}

function updatePic(imageSrc) {  // can input multiple gifs that are identical
  requestAnimationFrame(() => {
      const circleElements = document.querySelectorAll('#circle');// Select all dynamically created <img> elements within #circle elements
      // Loop through each of the selected circleElements
      circleElements.forEach(circleElement => {
        circleElement.src = '/Images/' + imageSrc;// + '?v=' + Date.now();            //appending a query parameter like ?v=1713772245381, which tricks the browser into thinking it’s a brand-new file, so it doesn’t reuse the cached GIF and doesn’t sync it with others
        circleElement.alt = '/Images/galaxy_transparent.gif'; // Set alternative text       //Date.now(); generates a unique number (milliseconds since 1970), so each request looks new to the browser
      });
  });
}




/* hiLiBTN.addEventListener('click', function() {
  console.log('hiliSent button')
  if (!sentenceHiLiBoo) { 
    sentenceHiLiBoo = true;   
    sentenceTraversed = true; // it's only turned on but needs same effect as traversing.
    while (diamondAR[sentNow] && ( whitespaceOrEmpty.test(diamondAR[sentNow]) || /^<img id="circles?"><\/img>\s*$/.test(diamondAR[sentNow]) )) {
      sentNow++;}
    const kUserPre = pElement.getBoundingClientRect();
    const sentNowPos = document.querySelector(`span[data-index="${sentNow}"]`).getBoundingClientRect();
  }
  else{
    sentenceHiLiBoo = false;
  }
  displayAll();
}); */

hiLiBTN.addEventListener('click', function() {
  ///// temp console.log('hiliSent button');
    //textClicked = false;


  lastActionSentRelated = true;
  sentenceHiLiBoo = !sentenceHiLiBoo; // Toggle the boolean
  if (sentenceHiLiBoo) {  
    //sentenceTraversed = true; // Ensures traversal/lightUpSentence effect 
    while (diamondAR[sentNow] && isEmptyOrImage(diamondAR[sentNow])) {
      sentNow++;      //if there are lots of whitespace at the beginning of the text, then this will make sure they are skipped
    }
  }
  displayAll();
});
  


// When the button is clicked, load content into the box
/* magBTN.addEventListener('click', () => {
  nonTextClicked = true
  console.log('magnify button')// Update content if magnifyBoo is true
  if (!magnifyBoo) {
    magnifyBoo = true; 
    compQboo = false;
    magSentCont.style.transform = 'rotateX(0deg)';
    if (magSentFlexboxON) {
      magSent.style.display = 'block';
      magSentFlexboxON = false;
    }
    displayAll();
    //generateDisplay();
    //if (simplifyBoo)       
    //  displayAll();//activateVocabManipulate();
  }
  else{
    magnifyBoo = false;
    magSentCont.style.transform = 'rotateX(90deg)';
    magSent.innerHTML = '';}
  ;}); */

  magBTN.addEventListener('click', () => {
    //textClicked = false;
    ///// temp console.log('magnify button');

    magButton();

  });
  function magButton(){
    /* if (!compQboo)  */magnifyBoo = !magnifyBoo;
    if (compQboo) magnifyBoo = true;  //if magSent was clicked when compQboo is true, magSent will turn on no matter what
    /*obsolete, decided not to rotate it.  magSentCont.style.transform = magnifyBoo ? 'rotateX(0deg)' : 'rotateX(90deg)'; */
      if (magnifyBoo){//qBTN.dispatchEvent sends the created event to the qBTN. qBTN.addListener will fire
        lastActionSentRelated = true;  // if lastActionSentRelated is true when magnifyBoo is false, then when magnify is turned off and color is clicked, auto scroll occurs
        if (compQboo) qBTN.dispatchEvent(new MouseEvent('mouseup', { bubbles: true })); //simulates the qBTN essentially turning it off //manually triggers a mouseup event on the DOM element qBTN.
       //  bubbles: true means the event will bubble (up to document because qBTN = document.getElementById('Q-BTN')) up through the DOM  — just like a real user event would. 
        if (magSentFlexboxON) {
          magSent.style.display = 'block';
          magSentFlexboxON = false;
        }
        //sentenceTraversed = true;
        displayAll();
      } else {
  /*       const p = magSent.querySelector('p');
        if (p) magSent.removeChild(p); */
        //magSent.replaceChildren();
        toInnerHTML(magSent, '');
        magSent.appendChild(magSentStats);

      }
      //nonTextClicked = false; 
  }

  
  //  if (leftPic === null || leftPic !== receivedFileToDisplay ) {
  



    /* SAVED ORIGINAL CODE IN CASE OPTIMIZED displayLeftPic HAS A BUG
  function displayLeftPic(receivedFileToDisplay){   // farm.jpg / white black hole.gif / global population.webp / enhance
    const img = new Image();
  console.log(receivedFileToDisplay);
    //   SyncListener     fileNameNow = vocabList[sentIndex].fileName;  //sentIndex are in multiples of 2, i.e. 2,4,6,...
    img.onload =  () => { 
        setSpot4Child(magSentL, (leftPic === leftPicDefault || leftPic === leftPics[sentNow/2]) ? leftPic : leftPic.replace('.', '2.'), 'L'); //ie. no prob: global population2.png  prob: global population.png      relax      galaxy_transparent.gif
        console.log(leftPic); 
      };  
    img.onerror = () => { 
      if (leftPic.includes('.') && leftPic !== leftPicDefault){ //error can't be from leftPics[sentNow/2]. Filename with '2' must not exist. Thus, fileName w/o '2' is displayed. If there is no dot, do nothing, the current leftPics[sentNow/2] will continue to display
        setSpot4Child(magSentL, leftPic, 'L');  //i.e. no prob: global population.png     //prob:   relax      galaxy_transparent.gif
      }                               
    };

    console.log(`leftPic: ${leftPic}   receivedFileToDisplay: ${receivedFileToDisplay}`)  //leftPic: urban areas.webp   receivedFileToDisplay: farm.png
    if (leftPic !== receivedFileToDisplay ) {
      leftPic = receivedFileToDisplay;      //no need for .includes('.') bc receivedFileToDisplay always has filename extension (.jpg)
      img.src = './images/' + ((leftPic === leftPicDefault || leftPic === leftPics[sentNow/2]) ? leftPic : leftPic.replace('.', '2.'));   // won't add '2' to leftPics[]
      //setTimeout(() => {img.src = './images/' + (leftPic === leftPicDefault ? leftPic : leftPic.replace('.', '2.')); }, 100);   browser might not immediately re-evaluate img.src if it was already set before. The Second Image Fails to Load (onerror Runs Instead)
      // must come after .onload and .onerror. If it comes before, .onload and .onerror can run without the handling code and thus do nothing
    }    
  }
 */
  function displayLeftPic(receivedFileToDisplay) {//receivedFileToDisplay is the pic to display which can be: defaultPic, leftPics[], filename, but it is never null.  i.e. farm.jpg / white black hole.gif / global population.webp / enhance
    //console.log(`receivedFileToDisplay: ${receivedFileToDisplay}   leftPic: ${leftPic}`);
    if (receivedFileToDisplay === leftPic) return; // don't need to update if it's going to be the same pic.
    leftPic = receivedFileToDisplay; //   SyncListener     fileNameNow = vocabList[sentIndex].fileName;  //sentIndex are in multiples of 2, i.e. 2,4,6,...
    const img = new Image();
    const picDetermined = (leftPic===leftPicDefault||leftPic===leftPics[sentNow/2]) ? leftPic : leftPic.replace('.', '2.');
                          // if it's leftPicDefault or leftPics[sentNow/2], leave it as is. If it's a filename, append '2'
    img.onload = () => {
      //alert('LEFT PIC LOADED');
      setSpot4Child(magSentL, picDetermined, 'L');  //ie. no prob: global population2.png  prob: global population.png      relax      galaxy_transparent.gif
    };
    img.onerror = () => {//error can't be from leftPics[sentNow/2]. Filename with '2' must not exist. Thus, fileName w/o '2' is displayed. If there is no dot, do nothing, the current leftPics[sentNow/2] will continue to display
      //alert('LEFT ERROR');
      console.warn('displayLeftPic() failed to load:', img.src);
      if (leftPic.includes('.') && leftPic !== leftPicDefault) { //sends the original file without '2'
        setSpot4Child(magSentL, leftPic, 'L');      //i.e. no prob: global population.png     //prob:   relax      galaxy_transparent.gif    pass the original file w/o 2 appended
      }
    };
    img.src = '/Images/' + picDetermined;
    //setTimeout(() => {img.src = './images/' + (leftPic === leftPicDefault ? leftPic : leftPic.replace('.', '2.')); }, 100);   browser might not immediately re-evaluate img.src if it was already set before. The Second Image Fails to Load (onerror Runs Instead)
    // must come after .onload and .onerror. If it comes before, .onload and .onerror can run without the handling code and thus do nothing
  }
  
  function displayRightPic(emotiFilename){   // just checks if the pic exists
    if (emotiFilename === rightPic || kT === undefined) return; // if kT is undefined, then user is not viewing the reading. User is most likely at library/home.
    rightPic = emotiFilename;
    const img = new Image();   //creates a new <img> element in memory, not attached to the DOM
    const picDetermined = G ? rightPic.replace('.', 'G.') : rightPic.replace('.', 'B.');

    img.onload =  () => { 
      //alert('RIGHT PIC LOADED');
      setSpot4Child(magSentR, picDetermined, 'R');  //);(rightPic === rightPicDefault || rightPic === rightPics[sentNow/2]) ? rightPic : rightPic.replace('.', '2.'), 'L'); //ie. no prob: global population2.png  prob: global population.png      relax      galaxy_transparent.gif
      };  
    img.onerror = () => { 
      //alert('RIGHT ERROR');
      console.warn('displayRightPic() failed to load:', img.src);
        setSpot4Child(magSentR, picDetermined.includes('G.') ? rightPic.replace('.', 'B.') : rightPic, 'R');     
    };
    img.src = '/Images/BG/' + picDetermined; // issues GET /Images/BG/neutralG.png, attaches all matching cookies, sends to server   
  }
  
  function setSpot4Child(magSentLR, magLpic2optional, LR){ 
    let existingImg; 
    if (!magSentLR.firstElementChild) {/* it won't exist when pic is turned off */
      //alert(existingImg)
      //magSentLR.replaceChildren(); deleted in magSent.addeventlistener 'click'
      existingImg = Object.assign(document.createElement('img'), { id: `magSent${LR}-img`, alt: 'picture'}); //will look like thie: <img id="magSentR-img" alt="picture" src="./images/BG/neutralB.png">        
      magSentLR.appendChild(existingImg);
      //alert(`magSent${LR}-img`);   
    }
    else  existingImg = magSentLR.firstElementChild; 
    displayImage(magLpic2optional, existingImg);  
  
  }

  function displayImage(fileName, imgId) { //callbacks (onload, apostropheError, defaultImg) execute only when their respective events are triggered, potentially long after the synchronous code finishes.
    //fileName = fileName?.includes('.') ? fileName : 'galaxy_transparent.gif';
    //if (!wholeTextBoo) hideImage();
    const apostropheError = () => { 
      imgId.src = fileName.replace(/’/g, "'");  // asynchronous
      imgId.removeEventListener('error', apostropheError);
      //img.addEventListener('error', defaultImg); //attaches defaultImg as an error handler// invoked implicitly by the browser when the error event is triggered on the img element, and apostropheError has finished executing
    };
    if (fileName) { //imageSrc is constructed: Things are added, replaced, or transformed to build a different result (a string).
      fileName = fileName.replace(/\u200D/g,'♪').replace(/\u200E\u200E/g,')일(').replace(/\u200E/g,')끔(').replace(/\u200B\u200B/g,')이(').replace(new RegExp(hvBvInf,'g'),')일이(');
      //imageSrc += (kTarget.dataset.kword[kTarget.dataset.kword.length - 1] === '\u200D' ? '.gif' : '.jpg');
    }

    imgId.onerror = () => { //alert('IMAGE ERROR');
      console.warn('displayImage() failed to load:', imgId.src);
      imgId.onerror = null  // won’t run again if the fallback image (galaxy_transparent.gif) also fails to load
      imgId.src = imgId.id === 'circles' ? '/Images/galaxy_transparent.gif' : 'moon.gif'; };
    //img.src = './images/' + fileName; 
    imgId.src = imgId.id === 'magSentR-img' ? '/Images/BG/' + fileName : '/Images/' + fileName; // if it's not magSentR-img then it's img+filename
  
    //img.addEventListener('error', apostropheError); //attached as the error handler for the first time // apostropheError is the callback function( passed as an argument) that will be executed when the 'error'(predefined by the browser) event is triggered. Sets up an asynchronous listener for the error event
                                                    //Registering the listener (addEventListener): Synchronous. When the event ('error') actually happens: Asynchronous, based on the image-loading process.
  
    /*     
    // .onload ensure the image is loaded first. Can use this one liner but it might be a problem: document.getElementById(origin).src = fileName; 
    const img = new Image(); // img is created: It's an object allocated in memory, ready to be used later (e.g., to load and display an image).
    img.onload = () => {  // asynchronous, when the image is fully loaded, this onload event triggers. onload is an event listener for when the image has completely loaded. Asynchronous Operations: These are initiated but do not block the execution of the rest of the code. Once the asynchronous operation is complete, its callback is placed in the event queue and waits until the main thread is idle (all synchronous code is executed). After the synchronous code is complete, the event loop starts processing the event queue (e.g., onload, error, setTimeout callbacks).
      const circleElement = document.getElementById(origin); // doesn't work if declared at the top
      circleElement.src = fileName;  //loads the image to the DOM. circleElement is an img element which has a source property
      //circleElement.innerHTML = ''; // needed if I'm adding img to a conatiner where a child is getting added or removed.  eventlisteners(onload/apostropheError) before asynchronous operation (img.src = imageSrc) is good practice. This ensures that your listener is in place before the asynchronous operation starts, so you won't risk missing the event (e.g., in the rare case of extremely fast image loading).
      //circleElement.appendChild(img); circleElement becomes the container element for the img element, doesn't have a src property because it is not an img tag
    };
    img.src = fileName;  //💡loads image(in other words: fetches the img, the img object in JavaScript now contains a reference to this decoded image.) and triggers img.onload if there is one. img.src = imageSrc is set, it asynchronously initiates the image-loading process. Any errors in loading the image will trigger the error event later, after the synchronous part of displayImage has finished executing.
        */
    /* 
      const circleElement = document.getElementById(origin);
      console.log(circleElement);  // <img id="circles" src="galaxy_transparent.gif" class=""> if origin is 'circles'
      // If there is no img element, or the img element has a different src, set circleElement.src to 'sun_transparent.gif'
      if (circleElement === null || circleElement.src !== 'file:///C:/Users/kangh/Desktop/OESA/canvass/sun_transparent.gif') {
        circleElement.src = 'galaxy_transparent.gif';  // not needed but just to briefly display galaxy.gif when existing pic loads if placed before img.src = fileName; 
      }
      else circleElement.src = fileName;
  
    */
    
    //kTarget: <span class="vocab" data-kword="2: places with many people and buildings">place<span style="white-space: nowrap;">‍<span class="color litCyan">s</span></span> with many people and building<span style="white-space: nowrap;">‍<span class="color litCyan">s</span></span></span>
    /*requestAnimationFrame(() => {  // Append the new image to the container // Replaced with onload because it was causing image to blink everytime it changed.
      circleElement.innerHTML = '';
      circleElement.appendChild(img);
      console.log(img.src)
    });*/
    
    /*       const defaultImg = (event) => { ///Function Expressions aren't hoisted thus they must be declared before they are used. defaultImg is already declared before there is any error loading the image. If the image fails, the error event fires after all synchronous code in displayImage has completed.
            const circleElement = document.getElementById(origin);
            const imgElement = circleElement.querySelector('img');
            
            // If there is no img element, or the img element has a different src, set circleElement.src to 'sun_transparent.gif'
            if (imgElement === null || imgElement.src !== 'file:///C:/Users/kangh/Desktop/OESA/canvass/sun_transparent.gif') {
              circleElement.src = 'sun_transparent.gif';
            }
            //circleElement.src = 'sun_transparent.gif';
            img.removeEventListener('error', defaultImg);
          }; */
    
    
    /*  const circleElement = document.getElementById('circle');
    circleElement.addEventListener('error', (event) => {
      console.log('Error loading image:', event.target.src);
      circleElement.src = 'sun_transparent.gif';
      }); */
  
    /*   img.onerror = function () {
      console.error("Failed to load image:", fileName);
      const circleElement = document.getElementById('circles');
      circleElement.src = "galaxy_transparent.gif"; // Set a default image
    }; */
    // img.addEventListener('error', defaultImg); 
  }

  


  magSentL.addEventListener('mouseup', (event) => {
  //event.preventDefault(); // Prevent the default right-click menu from showing
    if (event.button === 2){
      if (magSentLclick !== 1 || fileNameNow === null ) return;
      if (!fileNameNow.includes('.'))  displayLeftPic(leftPic === null || leftPic === leftPics[sentNow/2] ? leftPicDefault      : leftPics[sentNow / 2]);  // no dot so it can only toggle between default pic and manual pic
      else displayLeftPic(leftPic === fileNameNow         ? leftPics[sentNow/2] : fileNameNow);            // toggle between manual/default pic and vocab pic
    }
  });

  magSentR.addEventListener('mouseup', (event) => {
    //event.preventDefault(); // Prevent the default right-click menu from showing
    //if (magSentRclick !== 1) return;
    if (event.button === 2 && magSentRclick === 1){ //magSentRclick is 0 if it enters this block
      G = !G;  //G for girls
      rightPic = null; // rightPic must not equal fileName when it enters displayRightPic
      displayRightPic(rightPics[sentNow/2]);
    }
   // if (!fileNameNow.includes('.'))  displayLeftPic(leftPic === null || leftPic === leftPics[sentNow/2] ? leftPicDefault      : leftPics[sentNow / 2]);  // no dot so it can only toggle between default pic and manual pic
  //  else displayLeftPic(leftPic === fileNameNow         ? leftPics[sentNow/2] : fileNameNow);            // toggle between manual/default pic and vocab pic
  });

   /*if (!fileNameNow.includes('.')) displayLeftPic(leftPics[sentNow / 2] === leftPicDefault ? leftPicDefault : (leftPic === leftPics[sentNow / 2] || leftPic === null ? leftPicDefault : leftPics[sentNow / 2]));
  else displayLeftPic(leftPic === fileNameNow ? leftPics[sentNow / 2] : fileNameNow);
  
  
  if (!fileNameNow.includes('.'))  displayLeftPic(leftPic === leftPics[sentNow / 2] || leftPic === null ? leftPicDefault : leftPics[sentNow / 2]);
  else  displayLeftPic(leftPic === fileNameNow ? leftPics[sentNow / 2] : fileNameNow); */
  
  
     
  /* const handleMouseEnter = () => {// Store the anonymous functions in variables
    document.body.style.overflow = 'hidden';  // Disable scrolling
    //document.body.style.marginRight = '-30px';
  };
  const handleMouseLeave = () => {
    document.body.style.overflow = 'auto';  // Re-enable scrolling
    document.body.style.marginRight = '-6px';
  }; */
  /* 
  magSent.addEventListener('contextmenu', () => {
    if (!compQboo) hiLiBTN.click(); // only hili sentence if compQ is not on
  });   */    
  //let qBTN = document.getElementById('Q-BTN');
qBTN.addEventListener('mouseup', (event) => {
  //textClicked = false;
  if (event.button === 1) {  return;  }  // do nothing if scroll button(middle button) was clicked
  console.log('Comprehension Questions button')// Update content if magnifyBoo is true
  adjustDampingHybrid(scrollbar, pElementContainer);
  if (!compQboo && !textContainer.querySelector(':scope > #question-container')) {  // #question-container is a direct child of #text-container, '>' → the child combinator (only matches direct children, not nested deeper)
    compQboo = true;   
    if (magnifyBoo) {
      magSent.replaceChildren();  //magSent.removeChild(magSent.querySelector('p'));

    }
 
    
    
    // Store the initial body margin to account for scrollbar width    mgBoo = T   F    ->   T
    /*       magSent.addEventListener('mouseenter', handleMouseEnter);  mgBoo = F       ->   F
    magSent.addEventListener('mouseleave', handleMouseLeave); */

    magSent.style.display = 'flex';
    magSent.style.justifyContent = 'center';  // puts cubes to the center instead of left
    magSent.style.alignItems = 'center';
    magSentFlexboxON = true;
    /*  magSentCont.style.marginTop = '45rem';*/
    kUserInput.style.flexGrow = '1'; 
    
          // Create the question-container div
    qContainer = document.createElement('div');
    qContainer.id = 'question-container';

    qText = document.createElement('div');
    qText.id = 'question-text';

    qPicWall = document.createElement('div');
    qPicWall.id = 'question-pic-wall';


    const qArrowL = document.createElement('button');
    qArrowL.id = 'question-arrowL';
    qArrowL.className = 'question-arrows';
    qArrowL.type = 'button';
    qArrowL.textContent = '«';
    qArrowL.style.fontSize = '48px';
    if (nowQ === 1) qArrowL.classList.add('disabled-arrow');


    const qArrowR = document.createElement('button');
    qArrowR.id = 'question-arrowR';
    qArrowR.className = 'question-arrows';
    qArrowR.type = 'button';
    qArrowR.textContent = '»';
    qArrowR.style.fontSize = '48px';

   
    qContainer.appendChild(qArrowL);
    qContainer.appendChild(qText);
    qContainer.appendChild(addAnsBtns());
    qContainer.appendChild(qArrowR);

    // Get the parent element to append to
    textContainer.appendChild(qContainer);

    qText.addEventListener('mousedown', event => attachFloatTagDOWN(event, Origin.qText));

    qText.addEventListener('mouseup', (event) => { 
      if (event.target.closest('.vocab'))  { 
        traverseOrToggleUP(event, Origin.qText); 
      }
    });

    function togglePic(qTextOrMCinMagSent) {
      qTextOrMCinMagSent.addEventListener('mouseover', (event) => {
        const vocab = event.target.closest('.vocab');
        if (!vocab || !qTextOrMCinMagSent.contains(vocab)) return;
        const vocIndex = parseInt(vocab.dataset.kword.split(':')[1]);
        if (cqaVocabList[vocIndex].rClicked) {
          attachSpot4Img(vocIndex);
        }
        vocab.addEventListener('mouseleave', addAnsBtns, { once: true });
      });
    }
    // Apply to both containers
    togglePic(qText);
    togglePic(magSent);


    qArrowL.addEventListener('mouseup', (event) => {
      qArrowL.classList.add('flash');   //automatically trigger qArrowL.addEventListener('animationend', () => {
      if (!animationDone)  { return; }  // to prevent going to another question while animation is in progress
      makeRelevantUpdates(true, event.button);
    });
    
    qArrowL.addEventListener('animationend', () => {
      qArrowL.classList.remove('flash');
      animationDone = true;
    });

    qArrowR.addEventListener('mouseup', (event) => {
      qArrowR.classList.add('flash');
      if (!animationDone)  { return; }  // to prevent going to another question while animation is in progress
      makeRelevantUpdates(false, event.button);
    });

    qArrowR.addEventListener('animationend', () => {
      qArrowR.classList.remove('flash');
      animationDone = true;
    });

    function makeRelevantUpdates(fromLeft, click){
      removeFloatTag();    
      removeQtxtBtnBorderStyle();
      if (justifySentHiLi) unhiliJustifiedSent();
      justifyAnsRC = false;
      ptsAvailable = true;      
      for (let key of ['choiceA', 'choiceB', 'choiceC', 'choiceD']) {  mcSurfaceColor[key] = 'none';  }
      animationDone = false;
      if (fromLeft){
        nowQ--;
        if (nowQ === 1) qArrowL.classList.add('disabled-arrow');
        if (nowQ === cqaListLength - 2) qArrowR.classList.remove('disabled-arrow');
        //qText.innerHTML = `<pre>${lightUpAll(cqaList[nowQ].compQ, nowQ, true)} from click qArrowL</pre>`;
        //adjustFontsize(false, qText);         
      }
      else{
        nowQ++;
        if (nowQ === 2) qArrowL.classList.remove('disabled-arrow');
        if (nowQ === cqaListLength - 1) qArrowR.classList.add('disabled-arrow');        
      }
      if (click === 2) { multChoiceQon = true; }//displayMCs(); }//multChoiceQon = true;  }
      else{  generateCubes(nowQ); /* -> multChoiceQon = false */ }
      //lastActionSentRelated = false;
      displayAll();  // -> displayMCs();        
    }

          // Set the initial transform property
          // Create the SVG element
         /*  const svg = document.createElementNS('http://www.w3.org/2000/svg', 'svg');
          svg.classList.add('glow-container');

          // Create the rect elements
          const glowBlur = document.createElementNS('http://www.w3.org/2000/svg', 'rect');
          glowBlur.setAttribute('pathlength', '100');
          glowBlur.classList.add('glow-blur');

          const glowLine = document.createElementNS('http://www.w3.org/2000/svg', 'rect');
          glowLine.setAttribute('pathlength', '100');
          glowLine.classList.add('glow-line');

          // Append the rect elements to the svg
          svg.appendChild(glowBlur);
          svg.appendChild(glowLine);

          // Append the svg to the question-container
          qContainer.appendChild(svg); */
      // Give the question-container some time to render before adding the 'visible' class
    setTimeout(() => {
      qContainer.classList.add('visible'); // makes question-container viewable (holds arrows, qText, and qpic-wall)
      //if (sentenceHiLiBoo)  { adjustClientHeight(null, sentNow); }
    }, 0);  // Small delay before adding the 'visible' class
 

    if (event.button === 2) {  
      //sentenceTraversed = false; // this is done in displayAll, need to set it to false so that qText will be updated. 
      multChoiceQon = true;
      //lastActionSentRelated = false;
      displayAll();  // -> displayMCs();
    }
    else if (event.button === 0){  // can't go to displayAll or else cubes will regenerate whenever buttons are pressed or sentence is traversed
      toInnerHTML(qText, `<p>${lightUpAll(cqaList[nowQ].compQ, nowQ, true)} from qBTN`);
      adjustFontsize(qText);          // can't go to displayAll() bc cubes will be generated everytime an action occurs
      generateCubes(nowQ);  //-> multChoiceQon = false    qbtn.
      adjustDampingHybrid(scrollbar, pElementContainer);
      //if (simplifyBoo)  { activateVocabManipulate(); }
      qJustifyAns.classList.remove('delOn');  // added for insurance, there once was an instance where 'justify-answer' button had red outline
    }

 

  
        //else generateCubes(nowQ); 
          //qText.innerHTML = `<pre>${lightUpAll(cqaList[nowQ].compQ, nowQ, true)} from Q.BTN</pre>`; //if placed in displayAll, it will refresh whenever gm buttons are pressed
          //adjustFontsize(false, qText);
          /*       (function setGlowEffectRx() {
                  const qCont = document.querySelector("#question-container");
                
                  const glowLines = qCont.querySelectorAll("rect");
                    const rx = getComputedStyle(qCont).borderRadius;
                
                    glowLines.forEach((line) => {
                      line.setAttribute("rx", rx);
                    });
                })(); */

  } 
  else {  //qBtn is off
    compQboo = false;
    multChoiceQon = false;
    unhiliJustifiedSent();
    removeFloatTag();  
    removeQtxtBtnBorderStyle();
    adjustDampingHybrid(scrollbar, pElementContainer);
    magSent.replaceChildren(); // don't need to remove eventListeners for qJustify and qAnswer check because this replaceChildren() removes them automatically 
    
    qContainer.classList.remove('visible'); // Remove the 'visible' class to trigger fade-out
    qContainer.addEventListener('transitionend', () => {      // Remove the question-container(the container above magSent-Container that appears and disappers) after the transition ends
      if (qContainer.parentNode === textContainer)  { textContainer.removeChild(qContainer); }
    }, { once: true }); //This makes the event listener run only once, no matter how many properties transition

    if (magnifyBoo){ // if magnifyBoo that means it was implicitly turned off. This will allow magBTN.click(); to treat as though it was turned off so it can turn it back on.
      magnifyBoo = false;
      magBTN.click(); // if !magnifyBoo, then nothing will happen which means flex is still on. But as soon as magBTN.click() is on, it will set display: block;
    }
          /* if (magnifyBoo){
          Sent.replaceChildren();
    }*/

  }

  function unhiliJustifiedSent(){
    justifySentHiLi = false;
    let justifySentenceLength = cqaList[nowQ].justify.length;
    let doubled;
    for (let i = 0; i < justifySentenceLength; i++) { //   0  1   2   3    4   5
      doubled = cqaList[nowQ].justify[i] * 2;
      pElement.querySelector(`span[data-index="${doubled}"]`).classList.remove("litUpJustify");
    } 
  }
});

function addAnsBtns(){
  qPicWall.replaceChildren();  // removes all previous children (buttons and their listeners) from qPicWall
  qJustifyAns = document.createElement('button');
  qJustifyAns.id = 'question-justify-ans';
  qJustifyAns.type = 'button'; // avoids default form submit behavior
  qJustifyAns.textContent = 'Justify\nAnswer';
  qJustifyAns.classList.add('qTxtBtn');
  if (justifySentHiLi)  { qJustifyAns.classList.add('textReferenceOn'); }  //keeps these on when RC on .vocab displays pic and mouseleave causing pic to be replaced with ansBtns
  if (justifyAnsRC)  { qJustifyAns.classList.add('delOn'); }
    
  qAnsCheck = document.createElement('button');
  qAnsCheck.id = 'question-ans-check';
  qAnsCheck.type = 'button';
  qAnsCheck.textContent = 'Check\nAnswer';
  qAnsCheck.classList.add('qTxtBtn');
  qPicWall.appendChild(qJustifyAns);
  qPicWall.appendChild(qAnsCheck);
  
  let correctCubes = 0;
  let count;

  if (qJustifyAns._handleMouseUp)  qJustifyAns.removeEventListener('mouseup', qJustifyAns._handleMouseUp);
  qJustifyAns._handleMouseUp = function(event) {
    if (event.button === 0){
      qJustifyAns.classList.add('textReferenceOn');
      correctCubes++;
      //msgBox.textContent = correctCubes;
      //msgBox.textContent = toDoubleLineFont(cqaList[nowQ].justify);
      justifySentHiLi = !justifySentHiLi;
      let justifySentenceLength = cqaList[nowQ].justify.length;

      if (justifySentHiLi){ // if .justify is empty, it won't run.
        if (!justifySentenceLength) { 
          //justifySentHiLi = !justifySentHiLi;    still it needs to be true so user can right/left hold to see expl.
          Swal.fire({
            title: '𝕋𝕖𝕩𝕥𝕦𝕒𝕝 𝕣𝕖𝕗𝕖𝕣𝕖𝕟𝕔𝕖 𝕙𝕒𝕤 𝕟𝕠𝕥 𝕓𝕖𝕖𝕟 𝕡𝕣𝕠𝕧𝕚𝕕𝕖𝕕.',  // used to be 'Notice'
            //text: 'There is no textual reference.',
            icon: 'info',
            confirmButtonText: 'Close',
            backdrop: false,  // backdrop dims the screen and user can't interact with the page but the prism disappears
            customClass: {
              popup: 'my-swal-popup',
              title: 'my-swal-title',
              content: 'my-swal-content',
              confirmButton: 'my-swal-button'
            }
          });
        }
        else{
          hiliJustifiedSent(true);

          //const offSet = pElement.clientHeight * 0.11;
          //const kUserPre = pElement.getBoundingClientRect();
          //  const sentNowPos = document.querySelector(`span[data-index="${min}"]`).getBoundingClientRect();  
          //  pElement.scrollTop = pElement.scrollTop + sentNowPos.bottom - kUserPre.top - offSet;

            //  if (sentnowpos.top <= kuserpre.top) {  // if the element is above the viewport, then sentnowpos.top will be in the negative
            //      pElement.scrolltop = pElement.scrolltop + sentnowpos.bottom - kuserpre.top - offset;
            //  } // if sentnowpos.top is 10, it's 10 px down from the viewport. then by adding 10 to pElement.scrolltop, pElement.scrolltop will scroll down 10 px and return sentnowpos.top move up 10px, so sentnowpos.top will be 0 
            //else if (sentnowpos.bottom >= kuserpre.bottom) {// check if the span is below the visible area of pElement
            //      pElement.scrolltop = pElement.scrolltop + sentnowpos.bottom - kuserpre.top - offset;

            // + means scrolled down, - means scrolled up
            // sentNowPos.top is negative when the element's top edge is above the top of the visible viewport
            // When sentNowPos.top is below the viewport, as you scroll down sentNowPos.top gets smaller
            // sentNowPos.top is 0 when the element is at the top of the viewport. As you surpass the top of the viewport and continue to scroll down, sentNowPos.top will increase in negative value
              // pElement.scrollTop + sentNowPos.bottom                   -> sentNowPos.bottom's value is at the top of the viewport

              // pElement.scrollTop + sentNowPos.bottom - kUserPre.bottom -> sentNowPos.bottom is at the bottom of pElement
            // pElement.scrollTop + sentNowPos.bottom - kUserPre.bottom + pElement.clientHeight * 0.90 -> from the bottom of kUserPre.bottom, sentNowPos.bottom went up 90% of pElement.clientHeight

            // pElement.scrollTop + sentNowPos.bottom - kUserPre.top -> sentNowPos.bottom is at the top of pElement
            // pElement.scrollTop + sentNowPos.bottom - kUserPre.top - pElement.clientHeight * 0.10; -> scroll down 10%
          //}      
        }
        
      }
      else{  //justifyBtn is off
        //removeFloatTag(); 
        qJustifyAns.classList.remove('textReferenceOn');
        for (let i = 0; i < justifySentenceLength; i++) {  
          pElement.querySelector(`span[data-index='${cqaList[nowQ].justify[i] * 2}']`).classList.remove('litUpJustify');
        } 
      }
    }
    if (event.button === 2 && multChoiceQon){ // w/o multChoiceQon cubes will go to mult choice   // del tags will get activated
      // function setNotPointable();
      mcQuserAnsStorage[nowQ].pointableA = false;
      mcQuserAnsStorage[nowQ].pointableB = false;
      mcQuserAnsStorage[nowQ].pointableC = false;
      mcQuserAnsStorage[nowQ].pointableD = false;

      justifyAnsRC = !justifyAnsRC;
      qJustifyAns.classList.add('delOn');
  
      if (!justifyAnsRC){    // uncross the crossed out text
      qJustifyAns.classList.remove('delOn');
        ['A', 'B', 'C', 'D'].forEach(choice => {
          const choiceEl = document.getElementById(`choice${choice}`);
          const delTags = choiceEl.querySelectorAll('del');
          delTags.forEach(del => {
            const parent = del.parentNode;
            while (del.firstChild) {  // del is the entire element ie. <del>some text</del>
              parent.insertBefore(del.firstChild, del); //parentNode.insertBefore(newNode, referenceNode);  inserts newNode into parentNode just before referenceNode
            }
            del.remove();
          });
        });
      }
      //lastActionSentRelated = false;
      displayAll();  // This solves the problem of this: if justify right click(cross out words), infinitive(lightPink is on), justify right click again to uncross everything, infinitive is lightPink so it turns on again when it should be litPink.

    }


          
    /*         //console.log(lightUpAll(cqaList[nowQ].choiceD.mcSentence, nowQ, true));
            text = lightUpAll(text, nowQ, true); */
    
  }
  qJustifyAns.addEventListener('mouseup', qJustifyAns._handleMouseUp);



  let pressTimer;  // Store the timer
  let mouseDownTime = 0;

  if (qAnsCheck._handleMouseDown)   qAnsCheck.removeEventListener('mousedown',      qAnsCheck._handleMouseDown);       // 💡Step 1: Remove previous event listener(the old event handler) if it exists, the old function will be removed by js garbage collection
  if (qAnsCheck._handleMouseUp)     qAnsCheck.removeEventListener('mouseup',        qAnsCheck._handleMouseUp);
  if (qAnsCheck._handleMouseLeave)  qAnsCheck.removeEventListener('mouseleave',     qAnsCheck._handleMouseLeave);

  qAnsCheck._handleMouseDown = function(event) {
    mouseDownTime = Date.now();
    qAnsCheck.classList.add('whiteOn');
     
    pressTimer = setTimeout(() => { // timer when mouse is pressed down
      if (event.button === 0){ 
        for (let nthCube = 1; nthCube < userAns.length; nthCube++) { 
          if (!userAns[nthCube]) continue; //can't color the box if user hasn't scrolled on the cube, userAns is an undefined array on an unscrolled cube
          const faceNow = document.querySelector(`.cube-face.${userAns[nthCube][1]}[data-nth-cube="${nthCube}"]`);
          if (faceNow.style.backgroundColor !== '') continue;  // it's already colored
          
          colorFaceAddDmgTxt(faceNow, nthCube, null, null);

        }
      }
    }, 720);  
  }

  qAnsCheck._handleMouseUp = function(event) {
    qAnsCheck.classList.remove('whiteOn');
    const mouseUpTime = Date.now();
    const clickSpeed = mouseUpTime - mouseDownTime;

    if (clickSpeed <= 360) {
      if (event.button === 0) {  //left click
        if (onNewQ === false) {
          count++;
        }
        else{
          count = 1;
          onNewQ = false;
        }
        //msgBox.textContent = toDoubleLineFont(`Attempt number: ${count}`);

        for (let i = 1 ; i < userAns.length ; i++){
          console.log(userAns[i]);
          if (!userAns[i] || userAns[i][0] === undefined) continue;  // can't color the box if user hasn't scrolled on the cube, need both !userAns[i] || userAns[i][0]. w/o !userAns[i], error occurs if cubes aren'ts scrolled. w/o userAns[i][0] faces get colored
          if (cqaList[nowQ].answer[i] === userAns[i][0] || (cqaList[nowQ].answer[i] === undefined && userAns[i][0] === '')) correctCubes++;
        
          /* else 
            document.querySelectorAll(`.cube-face[data-nth-word="${i}"]`).forEach(face => { face.style.backgroundColor = 'hsl(0, 96%, 21%)'}); */
        }      
      }
    }

      //      activateVocabManipulate();
    
    clearTimeout(pressTimer); // without this, the code will always run after the time delay // mystery (but not important because clearTimeout(pressTimer) will prevent the code from running): if pressTimer = setTimeout(() => { runs, there will be an error saying the parent is null, but qText will not bc it has <pre>
    pressTimer = null;
  }

  qAnsCheck._handleMouseLeave = function() {
    clearTimeout(pressTimer);// Clear the timer if the mouse leaves the element. w/o this, if you hold right click and leave the element, it will color the faces and give points
    pressTimer = null;
    qAnsCheck.classList.remove('whiteOn');
  }
  qAnsCheck.addEventListener('mousedown',   qAnsCheck._handleMouseDown);// 💡Step 3: event listener is attached to the function itself, not the reference
  qAnsCheck.addEventListener('mouseup',     qAnsCheck._handleMouseUp);
  qAnsCheck.addEventListener('mouseleave',  qAnsCheck._handleMouseLeave);

  return qPicWall;

}

function toDoubleLineFont(text) {
  text = String(text); // convert number or anything else to string

  const map = {
    A: '𝔸', B: '𝔹', C: 'ℂ', D: '𝔻', E: '𝔼', F: '𝔽', G: '𝔾',
    H: 'ℍ', I: '𝕀', J: '𝕁', K: '𝕂', L: '𝕃', M: '𝕄', N: 'ℕ',
    O: '𝕆', P: 'ℙ', Q: 'ℚ', R: 'ℝ', S: '𝕊', T: '𝕋', U: '𝕌',
    V: '𝕍', W: '𝕎', X: '𝕏', Y: '𝕐', Z: 'ℤ',
    a: '𝕒', b: '𝕓', c: '𝕔', d: '𝕕', e: '𝕖', f: '𝕗', g: '𝕘',
    h: '𝕙', i: '𝕚', j: '𝕛', k: '𝕜', l: '𝕝', m: '𝕞', n: '𝕟',
    o: '𝕠', p: '𝕡', q: '𝕢', r: '𝕣', s: '𝕤', t: '𝕥', u: '𝕦',
    v: '𝕧', w: '𝕨', x: '𝕩', y: '𝕪', z: '𝕫',
    0: '𝟘', 1: '𝟙', 2: '𝟚', 3: '𝟛', 4: '𝟜', 5: '𝟝',
    6: '𝟞', 7: '𝟟', 8: '𝟠', 9: '𝟡',
    '+': '＋', '-': '-'
  };

  return [...text].map(char => map[char] || char).join('');
}
// Disable button to prevent clicks during transition



let buttonContainerTop     =  document.querySelector('.button-container-top');
buttonContainerTop.style.backgroundImage = "url('futuristic-btn.png')";
let buttonContainer     =  document.querySelector('.button-container');



function handleWheel(event) {
  //if (!event.target.closest('#kUser-input')) return;
 // event.preventDefault(); // disable scrolling an element

  function getRotateXInDegrees(elem) {
    const computedStyle = getComputedStyle(elem);
    const transform = computedStyle.transform;

    if (transform === 'none') return 0;

    // Example: matrix3d(1, 0, 0, 0, 0, 0, -1, 0, 0, 1, 0, 0, 0, 0, 0, 1)
    const values = transform.match(/matrix3d\(([^)]+)\)/);

    if (values) {
      const nums = values[1].split(',').map(Number);
      const b = nums[6]; // matrix3d 7th value (index 6) = sin(rotationX)
      const angleRad = Math.asin(b);
      const angleDeg = angleRad * (180 / Math.PI);
      return angleDeg;
    }

    return 0;
  }


  const roundedX = parseFloat(getRotateXInDegrees(buttonContainer).toFixed(2));
  if (roundedX !== -12.00) buttonContainerHorizontal = false; // ensures prism will rotateX to -90deg anytime button-top is clicked when prism is in vertical state
  buttonContainerTop.style.backgroundImage = ""; //  pic disappears when prism is horizontal and rotates

  if      (event.deltaY < 0)  yDeg += 72; 
  else if (event.deltaY > 0)  yDeg -= 72;
 /*  console.log(yDeg); */
  buttonContainer.style.transform = `rotateX(${xDeg}deg) rotateY(${yDeg}deg)`;
}
buttonContainer.addEventListener('wheel', handleWheel, { passive: true }); //passive: false -> notifies the browser that I will disable the default behavior. normally, it's true. This means the browswer knows default() will not be enabled, so it doesn't have to wait for this adjustment and scrolling begins immediately



/* 
function disableWheel(event) {
  event.preventDefault();
}

// Add on mouseenter
msgBox.addEventListener('mouseenter', () => {
  pElement.addEventListener('wheel', disableWheel, { passive: false });
});

// Remove on mouseleave if needed
msgBox.addEventListener('mouseleave', () => {
  pElement.removeEventListener('wheel', disableWheel);
}); */


buttonContainerTop.addEventListener('click', function() {
  //yDeg = 0; // if not, when wheel event occurs, y will jump back to where it originally was
  buttonContainerHorizontal = !buttonContainerHorizontal;
  //buttonContainer.style.transform = buttonContainerHorizontal ? 'rotateX(-90.1deg)' : 'rotateX(-12deg)';
  // 1368 - 288
  console.log(buttonContainerHorizontal);



  buttonContainer.classList.remove("animate-prism");
  if (buttonContainerHorizontal){
    yDeg = Math.round(yDeg / 360) * 360; // this makes sure the logo shows right side up
    buttonContainer.style.transform = `rotateX(-90.1deg) rotateY(${yDeg}deg)`;
    //buttonContainerTop.style.backgroundImage = "url('/Images/logo.png')";
    //buttonContainerTop.style.backgroundImage = "url('https://local.app/logo.png')";
    buttonContainerTop.style.backgroundImage = "url('futuristic-btn.png')";
    buttonContainer.style.transform = `rotateX(-90.1deg) rotateY(${yDeg}deg)`;
    buttonContainerTop.style.transform = `rotateX(90deg)   translateZ(83px) translateX(-31px) translateY(-8px)`;

    //buttonContainerTop.style.backgroundImage = "url('http://local.app/logo.png')";
    //buttonContainerTop.style.backgroundImage = "url('/logo.png')";
    /*fetch("https://local.app/logo.png")
    .then(r => console.log(r.status))
    .catch(e => console.log(e));*/
  }
  else{
    buttonContainer.style.transform = `rotateX(-12deg) rotateY(${yDeg}deg)`; // go vertical
    buttonContainerTop.style.transform = `rotateX(90deg)   translateZ(81px) translateX(-31px) translateY(-8px)`;

    buttonContainerTop.style.backgroundImage = "";
  }
});

/* buttonContainer.addEventListener('contextmenu', function(event) {
  event.preventDefault();  

}); */

/* buttonContainerTop.addEventListener('dblclick', function() {
  buttonContainerHorizontal = !buttonContainerHorizontal;
  buttonContainer.style.transform = "translateZ(0)";
  xDeg = xDeg - 0;
  yDeg = yDeg + 72;
 // if (buttonContainerHorizontal){
    /* buttonContainer.style.animation = "animatePrismV 15s linear infinite"; */
    /* buttonContainer.classList.add("animate-prism"); * /

    buttonContainer.style.transform = `rotateX(${xDeg}deg) rotateY(${yDeg}deg)`;   
  //}
 // else{
/*     buttonContainer.style.animation = "none";
    buttonContainer.style.transform = 'rotateX(-12deg)' * /
 // }
}); */


endingsBTN.addEventListener('click', function() {
  ///// temp console.log('ending button');
  //lastActionSentRelated = false; 
  endHiLiBoo = !endHiLiBoo;
  if (endHiLiBoo) {
    recentState = hiliEndOn;
    endingsBTN.classList.add('clicked');
    endingsBTN.classList.remove('gray'); //without it, text doesn't toggle from gray to colored 
  }
  else  { 
    endingsBTN.classList.remove('clicked'); 
    endingsBTN.classList.add('gray');
  }
  updateKT();});


articlesBTN.addEventListener('click', function() { 
  ///// temp console.log('afticle button')
  //lastActionSentRelated = false;
  artHiLiBoo = !artHiLiBoo;
  if (artHiLiBoo) {
    recentState = hiliArtOn;
    articlesBTN.classList.add('clicked');
    articlesBTN.classList.remove('gray'); //without it, text doesn't toggle from gray to colored 
  }
  else  { 
    articlesBTN.classList.remove('clicked'); 
    articlesBTN.classList.add('gray');
  }
  updateKT();});

hvbvBTN.addEventListener('click', (event) => { 
  ///// temp console.log('hvBV button')
    //lastActionSentRelated = false;
    if (!HvBvBoo) {
      HvBvBoo = true; recentState = hiliHvBvOn;
      if (infBoo) {hvBv1st = true; inf1st = false;}
      //kT = hiLiHvBv(kT);
      hvbvBTN.classList.add('clicked');
      hvbvBTN.classList.remove('gray'); //without it, text doesn't toggle from gray to colored 
    }
    else{
      HvBvBoo = false; hvBv1st = false;
      hvbvBTN.classList.remove('clicked');
      hvbvBTN.classList.add('gray');

    } 
    updateKT();  
    /* if (simplifyBoo)
      updateKT(); //activateVocabManipulate(); 
    else
      updateKT();//  displayAll();*/
});

infBTN.addEventListener('click', function() {
  ///// temp console.log('inf button')
    //lastActionSentRelated = false;
    if (!infBoo) {
      infBoo = true; recentState = hiliInfOn;
      infBTN.classList.add("clicked");
      infBTN.classList.remove('gray'); //without it, text doesn't toggle from gray to colored 
      if (HvBvBoo) {inf1st = true; hvBv1st = false;}   
      //kT = hiLiInf(kT); 
    }
    else{
      infBoo = false; inf1st = false;
      infBTN.classList.remove("clicked");
      infBTN.classList.add('gray');
      //kT = unHiLiInf(kT);
    }   
   /* if (simplifyBoo)
      updateKT();// activateVocabManipulate();
    else */
      updateKT();//displayAll();
    
    //if (infBoo)
    //  kT = kT.replace(/<span class="color lightPink">/g, '<span class="color litPink">'); 
});


contBTN.addEventListener('click', function() {
    if (!contBoo) {
      contBoo = true; recentState = hiliContOn;
      contBTN.classList.add("clicked");
      contBTN.classList.remove('gray'); //without it, text doesn't toggle from gray to colored 
         
    }
    else{
      contBoo = false; 
      contBTN.classList.remove("clicked");
      contBTN.classList.add('gray');
    }   
    updateKT();//displayAll();
});



function removeGray(colored, targetBtn) { // returns a function
  return function ()  { if (!colored) { targetBtn.classList.remove('gray');}; } //removing gray means it can be colored again
}

hvbvBTN.addEventListener('mouseleave', removeGray(HvBvBoo, hvbvBTN));      // need to remove so that when hovered, btn text will be colored even from an off state.  
hvbvBTN.addEventListener('mousedown', removeGray(HvBvBoo, hvbvBTN));      // w/o this, color will remain gray if mouse is held down from an off state.

articlesBTN.addEventListener('mouseleave', removeGray(artHiLiBoo, articlesBTN));
articlesBTN.addEventListener('mousedown', removeGray(artHiLiBoo, articlesBTN));// all of these have this function ㅣ locked and loaded waiting to execute as soon as the even happens
                                                                                         //                       \/
infBTN.addEventListener('mouseleave', removeGray(infBoo, infBTN));            //                        return function ()  { if (!colored) { targetBtn.classList.remove('gray');}; }
infBTN.addEventListener('mousedown', removeGray(infBoo, infBTN));

endingsBTN.addEventListener('mouseleave', removeGray(endHiLiBoo, endingsBTN));
endingsBTN.addEventListener('mousedown', removeGray(endHiLiBoo, endingsBTN)); 



simplifyBTN.addEventListener('click', function() {
   console.log('Simplify Button');
  //lastActionSentRelated = false;

  simplifyBoo = !simplifyBoo;
  if (!simplifyBoo) {
    vocabList.forEach(voc => {
      voc.meaningON = false;
      voc.synON = false;
      voc.koreanON = false;
      previousSentWithVocPIC = null;
      currentSentWithVocPIC = null; //this allows pElement.replaceChildren(); to run in functionKt
    });
    cqaVocabList.forEach(voc => {
      voc.meaningON = false;
      voc.synON = false;
      voc.koreanON = false;
    });
  }
  updateKT();

  //adjustClientHeight();
});


textBTN.addEventListener('click', function() {
  let element = document.getElementById('kUser-input');
  if (!textBoo && !wholeTextBoo) {
    // First state
    textBoo = true; 
    console.log('1st');
    kUserInput.style.color = 'black';
    
    element.style.userSelect = 'none'; // prevents user from manually highlighting text


//let element = document.getElementById('myElement');
//element.style.userSelect = 'auto'; // Re-enables text selection
    //activateVocabManipulate();

  } else if (textBoo && !wholeTextBoo) {
    wholeTextBoo = true;console.log('2nd');// Second state
    
    for (let i = 0; i < paraVocNodeList.length; i++) {
      //paraVocNodeList[i].style.backgroundColor = 'rgba(255, 250, 250, 1)'; // Red overlay with 50% opacity
      paraVocNodeList[i].style.mixBlendMode = 'multiply'; // Apply multiply blend mode
    }
    


    if (simplifyBoo){
      activateVocabManipulate();//activateVocabManipulate();
  
    }
      
      magSentCont.style.width = '1900px';
      magSentCont.style.height = '190px';
      magSentCont.style.position = 'static';
      magSentCont.style.bottom = '600px';
      magSentCont.style.left = '50px';
      magSentCont.style.zIndex = '1';
      magSentCont.style.transition = 'width 2s, height 1s, opacity 1s, top 1s, left 1s';
    
      hvbvBTN.style.marginTop = '196px';
      hvbvBTN.style.marginBottom = '9px';
      magBTN.style.marginTop = '0px';
      magBTN.style.marginBottom = '240px';
      hiLiBTN.style.marginTop = '24px';
      displayAll();
  } else if (textBoo && wholeTextBoo) { 
    // Third state
    textBoo = false;
    wholeTextBoo = false; console.log('3rd'); 


    //if (updateKT) sentenceHiLiBoo = false;
   // if (updateKT) updateKT(sentNow);
    //kUserInput.innerHTML = kT;
    element.style.userSelect = 'auto';  // user can manually highlight text again.
    kUserInput.style.color = 'hsl(0, 0%, 72%)'; // Set to grey color
    for (let i = 0; i < paraVocNodeList.length; i++) {
      paraVocNodeList[i].style.mixBlendMode = 'screen'; // Apply multiply blend mode
    }
    
    //updatePic('galaxy.gif');updatePic2('sun.gif');
      activateVocabManipulate();
  
      magSentCont.style.width = '1900px'; 
      magSentCont.style.height = '190px';
      magSentCont.style.top = '920px';
      magSentCont.style.left = '50px';
      hvbvBTN.style.marginTop = '16px';
      hvbvBTN.style.marginBottom = '0px';
                                      
      magBTN.style.marginTop = '5px';
      magBTN.style.marginBottom = '55px';
      hiLiBTN.style.marginTop = '90px';
      magSentCont.style.position = "static";
      updateKT();
  }
});

function nextSentence() { // can only enter this function if magnifyBoo OR sentenceHiLiBoo are true
  //textClicked = false;
  if (sentNow >= diamondArLength - 2) return;
  sentNow++;
  while (diamondAR[sentNow] && isEmptyOrImage(diamondAR[sentNow])) {
    sentNow++;}  // skips whitespace (" ")                                          

  if (diamondAR[sentNow]) {  // index with "" means it's falsy so it won't go through this part of the code
    sentenceTraversed = true;  
    lastActionSentRelated = true;
    displayAll();
  } else {
    do {
      sentNow--;// Move back to the last valid sentence
    } while (sentNow >= 0 && isEmptyOrImage(diamondAR[sentNow]));
  }
}

/*

function nextSentence() { 
  sentenceTraversed = true;
  if (sentNow < kUserTxtAR(obsolete).length - 2){// && sentNow+1 !== kUserTxtAR(obsolete).length - 2 && !/^<span id="circle2?"><\/span>\s*$/.test(kUserTxtAR(obsolete)[sentNow+1])) {  //Last array index always has "" If length: 18, last index:[17] is ""   currentSent: [0-17] . 16 is the max for sentNow
    sentNow++;  
     
 
    while (whitespaceOrEmpty.test(kUserTxtAR(obsolete)[sentNow])||/^<span id="circle2?"><\/span>\s*$/.test(kUserTxtAR(obsolete)[sentNow])) sentNow++;
    //while (kUserTxtAR(obsolete)[sentNow] === undefined) sentNow--;
    if (kUserTxtAR(obsolete)[sentNow] !== undefined && (magnifyBoo || sentenceHiLiBoo))
      updateKT();
    if (kUserTxtAR(obsolete)[sentNow] === undefined){
      sentNow--
      while (whitespaceOrEmpty.test(kUserTxtAR(obsolete)[sentNow])||/^<span id="circle2?"><\/span>\s*$/.test(kUserTxtAR(obsolete)[sentNow])) sentNow--;
      }
    sentenceTraversed = false;  
 }}     

    while (kUserTxtAR(obsolete)[sentNow] && (whitespaceOrEmpty.test(kUserTxtAR(obsolete)[sentNow]) || /^<span id="circle2?"><\/span>\s*$/.test(kUserTxtAR(obsolete)[sentNow]))) sentNow++;
    if (kUserTxtAR(obsolete)[sentNow] && (magnifyBoo || sentenceHiLiBoo)) {
      updateKT();}
    if (!kUserTxtAR(obsolete)[sentNow]) {
      do {
        sentNow--;
      } while (kUserTxtAR(obsolete)[sentNow] && (whitespaceOrEmpty.test(kUserTxtAR(obsolete)[sentNow]) || /^<span id="circle2?"><\/span>\s*$/.test(kUserTxtAR(obsolete)[sentNow])));
    }


    /**
    if (sentenceHiLiBoo) updateKT(); 

    if (magnifyBoo && !sentenceHiLiBoo) 
      if (simplifyBoo)
        activateVocabManipulate();
      else
        displayAll(); 
    */

   
/////////////////////  }} 
function previousSentence() {   //can only enter this function if magnifyBoo OR sentenceHiLiBoo are true
  //textClicked = false;
/*   if (sentNow < 0){
    sentNow++; 
    return;
  } */
  if (sentNow === 2) {  //2 is the lowest index because 0 is sun_transparent
    sentenceTraversed = false;
    return;} // Exit early if already at the start
  sentNow--;
/*   if (sentNow === 2 && isEmptyOrImage(diamondAR[sentNow])) {// Check if we're at the start and it's whitespace
    sentNow++;
    sentenceTraversed = false; // Skip further processing
    return; }  */               

  while (sentNow > 2 && isEmptyOrImage(diamondAR[sentNow])) {
    sentNow--;}// Skip whitespace or empty content
  if (sentNow >= 2) {// Update if conditions are met and we're not blocked by a barrier
    sentenceTraversed = true; // <span id="circle2? will also go in the DOM
    lastActionSentRelated = true;
  
/*     while (isEmptyOrImage(diamondAR[sentNow]))  {
    sentNow++;
    sentenceTraversed = false;} */

    displayAll();
  }
}

function isEmptyOrImage(text) {
  return whitespaceOrEmpty.test(text) || /^<img id="circles?">(?:<\/img>)?\s*$/.test(text); 
}

/*function previousSentence() {
  let barrier = false; 
  sentenceTraversed = true;
  
  if (sentNow > 0){                                                    //  [0] sentence          [0] ""
    sentNow--;                                                        //   [1] ""                [1] sentence  
    if (sentNow === 0 && whitespaceOrEmpty.test(kUserTxtAR(obsolete)[sentNow])){
      sentNow++;
      barrier = true;}

    while (whitespaceOrEmpty.test(kUserTxtAR(obsolete)[sentNow])||/^<span id="circle2?"><\/span>\s*$/.test(kUserTxtAR(obsolete)[sentNow])) sentNow--;
  
    if ((magnifyBoo || sentenceHiLiBoo) && !barrier) updateKT();
    sentenceTraversed = false;
  }
  console.log(sentNow)
}*/



    /*
    if (magnifyBoo && !barrier) updateKT();
    if (sentenceHiLiBoo && !barrier) updateKT(); 
    
    if (magnifyBoo && !sentenceHiLiBoo) 
      if (simplifyBoo)
        activateVocabManipulate(); 
       */
    

  /*
    if (whitespaceOrEmpty.test(kUserTxtAR(obsolete)[sentNow]))
      sentNow--;
    if (sentNow === -1){// This prevents the 1st sentence's hilighting disappearing if you keep pressing left.
      sentNow += 2;
      barrier = true;}
 */   





leftButton.addEventListener('click', function() {
  if ((sentenceHiLiBoo) || (magnifyBoo))
    previousSentence();});

rightButton.addEventListener('click', function() {
  if ((sentenceHiLiBoo) || (magnifyBoo))
    nextSentence();});

// Listen for arrow key press events
/* document.addEventListener('keydown', function(event) {
  if (!isKeyDown) {
    if (event.code === 'ArrowRight' && ((sentenceHiLiBoo) || (magnifyBoo)) ) {
      nextSentence();
      isKeyDown = true;
    } else if (event.code === 'ArrowLeft' && ((sentenceHiLiBoo) || (magnifyBoo))) {
      previousSentence(); 
    }
  } else {
    event.preventDefault();
  }
}); */



document.addEventListener('keydown', function(event) {
  // Check if the user is focused inside the contenteditable div
  if (event.target.closest('.notes')) {
    return; // Do nothing if inside the contenteditable div
  }

  if (!isKeyDown) {
    if (event.code === 'ArrowRight' && ((sentenceHiLiBoo) || (magnifyBoo)) ) {
      nextSentence();
      isKeyDown = true;
    } else if (event.code === 'ArrowLeft' && ((sentenceHiLiBoo) || (magnifyBoo))) {
      previousSentence(); 
    }
  } else {
    event.preventDefault(); //preventing the default browser behavior when a key is held down and triggers repeat events.
  }
});






document.addEventListener('keyup', function() {
  isKeyDown = false;
});

//icon = document.getElementById("icon");
icon.onclick = function(){
  document.body.classList.toggle("dark-theme")
  if(document.body.classList.contains("dark-theme")){
    icon.src = "sun.png";
  }
  else{
    icon.src = "moon.png";
  }
}



function displayAll(){ 
  console.log('displayAll');

  adjustDampingHybrid(scrollbar, pElementContainer);
  //console.log(teacherQAarr[sentNow/2]);
  //console.log(teacherQAarr[sentNow/2][0]);

  /* if (teacherQAarr[sentNow/2] && teacherQAarr[sentNow/2][0] != null) {  toInnerHTML(msgBox, `<p>${lightUpAll(teacherQAarr[sentNow/2][0], sentNow, false)}</p>`);
  } else {  toInnerHTML(msgBox, `<p>${lightUpAll("Charlotte's Web. Chapter 3. Who Let Wilbur Out!", sentNow, false)}</p>`);}  longer version*/

  //      console.log(numberQASentences(toArrayK(teacherQA[1]))); // [1] is the only match, [0] would include double brackets

  if (magnifyBoo && !compQboo) {   // conditions for updating magSent
    //const magSentStats = document.getElementById('magSent-stats');
    //magSent.innerHTML = `<p>${lightUpAll(diamondAR[sentNow], sentNow, false)}</p>`;
    toInnerHTML(magSent, `<p>${lightUpAll(diamondAR[sentNow], sentNow, false)}</p>`);
    magSent.appendChild(magSentStats);



    //if (magSentLclick === 1) 
    //  if (leftPic === null || (leftPic !== fileNameNow && leftPic !== leftPics[sentNow / 2])) displayLeftPic();
   /*  console.log(`leftPic: ${leftPic}`);
    console.log(`fileNameNow: ${fileNameNow}`);
    console.log(`leftPics[sentNow / 2]: ${leftPics[sentNow/2]}`); */


   // if (!lastActionSentRelated && magSentLclick === 1 && leftPic !== leftPics[sentNow / 2]) {    displayLeftPic(); }  // lastActionSentRelated on/off but MagL displays doesn't change


    //if (magSentLclick === 1 && (leftPic === null || (leftPic !== fileNameNow && leftPic !== leftPics[sentNow / 2]))) displayLeftPic();  // word is different so show img
    //magSent.innerHTML = `<pre style="font-family: 'Playfair Display', Times, serif;">${lightUpAll(kUserSent, sentNow)}</pre>`;

    /*    fontSize = 45;
    magSent.style.fontSize = fontSize + 'px';
    while ((magSent.scrollHeight > magSent.clientHeight || magSent.scrollWidth > magSent.clientWidth) && fontSize > 0) {
        magSent.style.fontSize = (fontSize -= 1) + 'px';
    } */
    adjustFontsize(magSent);  
  
  }
  if (sentenceTraversed /* || !lastActionSentRelated */) // if vocab pic shows, traverse and vocab pic doesn't remain. Instead it'll go back to leftPics
    fileNameNow = leftPics[sentNow/2]; //when magSentL is turned off, leftPic will be null. This will turn it back on with a click
  if (magSentLclick === 1 ) {
    displayLeftPic(leftPics[sentNow/2]);  
  }
  if (magSentRclick === 1 ) {
    displayRightPic(rightPics[sentNow/2]);  
  }
  if (compQboo && !sentenceTraversed && !click.text  /*&& !lastActionSentRelated */){ //if sentence didn't traversed, that means color or arrows were clicked. sentenceTraversed being true means nothing was colored in qText so no need to update qText
    toInnerHTML(qText, `<p>${lightUpAll(cqaList[nowQ].compQ, nowQ, true)} from displayAll via toInnerHTML</p>`)
    adjustFontsize(qText);
    if (multChoiceQon) {  displayMCs();  } 
  }  

  //if ( !(magnifyBoo && !sentenceHiLiBoo && !click.text && sentenceTraversed) ){// This code is not needed when only magSent is traversing, if all 4 booleans are true, this code will not run. 
  if (lastActionSentRelated || sentenceHiLiBoo || click.text || (sentenceTraversed && !magnifyBoo)){ // latestActionHiLiBtn allows toggle hiliBtn, sentenceHiLiBoo keeps sentence hili when text get colored, sentenceTraversed for auto scroll when user traverses beyond the container 
    //console.log('_________sentence__________' + sentenceHiLiBoo + '   ' + lastActionSentRelated);

    const toUnHiLi = pElement.querySelector(`span[data-index="${sentB4}"]`); //toUnHiLi will not exist at the beginning
    const toHili   = pElement.querySelector(`span[data-index="${sentNow}"]`); 
    toUnHiLi?.classList.remove('lightUpSentence', 'litUpSentence');
    if (sentenceTraversed && sentenceHiLiBoo) {
      //sentenceHiLiBoo = true;
      toHili.classList.add('lightUpSentence');
    }else {  // remains at the same sentence
      if (click.text) {
        sentenceHiLiBoo = !sentenceHiLiBoo;
        toHili.classList.toggle('lightUpSentence', sentenceHiLiBoo); // only toggle when sentenceHiLiBoo is true
      }else
        toHili.classList.toggle('litUpSentence', sentenceHiLiBoo); 
    }
   
    if ((click.text || sentenceTraversed || lastActionSentRelated || (magnifyBoo && lastActionSentRelated)) && sentenceHiLiBoo /* && !lastActionSentRelated */){   //!sentenceHiLiBoo will have ghost scrolling if magSent is on.
      adjustClientHeight(/* latestActionHiLiBtn && */ (sentNow === sentB4), sentNow); // regardless of latestActionHiLiBtn, the parameter will be false if sentNow and sentB4 are not equal to each other so scroll will 72%. If they're equal then user is searching for the sentence so it scroll and show sentence at the top
    }
    sentB4 = sentNow;
    click.text = false;
    //sentenceTraversed = false; 

  }
  lastActionSentRelated = false; // if put in previous block, won't get updated if only magSent is traversing
  
  if (manuallyHiLiSentArr){
    const manuallyHiLiSentArrLength = manuallyHiLiSentArr.length;
    for (let i = 0; i < manuallyHiLiSentArrLength; i++) { 
      const span = pElement.querySelector(`span[data-index="${manuallyHiLiSentArr[i]}"]`);
      span.classList.add('litUpManually');
      
    }
  }


  if (msgBoxBoo){
    if (sentenceTraversed)  { index = 0; } //prevents undefined which happens when at index 5 of a sentence and LR arrow key to another sentence that doesn't have index 5
      const value = teacherQAarr[sentNow/2][index];// '??' =  Nullish Coalescing 
      toInnerHTML(current, `<p>${lightUpAll(value, sentNow/2, null)}</p>`);  // not colored sentence turn on from mouseup
      adjustFontsize(current);
      toInnerHTML(next, `<p>${lightUpAll(value, sentNow/2, null)}</p>`);  // colored sentence turn on from mouseup
      adjustFontsize(next);
  }
  sentenceTraversed = false; // need it here bc if it was in the previous block, qBtn can't update qText in the case only magSent is on

  if (justifySentHiLi)  { hiliJustifiedSent(false); }  //remains highlighted in blue while text gets colored or underlined
 
 
  if (wholeTextBoo) // 2nd state, entire paragraph disappears
   pElement.replaceChildren();//kUserInput.innerHTML = '';
  else{
    //kUserInput.innerHTML = kT;
    //kUserInput.innerHTML = `<pre>${kT}</pre>`; //paraVocNodeList updated
    //pElement.innerHTML = kT;
    //console.log('displayALL');
  }
/*   if (simplifyBoo && compQboo){
    activateVocabManipulate();   //  compQboo not needed I think 
  }  */
  //kT = kT.replace(/<span class="lightUpSentence">/g, '<span class="litUpSentence">');
 /*  kT = kT.replace(/<span clasdfss="color (lightCyan|lightPurple2?|lightOrange|lightPink2?)">/gi, function(match, p1) {
    return `<span class="color lit${p1.slice(5)}">`;});  */
    recentState = null;  //reset
    
    //updatePic2('sun_transparent.gif');
    //updatePic('galaxy_transparent.gif');

    //updatePic('sun_transparent.gif');    
    if (magSentStatsBoo) styleMagSentStats(sentNow);
}


function adjustClientHeight(alwaysTop, sentNum) {
  let percent = alwaysTop ? 0.11 : 0.72;
  const offset = pElementContainer.clientHeight * percent;
  requestAnimationFrame(() => {
    const kUserPre = pElementContainer.getBoundingClientRect();
    const sentNowPos = document.querySelector(`span[data-index="${sentNum}"]`)?.getBoundingClientRect();
    if (!sentNowPos) return;
    const currentScrollTop = scrollbar.offset.y; // <-- use scrollbar.offset.y
    const fullyVisible =
      sentNowPos.top > kUserPre.top &&
      sentNowPos.bottom < kUserPre.bottom;
    if (fullyVisible) return;
    let newScrollTop = currentScrollTop;

    if (sentNowPos.top <= kUserPre.top || alwaysTop) {
      newScrollTop += sentNowPos.top - kUserPre.top - offset;
    } else {
      newScrollTop += sentNowPos.bottom - kUserPre.bottom + offset;
    }
    // Use Smooth Scrollbar to scroll
    //scrollbar.setPosition(0, newScrollTop);
    // Or, if you want animated scrolling:
    scrollbar.scrollTo(0, newScrollTop, 1440);
  });
}
/*     function adjustClientHeight(alwaysTop, sentNum) {
  let percent = alwaysTop ? 0.11 : 0.72;
  const offset = pElementContainer.clientHeight * percent;

  requestAnimationFrame(() => {
    const kUserPre = pElementContainer.getBoundingClientRect();
    const sentNow = document.querySelector(`span[data-index="${sentNum}"]`);
    if (!sentNow) return;

    const sentNowPos = sentNow.getBoundingClientRect();

    const fullyVisible =
      sentNowPos.top > kUserPre.top &&
      sentNowPos.bottom < kUserPre.bottom;

    if (fullyVisible) return;

    const currentScrollTop = scrollbar.offset.y;
    const newScrollTop = currentScrollTop + (sentNowPos.top - kUserPre.top - offset);

    scrollbar.setPosition(0, newScrollTop);
  });
}

 */






/*************************************************************************************************************************************************************************/





function insertBR(vocAttribute, floatTag) {
  if (vocAttribute.includes('\n')) {
    const lines = vocAttribute.split('\n');
    //floatTag.innerHTML = lines.join('<br>');
    toInnerHTML(floatTag, lines.join('<br>'));
  } else  toInnerHTML(floatTag, vocAttribute);   //floatTag.textContent = vocAttribute;  this won't lightup expl
}

function computeFloatTagFontSize(container, floatTag){
  const computedFontSize = window.getComputedStyle(container).fontSize;
  const fontSizeNumber = Math.max(parseInt(computedFontSize) - 13, 18);  //ensures fontsize doesn't go below 18
  floatTag.style.fontSize = fontSizeNumber + 'px';
}

function centerFloatOrRightAlignWrappedVoc(vocab, floatTag, leftPadding, container) {
  const vocRect = vocab.getClientRects();  // Get the list of rectangles//similar to an array of each box if text take up multiple lines
  // Ensure floatTag is rendered and measurable, w/o this the vocab flickers when it is pressed and the wordType/antn shows
  floatTag.style.visibility = 'hidden';
  floatTag.style.display = 'block';
  floatTag.style.top = '0px'; // Reset to not interfere with measuring

  // Let the browser layout update first
  requestAnimationFrame(() => {
    if (vocRect.length === 1){//C E N T E R  the floatTag  //gets number of lines vocab is in
      const vocabMid = vocab.offsetLeft + vocab.offsetWidth / 2;  // kVocab in magSent is in <p> with no padding which is in magSent which is in magSent-box
      const floatTagMid = vocabMid - floatTag.offsetWidth / 2;
      floatTag.style.left = floatTagMid + 'px';
      // H A N D L E   O V E R F L O W I N G
      if (floatTag.offsetLeft < 0) {   //it's overflowing to the left
        floatTag.style.left = leftPadding + 'px'; //floatTag in magSent is pegged to magSent-box
      } else if (floatTag.offsetLeft + floatTag.offsetWidth > container.offsetWidth) {// if it's overflowing to the right, right end of floatTag sticks to container's far right
        floatTag.style.left = (container.offsetWidth - floatTag.offsetWidth) + 'px'; //floatTag.offsetLeft is discarded bc it's taking up too much space
      }
    }
    else{ // C A S E    W H E R E    V O C A B    T A K E S   U P   T W O   L I N E S   
      floatTag.style.left = (vocab.offsetLeft /* + vocRect[0].width */ - floatTag.offsetWidth) + 'px';  // to the left of the cut off word
      //floatTag.style.top = (vocab.offsetLeft + vocRect[0].height) + 'px';
     /*  floatTag.style.top = `${vocRect[1].bottom}px`;
      console.log(vocRect[0].bottom);
      console.log(vocRect[1].bottom); */
      //floatTagKt.style.top = `${kTvocabRect[0].bottom + 4}px`; 
    } 
    // V E R T I C A L   A L I G N M E N T 
    floatTag.style.top = (vocab.offsetTop - floatTag.offsetHeight) - 2 + 'px';  // Position floatTag just above vocab //floatTag.innerHTML = lines.join('<br>');  done in insertBR
    if (container.id === 'p-container') {  /* pElementContainer *///if there is no space for floatTag to go above vocab, go to its bottom
      const floatRect = floatTag.getBoundingClientRect();
      const containerRect = container.getBoundingClientRect();
      if (floatRect.top < containerRect.top)   { floatTag.style.top = (vocab.offsetTop + vocab.offsetHeight) + 2 + 'px'; } //Position floatTag just below vocab
    }
    if ( vocRect.length >= 2)  { floatTag.style.top = (vocab.offsetTop + vocRect[0].height + vocRect[1].height - floatTag.offsetHeight) + 'px'; }

    hideCursor(vocab);

    floatTag.style.visibility = 'visible';
  });
}


function generateCubes(nowQ) {
  console.log('generateCubes');
  onNewQ = true;
  multChoiceQon = false;
  magSent.style.overflow = 'hidden';  // it would be visible to show float tags in mc, must have it hidden here to contain the cubes

  // msgBox.textContent = toDoubleLineFont('Attempt number: 0');


  //qText.innerHTML   = `<pre>${lightUpAll(cqaList[nowQ].compQ, nowQ,    true) } from click generateCubes</pre>`;
  //magSent.innerHTML = `<p>${lightUpAll(   diamondAR[sentNow], sentNow, false)}                         </p>`.replace(/(<img id="circles?"><\/img>)/g, '');


  //updateQtext('generateCubes')   obsolete function, replaced with toInnerHTML
 // displayAll();

  userAns = [];  //must reset, declared global

  const all4MCs = [  // [cqaList[qNow]
    cqaList[nowQ].choiceA.words,  //eachMC[0]
    cqaList[nowQ].choiceB.words,  //eachMC[1]
    cqaList[nowQ].choiceC.words,  //eachMC[2]
    cqaList[nowQ].choiceD.words,  //eachMC[3]
  ];
  magSent.replaceChildren(); // Clear previous cubes
  // Determine the maximum number of cubes based on the longest sentence
  const maxWordCount = Math.max(...all4MCs.map(eachMC => eachMC.length));// Determine the maximum number of cubes based on the longest sentence
                     //Math.max(1, 2, 3);  // Outputs: 3
                                        //.map() function produces an array of numbers such as: [3, 2, 4] using spread operator the result it: 3, 2, 4                                           
                                             //eachMC ie: (12) [null, '1To', '1argue', '1that', '1urban', '1agriculture', '1is', '1more', '1effective', '1than', '1traditional', '1farming']
  //const sceneWrapper = document.createElement('div'); don't need sceneWrapper???
  //sceneWrapper.classList.add('scene-wrapper');                   
  const sceneContainer = document.createElement('div');
  sceneContainer.classList.add('scene-container'); 
  for (let nthCube = 1; nthCube < maxWordCount; nthCube++) { //maxWordCount will always have one more. If the sentence has 11 words, there is also null. So an 11-worded sentence has a length of 12, not 11
    const wordsOnEachCube = all4MCs.map(eachMC => eachMC[nthCube] || '');// map() produces the same content but adds '' if there are any falsy values. So at the start, the sub-array can have different lenghts, but after map() they will all have the same length
    //if (wordsOnEachCube.every(word => word.trim() === '')) {continue; } // became obsolete when let nthCube = 0 -> 1// Skip creating this cube if no words to display. Skip the current iteration of a loop

    const scene = document.createElement('div'); 
    scene.classList.add('scene');
    const cube = document.createElement('div');
    cube.classList.add('cube');
    const randomRotateX = Math.floor(Math.random() * 360);// Apply a random rotation to each cube
    const randomRotateY = Math.floor(Math.random() * 360);
    cube.style.transform = `rotateX(${randomRotateX}deg) rotateY(${randomRotateY}deg)`;
    
    const shuffledFaces = shuffleArray(wordsOnEachCube);  //wordsOnEachCube = each of 4 indices has an array of words //wordsOnEachCube holds the nth word of all 4 sentences
    
    function shuffleArray(array) {// Function to shuffle an array (used to randomize the word positions)
      for (let i = array.length - 1; i > 0; i--) {
          const j = Math.floor(Math.random() * (i + 1));
          [array[i], array[j]] = [array[j], array[i]]; // Swap elements  // with destructuring (creating something temporary that holds a value in this case an array on the left and another on the right side of = holds 2 arrays.) [array[i] gets the value of [array[j] and [array[j] get the value of [array[i]
      }
      return array;
    }
    // Create the 4 faces for the cube  // Assign each shuffled word to a cube face
    shuffledFaces.forEach((word, index) => { //syntax: array.forEach((item, (optional:)index, array) => {
        const face = document.createElement('div'); 
        face.classList.add('cube-face', `face${index + 1}`);  //i.e. <div class="cube-face face1" data-word-index="4">1urban</div>
        face.textContent = word.replace(/\|/g, ' ').replace(/\s+/g, ' ').trim();
        face.setAttribute('data-nth-cube', nthCube);
        face.setAttribute('data-face-color', '');
        adjustFontsize(face, 24); //null because true would be magSent and false would be qText
        cube.appendChild(face);
    });
    ['face5', 'face6'].forEach(faceNum => {
        const face = document.createElement('div');
        face.classList.add('cube-face', faceNum);
        face.textContent = 'N. O. E. L.  S U P E R S T A R S';
        face.setAttribute('data-nth-cube', nthCube);
        cube.appendChild(face);
    });
    scene.appendChild(cube);
    sceneContainer.appendChild(scene);
  } 
  //sceneWrapper.appendChild(sceneContainer); 
  magSent.appendChild(sceneContainer); // used to be   magSent.appendChild(sceneWrapper);
  enableHoverScrollRotation();
}





const norm = deg => ((deg % 360) + 360) % 360;
function getFrontFaceByRotation(turnX) {
  const x = norm(turnX);
  switch (x) {
    case 0:   return 'face1';     // front
    case 90:  return 'face4';     // bottom
    case 180: return 'face3';     // back
    case 270: return 'face2';     // top
    //default:  return 'unknown';
  }
}    

const leftTwistMap = {
  90:  { axisY:   0, axisZ: -30 },
  270: { axisY:   0, axisZ:  30 },
  180: { axisY: -30, axisZ:   0 },
  0:   { axisY:  30, axisZ:   0 },
};
const rightTwistMap = {
  90:  { axisY:   0, axisZ:  30 },
  270: { axisY:   0, axisZ: -30 },
  180: { axisY:  30, axisZ:   0 },
  0:   { axisY: -30, axisZ:   0 },
};
    
function enableHoverScrollRotation(){
  const cubes = document.querySelectorAll('.cube');
  //if (cube === cubes[0]) cube.style.transform = `rotateX(${rotationX}deg) rotateY(${axisY}deg)`;
  
  cubes.forEach(cube => {
    let rotationX = 0;
    let axisY = 0;
    let axisZ = 0;
    
    //cubes[0].style.transform = `rotateY(${30}deg)`;
    let listenersAttached = false;

    cube.addEventListener('mouseenter', () => { 
      if (listenersAttached) return; // Don't attach again. Bullet proof, previous mouseleave may not have removed the listeners
      listenersAttached = true;
      let pressTimer = null;
      let mouseDownTime = 0;

      const onWheel = (event) => {
        if (event.deltaY !== 0) {
          // Update rotation
          rotationX = (rotationX + (event.deltaY > 0 ? -90 : 90)) % 3600;
          const states = [// Define state transitions
            { axisY: 30, axisZ:  0 },
            { axisY:  0, axisZ: 30 },
            { axisY:-30, axisZ:  0 },
            { axisY:  0, axisZ:-30 },
          ];

          
        
          /* if (axisY === 0 && axisZ === 0) {// Handle special case when both axisY and axisZ are 0
            axisY = 0; // Set a default starting state
            axisZ = 0;
          } else { */
          if (!(axisY === 0 && axisZ === 0)){
            let currentIndex = states.findIndex(state => state.axisY === axisY && state.axisZ === axisZ);// Find the current state index
            currentIndex = (currentIndex + (event.deltaY > 0 ? 1 : -1) + states.length) % states.length;// Calculate the next state index based on the direction
            axisY = states[currentIndex].axisY;// Update axisY and axisZ
            axisZ = states[currentIndex].axisZ;
          }
        }
        /* rotationX = 327;axisY = 275; causes top left face to not fully show if there is another cube below it*/

        cube.style.transform = `rotateX(${rotationX}deg) rotateY(${axisY}deg) rotateZ(${axisZ}deg)`;
        //console.log('rotationX:' + rotationX, ' axisY: ' + axisY, 'axisZ: ' + axisZ);
        // console.log(cube.querySelector('.cube-face.face2').textContent);

        // Inside your event where rotation changes
        const visibleFace = getFrontFaceByRotation(rotationX);
        //console.log(cube);
        //console.log('Currently visible face:', visibleFace);
        const visibleNthCubeFace = parseInt(cube.querySelector(`.cube-face.${visibleFace}`).dataset.nthCube, 10);  // line:3043  face.setAttribute('data-nth-word', nthCube);
        //console.log(`${visibleNthCubeFace}: ${cube.querySelector(`.cube-face.${visibleFace}`).textContent}`);
        userAns[visibleNthCubeFace] = [cube.querySelector(`.cube-face.${visibleFace}`).textContent, visibleFace];
      };

      const handleMouseDown = (event) => {
        mouseDownTime = Date.now();
        const faceNow = event.target;
        const nthCube = parseInt(faceNow.dataset.nthCube, 10);

        if (faceNow.style.backgroundColor !== '' || faceNow.textContent === 'N. O. E. L.  S U P E R S T A R S' || !userAns[nthCube]) 
          return;// !== '' means already colored                          illegitimate face                        cube wasn't scrolled    
        pressTimer = setTimeout(() => {
          colorFaceAddDmgTxt(faceNow, nthCube, event.clientX, event.clientY);
        }, 720);
      };

      const handleMouseUp = (event) => {
        clearTimeout(pressTimer);
        pressTimer = null;
        const mouseUpTime = Date.now();
        const clickSpeed = mouseUpTime - mouseDownTime;

        if (clickSpeed <= 360) {
          if (event.button === 0 || event.button === 2) {  // twists cubes left or right
            const twistMap = event.button === 0 ? leftTwistMap : rightTwistMap;
            //const normalizedX = ((rotationX % 360) + 360) % 360; // Normalize negative angles   (N % M) = ((N % M) + M) % M
            const normalizedX = norm(rotationX);
            const twistYZ = twistMap[normalizedX] || { axisY: 0, axisZ: 0 };            
          
            const isNeutral = (
              (axisY === 0 && axisZ === 0) ||
              (axisY === -30 && axisZ === 0) ||
              (axisY === 0 && axisZ === 30) ||
              (axisY === 30 && axisZ === 0) ||
              (axisY === 0 && axisZ === -30)
            );
            
            if (axisY === twistYZ.axisY && axisZ === twistYZ.axisZ) {
              cube.style.transform = `rotateX(${rotationX}deg) rotateY(0deg) rotateZ(0deg)`;
              axisY = 0;
              axisZ = 0;
            } else if (isNeutral) {
              cube.style.transform = `rotateX(${rotationX}deg) rotateY(${twistYZ.axisY}deg) rotateZ(${twistYZ.axisZ}deg)`;
              axisY = twistYZ.axisY;
              axisZ = twistYZ.axisZ;
            }
            
            /* w/o this, userAns is not determined when cube is clicked (determined only from scroll), thus cube won't change color. */
            const visibleFace = getFrontFaceByRotation(rotationX);
            const visibleNthCubeFace = parseInt(cube.querySelector(`.cube-face.${visibleFace}`).dataset.nthCube, 10);  
            userAns[visibleNthCubeFace] = [cube.querySelector(`.cube-face.${visibleFace}`).textContent, visibleFace];
          }
        } 
      };


      // Attach event listeners
      cube.addEventListener('wheel', onWheel, { passive: true }); // passive: true  for optimization it blocks the default behavior of checking for preventDefault() which would prevent scrolling 
      cube.addEventListener('mousedown', handleMouseDown); // Handles left click
      cube.addEventListener('mouseup', handleMouseUp); // Handles right click
      
      cube.addEventListener('mouseleave', () => {// Remove listeners on mouse leave
        clearTimeout(pressTimer);
        pressTimer = null;
        cube.removeEventListener('wheel', onWheel);
        cube.removeEventListener('mousedown', handleMouseDown);
        cube.removeEventListener('mouseup', handleMouseUp);
        listenersAttached = false; // Allow reattachment on next enter
      },{ once: true }); // Ensures cleanup happens only once.// Since { once: true } is specified, the mouseleave event listener itself is removed immediately after it is triggered for the first time. This means the event handler will not be called again for subsequent mouseleave events on the cube element.
    }, { passive: true }); // can't be once:true, cubes won't work
  });
}


function setGlowEffectRx() { //curve lines
  const glowLines = msgBox.querySelectorAll("rect");
  const rx = getComputedStyle(msgBox).borderRadius;

  glowLines.forEach((line) => {
    line.setAttribute("rx", rx);
  });
}



function colorFaceAddDmgTxt(faceNow, nthCube, clientX, clientY){
  const ansKey = faceNow.textContent;  //faceNow.textContent is the answer because faceAnsRefinedArr.includes(faceNow.textContent) is true

  const noColorFaces = Array.from(faceNow.parentNode.children).filter(elm => {//entering this part of code means cube was scrolled and face is not colored
    const bg = getComputedStyle(elm).backgroundColor;
    return bg !== 'rgb(2, 100, 45)' && bg !== 'rgb(100, 2, 2)';  //if true, .filter will include the element. bg is either red, green, or blue
  }); 
  const noColorFacesLength = noColorFaces.length; 
  if (faceNow.dataset.faceColor === 'green') { 
    for (let i = 0; i < noColorFacesLength; i++) {// other faces with identical answer turns green
      const noColorFace = noColorFaces[i];
      if (noColorFace.textContent === ansKey) { // faceNow is marked green, but also check text of other faces. If their text is the same as faceNow then those faces will turn green too
        /* noColorFace.style.backgroundColor = 'rgb(2, 100, 45)'; // in cases where face can have multiple correct answer, face gets colored green but with no points bc points were already given to another cube with another correct answer
        noColorFace.style.color = 'hsl(108, 100%, 89%)';  */
        styleGreen(noColorFace);  
      }
    }
    for (let i = 0; i < 4; i++) {
      if (cubeQuserAnsStorage[nowQ].maxNumOfCubes[nthCube].faceText[i] === ansKey) {  //[nthCube] is from colorFaceAddDmgTxt(faceNow, nthCube, clientX, clientY)
        return;  } // // Step 1: Prevent duplicates, if it already exists, don't add again
    }
    for (let i = 0; i < 4; i++) {
      if (cubeQuserAnsStorage[nowQ].maxNumOfCubes[nthCube].faceText[i] === null) { // Step 2: Find first null slot
        cubeQuserAnsStorage[nowQ].maxNumOfCubes[nthCube].faceText[i] = ansKey;  // faceText gets filled up with face answers, 4 indices if there are no duplicate answers
        return;
      }
    }
    //return; // no need to do the remainder of the code
    alert('4299: should not have reached this part of the code')
  }
  //console.log(cubeQuserAnsStorage[nowQ].maxNumOfCubes);

  const dmg = document.createElement('div');
  dmg.classList.add('damage-text');
  const faceAns = cqaList[nowQ].answer[nthCube];// each index of the array has an array
  let faceAnsRefinedArr; // can hold 1 or multiple answers i.e. To explain//To discuss
  faceAnsRefinedArr = faceAns  // this will be undefined if the answer has 5 cubes but the iteration goes beyond 5 because the iteration goes to the longest answer choice.
  ? faceAns.includes('//')  // This checks if faceAns contains "//"
    ? faceAns.split('//').map(word => word.includes('|') //map() sees 'faceAns.split('//')' as an array
      ? word.replaceAll('|', ' ') // If "|" is found, replace it in each part
      : word)  
    : faceAns.includes('|')  // This line runs if "//" is NOT found in faceAns
      ? [faceAns.replaceAll('|', ' ')]  // If "|" is found, replace it and wrap the result in an array
      : [faceAns]  // If neither "//" nor "|" is found, wrap the original string in an array
  : [];  // This line runs if faceAns is falsy (null, undefined, empty string, etc.)
  const faceAnsRefinedArrLength = faceAnsRefinedArr.length;
  if (faceAnsRefinedArr.includes(ansKey) || (faceAnsRefinedArrLength === 0 && ansKey === '')) { //userAns[nthCube][0] = faceNow.textContent but accessing faceNow.textContent is faster slightly,  0 length means answer doesn't use up all cubes
    const applyGreenStyle = (faceWithCorrectAns) => { 
      faceWithCorrectAns.style.backgroundColor = 'rgb(2, 100, 45)';  
      faceWithCorrectAns.dataset.faceColor = 'green';
      faceWithCorrectAns.style.color = 'hsl(108, 100%, 89%)';
    }
     
    for (let i = 0; i < noColorFacesLength; i++) {// all faces with identical answer turns green
      const aNoColorFace = noColorFaces[i]; // 
      if (ansKey === aNoColorFace.textContent || (faceAnsRefinedArrLength === 0 && aNoColorFace.textContent === '')) { // i.e. cubeQuserAnsStorage[2].ntCube[5].textX === faceNow.textContent
         //console.log(faceNow.dataset.nthCube);   //1
         //console.log(faceNow.className.match(/face\d+/)[0]);  //face2
        applyGreenStyle(aNoColorFace); 
      }
      else if (faceAnsRefinedArr.includes(aNoColorFace.textContent)){ // this answer is different but still made correct by creator, such as  To discuss|To explain
        aNoColorFace.dataset.faceColor = 'green';  // marks it green so if it's selected later, it will only turn green and not give points, since points were already given
      }
    }

    for (let i = 0; i < 4; i++) {
      if (cubeQuserAnsStorage[nowQ].maxNumOfCubes[nthCube].faceText[i] === ansKey) { // don't add points if ansKey is already recorded in cubeQuserAnsStorage
        return;
      }
    }      
    if (faceAnsRefinedArrLength > 0){  // if it's 0, that means its face is blank thus user should not get free points.
      if (cubeQuserAnsStorage[nowQ].pointable){
        dmg.textContent = '+2';
        userPlusPts += 2;
      }
      else {
        dmg.textContent = '';
      }      
      createTriangleWithText(plusPtsBox, 'plus', userPlusPts)
    }

  }
  else {
    faceNow.style.backgroundColor = 'rgb(100, 2, 2)'
    faceNow.style.color = 'hsl(300, 100%, 96%)';
    faceNow.dataset.faceColor = 'red';
    for (let i = 0; i < 4; i++) {
      if (cubeQuserAnsStorage[nowQ].maxNumOfCubes[nthCube].faceText[i] === ansKey) { // don't add points if ansKey is already recorded in cubeQuserAnsStorage
        return;
      }
    }     

   /*   const faceCandidateS = faceNow.parentNode.children;

   for (let i = 0; i < 4; i++) {//faceCandidateS has 6 indices but [4] and [5] are always face5 and face6
      if (faceCandidateS[i].dataset.faceColor === 'red') red++; //counts how many are already in red
    } */
    if (cubeQuserAnsStorage[nowQ].pointable){
      if     (cubeQuserAnsStorage[nowQ].maxNumOfCubes[nthCube].red !== 2){
        dmg.textContent = '-1'; 
        userMinusPts += 1;
      }
      else if (cubeQuserAnsStorage[nowQ].maxNumOfCubes[nthCube].red == 2){
        dmg.textContent = '-3';
        userMinusPts += 3;
      }
    }
    else {
      dmg.textContent = '';
    }
    createTriangleWithText(minusPtsBox, 'minus', userMinusPts);
    cubeQuserAnsStorage[nowQ].maxNumOfCubes[nthCube].red++;
  }
 /*
  console.log(cubeQuserAnsStorage[nowQ].maxNumOfCubes[nthCube].faceText[0]);
  console.log(cubeQuserAnsStorage[nowQ].maxNumOfCubes[nthCube].faceText[1]);
  console.log(cubeQuserAnsStorage[nowQ].maxNumOfCubes[nthCube].faceText[2]);
  console.log(cubeQuserAnsStorage[nowQ].maxNumOfCubes[nthCube].faceText[3]);
   */
  for (let i = 0; i < 4; i++) {
    if (cubeQuserAnsStorage[nowQ].maxNumOfCubes[nthCube].faceText[i] === ansKey) {
      break;  } // // Step 1: Prevent duplicates,already exists, don't add again
  }
  for (let i = 0; i < 4; i++) {
    if (cubeQuserAnsStorage[nowQ].maxNumOfCubes[nthCube].faceText[i] === null) { // Step 2: Find first null slot
      cubeQuserAnsStorage[nowQ].maxNumOfCubes[nthCube].faceText[i] = ansKey;
      break;
    }
  }      
 /*
  console.log(cubeQuserAnsStorage[nowQ].maxNumOfCubes[nthCube].faceText[0]);
  console.log(cubeQuserAnsStorage[nowQ].maxNumOfCubes[nthCube].faceText[1]);
  console.log(cubeQuserAnsStorage[nowQ].maxNumOfCubes[nthCube].faceText[2]);
  console.log(cubeQuserAnsStorage[nowQ].maxNumOfCubes[nthCube].faceText[3]);
 */
  const rect = faceNow.getBoundingClientRect();
  let x, y;
  if (clientX === null) { //null means it came from qAnsCheck, checks face of all cubes
    x = rect.left + rect.width * (Math.random() * 0.6 + 0.04); // 4% to 64% of width
    y = rect.top + rect.height * Math.random() * 0.45;         // 0% to 45% of height
  } else {  // checks individual face
    x = Math.min(clientX, rect.left + rect.width * 0.64);
    y = clientY;
  }
  const randomNumber = Math.floor(Math.random() * 360);  // 0-359
  dmg.style.left = `${x}px`;
  dmg.style.top  = `${y}px`;
  setTimeout(() => { document.body.appendChild(dmg); }, randomNumber);  
  setTimeout(() => { document.body.removeChild(dmg); }, 1440); // Remove after animation

    /*   function createTriangleWithText(container, type, points) {// Add triangle and dynamic points inside the box
        container.textContent = '';// must clear the container first
        const triangle = document.createElement('div');
        triangle.className = 'triangle ';
        triangle.id = type + '-triangle';  
        const textSpan = document.createElement('span');
        textSpan.textContent = toDoubleLineFont(`${points}`);
        container.parentNode.append(triangle);
        container.append(textSpan);
      } */
}



function displayMCs() {
  console.log('displayMCs');
  if (engExplBooAndChoice.inEnglish){
    const floatTag = magSentBox.querySelector('.float-tag'); //removes float-tag from magSent and p. It can still be around if floatTag appears and traverse sentence occurs
       // if (floatTag && )  { //toInnerHTML(floatTag, lightUpAll(cqaList[nowQ].choiceB.explEng, nowQ, true))/* floatTag.remove(); */ }  
    insertBR(lightUpAll(cqaList[nowQ][engExplBooAndChoice.choice].explEng, nowQ, true), floatTag)
    //insertBR(lightUpAll(cqaList[nowQ].choiceA.explEng, nowQ, true), floatTag)
        //}
  }

  cubeQuserAnsStorage[nowQ].pointable = false;
  
  multChoiceQon = true;

  magSent.replaceChildren();
  mcContainer = document.createElement('div'); // Create container div for clickable MC cards
  mcContainer.id = 'mc-container';  // optional, for styling or future reference

  ['choiceA', 'choiceB', 'choiceC', 'choiceD'].forEach(choice => {
    const [card, secondP] = createOptionCard(choice); //array destructuring //array[index][propertyName] when the property name is in a variable. sends to lightUpAll 
    //got replaced with secondP] const secondP = card.querySelector('p:nth-of-type(2)'); // secondP has been through lightUpAll // p:nth-of-type(2) is a CSS selector that means: Select the second <p> element among its siblings that are also <p> elements

    /*  if (pElement.parentNode.classList.contains('mult-choices')) { //updates one MC, doens't need to go to displayMCs()
        toInnerHTML(pElement, lightUpAll(justifyAnsRC ? cqaList[nowQ][pElement.parentElement.dataset.value].crossedOut
                                                     : cqaList[nowQ][pElement.parentElement.dataset.value].mcSentence, nowQ, true));
                          pElement.parentElement.dataset.value = choice                           
                           pElement          = secondP                
                     toInnerHTML(secondP, arrayGettingDelTags.join(''));
                                      */
    
                         
    
    if (justifyAnsRC){  // crosses out text
     // toInnerHTML(secondP, 'Itf <del>eliminate<span class="color lightCyan">s</span>the need</del> for all <del>fertilizer<span class="color lightCyan">s</span>and pesticide<span class="color lightCyan">s</span></del>');
                 //         toInnerHTML(attachDelTags(choice, secondP), lightUpAll(cqaList[nowQ][choice].crossedOut, nowQ, true));

     attachDelTags(choice, secondP);
     card.appendChild(secondP);  


          //card.appendChild(attachDelTags(choice, secondP));  // returns secondP to append

    }
    mcContainer.appendChild(card);
  });
  magSent.appendChild(mcContainer);

  

/*   if (justifyAnsRC){
    const choices = mcContainer.querySelectorAll('.mult-choices'); 
    choices.forEach(choice => {
      const style = getComputedStyle(choice);
      if (style.backgroundColor === 'rgb(100, 2, 2)' && style.color === 'rgb(255, 235, 255)')  { red++; } //checks how many cards were colored before justify was clicked
    });
  }
 */

  //const children = mcContainer.querySelectorAll('.mult-choices'); //has access to all descendants, slower
  
  //const cards = Array.from(mcContainer.children); //only has access to direct children, faster, obsolete because loop was taken out

  let pressTimer = null;
  let mouseDownTime = 0;
  let floatTagExpl = null;

  const handleMouseDown = (event) => {
    mouseDownTime = Date.now(); 
    let choiceCard = event.target;
    if (!choiceCard.closest('.vocab') ) { removeFloatTag?.(); } // don't remove if .vocab was clicked on MC

    if (choiceCard.classList.contains('vocab') || //with this, when user holds click on .vocab's w or w/o color, vocab is still being selected so card will have no color change nor show expl
       (choiceCard.classList.contains('color') && choiceCard.parentNode.classList.contains('vocab') || 
        choiceCard.parentNode.parentNode.classList.contains('vocab')))  { return; }
       
/*     while (choiceCard && choiceCard !== mcContainer && !choiceCard.classList?.contains('mult-choices')) {
      choiceCard = choiceCard.parentNode; // keeps bubbling up until it reaches mult-choices, it could be mcContainer(parent of mult-choices) if the narrow space between choiceCards was clicked
    }   */
    choiceCard = event.target.closest('.mult-choices');
    
    if (/* choiceCard === mcContainer ||  */!choiceCard) return;// choiceCard === mcContainer is enough but added !choiceCard to future proof in case somehow it went up past mcContainer  
    const choiceCardMC = choiceCard.id;   // choiceA, choiceB, choiceC, or choiceD

    if (justifySentHiLi){
      pressTimer = setTimeout(() => { // timer when mouse is pressed down
        //const explEng = cqaList[nowQ][choiceCard.dataset.value].explEng;
        //const explKor = cqaList[nowQ][choiceCard.dataset.value].explKor;
        const explEng = `${lightUpAll(cqaList[nowQ][choiceCardMC].explEng, nowQ, true)}`
        const explKor = `${lightUpAll(cqaList[nowQ][choiceCardMC].explKor, nowQ, true)}`

        const container = magSentCont;
        floatTagExpl = document.createElement('span');   
        floatTagExpl.classList.add('float-tag');
        floatTagExpl.style.color = 'hsl(200, 72%, 72%)'; 
        
        if      (event.button === 0 && explEng){//explanation must exist, won't exist if creator didn't add it
          insertBR(explEng, floatTagExpl);
          engExplBooAndChoice.inEnglish = true;
          engExplBooAndChoice.choice = choiceCardMC;
        }  
        else if (event.button === 2 && explKor) {
          insertBR(explKor, floatTagExpl);
          engExplBooAndChoice.inEnglish = false;
        }     

        choiceCard.parentNode.parentNode.parentNode.appendChild(floatTagExpl);  // appended to magSent container
          // toInnerHTML(answer, `${lightUpAll(cqaList[nowQ][choice].mcSentence, nowQ, true)}`);  //answer is the container
        computeFloatTagFontSize(magSent, floatTagExpl);
        //kVocab.parentNode.appendChild(floatTag);  // appended to span data-index
        const magPadding = 0;
        floatTagExpl.style.top = centerFloatOrRightAlignWrappedVoc(choiceCard, floatTagExpl, magPadding, container); //magPaddin 0
      }, 720); 
    }
    else{
      pressTimer = setTimeout(() => { 
        const X = event.clientX;
        const Y = event.clientY;
        if  (choiceCard.style.backgroundColor === '') colorCardAddDmgTxt(choiceCard, X, Y); // only enters this function when card's bgColor is ''

        function colorCardAddDmgTxt(choiceCard, clientX, clientY){
          const dmg = document.createElement('span');
          dmg.classList.add('damage-text');
          //cqaList[nowQ].mcAnswer is an array so it can hold multiple answers
          if (cqaList[nowQ].mcAnswer.includes(choiceCardMC)){ /* || (cqaList[nowQ].mcAnswer.length === 0 && choiceCard.textContent === '') must have an answer, applies to face but not here*/ //userAns[nthCube][0] = choiceCard.textContent but accessing choiceCard.textContent is faster slightly,  0 length means answer doesn't use up all cubes
            mcSurfaceColor[choiceCardMC] = 'green';
            styleGreen(choiceCard);
            if (!mcQuserAnsStorage[nowQ][`pointable${choiceCardMC.slice(-1)}`])  {  
              toInnerHTML(dmg, 'Points are no longer available.') }
              //dmg.textContent = 'Points are no longer<br>available.'; } 
            else { 
              mcQuserAnsStorage[nowQ][`pointable${choiceCardMC.slice(-1)}`] = false;
              dmg.textContent = '+2';
              userPlusPts += 2;
              createTriangleWithText(plusPtsBox, 'plus', userPlusPts);

            }
          }
          else {  //just else if checking if card background color is already colored (bgcolor !== '') handled already
              /*             let red = 0;
            const faceCandidateS = choiceCard.parentNode.children;
            for (let i = 0; i < 4; i++) {//faceCandidateS has 6 indices but [4] and [5] are always face5 and face6
              if (faceCandidateS[i].dataset.faceColor === 'red') red++;
            } */
            if (mcQuserAnsStorage[nowQ].red < 2){
              if (!mcQuserAnsStorage[nowQ][`pointable${choiceCardMC.slice(-1)}`])  { dmg.textContent = 'Points are no longer available.'; } // was '?'
              else {
                mcQuserAnsStorage[nowQ][`pointable${choiceCardMC.slice(-1)}`] = false;
                dmg.textContent = '-1';
                userMinusPts += 1;
                createTriangleWithText(minusPtsBox, 'minus', userMinusPts);
                mcQuserAnsStorage[nowQ].red++;
              }              
            }
            else if (mcQuserAnsStorage[nowQ].red === 2){
              if (!mcQuserAnsStorage[nowQ][`pointable${choiceCardMC.slice(-1)}`])  {  dmg.textContent = 'Points are no longer available.';  } // was 'Why'
              else {
                mcQuserAnsStorage[nowQ][`pointable${choiceCardMC.slice(-1)}`] = false;
                dmg.textContent = '-3';
                userMinusPts += 3;
                createTriangleWithText(minusPtsBox, 'minus', userMinusPts);
              }                  
            }
            /*  choiceCard.style.backgroundColor = 'rgb(100, 2, 2)'
            choiceCard.style.color = 'hsl(300, 100%, 96%)'; */
            styleRed(choiceCard);
            mcSurfaceColor[choiceCardMC] = 'red';          }
          const rect = choiceCard.getBoundingClientRect();
          const randomNumber = Math.floor(Math.random() * 360);  // 0-359
                    
          clientX = Math.min(clientX, rect.left + rect.width * 0.89);
          dmg.style.left = `${clientX}px`;
          dmg.style.top  = `${clientY}px`;
          /* console.log(dmg.style.left);
          console.log(dmg.style.top);
          console.log(clientX + ' ' + clientY); */
          setTimeout(() => { document.body.appendChild(dmg); }, randomNumber);  
          setTimeout(() => { document.body.removeChild(dmg); }, 1440); // Remove after animation
        }
      }, 720);        
    }
  };

  const handleMouseUp = (event) => {
    clearTimeout(pressTimer);
    pressTimer = null;
      /*const mouseUpTime = Date.now();
    const duration = mouseUpTime - mouseDownTime;

      if (duration <= 500) {   done at mousedown
      // const floatTag = magSent.querySelector('.float-tag');
      //if (floatTag) {  floa tTag.re move();  }
    } */
  };

  function handleContainerLeave() {
    clearTimeout(pressTimer);
    pressTimer = null;
  } // used to have eventListeners attacahed to every card   
  mcContainer.addEventListener('mousedown', handleMouseDown, { passive: true });
  mcContainer.addEventListener('mouseup',   handleMouseUp,   { passive: true });
  mcContainer.addEventListener('mouseleave', handleContainerLeave); // no {once}

    /*const handleMouseLeave = () => {
    clearTimeout(pressTimer);
    pressTimer = null;

    card.removeEventListener('mousedown', handleMouseDown);
    card.removeEventListener('mouseup', handleMouseUp);
    card.removeAttribute('data-has-mc-listeners'); //remove the flag which says there are no event listeners so new ones can be added
  };

  card.addEventListener('mouseenter', (event) => {
    // Attach listeners on mouse enter

    if (!card.hasAttribute('data-has-mc-listeners')) {  //bullet proof to make sure eventlisteners don't stack on top of each other. It shouldn't happen bc it will be removed by mouseleave
      card.addEventListener('mousedown', handleMouseDown); // but if there was a bug and mouseleave didn't remove the listeners then upon entering again, listeners will be added on top of
      card.addEventListener('mouseup', handleMouseUp);    // the previously added listeners.
      card.setAttribute('data-has-mc-listeners', 'true');
    }
    card.addEventListener('mouseleave', handleMouseLeave, { once: true });
  }, { passive: true }); // cubes won't work with once:true here */

  // Adjust font size for the entire magSent containerz
  adjustFontsize(magSent); //adjust text in MCs


}

function createOptionCard(choice) { // Define a helper to create each option card
  //const toSentence = mcAnsArray.slice(1).join(' ').replaceAll('|', ' ');// slice to ignore [0] which is null which in turn will add ' ' at the front
  const card = document.createElement('div');
  const abcdBox = document.createElement('p');
  const answer = document.createElement('p');
  
    /*multChoices = document.querySelectorAll('.mult-choices');
  console.log(multChoices);  for lighting up going around borders  */
  card.className = 'mult-choices';
  card.id = choice;  //choice = 'choiceA'

  card.dataset.value = choice;  // stores choiceA, choiceB, choiceC, or choiceD
  card.dataset.redCount = 0;
  if      (mcSurfaceColor[choice] === 'red')   { styleRed(card) }
  else if (mcSurfaceColor[choice] === 'green') { styleGreen(card) }
  //abcdBox.textContent = choice[6] + ')';  // store the 7th letter in choiceA -> A)
  abcdBox.textContent = choice.slice(-1) + ')';  // store the 7th letter in choiceA -> A)

  card.appendChild(abcdBox);
  card.appendChild(answer);

  /* toInnerHTML(answer, lightUpAll(justifyAnsRC ? cqaList[nowQ][choice].crossedOut //bkmk
                                              : cqaList[nowQ][choice].mcSentence, nowQ, true)); */

  toInnerHTML(answer, `${lightUpAll(cqaList[nowQ][choice].mcSentence, nowQ, true)}`);  //answer is the container
  return [card, answer];
}

function styleRed(surface){
  surface.style.backgroundColor = 'rgb(100, 2, 2)'
  surface.style.color = 'hsl(300, 100%, 96%)';}

function styleGreen(surface){
  surface.style.backgroundColor = 'rgb(2, 100, 45)';
  surface.style.color = 'hsl(108, 100%, 89%)';
}

//<p>, you can have: Plain text, inline tags (<strong>, <em>, <a>, <span>, <img>, <code>, etc.) and Inline formatting or inline components
// Use <div> when: the content is a mix of elements (<h2>,<p>,<ul>    // content = content.replace(/\s*\(#[^)]*#\)/g, '');
function toInnerHTML(container, content){
    

  const template = document.createElement('template'); //With <div>, once you set .innerHTML, the content is live DOM — even if it's not attached to the main document yet. Browsers may start to parse, load resources, or run scripts.
  const fragment = document.createDocumentFragment();  
  const wordIDfiltered = !simplifyBoo ? content.replace(/\s*\(#[^)]*#\)/g, '') : content;

  template.innerHTML = wordIDfiltered;  //Since <template> content is inert, you avoid any flicker or reflow issues while you build or move nodes around.
  while (template.content.firstChild) {  //moves all child nodes from template.content, one at a time (parsed nodes inside a <template> are actually in its .content property — not directly on the <template> element itself.)
    fragment.appendChild(template.content.firstChild);  //removes the node from its original parent (template) when moving it to fragment.
  }

  container.replaceChildren(fragment);
}

function createTriangleWithText(container, type, points) {
  const parent = container.parentNode;
  const triParent = parent.parentNode;
  const triangle = document.createElement('div');

  parent.removeChild(container);

  container.textContent = toDoubleLineFont(points);


  triParent.removeChild(triParent.firstChild);

  triangle.className = 'triangle';
  triangle.id = type + '-triangle';

  triParent.prepend(triangle);
  parent.prepend(container);   //insert one or more nodes at the very beginning of its list of child nodes

}

function removeFloatTag() {       
  const floatTag = magSentBox.querySelector('.float-tag'); //removes float-tag from magSent and p. It can still be around if floatTag appears and traverse sentence occurs
  if (floatTag)  { 
    engExplBooAndChoice.inEnglish = false;
    engExplBooAndChoice.choice = null;
    floatTag.remove(); 
  }  
} 

function removeQtxtBtnBorderStyle(){
  qAnsCheck.className = 'qTxtBtn';
  qJustifyAns.className = 'qTxtBtn';
}

function attachDelTags(choice, secondP){
          //   \s?<span class="vocab"[^>]*> - 1st half of .vocab with opening span   // actual words appear in even indices, odd indices have ' ' or 1st half of .vocab                    
  const isolatedRawHTML = /\s?(?:<del>)?<span class="vocab"[^>]*>|[^\s]*?<span[^>]*>.*?(?:<\/span>)+[.,;:\-!?)’”]*|\s|[^\s]+/g; // [^\s] [,)]* to capture 'difficulties, (obstacles), (hardships,) issues' w/ Cyan
  const toggledVocabWithDel    =   simplify(cqaList[nowQ][choice].crossedOut, nowQ, true).match(isolatedRawHTML);     
  const toggledAndColoredVocab = lightUpAll(cqaList[nowQ][choice].mcSentence, nowQ, true).match(isolatedRawHTML);//bkmk
  const toggledVocabWithDelLength = toggledVocabWithDel.length;
  
  for (let i = 0 ; i < toggledVocabWithDelLength ; i++){
    if (toggledVocabWithDel[i].includes('<del>'))   { 
      if (toggledAndColoredVocab[i].includes('span class="vocab'))  { toggledAndColoredVocab[i] = ' <del>' + toggledAndColoredVocab[i].trim(); }
      else  { toggledAndColoredVocab[i] = '<del>' + toggledAndColoredVocab[i]; }
    }
    if (toggledVocabWithDel[i].includes('</del>'))  { toggledAndColoredVocab[i] = toggledAndColoredVocab[i] + '</del>'; }
  }
  toInnerHTML(secondP, toggledAndColoredVocab.join('')); 
}




/*   kUserInput.addEventListener('mouseup', () => {
    clearTimeout(pressTimer);
  });

  kUserInput.addEventListener('mouseleave', () => {
    clearTimeout(pressTimer);
  }); */



 
 
function toggleWord(clickedWord, i, origin) {
  const list = origin === Origin.msgBox ? tQAvocabList 
              : origin === Origin.qText || (origin === Origin.magSent && multChoiceQon) ? cqaVocabList  //the same vocabList is used in qText and magSent-box with multChoiceQon being true
              : vocabList;  //the same vocabList is used in pElement and magSent-box with magnifyBoo being true

  const vocObj = list[i];

  const noSpanText = endHiLiBoo ? clickedWord.dataset.kword.replace(/^\d+:\d+\s*/, '').replace(/\u200D(?=(’?s|i?ed)\b)/g, '')  // takes out u200D from hili endings. Lookahead ensures that \u200D is followed by ’?s, ied, or ed, without consuming those characters.
                                : clickedWord.dataset.kword.replace(/^\d+:\d+\s*/, '');
  
  const conditions = {
    word: () => {
      if (vocObj.word === noSpanText) {    
        vocObj.meaningON = true;;}},
    meaning: () => {
      if (vocObj.meaning === noSpanText) {
        vocObj.meaningON = false;
        if (vocObj.syn) vocObj.synON = true;
        else if (vocObj.korean) vocObj.koreanON = true;}},  // this line is reached if vocObj.syn doesn't exist
    syn: () => {
      if (vocObj.syn){ 
        if (vocObj.syn === noSpanText) {
          vocObj.synON = false;
          if (vocObj.korean) vocObj.koreanON = true;}}
    },
    korean: () => {
      if (vocObj.korean){ 
        if (vocObj.korean === noSpanText) {
          vocObj.koreanON = false;}
        }
    }  
  }
  Object.values(conditions).forEach(action => action());   // Execute each condition's action

} //end of function toggleWord     


let pushDownTime, pushTimerKt, clickSpeed, floatTagKt, kTvocab, kTvocIndex;

function handleVocabLeave(vocIndex) { 
  clearTimeout(pushTimerKt);  // without this, if mouse leaves immediately after vocab presshold, after 720ms, floatTag will show and not disappear.
  pushTimerKt = null;
  if (floatTagKt) floatTagKt.remove(); 
}

function traverseOrToggleUP(event, origin) { // if fromMag is null, then it came from msgBox
  //if (origin === Origin.magSent && multChoiceQon) return;  // w/o this an error occurs.      no longer happens:w/o this kT disappears when .vocab in mc is toggled and then colors clicked
  const mouseUpTime = Date.now();
  clickSpeed = mouseUpTime - pushDownTime;
  if (clickSpeed <= 360) {
    clearTimeout(pushTimerKt); // without this, the longpress code will always run after the time delay 
    pushTimerKt = null;
    let spanSentence, spanIndex;
    
    if (origin === Origin.pElement && event.button === 0){
      spanSentence = event.target.closest('span[data-index]');  //event.target is the clicked text. spanSentence is a reference to that <span> element, not its attribute. It searches up the DOM tree starting from event.target, looking for the nearest ancestor that matches the selector "span[data-index]"; .vocab is nested inside span[data-index] so if vocab is clicked, spanSentence will still have span[data-index] as its attribute
      spanIndex = +spanSentence.dataset.index;  // dataset.index is  a string, '+' makes it a number
      if (!spanSentence || spanIndex === 0 || spanIndex % 2 === 1) return;  // does nothing if the following was clicked: non-spanText, index 0 (the sun), or index that are odd numbers which are always pics      
      //const vocab = event.target.closest('.vocab'); //value given in pElement.addEventListener('mousedown) //even if color lightPink is the target, it will look for .vocab
      //spanSentence.classList.remove('lightUpManually');  the index to hili manually has been stored and at function displayAll, it will be lit, if not the index will have 3 classes, lightupSent, litupManually, and lightupManually
      //spanSentence.classList.remove('litUpManually'); 
      if (!kTvocab){
        sentNow = spanIndex; // sentNow must be assigned outside of .vocab loop bc vocab can be clicked on any sentence // sentNow is assigned here and only here, only on left click, NOT right
        sentenceTraversed = (sentNow !== sentB4);//enters this part of code if vocab wasn't clicked, which means sentence was clicked
        //if (!sentenceTraversed) latestActionHiLiBtn = !latestActionHiLiBtn;/*sentenceHiLiBoo = !sentenceHiLiBoo; latestActionHiLiBtn = !latestActionHiLiBtn; */
        click.text = true;   //  must notify text was clicked so it doesn't auto scroll 0.72
        lastActionSentRelated = true;
        index = 0;  // when new sentence is clicked, reset. If QA unhili when it's at index 5 and hili in another sentence that does not have index 5 then 'undefined' is displayed. 
        displayAll(); // w/o this mouseclicks won't traverse sentences
        return; //Stop execution can't have sentence traverse and vocab/pic toggle
      }   
    }


    if (kTvocab) {
      if (origin === Origin.msgBox){// invoked from msgBox, words are from tqaVocablist
        if (event.button === 0){  // toggleWord(kVocab, parseInt(kVocab.dataset.kword.split(':')[1]), false);        // i.e. parseInt extracts the digit 6 (which is the vocabList's index) in <span class="vocab" data-kword="92:6 pried">pried</span>
          toggleWord(kTvocab, kTvocIndex, Origin.msgBox);       
          toInnerHTML(current, `<p>${lightUpAll(teacherQAarr[sentNow/2][index], sentNow/2, null)}</p>`);  // not colored gm in sentence turns on from mouseup
          toInnerHTML( next,   `<p>${lightUpAll(teacherQAarr[sentNow/2][index], sentNow/2, null)}</p>`);  // colored gm in sentence turns on from mouseup
          adjustFontsize(current);
          adjustFontsize(next);
        }  
        else if (event.button === 2){

          //if (floatTagKt) floatTagKt.remove();  // needed to be removed if left and right pressholds oscillates 
          kTvocab.addEventListener('mouseleave', handleVocabLeave, { once: true }); // w/o this, floatPic won't disappear if right click was on meaning, syn, or korean
          floatTagKt = document.createElement('span');   
          floatTagKt.classList.add('float-tag-circle');

          toInnerHTML(floatTagKt, `<img src="/Images/${tQAvocabList[kTvocIndex].fileName}" alt="picture" style="width: 144px; height: auto;">`);
          document.body.appendChild(floatTagKt); //must append to doc.body, not kTvocab.parentNode, or else floatTag won't appear after slide sentence animation
          const kVocRect = kTvocab.getBoundingClientRect();
          const tagWidth = 144; // or measure dynamically if it varies
          floatTagKt.style.position = 'fixed';

          const kTvocabRect = kTvocab.getClientRects();  
          if (kTvocabRect.length === 1) {
            floatTagKt.style.left = `${kVocRect.left + kVocRect.width / 2 - tagWidth / 2}px`;
            floatTagKt.style.top = `${kVocRect.bottom + 4}px`; // 4px gap below the word
          } 
          else if (kTvocabRect.length >= 2) {
            floatTagKt.style.left = (kTvocabRect[0].left - floatTagKt.offsetWidth) + 'px';  // to the left of the cut off word
            floatTagKt.style.top = `${kTvocabRect[0].bottom + 4}px`; // always at bottom so it's below [0] and on the same line as [1]
          }  
        }   
      }     
      else if (origin === Origin.pElement || origin === Origin.magSent && !multChoiceQon){
        if (event.button === 0) {  //left click     'span[data-index]' means:Find the nearest ancestor element (including itself) that is: a <span> element that has an attribute named data-index (regardless of its value)
          sentWithVoc = parseInt(kTvocab.dataset.kword);  //extracts the first number(the sentence number where the vocab resides) and stops when there is a non-number  i.e. 3:5  -> 3 //  ex) <span class="vocab" data-kword="4:3 in regards to">in regards to</span>
          if (origin === Origin.magSent && !multChoiceQon)  { spanSentence = pElement.querySelector(`span[data-index="${sentWithVoc}"]`); }//event.target is the clicked text. spanSentence is a reference to that <span> element, not its attribute. It searches up the DOM tree starting from event.target, looking for the nearest ancestor that matches the selector "span[data-index]"; .vocab is nested inside span[data-index] so if vocab is clicked, spanSentence will still have span[data-index] as its attribute
          //multChoiceQon = false;
          toggleWord(kTvocab, kTvocIndex, Origin.pElement); //  can't be Origin.magSent bc when multChoiceQon, toggle will assign cqaVocabList
          toInnerHTML(spanSentence, lightUpAll(diamondAR[sentWithVoc], sentWithVoc, false)); //compQ is false   sentIndex is  sentWithVoc
          
          if (magnifyBoo && !compQboo) { // reached here bc vocab word was clicked on which implies simplifyBoo is on
            toInnerHTML(magSent, `<p>${lightUpAll(diamondAR[sentNow], sentNow, false)}</p>`);   //false for vocab, true for compQ // always sentNow, can't be sentWithVoc bc sentWithVoc could be on a different sentence that has .vocab
            adjustFontsize(magSent);  //if .meaning is longer than .word, it could overflow
          }
        }   
        else if (event.button === 2) {  //right click     disaply pic on text and magSentL 
          //vocab._handleRightClick = () => { //it will load files from here, if not found it'll go to displayImage ()   // 💡Step 2: kVocab._handleRightClick is assigned a new function // kVocab._handleRightClick is the reference to the function where function is () => {...} // defines the new event handler.
          //  toggleWord(vocab, sentWithVoc(If vocab clicked outside of hili, vocab in magSent doesn't toggle.   toggleWord(vocab, sentNow(can only click vocab in hili)));  
          fileNameNow = vocabList[kTvocIndex].fileName;   
          //const spanElement = document.querySelector(`span[data-index="${spanIndexToModify}"]`);
          currentSentWithVocPIC = parseInt(kTvocab.dataset.kword);  //extracts the first number(the sentence number where the vocab resides) and stops when there is a non-number  i.e. 3:5  -> 3 //  ex) <span class="vocab" data-kword="4:3 in regards to">in regards to</span>
          currentVoc = vocabList[kTvocIndex].word;
          if (previousSentWithVocPIC !== currentSentWithVocPIC) { // while sentNow, executes if user clicked on a vocab in another sentence // these variables can only have a value if rightClick was clicked. The fact that these variables have a value implies span[data-index='${previousSentWithVocPIC - 1} exists.
            if (previousSentWithVocPIC !== null){  // it's null at the start so nothing can be removed
              pElement.querySelector(`span[data-index='${previousSentWithVocPIC - 1}']`).remove();
            }
            const imgSpan = document.createElement('span'); // must be span, not image so that it is placed in the list of sentence spans as a sibling, not child
            imgSpan.dataset.index = currentSentWithVocPIC - 1;
            
            const img = document.createElement('img');
            img.className = 'circles'; // ID must be here   'circle' places pic to the left, 'circles' to the right
            img.alt = 'picture';
            
            const clickSound = new Audio();
            clickSound.volume = 0.8;

           
            let playAbortController = null; // Keep track of the current play attempt

            img.addEventListener('click', e => {
              e.stopPropagation();

              const baseName = fileNameNow.replace(/\.[^/.]+$/, '');
              const extensions = ['m4a', 'mp3', 'ogg']; // try in order
              let played = false;

              // Abort any previous click attempt
              if (playAbortController) {
                playAbortController.abort();
              }
              playAbortController = new AbortController();
              const signal = playAbortController.signal;

              (async function tryPlay() {
                for (const ext of extensions) {
                  if (signal.aborted) return; // stop if a new click happened

                  clickSound.src = `${baseName}.${ext}`;
                  clickSound.currentTime = 0;

                  try {
                    await clickSound.play();
                    played = true;
                    break; // success, stop trying other extensions
                  } catch (err) {
                    // ignore and try next extension
                  }
                }

                if (!played && !signal.aborted) {
                  Swal.fire({
                    title: "𝕋𝕙𝕖𝕣𝕖 𝕚𝕤 𝕟𝕠 𝕒𝕦𝕕𝕚𝕠 𝕒𝕧𝕒𝕚𝕝𝕒𝕓𝕝𝕖 𝕗𝕠𝕣 𝕥𝕙𝕚𝕤 𝕥𝕖𝕩𝕥.",
                    icon: 'info',
                    confirmButtonText: 'Close',
                    backdrop: false,
                    customClass: {
                      popup: 'my-swal-popup',
                      title: 'my-swal-title',
                      content: 'my-swal-content',
                      confirmButton: 'my-swal-button'
                    }
                  });
                }
              })();
            });         



            imgSpan.appendChild(img); 
            // previous code but the prior is more concise
                  /*     const img = document.createElement('span');
                      img.dataset.index = sentNow - 1;
                      img.innerHTML = '<img id="circles" alt="picture">'; */
            pElement.insertBefore(imgSpan, pElement.querySelector(`span[data-index='${currentSentWithVocPIC}']`));
            previousSentWithVocPIC = currentSentWithVocPIC;
            displayImage(fileNameNow, img);
          }
          else if (previousVoc !== currentVoc){// This executes if the vocab word is in the same sentence and it's a different word in that sentence
            const imgElem = document.getElementById('circles');
            imgElem.onerror = () => {
              console.warn('handleRightClick failed to load:', imgElem.src);
              //displayImage(fileNameNow, 'circles'); // this will construct a New Image() which isn't necessary 
              imgElem.onerror = null; // prevent infinite loop
              imgElem.src = '/Images/galaxy_transparent.gif';  // directly load and display the image since 'circles' is already there in the same data-index; don't need displayImage() which will construct a New Image()
            }; 
            if      (fileNameNow.includes('.'))                        imgElem.src = '/Images/' + fileNameNow;
            else if (!imgElem.src.includes('file:///C:/Users/kangh/Desktop/OESA/canvass/galaxy_transparent.gif'))  imgElem.src = '/Images/galaxy_transparent.gif'; //comes to this line if fileNameNow has no dot.
          }
          previousVoc = currentVoc;
          if (origin === Origin.magSent && !multChoiceQon){  // bkmk bug
            if (magSentLclick !== 1 ) magSentLclick = 1;   // leftPic could be off but it will be on if magSent's vocab is clicked.
            if (!fileNameNow.includes('.'))  displayLeftPic(leftPic === null ||   //displayLeftPic() -> if (receivedFileToDisplay === leftPic) return;
                                                            leftPic === leftPics[sentNow/2] ? leftPicDefault      : leftPics[sentNow / 2]);  // no dot so it can only toggle between default pic and manual pic
            else                             displayLeftPic(leftPic === fileNameNow         ? leftPics[sentNow/2] : fileNameNow);            // toggle between manual/default pic and vocab pic
          }
        }
        if (origin === Origin.magSent && !multChoiceQon && sentenceHiLiBoo) adjustClientHeight(true, sentNow);  // if vocab was clicked on magSent and sentence is hili and clientView does not have the vocab, client view will scroll to the vocab.
      }
      //else if (origin === Origin.magSent && multChoiceQon){}
      else if (origin === Origin.qText || origin === Origin.magSent && multChoiceQon){
        if (event.button === 0){
          toggleWord(kTvocab, kTvocIndex, Origin.qText);
          let pElement = event.target.closest('.vocab').parentElement; 
          while (pElement.tagName !== 'P')  {  pElement = pElement.parentElement; } //  keep going up the tree until it is mult-choices
          if (pElement.parentNode.classList.contains('mult-choices')) { //vocab toggle updates one MC, doens't need to go to displayMCs()
            const choice = pElement.parentElement.dataset.value;
            if (justifyAnsRC)  { attachDelTags(choice, pElement); }
            else {    //attachDelTags returns pElement
              toInnerHTML(pElement, lightUpAll(cqaList[nowQ][choice].mcSentence, nowQ, true));
            }
            adjustFontsize(magSent);// must target mc-container because all 4MCs must be adjusted because fontSize in 1MC affects the rest
          }else {  
            toInnerHTML(qText, `<p>${lightUpAll(cqaList[nowQ].compQ, nowQ, true)} from AVM 3604</p>`);  // needs p tags to keep whitespace exactly the same
            adjustFontsize(qText); 
          }
        }
        else if (event.button === 2){
          cqaVocabList[kTvocIndex].rClicked = !cqaVocabList[kTvocIndex].rClicked;
          if (cqaVocabList[kTvocIndex].rClicked)  attachSpot4Img(kTvocIndex);  
          else                                    addAnsBtns();  // clears qPicWall and then adds buttons
        }
      }
    } 
  }      
}

function attachFloatTagDOWN(event, origin) { //const Origin = { pElement: 0, magSent: 1, msgBox: 2, qText: 3 };
  //const vList = fromMag !== null ? vocabList : tQAvocabList;  //the same vocabList is used in pElement and magSent-box
  pushDownTime = Date.now(); // need to know this for after mouseup, can configure how long the press was

  if (floatTagKt) floatTagKt.remove();  // needed to be removed if left and right pressholds oscillates 
  kTvocab = event.target.closest('.vocab');
  const vList = origin === Origin.msgBox ? tQAvocabList 
              : origin === Origin.qText || (origin === Origin.magSent && multChoiceQon) ? cqaVocabList  //the same vocabList is used in qText and magSent-box with multChoiceQon being true
              : vocabList;  //the same vocabList is used in pElement and magSent-box with magnifyBoo being true
  if (kTvocab) kTvocIndex = parseInt(kTvocab.dataset.kword.split(':')[1]); // need this value before pushTimerKt, need it for clicks that's 360ms, and before return because kTvocIndex must always be updated

  pushTimerKt = setTimeout(() => { // timer when mouse is pressed down

    if (!kTvocab && event.button === 2) { //user can manually hili sentences
      const longPressedSent = event.target.closest('span[data-index]');
      //longPressedSent.classList.replace('litUpManually', 'lightUpManually'); //displayAll makes it litUpManually
      longPressedSent.classList.toggle('litUpManually'); // need lightUpManually to show animation when it turns on but too expensive
   
      if (longPressedSent.classList.contains('litUpManually')) { 
        manuallyHiLiSentArr.push(+longPressedSent.dataset.index); 
      }
      else /* if (!longPressedSent.classList.contains('lightUpManually')) */{
        const index = manuallyHiLiSentArr.indexOf(+longPressedSent.dataset.index);
        if (index !== -1) {  //returns -1 if not found
          manuallyHiLiSentArr.splice(index, 1);  // Remove 1 item at that index
        }
      }
    }

    if (!kTvocab || kTvocab.textContent.replace(/\u200D(?=(’?s|i?ed)\b)/g, '') !== vList[parseInt(kTvocab.dataset.kword.split(':')[1])].word.replace(/\s*\(#[^)]*#\)/g, '')){
      if (kTvocab)  { hideCursor(kTvocab); } //to be consistent, hide cursor if longpress on syn, meaning, kor. 
      return;  // only displays wordType for word, not meaning, syn, or Korean. And makes sure nothing happens if presshold on spanSentence or color
    }
  

    floatTagKt = document.createElement('span');   
    floatTagKt.classList.add('float-tag');
    if      (event.button === 0 && vList[kTvocIndex].wordType)  
      insertBR(lightUpAll(vList[kTvocIndex].wordType, nowQ, false), floatTagKt);//insertBR(vocabList[kTvocIndex].wordType, floatTagKt);   
    else if (event.button === 2 && vList[kTvocIndex].antn) {
      insertBR(lightUpAll(vList[kTvocIndex].antn, nowQ, false), floatTagKt); //insertBR(vocabList[kTvocIndex].antn, floatTagKt);
      floatTagKt.style.color = 'hsl(5, 100%, 72%)';
    }      
    if (origin === Origin.magSent && !multChoiceQon) {
      kTvocab.parentNode.parentNode.parentNode.appendChild(floatTagKt);  // appended to magSent-box
      computeFloatTagFontSize(magSent, floatTagKt);
      floatTagKt.style.top = centerFloatOrRightAlignWrappedVoc(kTvocab, floatTagKt, 27, magSent);
    } 

    else if (origin === Origin.msgBox || (origin === Origin.magSent && multChoiceQon))  { 
      document.body.appendChild(floatTagKt);
      computeFloatTagFontSize(origin === Origin.msgBox ? current : magSent, floatTagKt);
      
      requestAnimationFrame(() => { // w/o this floatTag doesn't get centered when it's very wide
        const tagWidth = floatTagKt.offsetWidth;
        const kVocRect = kTvocab.getBoundingClientRect();


        floatTagKt.style.position = 'fixed';
        const kTvocabRect = kTvocab.getClientRects();  


        if (kTvocabRect.length === 1) {
          floatTagKt.style.left = `${kVocRect.left + kVocRect.width / 2 - tagWidth / 2}px`;
          if (origin === Origin.msgBox)  { floatTagKt.style.top = `${kVocRect.bottom + 4}px`; }  // at bottom
          else                           { floatTagKt.style.top = `${kVocRect.top - floatTagKt.offsetHeight}px`; }//at top, position floatTagKt such that its bottom aligns with the top of kTvocab
        }
        else if (kTvocabRect.length >= 2) { // gets number of lines vocab is in
          floatTagKt.style.left = (kTvocabRect[0].left - floatTagKt.offsetWidth) + 'px';  // to the left of the cut off word
          floatTagKt.style.top = `${kTvocabRect[0].bottom + 4}px`; // always at bottom so it's below [0] and on the same line as [1]
        }        
        hideCursor(kTvocab);

      });
    }  
    else { 
      kTvocab.parentNode.appendChild(floatTagKt);  // appended to span class vocab in span data-index or p element
      floatTagKt.style.top = centerFloatOrRightAlignWrappedVoc(kTvocab, floatTagKt, 0, pElementContainer); // 0 bc it's not from Mag. const magPadding = fromMag ? 27 : 0;
    }
  }, 720);  
  kTvocab?.addEventListener('mouseleave', handleVocabLeave, { once: true }); // The { once: true } option ensures the listener is automatically removed after it runs once — preventing buildup.
}    

function hiliJustifiedSent(fromJustify){
  let justifySentenceLength = cqaList[nowQ].justify.length;
  let min = diamondAR.length;
  let doubled;
  for (let i = 0; i < justifySentenceLength; i++) { //   0  1   2   3    4   5
    doubled = cqaList[nowQ].justify[i] * 2;
    if (doubled < min)  min = doubled;
    const span = pElement.querySelector(`span[data-index="${doubled}"]`);
    span.classList.add("litUpJustify");
   //    if (sentNow === doubled && sentenceHiLiBoo)  { span.classList.add("lightUpSentence"); }  //yellow and blue sentences overlaps
  }
  if (fromJustify)  { adjustClientHeight(true, min); }
}

function attachSpot4Img(qVocIndex){
      

  const imgQelem = document.createElement('img');
  imgQelem.id = 'question-pic-wall-img';
  imgQelem.alt = '';
  qPicWall.replaceChildren();  //removes all previous children (buttons and their listeners) from qPicWall
  qPicWall.appendChild(imgQelem);  
  displayImage(cqaVocabList[qVocIndex].fileName, imgQelem);
}

function hideCursor(vocab){
  vocab.style.cursor = 'none'; // hides the cursor
  vocab.addEventListener('mouseleave', () => {
    vocab.style.cursor = '';  //removes 'none' that was previously set //Revert to using the CSS stylesheet or browser default
  }, { once: true });
}


function updateProgressBar(container, prBarL, prBarR) {
  const { scrollTop, clientHeight, scrollHeight } = container; // Destructuring for efficiency
  let progressHeight = ((scrollTop + clientHeight) / scrollHeight) * 100;
  prBarL.style.height = progressHeight + "%";
  prBarR.style.height = progressHeight + "%";
}


/* function updateProgressBar(container, prBarL, prBarR) {
  const scrollbarInstance = Scrollbar.get(container);
  if (!scrollbarInstance) return;

  const scrollTop = scrollbarInstance.offset.y;
  const scrollHeight = scrollbarInstance.scrollHeight;
  const clientHeight = scrollbarInstance.size.container.height;

  let progressHeight = ((scrollTop + clientHeight) / scrollHeight) * 100;
  prBarL.style.height = progressHeight + "%";
  prBarR.style.height = progressHeight + "%";
} */





function updateSmoothProgressBar(scrollbar, prBarL, prBarR) {
  const scrollTop = scrollbar.offset.y;
  const clientHeight = scrollbar.size.container.height;
  const scrollHeight = scrollbar.limit.y + clientHeight;

  // Prevent division by 0
  if (scrollHeight === 0) {
    prBarL.style.height = "0%";
    prBarR.style.height = "0%";
    return;
  }

  const progressHeight = ((scrollTop + clientHeight) / scrollHeight) * 100;

  prBarL.style.height = progressHeight + "%";
  prBarR.style.height = progressHeight + "%";
/*   console.log({
  scrollTop: scrollbar.offset.y,
  limitY: scrollbar.limit.y,
  containerHeight: scrollbar.size.container.height,
  scrollHeight: scrollbar.limit.y + scrollbar.size.container.height
}); */
}


function adjustDampingHybrid(scrollbar, pElementContainer) {
  console.log(kT);
  if (!kT) return; // kT is undefined which means user is in library/home and not reading the text
  const spanCount = pElementContainer.querySelectorAll('span').length;
  const scrollHeight = pElementContainer.scrollHeight || 1;
  const clientHeight = pElementContainer.clientHeight || 1;

  // Span density for overall content and visible viewport
  const spanDensityScroll = spanCount / scrollHeight;
  const spanDensityView = spanCount / clientHeight;

  // Weighted hybrid score: heavier weight on visible density
  const hybridScore = (spanDensityScroll * 0.4) + (spanDensityView * 0.6);
  let newDamping;

  // Fine-tuned damping curve based on hybrid score
  if       (hybridScore < 0.05) { newDamping = 0.07; // very smooth
  } else if (hybridScore < 0.1) { newDamping = 0.09;
  } else if (hybridScore < 0.2) { newDamping = 0.12;
  } else if (hybridScore < 0.3) { newDamping = 0.13;
  } else if (hybridScore < 0.4) { newDamping = 0.16;
  } else { newDamping = 0.18; } // max looseness
  scrollbar.options.damping = newDamping;
}


function getSearch(){
  const inputElm = document.querySelector(".js-search");
  const userSeach = inputElm.value
  console.log(userSeach);
}
function handleEnter(event){
  if (event.key === 'Enter') getSearch()
}

/* 
(?<!^\u200E|\s\u200E)((?:<\/?span[^>]*>(?:(?!\u200E?(?:ha(?:s|ve|d|ving)|need(?:s|ed)?|ought))(?:[’\w+\s\u200D\u200E]))*?)*(?:<\/span>\s?)?)?(\u200E?(?:ha(?:s|ve|d|ving)|need(?:s|ed)?|ought)(?:<\/span>)?\s?)?(?<!^\u200E|\s\u200E)(\b[Tt]o,?(?:<\/span>,?)?)\s(?!(?:self|that|them?|an?|my|you|his|its|our|their|and|(?:him|my|her|your|it|one)(?:self)?|(?:them|our)selves|me|us|each|which|some|any|gas|(?:[dg]o|[dl]y|ag|be|us)ing|d+|\w+hood|\w+ism|\w+ty|\w+ier|\w+ful|\w+ion|[A-Z]\w*|\w{3,}(?:ing|(?<!s|sometime|oftentime|alway)(?:<\/span>)?s))\b)(?:(?!(?:\b(?!(?:sup|re|im|ap|multi)ply|bully|rely|[fp]ly|[dt]?ally)\b\w*ly|first|not|never|just|even|still|(?:often|some)(?:times)?|always|seldom|hardly ever|also)\b)(<span[^>]+>)?(\w(?:[\w\u200D]+))|((?:not|never)?\s?\w+\s?(?:not|never|just)?(?:\s(?:not|never|just|still|ever|\w+ly))?)\s(<span[^>]+>)?((?!\b(?:and|but|or)\b)\w(?:[\w\u200D]+))|(\w+ly)\s(\w+)\s(\w+ly)\s(<span[^>]+>)?(\w(?:[\w\u200D]+))|(?:))

I want    to not reply. I                            have to really not go   
I want    to never sing.  He wants                        to not bring a cup. 
He wants  to not pass the test. 
HE wants  to sometimes not pass the test
He likes  to not bully them.
He likes  to hardly ever bully them.
I    have to, without a doubt, finish
I want    to happily still multiply those numbers. I want to never supply them with water
I want    to happily just give them water. I want         to just happily give them water. 

He  wants to not oftentimes calmly talk. He wants to always calmly talk.
He  wants to not give
They want to calmly still talk. They want to still just calmly talk.

Group 6 is catching words prior to the base verb.


*/



/* 

(?<!^\u200E|\s\u200E)(['’](?:re|s|m)|\b(?:is|am|are|was|were|be|being|been))\s(?:(?!(?:\b(?!(?:sup|re|im|ap|multi)ply|bully|rely|[fp]ly|[dt]?ally)\b\w*ly|first|not|never|just|even|still|(?:often|some)(?:times)?|always|seldom|hardly ever|also)\b)(<span[^>]+>)?(\w(?:[\w\u200D]+)ing)\b|((?:not|never)?\s?\w+\s?(?:not|never)?(?:\s(?:not|never|just|still|ever|\w+ly))?)\s(<span[^>]+>)?((?!\b(?:and|but|or)\b)\w(?:[\w\u200D]+)ing)|(\w+ly)\s(\w+)\s(\w+ly)\s(<span[^>]+>)?(\w(?:[\w\u200D]+))|(?:))

function (match, spnAuxTo, toInf, spnB1, baseV, notBV, spnB2, baseV2, adv1, kAnd, adv2, spnB3, baseV3)
        return colorHvBvOrINF(undefined,spnAuxTo,toInf,spnB1,baseV,notBV,spnB2,baseV2,adv1,kAnd,adv2,spnB3,baseV3,(have===undefined||have.startsWith('\u200E'))?'Pink':'Pink2');

after 'be verb' is caught capture the next word ending in -ing         
when capturing, don't capture words ending in -ly except [supply - ally], digits, and [first - also] as base verbs. Instead, they will be captured but ignored and the next captured words will be the base verb as long as it's not 'or', 'and' or 'but'.                       

have,     spnKwordToAux,       ToAux,     spnB1,      bV,        nonB,     spnB2,       bV2,       adv1,       kAnd,       adv2,      spnB3,        bV3,      hue) => {
They are sleeping  He's 14 years old. She's pretty today. She's prettier than him. She's wonderful today. She's untyrannical today. She is upset today. He's not always calmly talking. He's  always calmly talking.
I'm Batman from Gotham. They're calmly still talking. They're still not calmly talking. 
They're sleeping I'm watching  He's dsfing  
match, spnAuxTo, have, toInf, spnB1, baseV, notBV, spnB2, baseV2, adv1, kAnd, adv2, spnB3, baseV3
I want are <span class="vocab" data-kword="2:0 sleeping">sleeping</span>.
I want are quickly rest.
I have are sleep
I have are <span class="vocab" data-kword="2:0 sleep">sleep</span>.








*/
