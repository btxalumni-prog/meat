// Enhanced application data
const appData = {
  blogPosts: [
    {
      id: 1,
      title: "5 dấu hiệu nhận biết thịt bò tươi ngon không thể bỏ qua",
      excerpt: "Chuyên gia chia sẻ những bí quyết đơn giản để chọn được thịt bò tươi ngon nhất tại chợ và siêu thị.",
      content: "Thịt bò tươi ngon là yếu tố quan trọng quyết định hương vị và chất lượng món ăn. Dưới đây là 5 dấu hiệu quan trọng:\n\n**1. Màu sắc đặc trưng**\nThịt bò tươi có màu đỏ cherry tự nhiên, không quá sậm cũng không quá nhạt. Tránh những miếng thịt có màu nâu xỉn hoặc có vết đen.\n\n**2. Độ đàn hồi**\nKhi ấn nhẹ, thịt tươi sẽ nhanh chóng trở lại hình dạng ban đầu. Nếu để lại vết lõm thì thịt đã mất độ tươi.\n\n**3. Mùi tự nhiên**\nThịt bò tươi có mùi đặc trưng nhẹ nhàng, không tanh hay hôi. Bất kỳ mùi lạ nào cũng là dấu hiệu cần tránh.\n\n**4. Bề mặt khô ráo**\nThịt tốt có bề mặt khô, không nhờn hay dính tay. Tránh những miếng thịt có dịch nhầy bề mặt.\n\n**5. Nguồn gốc rõ ràng**\nLuôn chọn thịt có tem kiểm định, nguồn gốc xuất xứ rõ ràng từ những cơ sở uy tín.",
      category: "An toàn thực phẩm",
      readTime: "5 phút",
      publishDate: "2024-12-09",
      author: "Chuyên gia Nguyễn Văn An",
      tags: ["thịt bò", "chọn thịt", "an toàn thực phẩm"],
      featured: true
    },
    {
      id: 2,
      title: "Cách bảo quản thịt heo trong tủ lạnh để giữ được 1 tuần",
      excerpt: "Phương pháp bảo quản thịt heo khoa học giúp thịt tươi ngon và an toàn trong thời gian dài.",
      content: "Bảo quản thịt heo đúng cách không chỉ giữ được độ tươi mà còn đảm bảo an toàn sức khỏe:\n\n**Chuẩn bị trước khi bảo quản:**\n- Rửa sạch thịt, thấm khô bằng khăn giấy\n- Cắt thành từng phần vừa đủ dùng\n- Loại bỏ phần xương nếu không cần thiết\n\n**Phương pháp bảo quản:**\n1. **Dùng túi ziplock:** Chia thịt thành từng khẩu phần, hút hết không khí\n2. **Nhiệt độ lý tưởng:** 0-4°C ở ngăn mát tủ lạnh\n3. **Vị trí đặt:** Tầng dưới cùng để tránh nhỏ giọt xuống thực phẩm khác\n4. **Thời gian:** Tối đa 5-7 ngày trong ngăn mát\n\n**Lưu ý quan trọng:**\n- Không rửa thịt trước khi cấp đông\n- Ghi ngày bảo quản lên túi\n- Kiểm tra nhiệt độ tủ lạnh thường xuyên\n- Thịt đông lạnh có thể bảo quản 3-6 tháng",
      category: "Bảo quản thực phẩm",
      readTime: "4 phút",
      publishDate: "2024-12-08",
      author: "Bếp trưởng Lê Thị Hoa",
      tags: ["thịt heo", "bảo quản", "tủ lạnh"],
      featured: true
    },
    {
      id: 3,
      title: "Thịt gà có màu vàng hay trắng tốt hơn? Chuyên gia trả lời",
      excerpt: "Giải đáp thắc mắc về màu sắc thịt gà và cách chọn loại phù hợp với nhu cầu dinh dưỡng.",
      content: "Nhiều người băn khoăn không biết nên chọn thịt gà màu vàng hay trắng. Thực tế, cả hai loại đều có ưu điểm riêng:\n\n**Thịt gà màu vàng:**\n- Đến từ giống gà ta, gà thả vườn\n- Chứa nhiều beta-carotene (tiền vitamin A)\n- Hương vị đậm đà, thơm ngon hơn\n- Giá thành cao hơn\n- Phù hợp cho những món cần hương vị đặc trưng\n\n**Thịt gà màu trắng:**\n- Thường từ gà công nghiệp\n- Protein cao, ít béo hơn\n- Giá thành phải chăng\n- Dễ chế biến, phù hợp nhiều món ăn\n- An toàn nếu từ nguồn uy tín\n\n**Cách chọn thịt gà tươi ngon:**\n1. **Quan sát da:** Căng, mịn, không có vết bầm\n2. **Kiểm tra thịt:** Chắc nịch, đàn hồi tốt\n3. **Mùi tự nhiên:** Không tanh, không hôi\n4. **Nguồn gốc:** Rõ ràng, có tem kiểm định\n\n**Kết luận:** Không có loại nào tốt hơn tuyệt đối, tùy thuộc vào mục đích sử dụng và điều kiện kinh tế của từng gia đình.",
      category: "Kiến thức dinh dưỡng",
      readTime: "6 phút",
      publishDate: "2024-12-07",
      author: "TS. Trần Minh Đức",
      tags: ["thịt gà", "dinh dưỡng", "chọn thịt"],
      featured: true
    },
    {
      id: 4,
      title: "10 sai lầm phổ biến khi mua thịt tại chợ",
      excerpt: "Những lỗi thường gặp khiến bạn mua phải thịt kém chất lượng và cách khắc phục hiệu quả.",
      content: "Mua thịt tại chợ cần kinh nghiệm để tránh những sai lầm phổ biến sau:\n\n**1. Chỉ nhìn vào màu sắc bề ngoài**\nSai lầm: Chọn thịt chỉ dựa vào màu đỏ tươi\nĐúng: Kết hợp quan sát màu sắc, mùi vị, độ đàn hồi\n\n**2. Không kiểm tra nguồn gốc**\nSai lầm: Mua thịt không rõ nguồn gốc\nĐúng: Hỏi rõ nguồn gốc, xem tem kiểm định\n\n**3. Mua quá nhiều một lần**\nSai lầm: Mua nhiều để tiết kiệm\nĐúng: Mua vừa đủ dùng để đảm bảo độ tươi\n\n**4. Không quan sát điều kiện bảo quản**\nSai lầm: Bỏ qua cách thương lái bảo quản thịt\nĐúng: Chọn nơi có điều kiện vệ sinh tốt\n\n**5. Ham rẻ quá mức**\nSai lầm: Chọn thịt giá rẻ bất thường\nĐúng: Giá hợp lý theo thị trường\n\n**6. Không thử mùi**\nSai lầm: Ngại kiểm tra mùi thịt\nĐúng: Luôn kiểm tra mùi trước khi mua\n\n**7. Mua vào giờ cao điểm**\nSai lầm: Mua lúc chợ đông đúc\nĐúng: Mua sớm khi thịt còn tươi nhất\n\n**8. Không chuẩn bị túi đựng thích hợp**\nSai lầm: Dùng túi bọc kém chất lượng\nĐúng: Chuẩn bị túi sạch, kín\n\n**9. Không thương lượng**\nSai lầm: Chấp nhận giá đầu tiên\nĐúng: Thương lượng một cách hợp lý\n\n**10. Bỏ qua kinh nghiệm của người bán**\nSai lầm: Không tận dụng tư vấn từ người bán\nĐúng: Hỏi ý kiến về cách chế biến, bảo quản",
      category: "Mẹo nấu ăn",
      readTime: "7 phút",
      publishDate: "2024-12-06",
      author: "Chị Nguyễn Thị Mai",
      tags: ["mua thịt", "chợ", "mẹo hay"],
      featured: true
    },
    {
      id: 5,
      title: "Cách rã đông thịt đúng cách để không mất chất dinh dưỡng",
      excerpt: "Hướng dẫn chi tiết các phương pháp rã đông thịt an toàn và giữ nguyên giá trị dinh dưỡng.",
      content: "Rã đông thịt đúng cách vừa đảm bảo an toàn vừa giữ được chất dinh dưỡng:\n\n**Phương pháp 1: Rã đông trong tủ lạnh (Khuyên dùng)**\n- Chuyển thịt từ ngăn đông sang ngăn mát\n- Thời gian: 4-24 giờ tùy kích thước\n- Ưu điểm: An toàn, giữ được chất lượng tốt nhất\n- Nhược điểm: Mất thời gian\n\n**Phương pháp 2: Rã đông bằng nước lạnh**\n- Ngâm thịt (đã đóng gói kín) trong nước lạnh\n- Thay nước mỗi 30 phút\n- Thời gian: 1-3 giờ\n- Phù hợp khi cần gấp\n\n**Phương pháp 3: Rã đông bằng lò vi sóng**\n- Sử dụng chế độ defrost\n- Nấu ngay sau khi rã đông\n- Thích hợp cho khẩu phần nhỏ\n\n**KHÔNG BAO GIỜ:**\n❌ Rã đông ở nhiệt độ phòng\n❌ Dùng nước nóng\n❌ Để thịt rã đông quá lâu\n❌ Đông lại thịt đã rã đông\n\n**Dấu hiệu thịt rã đông tốt:**\n✅ Thịt mềm đều\n✅ Không có tinh thể đá\n✅ Màu sắc bình thường\n✅ Không có mùi lạ\n\n**Mẹo hay:**\n- Cắt thịt thành miếng nhỏ trước khi đông để rã nhanh hơn\n- Ghi ngày đông lạnh lên bao bì\n- Sử dụng thịt rã đông trong vòng 1-2 ngày",
      category: "Bảo quản thực phẩm",
      readTime: "5 phút",
      publishDate: "2024-12-05",
      author: "Chef Hoàng Anh",
      tags: ["rã đông", "bảo quản", "dinh dưỡng"],
      featured: false
    }
  ],
  
  tips: [
    {
      id: 1,
      title: "Kiểm tra độ tươi bằng cách ấn nhẹ",
      content: "Thịt tươi sẽ nhanh chóng trở lại hình dạng ban đầu khi ấn nhẹ",
      icon: "👆",
      linkToBlog: 1
    },
    {
      id: 2, 
      title: "Nhiệt độ tủ lạnh lý tưởng",
      content: "Bảo quản thịt ở 0-4°C để duy trì độ tươi lâu nhất",
      icon: "🌡️",
      linkToBlog: 2
    },
    {
      id: 3,
      title: "Ngửi mùi trước khi mua",
      content: "Thịt tươi có mùi tự nhiên, không tanh hay hôi",
      icon: "👃",
      linkToBlog: 4
    },
    {
      id: 4,
      title: "Chia nhỏ trước khi đông",
      content: "Cắt thịt thành khẩu phần để dễ rã đông và sử dụng",
      icon: "🔪",
      linkToBlog: 5
    },
    {
      id: 5,
      title: "Chọn thời điểm mua thịt", 
      content: "Mua thịt vào sáng sớm khi còn tươi nhất",
      icon: "⏰",
      linkToBlog: 4
    },
    {
      id: 6,
      title: "Kiểm tra nguồn gốc",
      content: "Luôn chọn thịt có tem kiểm định và nguồn gốc rõ ràng",
      icon: "🏷️",
      linkToBlog: 3
    }
  ],

  meatTypes: {
    pork: {
      name: "Thịt Heo",
      icon: "🐷",
      description: "Tìm hiểu về độ tươi của thịt heo và cách bảo quản tốt nhất",
      faq: [
        {"q": "Thịt heo có thể bảo quản bao lâu?", "a": "Trong ngăn mát: 3-5 ngày. Ngăn đông: 4-6 tháng."},
        {"q": "Làm sao biết thịt heo đã hỏng?", "a": "Có mùi hôi, bề mặt nhờn, màu xám hoặc xanh."},
        {"q": "Có nên rửa thịt heo trước khi nấu?", "a": "Nên rửa nhẹ và thấm khô để loại bỏ vi khuẩn bề mặt."}
      ],
      levels: {
        "5": {
          name: "Tươi mới",
          color: "#4CAF50",
          properties: "Màu hồng nhạt tự nhiên, không có mùi lạ, bề mặt khô ráo",
          signs: "Màu hồng đồng đều, đàn hồi tốt khi ấn, không có dịch nhầy",
          storage: "Bảo quản tủ lạnh 0-4°C, sử dụng trong 2-3 ngày. Có thể cấp đông lên đến 6 tháng",
          cooking: "Phù hợp mọi cách chế biến: nướng, xào, luộc, hầm. Thịt giữ được vị ngọt tự nhiên",
          warnings: "Luôn rửa sạch trước khi chế biến. Tránh để ở nhiệt độ phòng quá 2 giờ",
          timeframe: "Sử dụng ngay hoặc trong vòng 2-3 ngày"
        },
        "4": {
          name: "Tươi dùng ngay", 
          color: "#8BC34A",
          properties: "Màu hồng nhạt hơn một chút, mùi nhẹ, bề mặt hơi ẩm",
          signs: "Màu vẫn đẹp nhưng nhạt hơn, độ đàn hồi giảm nhẹ",
          storage: "Nên sử dụng ngay trong ngày hoặc bảo quản tủ lạnh tối đa 1 ngày",
          cooking: "Thích hợp cho nướng, xào nhanh. Tránh chế biến sống hoặc tái",
          warnings: "Chế biến chín kỹ. Kiểm tra mùi kỹ trước khi nấu",
          timeframe: "Sử dụng trong ngày"
        },
        "3": {
          name: "Cần lưu ý",
          color: "#FFC107", 
          properties: "Màu xỉn nhẹ, có mùi hơi khác thường, bề mặt ẩm",
          signs: "Màu không đồng đều, có thể hơi nhờn, mùi bắt đầu lạ",
          storage: "Chỉ nên bảo quản thêm vài giờ trong tủ lạnh",
          cooking: "Chỉ nên hầm, niệm kỹ với nhiệt độ cao. Tránh nướng hay xào",
          warnings: "Cân nhắc kỹ trước khi sử dụng. Nếu có nghi ngờ thì nên bỏ",
          timeframe: "Sử dụng ngay lập tức"
        },
        "2": {
          name: "Gần hỏng",
          color: "#FF9800",
          properties: "Màu xấu, mùi rõ rệt khó chịu, bề mặt nhờn",
          signs: "Màu xám hoặc nâu, có dịch nhầy, mùi hôi nhẹ",
          storage: "Không nên bảo quản thêm",
          cooking: "Không khuyến khích sử dụng",
          warnings: "Nguy cơ cao gây ngộ độc thực phẩm. Nên loại bỏ",
          timeframe: "Không sử dụng"
        },
        "1": {
          name: "Không an toàn",
          color: "#F44336",
          properties: "Màu sắc biến đổi hoàn toàn, mùi hôi thối nặng",
          signs: "Màu xanh hoặc đen, rất nhờn, mùi hôi thối rõ rệt",
          storage: "Phải loại bỏ ngay lập tức",
          cooking: "Tuyệt đối không sử dụng",
          warnings: "Rất nguy hiểm cho sức khỏe. Loại bỏ an toàn và rửa tay sạch",
          timeframe: "Loại bỏ ngay"
        }
      }
    },
    beef: {
      name: "Thịt Bò", 
      icon: "🐮",
      description: "Hướng dẫn nhận biết độ tươi của thịt bò và bảo quản hiệu quả",
      faq: [
        {"q": "Thịt bò đỏ hay nâu tốt hơn?", "a": "Thịt bò tươi có màu đỏ cherry, màu nâu có thể do tiếp xúc với không khí."},
        {"q": "Thịt bò có thể ăn tái không?", "a": "Chỉ nên ăn tái nếu thịt rất tươi và từ nguồn đảm bảo vệ sinh."},
        {"q": "Bảo quản thịt bò cần chú ý gì?", "a": "Để riêng biệt với thực phẩm khác, nhiệt độ 0-4°C."}
      ],
      levels: {
        "5": {
          name: "Tươi mới",
          color: "#4CAF50",
          properties: "Màu đỏ tươi sáng, không có mùi tanh, bề mặt khô ráo",
          signs: "Màu đỏ cherry đặc trưng, đàn hồi tốt, không dính tay",
          storage: "Bảo quản tủ lạnh 0-4°C, sử dụng trong 3-5 ngày. Cấp đông được 6-12 tháng",
          cooking: "Phù hợp mọi cách chế biến. Có thể ăn tái (beefsteak) nếu đảm bảo vệ sinh",
          warnings: "Bảo quản riêng biệt với thực phẩm khác. Rửa dao thớt sau khi dùng",
          timeframe: "Sử dụng trong 3-5 ngày"
        },
        "4": {
          name: "Tươi dùng ngay",
          color: "#8BC34A", 
          properties: "Màu đỏ nhạt hơn, mùi nhẹ, bề mặt hơi ẩm",
          signs: "Màu đỏ nâu nhẹ, độ đàn hồi giảm, có thể hơi dính",
          storage: "Sử dụng trong 1-2 ngày, bảo quản tủ lạnh cẩn thận", 
          cooking: "Nên chế biến chín kỹ. Thích hợp cho hầm, nướng lửa nhỏ",
          warnings: "Tránh ăn tái. Kiểm tra mùi trước khi chế biến",
          timeframe: "Sử dụng trong 1-2 ngày"
        },
        "3": {
          name: "Cần lưu ý",
          color: "#FFC107",
          properties: "Màu nâu xỉn, mùi hơi tanh, bề mặt ẩm",
          signs: "Màu nâu đỏ không đều, hơi nhờn, mùi bắt đầu khó chịu",
          storage: "Chỉ bảo quản thêm vài giờ nếu cần thiết",
          cooking: "Chỉ nên hầm hoặc niệm lâu với lửa lớn",
          warnings: "Cân nhắc kỹ trước khi sử dụng. Chế biến chín kỹ",
          timeframe: "Sử dụng ngay"
        },
        "2": {
          name: "Gần hỏng", 
          color: "#FF9800",
          properties: "Màu nâu sậm, mùi tanh nặng, bề mặt nhờn",
          signs: "Màu nâu đen, có dịch nhầy, mùi hôi rõ rệt",
          storage: "Không nên bảo quản thêm",
          cooking: "Không khuyến khích sử dụng",
          warnings: "Nguy cơ ngộ độc cao. Nên loại bỏ",
          timeframe: "Không sử dụng"
        },
        "1": {
          name: "Không an toàn",
          color: "#F44336",
          properties: "Màu đen xanh, mùi hôi thối nặng, rất nhờn",
          signs: "Biến màu hoàn toàn, rất nhờn, mùi không thể chịu được",
          storage: "Phải loại bỏ ngay lập tức",
          cooking: "Tuyệt đối không sử dụng",
          warnings: "Cực kỳ nguy hiểm. Loại bỏ cẩn thận và khử trùng",
          timeframe: "Loại bỏ ngay"
        }
      }
    },
    chicken: {
      name: "Thịt Gà",
      icon: "🐔", 
      description: "Cách nhận biết thịt gà tươi ngon và bảo quản an toàn",
      faq: [
        {"q": "Thịt gà vàng hay trắng tốt hơn?", "a": "Cả hai đều tốt, gà vàng thường có hương vị đậm đà hơn."},
        {"q": "Có nên rửa thịt gà trước khi nấu?", "a": "Có, nhưng rửa nhẹ nhàng để tránh làm bay vi khuẩn."},
        {"q": "Thịt gà bảo quản được bao lâu?", "a": "Trong tủ lạnh: 1-2 ngày. Trong tủ đông: 9-12 tháng."}
      ],
      levels: {
        "5": {
          name: "Tươi mới",
          color: "#4CAF50",
          properties: "Màu trắng hơi vàng tự nhiên, da căng mịn, không mùi lạ",
          signs: "Da láng mịn, thịt chắc, đàn hồi tốt khi ấn",
          storage: "Bảo quản tủ lạnh 0-4°C, sử dụng trong 1-2 ngày. Cấp đông 9-12 tháng",
          cooking: "Phù hợp mọi cách chế biến: luộc, nướng, xào, hầm, chiên",
          warnings: "Luôn chế biến chín kỹ. Rửa sạch trước khi nấu",
          timeframe: "Sử dụng trong 1-2 ngày"
        },
        "4": {
          name: "Tươi dùng ngay",
          color: "#8BC34A",
          properties: "Màu hơi nhạt, da bắt đầu mềm, mùi nhẹ",
          signs: "Da mềm hơn, thịt ít đàn hồi, có thể hơi dính",
          storage: "Nên sử dụng ngay trong ngày",
          cooking: "Chế biến chín kỹ, thích hợp hầm, niệm với gia vị",
          warnings: "Không nên ăn tái. Kiểm tra kỹ trước khi nấu",
          timeframe: "Sử dụng trong ngày"
        },
        "3": {
          name: "Cần lưu ý", 
          color: "#FFC107",
          properties: "Da nhão, màu xỉn, mùi hơi khó chịu",
          signs: "Da nhão không căng, thịt mềm, mùi bắt đầu lạ",
          storage: "Chỉ bảo quản thêm vài giờ nếu cần",
          cooking: "Chỉ nên hầm hoặc nấu canh với nhiệt độ cao",
          warnings: "Cân nhắc kỹ. Nếu nghi ngờ thì không nên dùng",
          timeframe: "Sử dụng ngay"
        },
        "2": {
          name: "Gần hỏng",
          color: "#FF9800", 
          properties: "Da nhão nát, màu xấu, mùi hôi nhẹ",
          signs: "Da rách dễ, thịt mềm nhũn, mùi khó chịu rõ rệt",
          storage: "Không nên bảo quản thêm",
          cooking: "Không khuyến khích sử dụng", 
          warnings: "Nguy cơ ngộ độc cao. Nên loại bỏ",
          timeframe: "Không sử dụng"
        },
        "1": {
          name: "Không an toàn",
          color: "#F44336",
          properties: "Da rã nát, màu xanh xám, mùi hôi thối",
          signs: "Da hoàn toàn hư, thịt nhão nát, mùi thối không chịu được",
          storage: "Phải loại bỏ ngay lập tức",
          cooking: "Tuyệt đối không sử dụng",
          warnings: "Cực kỳ nguy hiểm cho sức khỏe. Loại bỏ an toàn",
          timeframe: "Loại bỏ ngay"
        }
      }
    }
  },

  categories: ["Tất cả", "An toàn thực phẩm", "Mẹo nấu ăn", "Bảo quản thực phẩm", "Kiến thức dinh dưỡng"],
  
  popularTags: ["thịt bò", "thịt heo", "thịt gà", "bảo quản", "an toàn thực phẩm", "chọn thịt", "dinh dưỡng", "mẹo hay", "nấu ăn", "tủ lạnh"],
  
  dailyQuestion: {
    question: "Bạn có biết thịt bò tươi có thể bảo quản được bao lâu trong tủ lạnh?",
    answer: "Thịt bò tươi có thể bảo quản 3-5 ngày trong ngăn mát tủ lạnh ở nhiệt độ 0-4°C",
    tip: "Hãy ghi ngày mua thịt lên bao bì để dễ theo dõi!"
  },
  
  didYouKnow: [
    "Thịt để ở nhiệt độ phòng quá 2 giờ sẽ phát triển vi khuẩn có hại?",
    "Màu đỏ của thịt bò đến từ protein myoglobin?",
    "Thịt gà cần nấu ở nhiệt độ tối thiểu 75°C để an toàn?",
    "Cấp đông thịt ở -18°C có thể bảo quản 6-12 tháng?",
    "Thịt heo chứa vitamin B1 nhiều nhất trong các loại thịt?",
    "Thịt bò nạc chứa sắt cao gấp 3 lần so với thịt gà?"
  ]
};

