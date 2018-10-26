document.addEventListener('DOMContentLoaded', function(){

    var aluContainer = document.querySelector(".comment-smilies");
    var n_form = document.querySelector("#new_comment_form");
    n_form.insertBefore(aluContainer,n_form.childNodes[0]);

    if ( !aluContainer ) return;
    aluContainer.addEventListener('click',function(e){
        var myField,
        _self = e.target.src;
        if ( typeof _self == 'undefined' ) return;
        document.getElementsByClassName('comment_trigger')[0].style.display = 'none';
        document.getElementsByClassName('comment_triggered')[0].style.display = 'block';
        var tag = " ![](/template/include/smilies/" + _self.replace(/^.*\/(.*\.gif)$/, '$1') + ") ";
        if (document.getElementsByClassName('textarea_box')[0] && document.getElementsByClassName('textarea_box')[0].type == 'textarea') {
            myField = document.getElementsByClassName('textarea_box')[0]
        } else {
            return false
        }
        if (document.selection) {
            myField.focus();
            sel = document.selection.createRange();
            sel.text = tag;
            myField.focus()
        } else if (myField.selectionStart || myField.selectionStart == '0') {
            var startPos = myField.selectionStart;
            var endPos = myField.selectionEnd;
            var cursorPos = endPos;
            myField.value = myField.value.substring(0, startPos) + tag + myField.value.substring(endPos, myField.value.length);
            cursorPos += tag.length;
            myField.focus();
            myField.selectionStart = cursorPos;
            myField.selectionEnd = cursorPos
        } else {
            myField.value += tag;
            myField.focus()
        }
    });
});