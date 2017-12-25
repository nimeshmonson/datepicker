$(document).ready(function(){
	$('#datepicker-input').datepicker({ 
	beforeShow: function () {
	    setTimeout(appendsomething, 10);
	},
	onChangeMonthYear: function () {
	    setTimeout(appendsomething, 10);
	    }
	});

	var appendsomething = function () {
	$('#ui-datepicker-div').append( '<p class="text-center approximator-label">Approximately</p>');
	}
    $('#datepicker-input').val(new Date().toLocaleDateString());

    $('#datepicker-input').click(function(){
    	$('.approximator-label').click(function(){
    		$('#ui-datepicker-div').hide();
    		$('.approximator-wrapper').show();
    		//start of jquery for approximator
    		var unitIndex = 0;
			var approximator = {};
			approximator.days = 1;
			approximator.unit = ['Day(s)', 'Week(s)', 'Month(s)', 'Year(s)'];
			approximator.setValue = function(){
				 document.getElementById('day').innerText = approximator.days;
				 document.getElementById('unit').innerText = approximator.unit[unitIndex];
				 $('#datepicker-input').val(approximator.days + " " + approximator.unit[unitIndex]);
			}
			approximator.setValue();
			addDay = function(addToDay){
				if((approximator.days += addToDay) < 0){
					approximator.days =0;
				}
				approximator.setValue();
			}
			addUnit = function(addToUnit){
				if(unitIndex == 3 && addToUnit == 1){
					unitIndex = 0;
				}
				else if(unitIndex == 0 && addToUnit == -1){
					unitIndex = 3 
				}
				else{
					unitIndex += addToUnit;
				}
				approximator.setValue();
			}
				
			$('#exact-label, #datepicker-input').click(function(){
				$('.approximator-wrapper').hide();
				$('#ui-datepicker-div').show();
				$('#datepicker-input').val(new Date().toLocaleDateString());
			});
			$(document).mouseup(function(e) 
			{
			    var container = $('.approximator-wrapper, #ui-datepicker-div');
			    // if the target of the click isn't the container nor a descendant of the container
			    if (!container.is(e.target) && container.has(e.target).length === 0) 
			    {
			        container.hide();
			    }
			});
		
    		//end of jquery for approximator
    	});
    });
});