// Global variables
let currentMeatType = 'pork';
let currentLevel = '';
let currentBlogPost = null;
let isLoggedIn = false;
let videoStream = null;
let tipIndex = 0;
let didYouKnowIndex = 0;
let sliderValue = 100; // 0-100, maps to levels 1-5
let searchFilter = 'all'; // all, blog, dictionary
let searchTimeout = null;

// Navigation functions - Fixed and properly exposed to global scope
window.showPage = function(pageId) {
  console.log('Showing page:', pageId); // Debug log
  
  // Hide all pages
  document.querySelectorAll('.page').forEach(page => {
    page.classList.remove('active');
  });
  
  // Show requested page
  const targetPage = document.getElementById(`${pageId}-page`);
  if (targetPage) {
    targetPage.classList.add('active');
  }
  
  // Load page-specific content
  switch(pageId) {
    case 'home':
      loadHomePage();
      break;
    case 'blog':
      loadBlogPage();
      break;
    case 'blog-post':
      // Blog post page content loaded by showBlogPost()
      break;
    case 'dictionary':
      loadDictionaryPage();
      break;
    case 'detection':
      // Reset detection state when entering
      resetDetectionState();
      break;
    case 'admin':
      // Admin page doesn't need special loading
      break;
  }
  
  // Stop video stream if leaving detection page
  if (pageId !== 'detection' && videoStream) {
    stopCamera();
  }
};

