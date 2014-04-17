$(document).ready(function(){
  $('input[type=checkbox]')
    .on('change', function(){
      this.form.submit()
    });
  $(".task-element .edit").click(function () {
    $(this).hide();
    $(this).parent().find(".save a").show();//css('display', 'inline-block');
    var name = $(this).parents(".task-element").find(".name").text();
    $(this).parents(".task-element").find(".name").html("<input type='text' value='" + name + "'/>");
    return false;
  });
  $(".task-element .save").click(function () {
    $(this).find("a").hide();
    var name = $(this).parents(".task-element").find(".name input").val();
    $(this).parent().find(".edit").show();
    $(this).parents(".task-element").find(".name").html(name);
    return false;

  });
});

