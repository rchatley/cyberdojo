
module AvatarImageHelper
  
  def avatar_image(name, size)
    name = name.downcase
    ext = (name == 'cyber-dojo') ? 'png' : 'jpg'
    image_tag "/images/avatars/#{name}.#{ext}",
      :title => name.humanize,
      :width => size,
      :height => size,
      :class => "avatar_image"
  end
  
end