// Make sure meat dictionary function is globally available
window.showMeatDictionary = function(meatType) {
  console.log('Showing meat dictionary for:', meatType); // Debug log
  currentMeatType = meatType;
  showPage('dictionary');
  // Small delay to ensure page is loaded before selecting meat type
  setTimeout(() => {
    selectMeatType(meatType);
  }, 100);
};

// Mobile menu functions
window.toggleMobileMenu = function() {
  const nav = document.getElementById('main-nav');
  const menuIcon = document.getElementById('menu-icon');
  const toggle = document.querySelector('.mobile-menu-toggle');

  if (nav) {
    const isOpen = nav.classList.toggle('active');
    if (menuIcon) {
      menuIcon.textContent = isOpen ? '✕' : '☰';
    }
    if (toggle) {
      toggle.setAttribute('aria-expanded', isOpen);
    }

    // Add haptic feedback on mobile
    if ('vibrate' in navigator) {
      navigator.vibrate(10);
    }
  }
};

window.closeMobileMenu = function() {
  const nav = document.getElementById('main-nav');
  const menuIcon = document.getElementById('menu-icon');
  if (nav) {
    nav.classList.remove('active');
    if (menuIcon) {
      menuIcon.textContent = '☰';
    }
  }
};

// Scroll Animations
function initializeScrollAnimations() {
  const observerOptions = {
    threshold: 0.1,
    rootMargin: '0px 0px -100px 0px'
  };

  const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add('revealed');
      }
    });
  }, observerOptions);

  // Observe all scroll-reveal elements
  document.querySelectorAll('.scroll-reveal').forEach(el => {
    observer.observe(el);
  });
}

// Counter Animations
function initializeCounterAnimations() {
  const counterObserver = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting && !entry.target.dataset.counted) {
        const target = entry.target;
        const targetValue = parseInt(target.dataset.stat);
        animateCounter(target.querySelector('.stat-number-modern'), 0, targetValue, 2000);
        target.dataset.counted = 'true';
      }
    });
  }, { threshold: 0.5 });

  document.querySelectorAll('.stat-card-modern').forEach(card => {
    counterObserver.observe(card);
  });
}

function animateCounter(element, start, end, duration) {
  const startTime = performance.now();
  const isPercent = element.textContent.includes('%');

  function update(currentTime) {
    const elapsed = currentTime - startTime;
    const progress = Math.min(elapsed / duration, 1);

    // Easing function for smooth animation
    const easeOutQuart = 1 - Math.pow(1 - progress, 4);
    const current = Math.floor(start + (end - start) * easeOutQuart);

    if (isPercent) {
      element.innerHTML = current + '<span class="stat-unit">%</span>';
    } else {
      element.textContent = current.toLocaleString();
    }

    if (progress < 1) {
      requestAnimationFrame(update);
    }
  }

  requestAnimationFrame(update);
}

