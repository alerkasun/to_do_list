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

    var self = $(this), name = $(this).parents(".task-element").find(".name input").val(),
      project_id = $(this).parents(".project_and_tasks").data("id"),
      status = $(this).parents(".task-element").find("checkbox").val();

    $.ajax({
       type: "PUT",
       url: "/tasks/" + $(this).parents(".task-element").data("id") + ".json",
       data: {task:{name:name,
          project_id: project_id,
          status: "open"
        }},
       success: function(msg){
          self.find("a").hide();
          self.parent().find(".edit").show();
          self.parents(".task-element").find(".name").html(name);
       },
       error: function (res) {
        alert(res.responseJSON.name[0]);
       }
     });
    return false;

  });
});

