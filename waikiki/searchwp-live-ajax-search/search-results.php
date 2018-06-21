<?php /**
* This template adds thumbnails to your SearchWP Live Ajax Search results.
*
* Create a folder called searchwp-live-ajax-search in your child theme folder and copy this file in there.
* In order for this to work you require the SearchWP and SearchWP Live Ajax Search plugins installed and active.
*
*/
?>


<?php if ( have_posts() ) : ?>
	<?php while ( have_posts() ) : the_post(); ?>
		<?php $post_type = get_post_type_object( get_post_type() ); ?>
		<div class="searchwp-live-search-result" style="white-space: nowrap;">
		<div style="display: inline-block;"><?php echo( get_the_post_thumbnail( $post->ID, array( 75, 75) ) ) ?></div>
		<div style="display: inline-block;">
			<p><a href="<?php echo esc_url( get_permalink() ); ?>">
				<?php the_title(); ?> &raquo;
			</a></p>
		</div>
		</div>
	<?php endwhile; ?>
<?php else : ?>
	<p class="searchwp-live-search-no-results">
		<em><?php _ex( 'No results found.', 'swplas' ); ?></em>
	</p>
<?php endif;