// Initialize the app
document.addEventListener('DOMContentLoaded', function() {
  console.log('DOM Content Loaded'); // Debug log
  loadHomePage();
  showPage('home');
  initializeCamera();
  initializeAdminControls();
  initializeScrollAnimations();
  initializeCounterAnimations();

  // Initialize blog search
  const blogSearch = document.getElementById('blog-search');
  if (blogSearch) {
    blogSearch.addEventListener('input', handleBlogSearch);
  }

  // Show daily "Did you know" after 5 seconds
  setTimeout(showDidYouKnow, 5000);

  console.log('App initialized successfully'); // Debug log
});

// Home page functions
function loadHomePage() {
  loadTips();
  loadFeaturedBlogs();
  loadDailyQuestion();
}

function loadTips() {
  const tipsContainer = document.getElementById('tips-container');
  if (!tipsContainer) return;

  tipsContainer.innerHTML = '';
  appData.tips.slice(0, 2).forEach(tip => {
    const tipCard = document.createElement('div');
    tipCard.className = 'tip-card';
    tipCard.onclick = () => {
      if (tip.linkToBlog) {
        showBlogPost(tip.linkToBlog);
      }
    };

    tipCard.innerHTML = `
      <span class="tip-icon">${tip.icon}</span>
      <div>
        <strong>${tip.title}</strong><br>
        <span style="font-weight: normal; font-size: 14px;">${tip.content}</span>
      </div>
    `;

    tipsContainer.appendChild(tipCard);
  });
}

function loadFeaturedBlogs() {
  const featuredContainer = document.getElementById('featured-blogs');
  if (!featuredContainer) return;
  
  const featuredPosts = appData.blogPosts.filter(post => post.featured).slice(0, 2);
  featuredContainer.innerHTML = '';
  
  featuredPosts.forEach(post => {
    const blogCard = document.createElement('div');
    blogCard.className = 'blog-featured-card';
    blogCard.onclick = () => showBlogPost(post.id);
    
    blogCard.innerHTML = `
      <div class="blog-card-category">${post.category}</div>
      <h4 class="blog-card-title">${post.title}</h4>
      <p class="blog-card-excerpt">${post.excerpt}</p>
      <div class="blog-card-meta">
        <span>⏱️ ${post.readTime}</span>
        <span>📅 ${formatDate(post.publishDate)}</span>
      </div>
    `;
    
    featuredContainer.appendChild(blogCard);
  });
}

function loadDailyQuestion() {
  const questionText = document.getElementById('daily-question-text');
  const answerText = document.getElementById('daily-answer-text');
  const tipText = document.getElementById('daily-tip');
  
  if (questionText) questionText.textContent = appData.dailyQuestion.question;
  if (answerText) answerText.textContent = appData.dailyQuestion.answer;
  if (tipText) tipText.textContent = appData.dailyQuestion.tip;
}

window.showDailyAnswer = function() {
  const answerDiv = document.getElementById('daily-answer');
  if (answerDiv) {
    answerDiv.classList.remove('hidden');
    showToast('Bạn đã học được điều mới! 🎉', 'success');
  }
};

// Navigate to Search Page
window.navigateToSearch = function() {
  const searchInput = document.getElementById('global-search-input');
  const query = searchInput.value.trim();

  if (query) {
    window.location.href = `search-page.html?q=${encodeURIComponent(query)}`;
  } else {
    window.location.href = 'search-page.html';
  }
};

// Handle Enter key press in search input
window.handleSearchKeyPress = function(event) {
  if (event.key === 'Enter') {
    navigateToSearch();
  }
};

function performSearch(query) {
  const resultsContainer = document.getElementById('global-search-results');
  let results = [];

  // Search blogs
  if (searchFilter === 'all' || searchFilter === 'blog') {
    const blogResults = appData.blogPosts.filter(post =>
      post.title.toLowerCase().includes(query) ||
      post.excerpt.toLowerCase().includes(query) ||
      post.content.toLowerCase().includes(query) ||
      post.tags.some(tag => tag.toLowerCase().includes(query))
    ).map(post => ({
      type: 'blog',
      id: post.id,
      title: post.title,
      excerpt: post.excerpt,
      action: () => showBlogPost(post.id)
    }));
    results = results.concat(blogResults);
  }

  // Search dictionary
  if (searchFilter === 'all' || searchFilter === 'dictionary') {
    Object.entries(appData.meatTypes).forEach(([meatType, meat]) => {
      // Search meat type name
      if (meat.name.toLowerCase().includes(query)) {
        results.push({
          type: 'dictionary',
          id: meatType,
          title: meat.name,
          excerpt: meat.description,
          action: () => showMeatDictionary(meatType)
        });
      }

      // Search freshness levels
      Object.entries(meat.levels).forEach(([level, data]) => {
        if (data.name.toLowerCase().includes(query) ||
            data.properties.toLowerCase().includes(query) ||
            data.signs.toLowerCase().includes(query)) {
          results.push({
            type: 'dictionary',
            id: `${meatType}-${level}`,
            title: `${meat.name} - Level ${level}: ${data.name}`,
            excerpt: data.properties,
            action: () => {
              showMeatDictionary(meatType);
              setTimeout(() => {
                const slider = document.getElementById('freshness-slider');
                if (slider) {
                  // Map level to slider value
                  const value = level * 20;
                  slider.value = value;
                  updateFreshnessLevel(value);
                }
              }, 500);
            }
          });
        }
      });
    });
  }

  displaySearchResults(results, query);
}

function displaySearchResults(results, query) {
  const resultsContainer = document.getElementById('global-search-results');

  if (results.length === 0) {
    resultsContainer.innerHTML = `
      <div class="no-results">
        Không tìm thấy kết quả cho "<strong>${query}</strong>"
      </div>
    `;
    resultsContainer.classList.add('active');
    return;
  }

  resultsContainer.innerHTML = results.slice(0, 8).map(result => `
    <div class="search-result-item" onclick='${result.action.toString().replace(/'/g, "\\'")}; closeSearchResults();'>
      <div class="search-result-type">${result.type === 'blog' ? '📝 Blog' : '📖 Từ điển'}</div>
      <div class="search-result-title">${highlightText(result.title, query)}</div>
      <div class="search-result-excerpt">${highlightText(result.excerpt.substring(0, 100), query)}...</div>
    </div>
  `).join('');

  resultsContainer.classList.add('active');
}

function highlightText(text, query) {
  const regex = new RegExp(`(${query})`, 'gi');
  return text.replace(regex, '<strong style="color: var(--color-primary); background: var(--color-gray-100); padding: 0 2px; border-radius: 2px;">$1</strong>');
}

window.setSearchFilter = function(filter) {
  searchFilter = filter;

  // Update button states
  document.querySelectorAll('.search-filter-btn').forEach(btn => {
    btn.classList.remove('active');
  });
  event.target.classList.add('active');

  // Re-run search if there's a query
  const searchInput = document.getElementById('global-search-input');
  if (searchInput && searchInput.value.trim()) {
    handleGlobalSearch(searchInput.value);
  }
};

function closeSearchResults() {
  const resultsContainer = document.getElementById('global-search-results');
  const searchInput = document.getElementById('global-search-input');

  if (resultsContainer) {
    resultsContainer.classList.remove('active');
  }
  if (searchInput) {
    searchInput.value = '';
  }
}

// Close search results when clicking outside
document.addEventListener('click', function(e) {
  const searchContainer = document.querySelector('.global-search');
  if (searchContainer && !searchContainer.contains(e.target)) {
    closeSearchResults();
  }
});

function showDidYouKnow() {
  const modal = document.getElementById('did-you-know-modal');
  const textElement = document.getElementById('did-you-know-text');
  
  if (modal && textElement) {
    textElement.textContent = appData.didYouKnow[didYouKnowIndex % appData.didYouKnow.length];
    modal.classList.remove('hidden');
    didYouKnowIndex++;
  }
}

window.closeDiDuKnowModal = function() {
  const modal = document.getElementById('did-you-know-modal');
  if (modal) {
    modal.classList.add('hidden');
  }
};

// Blog functions
function loadBlogPage() {
  loadBlogList();
  loadPopularTags();
}

