# ASSESSMENT 6: Rails Commenting Challenge

# Add comments to the Rails Blog Post Challenge
# Explain the purpose and functionality of the code directly below the 10 comment tags


# FILE: app/controller/blog_posts_controller.rb

# ---1)# this is setting up the BlogPostController controller class which is a child class of the ApplicationController
class BlogPostsController < ApplicationController
  def index

    # ---2) sets up and instance variable "@posts" within the index method and assigns it to every post in the database BlogPost
    @posts = BlogPost.all
  end

  def show
    # ---3) sets up instance variable ""@post" in the show method and assigns it to the :id in the db that is passed as params.
    @post = BlogPost.find(params[:id])
  end

  # ---4) sets up the set method in the controller, which has instance variable "@post" assigned to a new post in the db BlogPost.
  def new
    @post = BlogPost.new
  end

  def create
    # ---5) instance variable "@post" in the create method, assigned to the form to create a new post using the blog_post_params which are established at the end of the file under private.
        @post = BlogPost.create(blog_post_params)
    if @post.valid?
      redirect_to blog_post_path(@post)
    else
      redirect_to new_blog_post_path
    end
  end

  # ---6) sets up the edit method which has instance variable "@post", assigned to ability to find and edit a specific post using the :id params.
  def edit
    @post = BlogPost.find(params[:id])
  end

  def update
    @post = BlogPost.find(params[:id])
    # ---7)using .update called with blog_post_params passed as the argument, on the @post instance variable. 
    @post.update(blog_post_params)
    if @post.valid?
      redirect_to blog_post_path(@post)
    else
      redirect_to edit_blog_post_path
    end
  end

  def destroy
    @post = BlogPost.find(params[:id])
    if @post.destroy
      redirect_to blog_posts_path
    else
      # ---8)this is the second part of the conditional that will redirect to the blog post path if the .destroy method is not called on @post.
      redirect_to blog_post_path(@post)
    end
  end

  # ---9) makes anything below "private" not accessible to the user
  private
  def blog_post_params
    # ---10) setting up the blog post params which are used above. They will require blog_post and only allow the user to create, edit or destroy the title or content of a post.
    params.require(:blog_post).permit(:title, :content)
  end
end
