<?php
/* template name: Home */

get_header(); 
?>

<!-- banner starts here -->
<section class="banner flex wrap align-end">
	<div class="banner-detail flex wrap">
		<div class="banner-top flex wrap align-start">
			<h1 class="atf-title"><?php the_field( "atf_title" ); ?></h1>
			<span class="atf-tagline"><?php the_field( "atf_tagline" ); ?></span>			
			<span class="atf-animated-element" data-aos="fade-right" data-aos-duration="1000" data-aos-easing="ease-in-sine"></span>
		</div>
		<div class="banner-btm flex wrap space-between align-center">
			<a class="default-btn atf-btn flex wrap justify-center align-center" href="<?php the_field( "atf_button_link" ); ?>">
			    <span class="flex wrap justify-center"><?php the_field( "atf_button_text" ); ?></span>
			</a>
			<div class="banner-btm-text">
				<span><?php the_field( "atf_getpaid_text" ); ?></span>
				<span class="atf-animated-btm" data-aos="fade-right" data-aos-duration="1000" data-aos-easing="ease-in-sine"></span>
			</div>
		</div>
	</div>
</section>
<!-- banner ends here -->


<!-- BTF Row1 starts here -->
<section class="btf-row1 flex justify-end">
    <div class="btf1-shape1" data-paroller-factor="0.5" data-paroller-type="foreground"></div>
    <div class="btf1-inner flex wrap" data-aos="fade-up" data-aos-offset="300" data-aos-duration="1500">
    	<h2 class="btfrow1-title"><?php the_field( "btfrow1_title" ); ?></h2>
    	<span class="btfrow1-tagline"><?php the_field( "btfrow1_tagline", false, false ); ?></span>
    	<div class="btfrow1-list">
    		<span class="btfrow1-animated-ele"></span>
    		<ul>
	    		<?php if(have_rows("btfrow1_list")):
	    		while(have_rows("btfrow1_list")): the_row(); ?>
	        		<li><?php the_sub_field( "btfrow1_list_text" ); ?></li>
	    		<?php endwhile; endif; ?>
	    	</ul>
    	</div>	    	
    	<a class="default-btn btfrow1-btn" href="<?php the_field( "btfrow1_btn_link" ); ?>">
    		<span><?php the_field( "btfrow1_btn_text" ); ?></span>
    	</a>
    	<div class="btfrow1-nofees-text">
    		<span><?php the_field( "btfrow1_nofees" );?></span>
    		<div class="btfrow1-animated-border" data-aos="fade-right" data-aos-duration="1000" data-aos-easing="ease-in-sine"></div>
    	</div>
    </div>
    <div class="btf1-shape2" data-paroller-factor="0.5" data-paroller-type="foreground"></div>
</section>
<!-- BTF Row1 ends here -->

<!-- BTF Row2 starts here -->
<section class="btf-row2" data-aos="fade-up" data-aos-offset="300" data-aos-duration="1500">
	<h2><?php the_field( "btf2_title" ); ?></h2>
	<?php the_field( "btf2_descp" ); ?>
</section>	
<!-- BTF Row2 ends here -->

<!-- BTF Row3 starts here -->
<section class="btf-row3 flex wrap align-end">
	<div class="btf3-shape1"></div>
	<div class="btf3-detail flex wrap">
		<div class="btf3-attorneys-info flex wrap space-between">
			<?php if(have_rows("btf3_btn_list")):
			while(have_rows("btf3_btn_list")): the_row(); ?>
	    		<div class="btf3-attorneys-infobtns">
	    			<a href="<?php the_sub_field( "btf3_btn_link" ); ?>">
	    				<?php the_sub_field( "btf3_btn_text" ); ?>
	    			</a>
	    		</div>
			<?php endwhile; endif; ?>
		</div>
		<div class="btf3-results flex wrap align-center space-between">
			<div class="btf3-title">
				<h2><?php the_field( "btf3_title" ); ?></h2>
			</div>
			<div class="btf3-slider flex wrap space-between">
				<?php if(have_rows("btf3_slider")):
				while(have_rows("btf3_slider")): the_row(); ?>
		    		<div>
		    			<div class="btf3-slides flex wrap justify-center">
			    			<h3 class="btf3slides-title">
			    				<?php the_sub_field( "btf3_settlement_amount" ); ?>
			    			</h3>
			    			<span class="btf3slides-settlement">
			    				<?php the_sub_field( "btf3_settlement" ); ?>
			    			</span>
			    		</div>
		    		</div>
				<?php endwhile; endif; ?>
			</div>
		</div>
	</div>		
</section>

<!-- BTF Row3 ends here -->