function loadBlogList(category = '', searchTerm = '') {
  const blogList = document.getElementById('blog-list');
  if (!blogList) return;
  
  let filteredPosts = appData.blogPosts;
  
  if (category && category !== 'Tất cả') {
    filteredPosts = filteredPosts.filter(post => post.category === category);
  }
  
  if (searchTerm) {
    filteredPosts = filteredPosts.filter(post => 
      post.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
      post.excerpt.toLowerCase().includes(searchTerm.toLowerCase()) ||
      post.tags.some(tag => tag.toLowerCase().includes(searchTerm.toLowerCase()))
    );
  }
  
  blogList.innerHTML = '';
  
  if (filteredPosts.length === 0) {
    blogList.innerHTML = '<div style="text-align: center; padding: 40px; color: var(--color-text-secondary);">Không tìm thấy bài viết nào phù hợp.</div>';
    return;
  }
  
  filteredPosts.forEach(post => {
    const blogCard = document.createElement('div');
    blogCard.className = 'blog-card';
    blogCard.onclick = () => window.showBlogPost(post.id);

    blogCard.innerHTML = `
      <div class="blog-card-category">${post.category}</div>
      <h3 class="blog-card-title">${post.title}</h3>
      <p class="blog-card-excerpt">${post.excerpt}</p>
      <div class="blog-card-meta">
        <span>👤 ${post.author}</span>
        <span>⏱️ ${post.readTime}</span>
      </div>
      <div class="blog-card-meta" style="margin-top: 8px;">
        <span>📅 ${formatDate(post.publishDate)}</span>
        <div>
          ${post.tags.map(tag => `<span class="tag" style="font-size: 10px; padding: 2px 6px;">${tag}</span>`).join(' ')}
        </div>
      </div>
      <div style="margin-top: 12px; display: flex; justify-content: flex-end;">
        <button class="btn-save-article" style="padding: 6px 12px; background: var(--color-primary); color: white; border: none; border-radius: 6px; cursor: pointer; font-size: 12px; font-weight: 500; transition: all 0.3s;">
          💾 Lưu
        </button>
      </div>
    `;

    // Add save button handler separately
    const saveBtn = blogCard.querySelector('.btn-save-article');
    saveBtn.onclick = (e) => {
      e.stopPropagation();
      handleSaveArticle('blog', post.id, post.title);
    };

    blogList.appendChild(blogCard);
  });
}

function loadPopularTags() {
  const tagsContainer = document.getElementById('popular-tags');
  if (!tagsContainer) return;
  
  tagsContainer.innerHTML = '';
  appData.popularTags.forEach(tag => {
    const tagElement = document.createElement('span');
    tagElement.className = 'tag';
    tagElement.textContent = tag;
    tagElement.onclick = () => handleTagSearch(tag);
    tagsContainer.appendChild(tagElement);
  });
}

window.filterBlogByCategory = function(category) {
  // Update active filter button
  document.querySelectorAll('.filter-btn').forEach(btn => {
    btn.classList.remove('active');
  });
  event.target.classList.add('active');
  
  loadBlogList(category);
};

function handleBlogSearch(event) {
  const searchTerm = event.target.value;
  loadBlogList('', searchTerm);
}

function handleTagSearch(tag) {
  const searchInput = document.getElementById('blog-search');
  if (searchInput) {
    searchInput.value = tag;
    loadBlogList('', tag);
  }
}

function showBlogPost(postId) {
  const post = appData.blogPosts.find(p => p.id === postId);
  if (!post) return;
  
  currentBlogPost = post;
  
  const blogPostContent = document.getElementById('blog-post-content');
  if (!blogPostContent) return;
  
  const isSaved = window.authSystem?.isArticleSaved('blog', post.id);

  blogPostContent.innerHTML = `
    <div class="blog-post-header">
      <div class="blog-post-header-top">
        <div class="blog-card-category">${post.category}</div>
        <button class="save-article-btn ${isSaved ? 'saved' : ''}" onclick="toggleSaveArticle('blog', '${post.id}', '${post.title.replace(/'/g, "\\'")}')">
          <span>${isSaved ? '💾' : '🔖'}</span>
          <span>${isSaved ? 'Đã lưu' : 'Lưu bài viết'}</span>
        </button>
      </div>
      <h1 class="blog-post-title">${post.title}</h1>
      <div class="blog-post-meta">
        <div class="meta-item">
          <span>👤</span>
          <span>${post.author}</span>
        </div>
        <div class="meta-item">
          <span>📅</span>
          <span>${formatDate(post.publishDate)}</span>
        </div>
        <div class="meta-item">
          <span>⏱️</span>
          <span>${post.readTime}</span>
        </div>
      </div>
    </div>
    <div class="blog-post-content">
      ${formatBlogContent(post.content)}
    </div>
    <div class="blog-post-tags">
      <strong>Tags:</strong>
      ${post.tags.map(tag => `<span class="tag">${tag}</span>`).join(' ')}
    </div>
  `;
  
  loadRelatedPosts(post);
  showPage('blog-post');
}

window.showBlogPost = showBlogPost;

function loadRelatedPosts(currentPost) {
  const relatedGrid = document.getElementById('related-posts-grid');
  if (!relatedGrid) return;
  
  // Find posts with similar tags or category
  const relatedPosts = appData.blogPosts
    .filter(post => 
      post.id !== currentPost.id && 
      (post.category === currentPost.category || 
       post.tags.some(tag => currentPost.tags.includes(tag)))
    )
    .slice(0, 3);
  
  relatedGrid.innerHTML = '';
  relatedPosts.forEach(post => {
    const relatedCard = document.createElement('div');
    relatedCard.className = 'blog-featured-card';
    relatedCard.onclick = () => showBlogPost(post.id);
    
    relatedCard.innerHTML = `
      <div class="blog-card-category">${post.category}</div>
      <h4 class="blog-card-title">${post.title}</h4>
      <p class="blog-card-excerpt">${post.excerpt}</p>
      <div class="blog-card-meta">
        <span>⏱️ ${post.readTime}</span>
        <span>📅 ${formatDate(post.publishDate)}</span>
      </div>
    `;
    
    relatedGrid.appendChild(relatedCard);
  });
}

// Dictionary functions
function loadDictionaryPage() {
  selectMeatType('pork');
}

window.selectMeatType = function(meatType) {
  currentMeatType = meatType;
  
  // Update active tab
  document.querySelectorAll('.meat-tab').forEach(tab => {
    tab.classList.remove('active');
    if (tab.textContent.includes(appData.meatTypes[meatType].name)) {
      tab.classList.add('active');
    }
  });
  
  loadMeatContent(meatType);
};

function loadMeatContent(meatType) {
  const meat = appData.meatTypes[meatType];
  if (!meat) return;

  const meatContent = document.getElementById('meat-content');
  if (!meatContent) return;

  meatContent.innerHTML = `
    <div class="meat-description">
      <p>${meat.description}</p>
    </div>
    <div class="freshness-slider-container">
      <h3 style="text-align: center; margin-bottom: var(--space-8); font-family: var(--font-display); color: var(--color-primary);">
        Trượt để xem các mức độ tươi
      </h3>
      <div class="slider-wrapper">
        <div class="slider-track"></div>
        <input
          type="range"
          min="0"
          max="100"
          value="100"
          class="slider-input"
          id="freshness-slider"
          oninput="updateFreshnessLevel(this.value)"
        >
      </div>
      <div class="slider-labels">
        <div class="slider-label">Level 1<br>Không an toàn</div>
        <div class="slider-label">Level 2<br>Gần hỏng</div>
        <div class="slider-label">Level 3<br>Cần lưu ý</div>
        <div class="slider-label">Level 4<br>Tươi dùng ngay</div>
        <div class="slider-label">Level 5<br>Tươi mới</div>
      </div>
      <div class="freshness-card" id="freshness-card">
        <div class="water-fill" id="water-fill"></div>
        <div class="freshness-card-content" id="card-content">
          <!-- Content will be populated by slider -->
        </div>
      </div>
    </div>
  `;

  // Initialize with level 5
  updateFreshnessLevel(100);
}

window.updateFreshnessLevel = function(value) {
  sliderValue = parseInt(value);

  // Map 0-100 to levels 1-5
  let level;
  if (sliderValue <= 20) level = '1';
  else if (sliderValue <= 40) level = '2';
  else if (sliderValue <= 60) level = '3';
  else if (sliderValue <= 80) level = '4';
  else level = '5';

  const meat = appData.meatTypes[currentMeatType];
  const levelData = meat.levels[level];

  // Update water fill height and color
  const waterFill = document.getElementById('water-fill');
  if (waterFill) {
    waterFill.style.height = `${sliderValue}%`;
    waterFill.style.setProperty('--level-color', levelData.color);
    waterFill.style.background = levelData.color;
  }

  // Update card content
  const cardContent = document.getElementById('card-content');
  if (cardContent) {
    cardContent.innerHTML = `
      <div class="freshness-card-header">
        <div class="level-percentage" style="color: ${levelData.color};">${sliderValue}%</div>
        <div class="level-info">
          <h3>Level ${level}: ${levelData.name}</h3>
          <p>${meat.name}</p>
        </div>
      </div>
      <div class="freshness-details">
        <div class="detail-item">
          <h5>🔍 Tính chất</h5>
          <p>${levelData.properties}</p>
        </div>
        <div class="detail-item">
          <h5>👀 Dấu hiệu nhận biết</h5>
          <p>${levelData.signs}</p>
        </div>
        <div class="detail-item">
          <h5>❄️ Cách bảo quản</h5>
          <p>${levelData.storage}</p>
        </div>
        <div class="detail-item">
          <h5>🍳 Chế biến</h5>
          <p>${levelData.cooking}</p>
        </div>
        <div class="detail-item">
          <h5>⚠️ Cảnh báo</h5>
          <p>${levelData.warnings}</p>
        </div>
        <div class="detail-item">
          <h5>⏰ Thời gian sử dụng</h5>
          <p>${levelData.timeframe}</p>
        </div>
      </div>
    `;
  }

  // Update the freshness card border color
  const freshnessCard = document.getElementById('freshness-card');
  if (freshnessCard) {
    freshnessCard.style.borderColor = levelData.color;
  }
};

function showMeatDetail(meatType, level) {
  currentMeatType = meatType;
  currentLevel = level;
  
  const meat = appData.meatTypes[meatType];
  const levelData = meat.levels[level];
  
  // Update hero section
  const heroSection = document.getElementById('detail-hero');
  heroSection.style.background = `linear-gradient(135deg, ${levelData.color}, ${levelData.color}dd)`;
  heroSection.innerHTML = `
    <h2 class="detail-hero__title">${levelData.name}</h2>
    <p class="detail-hero__level">Level ${level} - ${meat.name}</p>
  `;
  
  // Update content sections
  const contentSections = document.getElementById('detail-content');
  contentSections.innerHTML = `
    <div class="detail-section">
      <h4 class="detail-section__title">🔍 Tính chất</h4>
      <p class="detail-section__content">${levelData.properties}</p>
    </div>
    <div class="detail-section">
      <h4 class="detail-section__title">👀 Dấu hiệu nhận biết</h4>
      <p class="detail-section__content">${levelData.signs}</p>
    </div>
    <div class="detail-section">
      <h4 class="detail-section__title">❄️ Cách bảo quản</h4>
      <p class="detail-section__content">${levelData.storage}</p>
    </div>
    <div class="detail-section">
      <h4 class="detail-section__title">🍳 Chế biến</h4>
      <p class="detail-section__content">${levelData.cooking}</p>
    </div>
    <div class="detail-section">
      <h4 class="detail-section__title">⚠️ Cảnh báo</h4>
      <p class="detail-section__content">${levelData.warnings}</p>
    </div>
    <div class="detail-section">
      <h4 class="detail-section__title">⏰ Thời gian sử dụng</h4>
      <p class="detail-section__content">${levelData.timeframe}</p>
    </div>
  `;
  
  // Load FAQ
  loadMeatFAQ(meat);
  
  // Update back button
  document.getElementById('back-to-dict').onclick = () => showPage('dictionary');
  
  showPage('meat-detail');
  setTimeout(() => {
  window.scrollTo({ top: 0, left: 0, behavior: 'auto' });
  const main = document.querySelector('.main');
  if (main) main.scrollTop = 0;
  }, 0);
}

function loadMeatFAQ(meat) {
  const faqContainer = document.getElementById('meat-faq');
  if (!faqContainer || !meat.faq) return;
  
  faqContainer.innerHTML = `
    <h4 class="faq-title">❓ Câu hỏi thường gặp</h4>
    ${meat.faq.map(item => `
      <div class="faq-item">
        <div class="faq-question">${item.q}</div>
        <p class="faq-answer">${item.a}</p>
      </div>
    `).join('')}
  `;
}

// Detection functions
function initializeCamera() {
  const startCameraBtn = document.getElementById('start-camera');
  const takePhotoBtn = document.getElementById('take-photo');
  const retakePhotoBtn = document.getElementById('retake-photo');
  const analyzePhotoBtn = document.getElementById('analyze-photo');
  
  if (startCameraBtn) startCameraBtn.addEventListener('click', startCamera);
  if (takePhotoBtn) takePhotoBtn.addEventListener('click', takePhoto);
  if (retakePhotoBtn) retakePhotoBtn.addEventListener('click', retakePhoto);
  if (analyzePhotoBtn) analyzePhotoBtn.addEventListener('click', analyzePhoto);
}

function resetDetectionState() {
  const startBtn = document.getElementById('start-camera');
  const takeBtn = document.getElementById('take-photo');
  const retakeBtn = document.getElementById('retake-photo');
  const analyzeBtn = document.getElementById('analyze-photo');
  const resultDiv = document.getElementById('analysis-result');
  const video = document.getElementById('video');
  const capturedImage = document.getElementById('captured-image');
  
  if (startBtn) startBtn.classList.remove('hidden');
  if (takeBtn) takeBtn.classList.add('hidden');
  if (retakeBtn) retakeBtn.classList.add('hidden');
  if (analyzeBtn) analyzeBtn.classList.add('hidden');
  if (resultDiv) resultDiv.classList.add('hidden');
  
  if (video) video.style.display = 'block';
  if (capturedImage) capturedImage.classList.add('hidden');
  
  // Stop any existing video stream
  stopCamera();
}

async function startCamera() {
  try {
    showLoading(true);

    const stream = await navigator.mediaDevices.getUserMedia({
      video: {
        facingMode: 'environment',
        width: { ideal: 1920 },
        height: { ideal: 1080 }
      }
    });

    showLoading(false);

    const video = document.getElementById('video');
    const container = document.querySelector('.camera-container');
    video.srcObject = stream;
    videoStream = stream;

    // Add ready state animation
    if (container) {
      container.classList.add('camera-ready');
    }

    // Update button states with animation
    const startBtn = document.getElementById('start-camera');
    const takeBtn = document.getElementById('take-photo');

    if (startBtn) startBtn.classList.add('hidden');
    if (takeBtn) {
      takeBtn.classList.remove('hidden');
      takeBtn.style.animation = 'fadeIn 0.3s ease-out';
    }

    // Haptic feedback
    if ('vibrate' in navigator) {
      navigator.vibrate([50, 30, 50]);
    }

    showToast('Camera đã sẵn sàng 📹', 'success');
  } catch (error) {
    showLoading(false);
    console.error('Error accessing camera:', error);
    showToast('Không thể truy cập camera. Vui lòng kiểm tra quyền.', 'error');
  }
}

function takePhoto() {
  const video = document.getElementById('video');
  const canvas = document.getElementById('canvas');
  const capturedImage = document.getElementById('captured-image');
  const capturedImg = document.getElementById('captured-img');
  const container = document.querySelector('.camera-container');

  // Flash effect
  if (container) {
    container.style.animation = 'flash 0.3s';
    setTimeout(() => {
      container.style.animation = '';
    }, 300);
  }

  // Haptic feedback
  if ('vibrate' in navigator) {
    navigator.vibrate(30);
  }

  // Set canvas dimensions to match video
  canvas.width = video.videoWidth;
  canvas.height = video.videoHeight;

  // Draw current video frame to canvas
  const ctx = canvas.getContext('2d');
  ctx.drawImage(video, 0, 0);

  // Get image data with high quality
  const imageDataUrl = canvas.toDataURL('image/jpeg', 0.95);
  capturedImg.src = imageDataUrl;

  // Show captured image, hide video with transition
  video.style.display = 'none';
  capturedImage.classList.remove('hidden');
  capturedImage.style.animation = 'fadeIn 0.4s ease-out';

  // Remove camera ready state
  if (container) {
    container.classList.remove('camera-ready');
  }

  // Update button states
  document.getElementById('take-photo').classList.add('hidden');
  document.getElementById('retake-photo').classList.remove('hidden');
  document.getElementById('analyze-photo').classList.remove('hidden');

  showToast('Đã chụp ảnh thành công! 📸', 'success');
}

// Add flash animation
const style = document.createElement('style');
style.textContent = `
  @keyframes flash {
    0%, 100% { opacity: 1; }
    50% { opacity: 0.3; background: white; }
  }
`;
document.head.appendChild(style);

function retakePhoto() {
  const video = document.getElementById('video');
  const capturedImage = document.getElementById('captured-image');
  
  // Show video, hide captured image
  video.style.display = 'block';
  capturedImage.classList.add('hidden');
  
  // Update button states
  document.getElementById('take-photo').classList.remove('hidden');
  document.getElementById('retake-photo').classList.add('hidden');
  document.getElementById('analyze-photo').classList.add('hidden');
  
  // Hide analysis result
  document.getElementById('analysis-result').classList.add('hidden');
}

async function analyzePhoto() {
  try {
    showLoading(true);

    const canvas = document.getElementById('canvas');
    const capturedImage = document.getElementById('captured-image');
    const resultContainer = document.getElementById('analysis-result');

    // Kiểm tra đã chụp ảnh chưa
    if (!canvas || !capturedImage || capturedImage.classList.contains('hidden')) {
      showLoading(false);
      showToast('Bạn chưa chụp ảnh 📸', 'error');
      return;
    }

    // Hiển thị trạng thái đang phân tích
    if (resultContainer) {
      resultContainer.classList.remove('hidden');
      resultContainer.innerHTML = `
        <div class="card"><div class="card__body">
          <div class="status status--info">⏳ Đang phân tích trên máy chủ...</div>
        </div></div>`;
    }

    // Lấy blob JPEG từ canvas (chất lượng 0.9)
    const file = await new Promise((resolve, reject) => {
      try {
        canvas.toBlob((blob) => {
          if (!blob) return reject(new Error('Không thể tạo ảnh từ canvas'));
          resolve(new File([blob], 'capture.jpg', { type: 'image/jpeg' }));
        }, 'image/jpeg', 0.9);
      } catch (e) {
        reject(e);
      }
    });

    // Gọi API qua hàm đã có trong api_integration.js
    if (typeof window.predictViaApi !== 'function') {
      // Fallback: thử gọi trực tiếp nếu bạn import khác cách
      if (typeof predictViaApi !== 'function') {
        throw new Error('Không tìm thấy hàm predictViaApi. Hãy đảm bảo api_integration.js được load trước và đặt API_BASE = "/api".');
      }
      await predictViaApi(file);
    } else {
      await window.predictViaApi(file);
    }

    showToast('Phân tích AI hoàn tất! 🎉', 'success');
  } catch (err) {
    console.error(err);
    const resultContainer = document.getElementById('analysis-result');
    if (resultContainer) {
      resultContainer.classList.remove('hidden');
      resultContainer.innerHTML = `
        <div class="card"><div class="card__body">
          <div class="status status--error">❌ Lỗi phân tích: ${String(err.message || err)}</div>
        </div></div>`;
    }
  } finally {
    showLoading(false);
  }
}