<!-- BTF Row4 starts here -->
<section class="btf-row4">
	<div class="btf4-shape1" data-paroller-factor="0.5" data-paroller-type="foreground"></div>
	<div class="btf4-title-row flex wrap space-between">
		<div class="btf4-titlebox flex wrap">
			<h2><?php the_field( "btf4_title" ); ?></h2>
		</div>
		<div class="btf4-detail flex wrap align-start">
			<ul class="btf4-list flex wrap space-between align-start">
				<?php if(have_rows("btf4_list")):
				while(have_rows("btf4_list")): the_row(); ?>
					<li class="flex wrap space-between align-start">
						<a href="<?php the_sub_field( "btf4_list_link" ); ?>">
							<?php the_sub_field( "btf4_list_text" ); ?>
						</a>
					</li>
				<?php endwhile; endif; ?>
			</ul>
		</div>
	</div>
	<div class="btf4-detail-row flex wrap align-start" data-aos="fade-up" data-aos-offset="300" data-aos-duration="1500">
		<h2><?php the_field( "btf4_title2" ); ?></h2>
		<div class="btf4-detail-inner flex wrap space-between align-start">
			<?php if(have_rows("btf4_detail_list")):
				while(have_rows("btf4_detail_list")): the_row(); ?>
				<div class="btf4-detailbox flex wrap align-center">
					<div class="btf4-detailbox-title flex wrap justify-start align-center">
						<span class="btf4-detail-number"><?php the_sub_field( "btf4_detail_number" ); ?></span>
						<h3 class="btf4-detail-title"><?php the_sub_field( "btf4_detail_title" ); ?></h3>
					</div>
					<div class="btf4-detail-descp flex wrap align-start">
						<p><?php the_sub_field( "btf4_detail_descp", false, false ); ?></p>
					</div>
				</div>	
			<?php endwhile; endif; ?>
		</div>
		<div class="btf4-button-row flex wrap justify-center">
			<a href="<?php the_field( "btf4_btn_link" ); ?>" class="default-btn btfrow4-btn">
				<span><?php the_field( "btf4_btn_text" ); ?></span>
			</a>
			<div class="btfrow4-nofees-text">
	    		<span><?php the_field( "btf4_nofees_text" ); ?>
	    		<div class="btfrow4-animated-border" data-aos="fade-right" data-aos-duration="1000" data-aos-easing="ease-in-sine"></div>
	    	</div>
		</div>
	</div>
</section>

<!-- BTF Row4 ends here -->

<!-- BTF Row5 starts here -->
<section class="btf-row5">
	<div class="inner flex wrap align-start">
		<div class="btf5-title-row flex wrap">
			<h2 class="btf5-title"><?php the_field( "btf5_title" ); ?></h2>			
		</div>
		<div class="btf5-testimonials">
			<?php if(have_rows("btf5_testimonials")):
			while(have_rows("btf5_testimonials")): the_row(); ?>
				<div class="btf5-testimonials-detail">
					<p><?php the_sub_field( "btf5testionials_detail", false, false ); ?></p>
					<div class="btf5-author">
						<span><?php the_sub_field( "btf5testimonials_author" ); ?></span>
					</div>
				</div>
			<?php endwhile; endif; ?>
		</div>
		<div class="btf5-readmore">
			<a href="<?php the_field( "btf5_readmore_link" ); ?>">
				<?php the_field( "btf5_readmore_text" ); ?>
			</a>
		</div>
	</div>
</section>
<!-- BTF Row5 ends here -->

<!-- BTF Row6 starts here -->
<section class="btf-row6">
	<div class="inner flex wrap justify-center">
		<div class="btf6-title">
			<h2><?php the_field( "btf6_title" ); ?></h2>
		</div>
	</div>
	<div class="btf6-locationrow flex wrap space-between">
		<ul class="btf6-showlocation flex wrap space-between align-start">
			<?php if(have_rows("btf6_showlocation")):
			while(have_rows("btf6_showlocation")): the_row(); ?>
				<li>
					<h3><?php the_sub_field( "btf6_location_title" ); ?></h3>
					<ul class="btf6-locationlist flex wrap">
					<?php if(have_rows("btf6_location_list")):
				        while(have_rows("btf6_location_list")): the_row(); ?>
				        	<li>
				        		<a href="<?php the_sub_field( "btf6_locationlist_link" ); ?>">
				        			<?php the_sub_field( "btf6_locationlist_text" ); ?>
				        		</a>
				        		<ul class="btf6location-sublist">
						        		<?php if(have_rows("btf6_sublist")):
						        			while(have_rows("btf6_sublist")): the_row(); ?>
						        				<li>
									        		<a href="<?php the_sub_field( "btf6sublist_link" ); ?>">
									        			<?php the_sub_field( "btf6sublist_text" ); ?>
									        		</a>	
									        	</li>
						        		<?php endwhile; endif; ?>
						        </ul>											        		
				        	</li>
				        <?php endwhile; endif; ?>
					</ul>
				</li>
			<?php endwhile; endif; ?>
		</ul>
	</div>
</section>

<!-- BTF Row6 ends here -->

<!-- BTF Row7 starts here -->
<section class="btf-row7">
	<div class="btf7-shape1" data-paroller-factor="0.5" data-paroller-type="foreground"></div>
	<div class="inner flex wrap">
		<div class="btf7-title-row">
			<h2><?php the_field( "btf7_title" ); ?></h2>
		</div>
		<div class="btf7-detail-row flex wrap space-between">
			<?php if(have_rows("btf7_detail")):
			while(have_rows("btf7_detail")): the_row(); ?>
				<div class="btf7-detail-inner">
					<h3><?php the_sub_field( "btf7_detail_title" ); ?></h3>
					<p><?php the_sub_field( "btf7_detail_descp", false, false ); ?></p>
				</div>
			<?php endwhile; endif; ?>
		</div>
	</div>
</section>
<!-- BTF Row7 ends here -->

<?php
get_footer(); 
?>