function stopCamera() {
  if (videoStream) {
    videoStream.getTracks().forEach(track => track.stop());
    videoStream = null;
  }
}

// Admin functions
function initializeAdminControls() {
  const meatTypeSelect = document.getElementById('meat-type-select');
  const levelSelect = document.getElementById('freshness-level-select');
  const blogSelect = document.getElementById('blog-select');
  
  if (meatTypeSelect && levelSelect) {
    meatTypeSelect.addEventListener('change', loadMeatData);
    levelSelect.addEventListener('change', loadMeatData);
  }
  
  if (blogSelect) {
    loadBlogSelect();
    blogSelect.addEventListener('change', loadBlogForEdit);
  }
}

window.adminLogin = function() {
  const username = document.getElementById('admin-username').value;
  const password = document.getElementById('admin-password').value;
  
  if (username === 'admin' && password === '123456') {
    isLoggedIn = true;
    document.getElementById('admin-login').classList.add('hidden');
    document.getElementById('admin-dashboard').classList.remove('hidden');
    showToast('Đăng nhập thành công! 🎉', 'success');
    showAdminSection('blog');
    loadMeatData();
  } else {
    showToast('Sai tên đăng nhập hoặc mật khẩu! ❌', 'error');
  }
};

window.adminLogout = function() {
  isLoggedIn = false;
  document.getElementById('admin-login').classList.remove('hidden');
  document.getElementById('admin-dashboard').classList.add('hidden');
  
  // Reset form
  document.getElementById('admin-username').value = '';
  document.getElementById('admin-password').value = '';
  
  showToast('Đã đăng xuất! 👋', 'success');
};

window.showAdminSection = function(section) {
  // Update active tab
  document.querySelectorAll('.admin-tab').forEach(tab => {
    tab.classList.remove('active');
  });
  event.target.classList.add('active');
  
  // Show/hide sections
  document.querySelectorAll('.admin-section').forEach(sec => {
    sec.classList.remove('active');
  });
  document.getElementById(`admin-${section}`).classList.add('active');
};

// Blog management
function loadBlogSelect() {
  const blogSelect = document.getElementById('blog-select');
  if (!blogSelect) return;
  
  blogSelect.innerHTML = '<option value="">Chọn bài viết để chỉnh sửa</option>';
  appData.blogPosts.forEach(post => {
    const option = document.createElement('option');
    option.value = post.id;
    option.textContent = post.title;
    blogSelect.appendChild(option);
  });
}

window.showBlogEditor = function() {
  const editor = document.getElementById('blog-editor');
  if (editor) {
    editor.classList.remove('hidden');
    
    // Reset form
    document.getElementById('blog-title').value = '';
    document.getElementById('blog-excerpt').value = '';
    document.getElementById('blog-category').value = 'An toàn thực phẩm';
    document.getElementById('blog-content').value = '';
    document.getElementById('blog-tags').value = '';
  }
};

window.closeBlogEditor = function() {
  const editor = document.getElementById('blog-editor');
  if (editor) {
    editor.classList.add('hidden');
  }
};

function loadBlogForEdit() {
  const blogId = parseInt(document.getElementById('blog-select').value);
  if (!blogId) return;
  
  const post = appData.blogPosts.find(p => p.id === blogId);
  if (!post) return;
  
  document.getElementById('blog-title').value = post.title;
  document.getElementById('blog-excerpt').value = post.excerpt;
  document.getElementById('blog-category').value = post.category;
  document.getElementById('blog-content').value = post.content;
  document.getElementById('blog-tags').value = post.tags.join(', ');
  
  showBlogEditor();
}

window.saveBlogPost = function() {
  if (!isLoggedIn) return;
  
  const title = document.getElementById('blog-title').value;
  const excerpt = document.getElementById('blog-excerpt').value;
  const category = document.getElementById('blog-category').value;
  const content = document.getElementById('blog-content').value;
  const tags = document.getElementById('blog-tags').value.split(',').map(tag => tag.trim());
  
  if (!title || !excerpt || !content) {
    showToast('Vui lòng điền đầy đủ thông tin!', 'error');
    return;
  }
  
  const selectedId = parseInt(document.getElementById('blog-select').value);
  
  if (selectedId) {
    // Update existing post
    const postIndex = appData.blogPosts.findIndex(p => p.id === selectedId);
    if (postIndex !== -1) {
      appData.blogPosts[postIndex] = {
        ...appData.blogPosts[postIndex],
        title, excerpt, category, content, tags
      };
    }
  } else {
    // Create new post
    const newPost = {
      id: Math.max(...appData.blogPosts.map(p => p.id)) + 1,
      title, excerpt, content, category, tags,
      readTime: Math.ceil(content.length / 1000) + ' phút',
      publishDate: new Date().toISOString().split('T')[0],
      author: 'Admin',
      featured: false
    };
    appData.blogPosts.unshift(newPost);
  }
  
  showToast('Đã lưu bài viết thành công! 💾', 'success');
  loadBlogSelect();
  closeBlogEditor();
};

window.previewBlogPost = function() {
  const title = document.getElementById('blog-title').value;
  const excerpt = document.getElementById('blog-excerpt').value;
  const category = document.getElementById('blog-category').value;
  const content = document.getElementById('blog-content').value;
  const tags = document.getElementById('blog-tags').value.split(',').map(tag => tag.trim());
  
  const previewPost = {
    id: 999,
    title, excerpt, content, category, tags,
    readTime: Math.ceil(content.length / 1000) + ' phút',
    publishDate: new Date().toISOString().split('T')[0],
    author: 'Admin (Bản xem trước)',
    featured: false
  };
  
  currentBlogPost = previewPost;
  showBlogPost(999);
};

// Meat management
window.loadMeatData = function() {
  if (!isLoggedIn) return;
  
  const meatType = document.getElementById('meat-type-select').value;
  const level = document.getElementById('freshness-level-select').value;
  
  const data = appData.meatTypes[meatType].levels[level];
  
  document.getElementById('edit-name').value = data.name;
  document.getElementById('edit-color').value = data.color;
  document.getElementById('edit-properties').value = data.properties;
  document.getElementById('edit-signs').value = data.signs;
  document.getElementById('edit-storage').value = data.storage;
  document.getElementById('edit-cooking').value = data.cooking;
  document.getElementById('edit-warnings').value = data.warnings;
  
  showToast('Đã tải dữ liệu! 📋', 'success');
};

window.saveMeatData = function() {
  if (!isLoggedIn) return;
  
  const meatType = document.getElementById('meat-type-select').value;
  const level = document.getElementById('freshness-level-select').value;
  
  // Update data (in memory only, since no backend)
  appData.meatTypes[meatType].levels[level] = {
    name: document.getElementById('edit-name').value,
    color: document.getElementById('edit-color').value,
    properties: document.getElementById('edit-properties').value,
    signs: document.getElementById('edit-signs').value,
    storage: document.getElementById('edit-storage').value,
    cooking: document.getElementById('edit-cooking').value,
    warnings: document.getElementById('edit-warnings').value,
    timeframe: appData.meatTypes[meatType].levels[level].timeframe
  };
  
  showToast('Đã lưu thay đổi! 💾', 'success');
};

window.previewMeatData = function() {
  if (!isLoggedIn) return;
  
  const meatType = document.getElementById('meat-type-select').value;
  const level = document.getElementById('freshness-level-select').value;
  
  showMeatDetail(meatType, level);
};

// Utility functions
function showLoading(show) {
  const loading = document.getElementById('loading');
  if (loading) {
    if (show) {
      loading.classList.remove('hidden');
    } else {
      loading.classList.add('hidden');
    }
  }
}

function showToast(message, type = '') {
  const toast = document.getElementById('toast');
  const toastMessage = document.getElementById('toast-message');
  
  if (toast && toastMessage) {
    toastMessage.textContent = message;
    toast.className = `toast ${type}`;
    toast.classList.remove('hidden');
    
    setTimeout(() => {
      toast.classList.add('hidden');
    }, 3000);
  }
}

function formatDate(dateString) {
  const date = new Date(dateString);
  return date.toLocaleDateString('vi-VN', {
    year: 'numeric',
    month: 'long',
    day: 'numeric'
  });
}

function formatBlogContent(content) {
  return content
    .replace(/\n\n/g, '</p><p>')
    .replace(/\*\*(.*?)\*\*/g, '<strong>$1</strong>')
    .replace(/^(.+)$/gm, '<p>$1</p>')
    .replace(/❌|✅/g, '<span style="font-size: 18px;">$&</span>');
}

console.log('App script loaded successfully'); // Debug log

// ============================================
// SAVE ARTICLE HANDLER
// ============================================

window.handleSaveArticle = async function(articleType, articleId, articleTitle) {
  if (!window.authSystem || !window.authSystem.isAuthenticated()) {
    showToast('Vui lòng đăng nhập để lưu bài viết', 'error');
    openAuthModal();
    return;
  }

  const result = await window.authSystem.saveArticle(articleType, articleId, articleTitle);
  if (!result.error) {
    // Update button state
    const buttons = document.querySelectorAll(`button[onclick*="${articleId}"]`);
    buttons.forEach(btn => {
      if (btn.textContent.includes('Lưu')) {
        btn.style.background = 'var(--color-success)';
        btn.innerHTML = '✓ Đã lưu';
        btn.disabled = true;
      }
    });
  }
};

// ============================================
// SAVE DETECTION RESULT HANDLER
// ============================================

window.handleSaveDetection = async function(meatType, freshnessLevel, imageUrl, resultData) {
  if (!window.authSystem || !window.authSystem.isAuthenticated()) {
    showToast('Vui lòng đăng nhập để lưu kết quả', 'error');
    openAuthModal();
    return;
  }

  await window.authSystem.saveDetectionHistory(meatType, freshnessLevel, imageUrl, resultData);
};

// ============================================
// AUTH UI HANDLERS
// ============================================

function handleUserIconClick() {
  if (window.authSystem && window.authSystem.isAuthenticated()) {
    // User is logged in -> show profile
    openProfileModal();
  } else {
    // User not logged in -> show auth modal
    openAuthModal();
  }
}

function openAuthModal() {
  const modal = document.getElementById('auth-modal');
  if (modal) {
    modal.classList.remove('hidden');
    document.body.style.overflow = 'hidden';
  }
}

function closeAuthModal() {
  const modal = document.getElementById('auth-modal');
  if (modal) {
    modal.classList.add('hidden');
    document.body.style.overflow = '';
  }
}

function switchAuthTab(tab) {
  // Update tabs
  document.querySelectorAll('.auth-tab').forEach(t => {
    t.classList.toggle('active', t.dataset.tab === tab);
  });

  // Update forms
  document.getElementById('login-form').classList.toggle('active', tab === 'login');
  document.getElementById('register-form').classList.toggle('active', tab === 'register');
}

async function handleLogin(event) {
  event.preventDefault();

  const username = document.getElementById('login-username').value;
  const password = document.getElementById('login-password').value;

  if (!window.authSystem) {
    showToast('Hệ thống auth chưa sẵn sàng', 'error');
    return;
  }

  showLoading();
  const { data, error } = await window.authSystem.login(username, password);
  hideLoading();

  if (error) {
    showToast('Sai tên đăng nhập hoặc mật khẩu', 'error');
  } else {
    closeAuthModal();
    showToast('Đăng nhập thành công! 🎉', 'success');
  }
}

async function handleRegister(event) {
  event.preventDefault();

  const username = document.getElementById('register-username').value;
  const displayName = document.getElementById('register-displayname').value;
  const password = document.getElementById('register-password').value;
  const passwordConfirm = document.getElementById('register-password-confirm').value;

  if (password !== passwordConfirm) {
    showToast('Mật khẩu xác nhận không khớp', 'error');
    return;
  }

  if (!window.authSystem) {
    showToast('Hệ thống auth chưa sẵn sàng', 'error');
    return;
  }

  showLoading();
  const { data, error } = await window.authSystem.register(username, password, displayName);
  hideLoading();

  if (error) {
    if (error.message && error.message.includes('duplicate')) {
      showToast('Tên đăng nhập đã tồn tại', 'error');
    } else {
      showToast('Lỗi khi đăng ký: ' + (error.message || 'Vui lòng thử lại'), 'error');
    }
  } else {
    closeAuthModal();
    showToast('Đăng ký thành công! Chào mừng bạn! 🎉', 'success');
  }
}

async function handleLogout() {
  if (!window.authSystem) return;

  await window.authSystem.logout();
  closeProfileModal();
  showToast('Đã đăng xuất', 'success');
}

// ============================================
// PROFILE MODAL
// ============================================

async function openProfileModal() {
  if (!window.authSystem || !window.authSystem.isAuthenticated()) {
    openAuthModal();
    return;
  }

  const profile = window.authSystem.getCurrentProfile();
  if (!profile) return;

  // Update profile info
  document.getElementById('profile-display-name').textContent = profile.display_name || profile.username;
  document.getElementById('profile-username').textContent = '@' + profile.username;
  const roleEl = document.getElementById('profile-role');
  roleEl.textContent = profile.role === 'admin' ? 'Admin' : 'User';
  roleEl.className = 'profile-role' + (profile.role === 'admin' ? ' admin' : '');

  // Load history and saved items
  await loadUserHistory();
  await loadSavedArticles();

  // Show modal
  const modal = document.getElementById('profile-modal');
  if (modal) {
    modal.classList.remove('hidden');
    document.body.style.overflow = 'hidden';
  }
}

function closeProfileModal() {
  const modal = document.getElementById('profile-modal');
  if (modal) {
    modal.classList.add('hidden');
    document.body.style.overflow = '';
  }
}

function switchProfileTab(tab) {
  // Update tabs
  document.querySelectorAll('.profile-tab').forEach(t => {
    t.classList.toggle('active', t.textContent.toLowerCase().includes(tab));
  });

  // Update content
  document.getElementById('profile-history').classList.toggle('active', tab === 'history');
  document.getElementById('profile-saved').classList.toggle('active', tab === 'saved');
}

async function loadUserHistory() {
  if (!window.authSystem) return;

  const history = await window.authSystem.getDetectionHistory(20);
  const listEl = document.getElementById('history-list');

  if (!history || history.length === 0) {
    listEl.innerHTML = '<p class="empty-state">Chưa có lịch sử kiểm tra</p>';
    return;
  }

  listEl.innerHTML = history.map(item => {
    const date = new Date(item.detected_at).toLocaleString('vi-VN');
    const meatTypes = {
      pork: '🐷 Thịt Heo',
      beef: '🐮 Thịt Bò',
      chicken: '🐔 Thịt Gà'
    };

    return `
      <div class="history-item">
        <div class="history-item-header">
          <span class="history-item-title">${meatTypes[item.meat_type] || item.meat_type}</span>
          <div class="history-item-actions">
            <span class="freshness-badge level-${item.freshness_level}">Độ tươi: ${item.freshness_level}/5</span>
            <button class="btn btn--sm btn--outline" onclick="deleteHistoryItem('${item.id}')">Xóa</button>
          </div>
        </div>
        <div class="history-item-meta">
          <span>📅 ${date}</span>
        </div>
      </div>
    `;
  }).join('');
}

async function deleteHistoryItem(historyId) {
  if (!window.authSystem) return;

  await window.authSystem.deleteDetectionHistory(historyId);
  await loadUserHistory();
}

async function loadSavedArticles() {
  if (!window.authSystem) return;

  const saved = await window.authSystem.getSavedArticles();
  const listEl = document.getElementById('saved-list');

  if (!saved || saved.length === 0) {
    listEl.innerHTML = '<p class="empty-state">Chưa có bài viết đã lưu</p>';
    return;
  }

  listEl.innerHTML = saved.map(item => {
    const date = new Date(item.saved_at).toLocaleDateString('vi-VN');
    const typeIcon = item.article_type === 'blog' ? '📝' : '📖';

    return `
      <div class="saved-item">
        <div class="saved-item-header">
          <span class="saved-item-title">${typeIcon} ${item.article_title}</span>
          <button class="btn btn--sm btn--outline" onclick="removeSavedArticle('${item.article_type}', '${item.article_id}')">Xóa</button>
        </div>
        <div class="saved-item-date">Đã lưu: ${date}</div>
      </div>
    `;
  }).join('');
}

async function removeSavedArticle(type, id) {
  if (!window.authSystem) return;

  await window.authSystem.unsaveArticle(type, id);
  await loadSavedArticles();
}

async function toggleSaveArticle(type, id, title) {
  if (!window.authSystem) {
    showToast('Vui lòng đăng nhập để lưu bài viết', 'error');
    return;
  }

  const isSaved = window.authSystem.isArticleSaved(type, id);

  if (isSaved) {
    await window.authSystem.unsaveArticle(type, id);
  } else {
    await window.authSystem.saveArticle(type, id, title);
  }

  // Reload blog post to update button state
  if (currentBlogPost) {
    showBlogPost(currentBlogPost.id);
  }
}

window.toggleSaveArticle = toggleSaveArticle;

// ============================================
// UPDATE USER ICON BASED ON AUTH STATE
// ============================================

function updateUserIcon() {
  const iconBtn = document.getElementById('user-icon-btn');
  const icon = document.getElementById('user-icon');

  if (!window.authSystem || !iconBtn || !icon) return;

  if (window.authSystem.isAuthenticated()) {
    const profile = window.authSystem.getCurrentProfile();
    if (profile) {
      if (profile.role === 'admin') {
        icon.textContent = '⚙️';
        iconBtn.classList.add('admin');
        iconBtn.classList.remove('authenticated');
        iconBtn.title = profile.display_name || profile.username + ' (Admin)';
      } else {
        icon.textContent = '👤';
        iconBtn.classList.add('authenticated');
        iconBtn.classList.remove('admin');
        iconBtn.title = profile.display_name || profile.username;
      }
    }
  } else {
    icon.textContent = '👤';
    iconBtn.classList.remove('authenticated', 'admin');
    iconBtn.title = 'Đăng nhập';
  }
}

// Call on auth state change
if (window.authSystem) {
  const originalInitialize = window.authSystem.initialize;
  window.authSystem.initialize = async function() {
    await originalInitialize.call(this);
    updateUserIcon();
  };
}

// Update icon on page load
setTimeout(updateUserIcon, 1000);

